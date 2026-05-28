import { Bullets, Callout, Clauses, InfoGrid, LegalSection, type TocItem } from "./legal-shell"
import { SITE } from "@/lib/site"

export const PRIVACY_TOC: TocItem[] = [
  { id: "introduction", label: "1. Introduction" },
  { id: "who-we-are", label: "2. Who we are" },
  { id: "definitions", label: "3. Definitions" },
  { id: "data-we-collect", label: "4. Information we collect" },
  { id: "how-we-use", label: "5. How we use information" },
  { id: "legal-bases", label: "6. Legal bases" },
  { id: "advertising", label: "7. Ads and analytics" },
  { id: "sharing", label: "8. How we share" },
  { id: "transfers", label: "9. International transfers" },
  { id: "retention", label: "10. Data retention" },
  { id: "security", label: "11. Security" },
  { id: "your-rights", label: "12. Your rights" },
  { id: "children", label: "13. Children" },
  { id: "platforms", label: "14. Google Play" },
  { id: "changes", label: "15. Changes" },
  { id: "contact", label: "16. Contact" },
]

export function PrivacyContent({ appName }: { appName?: string }) {
  const app = appName ? `the ${appName} app` : "our apps"
  const App = appName ? appName : "Our apps"
  const isPlural = !appName

  return (
    <>
      <LegalSection id="introduction" number={1} title="Introduction">
        <Clauses
          section={1}
          items={[
            <>
              This Privacy Policy (&quot;Policy&quot;) explains how{" "}
              <strong>{SITE.legalName}</strong> (&quot;DevLogs&quot;, &quot;we&quot;,
              &quot;us&quot; or &quot;our&quot;) collects, uses, discloses and protects
              personal data when you use {app} and related services published on Google
              Play.
            </>,
            <>
              We are committed to processing personal data in accordance with applicable
              data-protection laws, including the EU and UK General Data Protection
              Regulation (the &quot;GDPR&quot;), the California Consumer Privacy Act as
              amended by the CPRA, the Children&apos;s Online Privacy Protection Act
              (&quot;COPPA&quot;), Brazil&apos;s Lei Geral de Proteção de Dados
              (&quot;LGPD&quot;), Canada&apos;s PIPEDA, the Australian Privacy Act, and the
              Google Play Developer Program Policies.
            </>,
            <>
              By installing or using {app}, you acknowledge that you have read and
              understood this Policy. If you do not agree with it, please do not use{" "}
              {app}.
            </>,
          ]}
        />
        <Callout title="The short version">
          We build a range of mobile apps, from personalization and games to everyday
          tools and utilities. You do not need an account to use them. We keep data
          collection to the minimum needed to run the app, show ads in free versions, fix
          crashes, and understand basic usage. We do not sell your personal information.
        </Callout>
      </LegalSection>

      <LegalSection id="who-we-are" number={2} title="Who we are">
        <Clauses
          section={2}
          items={[
            <>
              {App} {isPlural ? "are" : "is"} published by {SITE.legalName}, an independent
              Android studio. For the purposes of applicable data-protection law, we are
              the <strong>data controller</strong> responsible for your personal data.
            </>,
            <>
              You can contact us about this Policy or your personal data by email at{" "}
              <a href={SITE.emailHref}>{SITE.email}</a> or by post at {SITE.address}.
            </>,
            <>
              We have not appointed a statutory Data Protection Officer, as we are not
              required to under Article 37 of the GDPR. Privacy enquiries are handled by
              our team at the contact details above.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="definitions" number={3} title="Definitions">
        <p>In this Policy:</p>
        <Bullets
          items={[
            <>
              <strong>&quot;Personal data&quot;</strong> means any information relating to
              an identified or identifiable individual.
            </>,
            <>
              <strong>&quot;Processing&quot;</strong> means any operation performed on
              personal data, such as collection, storage, use or disclosure.
            </>,
            <>
              <strong>&quot;Controller&quot;</strong> means the party that determines the
              purposes and means of processing personal data.
            </>,
            <>
              <strong>&quot;Processor&quot;</strong> means a party that processes personal
              data on behalf of the controller.
            </>,
            <>
              <strong>&quot;Advertising identifier&quot;</strong> means a resettable
              identifier provided by the operating system, such as the Google Advertising
              ID, used for advertising purposes.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="data-we-collect" number={4} title="Information we collect">
        <p>We collect only what is needed to operate, secure and improve the app.</p>
        <InfoGrid
          items={[
            {
              title: "4.1 Information you provide",
              body: "If you email us for support, we receive your email address and whatever you choose to write. Some apps let you save preferences or progress, which are stored on your device.",
            },
            {
              title: "4.2 Device and diagnostic data",
              body: "Device model, operating system and app version, language, and anonymous crash logs and performance data so we can diagnose and fix problems.",
            },
            {
              title: "4.3 Usage data",
              body: "Anonymous, aggregated events such as which screens open or which features are used, to understand what to improve.",
            },
            {
              title: "4.4 Advertising identifiers",
              body: "In free versions, advertising partners may use a resettable advertising identifier (Google Advertising ID) and coarse data such as country derived from your IP address.",
            },
          ]}
        />
        <Callout title="Information we never collect">
          We do not collect your name (unless you email us), precise GPS location, your
          contacts, your photo library, microphone audio, payment or financial details,
          health data, or login credentials. We do not require you to create an account.
        </Callout>
      </LegalSection>

      <LegalSection id="how-we-use" number={5} title="How we use information">
        <p>We use personal data for the following purposes:</p>
        <Clauses
          section={5}
          items={[
            "To provide, operate, maintain and secure the app and its core features.",
            "To remember your in-app settings and, for games, your progress.",
            "To display advertising in free versions and to measure its performance.",
            "To analyse aggregate usage so that we can improve the app.",
            "To detect, diagnose and resolve crashes, bugs and security issues.",
            "To respond to your support requests and communicate with you.",
            "To comply with legal obligations and to prevent fraud, abuse or misuse.",
          ]}
        />
        <p>
          We do not use your personal data for automated decision-making that produces
          legal or similarly significant effects, and we do not carry out profiling of
          this kind.
        </p>
      </LegalSection>

      <LegalSection id="legal-bases" number={6} title="Legal bases for processing">
        <Clauses
          section={6}
          items={[
            <>
              <strong>Consent.</strong> We rely on your consent for personalized
              advertising and for any non-essential analytics where consent is required.
              You may withdraw consent at any time, as described in Section 7.
            </>,
            <>
              <strong>Legitimate interests.</strong> We rely on our legitimate interests
              in keeping the app secure, fixing crashes and performing basic
              non-personalized measurement, balanced against your rights and freedoms.
            </>,
            <>
              <strong>Performance of a contract.</strong> We process the limited data
              needed to deliver the app you chose to install and to provide the features
              you use.
            </>,
            <>
              <strong>Legal obligation.</strong> We process personal data where required to
              comply with applicable law.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="advertising" number={7} title="Advertising and analytics">
        <Clauses
          section={7}
          items={[
            <>
              Free versions of {app} may display advertising and use analytics and crash
              reporting provided by the third parties listed below, acting as independent
              controllers or as our processors. These partners may use the advertising
              identifier and limited device data.
            </>,
            <>
              In the EEA, the UK and other regions that require it, we request your consent
              through a Google-certified consent prompt before any personalized
              advertising. If you decline, you will still see ads, but they will be
              non-personalized.
            </>,
            <>
              You can reset or delete your advertising identifier and opt out of ad
              personalization at any time on Android by opening Settings, then Google, then
              Ads.
            </>,
          ]}
        />
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
      </LegalSection>

      <LegalSection id="sharing" number={8} title="How we share information">
        <Clauses
          section={8}
          items={[
            <>
              <strong>We do not sell your personal information, and we do not share it for
              cross-context behavioral advertising</strong> except through the
              consent-based ad choices described in Section 7.
            </>,
            "We share limited data with service providers, such as Google, that process data on our behalf to deliver, secure and measure the app.",
            "We may disclose data to authorities or third parties where required by law, to enforce our terms, or to protect rights, property or safety.",
            "We may transfer data to a successor entity if the studio or an app is ever sold, merged or reorganized, in which case this Policy continues to apply.",
          ]}
        />
      </LegalSection>

      <LegalSection id="transfers" number={9} title="International data transfers">
        <p>
          Our providers, including Google, may process data in the United States and other
          countries whose laws may differ from those in your jurisdiction. Where we
          transfer personal data from the EEA or the UK, we rely on the European
          Commission&apos;s Standard Contractual Clauses, the UK International Data Transfer
          Addendum and equivalent safeguards offered by those providers.
        </p>
      </LegalSection>

      <LegalSection id="retention" number={10} title="Data retention">
        <p>
          We keep personal data only for as long as necessary for the purposes set out in
          this Policy, after which it is deleted or anonymized:
        </p>
        <Bullets
          items={[
            "Support emails are kept for up to 24 months, then deleted.",
            "Crash and diagnostic logs are kept for up to 90 days.",
            "Aggregated analytics follow our provider settings, with user-level retention limited to 14 months.",
            "Settings and game progress remain on your device until you clear the app data or uninstall the app.",
          ]}
        />
      </LegalSection>

      <LegalSection id="security" number={11} title="Information security">
        <p>
          Data sent to our providers is protected with industry-standard TLS encryption in
          transit, access is restricted to people who need it, and we use reputable
          infrastructure. No method of transmission or storage is completely secure, but we
          work to protect your data and will notify you and the relevant authorities of a
          personal-data breach where the law requires.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" number={12} title="Your rights">
        <Clauses
          section={12}
          items={[
            <>
              <strong>EEA and UK (GDPR).</strong> You have the right to access, rectify,
              erase, restrict or object to processing, to data portability, and to withdraw
              consent. You may also lodge a complaint with your local supervisory
              authority.
            </>,
            <>
              <strong>California (CCPA/CPRA).</strong> You have the right to know, delete
              and correct your personal information, and to opt out of its sale or sharing.
              We do not sell or share personal information and do not use sensitive
              information for profiling. We will not discriminate against you for exercising
              your rights.
            </>,
            <>
              <strong>Other regions.</strong> Residents of Brazil (LGPD), Canada (PIPEDA),
              Australia and other jurisdictions have comparable rights under their local
              laws, which we honor where they apply to you.
            </>,
            <>
              To exercise any right, email <a href={SITE.emailHref}>{SITE.email}</a>. We may
              need to verify your identity, and we respond within the time the law allows,
              for example 30 days under the GDPR and 45 days under the CCPA. Your first
              request in a given period is free.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="children" number={13} title="Children's privacy">
        <Clauses
          section={13}
          items={[
            <>
              {App} {isPlural ? "are" : "is"} general-audience and {isPlural ? "are" : "is"}{" "}
              not directed to children under 13, or under 16 in regions where that is the
              applicable threshold. We do not knowingly collect personal data from
              children.
            </>,
            "For any app enrolled in the Google Play family program, we serve only non-personalized ads, do not use persistent identifiers to target children, and follow COPPA and the Google Families Policy.",
            "If you believe a child has provided personal data, contact us and we will delete it promptly.",
          ]}
        />
      </LegalSection>

      <LegalSection id="platforms" number={14} title="Google Play">
        <p>
          The data each app collects and shares is summarized in its Data Safety section on
          Google Play. This Policy is the canonical privacy policy referenced there and
          prevails in the event of any inconsistency with that summary.
        </p>
      </LegalSection>

      <LegalSection id="changes" number={15} title="Changes to this policy">
        <p>
          We may update this Policy as our apps or the law change. Material changes will be
          posted here with a new effective date and, where required, surfaced inside the
          app. Your continued use of {app} after an update means you accept the revised
          Policy.
        </p>
      </LegalSection>

      <LegalSection id="contact" number={16} title="Contact us">
        <p>
          Questions, privacy requests or complaints are welcome. We aim to reply within a
          few business days.
        </p>
        <InfoGrid
          items={[
            { title: "Data controller", body: SITE.legalName },
            {
              title: "Email",
              body: <a href={SITE.emailHref}>{SITE.email}</a>,
            },
            { title: "Address", body: SITE.address },
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
