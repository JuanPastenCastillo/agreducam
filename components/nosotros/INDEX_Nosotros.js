"use client"
import { useObserver2 } from "@/utils/useObserver2.js"
import { useRef } from "react"
import { INDEX_NosotrosWrapper } from "./styles/INDEX_NosotrosWrapper.js"

export const INDEX_Nosotros = () => {
  // const pathRef = useRef(null)

  // useEffect(() => {
  //   if (pathRef !== null) {
  //     let thePath = pathRef.current.firstElementChild.firstElementChild.firstElementChild
  //     let pathLength = thePath.getTotalLength()
  //     // console.log('pathLength:', pathLength)

  //     // console.log('thePath:', thePath)

  //     thePath.style.strokeDasharray = pathLength + " " + pathLength

  //     thePath.style.strokeDashoffset = pathLength

  //     const handleScroll = () => {
  //       var scrollPercentage =
  //         (document.documentElement.scrollTop + document.body.scrollTo) /
  //         (document.documentElement.scrollHeight - document.documentElement.clientHeight)

  //       var drawLength = pathLength * scrollPercentage

  //       thePath.style.strokeDashoffset = pathLength - drawLength
  //     }

  //     console.log("Working")

  //     window.addEventListener("scroll", handleScroll)

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll)
  //     }
  //   }
  // }, [pathRef])

  const refComponent1 = useRef()
  const { intersected: intersectedComponent1 } = useObserver2(refComponent1)
  const refComponent2 = useRef()
  const { intersected: intersectedComponent2 } = useObserver2(refComponent2)
  const refComponent3 = useRef()
  const { intersected: intersectedComponent3 } = useObserver2(refComponent3)
  const refComponent4 = useRef()
  const { intersected: intersectedComponent4 } = useObserver2(refComponent4)

  // useEffect(() => {
  //   const observingThis = refComponent4
  //   setElements(observingThis)
  // }, [setElements])

  // useEffect(() => {
  //   entries.forEach(x => {
  //     if (x.isIntersecting) {
  //       // console.log('X is intersecting! ✅', x.isIntersecting, x.target.textContent, x)

  //     }
  //   })

  // }, [entries, observer])

  // console.log('elementIsIntersected:', elementIsIntersected)

  // const refComponent4 = useRef()

  // useEffect(() => {
  //   // console.log('refComponent4.current:', refComponent4.current)

  //   const observer = new IntersectionObserver((x) => {
  //     const entry = x[0]
  //     setElementIsIntersected(entry.isIntersecting)

  //   })
  //   observer.observe(refComponent4.current)
  // }, [])

  return (
    <INDEX_NosotrosWrapper>
      <div>
        <h1>Aprendiendo cómo animar cosas según el scroll</h1>
        <h2>Objetivos a lograr:</h2>
        <ul>
          <li>Aprender `Intersection Observer` → ✅ LOGRADO</li>
          <li>Animar con el scroll: tanto hacia adelante como hacia atrás → ✅ LOGRADO</li>
          <li>Aprender a animar elementos SVG</li>
        </ul>
      </div>

      <div>
        <div
          ref={refComponent1}
          className={intersectedComponent1 && `refComponent1Intersected`}>
          <h2>Animación con scroll: componente 1</h2>
        </div>
        <div
          ref={refComponent2}
          className={intersectedComponent2 && `refComponent2Intersected`}>
          <h2>Animación con scroll: componente 2</h2>
        </div>
        <div
          ref={refComponent3}
          className={intersectedComponent3 && `refComponent3Intersected`}>
          <h2>Animación con scroll: componente 3</h2>
        </div>
        <div
          className={intersectedComponent4 && "refComponent4Intersected"}
          ref={refComponent4}>
          <h2>Animación con scroll: componente 4</h2>
          <p>
            ¿Llegaste hasta aquí? La respuesta es que: {intersectedComponent4 ? "YES!✅" : "Not yet buddy 💙"}{" "}
            (compruébalo viendo modificar el color del fondo)
          </p>
        </div>
        <div className="toObserve">
          <h2>Animación con scroll: componente 5</h2>
        </div>
      </div>
    </INDEX_NosotrosWrapper>
  )
}
