import LaPortadaHome from "@/assets/images/LaPortadaHome.png"
import { useCheckTouchScreen } from "@/utils/useCheckTouchScreen.js"
import { useEffect, useState } from "react"
import { Nosotros_InicioWrapper } from "./styles/Nosotros_InicioWrapper.js"

export const Nosotros_Inicio = ({ shouldShow = true, showIndex }) => {
  const [showTutorial, setShowTutorial] = useState(false)
  const { isTouchScreen } = useCheckTouchScreen()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowTutorial(true)
    }, 6000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const [isThisSessionTab, setIsThisSessionTab] = useState(null)

  useEffect(() => {
    const savedData = window.sessionStorage.getItem("agreducam_sessionStorage_tutorial_servicios")
    if (savedData) {
      setIsThisSessionTab(JSON.parse(savedData))
    }
  }, [])

  useEffect(() => {
    if (showTutorial) {
      window.sessionStorage.setItem("agreducam_sessionStorage_tutorial_servicios", "true")
    }
  }, [showTutorial])

  useEffect(() => {
    if (window.sessionStorage.getItem("agreducam_sessionStorage_tutorial_servicios") === "true" && showIndex === -1) {
      setShowTutorial(false)
    }
  }, [showIndex])

  return (
    <Nosotros_InicioWrapper
      image={LaPortadaHome.src}
      shouldShow={shouldShow}
      showTutorial={showTutorial}
      isTouchScreen={isTouchScreen}>
      <h1>
        Agreducam <span>La Portada</span>
      </h1>

      <div>
        <video
          autoPlay
          loop
          muted
          disablePictureInPicture
          controlsList="nodownload"
          src={"TopDownBeach-D.mp4"}
          type="video/mp4"
        />
      </div>

      <div className="tutorial">
        <div className={"showTutorialLeft"}>
          {isTouchScreen ? (
            <>
              <p>
                <span>Toca en esta zona</span> para mostrar el servicio anterior
              </p>
            </>
          ) : (
            <>
              <p>
                Haz <span>click en esta zona</span> o presiona la <span>flecha izquierda</span> para mostrar el servicio
                anterior
              </p>
            </>
          )}
        </div>

        <div className="showTutorialRight">
          {isTouchScreen ? (
            <>
              <p>
                <span>Toca en esta zona</span> para mostrar el siguiente servicio
              </p>
            </>
          ) : (
            <>
              <p>
                Haz <span>click en esta zona</span> o presiona la <span>flecha derecha</span> para mostrar el siguiente
                servicio
              </p>
            </>
          )}
        </div>

        <div className="tutorialControls">
          {!isTouchScreen ? (
            <>
              <p>
                Presiona la tecla <span>K</span> o <span>P</span> para pausar o reanuar el tiempo
              </p>
            </>
          ) : null}
        </div>
      </div>
    </Nosotros_InicioWrapper>
  )
}
