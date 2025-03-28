"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

/**
 * ScansByTime component displays charts showing scan distribution by time
 * Shows breakdown by time of day and day of week
 */
export function ScansByTime() {
  // In a real app, this data would come from an API or database
  const timeOfDayData = [
    { name: "12 AM", value: 2 },
    { name: "2 AM", value: 1 },
    { name: "4 AM", value: 0.5 },
    { name: "6 AM", value: 1 },
    { name: "8 AM", value: 5 },
    { name: "10 AM", value: 10 },
    { name: "12 PM", value: 15 },
    { name: "2 PM", value: 18 },
    { name: "4 PM", value: 20 },
    { name: "6 PM", value: 15 },
    { name: "8 PM", value: 10 },
    { name: "10 PM", value: 5 },
  ]

  const dayOfWeekData = [
    { name: "Monday", value: 15 },
    { name: "Tuesday", value: 18 },
    { name: "Wednesday", value: 20 },
    { name: "Thursday", value: 17 },
    { name: "Friday", value: 15 },
    { name: "Saturday", value: 10 },
    { name: "Sunday", value: 5 },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Scans by Time of Day</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={timeOfDayData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs text-muted-foreground" tickLine={false} axisLine={false} />
              <YAxis className="text-xs text-muted-foreground" tickLine={false} axisLine={false} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                name="Scans %"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary)/0.2)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4">Scans by Day of Week</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dayOfWeekData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs text-muted-foreground" tickLine={false} axisLine={false} />
              <YAxis className="text-xs text-muted-foreground" tickLine={false} axisLine={false} />
              <Tooltip />
              <Bar dataKey="value" name="Scans %" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

