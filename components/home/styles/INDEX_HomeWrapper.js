import styled from "styled-components"

export const INDEX_HomeWrapper = styled.div`
  /* border: 2px solid yellow; */

  /* border: 2px solid yellow; */
  /* width: 800px; */
  /* aspect-ratio: 1/2; */

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    /* width: 100%; */
    /* filter: contrast(120%); */
    /* border: 2px solid crimson; */

    & > :nth-child(1) {
      -webkit-mask-image: url(${(variableHere) => variableHere.image});
      mask-image: url(${(variableHere) => variableHere.image});
      
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
      
      
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      filter: contrast(150%);
      
      
      
    }
  }
`
