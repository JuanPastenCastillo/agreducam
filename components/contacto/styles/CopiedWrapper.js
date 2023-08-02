import styled from "styled-components"

export const CopiedWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 50%;
  z-index: ${({ isCopied }) => (isCopied ? `1` : `-1`)};
  opacity: ${({ isCopied }) => (isCopied ? `1` : `0`)};
  background-color: black;

  border-radius: 16px;
  border: 2px solid hsl(120, 100%, 40.1%);
  color: hsl(120, 100%, 40.1%);
  padding: 16px;
`
