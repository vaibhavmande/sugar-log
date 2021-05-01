import styled from 'styled-components'
import Action from '../Action/Action'
import FlexContainer from '../../containers/FlexContainer'
import Card from '../Card/Card'
import meditate from '../../../images/meditate1.svg'

const Container = styled(FlexContainer)`
  flex-grow: 1;
  padding: 1.6rem;
  border: none;
  position: relative;
  box-sizing: border-box;
  width: 100%;
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
  ${({ length }) =>
    length === 0 &&
    `
    background: url(${meditate}) no-repeat scroll center center / contain;
  `}
`
const EmptyBox = styled.span`
  display: block;
  margin: 0 auto;
`

const Readings = ({ entries, setEntries }) => {
  return (
    <Container fd="column" jc="space-between">
      <CardContainer fd="column" length={entries.length}>
        {entries.map((entry, index) => (
          <Card
            key={index}
            date={entry.date}
            time={entry.time}
            reading={entry.value}
            type={entry.type}
          />
        ))}
        {entries.length === 0 && (
          <EmptyBox>Add entries to get started.</EmptyBox>
        )}
      </CardContainer>
      <AbsoluteAction entries={entries} setEntries={setEntries} />
    </Container>
  )
}

export default Readings
