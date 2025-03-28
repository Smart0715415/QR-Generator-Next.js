"use client"

import { Download, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

/**
 * SubscriptionInvoices component displays a table of invoices
 * Shows invoice date, amount, status, and download option
 */
export function SubscriptionInvoices() {
  // In a real app, this data would come from an API or database
  const invoices = [
    {
      id: "INV-001",
      date: "May 1, 2023",
      amount: "$9.99",
      status: "Paid",
      downloadUrl: "#",
    },
    {
      id: "INV-002",
      date: "Apr 1, 2023",
      amount: "$9.99",
      status: "Paid",
      downloadUrl: "#",
    },
    {
      id: "INV-003",
      date: "Mar 1, 2023",
      amount: "$9.99",
      status: "Paid",
      downloadUrl: "#",
    },
    {
      id: "INV-004",
      date: "Feb 1, 2023",
      amount: "$9.99",
      status: "Paid",
      downloadUrl: "#",
    },
    {
      id: "INV-005",
      date: "Jan 1, 2023",
      amount: "$9.99",
      status: "Paid",
      downloadUrl: "#",
    },
  ]

  /**
   * Handle invoice download
   * @param invoiceId - The ID of the invoice to download
   */
  const handleDownload = (invoiceId: string) => {
    // In a real app, you would download the invoice
    console.log(`Downloading invoice ${invoiceId}`)
    alert(`Invoice ${invoiceId} downloaded`)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                {invoice.id}
              </div>
            </TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>
              <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                {invoice.status}
              </div>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon" onClick={() => handleDownload(invoice.id)}>
                <Download className="h-4 w-4" />
                <span className="sr-only">Download invoice {invoice.id}</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

