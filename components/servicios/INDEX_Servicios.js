import { ANIMATION_DURATION } from "@/utils/VARIABLES.js"
import { useEffect, useRef, useState } from "react"
import { Servicios_1 } from "./Servicios_1.js"
import { Servicios_2 } from "./Servicios_2.js"
import { Servicios_3 } from "./Servicios_3.js"
import { Servicios_4 } from "./Servicios_4.js"
import { Servicios_5 } from "./Servicios_5.js"
import { Servicios_Final } from "./Servicios_Final.js"
import { Servicios_Todos } from "./Servicios_Todos.js"
import { INDEX_ServiciosWrapper } from "./styles/INDEX_ServiciosWrapper.js"

export const INDEX_Servicios = () => {
  const [maxComponents, setMaxComponents] = useState(5)
  const [showIndex, setShowIndex] = useState(-1)
  const [pause, setPause] = useState(true)
  const [milliseconds, setMilliseconds] = useState(0)
  const [finalServiceSelection, setFinalServiceSelection] = useState()

  // Create a function that updates the showIndex state variable by incrementing it by one and wrapping it around the number of components
  const handleUpdateShowIndex = (toLeft = false) => {
    if (showIndex > 0 && showIndex <= maxComponents - 1 && toLeft) {
      setShowIndex((prevState) => (prevState - 1) % maxComponents)
    }

    if (showIndex === 0 && toLeft) {
      setShowIndex((prevState) => prevState - 1)
    }

    if (showIndex === -1 && !toLeft) {
      setShowIndex((prevState) => prevState + 1)
    }

    if (showIndex >= 0 && showIndex < maxComponents - 1 && !toLeft) {
      setShowIndex((prevState) => (prevState + 1) % maxComponents)
    }

    if (showIndex === maxComponents - 1 && !toLeft) {
      console.log("🟩showIndex:", showIndex)
      setShowIndex("final")
    }
  }

  useEffect(() => {
    if (showIndex === -1 || showIndex === "final") {
      setPause(true)
    }
  }, [showIndex])

  useEffect(() => {
    if (pause === false && showIndex >= 0 && showIndex <= maxComponents - 1) {
      function updateMilliseconds() {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 1)
      }

      const interval = setInterval(updateMilliseconds, 1)
      return () => clearInterval(interval)
    }
  }, [pause, showIndex])

  useEffect(() => {
    if (milliseconds === ANIMATION_DURATION.timeToNextComponent && showIndex >= 0 && showIndex <= maxComponents - 1) {
      handleUpdateShowIndex()
      setMilliseconds(0)
    }
  }, [milliseconds, showIndex])

  const handlePauseWithClick = (e) => {
    if (e.detail === 1 && showIndex >= 0 && showIndex <= maxComponents - 1) {
      setPause((prevState) => !prevState)
    }
  }

  const handleClickRightOrLeft = (event) => {
    const leftPart = (25 * window.innerWidth) / 100
    if (event.clientX <= leftPart) {
      handleUpdateShowIndex(true)
      setMilliseconds(0)
      setPause(false)
    }

    const rightPart = (75 * window.innerWidth) / 100
    if (event.clientX >= rightPart) {
      handleUpdateShowIndex()
      setMilliseconds(0)
      setPause(false)
    }
  }

  const [changeTypeOfCursor, setChangeTypeOfCursor] = useState("default")

  const handleChangeCursor = (event) => {
    const leftPart = (25 * window.innerWidth) / 100
    if (event.clientX <= leftPart && showIndex >= 0 && typeof showIndex === "number") {
      setChangeTypeOfCursor("left")
    }

    const rightPart = (75 * window.innerWidth) / 100
    if (event.clientX >= rightPart && showIndex !== "final") {
      setChangeTypeOfCursor("right")
    }
  }

  const handleMoveCursor = (event) => {
    const leftPart = (25 * window.innerWidth) / 100
    if (showIndex >= 0 && typeof showIndex === "number" && event.clientX <= leftPart) {
      setChangeTypeOfCursor("left")
    }

    const rightPart = (75 * window.innerWidth) / 100
    if (event.clientX >= rightPart && showIndex !== "final") {
      setChangeTypeOfCursor("right")
    }

    if (event.clientX <= leftPart === false && event.clientX >= rightPart === false) {
      setChangeTypeOfCursor("default")
    }
  }

  const handleDefaultCursor = () => {
    setChangeTypeOfCursor("default")
  }

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.code === "KeyK" || event.code === "KeyP") {
        setPause((prevState) => !prevState)
      }

      if (event.code === "ArrowLeft") {
        handleUpdateShowIndex(true)
        setMilliseconds(0)
        setPause(false)
      }

      if (event.code === "ArrowRight") {
        handleUpdateShowIndex()
        setMilliseconds(0)
        setPause(false)
      }
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [showIndex])

  const myComponentRef = useRef(null)

  useEffect(() => {
    if (myComponentRef.current) {
      const position = myComponentRef.current.getBoundingClientRect().top + window.scrollY
      const offset = 53
      const scrollPosition = position - offset
      window.scroll({
        top: scrollPosition,
        behavior: "smooth"
      })
    }
  }, [])

  return (
    <INDEX_ServiciosWrapper
      $changeTypeOfCursor={changeTypeOfCursor}
      onClick={(e) => {
        handlePauseWithClick(e)
        handleClickRightOrLeft(e)
      }}
      onMouseEnter={handleChangeCursor}
      onMouseLeave={handleDefaultCursor}
      onMouseMove={handleMoveCursor}
      ref={myComponentRef}>
      <div
        style={{
          width: `${showIndex >= 0 && showIndex <= maxComponents - 1
            ? (milliseconds * 100) / ANIMATION_DURATION.timeToNextComponent
            : 100
            }% `
        }}
      />

      <Servicios_Todos
        shouldShow={showIndex === -1}
        showIndex={showIndex}
      />

      <Servicios_1 shouldShow={showIndex === 0} />
      <Servicios_2 shouldShow={showIndex === 1} />
      <Servicios_3 shouldShow={showIndex === 2} />
      <Servicios_4 shouldShow={showIndex === 3} />
      <Servicios_5 shouldShow={showIndex === 4} />

      <Servicios_Final
        shouldShow={showIndex === "final"}
        setFinalServiceSelection={setFinalServiceSelection}
        setShowIndex={setShowIndex}
      />
    </INDEX_ServiciosWrapper>
  )
}
