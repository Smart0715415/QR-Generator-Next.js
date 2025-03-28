"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { QrCode } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  // State to store login form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  /**
   * Handle form input changes
   * @param e - The change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  /**
   * Handle form submission for login
   * @param e - The form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate form data
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields")
      return
    }
    // In a real app, you would authenticate the user
    console.log("Login attempt", formData)
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

      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-sm text-muted-foreground mt-1">Sign in to your account to continue</p>
      </div>

      <form onSubmit={handleSubmit}>
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
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button variant="outline" type="button">
          Google
          </Button>
          
          <Button variant="outline" type="button">
            Apple
          </Button>
        </div>
      </div>

      <div className="mt-6 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-primary hover:underline">
          Sign up
        </Link>
      </div>
    </>
  )
}

