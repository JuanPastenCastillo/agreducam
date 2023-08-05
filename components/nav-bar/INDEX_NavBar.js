"use client"
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
  console.log('thePathname:', thePathname)
  const theRouter = useRouter()

  const handleMoveToServices = () => {
    theRouter.push("/servicios")
  }

  return (
    <INDEX_NavBarWrapper className={thePathname === "/nosotros" ? "" : "isNotHome"}>
      <nav>
        <ul>
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

      <div onClick={handleMoveToServices}>
        <Image
          src={AGREDUCAM_Logo}
          alt="Logo de Agreducam"
          layout={"responsive"}
        />
      </div>
    </INDEX_NavBarWrapper>
  )
}
