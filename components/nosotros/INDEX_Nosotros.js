"use client"
import { DATA_COMPANY } from "@/utils/DATA_COMPANY.js"
import { useObserver } from "@/utils/useObserver.js"
import { useEffect, useRef, useState } from "react"
import { Copied } from "../contacto/Copied.js"
import { INDEX_NosotrosWrapper } from "./styles/INDEX_NosotrosWrapper.js"

const timeToShowCopied = 2500

export const INDEX_Nosotros = () => {
  const myComponentRef = useRef(null)
  useEffect(() => {
    if (myComponentRef.current) {
      const position = myComponentRef.current.getBoundingClientRect().top + window.scrollY
      const scrollPosition = position
      window.scroll({
        top: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [])

  const [isCopiedPhone, setIsCopiedPhone] = useState(false)
  const [whoCopiedState, setWhoCopiedState] = useState()

  const handleCopyText = (e, whatCopy, whoCopied) => {
    if (e.type === "click" || e.code === "Enter") {
      navigator.clipboard.writeText(whatCopy === undefined ? e.target.textContent : whatCopy)
      setIsCopiedPhone(true)
      setWhoCopiedState(whoCopied)
    }
  }

  useEffect(() => {
    if (isCopiedPhone) {
      setTimeout(() => {
        setIsCopiedPhone(false)
      }, timeToShowCopied)
    }
  }, [isCopiedPhone])

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
        Es una asociación gremial de dueños de camiones, fundada el saño 2000. Cuenta con una importante flota de camiones disponibles las 24 horas del día y los 365 días del año.
      </p>

      <p
        ref={refComponent2}
        className={intersectedComponent2 && `intersectedComponent0`}>
        Nuestra organización está precedida por un directorio conformado por:{" "}
      </p>

      <ol
        ref={refComponent3}
        className={intersectedComponent3 && `intersectedComponent0`}>
        <li
          onClick={(e) => handleCopyText(e, undefined, DATA_COMPANY.presidente.name)}
          onKeyDown={(e) => handleCopyText(e, undefined, DATA_COMPANY.presidente.name)}
          tabIndex={0}>
          <span>Presidente: Juan Pastén</span>
        </li>
        <li
          onClick={(e) => handleCopyText(e, DATA_COMPANY.tesorero.phone, DATA_COMPANY.tesorero.name)}
          onKeyDown={(e) => handleCopyText(e, DATA_COMPANY.tesorero.phone, DATA_COMPANY.tesorero.name)}
          tabIndex={0}>
          <span>Tesorero: Pablo Soza </span>
        </li>
        <li
          onClick={(e) => handleCopyText(e, DATA_COMPANY.jefeDeTransporte.phone, DATA_COMPANY.jefeDeTransporte.name)}
          onKeyDown={(e) => handleCopyText(e, DATA_COMPANY.jefeDeTransporte.phone, DATA_COMPANY.jefeDeTransporte.name)}
          tabIndex={0}>
          <span>Jefe de Transporte: Ricardo Barrientos </span>
        </li>

        <Copied
          isCopied={isCopiedPhone}
          textToShow={whoCopiedState}
        />
      </ol>

      <p
        ref={refComponent4}
        className={intersectedComponent4 && `intersectedComponent0`}>
        Gracias a nuestra experiencia, nos permite estar a la altura en el cumplimiento de tiempos y certezas en entrega, así como también la aplicación destrictas normas den el
        manejo de sustancias peligrosas y explosivos.
      </p>

      <p>
        Estamos comprometidos con nuestros clientes de la II Region y preocupados de prestar un servicio de excelencia y calidad. Apoyamos la gestión empresarial, de servicio de
        transporte, dando soluciones a nuestros clientes en el proceso de consolidación, transporte y disposición final de cargas.
      </p>

      <div />
    </INDEX_NosotrosWrapper>
  )
}
