import styled, { keyframes } from "styled-components"

const animate = keyframes`
 0%{
  background-position-x: 0;
 }
 100%{
  background-position-x: 500px;
 }
`

const animate2 = keyframes`
 0%{
  background-position-x: 0;
 }
 100%{
  background-position-x: -300px;
 }
`

const rotate = keyframes`
  0% {transform: translate(-50%, 0) rotateZ(0deg);}
  50% {transform: translate(-50%, 2%) rotateZ(180deg);}
  100% {transform: translate(-50%, 0%) rotateZ(360deg);}

`

export const INDEX_FooterWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: white;
  overflow: hidden;

  padding-top: 24px;
  padding-bottom: 24px;
  
  
  

  & > :nth-child(1) {
    border-radius: 16px;
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    
    padding: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;

    position: relative;
    z-index: 1001;

    box-shadow: 1px 2px 4px white;
    
    cursor: pointer;
    
    transition: all 400ms ease-in-out;
    
    &:hover,
    &:focus{
      background-color: hsl(348, 83.3%, 47.1%, 0.41);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }
    
    & > *:not(:first-child):not(:last-child) {
      margin-bottom: 24px;
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 300vw;
    min-height: 280vw;
    background-color: black;
    animation-name: ${rotate};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &::before {
    bottom: 3vh;
    border-radius: 45%;
    animation-duration: 40s;
  }

  &::after {
    bottom: 2vh;
    opacity: 0.3;
    border-radius: 47%;
    animation-duration: 32s;
  }
`
