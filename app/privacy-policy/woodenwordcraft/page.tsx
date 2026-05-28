import type { Metadata } from "next"
import { PrivacyAppPage } from "@/components/legal/legal-pages"

const APP = "WoodenWordCraft"

export const metadata: Metadata = {
  title: `Privacy Policy · ${APP}`,
  description: `Privacy Policy for the ${APP} app by DevLogs. GDPR, CCPA, COPPA, Google Play and Apple compliant.`,
}

export default function Page() {
  return <PrivacyAppPage appName={APP} />
}
