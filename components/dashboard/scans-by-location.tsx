"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

/**
 * ScansByLocation component displays charts showing scan distribution by location
 * Shows breakdown by country and city
 */
export function ScansByLocation() {
  // In a real app, this data would come from an API or database
  const countryData = [
    { name: "United States", value: 45 },
    { name: "United Kingdom", value: 15 },
    { name: "Germany", value: 12 },
    { name: "France", value: 8 },
    { name: "Canada", value: 7 },
    { name: "Australia", value: 5 },
    { name: "Other", value: 8 },
  ]

  const cityData = [
    { name: "New York", value: 15 },
    { name: "London", value: 12 },
    { name: "Berlin", value: 8 },
    { name: "Paris", value: 7 },
    { name: "Toronto", value: 6 },
    { name: "Sydney", value: 5 },
    { name: "Chicago", value: 4 },
    { name: "Other", value: 43 },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Top Countries</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={countryData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
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
      <div>
        <h3 className="text-lg font-medium mb-4">Top Cities</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={cityData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
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

