"use client"
import { useObserver } from "@/utils/useObserver.js"
import Link from "next/link.js"
import { useEffect, useRef, useState } from "react"
import { Copied } from "../contacto/Copied.js"
import { INDEX_ServiciosWrapper } from "./styles/INDEX_ServiciosWrapper.js"

const timeToShowCopied = 2000

export const INDEX_Servicios = () => {
  const refComponent2 = useRef()

  const { intersected: intersectedComponent2 } = useObserver(refComponent2)

  const refComponent3 = useRef()
  const { intersected: intersectedComponent3 } = useObserver(refComponent3)

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
    <INDEX_ServiciosWrapper>
      <div>
        <div>
          <h1>Nuestros Servicios</h1>

          <h2>Traslado de:</h2>
          <ol>
            <li>Explosivos</li>
            <li>Nitrato de Amonio</li>
            <li>Contenedores Full y Vacíos</li>
            <li>Cargas Sueltas</li>
            <li>Estructuras Metálicas</li>
            <li>Paneles Fotovoltáicos</li>
            <li>
              Y para otros servicios a tu medida{" "}
              <span>
                <Link href="/contacto">contáctanos</Link>
              </span>
            </li>
          </ol>

          <h2>Alcance de entrega:</h2>
          <ul>
            <li>
              <span>Todo</span> el territorio nacional
            </li>
          </ul>

          {/* 
        PARALLAX HERE
        */}

          <div className="parallax bg">
            {/* <Image
              src={Nosotros_1}
              alt="Flota de camiones"
              style={{
                width: "100%",
                height: "auto"
              }}
            /> */}
          </div>
        </div>

        <div
          ref={refComponent2}
          className={intersectedComponent2 && `refComponent2Intersected`}>
          <h2>
            <span>Puedes sentirte seguro</span> con nosotros porque:
          </h2>

          <ul>
            <li>
              Todos nuestros vehículos cuentan con <span>GPS</span>
            </li>
            <li>
              Todas las cargas tienen seguros de <span>2500 UF</span>
            </li>
            <li>
              Cumplimos nuestros servicios <span>a tiempo</span> y en <span>condiciones</span>
            </li>
          </ul>
        </div>

        <div
          ref={refComponent3}
          className={intersectedComponent3 && "refComponent3Intersected"}>
          <h2>Contáctanos</h2>
          <h3>
            Email:{" "}
            <span
              onClick={(e) => handleCopyText(e, "email")}
              onKeyDown={(e) => handleCopyText(e, "email")}
              tabIndex={0}
            >
              contacto@Agreducam.com
            </span>
            <Copied isCopied={isCopiedMail} textToShow="Correo copiado" />
          </h3>
          <h3>
            Teléfono:{" "}
            <span
              onClick={(e) => handleCopyText(e, "phone")}
              onKeyDown={(e) => handleCopyText(e, "phone")}
              tabIndex={0}
            >
              +569 5555 5555
            </span>
            <Copied isCopied={isCopiedPhone} textToShow="Número copiado" />
          </h3>

        </div>
      </div>
    </INDEX_ServiciosWrapper>
  )
}
