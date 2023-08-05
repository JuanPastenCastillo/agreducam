"use client"
import { useRouter } from "next/navigation.js"
import { NavBar_SingleWrapper } from "./styles/NavBar_SingleWrapper.js"

export const NavBar_Single = ({ pathName, route, label, theTabIndex }) => {
  const theRouter = useRouter()
  const handleMoveUser = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      theRouter.push(route)
    }
  }

  return (
    <NavBar_SingleWrapper
      className={pathName === route ? "isActiveLink" : ""}
      $isActiveLink={pathName === route}
      onClick={handleMoveUser}
      onKeyDown={handleMoveUser}
      tabIndex={theTabIndex}>
      <p>{label}</p>
    </NavBar_SingleWrapper>
  )
}

/* 

Apply this styles to the buttons:
1. https://codepen.io/perry_nt/pen/eVboze
2. https://codepen.io/emanuelgsouza/pen/YVJOZo
3. https://codepen.io/mars2601/pen/MKVNMX



Search for animation on css mask
*/
