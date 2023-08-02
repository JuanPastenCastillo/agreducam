"use client"
import { useEffect, useState } from "react"
import { Copied } from "./Copied.js"
import { INDEX_ContactWrapper } from "./styles/INDEX_ContactWrapper.js"

export const INDEX_Contact = () => {
  const [isHover, setIsHover] = useState(false)
  const handleOnMouseEnter = () => {
    setIsHover(true)
  }
  const handleOnMouseLeave = () => {
    setIsHover(false)
  }

  const [isCopiedMail, setIsCopiedMail] = useState(false)
  const [isCopiedPhone, setIsCopiedPhone] = useState(false)


  const handleCopyText = (e, whichCopied) => {
    navigator.clipboard.writeText(e.target.textContent)

    if (whichCopied === "email") {
      setIsCopiedMail(true)
    }
    if (whichCopied === "phone") {
      setIsCopiedPhone(true)
    }
  }

  useEffect(() => {
    if (isCopiedMail) {
      setTimeout(() => {
        setIsCopiedMail(false)
      }, 1000)
    }
    if (isCopiedPhone) {
      setTimeout(() => {
        setIsCopiedPhone(false)
      }, 1000)
    }



  }, [isCopiedMail, isCopiedPhone])

  return (
    <INDEX_ContactWrapper
      color="yellowgreen"
      isHover={isHover}>
      <div>
        <h1>Comunícate</h1>
        <h2>
          Email:{" "}
          <span
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            onClick={(e) => handleCopyText(e, "email")}>
            contacto@Agreducam.com

          </span>
          <Copied isCopied={isCopiedMail}
          />
        </h2>
        <h2>
          Teléfono:{" "}
          <span
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            onClick={(e) => handleCopyText(e, "phone")}>
            +569 5555 5555

          </span>
          <Copied isCopied={isCopiedPhone}
          />
        </h2>
      </div>

      {/* <ContactComponent /> */}
    </INDEX_ContactWrapper>
  )
}
