import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Barlow_Condensed } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const barlowCondensed = Barlow_Condensed({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
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
  themeColor: "#e5e5e5",
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
        className={`${GeistSans.variable} ${GeistMono.variable} ${barlowCondensed.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" forcedTheme="light" disableTransitionOnChange>
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
