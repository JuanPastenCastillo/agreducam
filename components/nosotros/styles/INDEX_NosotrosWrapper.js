import { COLORS } from "@/assets/colors"
import { FONT_VALUES } from "@/assets/fontValues"
import styled from "styled-components"

export const INDEX_NosotrosWrapper = styled.div`
  padding: 24px;
  font-size: ${FONT_VALUES.fontSizeInClamp};
  line-height: 1.9;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  & > :nth-child(1),
  & > :nth-child(3),
  & > :nth-child(4),
  & > :nth-child(5),
  & > :nth-child(6) {
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
    margin-left: -24px;
    

    overflow: hidden;

    background-image: url("Nosotros.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 550px) {
      background-position-x: 26%;
    }
  }

  & > :nth-child(5) {
    list-style: inside;
    list-style-type: decimal;
    
    & > li {
      cursor: pointer;
      & > span {
        filter: sepia(20%);
        text-decoration: underline;
        text-decoration-color: ${COLORS.ACTIVE};

        & > span {
          white-space: pre;
        }
      }
      &:hover {
        color: ${COLORS.ACTIVE};
        filter: sepia(40%);
      }
    }
  }

  & > :last-child {
    margin-top: 64px;
    height: 60vh;
    width: calc(100% + calc(24px * 2));
    margin-left: -24px;
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
