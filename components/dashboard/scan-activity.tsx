"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

/**
 * ScanActivity component displays a chart of QR code scan activity over time
 * Shows scan trends for the last 30 days
 */
export function ScanActivity() {
  // In a real app, this data would come from an API or database
  const data = [
    { date: "01/05", scans: 12 },
    { date: "02/05", scans: 18 },
    { date: "03/05", scans: 15 },
    { date: "04/05", scans: 25 },
    { date: "05/05", scans: 32 },
    { date: "06/05", scans: 28 },
    { date: "07/05", scans: 20 },
    { date: "08/05", scans: 22 },
    { date: "09/05", scans: 35 },
    { date: "10/05", scans: 40 },
    { date: "11/05", scans: 45 },
    { date: "12/05", scans: 50 },
    { date: "13/05", scans: 48 },
    { date: "14/05", scans: 52 },
  ]

  return (
    <div className="h-[250px] md:h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="date"
            className="text-xs text-muted-foreground"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
            tickFormatter={(value) => {
              // On small screens, show fewer ticks
              return window.innerWidth < 640 && data.indexOf({ date: value, scans: 0 }) % 2 !== 0 ? "" : value
            }}
          />
          <YAxis className="text-xs text-muted-foreground" tickLine={false} axisLine={false} />
          <Tooltip />
          <Area type="monotone" dataKey="scans" stroke="hsl(var(--primary))" fill="hsl(var(--primary)/0.2)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

