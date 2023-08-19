"use client"
import { useObserver } from "@/utils/useObserver.js"
import Link from "next/link.js"
import { useRouter } from "next/navigation.js"
import { useRef } from "react"
import { INDEX_ServiciosWrapper } from "./styles/INDEX_ServiciosWrapper.js"

const timeToShowCopied = 2000

export const INDEX_Servicios = () => {
  const refComponent2 = useRef(null)
  const { intersected: intersectedComponent2 } = useObserver(refComponent2)

  const refComponent3 = useRef(null)
  const { intersected: intersectedComponent3 } = useObserver(refComponent3)

  const { push } = useRouter()
  const handlePushToContact = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      push("contacto")
    }
  }

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

          <div className="parallax bg" />
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
          <h2
            onClick={handlePushToContact}
            onKeyDown={handlePushToContact}
            tabIndex={0}>
            Obten una solución <span>a tu medida:</span> <span>Contáctanos</span>
          </h2>
        </div>
      </div>
    </INDEX_ServiciosWrapper>
  )
}
