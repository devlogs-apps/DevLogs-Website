"use server"

import { contactSchema } from "@/lib/contact-schema"

export type ContactResult = {
  success: boolean
  message: string
}

export async function submitContact(raw: unknown): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
    }
  }

  // No mail provider is wired up yet — record the enquiry server-side. Swap this
  // for an email/CRM call (Resend, etc.) when one is configured.
  console.info("[contact] new enquiry", {
    name: parsed.data.name,
    email: parsed.data.email,
    subject: parsed.data.subject || "(none)",
  })

  return {
    success: true,
    message: "Thanks. Your message landed. We will reply within a day or two.",
  }
}
