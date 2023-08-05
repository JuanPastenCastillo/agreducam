import styled from "styled-components"

export const Nosotros_InicioWrapper = styled.div`
  /* background: linear-gradient(270deg, rgba(35, 190, 202, 1), rgba(90, 106, 185, 1)); */
  /* background-color: black; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  transition: opacity 3500ms;
  height: 100%;

  opacity: ${({ shouldShow }) => (shouldShow ? `1` : `0`)};

  position: absolute;
  inset: 0;
  z-index: 2;
  
  
  & > :nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-wrap: wrap; */

    /* margin: auto; */
    
    

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
  

  & > .tutorial {
    opacity: ${({ showTutorial }) => (showTutorial ? "1" : "0")};

    & > .showTutorialLeft,
    & > .showTutorialRight {
      top: 0;
      position: absolute;
      z-index: 3;
      width: 25%;
      background-color: hsl(0, 100%, 100%, 0.7);
      /* border: 2px solid white; */
      
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      opacity: ${({ showTutorial }) => (showTutorial ? "1" : "0")};
      transition: all 1s linear;

      & > p {
        color:black;
        & > span {
          font-weight: 800;
          display: block;
        }
      }
    }

    & > .showTutorialLeft {
      left: 0;
    }
    & > .showTutorialRight {
      right: 0;
    }

    & > .tutorialControls {
      position: absolute;
      left: 25%;
      right: 25%;
      bottom: 0;
      height: 5%;
      background-color: hsl(0, 100%, 100%, 0.7);

      display: flex;
      align-items: center;
      justify-content: center;

      opacity: ${({ showTutorial, isTouchScreen }) => (showTutorial && !isTouchScreen ? "1" : "0")};
      transition: all 1s linear;

      & > p {
        text-align:center;
        color:black;
        & > span {
          font-weight: 800;
        }
      }
    }
  }
`
