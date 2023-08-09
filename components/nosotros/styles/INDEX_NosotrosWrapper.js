import styled from "styled-components"

export const INDEX_NosotrosWrapper = styled.div`
  height: ${({ $shouldShow }) =>
    $shouldShow === -1 ? "clamp(70vh, 55rem, 100vw)" : $shouldShow === 2 ? "150vh" : "100vh"};

  position: relative;
  cursor: ${({ $changeTypeOfCursor }) =>
    $changeTypeOfCursor === "right"
      ? `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/cursor-next.cur), auto`
      : $changeTypeOfCursor === "left"
        ? `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/cursor-prev.cur), auto`
        : "default"};

  font-size: clamp(1.7rem, 7vw, 3rem);

  & > :nth-child(1) {
    height: 1%;
    background-color: ${({ $shouldShow }) => ($shouldShow === -1 || $shouldShow === "final" ? `transparent` : `white`)};

    position: relative;
    z-index: 2;
  }

  & > *:not(:first-child) {
    padding: 24px;

    transition: opacity 900ms ease;
    position: absolute;
    inset: 0;

    line-height: 1.5;
    
  }

`
