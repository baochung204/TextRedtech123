// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ProductChecout from 'src/components/apps/ecommerce/productCheckout/ProductCheckout';
import ChildCard from 'src/components/shared/ChildCard';
const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Checkout',
  },
];
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Aflertdetail = ({ row }: any) => {
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
        <Button variant="contained" color="success" width="50%" onClick={handleClickOpen}>
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
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {/* breadcrumb */}

            {/* ------------------------------------------- */}
            {/* Right part */}
            {/* ------------------------------------------- */}

            {/* <ProductChecout /> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Aflertdetail;
