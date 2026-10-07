import type { Metadata } from "next"
import { LegalShell, PRIVACY_LAST_UPDATED } from "@/components/legal/legal-shell"
import { PRIVACY_TOC, PrivacyContent } from "@/components/legal/privacy-content"

export const metadata: Metadata = {
  title: "Privacy Policy · DevLogs",
  description:
    "How DevLogs collects, uses and protects your data across every app we publish on Google Play. GDPR, CCPA, COPPA and Google Play compliant.",
}

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      kind="Privacy Policy"
      headline={
        <>
          How DevLogs handles{" "}
          your data.
        </>
      }
      intro="One privacy policy for every app we publish. It explains what we collect, why, and the control you have over it."
      lastUpdated={PRIVACY_LAST_UPDATED}
      badge="Applies to all DevLogs apps"
      toc={PRIVACY_TOC}
    >
      <PrivacyContent />
    </LegalShell>
  )
}
