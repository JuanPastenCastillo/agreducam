import { useEffect, useState } from "react"

export const useObserver = (theRef = null, options = { threshols: 0.25, root: null }) => {
  const [observedElement, setObservedElement] = useState()
  const [isIntersected, setIsIntersected] = useState()

  useEffect(() => {
    const observer = new IntersectionObserver((x) => {
      const entry = x[0]
      setObservedElement(entry)
    })
    observer.observe(theRef.current)
  }, [])

  useEffect(() => {
    if (observedElement?.isIntersecting) {
      setIsIntersected(true)
    } else {
      setIsIntersected(false)
    }
  }, [observedElement])

  return { intersected: isIntersected, allProperties: observedElement }
}
