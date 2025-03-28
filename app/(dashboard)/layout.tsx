import type React from "react"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <DashboardSidebar />
        <div className="flex-1 p-4 ">{children}</div>
      </div>
    </SidebarProvider>
  )
}

