import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = props => {
  return (
    <div>
      <Dialog
        open={props.formActiveStatus}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Log</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add the sugar log
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.hideForm} color="primary">
            Cancel
          </Button>
          <Button color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FormDialog