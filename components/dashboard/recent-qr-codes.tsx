import Link from "next/link"
import { ArrowRight, ExternalLink, QrCode } from "lucide-react"

import { Button } from "@/components/ui/button"

/**
 * RecentQrCodes component displays a list of recently created QR codes
 * Shows QR code name, type, and creation date
 */
export function RecentQrCodes() {
  // In a real app, this data would come from an API or database
  const recentQrCodes = [
    {
      id: "1",
      name: "Company Website",
      type: "URL",
      createdAt: "2 days ago",
      scans: 45,
    },
    {
      id: "2",
      name: "Product Catalog",
      type: "PDF",
      createdAt: "5 days ago",
      scans: 128,
    },
    {
      id: "3",
      name: "Contact Card",
      type: "vCard",
      createdAt: "1 week ago",
      scans: 67,
    },
    {
      id: "4",
      name: "Event Registration",
      type: "URL",
      createdAt: "2 weeks ago",
      scans: 203,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {recentQrCodes.map((qrCode) => (
          <div key={qrCode.id} className="flex items-center justify-between space-x-4 rounded-md border p-3">
            <div className="flex items-center space-x-3">
              <div className="rounded-md bg-primary/10 p-2">
                <QrCode className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">{qrCode.name}</div>
                <div className="text-xs text-muted-foreground">
                  {qrCode.type} • {qrCode.createdAt} • {qrCode.scans} scans
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" asChild>
              <Link href={`/dashboard/qr-codes/${qrCode.id}`}>
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">View QR code</span>
              </Link>
            </Button>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full" asChild>
        <Link href="/dashboard/qr-codes">
          View all QR codes
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}

