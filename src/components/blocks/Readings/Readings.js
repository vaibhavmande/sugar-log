import styled from 'styled-components'
import Action from '../Action/Action'
import FlexContainer from '../../containers/FlexContainer'

const Container = styled(FlexContainer)`
  flex-grow: 1;
  padding: 2rem;
  align-self: stretch;
  border: none;
  background-color: wheat;
  border-radius: 2rem 2rem 0 0;
  position: relative;
`
const AbsoluteAction = styled(Action)`
  position: absolute;
  bottom: 1rem;
  width: calc(100% - 4rem);
`

const Readings = ({ readings }) => {
  return (
    <Container fd="column" jc="space-between">
      <span>Reading</span>
      <AbsoluteAction />
    </Container>
  )
}

export default Readings
