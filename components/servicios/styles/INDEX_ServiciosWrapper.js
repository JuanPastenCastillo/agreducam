import { COLORS } from "@/assets/colors"
import styled from "styled-components"

export const INDEX_ServiciosWrapper = styled.div`
  padding: 24px;
  & > :nth-child(1) {
    
    & > *:not(.parallax) {
      font-size: clamp(1.7rem, 7vw, 3rem);
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
        margin-bottom: 10%;
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
            font-weight: 700;
            color: hsl(348, 83.3%, 53.1%);
            filter: sepia(20%);
            cursor: pointer;
            text-decoration: underline;

            &:hover {
              color: hsl(195.1, 100%, 50%);
            }
          }

          &::marker {
            font-weight: 700;
            color: hsl(348, 83.3%, 53.1%);
            filter: sepia(20%);
          }
        }
      }

      & > ul {
        & > li {
          list-style: inside;
          list-style-type: disc;

          & > span {
            color: hsl(348, 83.3%, 53.1%);
            filter: sepia(20%);
            font-weight: 700;
          }

          &::marker {
            color: white;
            font-weight: 500;
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
          color: hsl(348, 83.3%, 57.1%);
          filter: sepia(20%);
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
            font-weight: 700;
            color: hsl(348, 83.3%, 53.1%);
            filter: sepia(20%);
            white-space: pre;

            /* display: flex; */
            /* flex-direction: column; */
          }
        }
      }
    }

    & > :nth-child(4) {
      & > h2 {
        text-align: center;
        text-decoration: underline;
        cursor: pointer;

        & > span {
          display: block;
        }

        & > :last-child {
          color: ${COLORS.ACTIVE};
        }

        &:hover,
        &:focus {
          color: ${COLORS.FOCUS};

          & > :last-child {
            color: ${COLORS.FOCUS};
          }
        }
      }
    }
  }
`
