import "./globals.css"
import { Metadata } from "next"
import { ReactNode, useContext } from "react"
import DeviceContext from "@context/device"

export const metadata:Metadata = {
  title: "GifVault",
  description: "Donde la diversión está asegurada 😁",
  icons: "/src/favicon.ico"
}

export default function RootLayout
({ children }: { children: ReactNode }) 
{

  return (
    <html lang="es">
      <body>
        <DeviceContext>
          {children}
        </DeviceContext>
      </body>
    </html>
  );
}