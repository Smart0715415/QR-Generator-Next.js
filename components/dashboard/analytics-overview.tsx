"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

/**
 * AnalyticsOverview component displays key analytics metrics and charts
 * Shows scan trends, top performing QR codes, and conversion metrics
 */
export function AnalyticsOverview() {
  // In a real app, this data would come from an API or database
  const scanTrends = [
    { date: "Jan", scans: 120 },
    { date: "Feb", scans: 150 },
    { date: "Mar", scans: 180 },
    { date: "Apr", scans: 220 },
    { date: "May", scans: 300 },
    { date: "Jun", scans: 250 },
    { date: "Jul", scans: 280 },
    { date: "Aug", scans: 320 },
    { date: "Sep", scans: 350 },
    { date: "Oct", scans: 400 },
    { date: "Nov", scans: 450 },
    { date: "Dec", scans: 500 },
  ]

  const topQrCodes = [
    { name: "Company Website", scans: 245 },
    { name: "Product Catalog", scans: 180 },
    { name: "Event Registration", scans: 150 },
    { name: "Contact Card", scans: 120 },
    { name: "Promotional Offer", scans: 100 },
  ]

  const conversionData = [
    { date: "Jan", scans: 120, conversions: 24 },
    { date: "Feb", scans: 150, conversions: 35 },
    { date: "Mar", scans: 180, conversions: 45 },
    { date: "Apr", scans: 220, conversions: 66 },
    { date: "May", scans: 300, conversions: 105 },
    { date: "Jun", scans: 250, conversions: 75 },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Scan Trends</CardTitle>
          <CardDescription>Monthly scan activity over the past year</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={scanTrends}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="date" className="text-xs text-muted-foreground" tickLine={false} axisLine={false} />
                <YAxis className="text-xs text-muted-foreground" tickLine={false} axisLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="scans" stroke="hsl(var(--primary))" fill="hsl(var(--primary)/0.2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Top Performing QR Codes</CardTitle>
          <CardDescription>QR codes with the most scans</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={topQrCodes}
                layout="vertical"
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis type="number" className="text-xs text-muted-foreground" tickLine={false} axisLine={false} />
                <YAxis
                  type="category"
                  dataKey="name"
                  className="text-xs text-muted-foreground"
                  tickLine={false}
                  axisLine={false}
                  width={100}
                />
                <Tooltip />
                <Bar dataKey="scans" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-7">
        <CardHeader>
          <CardTitle>Conversion Metrics</CardTitle>
          <CardDescription>Comparison of scans vs. conversions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={conversionData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="date" className="text-xs text-muted-foreground" tickLine={false} axisLine={false} />
                <YAxis className="text-xs text-muted-foreground" tickLine={false} axisLine={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="scans" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="conversions" stroke="hsl(var(--destructive))" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

