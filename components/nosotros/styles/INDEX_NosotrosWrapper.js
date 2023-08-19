import { COLORS } from "@/assets/colors"
import styled from "styled-components"

export const INDEX_NosotrosWrapper = styled.div`
  padding: 24px;
  font-size: clamp(1rem, 7vw, 4rem);
  line-height: 1.9;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  & > :nth-child(1),
  & > :nth-child(3),
  & > :nth-child(4),
  & > :nth-child(5),
  & > :nth-child(6)
   {
    opacity: 0.3;
    transform: translateX(10%);
  }

  .intersectedComponent0 {
    opacity: 1;
    transform: translateX(0%);
    transition: all 700ms ease-out;
  }

  & > :nth-child(1) {
    filter: sepia(20%);
    font-weight: 800;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    & > :nth-child(1) {
      color: ${COLORS.ACTIVE};
      filter: sepia(20%);
      border-bottom: 7px solid white;
      border-bottom-left-radius: 8px;
    }

    & > :nth-child(2) {
      border-bottom: 7px solid ${COLORS.ACTIVE};
      border-bottom-right-radius: 8px;
    }
  }

  & > :nth-child(2) {
    margin-top: 64px;
    
    height: 60vh;
    width: calc(100% + calc(24px * 2));
    
    overflow: hidden;
    
    background-image: url("Nosotros.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    
    @media (max-width: 550px) {
      background-position-x: 26%;
    }
  }

  & > :nth-child(3) {
  }
  
  & > :nth-child(4) {
  }
  
  & > :nth-child(5) {
    list-style: inside;
    list-style-type: decimal;

    & > li {
      & > span {
        filter: sepia(20%);
        text-decoration: underline;
        text-decoration-color: ${COLORS.ACTIVE};

        cursor: pointer;

        &:hover {
          color: ${COLORS.ACTIVE};
          filter: sepia(40%);
        }
      }
    }
  }
  
  & > :last-child{
    margin-top: 64px;
    height: 60vh;
    width: calc(100% + calc(24px * 2));
    overflow: hidden;
    
    background-image: url("Nosotros_2.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    
    @media (max-width: 1110px) {
      background-position-x: 40%;
    }
    
  }
  
`
