// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import CloseIcon from '@mui/icons-material/Close';
// const BCrumb = [
//   {
//     to: '/',
//     title: 'Home',
//   },
//   {
//     title: 'Checkout',
//   },
// ];
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Afletpoint = ({ row }: any) => {
  const [open, setOpen] = React.useState(false);
  const fullWidth = true; // Declare and initialize fullWidth variable
  const maxWidth = 'lg'; // Declare and initialize maxWidth variable

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {row.status == 1 ? (
        <Button variant="contained" color="success" onClick={handleClickOpen}>
          Chi tiết
        </Button>
      ) : (
        ''
      )}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        {' '}
        <DialogActions style={{ padding: '0' }}>
          <a
            onClick={handleClose}
            style={{
              background: 'rgb(252, 32, 50)',
              color: 'white',
              width: '40px',
              height: '30px',
              borderBottomLeftRadius: '10px',
              textAlign: 'center',
              paddingTop: '2px',
              cursor: 'pointer',
            }}
          >
            <CloseIcon />
          </a>
        </DialogActions>
        <DialogContent>
          {' '}
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Afletpoint;
