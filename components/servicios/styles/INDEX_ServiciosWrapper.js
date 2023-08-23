import { COLORS } from "@/assets/colors"
import { FONT_VALUES } from "@/assets/fontValues"
import styled from "styled-components"

export const INDEX_ServiciosWrapper = styled.div`
  padding: 24px;
  & > :nth-child(1) {
    & > *:not(.parallax) {
      font-size: ${FONT_VALUES.fontSizeInClamp};
      opacity: 0.3;
      transform: translateX(-10%);
    }

    .refComponentIntersected {
      opacity: 1;
      transform: translateX(0%);
      transition: all 700ms ease-out;
    }

    & > *:not(:last-child) {
      margin-bottom: 64px;
    }

    & > :nth-child(1) {
      & > :nth-child(1) {
        text-decoration: underline;
        text-decoration-color: hsl(348, 83.3%, 57.1%);
        filter: sepia(20%);
        margin-bottom: 3%;
        
        text-align: center;
        
        & > span {
          color: white;
        }
      }

      & > ol {
        margin-bottom: 96px;

        & > *:not(:last-child) {
          margin-bottom: 8px;
        }

        & > li {
          list-style: inside;
          list-style-type: decimal;

          color: white;
          font-weight: 500;

          & > span {
            font-weight: 800;
            color: ${COLORS.LINK};
            cursor: pointer;
            text-decoration: underline;

            &:hover {
              color: ${COLORS.LINK_HOVER};
            }
          }
        }
      }

      & > ul {
        & > li {
          list-style: inside;
          list-style-type: disc;

          & > span {
            font-weight: 800;
            text-decoration: underline;
          }
        }
      }
    }

    .parallax {
      margin-top: 64px;
      height: 60vh;
      background-image: url("Servicios.jpg");
      background-attachment: fixed;
      background-position: 26% -18vw;
      background-repeat: no-repeat;
      background-size: cover;
      margin-inline: -24px;
    }

    & > :nth-child(3) {
      & > :nth-child(1) {
        margin-bottom: 24px;

        & > span {
          font-weight: 800;
          text-decoration: underline;
        }
      }

      & > :nth-child(2) {
        & > *:not(:last-child) {
          margin-bottom: 8px;
        }

        & > li {
          list-style: inside;

          & > span {
            font-weight: 800;
            text-decoration: underline;
            white-space: pre;
          }
        }
      }
    }

    & > :nth-child(4) {
      & > h2 {
        text-align: center;
        
        cursor: pointer;
        
        color:${COLORS.LINK};
        
        
        & > span {
          display: block;
          
        }

        & > :last-child {
          text-decoration: underline;
        }

        &:hover,
        &:focus {
          color: ${COLORS.LINK_HOVER};

          & > :last-child {
            color: ${COLORS.LINK_HOVER};
          }
        }
      }
    }
  }
`
