"use client"
import { useCheckUserWidth } from "@/utils/useCheckUserWidth"
import Image from "next/image.js"
import { usePathname, useRouter } from "next/navigation.js"
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

  const handleMoveToServices = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      theRouter.push("/servicios")
    }
  }

  const { windowSize } = useCheckUserWidth()

  return (
    <INDEX_NavBarWrapper className={thePathname === "/nosotros" ? "" : "isNotHome"}>
      <nav>
        <ul>
          {LINKS.map(({ label, route }, i) => {
            let whichTabApply = windowSize >= 740 ? 0 : i === 0 ? 4 : i === 1 ? 6 : i === 2 && 5

            return (
              <NavBar_Single
                pathName={thePathname}
                route={route}
                label={label}
                key={label}
                theTabIndex={whichTabApply}
              />
            )
          })}
        </ul>
      </nav>

      <div
        onClick={handleMoveToServices}
        onKeyDown={handleMoveToServices}
        tabIndex={1}>
        <Image
          src={AGREDUCAM_Logo}
          alt="Logo de Agreducam"
          layout={"responsive"}
        />
      </div>
    </INDEX_NavBarWrapper>
  )
}
