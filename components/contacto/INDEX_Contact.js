"use client"
import { DATA_COMPANY } from "@/utils/DATA_COMPANY.js"
import { formatNumberToUI } from "@/utils/formatNumberToUI.js"
import { useMoveFirstVisitToPage } from "@/utils/useMoveFirstVisitToPage.js"
import { useEffect, useRef, useState } from "react"
import { Copied } from "./Copied.js"
import { INDEX_ContactWrapper } from "./styles/INDEX_ContactWrapper.js"

const timeToShowCopied = 900

export const INDEX_Contact = () => {
  // const [isHover, setIsHover] = useState(false)
  // const handleOnMouseEnter = () => {
  //   setIsHover(true)
  // }
  // const handleOnMouseLeave = () => {
  //   setIsHover(false)
  // }

  const [isCopiedMail, setIsCopiedMail] = useState(false)
  const [isCopiedPhone, setIsCopiedPhone] = useState(false)
  const [textToShowInCopied, setTextToShowInCopied] = useState(null)

  const handleCopyText = (e, whichCopied, whatCopied) => {
    if (e.type === "click" || e.code === "Enter") {
      navigator.clipboard.writeText(whatCopied)

      if (whichCopied === "email") {
        setIsCopiedMail(true)
        setTextToShowInCopied(`Correo Copiado`)
      }
      if (whichCopied === "phone") {
        setIsCopiedPhone(true)
        setTextToShowInCopied(`Teléfono Copiado`)
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

  const myComponentRef = useRef(null)
  useMoveFirstVisitToPage(myComponentRef, -25)

  return (
    <INDEX_ContactWrapper ref={myComponentRef}>
      <div >
        <h1>Contáctanos</h1>

        <div>
          <h2>Directorio:</h2>
          <ol>
            <li
              onClick={(e) => handleCopyText(e, "phone", DATA_COMPANY.presidente.phone)}
              onKeyDown={(e) => handleCopyText(e, "phone", DATA_COMPANY.presidente.phone)}
              tabIndex={0}>
              <span>
                Presidente <span>Juan Pastén</span> <span>{formatNumberToUI(DATA_COMPANY.presidente.phone)}</span>{" "}
              </span>
            </li>
            <li
              onClick={(e) => handleCopyText(e, "phone", DATA_COMPANY.tesorero.phone)}
              onKeyDown={(e) => handleCopyText(e, "phone", DATA_COMPANY.tesorero.phone)}
              tabIndex={0}>
              <span>
                Tesorero <span>Pablo Soza</span> <span>{formatNumberToUI(DATA_COMPANY.tesorero.phone)}</span>{" "}
              </span>
            </li>
            <li
              onClick={(e) => handleCopyText(e, "phone", DATA_COMPANY.jefeDeTransporte.phone)}
              onKeyDown={(e) => handleCopyText(e, "phone", DATA_COMPANY.jefeDeTransporte.phone)}
              tabIndex={0}>
              <span>
                Jefe de Transporte <span>Ricardo Barrientos</span> <span>{formatNumberToUI(DATA_COMPANY.jefeDeTransporte.phone)}</span>{" "}
              </span>
            </li>
          </ol>
        </div>

        <div>
          <h2>Coordinación:</h2>
          <ol>
            <li>
              Encargado: <span className="shouldWrap">{DATA_COMPANY.coordinador.name}</span>
            </li>
            <li
              onClick={(e) => handleCopyText(e, "phone", DATA_COMPANY.coordinador.phone)}
              onKeyDown={(e) => handleCopyText(e, "phone", DATA_COMPANY.coordinador.phone)}
              tabIndex={0}>
              <span>
                Número de contacto: <span>{formatNumberToUI(DATA_COMPANY.coordinador.phone)}</span>
              </span>
            </li>
            <li>
              <span
                onClick={(e) => handleCopyText(e, "email", DATA_COMPANY.coordinador.email)}
                onKeyDown={(e) => handleCopyText(e, "email", DATA_COMPANY.coordinador.email)}
                tabIndex={0}>
                Correo: <span className="isEmail">{DATA_COMPANY.coordinador.email}</span>
              </span>
            </li>
          </ol>
        </div>

        <div>
          <h2>Administración:</h2>
          <ol>
            <li
              onClick={(e) => handleCopyText(e, "phone", DATA_COMPANY.administracion.phone)}
              onKeyDown={(e) => handleCopyText(e, "phone", DATA_COMPANY.administracion.phone)}
              tabIndex={0}>
              <span>
                Número de contacto: <span>{formatNumberToUI(DATA_COMPANY.administracion.phone)}</span>
              </span>
            </li>
            <li
              onClick={(e) => handleCopyText(e, "email", DATA_COMPANY.administracion.email)}
              onKeyDown={(e) => handleCopyText(e, "email", DATA_COMPANY.administracion.email)}
              tabIndex={0}>
              <span>
                Correo: <span className="isEmail">{DATA_COMPANY.administracion.email}</span>
              </span>
            </li>
          </ol>
        </div>
      </div>

      <Copied
        isCopied={isCopiedPhone || isCopiedMail}
        textToShow={textToShowInCopied}
      />
    </INDEX_ContactWrapper>
  )
}
