import type { Metadata } from "next"
import { PrivacyAppPage } from "@/components/legal/legal-pages"

const APP = "Anime Wallpaper 4K"

export const metadata: Metadata = {
  title: `Privacy Policy · ${APP}`,
  description: `Privacy Policy for the ${APP} app by DevLogs. GDPR, CCPA, COPPA and Google Play compliant.`,
}

export default function Page() {
  return <PrivacyAppPage appName={APP} />
}
