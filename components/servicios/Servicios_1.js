import { Servicios_1Wrapper } from "./styles/Servicios_1Wrapper.js"

export const Servicios_1 = ({ shouldShow = false }) => {
  // console.log('🟩shouldShow:', shouldShow)
  return (
    <Servicios_1Wrapper
      // className={shouldShow && "servicios1"}
      shouldShow={shouldShow}>
      <h1>Servicios_1</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit in atque excepturi, enim,
        accusantium, facere et architecto harum saepe iure! Et assumenda laborum sapiente ducimus eaque recusandae
        quidem deserunt quis quaerat fuga reprehenderit cum perferendis non laudantium minus, rem aperiam ex animi
        repellat.
      </p>
    </Servicios_1Wrapper>
  )
}
