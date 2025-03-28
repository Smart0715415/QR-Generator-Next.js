import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCode, Scan, Eye, ArrowUpRight } from "lucide-react"

/**
 * QrCodeStats component displays key metrics about QR codes
 * Shows total QR codes, total scans, and unique visitors
 */
export function QrCodeStats() {
  // In a real app, this data would come from an API or database
  const stats = [
    {
      title: "Total QR Codes",
      value: "12",
      description: "Active QR codes in your account",
      icon: QrCode,
      change: "+2 this week",
    },
    {
      title: "Total Scans",
      value: "1,234",
      description: "Total scans across all QR codes",
      icon: Scan,
      change: "+15% from last month",
    },
    {
      title: "Unique Visitors",
      value: "856",
      description: "Unique visitors from QR scans",
      icon: Eye,
      change: "+8% from last month",
    },
  ]

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
            {stat.change && (
              <div className="mt-2 flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                {stat.change}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

