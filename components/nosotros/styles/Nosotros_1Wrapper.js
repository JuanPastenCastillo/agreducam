import { COLORS } from "@/assets/colors"
import styled from "styled-components"

export const Nosotros_1Wrapper = styled.div`
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
  }

  & > :nth-child(2) {
    & > span {
      color: ${COLORS.ACTIVE};
      filter: sepia(20%);
      font-weight: 700;
    }
    & > :nth-child(2) {
      text-decoration: underline;
      text-decoration-color: ${COLORS.LINK};
      color: ${COLORS.LINK};
      cursor: pointer;
      position: relative;
      z-index: 2;

      & > :hover {
        text-decoration: underline;
        text-decoration-color: ${COLORS.LINK_HOVER};
        color: ${COLORS.LINK_HOVER};
      }
    }
  }
`
