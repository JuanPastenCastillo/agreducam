import { COLORS } from "@/assets/colors"
import { FONT_VALUES } from "@/assets/fontValues"
import styled from "styled-components"

export const INDEX_ContactWrapper = styled.div`
  margin: 24px;
  font-size: ${FONT_VALUES.fontSizeInClamp};

  line-height: 1.9;

  border-radius: 24px;
  position: relative;

  background: linear-gradient(90deg, hsl(348, 83.3%, 47.1%) 1%, transparent 10%, transparent 90%, hsl(348, 83.3%, 47.1%) 99%);
  padding: 1px;

  & > :nth-child(1) {
    background-color: hsl(0, 0%, 0%);
    border-radius: inherit;
    padding-inline: 24px;
    padding-bottom: 16px;

    display: flex;
    flex-direction: column;
    gap: 80px;

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
          cursor: pointer;

          & > span {
            & > span {
              text-decoration: underline;
              text-decoration-color: ${COLORS.ACTIVE};
              white-space: pre;
            }

            .isEmail {
              word-break: break-all;
              white-space: normal;
            }
          }

          &:hover:not(.noStyles) {
            filter: sepia(40%);
            color: ${COLORS.ACTIVE};
            text-decoration: underline;
            text-decoration-color: ${COLORS.ACTIVE};

            &::marker {
              color: ${COLORS.ACTIVE};
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
        .noStyles {
          cursor: text;
        }
      }
    }
  }
`
