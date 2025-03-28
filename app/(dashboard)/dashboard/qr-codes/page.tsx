import Link from "next/link"
import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { QrCodeList } from "@/components/dashboard/qr-code-list"
import { QrCodeFilters } from "@/components/dashboard/qr-code-filters"

export default function QrCodesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">QR Codes</h1>          
          
          <Button asChild>
            <Link href="/dashboard/qr-codes/create">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create QR Code
            </Link>
          </Button>
        </div>        
      </div>

      <QrCodeFilters />
      <QrCodeList />
    </div>
  )
}

