import styled, { keyframes } from "styled-components"

const glowingButton85 = keyframes`
0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`

export const Nosotros_FinalWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4%;

  opacity: ${({ shouldShow }) => (shouldShow ? `1` : `0`)};
  z-index: ${({ shouldShow }) => (shouldShow ? `2` : `-1`)};


  & > * {
    width:75vw;

    border-radius: 10px;
    border: 2px solid transparent;

    padding: 24px;

    font-size: 24px;

    position: relative;
    z-index: 0;
    cursor: pointer;

    outline: none;
    
    font-size: clamp(1.7rem, 7vw, 6rem);

    &:focus {
      border: 2px solid white;
    }

    &::before {
      border: 2px solid crimson;

      content: "";
      background: linear-gradient(
        45deg,
        white,
        hsl(348, 83.3%, 47.1%),
        hsl(180, 100%, 27.3%),
        hsl(348, 83.3%, 37.1%),
        hsl(180, 100%, 20.3%),
        white,
        hsl(348, 83.3%, 50.1%),
        hsl(180, 100%, 32.3%),
        hsl(348, 83.3%, 30.1%),
        hsl(180, 100%, 15.3%),
        white
      );

      position: absolute;
      top: -2px;
      left: -2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      -webkit-filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: ${glowingButton85} 33s ease-out infinite;
      transition: opacity 3.3s ease-in-out;
      border-radius: 10px;
    }

    &::after {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: hsl(0, 0%, 7%);
      left: 0;
      top: 0;
      border-radius: 10px;
      transition: opacity 2s;
    }

    &:hover::after {
      opacity: 0;
    }

    & > * {
      /* width: 100%;
      padding: 24px;

      font-size: 24px;

      position: relative;
      z-index: 0;
      cursor: pointer;

      border: none;
      outline: none;
      border-radius: inherit; */
    }
  }
`
