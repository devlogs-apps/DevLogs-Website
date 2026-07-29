import type { Metadata } from "next"
import { PrivacyAppPage } from "@/components/legal/legal-pages"

const APP = "Mine Craft Live Wallpaper HD"

export const metadata: Metadata = {
  title: `Privacy Policy · ${APP}`,
  description: `Privacy Policy for the ${APP} app by DevLogs. GDPR, CCPA, COPPA and Google Play compliant.`,
}

export default function Page() {
  return (
    <PrivacyAppPage
      appName={APP}
      disclaimer={
        <>
          <p>
            <strong>{APP}</strong> is an unofficial, fan-made application created by
            DevLogs for fans of the game. It is <strong>not</strong> affiliated with,
            associated with, authorised by, endorsed by, or in any way officially
            connected with Mojang Studios, Microsoft Corporation, or any of their
            subsidiaries or affiliates.
          </p>
          <p className="mt-3">
            The name &quot;Minecraft&quot;, along with all related names, logos, marks,
            characters and imagery, are trademarks and copyrighted works of their
            respective owners. All copyrights and trademarks are fully respected and are
            used here only in a descriptive, nominative sense to identify the theme of the
            wallpapers. We claim no ownership over them.
          </p>
          <p className="mt-3">
            All artwork distributed in the app is original or properly licensed, and no
            copyright infringement is intended. If you are a rights holder and believe any
            content in the app infringes your rights, contact us and we will review and
            remove it promptly.
          </p>
        </>
      }
    />
  )
}
