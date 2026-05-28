import { Bullets, Callout, Clauses, LegalSection, type TocItem } from "./legal-shell"
import { SITE } from "@/lib/site"

export const TERMS_TOC: TocItem[] = [
  { id: "agreement", label: "1. Agreement" },
  { id: "definitions", label: "2. Definitions" },
  { id: "eligibility", label: "3. Eligibility" },
  { id: "license", label: "4. Licence to use" },
  { id: "acceptable-use", label: "5. Acceptable use" },
  { id: "ads-purchases", label: "6. Ads and purchases" },
  { id: "intellectual-property", label: "7. Intellectual property" },
  { id: "third-parties", label: "8. Third-party services" },
  { id: "disclaimers", label: "9. Disclaimers" },
  { id: "liability", label: "10. Liability" },
  { id: "indemnification", label: "11. Indemnification" },
  { id: "termination", label: "12. Termination" },
  { id: "governing-law", label: "13. Governing law" },
  { id: "general", label: "14. General" },
  { id: "changes", label: "15. Changes" },
  { id: "contact", label: "16. Contact" },
]

export function TermsContent({ appName }: { appName?: string }) {
  const app = appName ? `the ${appName} app` : "our apps"
  const App = appName ? appName : "Our apps"

  return (
    <>
      <LegalSection id="agreement" number={1} title="Agreement to these terms">
        <Clauses
          section={1}
          items={[
            <>
              These Terms and Conditions (&quot;Terms&quot;) form a binding agreement
              between you and <strong>{SITE.legalName}</strong> (&quot;DevLogs&quot;,
              &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) governing your use of{" "}
              {app}.
            </>,
            "By downloading, installing or using the app, you agree to be bound by these Terms. If you do not agree, you must not download, install or use the app.",
            "These Terms incorporate our Privacy Policy by reference. Please read it to understand how we handle your personal data.",
          ]}
        />
        <Callout title="Plain language">
          You can use our apps for personal, non-commercial enjoyment. Do not misuse them,
          and understand that free apps are supported by ads.
        </Callout>
      </LegalSection>

      <LegalSection id="definitions" number={2} title="Definitions">
        <Bullets
          items={[
            <>
              <strong>&quot;App&quot;</strong> means {app}, including all software,
              content, updates and related documentation we make available.
            </>,
            <>
              <strong>&quot;Content&quot;</strong> means all text, graphics, wallpapers,
              artwork, audio, code and other materials provided in or through the App.
            </>,
            <>
              <strong>&quot;Store&quot;</strong> means Google Play, through which the App is
              distributed.
            </>,
            <>
              <strong>&quot;You&quot;</strong> means the individual or entity using the App.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="eligibility" number={3} title="Eligibility">
        <Clauses
          section={3}
          items={[
            "You must be at least the age of majority in your country of residence to accept these Terms.",
            "If you are a minor, you may use the App only with the consent and supervision of a parent or legal guardian who agrees to these Terms on your behalf.",
            "By using the App, you represent and warrant that you meet these requirements and that the information you provide to us is accurate.",
          ]}
        />
      </LegalSection>

      <LegalSection id="license" number={4} title="Licence to use the app">
        <Clauses
          section={4}
          items={[
            "We grant you a personal, limited, non-exclusive, non-transferable, non-sublicensable and revocable licence to download and use the App on devices you own or control, for your own non-commercial use.",
            "This licence is subject to these Terms and to the rules of Google Play.",
            "We reserve all rights not expressly granted to you under these Terms.",
          ]}
        />
      </LegalSection>

      <LegalSection id="acceptable-use" number={5} title="Acceptable use">
        <p>You agree that you will not:</p>
        <Clauses
          section={5}
          items={[
            "Copy, modify, decompile, reverse engineer or create derivative works from the App, except to the extent that the law expressly permits.",
            "Resell, rent, lease, sublicense or otherwise commercially exploit the App or its Content.",
            "Use the App to break the law or to infringe the rights of others.",
            "Interfere with, disrupt or attempt to gain unauthorized access to the App or its related systems or networks.",
            "Remove, obscure or alter any ownership, copyright or other legal notices.",
          ]}
        />
      </LegalSection>

      <LegalSection id="ads-purchases" number={6} title="Ads, purchases and subscriptions">
        <Clauses
          section={6}
          items={[
            "Free versions of the App may display advertising provided by third parties. How advertising data is handled is explained in our Privacy Policy.",
            "Some apps may offer optional in-app purchases or subscriptions, such as removing ads or unlocking content.",
            "Purchases are processed by Google Play under its terms. Billing, cancellations and refunds are governed by the Store's policies, and we are not responsible for the Store's payment processing.",
          ]}
        />
      </LegalSection>

      <LegalSection id="intellectual-property" number={7} title="Intellectual property">
        <Clauses
          section={7}
          items={[
            <>
              {App} and all related Content, design, code, logos and trademarks are owned by
              DevLogs or its licensors and are protected by intellectual-property laws.
            </>,
            "These Terms do not transfer any ownership or intellectual-property rights to you.",
            "Wallpapers, artwork and other assets are licensed for personal use within the App only and may not be redistributed.",
          ]}
        />
      </LegalSection>

      <LegalSection id="third-parties" number={8} title="Third-party services">
        <p>
          The App relies on third-party services such as Google Play services, Google AdMob
          and Firebase. Your use of those services is also subject to their own terms and
          privacy policies. We are not responsible for third-party services or for content
          they provide, and your dealings with them are solely between you and the relevant
          provider.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" number={9} title="Disclaimers of warranties">
        <p>
          To the maximum extent permitted by law, the App is provided on an &quot;as
          is&quot; and &quot;as available&quot; basis, without warranties of any kind,
          whether express, implied or statutory, including warranties of merchantability,
          fitness for a particular purpose, title and non-infringement. We do not warrant
          that the App will be uninterrupted, error free or free of harmful components,
          though we work to keep it reliable. Some jurisdictions do not allow the exclusion
          of certain warranties, so some of the above may not apply to you.
        </p>
      </LegalSection>

      <LegalSection id="liability" number={10} title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, DevLogs and its licensors will not be
          liable for any indirect, incidental, special, consequential or punitive damages,
          or for any loss of data, profits or goodwill, arising from or related to your use
          of or inability to use the App. To the extent liability cannot be excluded, our
          total aggregate liability is limited to the greater of the amount you paid us for
          the App in the twelve months before the claim, or USD 50. Nothing in these Terms
          limits liability that cannot be limited under applicable law, including your
          statutory consumer rights.
        </p>
      </LegalSection>

      <LegalSection id="indemnification" number={11} title="Indemnification">
        <p>
          You agree to indemnify and hold harmless DevLogs and its officers, employees and
          licensors from any claims, damages, liabilities, costs and expenses (including
          reasonable legal fees) arising out of your misuse of the App, your violation of
          these Terms, or your infringement of any third-party right, except to the extent
          such claims arise from our own breach or negligence.
        </p>
      </LegalSection>

      <LegalSection id="termination" number={12} title="Termination">
        <Clauses
          section={12}
          items={[
            "You may stop using the App at any time by uninstalling it.",
            "We may suspend or terminate your access if you breach these Terms or if we discontinue an app, with notice where practicable.",
            "Sections that by their nature should survive termination, including intellectual property, disclaimers, limitation of liability, indemnification and governing law, continue to apply after termination.",
          ]}
        />
      </LegalSection>

      <LegalSection id="governing-law" number={13} title="Governing law and dispute resolution">
        <Clauses
          section={13}
          items={[
            "These Terms are governed by the laws of the Islamic Republic of Pakistan, without regard to its conflict-of-law rules.",
            "Subject to the clause below, the courts of Pakistan have exclusive jurisdiction over any dispute arising out of or relating to these Terms or the App.",
            "Nothing in this section deprives you of the protection of mandatory consumer-protection laws, or of the right to bring proceedings in the courts of your country of residence, where such laws so provide.",
            "Before commencing formal proceedings, you agree to contact us so that we can try to resolve the dispute informally.",
          ]}
        />
      </LegalSection>

      <LegalSection id="general" number={14} title="General provisions">
        <Clauses
          section={14}
          items={[
            "Entire agreement: these Terms and our Privacy Policy are the entire agreement between you and DevLogs regarding the App and replace any prior understanding.",
            "Severability: if any provision is found unenforceable, the remaining provisions remain in full effect and the unenforceable part is applied as closely as the law allows.",
            "No waiver: our failure to enforce any right or provision is not a waiver of that right or provision.",
            "Assignment: you may not assign these Terms without our prior written consent. We may assign them to a successor entity, such as in a merger, acquisition or transfer of an app.",
            "Force majeure: we are not liable for any failure or delay caused by events beyond our reasonable control.",
          ]}
        />
      </LegalSection>

      <LegalSection id="changes" number={15} title="Changes to these terms">
        <p>
          We may update these Terms as our apps or the law change. The latest version will
          always be posted here with a new effective date. Your continued use of {app} after
          an update means you accept the revised Terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" number={16} title="Contact us">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={SITE.emailHref}>{SITE.email}</a>, or by post to {SITE.legalName},{" "}
          {SITE.address}.
        </p>
      </LegalSection>
    </>
  )
}
