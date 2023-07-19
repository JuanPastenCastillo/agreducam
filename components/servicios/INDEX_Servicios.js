import { ANIMATION_DURATION } from "@/utils/VARIABLES.js"
import { useEffect, useState } from "react"
import { Servicios_1 } from "./Servicios_1.js"
import { Servicios_2 } from "./Servicios_2.js"
import { Servicios_3 } from "./Servicios_3.js"
import { Servicios_4 } from "./Servicios_4.js"
import { INDEX_ServiciosWrapper } from "./styles/INDEX_ServiciosWrapper.js"

export const INDEX_Servicios = () => {
  const [maxComponents, setMaxComponents] = useState(4)
  const [showIndex, setShowIndex] = useState(0)

  // Create a function that updates the showIndex state variable by incrementing it by one and wrapping it around the number of components
  const updateShowIndex = (previous = false) => {
    if (!previous) {
      setShowIndex((prevState) => (prevState + 1) % maxComponents)
    } else {
      setShowIndex((prevState) => {
        if (prevState > 0) {
          return (prevState - 1) % maxComponents
        } else {
          return prevState
        }
      })
    }
  }

  const [pause, setPause] = useState(false)
  const [milliseconds, setMilliseconds] = useState(0)

  useEffect(() => {
    if (!pause && showIndex !== maxComponents - 1) {
      function updateMilliseconds() {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 1)
      }

      const interval = setInterval(updateMilliseconds, 1)
      return () => clearInterval(interval)
    }
  }, [pause])

  useEffect(() => {
    if (milliseconds === ANIMATION_DURATION.timeToNextComponent && showIndex !== maxComponents - 1) {
      updateShowIndex()
      setMilliseconds(0)
    }
  }, [milliseconds])

  const handlePauseWithDoubleClick = (e) => {
    if (e.detail === 2) {
      setPause((prevState) => !prevState)
    }
  }

  const handleClickRightOrLeft = (event) => {
    const rightPart = (75 * window.innerWidth) / 100
    if (event.clientX >= rightPart) {
      updateShowIndex()
      setMilliseconds(0)
    }

    const leftPart = (25 * window.innerWidth) / 100
    if (event.clientX <= leftPart) {
      updateShowIndex(true)
      setMilliseconds(0)
    }
  }

  const [changeTypeOfCursor, setChangeTypeOfCursor] = useState("default")

  const handleChangeCursor = (event) => {
    const leftPart = (25 * window.innerWidth) / 100
    if (event.clientX <= leftPart) {
      setChangeTypeOfCursor("left")
    }

    const rightPart = (75 * window.innerWidth) / 100
    if (event.clientX >= rightPart) {
      setChangeTypeOfCursor("right")
    }
  }

  const handleMoveCursor = (event) => {
    const leftPart = (25 * window.innerWidth) / 100
    if (event.clientX <= leftPart) {
      setChangeTypeOfCursor("left")
    }

    const rightPart = (75 * window.innerWidth) / 100
    if (event.clientX >= rightPart) {
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

      if (event.code === "ArrowRight") {
        updateShowIndex()
        setMilliseconds(0)
      }

      if (event.code === "ArrowLeft") {
        updateShowIndex(true)

        setMilliseconds(0)
      }
    }

    document.addEventListener("keydown", handleKeyPress)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  return (
    <INDEX_ServiciosWrapper
      $changeTypeOfCursor={changeTypeOfCursor}
      onClick={(e) => {
        handlePauseWithDoubleClick(e)
        handleClickRightOrLeft(e)
      }}
      onMouseEnter={handleChangeCursor}
      onMouseLeave={handleDefaultCursor}
      onMouseMove={handleMoveCursor}>
      <div
        style={{
          width: `${showIndex < maxComponents - 1 ? (milliseconds * 100) / ANIMATION_DURATION.timeToNextComponent : 100}% `
        }}
      />

      <Servicios_1 shouldShow={showIndex === 0} />
      <Servicios_2 shouldShow={showIndex === 1} />
      <Servicios_3 shouldShow={showIndex === 2} />
      <Servicios_4 shouldShow={showIndex === 3} />
    </INDEX_ServiciosWrapper>
  )
}
