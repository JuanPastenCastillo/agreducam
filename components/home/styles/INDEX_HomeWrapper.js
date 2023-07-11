import styled from "styled-components"

export const INDEX_HomeWrapper = styled.div`
  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    width: 75%;

    inset: 0;
    margin: auto;
    z-index: 1;

    & > :nth-child(1) {
      -webkit-mask-image: url(${(variableHere) => variableHere.image});
      mask-image: url(${(variableHere) => variableHere.image});

      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;

      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      filter: contrast(120%);

      width: 100%;
    }
  }
  
  & > :nth-child(2){
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    position: relative;
    z-index: 3;
    
    & > * {
      border: 2px solid whitesmoke;
      padding: 45px 16px;
      border-radius: 16px;
      
    }
    
    
  }
  
`
