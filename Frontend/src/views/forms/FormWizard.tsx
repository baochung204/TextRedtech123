// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  FormControlLabel,
  Alert,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  IconButton,
} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import CloseIcon from '@mui/icons-material/Close';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import ParentCard from 'src/components/shared/ParentCard';

const steps = [
  'Hướng dẫn',
  'Tài khoản cá nhân',
  'Thông tin liên hệ',
  'Tài liệu xác minh',
  'Kết thúc',
];

const FormWizard = () => {
  const [selectedImage1, setSelectedImage1] = useState<string | null>(null);
  const [selectedImage2, setSelectedImage2] = useState<string | null>(null);

  const handleImage1Change = (event: any) => {
    setSelectedImage1(URL.createObjectURL(event.target.files[0]));
  };

  const handleImage2Change = (event: any) => {
    setSelectedImage2(URL.createObjectURL(event.target.files[0]));
  };
  const handleRemoveImage1 = () => {
    setSelectedImage1(null);
  };

  const handleRemoveImage2 = () => {
    setSelectedImage2(null);
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step: any) => step === 1;

  const isStepSkipped = (step: any) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);

      return newSkipped;
    });
  };

  // eslint-disable-next-line consistent-return
  const handleSteps = (step: any) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <h1>hello world</h1>
          </Box>
        );
      case 1:
        return (
          <Box>
            <Box>
              <CustomFormLabel htmlFor="banknumber">Số tài khoản</CustomFormLabel>
              <CustomTextField
                id="banknumber"
                variant="outlined"
                placeholder="Nhập số tài khoản của bạn"
                fullWidth
              />
            </Box>
            <Box>
              <CustomFormLabel htmlFor="password">Tên tài khoản</CustomFormLabel>
              <CustomTextField
                id="password"
                type="password"
                variant="outlined"
                placeholder="Nhập tên tài khoản của bạn"
                fullWidth
              />
            </Box>
            <Box>
              <CustomFormLabel htmlFor="gender">Chọn ngân hàng</CustomFormLabel>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Chọn ngân hàng</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Gender">
                  <MenuItem value="mb">Mb bank</MenuItem>
                  <MenuItem value="tp">TP bank</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Box>
              <CustomFormLabel htmlFor="gmail">Gmail</CustomFormLabel>
              <CustomTextField
                id="gmail"
                type="email"
                variant="outlined"
                placeholder="Nhập gmail của bạn"
                fullWidth
              />
            </Box>
            <Box>
              <CustomFormLabel htmlFor="phonenumber">Số điện thoại</CustomFormLabel>
              <CustomTextField
                id="phonenumber"
                type="tel"
                variant="outlined"
                placeholder="Nhập số điện thoại của bạn"
                fullWidth
              />
            </Box>
            <Box>
              <CustomFormLabel htmlFor="address">Địa chỉ</CustomFormLabel>
              <CustomTextField
                id="address"
                type="text"
                variant="outlined"
                placeholder="Nhập địa chỉ của bạn"
                fullWidth
              />
            </Box>
          </Box>
        );
      case 3:
        return (
          <Box>
            <Box mb={2}>
              {selectedImage1 && (
                <Box mb={2} position="relative">
                  <Typography variant="subtitle1">Mặt trước căn cước công dân:</Typography>
                  <img
                    src={selectedImage1}
                    alt="Selected 1"
                    style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                  />
                  <IconButton
                    size="small"
                    onClick={handleRemoveImage1}
                    sx={{ position: 'absolute', top: 0, right: 0 }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              )}
              <CustomFormLabel htmlFor="image1">Mặt trước căn cước công dân</CustomFormLabel>
              <Button variant="contained" component="label" color="primary">
                Choose File
                <Input
                  id="image1"
                  type="file"
                  inputProps={{ accept: 'image/*' }}
                  onChange={handleImage1Change}
                  style={{ display: 'none' }}
                />
              </Button>
            </Box>
            <Box mb={2}>
              {selectedImage2 && (
                <Box mb={2} position="relative">
                  <Typography variant="subtitle1">Mặt sau căn cước công dân:</Typography>
                  <img
                    src={selectedImage2}
                    alt="Selected 2"
                    style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                  />
                  <IconButton
                    size="small"
                    onClick={handleRemoveImage2}
                    sx={{ position: 'absolute', top: 0, right: 0 }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              )}
              <CustomFormLabel htmlFor="image2">Mặt sau căn cước công dân</CustomFormLabel>
              <Button variant="contained" component="label" color="primary">
                Choose File
                <Input
                  id="image2"
                  type="file"
                  inputProps={{ accept: 'image/*' }}
                  onChange={handleImage2Change}
                  style={{ display: 'none' }}
                />
              </Button>
            </Box>
          </Box>
        );
      case 4:
        return (
          <Box pt={3}>
            <Typography variant="h5">Terms and condition</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Sard about this site or you have been to it, but you cannot figure out what it is or
              what it can do. MTA web directory isSard about this site or you have been to it, but
              you cannot figure out what it is or what it can do. MTA web directory is
            </Typography>
            <FormControlLabel
              control={<CustomCheckbox defaultChecked />}
              label="Agree with terms?"
            />
          </Box>
        );
      default:
        break;
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <PageContainer>
      <Breadcrumb title="Form Wizard" subtitle="this is Form Wizard page" />
      <ParentCard title="Form Wizard">
        <Box width="100%">
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              // if (isStepOptional(index)) {
              //   labelProps.optional = <Typography variant="caption">Optional</Typography>;
              // }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Stack spacing={2} mt={3}>
                <Alert severity="success">All steps completed - you&apos;re finished</Alert>

                <Box textAlign="right">
                  <Button onClick={handleReset} variant="contained" color="error">
                    Reset
                  </Button>
                </Box>
              </Stack>
            </>
          ) : (
            <>
              <Box>{handleSteps(activeStep)}</Box>

              <Box display="flex" flexDirection="row" mt={3}>
                <Button
                  color="inherit"
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box flex="1 1 auto" />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button
                  onClick={handleNext}
                  variant="contained"
                  color={activeStep === steps.length - 1 ? 'success' : 'secondary'}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </ParentCard>
    </PageContainer>
  );
};

export default FormWizard;
