import { useRouter } from "next/navigation"
import { INDEX_FooterWrapper } from "./styles/INDEX_FooterWrapper"

export const INDEX_Footer = () => {
  const { push } = useRouter()
  const handleMoveToContact = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      push("/contacto")
    }
  }

  return (
    <INDEX_FooterWrapper>
      <div
        onClick={handleMoveToContact}
        onKeyDown={handleMoveToContact}
        tabIndex={0}>
        <h2>Asociación Gremial </h2>
        <h2>AGREDUCAM</h2>
        <h3>La Portada</h3>
        <p>Fundada el 27 de abril, 2000</p>
      </div>

      <div className="waveCSS" />
    </INDEX_FooterWrapper>
  )
}
