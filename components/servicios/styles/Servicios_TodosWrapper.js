import styled from "styled-components"

export const Servicios_TodosWrapper = styled.div`
  background-image: linear-gradient(0deg, hsl(124deg 100% 18%) 0%, hsl(197deg 95% 51%) 52%, hsl(270deg 91% 83%) 100%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  transition: opacity 3500ms;
  height:100%;
  
  opacity: ${({ shouldShow }) => shouldShow ? `1` : `0`};
  transition:opacity 3500ms;
  
  position:absolute;
  inset:0;
  z-index:2;
  
  
`
