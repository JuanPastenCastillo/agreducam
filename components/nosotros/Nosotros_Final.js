import { useRouter } from "next/navigation.js"
import { Nosotros_FinalWrapper } from "./styles/Nosotros_FinalWrapper.js"

export const Nosotros_Final = ({ shouldShow = false, setShowIndex, setSeeAgain }) => {
  const { push } = useRouter()

  const handleSeeAllAgain = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      setShowIndex(-1)
      setSeeAgain((prevState) => !prevState)
    }
  }

  const handleMoveToContact = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      push("/contacto")
    }
  }

  const handleMoveToServicios = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      push("/servicios")
    }
  }

  return (
    <Nosotros_FinalWrapper shouldShow={shouldShow}>
      <button
        onClick={handleMoveToContact}
        onKeyDown={handleMoveToContact}
        tabIndex={shouldShow ? 0 : -1}>
        Contacto
      </button>

      <button
        onClick={handleMoveToServicios}
        onKeyDown={handleMoveToServicios}
        tabIndex={shouldShow ? 0 : -1}>
        Servicios
      </button>

      <button
        onClick={handleSeeAllAgain}
        onKeyDown={handleSeeAllAgain}
        tabIndex={shouldShow ? 0 : -1}>
        Ver otra vez
      </button>
    </Nosotros_FinalWrapper>
  )
}
