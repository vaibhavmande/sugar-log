import React from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Slide from '@material-ui/core/Slide'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import AppButton from '../../elements/AppButton'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

const Paper = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 5px 1px rgba(0, 0, 0, 0.2);
  padding: 1rem 2rem 1.5rem;
  margin: 1rem;
  border-radius: 1rem;
`

const FlexModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Heading = styled.h4`
  margin-bottom: 2rem;
`

const StyledInput = styled(TextField)`
  margin-bottom: 2rem;
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #000;
    }
  }
`
const SpacedContainer = styled.div`
  margin-bottom: 2rem;
`

export default function AddEntry({ open, setOpen, type, entries, setEntries }) {
  const [isError, setIsError] = React.useState(false)
  const [touched, setTouched] = React.useState(false)
  const [formValue, setFormValue] = React.useState(null)
  const [formDate, setFormDate] = React.useState(new Date())

  const helperText = (isError) =>
    isError ? 'Incorrect entry' : `Add today's ${type ?? 'sugar'} entry`
  const isValidEntry = (value) => value > 0 && Number.isInteger(value)

  const handleChange = (event) => {
    const value = event.target.value.trim()
    const isTouched = value.length > 0
    const isInputError = isTouched && !isValidEntry(Number(value))

    setIsError(isInputError)
    setTouched(isTouched)
    if (isTouched && !isInputError) {
      setFormValue(Number(value))
    }
  }

  const handleClose = () => {
    setFormValue(null)
    setIsError(false)
    setTouched(false)
    setOpen(false)
  }

  const handleSubmit = () => {
    if (Number.isInteger(formValue)) {
      const now = formDate.toLocaleString('in').split(' ')

      const logEntry = {
        date: now[0],
        time: now[1],
        value: formValue,
        type: type,
      }
      setEntries([...entries, logEntry])
    } else {
      console.error('Invalid entry', formValue)
    }
    handleClose()
  }

  const handleDateChange = (date) => {
    setFormDate(date)
  }

  return (
    <div>
      <FlexModal
        ai="center"
        jc="center"
        aria-labelledby="Add"
        aria-describedby="Add"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
          <Paper>
            <Heading>Add Entry</Heading>
            <SpacedContainer>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  label="Select date"
                  format="dd/MM/yyyy"
                  value={formDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'select date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </SpacedContainer>
            <StyledInput
              required
              error={isError}
              label="Enter sugar log"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              helperText={helperText(isError)}
              onChange={handleChange}
            />
            <AppButton
              variant="contained"
              disabled={!touched || isError}
              onClick={handleSubmit}
            >
              Submit
            </AppButton>
          </Paper>
        </Slide>
      </FlexModal>
    </div>
  )
}
