// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface Props {
  children: JSX.Element | JSX.Element[];
  steps: any[];
  activeStep: number;
  handleReset: (event: React.SyntheticEvent | Event) => void;
  finalStep: JSX.Element | JSX.Element[];
}

const HorizontalStepper = ({ children, steps, activeStep, handleReset, finalStep }: Props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Box>{finalStep}</Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button variant="contained" color="success" component={Link} to="/apps/ecommerce/shop">
              Tiếp tục mua sắm
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button variant="contained">Tải hóa đơn</Button>
            <Button onClick={handleReset}>Cài lại</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 2, mb: 1 }}>{children}</Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default HorizontalStepper;
