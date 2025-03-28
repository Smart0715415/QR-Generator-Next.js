"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart2, Download, Edit, ExternalLink, MoreHorizontal, QrCode, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

/**
 * QrCodeList component displays a table of QR codes with actions
 * Includes functionality for selecting, editing, and deleting QR codes
 */
export function QrCodeList() {
  // In a real app, this data would come from an API or database
  const qrCodes = [
    {
      id: "1",
      name: "Company Website",
      type: "URL",
      url: "https://example.com",
      createdAt: "May 12, 2023",
      scans: 245,
      status: "Active",
    },
    {
      id: "2",
      name: "Product Catalog",
      type: "PDF",
      url: "https://example.com/catalog.pdf",
      createdAt: "May 10, 2023",
      scans: 128,
      status: "Active",
    },
    {
      id: "3",
      name: "Contact Card",
      type: "vCard",
      url: "https://example.com/contact",
      createdAt: "May 5, 2023",
      scans: 67,
      status: "Active",
    },
    {
      id: "4",
      name: "Event Registration",
      type: "URL",
      url: "https://example.com/event",
      createdAt: "April 28, 2023",
      scans: 203,
      status: "Active",
    },
    {
      id: "5",
      name: "Promotional Offer",
      type: "URL",
      url: "https://example.com/promo",
      createdAt: "April 20, 2023",
      scans: 189,
      status: "Inactive",
    },
  ]

  // State for selected QR codes
  const [selectedQrCodes, setSelectedQrCodes] = useState<string[]>([])

  /**
   * Toggle selection of a QR code
   * @param id - The ID of the QR code to toggle
   */
  const toggleQrCodeSelection = (id: string) => {
    setSelectedQrCodes((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  /**
   * Toggle selection of all QR codes
   */
  const toggleSelectAll = () => {
    if (selectedQrCodes.length === qrCodes.length) {
      setSelectedQrCodes([])
    } else {
      setSelectedQrCodes(qrCodes.map((qrCode) => qrCode.id))
    }
  }

  /**
   * Delete a QR code
   * @param id - The ID of the QR code to delete
   */
  const handleDelete = (id: string) => {
    // In a real app, you would call an API to delete the QR code
    console.log(`Deleting QR code with ID: ${id}`)
    alert(`QR code deleted (ID: ${id})`)
  }

  /**
   * Delete selected QR codes
   */
  const handleDeleteSelected = () => {
    // In a real app, you would call an API to delete the selected QR codes
    console.log(`Deleting QR codes with IDs: ${selectedQrCodes.join(", ")}`)
    alert(`${selectedQrCodes.length} QR codes deleted`)
    setSelectedQrCodes([])
  }

  return (
    <Card>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Input placeholder="Search QR codes..." className="w-[250px]" />
        </div>
        {selectedQrCodes.length > 0 && (
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download ({selectedQrCodes.length})
            </Button>
            <Button variant="destructive" size="sm" onClick={handleDeleteSelected}>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete ({selectedQrCodes.length})
            </Button>
          </div>
        )}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <Checkbox
                checked={selectedQrCodes.length === qrCodes.length && qrCodes.length > 0}
                onCheckedChange={toggleSelectAll}
                aria-label="Select all"
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Scans</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {qrCodes.map((qrCode) => (
            <TableRow key={qrCode.id}>
              <TableCell>
                <Checkbox
                  checked={selectedQrCodes.includes(qrCode.id)}
                  onCheckedChange={() => toggleQrCodeSelection(qrCode.id)}
                  aria-label={`Select ${qrCode.name}`}
                />
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <QrCode className="h-4 w-4 text-primary" />
                  {qrCode.name}
                </div>
              </TableCell>
              <TableCell>{qrCode.type}</TableCell>
              <TableCell>{qrCode.createdAt}</TableCell>
              <TableCell>{qrCode.scans}</TableCell>
              <TableCell>
                <div
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    qrCode.status === "Active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                  }`}
                >
                  {qrCode.status}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/qr-codes/${qrCode.id}`}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/qr-codes/${qrCode.id}/edit`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/qr-codes/${qrCode.id}/analytics`}>
                        <BarChart2 className="mr-2 h-4 w-4" />
                        Analytics
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/qr-codes/${qrCode.id}/download`}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={() => handleDelete(qrCode.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

