import React from 'react'
import styled from 'styled-components'
import FlexContainer from '../../containers/FlexContainer'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import AddEntry from '../AddEntry/AddEntry'
import AppButton from '../../elements/AppButton'

const AddButton = styled(AppButton)`
  margin: 0 1rem;
  flex-basis: 50%;
`
const ButtonContainer = styled(FlexContainer)`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
`

const Action = ({ isEnabled = true, entries, setEntries }) => {
  const [open, setOpen] = React.useState(false)
  const [addFormType, setAddFormType] = React.useState(null)

  return (
    <ButtonContainer ai="center" jc="center">
      <AddButton
        variant="contained"
        startIcon={<ControlPointIcon />}
        color="primary"
        onClick={() => {
          setAddFormType('fasting')
          setOpen(!open)
        }}
        disabled={!isEnabled}
      >
        Fasting
      </AddButton>
      <AddButton
        variant="contained"
        color="primary"
        startIcon={<ControlPointIcon />}
        onClick={() => {
          setAddFormType('PP')
          setOpen(!open)
        }}
        disabled={!isEnabled}
      >
        PP
      </AddButton>
      <AddEntry
        open={open}
        setOpen={setOpen}
        type={addFormType}
        entries={entries}
        setEntries={setEntries}
      />
    </ButtonContainer>
  )
}

export default Action
