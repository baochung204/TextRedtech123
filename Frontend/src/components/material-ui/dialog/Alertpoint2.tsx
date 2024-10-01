// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import Content2 from './content2';
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

const Afletpoint2 = ({ children, Cartproduct, total, Discount }: any) => {
  children;
  const [open, setOpen] = React.useState(false);
  const fullWidth = true; // Declare and initialize fullWidth variable
  const maxWidth = 'lg'; // Declare and initialize maxWidth variable

  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log(Cartproduct);
  return (
    <>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Thanh toán
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        {' '}
        <DialogActions style={{ padding: '0' }}>
          {/* <a
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
          </a> */}
        </DialogActions>
        <DialogContent>
          {' '}
          <DialogContentText id="alert-dialog-slide-description">
            <Content2 Cartproduct={Cartproduct} total={total} Discount={Discount} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Afletpoint2;
