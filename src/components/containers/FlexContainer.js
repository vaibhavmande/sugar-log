import styled from 'styled-components'

const FlexContainer = styled('div')`
  display: flex;
  flex-direction: ${(props) => (props.fd ? props.fd : 'row')};
  ${({ ai }) =>
    ai &&
    `
    align-items: ${ai};
  `}
  ${({ jc }) =>
    jc &&
    `
    justify-content: ${jc};
  `}
  ${({ flex }) => flex && `flex: ${flex}`}
`

export default FlexContainer
