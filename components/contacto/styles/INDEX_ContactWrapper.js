import { COLORS } from "@/assets/colors"
import styled from "styled-components"

export const INDEX_ContactWrapper = styled.div`
  margin: 24px;
  margin-inline: 16px;
  height: 100vh;
  font-size: clamp(0.1rem, 6vw, 1.8rem);
  
  border-radius: 24px;
  position: relative;
  
  /* border: 2px solid crimson; */
  
  
  &:focus-within{
    &:before{
      background: linear-gradient(320deg, transparent 5%, ${COLORS.FOCUS} 50%, transparent 90%);
    }
  }
  

  &:before {
    background: ${({ isHover }) =>
    isHover
      ? `linear-gradient(320deg, transparent 5%, ${COLORS.HOVER} 50%, transparent 90%)`
      : `linear-gradient(320deg, transparent 20%, ${COLORS.DEFAULT} 50%, transparent 80%)`};

    border-radius: inherit;
    content: "";
    inset: 0;
    opacity: 1;
    position: absolute;
    z-index: 0;
  }

  & > :nth-child(1) {
    background-color: hsl(32.9, 100%, 0%);
    border-radius: inherit;

    position: absolute;
    inset: 1px;
    padding: 24px;

    display: flex;
    flex-direction: column;
    gap: 26px;
    
    & > h1 {
      position: relative;
      width: fit-content;
      z-index: 1;

      &::before {
        content: "";
        height: 7px;
        width: 100%;

        border-top-right-radius: 8px;
        opacity: 0.5;

        z-index: -1;
        position: absolute;
        bottom: 3px;
      }
    }

    & > h2 {
      & > span {
        display: block;
        word-break: break-all;
        margin-top: 16px;
        position: relative;
        width: fit-content;
        
        margin-left:16px;

        z-index: 1;

        cursor: pointer;
        
        text-decoration:underline;
        color:${COLORS.DEFAULT};
        
        &:focus{
          &::before,
          &::after{
            border-color: ${COLORS.FOCUS};
          }
        }
        
        &:hover{
          text-decoration-color:${COLORS.HOVER};
          color:${COLORS.HOVER};
        }
        
        &:focus-visible{
          text-decoration-color:${COLORS.FOCUS};
          color:${COLORS.FOCUS};
          
        }
        
/* 
        &::before {
          content: "";
          z-index: -1;
          position: absolute;
          left: -18px;
          top: -2px;
          border-width: 5px;
          border-style: solid;
          border-color: ${COLORS.DEFAULT};
          width: 110%;
          height:110%;
          transform: rotate(2deg);
          opacity: 0.7;
          border-radius: 50%;
          padding: 14px;
        }

        &::after {
          content: "";
          z-index: 1;
          position: absolute;
          left: -8px;
          top: 8px;
          padding: 11px;
          border-width: 1px;
          border-style: solid;
          border-color: ${COLORS.DEFAULT};
          border-left-color: transparent;
          border-top-color: transparent;
          width: 100%;
          height:120%;
          transform: rotate(-1deg);
          opacity: 0.5;
          border-radius: 50%;
        }

        /* &:hover::after,
        &:hover::before {
          border-color: ${COLORS.HOVER};
        } */
        
      }
    }
  }
`
