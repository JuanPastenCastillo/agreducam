"use client"
import { useEffect, useState } from "react"
import { Copied } from "./Copied.js"
import { INDEX_ContactWrapper } from "./styles/INDEX_ContactWrapper.js"

const timeToShowCopied = 2000

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
    if (e.type === "click" || e.code === "Enter") {
      navigator.clipboard.writeText(e.target.textContent)

      if (whichCopied === "email") {
        setIsCopiedMail(true)
      }
      if (whichCopied === "phone") {
        setIsCopiedPhone(true)
      }
    }
  }

  useEffect(() => {
    if (isCopiedMail) {
      setTimeout(() => {
        setIsCopiedMail(false)
      }, timeToShowCopied)
    }
  }, [isCopiedMail])

  useEffect(() => {
    if (isCopiedPhone) {
      setTimeout(() => {
        setIsCopiedPhone(false)
      }, timeToShowCopied)
    }
  }, [isCopiedPhone])

  return (
    <INDEX_ContactWrapper
      isHover={isHover}>
      <div>
        <h1>Contáctanos</h1>
        <h2>
          Email:{" "}
          <span
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            onClick={(e) => handleCopyText(e, "email")}
            onKeyDown={(e) => handleCopyText(e, "email")}
            tabIndex={0}
          >
            contacto@Agreducam.com
          </span>
          <Copied isCopied={isCopiedMail} textToShow="Correo copiado" />
        </h2>
        <h2>
          Teléfono:{" "}
          <span
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            onClick={(e) => handleCopyText(e, "phone")}
            onKeyDown={(e) => handleCopyText(e, "phone")}
            tabIndex={0}
          >
            +569 5555 5555
          </span>
          <Copied isCopied={isCopiedPhone} textToShow="Número copiado" />
        </h2>
      </div>

    </INDEX_ContactWrapper>
  )
}
