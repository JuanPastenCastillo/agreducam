import styled from "styled-components"

export const Servicios_TodosWrapper = styled.div`
  background: linear-gradient(270deg, rgba(35, 190, 202, 1), rgba(90, 106, 185, 1));

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  transition: opacity 3500ms;
  height: 100%;

  opacity: ${({ shouldShow }) => (shouldShow ? `1` : `0`)};
  transition: opacity 3500ms;

  position: absolute;
  inset: 0;
  z-index: 2;
`
