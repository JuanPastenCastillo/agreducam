import styled from "styled-components"

export const INDEX_ServiciosWrapper = styled.div`
  height: 100vh;
  position: relative;
  cursor: ${({ $changeTypeOfCursor }) =>
    $changeTypeOfCursor === "right"
      ? `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/cursor-next.cur), auto`
      : $changeTypeOfCursor === "left"
        ? `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/cursor-prev.cur), auto`
        : "default"};


  & > :nth-child(1) {
    height: 1%;
    background-color: white;
    position: relative;
    z-index: 2;
    border-bottom-right-radius: 4px;
  }

  /* & > :nth-child(2) {
    border: 2px solid crimson;
    position: relative;
    z-index: 2;
  } */
`
