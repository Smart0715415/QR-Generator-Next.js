"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, QrCode } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
  // State to track the current registration step
  const [step, setStep] = useState<"account" | "plan" | "payment">("account")

  // State to store user registration data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    selectedPlan: "",
  })

  // Plans available for subscription
  const plans = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      description: "Basic QR code generation",
      features: ["5 Dynamic QR codes", "Basic customization", "Limited analytics"],
    },
    {
      id: "premium",
      name: "Premium",
      price: "$9.99/month",
      description: "Advanced features for individuals",
      features: ["50 Dynamic QR codes", "Advanced customization", "Detailed analytics", "Custom logo integration"],
    },
    {
      id: "business",
      name: "Business",
      price: "$29.99/month",
      description: "Complete solution for businesses",
      features: [
        "Unlimited QR codes",
        "Full customization suite",
        "Advanced analytics & reports",
        "Bulk generation",
        "API access",
      ],
    },
  ]

  /**
   * Handle form input changes
   * @param e - The change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  /**
   * Handle plan selection
   * @param planId - The ID of the selected plan
   */
  const handlePlanSelect = (planId: string) => {
    setFormData((prev) => ({ ...prev, selectedPlan: planId }))
  }

  /**
   * Handle form submission for the account creation step
   * @param e - The form submission event
   */
  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate form data
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      alert("Please fill in all fields")
      return
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    // Move to plan selection step
    setStep("plan")
  }

  /**
   * Handle form submission for the plan selection step
   * @param e - The form submission event
   */
  const handlePlanSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate plan selection
    if (!formData.selectedPlan) {
      alert("Please select a plan")
      return
    }
    // If free plan, redirect to dashboard
    if (formData.selectedPlan === "free") {
      // In a real app, you would register the user and redirect
      console.log("Registration successful with free plan", formData)
      window.location.href = "/dashboard"
      return
    }
    // Move to payment step for paid plans
    setStep("payment")
  }

  /**
   * Handle form submission for the payment step
   * @param e - The form submission event
   */
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would process the payment and register the user
    console.log("Registration and payment successful", formData)
    window.location.href = "/dashboard"
  }

  return (
    <>
      <div className="flex items-center justify-center mb-6">
        <Link href="/" className="flex items-center gap-2">
          <QrCode className="h-6 w-6" />
          <span className="text-xl font-bold">QR Platform</span>
        </Link>
      </div>

      {step === "account" && (
        <div>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="text-sm text-muted-foreground mt-1">Enter your email to get started</p>
          </div>

          <form onSubmit={handleAccountSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      )}

      {step === "plan" && (
        <div>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Choose your plan</h1>
            <p className="text-sm text-muted-foreground mt-1">Select the plan that works best for you</p>
          </div>

          <form onSubmit={handlePlanSubmit}>
            <div className="space-y-4">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    formData.selectedPlan === plan.id ? "border-primary bg-primary/5" : "hover:border-primary/50"
                  }`}
                  onClick={() => handlePlanSelect(plan.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{plan.price}</div>
                      <div className="flex items-center justify-end mt-2">
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            formData.selectedPlan === plan.id
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-muted-foreground"
                          }`}
                        >
                          {formData.selectedPlan === plan.id && <Check className="h-3 w-3" />}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <ul className="text-sm space-y-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <Button type="submit" className="w-full">
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>

          <Button variant="ghost" className="mt-4 w-full" onClick={() => setStep("account")}>
            Back to Account Details
          </Button>
        </div>
      )}

      {step === "payment" && (
        <div>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Payment Details</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Enter your payment information to complete your subscription
            </p>
          </div>

          <form onSubmit={handlePaymentSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardName">Name on Card</Label>
                <Input id="cardName" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" required />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Complete Subscription
              </Button>
            </div>
          </form>

          <Button variant="ghost" className="mt-4 w-full" onClick={() => setStep("plan")}>
            Back to Plan Selection
          </Button>
        </div>
      )}
    </>
  )
}

