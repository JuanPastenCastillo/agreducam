import { COLORS } from "@/assets/colors"
import styled from "styled-components"

export const INDEX_ServiciosWrapper = styled.div`
  padding: 24px;
  & > :nth-child(1) {
    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(4) {
    }

    & > * {
      font-size: clamp(1.7rem, 7vw, 3.0rem);
    }

    & > *:not(:last-child) {
      margin-bottom: 64px;
    }
    

    & > *:not(:first-child) {
      opacity: 0;
    }
    
    & > :nth-child(2){
      transform: translateX(100%);
    }
    
    & > :nth-child(3){
      transform: translateX(-100%);
    }

    .refComponent2Intersected,
    .refComponent3Intersected {
      opacity: 1;
      transform: translateX(0%);
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
          list-style: inside;
          list-style-type: decimal;

          color: white;
          font-weight: 500;

          & > span {
            font-weight: 700;
            color: hsl(348, 83.3%, 53.1%);
            filter: sepia(20%);
            cursor: pointer;
            
            
            &:hover{
              color:hsl(195.1, 100%, 50%);
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
    
    & > :nth-child(3){
      & > h2{
        color: hsl(348, 83.3%, 57.1%);
          filter: sepia(20%);
          text-decoration: underline;
      }
      
      & > h3{
        & > span{
          word-break: break-all;
          text-decoration: underline;
          cursor: pointer;
          display: block;
          
          width:fit-content;
          
          
          &:hover{
            color: ${COLORS.ACTIVE};
          }
          
        }
      }
      
      & > *:not(:last-child){
        margin-bottom: 16px;
      }
      
    }
    
  }
`
