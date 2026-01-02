import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from './components/theme-provider'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Kartik Singh | Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
