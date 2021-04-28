import React from 'react'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'
import FlexContainer from '../../containers/FlexContainer'

const AddFasting = styled(Button)({
  backgroundColor: '#00adb5',
})
const AddPP = styled(Button)({
  backgroundColor: '#00adb5',
})

const Action = ({ isEnabled }) => {
  return (
    <FlexContainer ai="center" jc="center">
      <AddFasting>Fasting</AddFasting>
      <AddPP>PP</AddPP>
    </FlexContainer>
  )
}

export default Action
