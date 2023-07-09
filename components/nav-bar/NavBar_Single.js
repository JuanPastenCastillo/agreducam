"use client"
import { useRouter } from "next/navigation.js"
import { NavBar_SingleWrapper } from "./styles/NavBar_SingleWrapper.js"

export const NavBar_Single = ({ pathName, route, label }) => {
  const theRouter = useRouter()
  const handleMoveUser = () => {
    theRouter.push(route)
  }



  return (
    <NavBar_SingleWrapper
      $isActiveLink={pathName === route}
      onClick={handleMoveUser}
    >
      <p>{label}</p>
    </NavBar_SingleWrapper>
  )
}
