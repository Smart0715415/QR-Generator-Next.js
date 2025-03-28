"use client"

import { useState } from "react"
import { Check, ChevronsUpDown, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

/**
 * QrCodeFilters component provides filtering options for QR codes
 * Includes filters for type, status, and date range
 */
export function QrCodeFilters() {
  // State for selected filters
  const [typeFilter, setTypeFilter] = useState<string>("")
  const [statusFilter, setStatusFilter] = useState<string>("")
  const [dateFilter, setDateFilter] = useState<string>("")

  // QR code types for filtering
  const types = [
    { value: "url", label: "URL" },
    { value: "vcard", label: "vCard" },
    { value: "pdf", label: "PDF" },
    { value: "text", label: "Plain Text" },
    { value: "email", label: "Email" },
    { value: "sms", label: "SMS" },
    { value: "wifi", label: "WiFi" },
  ]

  // QR code statuses for filtering
  const statuses = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "expired", label: "Expired" },
  ]

  // Date ranges for filtering
  const dateRanges = [
    { value: "today", label: "Today" },
    { value: "yesterday", label: "Yesterday" },
    { value: "last7days", label: "Last 7 days" },
    { value: "last30days", label: "Last 30 days" },
    { value: "thismonth", label: "This month" },
    { value: "lastmonth", label: "Last month" },
  ]

  /**
   * Reset all filters to their default values
   */
  const resetFilters = () => {
    setTypeFilter("")
    setStatusFilter("")
    setDateFilter("")
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center">
        <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Filters:</span>
      </div>

      {/* Type filter */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 border-dashed">
            <span>{typeFilter ? types.find((t) => t.value === typeFilter)?.label : "Type"}</span>
            <ChevronsUpDown className="ml-2 h-4 w-4 text-muted-foreground" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search type..." />
            <CommandList>
              <CommandEmpty>No type found.</CommandEmpty>
              <CommandGroup>
                {types.map((type) => (
                  <CommandItem
                    key={type.value}
                    value={type.value}
                    onSelect={(value) => {
                      setTypeFilter(value === typeFilter ? "" : value)
                    }}
                  >
                    <Check className={cn("mr-2 h-4 w-4", typeFilter === type.value ? "opacity-100" : "opacity-0")} />
                    {type.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Status filter */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 border-dashed">
            <span>{statusFilter ? statuses.find((s) => s.value === statusFilter)?.label : "Status"}</span>
            <ChevronsUpDown className="ml-2 h-4 w-4 text-muted-foreground" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search status..." />
            <CommandList>
              <CommandEmpty>No status found.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    onSelect={(value) => {
                      setStatusFilter(value === statusFilter ? "" : value)
                    }}
                  >
                    <Check
                      className={cn("mr-2 h-4 w-4", statusFilter === status.value ? "opacity-100" : "opacity-0")}
                    />
                    {status.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Date filter */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 border-dashed">
            <span>{dateFilter ? dateRanges.find((d) => d.value === dateFilter)?.label : "Date"}</span>
            <ChevronsUpDown className="ml-2 h-4 w-4 text-muted-foreground" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search date range..." />
            <CommandList>
              <CommandEmpty>No date range found.</CommandEmpty>
              <CommandGroup>
                {dateRanges.map((dateRange) => (
                  <CommandItem
                    key={dateRange.value}
                    value={dateRange.value}
                    onSelect={(value) => {
                      setDateFilter(value === dateFilter ? "" : value)
                    }}
                  >
                    <Check
                      className={cn("mr-2 h-4 w-4", dateFilter === dateRange.value ? "opacity-100" : "opacity-0")}
                    />
                    {dateRange.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>      

      {/* Reset filters button */}
      {(typeFilter || statusFilter || dateFilter) && (
        <>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 px-2 text-xs">
            Reset filters
          </Button>
        </>
      )}
    </div>
  )
}

