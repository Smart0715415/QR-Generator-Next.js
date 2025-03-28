"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { QrCodePreview } from "@/components/dashboard/qr-code-preview"
import { QrCodeCustomizer } from "@/components/dashboard/qr-code-customizer"

export default function CreateQrCodePage() {
  // State for QR code data
  const [qrData, setQrData] = useState({
    type: "url",
    name: "",
    url: "",
    text: "",
    email: "",
    emailSubject: "",
    emailBody: "",
    phone: "",
    smsMessage: "",
    vCardFirstName: "",
    vCardLastName: "",
    vCardEmail: "",
    vCardPhone: "",
    vCardCompany: "",
    vCardTitle: "",
    vCardWebsite: "",
    vCardAddress: "",
    wifiName: "",
    wifiPassword: "",
    wifiEncryption: "WPA",
  })

  // State for QR code customization
  const [customization, setCustomization] = useState({
    foregroundColor: "#000000",
    backgroundColor: "#FFFFFF",
    cornerStyle: "square",
    logoUrl: "",
    addFrame: false,
    frameText: "",
  })

  /**
   * Handle form input changes
   * @param e - The change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setQrData((prev) => ({ ...prev, [name]: value }))
  }

  /**
   * Handle radio button changes
   * @param value - The selected value
   * @param name - The name of the field
   */
  const handleRadioChange = (value: string, name: string) => {
    setQrData((prev) => ({ ...prev, [name]: value }))
  }

  /**
   * Handle customization changes
   * @param name - The name of the customization field
   * @param value - The new value
   */
  const handleCustomizationChange = (name: string, value: any) => {
    setCustomization((prev) => ({ ...prev, [name]: value }))
  }

  /**
   * Generate QR code content based on type
   * @returns The content for the QR code
   */
  const generateQrContent = (): string => {
    switch (qrData.type) {
      case "url":
        return qrData.url
      case "text":
        return qrData.text
      case "email":
        return `mailto:${qrData.email}?subject=${encodeURIComponent(qrData.emailSubject)}&body=${encodeURIComponent(qrData.emailBody)}`
      case "sms":
        return `sms:${qrData.phone}?body=${encodeURIComponent(qrData.smsMessage)}`
      case "vcard":
        return `BEGIN:VCARD
VERSION:3.0
N:${qrData.vCardLastName};${qrData.vCardFirstName}
FN:${qrData.vCardFirstName} ${qrData.vCardLastName}
ORG:${qrData.vCardCompany}
TITLE:${qrData.vCardTitle}
TEL:${qrData.vCardPhone}
EMAIL:${qrData.vCardEmail}
URL:${qrData.vCardWebsite}
ADR:;;${qrData.vCardAddress};;;
END:VCARD`
      case "wifi":
        return `WIFI:S:${qrData.wifiName};T:${qrData.wifiEncryption};P:${qrData.wifiPassword};;`
      default:
        return ""
    }
  }

  /**
   * Save the QR code
   */
  const handleSave = () => {
    // In a real app, you would call an API to save the QR code
    const qrContent = generateQrContent()
    console.log("Saving QR code with content:", qrContent)
    console.log("Customization:", customization)
    alert("QR code saved successfully!")
  }

  /**
   * Download the QR code
   */
  const handleDownload = () => {
    // In a real app, you would generate and download the QR code
    alert("QR code downloaded!")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/qr-codes">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Create QR Code</h1>
            <p className="text-muted-foreground">Generate a new QR code for your business or personal use</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="url" className="space-y-4">
                <TabsList className="grid grid-cols-3 md:grid-cols-6">
                  <TabsTrigger value="url" onClick={() => setQrData((prev) => ({ ...prev, type: "url" }))}>
                    URL
                  </TabsTrigger>
                  <TabsTrigger value="text" onClick={() => setQrData((prev) => ({ ...prev, type: "text" }))}>
                    Text
                  </TabsTrigger>
                  <TabsTrigger value="email" onClick={() => setQrData((prev) => ({ ...prev, type: "email" }))}>
                    Email
                  </TabsTrigger>
                  <TabsTrigger value="sms" onClick={() => setQrData((prev) => ({ ...prev, type: "sms" }))}>
                    SMS
                  </TabsTrigger>
                  <TabsTrigger value="vcard" onClick={() => setQrData((prev) => ({ ...prev, type: "vcard" }))}>
                    vCard
                  </TabsTrigger>
                  <TabsTrigger value="wifi" onClick={() => setQrData((prev) => ({ ...prev, type: "wifi" }))}>
                    WiFi
                  </TabsTrigger>
                </TabsList>

                {/* URL Content */}
                <TabsContent value="url" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">QR Code Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g., Company Website"
                      value={qrData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="url">URL</Label>
                    <Input
                      id="url"
                      name="url"
                      placeholder="https://example.com"
                      value={qrData.url}
                      onChange={handleChange}
                    />
                  </div>
                </TabsContent>

                {/* Text Content */}
                <TabsContent value="text" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">QR Code Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g., Product Information"
                      value={qrData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="text">Text Content</Label>
                    <Textarea
                      id="text"
                      name="text"
                      placeholder="Enter your text here"
                      value={qrData.text}
                      onChange={handleChange}
                      rows={5}
                    />
                  </div>
                </TabsContent>

                {/* Email Content */}
                <TabsContent value="email" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">QR Code Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g., Contact Email"
                      value={qrData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="contact@example.com"
                      value={qrData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emailSubject">Subject (Optional)</Label>
                    <Input
                      id="emailSubject"
                      name="emailSubject"
                      placeholder="Inquiry from QR Code"
                      value={qrData.emailSubject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emailBody">Body (Optional)</Label>
                    <Textarea
                      id="emailBody"
                      name="emailBody"
                      placeholder="Enter email body here"
                      value={qrData.emailBody}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>
                </TabsContent>

                {/* SMS Content */}
                <TabsContent value="sms" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">QR Code Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g., SMS Contact"
                      value={qrData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+1234567890"
                      value={qrData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="smsMessage">Message (Optional)</Label>
                    <Textarea
                      id="smsMessage"
                      name="smsMessage"
                      placeholder="Enter your message here"
                      value={qrData.smsMessage}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>
                </TabsContent>

                {/* vCard Content */}
                <TabsContent value="vcard" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">QR Code Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g., Business Card"
                      value={qrData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="vCardFirstName">First Name</Label>
                      <Input
                        id="vCardFirstName"
                        name="vCardFirstName"
                        placeholder="John"
                        value={qrData.vCardFirstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vCardLastName">Last Name</Label>
                      <Input
                        id="vCardLastName"
                        name="vCardLastName"
                        placeholder="Doe"
                        value={qrData.vCardLastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="vCardEmail">Email</Label>
                      <Input
                        id="vCardEmail"
                        name="vCardEmail"
                        type="email"
                        placeholder="john@example.com"
                        value={qrData.vCardEmail}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vCardPhone">Phone</Label>
                      <Input
                        id="vCardPhone"
                        name="vCardPhone"
                        placeholder="+1234567890"
                        value={qrData.vCardPhone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="vCardCompany">Company</Label>
                      <Input
                        id="vCardCompany"
                        name="vCardCompany"
                        placeholder="Acme Inc."
                        value={qrData.vCardCompany}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vCardTitle">Job Title</Label>
                      <Input
                        id="vCardTitle"
                        name="vCardTitle"
                        placeholder="Marketing Manager"
                        value={qrData.vCardTitle}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vCardWebsite">Website</Label>
                    <Input
                      id="vCardWebsite"
                      name="vCardWebsite"
                      placeholder="https://example.com"
                      value={qrData.vCardWebsite}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vCardAddress">Address</Label>
                    <Textarea
                      id="vCardAddress"
                      name="vCardAddress"
                      placeholder="123 Main St, City, Country"
                      value={qrData.vCardAddress}
                      onChange={handleChange}
                      rows={2}
                    />
                  </div>
                </TabsContent>

                {/* WiFi Content */}
                <TabsContent value="wifi" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">QR Code Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g., Office WiFi"
                      value={qrData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wifiName">Network Name (SSID)</Label>
                    <Input
                      id="wifiName"
                      name="wifiName"
                      placeholder="WiFi Network Name"
                      value={qrData.wifiName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wifiPassword">Password</Label>
                    <Input
                      id="wifiPassword"
                      name="wifiPassword"
                      type="password"
                      placeholder="WiFi Password"
                      value={qrData.wifiPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Encryption</Label>
                    <RadioGroup
                      value={qrData.wifiEncryption}
                      onValueChange={(value) => handleRadioChange(value, "wifiEncryption")}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="WPA" id="wpa" />
                        <Label htmlFor="wpa">WPA/WPA2</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="WEP" id="wep" />
                        <Label htmlFor="wep">WEP</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nopass" id="nopass" />
                        <Label htmlFor="nopass">No Password</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Customization</h2>
              <QrCodeCustomizer customization={customization} onChange={handleCustomizationChange} />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 flex flex-col items-center justify-center min-h-[400px]">
              <QrCodePreview content={generateQrContent()} customization={customization} />
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button className="flex-1" onClick={handleSave}>
              Save QR Code
            </Button>
            <Button variant="outline" className="flex-1" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

