"use client"

import { useEffect, useRef } from "react"
import QRCode from "qrcode"

/**
 * QrCodePreview component renders a preview of the QR code
 * @param content - The content to encode in the QR code
 * @param customization - Customization options for the QR code
 */
export function QrCodePreview({
  content,
  customization,
}: {
  content: string
  customization: {
    foregroundColor: string
    backgroundColor: string
    cornerStyle: string
    logoUrl: string
    addFrame: boolean
    frameText: string
  }
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!content || !canvasRef.current) return

    // Generate QR code
    QRCode.toCanvas(
      canvasRef.current,
      content,
      {
        width: 300,
        margin: 2,
        color: {
          dark: customization.foregroundColor,
          light: customization.backgroundColor,
        },
      },
      (error) => {
        if (error) console.error("Error generating QR code:", error)
      },
    )

    // Add logo if provided
    if (customization.logoUrl && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")

      if (ctx) {
        const logo = new Image()
        logo.crossOrigin = "anonymous"
        logo.src = customization.logoUrl

        logo.onload = () => {
          // Calculate logo size (20% of QR code)
          const logoSize = canvas.width * 0.2
          const logoX = (canvas.width - logoSize) / 2
          const logoY = (canvas.height - logoSize) / 2

          // Create white background for logo
          ctx.fillStyle = "white"
          ctx.fillRect(logoX - 5, logoY - 5, logoSize + 10, logoSize + 10)

          // Draw logo
          ctx.drawImage(logo, logoX, logoY, logoSize, logoSize)
        }
      }
    }
  }, [content, customization])

  return (
    <div className="flex flex-col items-center">
      <div className={`p-4 ${customization.addFrame ? "border-2 border-black rounded-lg" : ""}`}>
        <canvas ref={canvasRef} />
        {customization.addFrame && customization.frameText && (
          <div className="text-center mt-2 font-medium">{customization.frameText}</div>
        )}
      </div>
      {!content && <div className="text-muted-foreground mt-4 text-center">Enter content to generate a QR code</div>}
    </div>
  )
}

