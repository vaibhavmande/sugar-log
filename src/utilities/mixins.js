import { css } from 'styled-components'

export const withMargin = css`
  ${({ mr }) => mr && `margin-right: ${mr}`}
`

export const withFontSize = css`
  ${({ fs }) => fs && `font-size: ${fs}`}
`
