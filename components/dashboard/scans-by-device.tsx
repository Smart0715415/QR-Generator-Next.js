"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "@/components/ui/chart"

/**
 * ScansByDevice component displays charts showing scan distribution by device
 * Shows breakdown by device type and browser
 */
export function ScansByDevice() {
  // In a real app, this data would come from an API or database
  const deviceData = [
    { name: "Mobile", value: 65 },
    { name: "Desktop", value: 25 },
    { name: "Tablet", value: 10 },
  ]

  const browserData = [
    { name: "Chrome", value: 45 },
    { name: "Safari", value: 30 },
    { name: "Firefox", value: 15 },
    { name: "Edge", value: 8 },
    { name: "Other", value: 2 },
  ]

  const COLORS = [
    "hsl(var(--primary))",
    "hsl(var(--destructive))",
    "hsl(var(--warning))",
    "hsl(var(--secondary))",
    "hsl(var(--muted))",
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <h3 className="text-lg font-medium mb-4 text-center">Device Type</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4 text-center">Browser</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={browserData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {browserData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

