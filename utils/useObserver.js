import { useEffect, useRef, useState } from 'react'

export const useObserver = (options) => {

  const [elements, setElements] = useState([])
  const [entries, setEntries] = useState([])

  const observer = useRef(new IntersectionObserver((observedEntries) => {
    setEntries(observedEntries)
  }, options))

  useEffect(() => {
    const currentObserver = observer.current
    currentObserver.disconnect()

    if (elements.length > 0) {
      elements.forEach(x => currentObserver.observe(x))
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect()
      }
    }

  }, [elements])

  return { observer: observer.current, setElements, entries }


}
