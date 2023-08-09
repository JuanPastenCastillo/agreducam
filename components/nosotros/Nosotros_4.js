import { Nosotros_4Wrapper } from "./styles/Nosotros_4Wrapper.js"

export const Nosotros_4 = ({ shouldShow = false }) => {
  return (
    <Nosotros_4Wrapper shouldShow={shouldShow}>
      <p>
        <span>
          <span>Agreducam</span> <span>La Portada</span>
        </span>{" "}
        se caracteriza por <span>dar soluciones a sus clientes</span> en <span>tiempo y forma</span> con todo tipo de cargas
      </p>
    </Nosotros_4Wrapper>
  )
}
