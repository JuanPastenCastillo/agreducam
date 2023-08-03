import styled from "styled-components"

export const NavBar_SingleWrapper = styled.li`
  font-size: 33px;
  border: 4px solid transparent;
  border-radius: 4px;

  cursor: pointer;
  list-style: none;

  text-align: center;
  padding: 16px 45px;
  
  /* border: 1px solid white; */
  

  
  
  

  &.isActiveLink {
    border-style: solid;
    box-shadow: 3px 3px 7px 2px #ebebeb;
  }

  &:hover {
    /* box-shadow: 0px 0px 3px 2px #ebebeb; */
    box-shadow: ${({ $isActiveLink }) => $isActiveLink ? `` : `0px 0px 7px 2px #ebebeb`};
    
  }
`
