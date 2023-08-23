import { useEffect } from "react"

export const useMoveFirstVisitToPage = (myComponentRef, moveALittleMore = 0) => {
  useEffect(() => {
    if (myComponentRef.current) {
      const position = myComponentRef.current.getBoundingClientRect().top + window.scrollY
      const scrollPosition = position + moveALittleMore
      window.scroll({
        top: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [])
}