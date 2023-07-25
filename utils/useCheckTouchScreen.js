import { useEffect, useState } from "react"

export const useCheckTouchScreen = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false)

  useEffect(() => {
    const handleUserInput = () => {
      const hasTouchScreen = "ontouchstart" in window
      setIsTouchScreen(hasTouchScreen)
    }

    handleUserInput()
  }, [])

  return { isTouchScreen }
}
