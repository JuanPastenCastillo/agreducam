import { useCheckTouchScreen } from "@/utils/useCheckTouchScreen.js"
import { useEffect, useState } from "react"
import { Servicios_TodosWrapper } from "./styles/Servicios_TodosWrapper.js"

export const Servicios_Todos = ({ shouldShow = true, showIndex }) => {
  const [showTutorial, setShowTutorial] = useState(false)
  const { isTouchScreen } = useCheckTouchScreen()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowTutorial(true)
    }, 2000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const [isThisSessionTab, setIsThisSessionTab] = useState(null)

  useEffect(() => {
    const savedData = window.sessionStorage.getItem("agreducam_sessionStorage_tutorial_servicios")
    if (savedData) {
      console.log("savedData:", savedData)
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
    <Servicios_TodosWrapper
      shouldShow={shouldShow}
      showTutorial={showTutorial}>
      <div className={"showTutorialLeft"}>
        <p>{isTouchScreen ? "Toca" : "Haz click"} en esta zona para mostrar el servicio anterior</p>
      </div>

      <div>
        <h1>Todos los Servicios</h1>
        <h2>Servicio_1</h2>
        <h2>Servicio_2</h2>
        <h2>Servicio_3</h2>
        <h2> MAIN_FIRST</h2>
      </div>

      <div className={"showTutorialRight"}>
        <p>{isTouchScreen ? "Toca" : "Haz click"} en esta zona para mostrar el siguiente servicio</p>
      </div>
    </Servicios_TodosWrapper>
  )
}
