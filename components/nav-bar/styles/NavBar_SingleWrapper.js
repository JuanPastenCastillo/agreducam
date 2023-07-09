import styled from "styled-components"

export const NavBar_SingleWrapper = styled.li`
  color: ${({ $isActiveLink }) => $isActiveLink && "cornflowerblue"};
  font-size: 33px;

  cursor: pointer;
  list-style: none;

  text-align: center;
  padding: 16px 45px;
  

  & > a {
    /* padding: 16px 45px; */
    /* border: 2px solid crimson; */
    /* width: 100%; */
    /* height: 100%; */
  }

  &:hover {
    color: ${({ $isActiveLink }) => !$isActiveLink && "hsl(218.5, 79.2%, 76.1%)"};
  }
`
