import styled from "styled-components"

export const INDEX_ServiciosWrapper = styled.div`
  padding: 24px;
  & > :nth-child(1) {
    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(4) {
    }

    & > * {
      font-size: clamp(1.7rem, 7vw, 2.7rem);
    }

    & > *:not(:last-child) {
      margin-bottom: 64px;
    }

    & > :nth-child(3),
    & > :nth-child(4) {
      height: 70vh;
    }

    & > *:not(:first-child) {
      opacity: 0;
      scale: 15%;
      transform: translateY(50%);
    }

    .refComponent2Intersected,
    .refComponent3Intersected,
    .refComponent4Intersected {
      opacity: 1;
      scale: 100%;
      transform: translateY(0%);
      border-radius: 0px;
      transition: all 1s ease-out;
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
          color: hsl(348, 83.3%, 50.1%);
          filter: sepia(10%);
          list-style: inside;
          list-style-type: decimal;

          & > span {
            color: white;
          }

          &::marker {
            color: white;
          }
        }
      }

      & > :last-child {
        margin-top: 64px;
      }
    }

    & > :nth-child(2) {
      & > :nth-child(1) {
        margin-bottom: 24px;
        
        
        & > span {
          color: hsl(348, 83.3%, 57.1%);
          filter: sepia(20%);
          
          text-decoration: underline;
          
        }
      }

      & > :nth-child(2) {
        & > *:not(:last-child){
          margin-bottom: 8px;
        }
        
        & > li {
          list-style: inside;

          & > span {
            font-weight: 700;
            color: crimson;
            filter: sepia(20%);
          }

          /* @media (max-width: 850px) {
            display: block;
            margin-bottom: 32px;

            & > *:not(:last-child) {
            }
          } */
        }
      }
    }
  }
`
