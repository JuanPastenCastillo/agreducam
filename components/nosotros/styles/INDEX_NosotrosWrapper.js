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
  }
  & > :nth-child(3) {
  }
  & > :nth-child(4) {
    list-style: inside;
    list-style-type: decimal;

    & > li {
      /* border-bottom: 2px solid red; */
      /* border-bottom: 2px solid red; */

      & > span {
        /* color: ${COLORS.ACTIVE}; */
        /* color: white; */
        filter: sepia(20%);
        text-decoration: underline;
        text-decoration-color: ${COLORS.ACTIVE};
        white-space: pre;

        cursor: pointer;

        &:hover {
          color: ${COLORS.ACTIVE};
          filter: sepia(40%);
        }
      }
    }
  }
`
