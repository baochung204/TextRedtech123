import React, { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  IconButton,
  Grid,
  Stack,
  Alert,
  FormControlLabel,
} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CloseIcon from '@mui/icons-material/Close';
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';

const steps = [
  'Hướng dẫn',
  'Thông tin công ty',
  'Thông tin tài khoản',
  'Tài liệu xác minh',
  'Kết thúc',
];

const CompanyAffiliate = () => {
  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    }
  };

  const handleDocumentChange = (event) => {
    setSelectedDocument(URL.createObjectURL(event.target.files[0]));
  };

  const handleRemoveDocument = () => {
    setSelectedDocument(null);
    setSelectedFileName('');
  };

  const isStepOptional = (step) => step === 1;

  const isStepSkipped = (step) => skipped.has(step);

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
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="body1">
              Hãy làm theo các bước sau để đăng ký affiliate doanh nghiệp.
            </Typography>
          </Box>
        );
      case 1:
        return (
          <Box>
            <Box>
              <CustomFormLabel htmlFor="companyName">Tên công ty</CustomFormLabel>
              <CustomTextField
                id="companyName"
                variant="outlined"
                placeholder="Nhập tên của công ty"
                fullWidth
              />
            </Box>
            <Box>
              <CustomFormLabel htmlFor="taxCode">Mã số thuế</CustomFormLabel>
              <CustomTextField
                id="taxCode"
                variant="outlined"
                placeholder="Mã số thuế của công ty"
                fullWidth
              />
            </Box>
            <Box>
              <CustomFormLabel htmlFor="companyEmail">Gmail công ty</CustomFormLabel>
              <CustomTextField
                id="companyEmail"
                variant="outlined"
                placeholder="Nhập gmail công ty của bạn"
                fullWidth
              />
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Box>
              <CustomFormLabel htmlFor="accountNumber">Số tài khoản</CustomFormLabel>
              <CustomTextField
                id="accountNumber"
                variant="outlined"
                placeholder="Nhập số tài khoản của bạn"
                fullWidth
              />
            </Box>
            <Box>
              <CustomFormLabel htmlFor="accountName">Tên tài khoản</CustomFormLabel>
              <CustomTextField
                id="accountName"
                variant="outlined"
                placeholder="Nhập tên tài khoản của bạn"
                fullWidth
              />
            </Box>
            <Grid container spacing={3} mt={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="bank-select-label">Chọn ngân hàng</InputLabel>
                  <Select labelId="bank-select-label" id="bank-select" label="Chọn ngân hàng">
                    <MenuItem value="mb">Mb bank</MenuItem>
                    <MenuItem value="tp">TP bank</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="branch-select-label">Chi nhánh ngân hàng</InputLabel>
                  <Select
                    labelId="branch-select-label"
                    id="branch-select"
                    label="Chi nhánh ngân hàng"
                  >
                    <MenuItem value="hanoi">Hà Nội</MenuItem>
                    <MenuItem value="hochiminh">Hồ Chí Minh</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        );
      case 3:
        return (
          <Box>
            {selectedDocument && (
              <Box mb={2} position="relative">
                <Typography variant="subtitle1">Biên bản xác nhận doanh nghiệp:</Typography>
                <img
                  src={selectedDocument}
                  alt="Selected Document"
                  style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                />
                <IconButton
                  size="small"
                  onClick={handleRemoveDocument}
                  sx={{ position: 'absolute', top: 0, right: 0 }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            )}
            <CustomFormLabel htmlFor="document">Tài liệu xác minh</CustomFormLabel>
            <Button variant="contained" component="label" color="primary">
              Tải tệp lên
              <Input
                id="document"
                type="file"
                accept="application/pdf, application/msword, image/*"
                onChange={handleDocumentChange}
                style={{ display: 'none' }}
              />
            </Button>
            {selectedFileName && (
              <Typography variant="body2" color="textPrimary" mt={1}>
                File đã chọn: {selectedFileName}
              </Typography>
            )}
          </Box>
        );
      case 4:
        return (
          <Box pt={3}>
            <Typography variant="h5">Điều khoản và điều kiện</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Vui lòng đọc kỹ điều khoản và điều kiện trước khi hoàn thành việc đăng ký.
            </Typography>
            <FormControlLabel
              control={<CustomCheckbox defaultChecked />}
              label="Đồng ý với các điều khoản?"
            />
          </Box>
        );
      default:
        return null;
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <PageContainer>
      <Box mt={4}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
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
          <Stack spacing={2} mt={3}>
            <Alert severity="success">
              Bạn đã hoàn thành việc đăng ký - chờ chúng tôi phê duyệt trong vòng 24h
            </Alert>
            <Box textAlign="right">
              <Button onClick={handleReset} variant="contained" color="error">
                Cài lại
              </Button>
            </Box>
          </Stack>
        ) : (
          <Box>
            {handleSteps(activeStep)}
            <Box display="flex" flexDirection="row" mt={3}>
              <Button
                color="inherit"
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Quay lại
              </Button>
              <Box flex="1 1 auto" />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Bỏ qua
                </Button>
              )}
              <Button
                onClick={handleNext}
                variant="contained"
                color={activeStep === steps.length - 1 ? 'success' : 'secondary'}
              >
                {activeStep === steps.length - 1 ? 'Kết thúc' : 'Tiếp theo'}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </PageContainer>
  );
};

export default CompanyAffiliate;
