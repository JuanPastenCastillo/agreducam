"use client"
import StyledComponentsRegistry from "@/lib/registry"
import { INDEX_Footer } from "../components/footer/INDEX_Footer"
import { INDEX_NavBar } from "../components/nav-bar/INDEX_NavBar"
import NoSsr from "./NoSsr"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="disablePictureInPicture"
        content="true"
      />

      <body>
        <NoSsr>
          <INDEX_NavBar />
          <StyledComponentsRegistry>
            <main>{children}</main>
          </StyledComponentsRegistry>



          <INDEX_Footer />
        </NoSsr>
      </body>
    </html>
  )
}
