import { useRouter } from "next/navigation.js"
import { Servicios_FinalWrapper } from "./styles/Servicios_FinalWrapper.js"

export const Servicios_Final = ({ shouldShow = false, setFinalServiceSelection, setShowIndex }) => {

  const { push } = useRouter()

  const handleMoveToContact = () => {
    push("/contacto")
  }


  return (
    <Servicios_FinalWrapper shouldShow={shouldShow}>
      <span onClick={() => setShowIndex(-1)}>
        <button>Volver a todos los servicios</button>
      </span>
      <span onClick={handleMoveToContact}>
        <button>Contacto</button>
      </span>
    </Servicios_FinalWrapper>
  )
}
