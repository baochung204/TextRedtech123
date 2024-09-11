// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import { sum } from 'lodash';
import { Box, Stack, Button, Alert } from '@mui/material';
import AddToCart from '../productCart/AddToCart';

import { IconArrowBack } from '@tabler/icons-react';
import { useSelector } from 'src/store/Store';
import HorizontalStepper from './HorizontalStepper';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FinalStep from './FinalStep';
import { ProductType } from 'src/types/apps/eCommerce';
import { Link } from 'react-router-dom';
import AlertCart from '../productCart/AlertCart';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}
const ProductChecout = () => {
  const checkout = useSelector((state) => state.ecommerceReducer.cart);
  const steps = [''];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const total = sum(checkout.map((product: ProductType) => product.price * product.qty));
  const Discount = Math.round(total * (5 / 100));
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <Box>
      <>
        {' '}
        <Box my={3}>
          <AddToCart />{' '}
        </Box>
        {/* ------------------------------------------- */}
        {/* Tổng giỏ hàng */}
        {/* ------------------------------------------- */}
      </>
    </Box>
  );
};

export default ProductChecout;
