import { COLORS } from "@/assets/colors"
import styled from "styled-components"

export const CopiedWrapper = styled.div`
  position: fixed;
  bottom: 0%;
  z-index: ${({ isCopied }) => (isCopied ? `1` : `-1`)};
  display:${({ isCopied }) => (isCopied ? `block` : `none`)};
  background-color: black;

  border-radius: 16px;
  border: 2px solid hsl(180, 100%, 44.3%);
  color: hsl(180, 100%, 44.3%);
  padding: 16px;

  text-align: center;

  & > span {
    text-decoration: underline;
    color: ${COLORS.ACTIVE};
  }
`
