import React from 'react'
import FlexContainer from '../../containers/FlexContainer'
import Trend from '../Trend/Trend'
import Readings from '../Readings/Readings'
import Action from '../Action/Action'
import styled from 'styled-components'

const ColoredBackground = styled(FlexContainer)`
  background-color: #eee;
`
const AppContainer = () => {
  return (
    <ColoredBackground fd="column" ai="center" jc="center" flex="1">
      <Trend></Trend>
      <Readings></Readings>
      <Action></Action>
    </ColoredBackground>
  )
}

export default AppContainer
