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
  const theRouter = useRouter()
  console.log('theRouter:', theRouter.events)

  const handleMoveToHome = () => {
    theRouter.push("/")
  }



  return (
    <INDEX_NavBarWrapper >
      <div onClick={handleMoveToHome}>
        <Image
          src={AGREDUCAM_Logo}
          alt="Agreducam logo"
          width={125}
        />
      </div>

      <nav>
        <ul >
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
