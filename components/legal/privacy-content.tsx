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
  { id: "purchases", label: "8. In-app purchases" },
  { id: "sharing", label: "9. How we share" },
  { id: "transfers", label: "10. International transfers" },
  { id: "retention", label: "11. Data retention" },
  { id: "security", label: "12. Security" },
  { id: "your-rights", label: "13. Your rights" },
  { id: "children", label: "14. Children" },
  { id: "platforms", label: "15. Google Play" },
  { id: "changes", label: "16. Changes" },
  { id: "contact", label: "17. Contact" },
]

export function PrivacyContent({
  appName,
  childDirected,
}: {
  appName?: string
  childDirected?: boolean
}) {
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
              Play under the developer name <strong>&quot;Dev Logs&quot;</strong>.
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
          {childDirected ? (
            <>
              {App} is made for children and families. There is no account, no sign-up and
              no chat. Drawings and progress stay on the device. Ads are
              non-personalized only, we do not use the advertising identifier for
              children, and we never sell personal information. Parents can contact us at
              any time to ask what we hold and have it deleted.
            </>
          ) : (
            <>
              We build a range of mobile apps, from personalization and games to everyday
              tools and utilities. You do not need an account to use them. We keep data
              collection to the minimum needed to run the app, show ads in free versions,
              fix crashes, and understand basic usage. Optional purchases, where offered,
              are processed by Google Play, so we never see your card details. We do not
              sell your personal information.
            </>
          )}
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
            childDirected
              ? {
                  title: "4.4 Advertising identifiers",
                  body: "We do not use the Google Advertising ID or any other persistent identifier for advertising in this app. Ads are non-personalized and rely only on contextual signals such as coarse country derived from the IP address, which is not used to build a profile.",
                }
              : {
                  title: "4.4 Advertising identifiers",
                  body: "In free versions, advertising partners may use a resettable advertising identifier (Google Advertising ID) and coarse data such as country derived from your IP address.",
                },
            {
              title: "4.5 Photos and images you choose",
              body: "Photo frame and editor apps open only the photos you pick, using Android's photo picker or a permission you grant. Editing happens on your device and results are saved to your device. Your photos are never uploaded to us.",
            },
            {
              title: "4.6 Purchase information",
              body: "If you buy something in an app, Google Play shares the order ID, the product and the purchase status with us so we can deliver and restore it. We never receive your card or bank details. See Section 8.",
            },
          ]}
        />
        <Callout title="Information we never collect">
          We do not collect your name (unless you email us), precise GPS location, your
          contacts, microphone audio, payment card or bank details, health data, or login
          credentials, and we never upload your photos. We do not require you to create an
          account.
          {childDirected ? (
            <>
              {" "}
              There is no chat, no messaging, no user-generated content sharing and no
              social login, so children cannot make personal information public through
              the app.
            </>
          ) : null}
        </Callout>
        <p>
          Our apps only request the Android permissions a feature needs. Depending on the
          app, these may include:
        </p>
        <Bullets
          items={[
            <>
              <strong>Internet and network state</strong>, to load content, show ads,
              verify purchases and send crash reports.
            </>,
            <>
              <strong>Photos and media</strong>, only for the images you choose to frame,
              edit or save. Where possible we use Android&apos;s photo picker, which needs
              no permission at all.
            </>,
            <>
              <strong>Set wallpaper</strong>, to apply a wallpaper you select.
            </>,
            <>
              <strong>Notifications</strong>, optional, for reminders or new content. You
              can turn them off at any time in Android settings.
            </>,
            <>
              <strong>Google Play Billing</strong>, in apps that offer purchases.
            </>,
          ]}
        />
        <p>
          Any other permission is requested only when you use the feature that needs it,
          is explained in the app, and the data it gives access to stays on your device.
        </p>
      </LegalSection>

      <LegalSection id="how-we-use" number={5} title="How we use information">
        <p>We use personal data for the following purposes:</p>
        <Clauses
          section={5}
          items={[
            "To provide, operate, maintain and secure the app and its core features.",
            "To remember your in-app settings and, for games, your progress.",
            "To display advertising in free versions and to measure its performance.",
            "To deliver, verify and restore in-app purchases and subscriptions, and to prevent purchase fraud.",
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
            childDirected ? (
              <>
                <strong>Consent.</strong> We do not run personalized advertising in this
                app, so we do not rely on consent for it. Where consent is required for
                non-essential analytics, it is the consent of the parent or guardian as
                the device owner, and it can be withdrawn at any time by contacting us or
                uninstalling the app.
              </>
            ) : (
              <>
                <strong>Consent.</strong> We rely on your consent for personalized
                advertising and for any non-essential analytics where consent is required.
                You may withdraw consent at any time, as described in Section 7.
              </>
            ),
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
          items={
            childDirected
              ? [
                  <>
                    Free versions of {app} display advertising and use analytics and crash
                    reporting provided by the third parties listed below. Because the app
                    is directed to children, every ad request is tagged as child-directed
                    under the Google Play Families Policy and COPPA.
                  </>,
                  <>
                    <strong>Ads are non-personalized only.</strong> We do not allow
                    interest-based or remarketing ads, we do not permit the use of
                    persistent identifiers to target children, and ad partners may not
                    build advertising profiles from this app.
                  </>,
                  <>
                    We use only ad SDKs certified under Google Play&apos;s Families
                    Self-Certified Ads SDK Program, and ad content is limited to the
                    &quot;G&quot; (general audiences) maximum ad content rating.
                  </>,
                  <>
                    Analytics in this app are aggregated, configured not to collect the
                    advertising identifier, and used only to fix crashes and understand
                    which features are used. They are not used to track children across
                    apps or websites.
                  </>,
                  <>
                    A parent or guardian can remove advertising entirely by using any
                    ad-free option offered in the app, and can delete the device
                    advertising identifier in Android settings (Settings, then Privacy,
                    then Ads, or Settings, then Google, then Ads on older versions).
                  </>,
                ]
              : [
                  <>
                    Free versions of {app} may display advertising and use analytics and
                    crash reporting provided by the third parties listed below, acting as
                    independent controllers or as our processors. These partners may use
                    the advertising identifier and limited device data.
                  </>,
                  <>
                    In the EEA, the UK and other regions that require it, we request your
                    consent through a Google-certified consent prompt before any
                    personalized advertising. If you decline, you will still see ads, but
                    they will be non-personalized.
                  </>,
                  <>
                    In US states with consumer privacy laws, personalized ads may count as
                    &quot;sharing&quot; or &quot;targeted advertising&quot;. Where required,
                    the app shows a privacy choices prompt that lets you opt out, and you
                    can always opt out by emailing us.
                  </>,
                  <>
                    You can delete your advertising identifier at any time in Android
                    settings (Settings, then Privacy, then Ads, or Settings, then Google,
                    then Ads on older versions). Ads will then no longer be personalized.
                  </>,
                  <>
                    Google AdMob is currently our only ad network. If we add others, for
                    example through AdMob mediation, we will list them here before they
                    are used.
                  </>,
                ]
          }
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
              title: "Google User Messaging Platform",
              body: "Shows the ad consent and privacy choices prompt where the law requires it.",
            },
            {
              title: "Google Play Billing",
              body: "Processes in-app purchases and subscriptions, where offered.",
            },
            {
              title: "Google Play services",
              body: "App delivery, updates and security on Android.",
            },
            {
              title: "Google's processing",
              body: (
                <>
                  Covered by the{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Privacy Policy
                  </a>
                  .
                </>
              ),
            },
          ]}
        />
      </LegalSection>

      <LegalSection id="purchases" number={8} title="In-app purchases and subscriptions">
        <Clauses
          section={8}
          items={[
            <>
              Some apps offer optional in-app purchases or subscriptions, for example to
              remove ads or unlock content. All payments are processed by{" "}
              <strong>Google Play Billing</strong> under Google&apos;s terms and privacy
              policy. We never receive your card number, bank details or billing address.
            </>,
            <>
              Google shares with us only what we need to deliver what you bought: the
              order ID, a purchase token, the product, the purchase time and its status,
              including refunds and cancellations. We use it to unlock and restore your
              purchase on a new device or after reinstalling, to prevent fraud, and for
              accounting and tax.
            </>,
            <>
              Subscriptions renew automatically until you cancel. You can manage or cancel
              them at any time in the Play Store under{" "}
              <a
                href="https://play.google.com/store/account/subscriptions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Payments &amp; subscriptions
              </a>
              . Refunds follow{" "}
              <a
                href="https://support.google.com/googleplay/answer/2479637"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play&apos;s refund policy
              </a>
              , and you can also contact us for help.
            </>,
            "Purchase information is never used for advertising and is never sold.",
          ]}
        />
      </LegalSection>

      <LegalSection id="sharing" number={9} title="How we share information">
        <Clauses
          section={9}
          items={[
            childDirected ? (
              <>
                <strong>We do not sell or share personal information</strong>, and no data
                from this app is used for cross-context behavioral advertising.
              </>
            ) : (
              <>
                <strong>We do not sell your personal information for money.</strong>{" "}
                Personalized ads, where you allow them, may count as &quot;sharing&quot;
                under some privacy laws. You can opt out as described in Section 7.
              </>
            ),
            "We share limited data with service providers, such as Google, that process data on our behalf to deliver, secure and measure the app.",
            "We may disclose data to authorities or third parties where required by law, to enforce our terms, or to protect rights, property or safety.",
            "We may transfer data to a successor entity if the studio or an app is ever sold, merged or reorganized, in which case this Policy continues to apply.",
          ]}
        />
      </LegalSection>

      <LegalSection id="transfers" number={10} title="International data transfers">
        <p>
          Our providers, including Google, may process data in the United States and other
          countries whose laws may differ from those in your jurisdiction. Where we
          transfer personal data from the EEA or the UK, we rely on the European
          Commission&apos;s Standard Contractual Clauses, the UK International Data Transfer
          Addendum and equivalent safeguards offered by those providers.
        </p>
      </LegalSection>

      <LegalSection id="retention" number={11} title="Data retention">
        <p>
          We keep personal data only for as long as necessary for the purposes set out in
          this Policy, after which it is deleted or anonymized:
        </p>
        <Bullets
          items={[
            "Support emails are kept for up to 24 months, then deleted.",
            "Crash and diagnostic logs are kept for up to 90 days.",
            "Purchase records are kept while needed to provide and restore what you bought, and for as long as tax and accounting law requires.",
            "Aggregated analytics follow our provider settings, with user-level retention limited to 14 months.",
            "Settings and game progress remain on your device until you clear the app data or uninstall the app.",
          ]}
        />
      </LegalSection>

      <LegalSection id="security" number={12} title="Information security">
        <p>
          Data sent to our providers is protected with industry-standard TLS encryption in
          transit, access is restricted to people who need it, and we use reputable
          infrastructure. No method of transmission or storage is completely secure, but we
          work to protect your data and will notify you and the relevant authorities of a
          personal-data breach where the law requires.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" number={13} title="Your rights">
        <Clauses
          section={13}
          items={[
            <>
              <strong>EEA and UK (GDPR).</strong> You have the right to access, rectify,
              erase, restrict or object to processing, to data portability, and to withdraw
              consent. You may also lodge a complaint with your local supervisory
              authority.
            </>,
            <>
              <strong>California (CCPA/CPRA).</strong> You have the right to know, delete
              and correct your personal information, and to opt out of its sale or sharing.{" "}
              {childDirected
                ? "We do not sell or share personal information."
                : "We do not sell personal information for money. Personalized advertising may count as sharing, and you can opt out as described in Section 7."}{" "}
              We do not use sensitive information for profiling, and we will not
              discriminate against you for exercising your rights.
            </>,
            <>
              <strong>Other regions.</strong> Residents of Brazil (LGPD), Canada (PIPEDA),
              Australia and other jurisdictions have comparable rights under their local
              laws, which we honor where they apply to you.
            </>,
            <>
              <strong>Deleting your data.</strong> Our apps have no accounts, so there is
              nothing to close. Uninstalling an app or clearing its data removes everything
              it stored on your device. To delete data held by us or our providers, such as
              support emails or crash logs, email us. Purchase records we must keep by law
              are deleted once that period ends.
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

      <LegalSection id="children" number={14} title="Children's privacy">
        <Clauses
          section={14}
          items={
            childDirected
              ? [
                  <>
                    {App} is designed for children and families and is enrolled in the
                    Google Play Families program. We handle it in line with the
                    Children&apos;s Online Privacy Protection Act (COPPA), the GDPR
                    provisions on children&apos;s data, and the Google Play Families
                    Policy.
                  </>,
                  <>
                    <strong>We do not collect personal information from children.</strong>{" "}
                    There is no account, no sign-in, no name, email, photo, voice, contact
                    or location collection, and no chat or social feature. Colouring
                    pages, artwork and progress are stored on the device only and are
                    never uploaded to us.
                  </>,
                  <>
                    The only data leaving the device is anonymous crash and aggregated
                    usage data used to keep the app working, plus the non-personalized ad
                    requests described in Section 7. None of it is used to identify,
                    profile or track a child.
                  </>,
                  <>
                    We do not knowingly allow third parties to collect personal
                    information from children through the app, and we require our ad and
                    analytics providers to operate in child-directed mode.
                  </>,
                  <>
                    <strong>Parents and guardians.</strong> You may ask us what data, if
                    any, is associated with your child, ask us to delete it, and refuse
                    any further collection by emailing{" "}
                    <a href={SITE.emailHref}>{SITE.email}</a>. We act on verified requests
                    promptly, and in any case within the time the law allows. Deleting the
                    app or clearing its data removes everything stored on the device.
                  </>,
                  <>
                    Purchases, where offered, require the device owner&apos;s payment
                    credentials and are handled entirely by Google Play. We recommend
                    enabling purchase authentication in the Play Store so that a child
                    cannot buy anything without a parent&apos;s approval.
                  </>,
                  <>
                    If you believe a child has provided personal information to us despite
                    these measures, contact us and we will delete it promptly.
                  </>,
                ]
              : [
                  <>
                    {App} {isPlural ? "are" : "is"} general-audience and{" "}
                    {isPlural ? "are" : "is"} not directed to children under 13, or under
                    16 in regions where that is the applicable threshold. We do not
                    knowingly collect personal data from children.
                  </>,
                  "For any app enrolled in the Google Play family program, we serve only non-personalized ads, do not use persistent identifiers to target children, and follow COPPA and the Google Families Policy.",
                  "If you believe a child has provided personal data, contact us and we will delete it promptly.",
                ]
          }
        />
      </LegalSection>

      <LegalSection id="platforms" number={15} title="Google Play">
        <p>
          The data each app collects and shares is summarized in its Data safety section on
          Google Play, and this Policy is the privacy policy linked there. We keep the two
          consistent. If you notice a difference between them, please tell us and we will
          correct it.
        </p>
      </LegalSection>

      <LegalSection id="changes" number={16} title="Changes to this policy">
        <p>
          We may update this Policy as our apps or the law change. Material changes will be
          posted here with a new effective date and, where required, surfaced inside the
          app. Your continued use of {app} after an update means you accept the revised
          Policy.
        </p>
      </LegalSection>

      <LegalSection id="contact" number={17} title="Contact us">
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
