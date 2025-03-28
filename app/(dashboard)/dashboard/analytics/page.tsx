import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnalyticsOverview } from "@/components/dashboard/analytics-overview"
import { ScansByDevice } from "@/components/dashboard/scans-by-device"
import { ScansByLocation } from "@/components/dashboard/scans-by-location"
import { ScansByTime } from "@/components/dashboard/scans-by-time"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">Track and analyze your QR code performance</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="time">Time Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <AnalyticsOverview />
        </TabsContent>
        <TabsContent value="devices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scans by Device</CardTitle>
              <CardDescription>Breakdown of scans by device type and browser</CardDescription>
            </CardHeader>
            <CardContent>
              <ScansByDevice />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="locations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scans by Location</CardTitle>
              <CardDescription>Geographic distribution of QR code scans</CardDescription>
            </CardHeader>
            <CardContent>
              <ScansByLocation />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="time" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scans by Time</CardTitle>
              <CardDescription>Analysis of scan patterns by time of day and day of week</CardDescription>
            </CardHeader>
            <CardContent>
              <ScansByTime />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

