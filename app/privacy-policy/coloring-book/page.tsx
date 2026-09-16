import type { Metadata } from "next"
import { PrivacyAppPage } from "@/components/legal/legal-pages"

const APP = "Coloring Book: Color & Games"

export const metadata: Metadata = {
  title: `Privacy Policy · ${APP}`,
  description: `Privacy Policy for the ${APP} app by DevLogs. Made for kids and families, and compliant with COPPA, the Google Play Families Policy, GDPR and CCPA.`,
}

export default function Page() {
  return <PrivacyAppPage appName={APP} childDirected />
}
