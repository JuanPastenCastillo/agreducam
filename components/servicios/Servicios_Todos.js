import { Servicios_TodosWrapper } from "./styles/Servicios_TodosWrapper.js"

export const Servicios_Todos = ({ shouldShow = true }) => {
  return (
    <Servicios_TodosWrapper shouldShow={shouldShow}>
      <h1>Todos los Servicios</h1>

      <h2>Servicio_1</h2>
      <h2>Servicio_2</h2>
      <h2>Servicio_3</h2>

      <h2> MAIN_FIRST</h2>


    </Servicios_TodosWrapper>
  )
}
