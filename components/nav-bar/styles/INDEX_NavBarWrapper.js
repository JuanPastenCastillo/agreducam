import styled from "styled-components"

export const INDEX_NavBarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 20px;
  padding: 16px;

  position: relative;

  & > :nth-child(1) {
    order: 2;
    & > :nth-child(1) {
      border-radius: 4px;

      display: flex;
      flex-wrap: wrap;

      gap: 8px;

      & > * {
        flex: 1;
      }
    }
  }

  & > :nth-child(2) {
    position: relative;
    z-index: 99;

    min-width: 15%;
    max-width: 115px;
    box-shadow: none;

    cursor: pointer;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    

    &.isActiveLink {
      box-shadow: hsl(348, 83.3%, 47.1%, 0.25) 0px 54px 55px, hsl(348, 83.3%, 47.1%, 0.12) 0px -12px 30px,
        hsl(348, 83.3%, 47.1%, 0.12) 0px 4px 6px, hsl(348, 83.3%, 47.1%, 0.17) 0px 12px 13px,
        hsl(348, 83.3%, 47.1%, 0.09) 0px -3px 5px ;
    }

    &:focus {
      

      box-shadow: hsl(180, 100%, 27.3%, 0.25) 0px 54px 55px, hsl(180, 100%, 27.3%, 0.12) 0px -12px 30px,
        hsl(180, 100%, 27.3%, 0.12) 0px 4px 6px, hsl(180, 100%, 27.3%, 0.17) 0px 12px 13px,
        hsl(180, 100%, 27.3%, 0.09) 0px -3px 5px;
    }

    &:hover {
      box-shadow: hsl(0, 0%, 92.2%, 0.25) 0px 54px 55px, hsl(0, 0%, 92.2%, 0.12) 0px -12px 30px,
        hsl(0, 0%, 92.2%, 0.12) 0px 4px 6px, hsl(0, 0%, 92.2%, 0.17) 0px 12px 13px, hsl(0, 0%, 92.2%, 0.09) 0px -3px 5px;
    }

    & > :nth-child(1) {
      border-radius: 8px;
    }

    /* &::before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(-45deg, white 0%, yellow 100%);
      transform: translate3d(25px, 20px, 0) scale(0.95);
      filter: blur(20px);
      opacity: var(0.7);
      transition: opacity 0.3s;
      border-radius: inherit;
    } */
  }

  @media (max-width: 739px) {
    & > :nth-child(1) {
      & > :nth-child(1) {
        & > :nth-child(2) {
          /* border: 2px solid crimson; */
          order: 3;
        }
      }
    }
  }
`
