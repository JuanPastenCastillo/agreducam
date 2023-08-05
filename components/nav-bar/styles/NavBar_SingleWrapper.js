import { COLORS } from "@/assets/colors"
import styled from "styled-components"

export const NavBar_SingleWrapper = styled.li`
  font-size: 33px;
  border: 4px solid transparent;
  border-radius: 4px;

  cursor: pointer;
  list-style: none;

  text-align: center;
  padding: 16px 45px;

  &:focus-within {
    box-shadow: 3px 3px 7px 2px ${COLORS.FOCUS} ;
  }
  
  &.isActiveLink {
    border-style: solid;
    box-shadow: 3px 3px 7px 2px ${COLORS.ACTIVE} ;
  }

  &:hover {
    box-shadow: ${({ $isActiveLink }) => ($isActiveLink ? `` : `0px 0px 7px 2px ${COLORS.HOVER}`)};
  }

  
`
