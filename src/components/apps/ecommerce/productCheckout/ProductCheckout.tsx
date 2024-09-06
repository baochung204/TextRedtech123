// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { sum } from 'lodash';
import { Box, Stack, Button } from '@mui/material';
import AddToCart from '../productCart/AddToCart';

import { IconArrowBack } from '@tabler/icons-react';
import { useSelector } from 'src/store/Store';
import HorizontalStepper from './HorizontalStepper';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FinalStep from './FinalStep';
import { ProductType } from 'src/types/apps/eCommerce';

const ProductChecout = () => {
  const checkout = useSelector((state) => state.ecommerceReducer.cart);
  const steps = ['Giỏ hàng', 'Thanh toán & địa chỉ', 'Payment'];
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const total = sum(checkout.map((product: ProductType) => product.price * product.qty));
  const Discount = Math.round(total * (5 / 100));

  return (
    <Box>
      <HorizontalStepper
        steps={steps}
        handleReset={handleReset}
        activeStep={activeStep}
        finalStep={<FinalStep />}
      >
        {/* ------------------------------------------- */}
        {/* Bước 1 */}
        {/* ------------------------------------------- */}
        {activeStep === 0 ? (
          <>
            <Box my={3}>
              <AddToCart />
            </Box>
            {checkout.length > 0 ? (
              <>
                {/* ------------------------------------------- */}
                {/* Tổng giỏ hàng */}
                {/* ------------------------------------------- */}
                <FirstStep total={total} Discount={Discount} />
                <Stack direction={'row'} justifyContent="space-between">
                  <Button
                    color="secondary"
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Quay lại
                  </Button>
                  <Button variant="contained" onClick={handleNext}>
                    Thanh toán
                  </Button>
                </Stack>
              </>
            ) : (
              ''
            )}
          </>
        ) : activeStep === 1 ? (
          <>
            {/* ------------------------------------------- */}
            {/* Bước 2 */}
            {/* ------------------------------------------- */}
            <SecondStep nexStep={handleNext} />
            <FirstStep total={total} Discount={Discount} />
            <Stack direction={'row'} justifyContent="space-between">
              <Button color="inherit" disabled={activeStep !== 1} onClick={handleBack}>
                Quay lại
              </Button>
              <Button color="inherit" variant="outlined">
                Chọn địa chỉ để tiếp tục
              </Button>
            </Stack>
          </>
        ) : (
          <>
            {/* ------------------------------------------- */}
            {/* Bước 3 */}
            {/* ------------------------------------------- */}
            <ThirdStep />
            <FirstStep total={total} Discount={Discount} />
            <Stack direction={'row'} justifyContent="space-between">
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack}>
                <IconArrowBack /> Quay lại
              </Button>
              <Button onClick={handleNext} size="large" variant="contained">
                Hoàn tất đơn hàng
              </Button>
            </Stack>
          </>
        )}
      </HorizontalStepper>
    </Box>
  );
};

export default ProductChecout;
