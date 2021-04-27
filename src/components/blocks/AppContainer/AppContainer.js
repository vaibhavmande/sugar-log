import React from 'react'
import FlexContainer from '../../containers/FlexContainer'
import Trend from '../Trend/Trend'
import Readings from '../Readings/Readings'
import Action from '../Action/Action'

const AppContainer = () => {
  return (
    <FlexContainer
      fd="column"
      ai="center"
      jc="center"
      flex="1"
      style={{ backgroundColor: '#eee' }}
    >
      <Trend></Trend>
      <Readings></Readings>
      <Action></Action>
    </FlexContainer>
  )
}

export default AppContainer
