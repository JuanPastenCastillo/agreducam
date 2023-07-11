"use client"
import Image from "next/image.js"
import { usePathname, useRouter } from "next/navigation.js"
import { useEffect, useRef, useState } from "react"
import AGREDUCAM_Logo from "../../assets/images/AGREDUCAM_Logo.webp"
import { NavBar_Single } from "./NavBar_Single.js"
import { INDEX_NavBarWrapper } from "./styles/INDEX_NavBarWrapper.js"

const LINKS = [
  {
    label: "Nosotros",
    route: "/nosotros"
  },
  {
    label: "Servicios",
    route: "/servicios"
  },
  {
    label: "Contacto",
    route: "/contacto"
  }
]

export const INDEX_NavBar = () => {
  const thePathname = usePathname()
  const theRouter = useRouter()

  const handleMoveToHome = () => {
    theRouter.push("/")
  }

  const [shouldChangeOrder, setShouldChangeOrder] = useState(false)
  const refMenu = useRef(null)

  useEffect(() => {
    if (window !== undefined && refMenu.current !== undefined) {
      const handleCheckWrap = () => {
        let secondChild = refMenu.current.children[1].offsetTop
        let thirdChild = refMenu.current.children[2].offsetTop
        if (secondChild !== thirdChild) {
          setShouldChangeOrder(true)
        } else {
          setShouldChangeOrder(false)
        }
      }

      window.addEventListener("resize", handleCheckWrap)

      return () => window.removeEventListener("resize", handleCheckWrap)
    }
  }, [])

  return (
    <INDEX_NavBarWrapper $shouldChangeOrder={shouldChangeOrder}>
      <div onClick={handleMoveToHome}>
        <Image
          src={AGREDUCAM_Logo}
          alt="Agreducam logo"
          width={125}
        />
      </div>

      <nav>
        <ul ref={refMenu}>
          {LINKS.map(({ label, route }) => {
            return (
              <NavBar_Single
                pathName={thePathname}
                route={route}
                label={label}
                key={label}
              />
            )
          })}
        </ul>
      </nav>
    </INDEX_NavBarWrapper>
  )
}
