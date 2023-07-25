import styled from "styled-components"

export const Servicios_TodosWrapper = styled.div`
  background: linear-gradient(270deg, rgba(35, 190, 202, 1), rgba(90, 106, 185, 1));

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  transition: opacity 3500ms;
  height: 100%;

  opacity: ${({ shouldShow }) => (shouldShow ? `1` : `0`)};
  transition: opacity 3500ms;

  position: absolute;
  inset: 0;
  z-index: 2;

  & > .tutorial {
    opacity: ${({ showTutorial }) => (showTutorial ? "1" : "0")};

    & > .showTutorialLeft,
    & > .showTutorialRight {
      top: 0;
      position: absolute;
      z-index: 3;
      width: 25%;
      background-color: hsl(0, 100%, 50%, 0.4);
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      opacity: ${({ showTutorial }) => (showTutorial ? "1" : "0")};
      transition: all 1s linear;

      & > p {
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
      background-color: hsl(0, 100%, 50%, 0.4);

      display: flex;
      align-items: center;
      justify-content: center;

      opacity: ${({ showTutorial, isTouchScreen }) => (showTutorial && !isTouchScreen ? "1" : "0")};
      transition: all 1s linear;

      & > p {
        text-align:center;
        & > span {
          font-weight: 800;
          /* display: block; */
        }
      }
    }
  }
`
