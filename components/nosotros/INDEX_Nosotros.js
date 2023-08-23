"use client"
import { DATA_COMPANY } from "@/utils/DATA_COMPANY.js"
import { useMoveFirstVisitToPage } from "@/utils/useMoveFirstVisitToPage.js"
import { useObserver } from "@/utils/useObserver.js"
import { useEffect, useRef, useState } from "react"
import { Copied } from "../contacto/Copied.js"
import { INDEX_NosotrosWrapper } from "./styles/INDEX_NosotrosWrapper.js"

const timeToShowCopied = 900

export const INDEX_Nosotros = () => {
  const myComponentRef = useRef(null)
  useMoveFirstVisitToPage(myComponentRef)

  const [isCopied, setIsCopied] = useState(false)
  const [textToShowInCopied, setTextToShowInCopied] = useState(null)

  const handleCopyText = (e, whatCopy) => {
    if (e.type === "click" || e.code === "Enter") {
      navigator.clipboard.writeText(whatCopy === undefined ? e.target.textContent : whatCopy)

      setIsCopied(true)
      setTextToShowInCopied(`Número Copiado`)
    }
  }

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false)
      }, timeToShowCopied)
    }
  }, [isCopied])

  const refComponent0 = useRef(null)
  const { intersected: intersectedComponent0 } = useObserver(refComponent0)

  const refComponent1 = useRef(null)
  const { intersected: intersectedComponent1 } = useObserver(refComponent1)

  const refComponent2 = useRef(null)
  const { intersected: intersectedComponent2 } = useObserver(refComponent2)

  const refComponent3 = useRef(null)
  const { intersected: intersectedComponent3 } = useObserver(refComponent3)

  const refComponent4 = useRef(null)
  const { intersected: intersectedComponent4 } = useObserver(refComponent4)

  return (
    <INDEX_NosotrosWrapper ref={myComponentRef}>
      <h2
        ref={refComponent0}
        className={intersectedComponent0 && `intersectedComponent0`}>
        <span>Agreducam</span> <span>La Portada</span>
      </h2>

      <div />

      <p
        ref={refComponent1}
        className={intersectedComponent1 && `intersectedComponent0`}>
        Es una asociación gremial de dueños de camiones, fundada el año 2000. Cuenta con una importante flota de camiones disponibles las 24 horas del día y los 365 días del año.
      </p>

      <p
        ref={refComponent2}
        className={intersectedComponent2 && `intersectedComponent0`}>
        Nuestra organización está presidida por un directorio conformado por:{" "}
      </p>

      <ol
        ref={refComponent3}
        className={intersectedComponent3 && `intersectedComponent0`}>
        <li
          onClick={(e) => handleCopyText(e, DATA_COMPANY.presidente.phone, DATA_COMPANY.presidente.name)}
          onKeyDown={(e) => handleCopyText(e, DATA_COMPANY.presidente.phone, DATA_COMPANY.presidente.name)}
          tabIndex={0}>
          <span>
            Presidente: <span>Juan Pastén</span>
          </span>
        </li>
        <li
          onClick={(e) => handleCopyText(e, DATA_COMPANY.tesorero.phone, DATA_COMPANY.tesorero.name)}
          onKeyDown={(e) => handleCopyText(e, DATA_COMPANY.tesorero.phone, DATA_COMPANY.tesorero.name)}
          tabIndex={0}>
          <span>
            Tesorero: <span>Pablo Soza</span>{" "}
          </span>
        </li>
        <li
          onClick={(e) => handleCopyText(e, DATA_COMPANY.jefeDeTransporte.phone, DATA_COMPANY.jefeDeTransporte.name)}
          onKeyDown={(e) => handleCopyText(e, DATA_COMPANY.jefeDeTransporte.phone, DATA_COMPANY.jefeDeTransporte.name)}
          tabIndex={0}>
          <span>
            Jefe de Transporte: <span>Ricardo Barrientos</span>{" "}
          </span>
        </li>
      </ol>

      <p
        ref={refComponent4}
        className={intersectedComponent4 && `intersectedComponent0`}>
        Gracias a nuestra experiencia, nos permite estar a la altura en el cumplimiento de tiempos y certezas en entrega, así como también la aplicación de estrictas normas en el
        manejo de sustancias peligrosas y explosivos.
      </p>

      <p>
        Estamos comprometidos con nuestros clientes de la II Region y preocupados de prestar un servicio de excelencia y calidad. Apoyamos la gestión empresarial, de servicio de
        transporte, dando soluciones a nuestros clientes en el proceso de consolidación, transporte y disposición final de cargas.
      </p>

      <Copied
        isCopied={isCopied}
        textToShow={textToShowInCopied}
      />

      <div />
    </INDEX_NosotrosWrapper>
  )
}
