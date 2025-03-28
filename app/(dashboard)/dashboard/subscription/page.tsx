"use client"

import { useState } from "react"
import { Check, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubscriptionInvoices } from "@/components/dashboard/subscription-invoices"

export default function SubscriptionPage() {
  // Current subscription plan (in a real app, this would come from an API)
  const [currentPlan, setCurrentPlan] = useState("premium")
  const [billingCycle, setBillingCycle] = useState("monthly")

  // Plans data
  const plans = [
    {
      id: "free",
      name: "Free",
      description: "Basic QR code generation",
      price: {
        monthly: "$0",
        yearly: "$0",
      },
      features: ["5 Dynamic QR codes", "Basic customization", "Limited analytics", "Standard support"],
    },
    {
      id: "premium",
      name: "Premium",
      description: "Advanced features for individuals",
      price: {
        monthly: "$9.99",
        yearly: "$99.99",
      },
      features: [
        "50 Dynamic QR codes",
        "Advanced customization",
        "Detailed analytics",
        "Priority support",
        "Custom logo integration",
      ],
      popular: true,
    },
    {
      id: "business",
      name: "Business",
      description: "Complete solution for businesses",
      price: {
        monthly: "$29.99",
        yearly: "$299.99",
      },
      features: [
        "Unlimited QR codes",
        "Full customization suite",
        "Advanced analytics & reports",
        "Bulk generation",
        "API access",
        "24/7 support",
      ],
    },
  ]

  /**
   * Handle plan change
   * @param planId - The ID of the selected plan
   */
  const handlePlanChange = (planId: string) => {
    // In a real app, you would call an API to update the subscription
    console.log(`Changing plan to ${planId}`)
    setCurrentPlan(planId)
  }

  /**
   * Calculate savings percentage for yearly billing
   * @param monthlyPrice - The monthly price
   * @param yearlyPrice - The yearly price
   * @returns The savings percentage
   */
  const calculateSavings = (monthlyPrice: string, yearlyPrice: string) => {
    const monthly = Number.parseFloat(monthlyPrice.replace("$", "")) * 12
    const yearly = Number.parseFloat(yearlyPrice.replace("$", ""))
    const savings = ((monthly - yearly) / monthly) * 100
    return Math.round(savings)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Subscription</h1>
        <p className="text-muted-foreground">Manage your subscription and billing information</p>
      </div>

      <Tabs defaultValue="plans" className="space-y-4">
        <TabsList>
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>
        <TabsContent value="plans" className="space-y-4">
          <div className="flex justify-end">
            <div className="inline-flex items-center rounded-lg border p-1 mb-4">
              <Button
                variant={billingCycle === "monthly" ? "default" : "ghost"}
                size="sm"
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </Button>
              <Button
                variant={billingCycle === "yearly" ? "default" : "ghost"}
                size="sm"
                onClick={() => setBillingCycle("yearly")}
              >
                Yearly
                <span className="ml-1.5 rounded-full bg-primary-foreground px-2 py-0.5 text-xs font-semibold text-primary">
                  Save 16-20%
                </span>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.id} className={plan.popular ? "border-primary shadow-lg" : ""}>
                {plan.popular && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.price[billingCycle as keyof typeof plan.price]}</span>
                    {billingCycle === "monthly" && <span className="text-sm text-muted-foreground">/month</span>}
                    {billingCycle === "yearly" && <span className="text-sm text-muted-foreground">/year</span>}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  {currentPlan === plan.id ? (
                    <Button className="w-full" disabled>
                      Current Plan
                    </Button>
                  ) : (
                    <Button
                      className="w-full"
                      variant={plan.id === "free" ? "outline" : "default"}
                      onClick={() => handlePlanChange(plan.id)}
                    >
                      {plan.id === "free" ? "Downgrade" : "Upgrade"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Update your payment information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-6 w-6" />
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 04/2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Billing Address</p>
                    <p className="text-sm text-muted-foreground">123 Main St, City, Country</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>View and download your invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <SubscriptionInvoices />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

