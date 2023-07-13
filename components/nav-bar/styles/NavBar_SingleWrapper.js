import styled from "styled-components"

export const NavBar_SingleWrapper = styled.li`
  font-size: 33px;
  border: 4px solid transparent;
  border-radius: 4px;

  cursor: pointer;
  list-style: none;

  text-align: center;
  padding: 16px 45px;

  &.isActiveLink {
    border-style: solid;
    box-shadow: 2px 3px 1px 3px #ebebeb;
  }

  &:hover {
    box-shadow: 2px 3px 2px 3px #ebebeb;
  }
`
