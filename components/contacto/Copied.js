"use client"
import { CopiedWrapper } from "./styles/CopiedWrapper.js"

export const Copied = ({ isCopied = false, textToShow = "¡Copiado!" }) => {
  return (
    <>
      <CopiedWrapper isCopied={isCopied}>{textToShow}</CopiedWrapper>
    </>
  )
}
