import styled from "styled-components"

export const Servicios_FinalWrapper = styled.div`
  background-image: linear-gradient(0deg, hsl(124deg 100% 18%) 0%, hsl(197deg 95% 51%) 52%, hsl(270deg 91% 83%) 100%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:24px;
  
  padding: 24px;
  opacity: ${({ shouldShow }) => (shouldShow ? `1` : `0`)};
  transition: opacity 3500ms;
  position: absolute;
  /* z-index:2; */
  z-index:${({ shouldShow }) => shouldShow ? `2` : `-1`};
  
  inset: 0;
  
  & > *{
    /* border: 2px solid crimson; */
    
    width:75%;
    
    & > *{
      width:100%;
      padding: 16px;
      
      font-size:24px;
    }
    
  }
  
`
