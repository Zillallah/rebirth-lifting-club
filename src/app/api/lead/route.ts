import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// TODO [operator-verify]: Supabase + Resend pipeline not yet wired.
// Expected wiring:
//   - Insert lead into Supabase `leads` table via service-role key
//     (env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
//   - Send operator notification via Resend
//     (env: RESEND_API_KEY, LEAD_NOTIFICATION_TO, LEAD_NOTIFICATION_FROM)
//   - Send visitor confirmation via Resend (same env)
// Until wired, ThePass form short-circuits client-side (setSubmitted true)
// so the UI ships; this endpoint exists only so the route + runtime are
// pinned for when the integration lands.

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }
  return NextResponse.json(
    { ok: false, error: "Lead pipeline not yet wired. See route handler TODO." },
    { status: 501 }
  );
}
