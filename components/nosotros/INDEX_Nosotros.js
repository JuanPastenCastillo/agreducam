"use client"
import Nosotros_1 from "@/assets/images/Nosotros/Nosotros_1.png"
import { useObserver2 } from "@/utils/useObserver2.js"
import Image from "next/image.js"
import { useRef } from "react"
import { INDEX_NosotrosWrapper } from "./styles/INDEX_NosotrosWrapper.js"

export const INDEX_Nosotros = () => {
  const refComponent2 = useRef()
  const { intersected: intersectedComponent2 } = useObserver2(refComponent2)
  const refComponent3 = useRef()
  const { intersected: intersectedComponent3 } = useObserver2(refComponent3)
  const refComponent4 = useRef()
  const { intersected: intersectedComponent4 } = useObserver2(refComponent4)

  return (
    <INDEX_NosotrosWrapper>
      <div>
        <div>
          <h2>
            Agreducam La Portada <span>es una Asociación Gremial de Dueños de Camiones fundada el año 2000</span>
          </h2>
          <p>
            A la fecha cuenta con más de <span>40 vehículos</span> disponibles para entregar servicios las{" "}
            <span>24 horas del día</span>, los <span>7 días de la semana</span>{" "}
          </p>

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
          <h2>Este gremio está conformada por un directorio de 5 personas:</h2>

          <ul>
            <li>
              <p>Presidente:</p> <span>Juan Pastén</span>
            </li>
            <li>
              <p>Vice Presidente:</p> <span>Juan Pastén</span>
            </li>
            <li>
              <p>Tesorero:</p> <span>Juan Pastén</span>
            </li>
            <li>
              <p>Secretario:</p> <span>Juan Pastén</span>
            </li>
            <li>
              <p>Encargado de Transportes:</p> <span>Juan Pastén</span>
            </li>
          </ul>
        </div>

        <div
          ref={refComponent3}
          className={intersectedComponent3 && `refComponent3Intersected`}>
          <h2>Componente 3</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque enim illo cum vitae dolor, reiciendis dicta officiis aliquam beatae, veritatis sint animi!</p>
        </div>
        <div
          className={intersectedComponent4 && "refComponent4Intersected"}
          ref={refComponent4}>
          <h2>Ccomponente 4</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque enim illo cum vitae dolor, reiciendis dicta officiis aliquam beatae, veritatis sint animi!</p>


        </div>
      </div>
    </INDEX_NosotrosWrapper>
  )
}
