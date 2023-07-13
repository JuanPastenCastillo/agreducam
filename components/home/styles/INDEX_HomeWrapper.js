import styled from "styled-components"

export const INDEX_HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    margin: auto;
    
    
    
    
    

    & > :nth-child(1) {
      -webkit-mask-image: url(${(variableHere) => variableHere.image});
       mask-image: url(${(variableHere) => variableHere.image});
      /* mask-image: linear-gradient(rgba(255,255,255, 1), transparent); */

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

  /* & > :nth-child(2){
    
    
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
    
    
  } */
`
