import Link from "next/link"
import { ArrowRight, Check, QrCode } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  // Pricing plans for the QR code platform
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic QR code generation",
      features: ["5 Dynamic QR codes", "Basic customization", "Limited analytics", "Standard support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      description: "Advanced features for individuals",
      features: [
        "50 Dynamic QR codes",
        "Advanced customization",
        "Detailed analytics",
        "Priority support",
        "Custom logo integration",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Business",
      price: "$29.99",
      period: "per month",
      description: "Complete solution for businesses",
      features: [
        "Unlimited QR codes",
        "Full customization suite",
        "Advanced analytics & reports",
        "Bulk generation",
        "API access",
        "24/7 support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <QrCode className="h-6 w-6" />
            <span className="text-xl font-bold">QR Platform</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="container py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Create, Customize, and Track <br />
            <span className="text-primary">QR Codes</span> with Ease
          </h1>
          <p className="mt-6 max-w-[42rem] text-muted-foreground sm:text-xl">
            Generate dynamic QR codes for your business or personal use. Customize them to match your brand and track
            their performance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#pricing">
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section id="pricing" className="container py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 max-w-[42rem] text-muted-foreground sm:text-xl">
            Choose the plan that works best for you or your business
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.popular ? "border-primary shadow-lg" : ""}>
              {plan.popular && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
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
                <Link href="/register" className="w-full">
                  <Button className="w-full">{plan.cta}</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <QrCode className="h-5 w-5" />
              <span className="text-lg font-semibold">QR Platform</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} QR Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

