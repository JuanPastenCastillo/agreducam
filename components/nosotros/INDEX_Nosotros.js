"use client"
import { DATA_COMPANY } from "@/utils/DATA_COMPANY.js"
import { useEffect, useRef, useState } from "react"
import { Copied } from "../contacto/Copied.js"
import { INDEX_NosotrosWrapper } from "./styles/INDEX_NosotrosWrapper.js"

const timeToShowCopied = 2500

export const INDEX_Nosotros = () => {
  // const [maxComponents, setMaxComponents] = useState(4)
  // const [showIndex, setShowIndex] = useState(-1)
  // const [pause, setPause] = useState(true)
  // const [milliseconds, setMilliseconds] = useState(0)
  // const [seeAgain, setSeeAgain] = useState(false)

  // // Create a function that updates the showIndex state variable by incrementing it by one and wrapping it around the number of components
  // const handleUpdateShowIndex = (toLeft = false) => {
  //   if (showIndex > 0 && showIndex <= maxComponents - 1 && toLeft) {
  //     setShowIndex((prevState) => (prevState - 1) % maxComponents)
  //   }

  //   if (showIndex === 0 && toLeft) {
  //     setShowIndex((prevState) => prevState - 1)
  //   }

  //   if (showIndex === -1 && !toLeft) {
  //     setShowIndex((prevState) => prevState + 1)
  //   }

  //   if (showIndex >= 0 && showIndex < maxComponents - 1 && !toLeft) {
  //     setShowIndex((prevState) => (prevState + 1) % maxComponents)
  //   }

  //   if (showIndex === maxComponents - 1 && !toLeft) {
  //     setShowIndex("final")
  //   }
  // }

  // useEffect(() => {
  //   if (showIndex === -1 || showIndex === "final") {
  //     setPause(true)
  //   }
  // }, [showIndex])

  // useEffect(() => {
  //   if (pause === false && showIndex >= 0 && showIndex <= maxComponents - 1) {
  //     function updateMilliseconds() {
  //       setMilliseconds((prevMilliseconds) => prevMilliseconds + 1)
  //     }

  //     const interval = setInterval(updateMilliseconds, 1)
  //     return () => clearInterval(interval)
  //   }
  // }, [pause, showIndex])

  // useEffect(() => {
  //   if (milliseconds === ANIMATION_DURATION.timeToNextComponent && showIndex >= 0 && showIndex <= maxComponents - 1) {
  //     handleUpdateShowIndex()
  //     setMilliseconds(0)
  //   }
  // }, [milliseconds, showIndex])

  // const handlePauseWithClick = (e) => {
  //   if (e.detail === 1 && showIndex >= 0 && showIndex <= maxComponents - 1) {
  //     setPause((prevState) => !prevState)
  //   }
  // }

  // const handleClickRightOrLeft = (event) => {
  //   const leftPart = (25 * window.innerWidth) / 100
  //   if (event.clientX <= leftPart) {
  //     handleUpdateShowIndex(true)
  //     setMilliseconds(0)
  //     setPause(false)
  //   }

  //   const rightPart = (75 * window.innerWidth) / 100
  //   if (event.clientX >= rightPart) {
  //     handleUpdateShowIndex()
  //     setMilliseconds(0)
  //     setPause(false)
  //   }
  // }

  // const [changeTypeOfCursor, setChangeTypeOfCursor] = useState("default")

  // const handleChangeCursor = (event) => {
  //   const leftPart = (25 * window.innerWidth) / 100
  //   if (event.clientX <= leftPart && showIndex >= 0 && typeof showIndex === "number") {
  //     setChangeTypeOfCursor("left")
  //   }

  //   const rightPart = (75 * window.innerWidth) / 100
  //   if (event.clientX >= rightPart && showIndex !== "final") {
  //     setChangeTypeOfCursor("right")
  //   }
  // }

  // const handleMoveCursor = (event) => {
  //   const leftPart = (25 * window.innerWidth) / 100
  //   if (showIndex >= 0 && typeof showIndex === "number" && event.clientX <= leftPart) {
  //     setChangeTypeOfCursor("left")
  //   }

  //   const rightPart = (75 * window.innerWidth) / 100
  //   if (event.clientX >= rightPart && showIndex !== "final") {
  //     setChangeTypeOfCursor("right")
  //   }

  //   if (event.clientX <= leftPart === false && event.clientX >= rightPart === false) {
  //     setChangeTypeOfCursor("default")
  //   }
  // }

  // const handleDefaultCursor = () => {
  //   setChangeTypeOfCursor("default")
  // }

  // useEffect(() => {
  //   function handleKeyPress(event) {
  //     if (event.code === "KeyK" || event.code === "KeyP") {
  //       setPause((prevState) => !prevState)
  //     }

  //     if (event.code === "ArrowLeft") {
  //       handleUpdateShowIndex(true)
  //       setMilliseconds(0)
  //       setPause(false)
  //     }

  //     if (event.code === "ArrowRight") {
  //       handleUpdateShowIndex()
  //       setMilliseconds(0)
  //       setPause(false)
  //     }
  //   }

  //   document.addEventListener("keydown", handleKeyPress)
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyPress)
  //   }
  // }, [showIndex])

  const myComponentRef = useRef(null)
  useEffect(() => {
    if (myComponentRef.current) {
      const position = myComponentRef.current.getBoundingClientRect().top + window.scrollY
      const scrollPosition = position
      window.scroll({
        top: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [])

  const [isCopiedPhone, setIsCopiedPhone] = useState(false)
  const [whoCopiedState, setWhoCopiedState] = useState()

  const handleCopyText = (e, whatCopy, whoCopied) => {
    if (e.type === "click" || e.code === "Enter") {
      navigator.clipboard.writeText(whatCopy === undefined ? e.target.textContent : whatCopy)
      setIsCopiedPhone(true)
      setWhoCopiedState(whoCopied)
    }
  }

  useEffect(() => {
    if (isCopiedPhone) {
      setTimeout(() => {
        setIsCopiedPhone(false)
      }, timeToShowCopied)
    }
  }, [isCopiedPhone])

  useEffect(() => {
    /*_codeHere_*/
    console.log("whoCopiedState:", whoCopiedState)
  }, [whoCopiedState])

  return (
    <INDEX_NosotrosWrapper
      ref={myComponentRef}
    // $shouldShow={showIndex}
    // $changeTypeOfCursor={changeTypeOfCursor}
    // onClick={(e) => {
    //   handlePauseWithClick(e)
    //   handleClickRightOrLeft(e)
    // }}
    // onMouseEnter={handleChangeCursor}
    // onMouseLeave={handleDefaultCursor}
    // onMouseMove={handleMoveCursor}
    // ref={myComponentRef}
    >
      {/* <div
        style={{
          width: `${showIndex >= 0 && showIndex <= maxComponents - 1 ? (milliseconds * 100) / ANIMATION_DURATION.timeToNextComponent : 100}% `,
        }}
      /> */}

      {/* <Nosotros_Inicio
        shouldShow={showIndex === -1}
        showIndex={showIndex}
      /> */}

      {/* <Nosotros_1 shouldShow={showIndex === 0} />
      <Nosotros_2 shouldShow={showIndex === 1} />
      <Nosotros_3 shouldShow={showIndex === 2} />
      <Nosotros_4 shouldShow={showIndex === 3} />

      <Nosotros_Final
        shouldShow={showIndex === "final"}
        setShowIndex={setShowIndex}
        setSeeAgain={setSeeAgain}
      /> */}

      <h2>
        <span>Agreducam</span> <span>La Portada</span>
      </h2>

      <p>
        Es una asociación gremial de dueños de camiones, fundada el año 2000. Cuenta con una importante flota de camiones disponibles las 24 horas del día y los 365 días del año.
      </p>

      <p>Nuestra organización está precedida por un directorio conformado por: </p>

      <ol>
        <li>
          <span
            onClick={(e) => handleCopyText(e, DATA_COMPANY.presidente.phone, DATA_COMPANY.presidente.name)}
            onKeyDown={(e) => handleCopyText(e, DATA_COMPANY.presidente.phone, DATA_COMPANY.presidente.name)}
            tabIndex={0}>
            Presidente
          </span>
          : Juan Pastén (
          <span
            onClick={(e) => handleCopyText(e, undefined, DATA_COMPANY.presidente.name)}
            onKeyDown={(e) => handleCopyText(e, undefined, DATA_COMPANY.presidente.name)}
            tabIndex={0}>
            {DATA_COMPANY.presidente.phone}
          </span>
          )
        </li>
        <li>
          <span
            onClick={(e) => handleCopyText(e, DATA_COMPANY.tesorero.phone, DATA_COMPANY.tesorero.name)}
            onKeyDown={(e) => handleCopyText(e, DATA_COMPANY.tesorero.phone, DATA_COMPANY.tesorero.name)}
            tabIndex={0}>
            Tesorero
          </span>
          : Pablo Soza (
          <span
            onClick={(e) => handleCopyText(e, undefined, DATA_COMPANY.tesorero.name)}
            onKeyDown={(e) => handleCopyText(e, undefined, DATA_COMPANY.tesorero.name)}
            tabIndex={0}>
            {DATA_COMPANY.tesorero.phone}
          </span>
          )
        </li>
        <li>
          <span
            onClick={(e) => handleCopyText(e, DATA_COMPANY.jefeDeTransporte.phone, DATA_COMPANY.jefeDeTransporte.name)}
            onKeyDown={(e) => handleCopyText(e, DATA_COMPANY.jefeDeTransporte.phone, DATA_COMPANY.jefeDeTransporte.name)}
            tabIndex={0}>
            Jefe de Transporte
          </span>
          : Ricardo Barrientos (
          <span
            onClick={(e) => handleCopyText(e, undefined, DATA_COMPANY.jefeDeTransporte.name)}
            onKeyDown={(e) => handleCopyText(e, undefined, DATA_COMPANY.jefeDeTransporte.name)}
            tabIndex={0}>
            {DATA_COMPANY.jefeDeTransporte.phone}
          </span>
          )
        </li>

        <Copied
          isCopied={isCopiedPhone}
          textToShow={`#${whoCopiedState} Copiado`}
        />
      </ol>

      <p>
        Gracias a nuestra experiencia, nos permite estar a la altura en el cumplimiento de tiempos y certezas en entrega, así como también la aplicación destrictas normas den el manejo de sustancias peligrosas y explosivos.
      </p>

      <p>
        Estamos comprometidos con nuestros clientes de la II Region y preocupados de prestar un servicio de excelencia y calidad. Apoyamos la gesti´pon emprresarial, de servicio de transporte, dando soluciones a nuestros clientes en el proceso de cconsolidación, transporte y disposición final de cargas.
      </p>

    </INDEX_NosotrosWrapper>
  )
}
