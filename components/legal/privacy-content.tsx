import { Bullets, Callout, InfoGrid, LegalSection, type TocItem } from "./legal-shell"
import { SITE } from "@/lib/site"

export const PRIVACY_TOC: TocItem[] = [
  { id: "overview", label: "Overview" },
  { id: "who-we-are", label: "Who we are" },
  { id: "data-we-collect", label: "Data we collect" },
  { id: "how-we-use", label: "How we use data" },
  { id: "advertising", label: "Ads and analytics" },
  { id: "sharing", label: "How we share" },
  { id: "retention", label: "Data retention" },
  { id: "security", label: "Security" },
  { id: "transfers", label: "International transfers" },
  { id: "your-rights", label: "Your rights" },
  { id: "children", label: "Children" },
  { id: "platforms", label: "Google and Apple" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
]

export function PrivacyContent({ appName }: { appName?: string }) {
  const app = appName ? `the ${appName} app` : "our apps"
  const App = appName ? appName : "Our apps"

  return (
    <>
      <LegalSection id="overview" title="Overview">
        <p>
          This Privacy Policy explains how <strong>{SITE.legalName}</strong> (&quot;DevLogs&quot;,
          &quot;we&quot;, &quot;us&quot;) handles personal data when you use {app}. It
          covers our Android apps published on Google Play and, where an app is also
          offered on iOS, builds distributed through the Apple App Store.
        </p>
        <p>
          We have written it to meet the EU and UK General Data Protection Regulation
          (GDPR), the California Consumer Privacy Act as amended by the CPRA, the
          Children&apos;s Online Privacy Protection Act (COPPA), and the privacy
          requirements of Google Play and Apple.
        </p>
        <Callout title="The short version">
          We build wallpapers, casual games and simple tools. You do not need an
          account to use them. We keep data collection to the minimum needed to run the
          app, show ads in free versions, fix crashes, and understand basic usage. We do
          not sell your personal information.
        </Callout>
      </LegalSection>

      <LegalSection id="who-we-are" title="Who we are">
        <p>
          {App} {appName ? "is" : "are"} published by {SITE.legalName}, an independent
          Android studio. For privacy purposes we are the data controller. You can reach
          us at <a href={SITE.emailHref}>{SITE.email}</a> or by post at Shop No 21, New
          Ghalla Mandi, Bhakkar 30000, Pakistan.
        </p>
      </LegalSection>

      <LegalSection id="data-we-collect" title="Data we collect">
        <p>We collect only what is needed to operate and improve the app.</p>
        <InfoGrid
          items={[
            {
              title: "Information you give us",
              body: "If you email us for support, we receive your email address and whatever you choose to write. Some apps let you save preferences or progress, which stay on your device.",
            },
            {
              title: "Device and diagnostic data",
              body: "Device model, operating system and app version, language, and anonymous crash logs and performance data so we can fix problems.",
            },
            {
              title: "Usage data",
              body: "Anonymous, aggregated events such as which screens open or which features are used, to understand what to improve.",
            },
            {
              title: "Identifiers for ads",
              body: "In free versions, advertising partners may use a resettable advertising identifier (Google Advertising ID or Apple IDFA) and coarse data such as country derived from your IP address.",
            },
          ]}
        />
        <Callout title="Data we never collect">
          We do not collect your name (unless you email us), precise GPS location, your
          contacts, your photo library, microphone audio, payment or financial details,
          health data, or login credentials. We do not ask you to create an account.
        </Callout>
      </LegalSection>

      <LegalSection id="how-we-use" title="How we use data">
        <Bullets
          items={[
            "Run, maintain and secure the app and its core features.",
            "Remember your in-app settings and, for games, your progress.",
            "Show ads in free versions and measure whether they work.",
            "Understand aggregate usage so we can improve the app.",
            "Detect, diagnose and fix crashes and bugs.",
            "Respond to your support messages.",
            "Meet legal obligations and prevent fraud or abuse.",
          ]}
        />
        <p>
          <strong>Legal bases (GDPR and UK GDPR).</strong> We rely on your{" "}
          <strong>consent</strong> for personalized ads and any non-essential analytics
          where consent is required; on our <strong>legitimate interests</strong> in
          keeping the app secure, fixing crashes and basic non-personalized measurement;
          on <strong>performance of a contract</strong> to deliver the app you chose to
          install; and on <strong>legal obligation</strong> where the law requires it.
          You can withdraw consent at any time.
        </p>
      </LegalSection>

      <LegalSection id="advertising" title="Ads and analytics">
        <p>
          Free versions of {app} may display ads and use analytics and crash reporting
          provided by third parties acting as independent controllers or processors.
          These partners may use the advertising identifier and limited device data.
        </p>
        <InfoGrid
          items={[
            {
              title: "Google AdMob",
              body: (
                <>
                  Serves ads in free apps. See{" "}
                  <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google&apos;s advertising policies
                  </a>
                  .
                </>
              ),
            },
            {
              title: "Google Analytics for Firebase",
              body: "Aggregated, privacy-respecting usage measurement.",
            },
            {
              title: "Firebase Crashlytics",
              body: "Anonymous crash and stability reporting.",
            },
            {
              title: "Google Play services",
              body: "App delivery, updates and security on Android.",
            },
          ]}
        />
        <p>
          <strong>Personalized ads and consent.</strong> In the EEA, the UK and other
          regions that require it, we ask for your consent through a Google-certified
          consent prompt before any personalized advertising. If you decline, you still
          see ads, but they are non-personalized.
        </p>
        <Callout title="How to control ad tracking">
          On Android, open Settings, then Google, then Ads, to reset or delete your
          advertising ID and opt out of ad personalization. On iOS, App Tracking
          Transparency means we only track with your permission, which you can change in
          Settings, then Privacy and Security, then Tracking.
        </Callout>
      </LegalSection>

      <LegalSection id="sharing" title="How we share data">
        <p>
          <strong>We do not sell your personal information, and we do not share it for
          cross-context behavioral advertising</strong> except through the consent-based
          ad choices described above. We share limited data only with:
        </p>
        <Bullets
          items={[
            "Service providers such as Google that process data on our behalf to deliver, secure and measure the app.",
            "Authorities or third parties when required by law, to enforce our terms, or to protect rights and safety.",
            "A successor entity if the studio or an app is ever transferred, in which case this policy continues to apply.",
          ]}
        />
      </LegalSection>

      <LegalSection id="retention" title="Data retention">
        <Bullets
          items={[
            "Support emails are kept for up to 24 months, then deleted.",
            "Crash and diagnostic logs are kept for up to 90 days.",
            "Aggregated analytics follow our provider settings, with user-level retention limited to 14 months.",
            "Settings and game progress stay on your device until you clear the app data or uninstall the app.",
          ]}
        />
      </LegalSection>

      <LegalSection id="security" title="Security">
        <p>
          Data sent to our providers is protected with industry-standard TLS encryption
          in transit, access is restricted to people who need it, and we use reputable
          infrastructure. No method of transmission or storage is completely secure, but
          we work to protect your data and will notify you and the relevant authorities
          of a breach where the law requires.
        </p>
      </LegalSection>

      <LegalSection id="transfers" title="International transfers">
        <p>
          Our providers, including Google, may process data in the United States and
          other countries whose laws differ from yours. Where we transfer data from the
          EEA or the UK, we rely on the European Commission&apos;s Standard Contractual
          Clauses and equivalent safeguards offered by those providers.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="Your rights">
        <p>
          <strong>EEA and UK (GDPR).</strong> You have the right to access, correct,
          delete, restrict or object to processing, to data portability, and to withdraw
          consent. You may also lodge a complaint with your local data protection
          authority.
        </p>
        <p>
          <strong>California (CCPA and CPRA).</strong> You have the right to know, delete
          and correct your personal information, and to opt out of its sale or sharing.
          We do not sell or share personal information and we do not use sensitive
          information for profiling. We will not discriminate against you for exercising
          these rights.
        </p>
        <p>
          To make a request, email <a href={SITE.emailHref}>{SITE.email}</a>. We may
          need to verify your request, and we respond within the time the law allows, for
          example 30 days under the GDPR and 45 days under the CCPA. Your first request in
          a period is free.
        </p>
      </LegalSection>

      <LegalSection id="children" title="Children&apos;s privacy">
        <p>
          {App} {appName ? "is" : "are"} general-audience and not directed to children
          under 13, or under 16 in regions where that is the threshold. We do not
          knowingly collect personal data from children.
        </p>
        <p>
          For any app listed in the Google Play family program or Apple&apos;s Kids
          category, we serve only non-personalized ads, do not use persistent identifiers
          to target children, and follow COPPA, the Google Families Policy and
          Apple&apos;s Kids guidelines. If you believe a child has provided personal data,
          contact us and we will delete it promptly.
        </p>
      </LegalSection>

      <LegalSection id="platforms" title="Google Play and Apple">
        <p>
          <strong>Google Play.</strong> The data each app collects and shares is
          summarized in its Data Safety section on Google Play. This policy is the
          canonical privacy policy referenced there.
        </p>
        <p>
          <strong>Apple App Store.</strong> Where an app is available on iOS, its Privacy
          Nutrition Label reflects these practices and we honor App Tracking Transparency
          by requesting your permission before any tracking.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Changes to this policy">
        <p>
          We may update this policy as our apps or the law change. Material changes will
          be posted here with a new effective date and, where required, surfaced inside
          the app. Continued use after an update means you accept the revised policy.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact us">
        <p>
          Questions, privacy requests or complaints are welcome. We aim to reply within a
          few business days.
        </p>
        <InfoGrid
          items={[
            { title: "Studio", body: SITE.legalName },
            {
              title: "Email",
              body: <a href={SITE.emailHref}>{SITE.email}</a>,
            },
            { title: "Address", body: "Shop No 21, New Ghalla Mandi, Bhakkar 30000, Pakistan" },
            {
              title: "Supervisory authority",
              body: "EEA and UK users may also complain to their local data protection authority.",
            },
          ]}
        />
      </LegalSection>
    </>
  )
}
