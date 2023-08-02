'use client'
import { CopiedWrapper } from './styles/CopiedWrapper.js'

export const Copied = ({ isCopied = false }) => {
  return (
    <CopiedWrapper isCopied={isCopied}
    >
      Copiado!
    </CopiedWrapper>
  )
}