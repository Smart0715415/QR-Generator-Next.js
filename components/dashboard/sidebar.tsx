"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, CreditCard, Home, LogOut, Menu, QrCode, Settings, User, X } from "lucide-react"
import { useState, useEffect } from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"

// Navigation items for the dashboard
const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "QR Codes",
    href: "/dashboard/qr-codes",
    icon: QrCode,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Subscription",
    href: "/dashboard/subscription",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

/**
 * Mobile navigation component that shows a hamburger menu and opens a sheet with navigation
 */
function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu when navigating to a new page
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Function to check if a path is active
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden fixed top-4 right-4 z-50" onClick={() => setOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="p-0 w-[280px]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/dashboard" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <QrCode className="h-6 w-6" />
                <span className="text-xl font-bold">QR Platform</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <div className="space-y-1 px-2">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant={isActive(item.href) ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-5 w-5" />
                      {item.title}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
            <div className="border-t p-4">
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-5 w-5" />
                    Profile
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <LogOut className="mr-2 h-5 w-5" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export function DashboardSidebar() {
  const pathname = usePathname()

  // Function to check if a path is active
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <>
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Desktop Sidebar - hidden on mobile */}
      <Sidebar className="hidden md:flex">
        <SidebarHeader className="flex items-center justify-center py-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <QrCode className="h-6 w-6" />
            <span className="text-xl font-bold">QR Platform</span>
          </Link>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={isActive(item.href)} tooltip={item.title}>
                  <Link href={item.href}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/profile">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}

