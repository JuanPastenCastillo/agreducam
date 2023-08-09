import { COLORS } from "@/assets/colors"
import styled from "styled-components"

export const Nosotros_4Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  opacity: ${({ shouldShow }) => (shouldShow ? `1` : `0`)};

  & > :nth-child(1) {
    & > :nth-child(1) {
      border-bottom: 7px solid ${COLORS.ACTIVE};
      border-bottom-right-radius: 4px;
      filter: sepia(20%);
      font-weight: 800;

      & > :nth-child(1) {
        color: ${COLORS.ACTIVE};
        filter: sepia(20%);
        border-bottom: 7px solid white;
        border-bottom-right-radius: 8px;
      }

      & > :nth-child(2) {
        font-style: italic;
      }
    }
    
    & > *:not(:nth-child(1)){
      /* color:${COLORS.ACTIVE}; */
      text-decoration:underline;
      text-decoration-color:${COLORS.ACTIVE};
      filter: sepia(20%);
      font-weight: 600;
      
    }
    
  }
`
