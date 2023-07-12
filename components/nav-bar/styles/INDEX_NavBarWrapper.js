import styled from "styled-components"

export const INDEX_NavBarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 16px;
  
  position: relative;
  z-index: 999;
  
  & > :nth-child(1) {
    cursor: pointer;

    border-radius: 8px;


    & > :nth-child(1) {
      border-radius: 8px;
    }
  }

  & > :nth-child(2) {
    & > :nth-child(1) {
      border: 1px solid hsl(42.7, 88.7%, 78.2%);
      border-radius: 4px;

      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;

      border: 2px solid crimson;

    }
  }
`
