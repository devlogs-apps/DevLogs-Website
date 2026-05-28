import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
})

const SITE_URL = "https://devlogs.dev"

export const metadata: Metadata = {
  title: {
    default: "DevLogs. Build. Ship. Repeat.",
    template: "%s · DevLogs",
  },
  description:
    "DevLogs is an independent Android studio. We build clean, fast apps for real users and publish them on Google Play. Build. Ship. Repeat.",
  applicationName: "DevLogs",
  generator: "Next.js",
  keywords: [
    "android app development",
    "indie android studio",
    "android apps",
    "google play developer",
    "DevLogs",
  ],
  authors: [{ name: "DevLogs" }],
  creator: "DevLogs",
  publisher: "DEVLOGS (SMC-PRIVATE) LIMITED",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DevLogs",
    url: SITE_URL,
    title: "DevLogs. Build. Ship. Repeat.",
    description:
      "Turning ideas into installs. Clean, powerful Android apps built for real users, live from Google Play.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevLogs. Build. Ship. Repeat.",
    description: "Turning ideas into installs. Clean, powerful Android apps for real users.",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0710" },
    { media: "(prefers-color-scheme: light)", color: "#f7f5fb" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Film-grain overlay across the whole page */}
          <div aria-hidden className="bg-grain pointer-events-none fixed inset-0 z-[60]" />
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
