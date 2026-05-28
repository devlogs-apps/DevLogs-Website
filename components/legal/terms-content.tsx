import { Bullets, Callout, LegalSection, type TocItem } from "./legal-shell"
import { SITE } from "@/lib/site"

export const TERMS_TOC: TocItem[] = [
  { id: "acceptance", label: "Acceptance" },
  { id: "license", label: "License to use" },
  { id: "your-responsibilities", label: "Your responsibilities" },
  { id: "ads-purchases", label: "Ads and purchases" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "third-parties", label: "Third-party services" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Liability" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing law" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
]

export function TermsContent({ appName }: { appName?: string }) {
  const app = appName ? `the ${appName} app` : "our apps"
  const App = appName ? appName : "Our apps"

  return (
    <>
      <LegalSection id="acceptance" title="Acceptance of these terms">
        <p>
          These Terms govern your use of {app}, published by{" "}
          <strong>{SITE.legalName}</strong> (&quot;DevLogs&quot;, &quot;we&quot;,
          &quot;us&quot;). By downloading, installing or using the app you agree to these
          Terms. If you do not agree, please do not use the app.
        </p>
        <Callout title="Plain language">
          You can use our apps for personal, non-commercial enjoyment. Do not misuse them,
          and understand that free apps are supported by ads.
        </Callout>
      </LegalSection>

      <LegalSection id="license" title="License to use">
        <p>
          We grant you a personal, limited, non-exclusive, non-transferable and revocable
          license to download and use {app} on devices you own or control, for your own
          non-commercial use, subject to these Terms and the rules of Google Play or the
          Apple App Store.
        </p>
      </LegalSection>

      <LegalSection id="your-responsibilities" title="Your responsibilities">
        <p>You agree not to:</p>
        <Bullets
          items={[
            "Copy, modify, decompile, reverse engineer or create derivative works from the app, except where the law expressly allows it.",
            "Resell, rent, sublicense or commercially exploit the app or its content.",
            "Use the app to break the law or infringe the rights of others.",
            "Interfere with, disrupt or attempt to gain unauthorized access to the app or related systems.",
            "Remove or obscure any ownership or legal notices.",
          ]}
        />
      </LegalSection>

      <LegalSection id="ads-purchases" title="Ads and purchases">
        <p>
          Free versions of our apps may display advertising provided by third parties.
          How advertising data is handled is explained in our Privacy Policy. Some apps
          may offer optional in-app purchases, such as removing ads or unlocking content.
          Purchases are processed by Google Play or Apple under their terms, and refunds
          are handled according to those store policies.
        </p>
      </LegalSection>

      <LegalSection id="intellectual-property" title="Intellectual property">
        <p>
          {App} and all related content, design, code, logos and trademarks are owned by
          DevLogs or its licensors and are protected by intellectual property laws. These
          Terms do not transfer any ownership to you. Wallpapers, artwork and other assets
          are licensed for personal use within the app only.
        </p>
      </LegalSection>

      <LegalSection id="third-parties" title="Third-party services">
        <p>
          The app relies on third-party services such as Google Play services, Google
          AdMob and Firebase. Your use of those services is also subject to their own
          terms and privacy policies. We are not responsible for third-party services or
          content they provide.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" title="Disclaimers">
        <p>
          The app is provided on an &quot;as is&quot; and &quot;as available&quot; basis
          without warranties of any kind, whether express or implied, including
          merchantability, fitness for a particular purpose and non-infringement. We do
          not warrant that the app will be uninterrupted, error free or free of harmful
          components, though we work to keep it reliable.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, DevLogs is not liable for any indirect,
          incidental, special or consequential damages, or for loss of data or profits,
          arising from your use of or inability to use the app. Nothing in these Terms
          limits liability that cannot be limited under applicable law, including your
          statutory consumer rights.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="Termination">
        <p>
          You may stop using the app at any time by uninstalling it. We may suspend or end
          your access if you breach these Terms or if we discontinue an app. Sections that
          by their nature should survive, such as intellectual property, disclaimers and
          liability, continue after termination.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="Governing law">
        <p>
          These Terms are governed by the laws of the Islamic Republic of Pakistan,
          without regard to conflict of law rules. The courts of Pakistan have
          jurisdiction, except where mandatory consumer protection law in your country of
          residence provides otherwise.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Changes to these terms">
        <p>
          We may update these Terms as our apps or the law change. The latest version will
          always be posted here with a new effective date. Continued use after an update
          means you accept the revised Terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact us">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={SITE.emailHref}>{SITE.email}</a>, or by post to {SITE.legalName}, Shop
          No 21, New Ghalla Mandi, Bhakkar 30000, Pakistan.
        </p>
      </LegalSection>
    </>
  )
}
