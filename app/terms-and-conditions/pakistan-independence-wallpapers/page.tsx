import type { Metadata } from "next"
import { TermsAppPage } from "@/components/legal/legal-pages"

const APP = "14 August Wallpaper & Cards"

export const metadata: Metadata = {
  title: `Terms & Conditions · ${APP}`,
  description: `Terms and Conditions for the ${APP} app by DevLogs.`,
}

export default function Page() {
  return <TermsAppPage appName={APP} />
}
