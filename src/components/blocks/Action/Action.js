import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import FlexContainer from '../../containers/FlexContainer'
import ControlPointIcon from '@material-ui/icons/ControlPoint'

const AddFasting = styled(Button)`
  margin: 0 1rem;
`

const AddPP = styled(Button)`
  margin: 0 1rem;
`

const Action = ({ isEnabled }) => {
  return (
    <FlexContainer ai="center" jc="center">
      <AddFasting
        variant="contained"
        color="secondary"
        startIcon={<ControlPointIcon />}
      >
        Fasting
      </AddFasting>
      <AddPP
        variant="contained"
        color="secondary"
        startIcon={<ControlPointIcon />}
      >
        PP
      </AddPP>
    </FlexContainer>
  )
}

export default Action
