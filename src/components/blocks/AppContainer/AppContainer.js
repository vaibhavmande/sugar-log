import React from 'react'
import FlexContainer from '../../containers/FlexContainer'
import Trend from '../Trend/Trend'
import Readings from '../Readings/Readings'
import styled from 'styled-components'

const ColoredBackground = styled(FlexContainer)`
  background-color: #ecf1ff;
`
const AppContainer = () => {
  return (
    <ColoredBackground fd="column" ai="center" jc="space-between" flex="1">
      <Trend></Trend>
      <Readings></Readings>
    </ColoredBackground>
  )
}

export default AppContainer
