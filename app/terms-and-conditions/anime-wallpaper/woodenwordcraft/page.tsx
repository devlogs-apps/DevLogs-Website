import type { Metadata } from "next"
import { TermsAppPage } from "@/components/legal/legal-pages"

const APP = "WoodenWordCraft"

export const metadata: Metadata = {
  title: `Terms & Conditions · ${APP}`,
  description: `Terms and Conditions for the ${APP} app by DevLogs.`,
}

export default function Page() {
  return <TermsAppPage appName={APP} />
}
