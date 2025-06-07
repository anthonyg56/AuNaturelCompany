import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import AppQueryClientProvider from "@/providers/QueryClientProvider"
import Navbar from "@/components/layouts/navbar"
import Footer from "@/components/layouts/foooter"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: {
    default: "Au Natural Company | Expert Loc Care in Indianapolis",
    template: "%s | Au Natural Company"
  },
  description: "Specialized in creating and maintaining beautiful locs with expert care and personalized service in Indianapolis.",
  keywords: ["natural hair", "locs", "dreadlocks", "Indianapolis", "hair salon", "barber", "loc maintenance"],
  authors: [{ name: "Au Natural Company" }],
  creator: "Au Natural Company",
  publisher: "Au Natural Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppQueryClientProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </AppQueryClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
