import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import FlexContainer from '../../containers/FlexContainer'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import AddEntry from '../AddEntry/AddEntry'

const AddFasting = styled(Button)`
  margin: 0 1rem;
`

const AddPP = styled(Button)`
  margin: 0 1rem;
`

const Action = ({ isEnabled }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <FlexContainer ai="center" jc="center">
      <AddFasting
        variant="contained"
        color="secondary"
        startIcon={<ControlPointIcon />}
        onClick={() => setOpen(!open)}
      >
        Fasting
      </AddFasting>
      <AddPP
        variant="contained"
        color="secondary"
        startIcon={<ControlPointIcon />}
        onClick={() => setOpen(!open)}
      >
        PP
      </AddPP>
      <AddEntry open={open} setOpen={setOpen} />
    </FlexContainer>
  )
}

export default Action
