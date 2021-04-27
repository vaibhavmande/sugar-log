import React from 'react'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'

const AddFasting = styled(Button)({
  backgroundColor: '#00adb5',
})
const AddPP = styled(Button)({
  backgroundColor: '#00adb5',
})

const Action = ({ isEnabled }) => {
  return (
    <>
      <AddFasting>Fasting</AddFasting>
      <AddPP>PP</AddPP>
    </>
  )
}

export default Action
