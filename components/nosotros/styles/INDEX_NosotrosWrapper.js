import styled from "styled-components"

export const INDEX_NosotrosWrapper = styled.div`
  /* border: 7px solid green; */
  /* height: 200vh; */

  padding: 24px;

  & > :nth-child(1) {
    padding: 24px;

    & > * {
      /* height: 70vh; */

      /* border: 2px solid yellow; */
    }

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

    & > *:not(:first-child) {
      opacity: 0;
      scale: 15%;
      transform: translateY(50%);
      height: 70vh;
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
      /* background-color: hsl(351, 100%, 85.7%); */
      /* color: hsl(32.9, 100%, 40%); */

      /* transform: translateX(50%); */

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
        }
      }
    }

    .refComponent2Intersected {
      /* background-color: hsl(32.9, 100%, 40%); */
      /* color: hsl(351, 100%, 85.7%); */

      /* transform: translateX(0%); */
      /* transition: all 2s ease-in-out; */
    }

    & > :nth-child(3) {
      /* background-color: hsl(213.9, 41.1%, 82%); */
      /* color: hsl(282.1, 100%, 21.4%); */

      /* transform: translateX(-50%); */
    }

    .refComponent3Intersected {
      /* background-color: hsl(282.1, 100%, 21.4%); */
      /* color: hsl(213.9, 41.1%, 82%); */

      /* transform: translateX(0%); */
      /* transition: all 2s ease-in-out; */
    }

    & > :nth-child(4) {
      /* background-color: hsl(348, 83.3%, 17.1%); */
      /* color: hsl(194.7, 53.3%, 79%); */

      /* transform: translateX(50%); */
    }

    .refComponent4Intersected {
      /* border: 2px solid crimson; */

      /* background-color: hsl(218.5, 79.2%, 96.1%); */
      /* color: black; */
      /* transform: translateX(0%); */
      /* transition: all 2s ease-in-out; */
    }
  }

  /* .line-container {
    position: relative;
    border: 2px solid yellow;
    & > * {
      border: 2px solid crimson;
      position: fixed;
      top:0;
      height: 100vh;
      height: 100%;
    }

  }
  
  section{
    height: 100vh;
    display:grid;
    place-content: center;
    
  }
  
  .one{
    background:url("main_us2.jpg");
    background-size: cover;
    
    & > h1{
      position: relative;
      z-index: 2;
      color:black;
    }
    
  }
  
  .two{
    position: relative;
    overflow: hidden;
  }
  
  p{
    position: absolute;
    opacity: 0.3;
    color: hsl(0, 0%, 94.5%);
    left:0;
    right:0;
    
    text-align: center;
    top:10%;
    white-space: nowrap;
    font-size: 11rem;
  } */
`
