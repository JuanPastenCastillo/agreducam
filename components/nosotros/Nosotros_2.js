import Link from "next/link.js"
import { Nosotros_2Wrapper } from "./styles/Nosotros_2Wrapper.js"

export const Nosotros_2 = ({ shouldShow = false, shouldFadeOut = false }) => {
  return (
    <Nosotros_2Wrapper shouldShow={shouldShow}>
      <p>
        <span>
          <span>Agreducam</span> <span>La Portada</span>
        </span>{" "}
        cuenta con más de <span>40 vehículos</span> en las mejores condiciones para realizar todos los{" "}
        <span >
          <Link tabIndex={shouldShow ? 0 : -1} href="/servicios">servicios</Link>
        </span>
      </p>
    </Nosotros_2Wrapper>
  )
}
