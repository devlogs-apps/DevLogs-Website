import type { ReactNode } from "react"
import { Callout, LegalShell, LEGAL_LAST_UPDATED } from "./legal-shell"
import { PRIVACY_TOC, PrivacyContent } from "./privacy-content"
import { TERMS_TOC, TermsContent } from "./terms-content"

export function PrivacyAppPage({
  appName,
  disclaimer,
}: {
  appName: string
  /** Optional notice shown above the policy, e.g. a fan-made / trademark disclaimer. */
  disclaimer?: ReactNode
}) {
  return (
    <LegalShell
      kind="Privacy Policy"
      headline={<span className="text-brand italic">{appName}</span>}
      intro={`How the ${appName} app collects, uses and protects your data, and the control you have over it.`}
      lastUpdated={LEGAL_LAST_UPDATED}
      badge="Google Play"
      toc={PRIVACY_TOC}
    >
      {disclaimer ? <Callout title="Disclaimer">{disclaimer}</Callout> : null}
      <PrivacyContent appName={appName} />
    </LegalShell>
  )
}

export function TermsAppPage({ appName }: { appName: string }) {
  return (
    <LegalShell
      kind="Terms & Conditions"
      headline={<span className="text-brand italic">{appName}</span>}
      intro={`The terms that apply when you download and use the ${appName} app.`}
      lastUpdated={LEGAL_LAST_UPDATED}
      badge="Google Play"
      toc={TERMS_TOC}
    >
      <TermsContent appName={appName} />
    </LegalShell>
  )
}

export function TermsCommonPage() {
  return (
    <LegalShell
      kind="Terms & Conditions"
      headline={
        <>
          The terms behind <span className="text-brand italic">our apps.</span>
        </>
      }
      intro="The agreement between you and DevLogs when you use any of the apps we publish."
      lastUpdated={LEGAL_LAST_UPDATED}
      badge="Applies to all DevLogs apps"
      toc={TERMS_TOC}
    >
      <TermsContent />
    </LegalShell>
  )
}
