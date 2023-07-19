import styled from "styled-components"


export const Servicios_1Wrapper = styled.div`
  background-color: hsl(348, 83.3%, 17.1%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding:24px;
  opacity: ${({ shouldShow }) => shouldShow ? `1` : `0`};
  transition:opacity 3500ms;
  position: absolute;
  inset: 0;
  

  
`
