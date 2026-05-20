import React from 'react'
import Modal from '@mui/material/Modal'
import Backdrop from '@mui/material/Backdrop'
import Slide from '@mui/material/Slide'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import AppButton from '../../elements/AppButton'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import FlexContainer from '../../containers/FlexContainer'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

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
  margin-bottom: 1rem;
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
    isError
      ? 'Incorrect entry (0 < entry < 1000)'
      : `Add today's ${type ?? 'sugar'} entry`
  const isValidEntry = (value) =>
    value > 0 && value < 1000 && Number.isInteger(value)

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
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: { timeout: 500 },
        }}
      >
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
          <Paper
            style={{ display: 'flex', flexDirection: 'column' }}
            data-testid="add-form-parent"
          >
            <FlexContainer fd="column">
              <Heading>Add Entry</Heading>
              <SpacedContainer>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Select date"
                    format="dd/MM/yyyy"
                    value={formDate}
                    onChange={handleDateChange}
                  />
                </LocalizationProvider>
              </SpacedContainer>
              <StyledInput
                autoFocus={true}
                required
                error={isError}
                label="Enter sugar log"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  inputProps: {
                    'data-testid': 'form-input',
                  },
                }}
                variant="outlined"
                helperText={helperText(isError)}
                onChange={handleChange}
              />
              <AppButton
                variant="contained"
                color="primary"
                disabled={!touched || isError}
                onClick={handleSubmit}
                data-testid="add-button"
              >
                Submit
              </AppButton>
            </FlexContainer>
          </Paper>
        </Slide>
      </FlexModal>
    </div>
  )
}
