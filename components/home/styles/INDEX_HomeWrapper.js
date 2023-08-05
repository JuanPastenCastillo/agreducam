import styled from "styled-components"

export const INDEX_HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    margin: auto;

    & > :nth-child(1) {
      -webkit-mask-image: url(${(variableHere) => variableHere.image});
      mask-image: url(${(variableHere) => variableHere.image});

      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;

      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      filter: contrast(120%);

      width: 100%;
    }
  }
`
