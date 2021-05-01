import React from 'react'
import styled from 'styled-components'
import FlexContainer from '../../containers/FlexContainer'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import AddEntry from '../AddEntry/AddEntry'
import AppButton from '../../elements/AppButton'

const AddButton = styled(AppButton)`
  margin: 0 1rem;
`

const Action = ({ isEnabled = true, entries, setEntries }) => {
  const [open, setOpen] = React.useState(false)
  const [addFormType, setAddFormType] = React.useState(null)

  return (
    <FlexContainer ai="center" jc="center">
      <AddButton
        variant="contained"
        startIcon={<ControlPointIcon />}
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
    </FlexContainer>
  )
}

export default Action
