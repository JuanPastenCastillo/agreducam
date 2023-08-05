
import styled from "styled-components"

export const INDEX_NosotrosWrapper = styled.div`
  height:${({ $shouldShow }) => $shouldShow === -1 ? "clamp(70vh, 55rem, 100vw)" : "100vh"};
  
  position: relative;
  cursor: ${({ $changeTypeOfCursor }) =>
    $changeTypeOfCursor === "right"
      ? `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/cursor-next.cur), auto`
      : $changeTypeOfCursor === "left"
        ? `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/cursor-prev.cur), auto`
        : "default"};


  & > :nth-child(1) {
    height: 1%;
    /* background-color: white; */
    background-color:${({ $shouldShow }) => $shouldShow === -1 || $shouldShow === "final" ? `transparent` : `white`};
    /* opacity:0.2; */
    
    position: relative;
    z-index: 2;
  }

`
