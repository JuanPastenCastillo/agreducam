import styled from "styled-components"

export const INDEX_NavBarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  padding: 16px;

  position: relative;

  & > :nth-child(1) {
    & > :nth-child(1) {
      border-radius: 4px;

      display: flex;
      flex-wrap: wrap;

      & > * {
        
        
        flex: 1;
        
        
        
      }
    }
  }

  & > :nth-child(2) {
    min-width: 11%;
    max-width: 500px;

    cursor: pointer;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px,
      rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px,
      rgba(255, 255, 255, 0.09) 0px -3px 5px;

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

  &.isNotHome {
    flex-direction: row;
    justify-content: space-evenly;

    & > :nth-child(1) {
      order: 2;
    }

    & > :nth-child(2) {
      min-width: 15%;
      max-width: 115px;
      box-shadow: none;
    }
  }
`
