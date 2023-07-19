import styled from "styled-components"

export const Servicios_2Wrapper = styled.div`
  background-color: hsl(120, 100%, 15.1%);

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
