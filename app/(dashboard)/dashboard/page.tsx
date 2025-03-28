"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QrCodeStats } from "@/components/dashboard/qr-code-stats"
import { RecentQrCodes } from "@/components/dashboard/recent-qr-codes"
import { ScanActivity } from "@/components/dashboard/scan-activity"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { MobileHeader } from "@/components/dashboard/mobile-header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"

export default function DashboardPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="space-y-6">
      <MobileHeader onMenuClick={() => setMobileMenuOpen(true)} title="Dashboard" />

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="p-0">
          <DashboardSidebar />
        </SheetContent>
      </Sheet>

      <div className="md:block">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your QR code activity and performance</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <QrCodeStats />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-full lg:col-span-4">
              <CardHeader>
                <CardTitle>Scan Activity</CardTitle>
                <CardDescription>QR code scans over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ScanActivity />
              </CardContent>
            </Card>
            <Card className="col-span-full lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent QR Codes</CardTitle>
                <CardDescription>Your recently created QR codes</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentQrCodes />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed analytics for your QR codes</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Analytics content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and download reports</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Reports content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

