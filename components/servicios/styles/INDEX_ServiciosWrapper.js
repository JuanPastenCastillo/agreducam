import styled from "styled-components"

export const INDEX_ServiciosWrapper = styled.div`
  padding: 24px;
  & > :nth-child(1) {
    padding: 24px;

    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(4) {
    }

    & > * {
      font-size: 1.7rem;
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
        color: hsl(348, 83.3%, 57.1%);
        filter: sepia(20%);
        margin-bottom: 10%;
        & > span {
          color: white;
        }
      }

      & > p {
        & > span {
          color: hsl(348, 83.3%, 50.1%);
          filter: sepia(10%);
          white-space: pre;
        }
      }

      & > :last-child {
        margin-top: 64px;
      }
    }

    & > :nth-child(2) {
      & > :nth-child(1) {
        margin-bottom: 24px;
      }

      & > :nth-child(2) {
        list-style: none;

        & > li {
          display: grid;
          grid-template-columns: repeat(2, 1fr);

          & > p {
            font-weight: 700;
            color: crimson;
            filter: sepia(20%);
            text-decoration: underline;
          }

          @media (max-width: 850px) {
            display: block;
            margin-bottom: 32px;

            & > *:not(:last-child) {
            }
          }
        }
      }
    }
  }
`
