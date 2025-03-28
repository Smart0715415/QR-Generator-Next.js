"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

/**
 * QrCodeCustomizer component provides UI for customizing QR code appearance
 * @param customization - Current customization settings
 * @param onChange - Function to update customization settings
 */
export function QrCodeCustomizer({
  customization,
  onChange,
}: {
  customization: {
    foregroundColor: string
    backgroundColor: string
    cornerStyle: string
    logoUrl: string
    addFrame: boolean
    frameText: string
  }
  onChange: (name: string, value: any) => void
}) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="foregroundColor">Foreground Color</Label>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md border" style={{ backgroundColor: customization.foregroundColor }} />
            <Input
              id="foregroundColor"
              type="color"
              value={customization.foregroundColor}
              onChange={(e) => onChange("foregroundColor", e.target.value)}
              className="w-full h-10"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="backgroundColor">Background Color</Label>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md border" style={{ backgroundColor: customization.backgroundColor }} />
            <Input
              id="backgroundColor"
              type="color"
              value={customization.backgroundColor}
              onChange={(e) => onChange("backgroundColor", e.target.value)}
              className="w-full h-10"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Corner Style</Label>
        <RadioGroup
          value={customization.cornerStyle}
          onValueChange={(value) => onChange("cornerStyle", value)}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="square" id="square" />
            <Label htmlFor="square">Square</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rounded" id="rounded" />
            <Label htmlFor="rounded">Rounded</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dots" id="dots" />
            <Label htmlFor="dots">Dots</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-2">
        <Label htmlFor="logoUrl">Logo URL (Optional)</Label>
        <Input
          id="logoUrl"
          placeholder="https://example.com/logo.png"
          value={customization.logoUrl}
          onChange={(e) => onChange("logoUrl", e.target.value)}
        />
        <p className="text-xs text-muted-foreground">Add your logo to the center of the QR code</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="addFrame">Add Frame</Label>
          <p className="text-xs text-muted-foreground">Add a frame around your QR code</p>
        </div>
        <Switch
          id="addFrame"
          checked={customization.addFrame}
          onCheckedChange={(checked) => onChange("addFrame", checked)}
        />
      </div>

      {customization.addFrame && (
        <div className="space-y-2">
          <Label htmlFor="frameText">Frame Text</Label>
          <Input
            id="frameText"
            placeholder="Scan me"
            value={customization.frameText}
            onChange={(e) => onChange("frameText", e.target.value)}
          />
        </div>
      )}
    </div>
  )
}

