import { useRouter } from "next/navigation.js"
import { Nosotros_FinalWrapper } from "./styles/Nosotros_FinalWrapper.js"

export const Nosotros_Final = ({ shouldShow = false, setShowIndex }) => {

  const { push } = useRouter()

  const handleMoveToContact = () => {
    push("/contacto")
  }

  return (
    <Nosotros_FinalWrapper shouldShow={shouldShow}>
      <span onClick={() => setShowIndex(-1)}>
        <button>Ver otra vez</button>
      </span>
      <span onClick={handleMoveToContact}>
        <button>Contacto</button>
      </span>
    </Nosotros_FinalWrapper>
  )
}
