import styled from 'styled-components'
import Action from '../Action/Action'
import FlexContainer from '../../containers/FlexContainer'
import Card from '../Card/Card'

const Container = styled(FlexContainer)`
  flex-grow: 1;
  padding: 1.6rem;
  align-self: stretch;
  border: none;
  position: relative;
`
const AbsoluteAction = styled(Action)`
  position: absolute;
  bottom: 1rem;
  width: calc(100% - 4rem);
`

const CardContainer = styled(FlexContainer)`
  flex: 1;
  & > div {
    margin: 0.6rem 0;
  }
`

const Readings = ({ readings }) => {
  return (
    <Container fd="column" jc="space-between">
      <CardContainer fd="column">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardContainer>
      <AbsoluteAction />
    </Container>
  )
}

export default Readings
