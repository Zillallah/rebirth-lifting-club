import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const fromAddress = process.env.RESEND_FROM ?? "Rebirth Lifting Club <noreply@rebirthclubmanagement.com>";
const operatorAddress = process.env.OPERATOR_EMAIL ?? "admin@rebirthclubmanagement.com";

type LeadPayload = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  location: "hesperia" | "la_verne";
};

export async function sendOperatorNotification(lead: LeadPayload) {
  if (!apiKey) {
    throw new Error("RESEND_API_KEY missing.");
  }
  const resend = new Resend(apiKey);

  const stationLabel =
    lead.location === "hesperia" ? "Hesperia, CA" : "La Verne, CA";

  const subject = `New free-session lead — ${lead.first_name} ${lead.last_name} · ${stationLabel}`;

  const text = [
    `New lead from rebirthliftingclub.com`,
    ``,
    `Name:     ${lead.first_name} ${lead.last_name}`,
    `Phone:    ${lead.phone}`,
    `Email:    ${lead.email}`,
    `Station:  ${stationLabel}`,
    ``,
    `Reach out within 24 hours.`,
  ].join("\n");

  await resend.emails.send({
    from: fromAddress,
    to: operatorAddress,
    subject,
    text,
  });
}
