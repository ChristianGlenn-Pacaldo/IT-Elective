"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// This wraps our app and handles the logic for switching classes on the <html> tag
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}