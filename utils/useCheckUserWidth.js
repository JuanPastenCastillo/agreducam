"use client"
import { useEffect, useState } from "react"

export const useCheckUserWidth = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


  return { windowSize }
}
