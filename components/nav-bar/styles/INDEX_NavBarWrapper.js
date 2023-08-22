import { COLORS } from "@/assets/colors"
import styled from "styled-components"

export const INDEX_NavBarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
  padding: 16px;

  padding-bottom: 32px;

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

    min-width: 25%;

    border: 2px solid crimson;

    box-shadow: none;

    cursor: pointer;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: ${({ $isServices }) =>
    $isServices
      ? `hsl(348, 83.3%, 47.1%, 0.25) 0px 54px 55px, hsl(348, 83.3%, 47.1%, 0.12) 0px -12px 30px, hsl(348, 83.3%, 47.1%, 0.12) 0px 4px 6px,
        hsl(348, 83.3%, 47.1%, 0.17) 0px 12px 13px, hsl(348, 83.3%, 47.1%, 0.09) 0px -3px 5px;`
      : `hsl(348, 83.3%, 97.1%, 0.25) 0px 54px 55px, hsl(348, 83.3%, 97.1%, 0.12) 0px -12px 30px, hsl(348, 83.3%, 97.1%, 0.12) 0px 4px 6px,
        hsl(348, 83.3%, 97.1%, 0.17) 0px 12px 13px, hsl(348, 83.3%, 97.1%, 0.09) 0px -3px 5px;`};

    &:focus-within {
      box-shadow: hsl(180, 100%, 27.3%, 0.25) 0px 54px 55px, hsl(180, 100%, 27.3%, 0.12) 0px -12px 30px, hsl(180, 100%, 27.3%, 0.12) 0px 4px 6px,
        hsl(180, 100%, 27.3%, 0.17) 0px 12px 13px, hsl(180, 100%, 27.3%, 0.09) 0px -3px 5px;
    }

    &.isActiveLink {
      box-shadow: hsl(348, 83.3%, 47.1%, 0.25) 0px 54px 55px, hsl(348, 83.3%, 47.1%, 0.12) 0px -12px 30px, hsl(348, 83.3%, 47.1%, 0.12) 0px 4px 6px,
        hsl(348, 83.3%, 47.1%, 0.17) 0px 12px 13px, hsl(348, 83.3%, 47.1%, 0.09) 0px -3px 5px;
    }

    &:hover {
      box-shadow: ${({ $isServices }) =>
    $isServices
      ? ``
      : `hsl(0, 0%, 92.2%, 0.25) 0px 54px 55px, hsl(0, 0%, 92.2%, 0.12) 0px -12px 30px,
        hsl(0, 0%, 92.2%, 0.12) 0px 4px 6px, hsl(0, 0%, 92.2%, 0.17) 0px 12px 13px, hsl(0, 0%, 92.2%, 0.09) 0px -3px 5px;`};
    }

    & > :nth-child(1) {
      border-radius: 8px;
    }
  }

  @media (max-width: 739px) {
    & > :nth-child(1) {
      & > :nth-child(1) {
        & > :nth-child(2) {
          order: 3;
        }
      }
    }
  }

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    height: 2px;
    width: 100%;

    background-color: ${COLORS.ACTIVE};
    filter: blur(2px) sepia(50%);

    box-shadow: ${({ $isServices }) =>
    $isServices
      ? `hsl(348, 83.3%, 41.1%, 0.25) 0px 54px 55px, hsl(348, 83.3%, 41.1%, 0.12) 0px -12px 30px, hsl(348, 83.3%, 41.1%, 0.12) 0px 4px 6px,
      hsl(348, 83.3%, 41.1%, 0.17) 0px 12px 13px, hsl(348, 83.3%, 41.1%, 0.09) 0px -3px 5px;`
      : ``};
  }
`
