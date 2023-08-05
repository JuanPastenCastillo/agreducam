"use client"
import Nosotros_1 from "@/assets/images/Nosotros/Nosotros_1.png"
import { useObserver2 } from "@/utils/useObserver2.js"
import Image from "next/image.js"
import { useRef } from "react"
import { INDEX_ServiciosWrapper } from "./styles/INDEX_ServiciosWrapper.js"

export const INDEX_Servicios = () => {
  const refComponent2 = useRef()
  const { intersected: intersectedComponent2 } = useObserver2(refComponent2)
  const refComponent3 = useRef()
  const { intersected: intersectedComponent3 } = useObserver2(refComponent3)
  const refComponent4 = useRef()
  const { intersected: intersectedComponent4 } = useObserver2(refComponent4)

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
          </ol>

          <h2>Alcance de entrega:</h2>
          <ol>
            <li>
              Calama
            </li>
            <li>Mejillones</li>
            <li>Generadores de Caraga en la Región</li>
            <li>Faenas en varias regiones del norte</li>
          </ol>

          <div>
            <Image
              src={Nosotros_1}
              alt="Flota de camiones"
              style={{
                width: "100%",
                height: "auto"
              }}
            />
          </div>
        </div>

        <div
          ref={refComponent2}
          className={intersectedComponent2 && `refComponent2Intersected`}>
          <h2><span>Puedes sentirte seguro</span> con nosotros porque:</h2>

          <ul>
            <li>
              Todos nuestros vehículos cuentan con <span>GPS</span>
            </li>
            <li>
              Todas las cargas tienen seguros de <span>2500 UF</span>
            </li>
            <li>
              El <span>80%</span> de los chóferes son <span>dueños</span> de sus camiones
            </li>
          </ul>
        </div>

        <div
          ref={refComponent3}
          className={intersectedComponent3 && `refComponent3Intersected`}>
          <h2>Componente 3</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque enim illo cum vitae dolor, reiciendis dicta
            officiis aliquam beatae, veritatis sint animi!
          </p>
        </div>
        <div
          className={intersectedComponent4 && "refComponent4Intersected"}
          ref={refComponent4}>
          <h2>Ccomponente 4</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque enim illo cum vitae dolor, reiciendis dicta
            officiis aliquam beatae, veritatis sint animi!
          </p>
        </div>
      </div>
    </INDEX_ServiciosWrapper>
  )
}
