import styled from 'styled-components'

export const Servicios_5Wrapper = styled.div`
  background-image: linear-gradient(
  90deg,
  darkorange 0%,
  darkcyan 52%,
  white 100%
);

color:black;


  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding:24px;
  opacity: ${({ shouldShow }) => (shouldShow ? `1` : `0`)};
  transition: opacity 3500ms;
  position: absolute;
  inset: 0;
  
`