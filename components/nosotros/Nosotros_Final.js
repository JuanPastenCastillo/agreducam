import { useRouter } from "next/navigation.js"
import { Nosotros_FinalWrapper } from "./styles/Nosotros_FinalWrapper.js"

export const Nosotros_Final = ({ shouldShow = false, setShowIndex, setSeeAgain }) => {

  const { push } = useRouter()

  const handleSeeAllAgain = () => {
    setShowIndex(-1)
    setSeeAgain(prevState => !prevState)
  }

  const handleMoveToContact = () => {
    push("/contacto")
  }

  return (
    <Nosotros_FinalWrapper shouldShow={shouldShow}>
      <span onClick={handleSeeAllAgain}>
        <button>Ver otra vez</button>
      </span>
      <span onClick={handleMoveToContact}>
        <button>Contacto</button>
      </span>
    </Nosotros_FinalWrapper>
  )
}
