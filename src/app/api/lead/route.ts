import { NextResponse } from "next/server";
import { getAdminClient } from "@/lib/supabase";
import { sendOperatorNotification } from "@/lib/resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  first_name?: string;
  last_name?: string;
  phone?: string;
  email?: string;
  location?: "hesperia" | "la_verne";
};

function bad(msg: string, status = 400) {
  return NextResponse.json({ ok: false, error: msg }, { status });
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return bad("Invalid JSON body");
  }

  const { first_name, last_name, phone, email, location } = body;

  if (!first_name?.trim() || !last_name?.trim()) return bad("Name required");
  if (!phone?.trim()) return bad("Phone required");
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return bad("Valid email required");
  }
  if (location !== "hesperia" && location !== "la_verne") {
    return bad("Location must be hesperia or la_verne");
  }

  try {
    const supabase = getAdminClient();
    const { error: insertError } = await supabase.from("leads").insert({
      first_name,
      last_name,
      phone,
      email,
      location,
    });

    if (insertError) {
      console.error("supabase insert error", insertError);
      return bad("Could not save lead", 500);
    }

    try {
      await sendOperatorNotification({
        first_name,
        last_name,
        phone,
        email,
        location,
      });
    } catch (notifyError) {
      // Lead is saved; notification failure should not block the visitor.
      console.error("resend notify error", notifyError);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/lead unexpected error", err);
    return bad("Server error", 500);
  }
}
