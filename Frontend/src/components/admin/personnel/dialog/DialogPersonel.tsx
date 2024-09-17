import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

interface DialogProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    value: string
}

const DialogPersonel = ({ open, setOpen, value }: DialogProps) => {
    return (
        <Dialog
            open={open && value === '1'}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Disagree</Button>
                <Button onClick={() => setOpen(false)} autoFocus>
                Agree
            </Button>
        </DialogActions>
      </Dialog >
  )
}

export default DialogPersonel
