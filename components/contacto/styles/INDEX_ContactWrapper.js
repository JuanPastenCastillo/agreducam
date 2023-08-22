import { COLORS } from "@/assets/colors"
import styled from "styled-components"

export const INDEX_ContactWrapper = styled.div`
  margin: 24px;
  font-size: clamp(0.1rem, 6vw, 1.8rem);
  line-height: 1.9;

  border-radius: 24px;
  position: relative;

  background: linear-gradient(90deg, hsl(348, 83.3%, 47.1%) 1%, transparent 10%, transparent 90%, hsl(348, 83.3%, 47.1%) 99%);
  padding: 1px;

  /* &:focus-within {
    background: linear-gradient(90deg, ${COLORS.FOCUS} 1%, transparent 10%, transparent 90%, ${COLORS.FOCUS} 99%);
  } */

  /* &:before {
    background: ${({ isHover }) =>
    isHover ? `linear-gradient(320deg, transparent 5%, ${COLORS.HOVER} 50%, transparent 90%)` : `linear-gradient(320deg, transparent 20%, ${COLORS.DEFAULT} 50%, transparent 80%)`};

    border-radius: inherit;
    content: "";
    inset: 0;
    opacity: 1;
    position: absolute;
    z-index: 0;
  } */

  & > :nth-child(1) {
    /* background-color: hsl(32.9, 100%, 0%, 0.8); */
    background-color: hsl(0, 0%, 0%);
    border-radius: inherit;
    padding: 24px;

    /* border: 2px solid transparent; */

    display: flex;
    flex-direction: column;
    /* flex-wrap:wrap; */
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

    & > * {
      & > ol {
        & > li {
          list-style: inside;
          list-style-type: disc;
          width: fit-content;

          & > span {
            cursor: pointer;

            & > span {
              text-decoration: underline;
              text-decoration-color: ${COLORS.ACTIVE};
              white-space: pre;
            }

            &:hover {
              filter: sepia(40%);
              color: ${COLORS.ACTIVE};
              text-decoration: underline;
              text-decoration-color: ${COLORS.ACTIVE};
            }

            .isEmail {
              word-break: break-all;
              white-space: normal;
            }
          }

          .shouldWrap {
            all: unset;
            white-space: pre;
            
            &:hover {
              all: unset;
            }
          }
        }
      }
    }
  }
`
