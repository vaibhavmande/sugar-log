import React from 'react'
import { Button } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Slide from '@material-ui/core/Slide'
import styled from 'styled-components'

const Paper = styled.div`
  background-color: #fff;
  /* border: 2px solid #000; */
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

const Input = styled.input`
  background-color: none;
  border: 1px solid;
  border-radius: 0.5rem;
  padding: 0.5rem;
  outline: none;
`
const Heading = styled.h4`
  margin-bottom: 1rem;
`

export default function AddEntry({ open, setOpen }) {
  // const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
            <Heading id="transition-modal-title">Add Entry</Heading>
            <Input type="number" pattern="[0-9]{3}" />
            <Button variant="outline" color="primary">
              Submit
            </Button>
          </Paper>
        </Slide>
      </FlexModal>
    </div>
  )
}
