"use client"

import Link from "next/link"
import { Menu, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileHeaderProps {
  onMenuClick: () => void
  title?: string
}

/**
 * Mobile header component that shows at the top of the page on mobile devices
 * Includes the logo and a menu button to open the navigation
 */
export function MobileHeader({ onMenuClick, title }: MobileHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b md:hidden">
      <Link href="/dashboard" className="flex items-center gap-2">
        <QrCode className="h-6 w-6" />
        <span className="text-xl font-bold">QR Platform</span>
      </Link>
      {title && <h1 className="text-lg font-medium">{title}</h1>}
      <Button variant="ghost" size="icon" onClick={onMenuClick}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </Button>
    </div>
  )
}

