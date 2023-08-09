import { Nosotros_3Wrapper } from "./styles/Nosotros_3Wrapper.js"

export const Nosotros_3 = ({ shouldShow = false, shouldFadeOut = false }) => {
  return (
    <Nosotros_3Wrapper shouldShow={shouldShow}>
      <p>
        <span>
          <span>Agreducam</span> <span>La Portada</span>
        </span>{" "}
        está conformada un directorio:
      </p>

      <ul>
        <li>Presidente: <span>Juan Pastén</span></li>
        <li>Vice Presidente: <span>Juan Pastén</span></li>
        <li>Tesorero: <span>Juan Pastén</span></li>
        <li>Secretario: <span>Juan Pastén</span></li>
        <li>Encargado de Transporte: <span>Juan Pastén</span></li>
      </ul>
    </Nosotros_3Wrapper>
  )
}
