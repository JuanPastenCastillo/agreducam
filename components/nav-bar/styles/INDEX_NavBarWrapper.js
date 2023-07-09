import styled from "styled-components"

export const INDEX_NavBarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  & > :nth-child(1) {
    /* width:250px; */
    cursor: pointer;
    
    border-radius: 8px;
    
    /* border: 2px solid crimson; */
    
    & > :nth-child(1){
      border-radius: 8px;
    }
    
    
  }

  & > :nth-child(2) {
    & > :nth-child(1) {
      border: 1px solid hsl(42.7, 88.7%, 78.2%);
      border-radius: 4px;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: "firstLevelA firstLevelB firstLevelC";

      & > :nth-child(1) {
        grid-area: firstLevelA;
      }
      & > :nth-child(2) {
        grid-area: firstLevelB;
      }
      & > :nth-child(3) {
        grid-area: firstLevelC;
      }
    }
  }
`
