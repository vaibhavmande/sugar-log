import React, { useState } from 'react'
import FlexContainer from '../../containers/FlexContainer'
import Trend from '../Trend/Trend'
import Readings from '../Readings/Readings'
import styled from 'styled-components'

const ColoredBackground = styled(FlexContainer)`
  background-color: #ecf1ff;
  height: calc(100% - 48px);
`
const AppContainer = () => {
  const [entries, setEntries] = useState([])
  return (
    <ColoredBackground fd="column" ai="center" jc="space-between" flex="1">
      <Trend entries={entries}></Trend>
      <Readings entries={entries} setEntries={setEntries} />
    </ColoredBackground>
  )
}

export default AppContainer
