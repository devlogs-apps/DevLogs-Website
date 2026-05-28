import type { Metadata } from "next"
import { TermsCommonPage } from "@/components/legal/legal-pages"

export const metadata: Metadata = {
  title: "Terms & Conditions · DevLogs",
  description:
    "The terms that apply when you download and use any app published by DevLogs on Google Play or the App Store.",
}

export default function Page() {
  return <TermsCommonPage />
}
