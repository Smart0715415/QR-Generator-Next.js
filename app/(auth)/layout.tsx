import type React from "react"
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40">
      <div className="w-full max-w-md space-y-8 p-6 bg-background rounded-lg shadow-lg">{children}</div>
    </div>
  )
}

