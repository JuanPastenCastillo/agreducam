import { Nosotros_1Wrapper } from "./styles/Nosotros_1Wrapper.js"

export const Nosotros_1 = ({ shouldShow = false }) => {
  return (
    <Nosotros_1Wrapper shouldShow={shouldShow}>
      <p>
        <span>
          <span>Agreducam</span> <span>La Portada</span>
        </span>{" "}
        es una asociación gremial de dueños de camiones fundada el año 2000
      </p>

    </Nosotros_1Wrapper>
  )
}
