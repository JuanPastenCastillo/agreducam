import { Servicios_4Wrapper } from "./styles/Servicios_4Wrapper.js"

export const Servicios_4 = ({ shouldShow = false, shouldFadeOut = false }) => {
  return (
    <Servicios_4Wrapper
      shouldShow={shouldShow}
    >
      <h1>Todos los Servicios</h1>

      <h2>Servicio_1</h2>
      <h2>Servicio_2</h2>
      <h2>Servicio_3</h2>

    </Servicios_4Wrapper>
  )
}
