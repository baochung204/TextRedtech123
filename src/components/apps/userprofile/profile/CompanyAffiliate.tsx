import React, { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Input,
  Grid,
  Alert,
  Checkbox,
  Container,
} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTheme } from '@emotion/react';

const steps = [
  'Thỏa thuận hợp tác',
  'Thông tin doanh nghiệp',
  'Xác minh doanh nghiệp',
  'Ký hợp đồng',
];

const validationSchemas = [
  Yup.object({
    agreeTerms: Yup.boolean().oneOf([true], 'Bạn phải đồng ý với các điều khoản'),
  }),
  Yup.object({
    companyName: Yup.string().required('Tên công ty là bắt buộc'),
    taxCode: Yup.string()
      .matches(/^\d+$/, 'Mã số thuế chỉ chứa ký tự số')
      .required('Mã số thuế là bắt buộc'),
    companyEmail: Yup.string().email('Email không hợp lệ').required('Email công ty là bắt buộc'),
    address: Yup.string().required('Địa chỉ công ty là bắt buộc'),
    accountName: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, 'Chủ tài khoản chỉ chứa ký tự chữ')
      .required('Chủ tài khoản là bắt buộc'),
    accountNumber: Yup.string()
      .matches(/^\d+$/, 'Số tài khoản chỉ chứa ký tự số')
      .required('Số tài khoản là bắt buộc'),
    bank: Yup.number().required('Ngân hàng là bắt buộc'),
    branch: Yup.number().required('Chi nhánh ngân hàng là bắt buộc'),
  }),
  Yup.object({
    fileName: Yup.string().required('Bạn phải tải lên giấy phép đăng ký kinh doanh'),
  }),
  Yup.object({}),
];

const CompanyAffiliate = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [fileNameURL, setFileNameURL] = useState('');
  const [fileName, setFileName] = useState('');

  const formik = useFormik({
    initialValues: {
      agreeTerms: false,
      companyName: '',
      taxCode: '',
      companyEmail: '',
      address: '',
      accountNumber: '',
      accountName: '',
      bank: '',
      branch: '',
      fileNameURL: '',
    },
    validationSchema: validationSchemas[activeStep],
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      if (activeStep === steps.length - 1) {
        console.log('Final Values:', values);
      } else {
        handleNext();
      }
    },
  });

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    const filteredValue = id === 'accountName' ? value.replace(/[^a-zA-Z\s]/g, '') : value;
    formik.setFieldValue(id, type === 'checkbox' ? checked : filteredValue);
  };

  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    formik.setFieldValue(id, value);
  };



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        alert('File không hợp lệ. Vui lòng tải lên file PDF hoặc DOCX.');
        return;
      }

      const fileURL = URL.createObjectURL(file);
      setFileNameURL(fileURL);
      setFileName(file.name);
      formik.setFieldValue('fileName', file.name);
      formik.setFieldValue('fileNameURL', fileURL);
    }
  };

  const handleNext = async () => {
    setIsSubmitting(true);

    try {
      const errors = await formik.validateForm();

      if (Object.keys(errors).length === 0) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.delete(activeStep);
          return newSkipped;
        });
      } else {
        formik.setErrors(errors);
      }
    } catch (error) {
      console.error('Validation failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <>

            <Checkbox
              id="agreeTerms"
              checked={formik.values.agreeTerms}
              onChange={handleChange}
              color="primary"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            <span>Đồng ý với các điều khoản của chúng tôi</span>
            {isSubmitting && formik.errors.agreeTerms && (
              <Typography color="error">{formik.errors.agreeTerms}</Typography>
            )}
          </>
        );
      case 1:
        return (
          <Box>
            <Alert severity="warning" sx={{ marginTop: '30px', fontWeight: 'bold' }}>
              Chú ý: Nội dung đối tác điền dưới đây sẽ được sử dụng làm thông tin trong hợp đồng hợp
              tác và thanh toán hoa hồng. Đối tác vui lòng điền chính xác thông tin doanh nghiệp &
              Thông tin tài khoản trước khi chuyển qua bước tiếp theo. Trân trọng !
            </Alert>
            <Box
              sx={{
                width: '100%',
                border: '2px solid #ccc',
                display: 'flex',
                flexDirection: 'column',
                margin: '20px 0',
                padding: '10px 20px 50px 20px',
              }}
            >
              <Typography variant={'h5'} style={{ padding: '10px 0' }}>
                Thông tin làm hợp đồng
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <CustomFormLabel htmlFor="companyName">Tên công ty</CustomFormLabel>
                  <CustomTextField
                    id="companyName"
                    variant="outlined"
                    placeholder="Nhập tên của công ty"
                    fullWidth
                    value={formik.values.companyName}
                    onChange={handleChange}
                    error={isSubmitting && formik.errors.companyName}
                    helperText={isSubmitting && formik.errors.companyName}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomFormLabel htmlFor="taxCode">Mã số thuế</CustomFormLabel>
                  <CustomTextField
                    id="taxCode"
                    variant="outlined"
                    placeholder="Mã số thuế của công ty"
                    fullWidth
                    value={formik.values.taxCode}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '');
                      formik.setFieldValue('taxCode', value);
                    }}
                    error={isSubmitting && formik.errors.taxCode}
                    helperText={isSubmitting && formik.errors.taxCode}
                    inputProps={{ pattern: "\\d*", inputMode: "numeric" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomFormLabel htmlFor="companyEmail">Email công ty</CustomFormLabel>
                  <CustomTextField
                    id="companyEmail"
                    variant="outlined"
                    placeholder="Nhập email công ty của bạn"
                    fullWidth
                    value={formik.values.companyEmail}
                    onChange={handleChange}
                    error={isSubmitting && formik.errors.companyEmail}
                    helperText={isSubmitting && formik.errors.companyEmail}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomFormLabel htmlFor="address">Địa chỉ công ty</CustomFormLabel>
                  <CustomTextField
                    id="address"
                    variant="outlined"
                    placeholder="Nhập địa chỉ của công ty"
                    fullWidth
                    value={formik.values.address}
                    onChange={handleChange}
                    error={isSubmitting && formik.errors.address}
                    helperText={isSubmitting && formik.errors.address}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                width: '100%',
                border: '2px solid #ccc',
                display: 'flex',
                flexDirection: 'column',
                margin: '20px 0',
                padding: '10px 20px 50px 20px',
              }}
            >
              <Typography variant={'h5'} style={{ padding: '10px 0' }}>
                Thông tin tài khoản
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <CustomFormLabel htmlFor="accountName">Chủ tài khoản</CustomFormLabel>
                  <CustomTextField
                    id="accountName"
                    variant="outlined"
                    placeholder="Nhập tên tài khoản của bạn"
                    fullWidth
                    value={formik.values.accountName}
                    onChange={handleChange}
                    error={isSubmitting && formik.errors.accountName}
                    helperText={isSubmitting && formik.errors.accountName}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomFormLabel htmlFor="accountNumber">Số tài khoản</CustomFormLabel>
                  <CustomTextField
                    id="accountNumber"
                    variant="outlined"
                    placeholder="Nhập số tài khoản của bạn"
                    fullWidth
                    value={formik.values.accountNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '');
                      formik.setFieldValue('accountNumber', value);
                    }}
                    error={isSubmitting && formik.errors.accountNumber}
                    helperText={isSubmitting && formik.errors.accountNumber}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomFormLabel htmlFor="bank">Ngân hàng</CustomFormLabel>
                  <FormControl fullWidth>
                    <Select
                      labelId="bank-label"
                      id="bank"
                      value={formik.values.bank}
                      onChange={(e) => formik.setFieldValue('bank', e.target.value)}
                      error={isSubmitting && Boolean(formik.errors.bank)}
                    >
                      <MenuItem value={1}>Ngân hàng A</MenuItem>
                      <MenuItem value={2}>Ngân hàng B</MenuItem>
                      <MenuItem value={3}>Ngân hàng C</MenuItem>
                    </Select>
                    {isSubmitting && formik.errors.bank && (
                      <Typography color="error">{formik.errors.bank}</Typography>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <CustomFormLabel htmlFor="branch">Chi nhánh ngân hàng</CustomFormLabel>
                  <FormControl fullWidth>
                    <Select
                      labelId="branch-label"
                      id="branch"
                      value={formik.values.branch}
                      onChange={(e) => formik.setFieldValue('branch', e.target.value)}
                      error={isSubmitting && Boolean(formik.errors.branch)}
                    >
                      <MenuItem value={1}>Chi nhánh 1</MenuItem>
                      <MenuItem value={2}>Chi nhánh 2</MenuItem>
                      <MenuItem value={3}>Chi nhánh 3</MenuItem>
                    </Select>
                    {isSubmitting && formik.errors.branch && (
                      <Typography color="error">{formik.errors.branch}</Typography>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          </Box>
        );
      case 2:
        return (
          <Container sx={{ marginTop: '30px' }}>
            <Box
              sx={{
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ maxWidth: '500px' }}>
                  Vui lòng tải lên giấy phép đăng ký kinh doanh để tiến hành xác minh doanh nghiệp
                  của bạn trước khi ký hợp đồng. File hợp lệ là pdf hoặc docx.
                </Typography>
              </Box>
              <Box sx={{ marginTop: '30px' }}>
                <Input
                  type="file"
                  onChange={handleFileChange}
                  sx={{ display: 'none' }}
                  id="file-upload"
                  inputProps={{ accept: '.pdf,.docx' }}
                />
                <label htmlFor="file-upload">
                  <Button variant="contained" color="primary" component="span">
                    Tải lên
                  </Button>
                </label>
                {fileNameURL && (
                  <>
                    <Typography variant="body2" sx={{ marginTop: '10px', color: '#555' }}>
                      <a href={fileNameURL} target="_blank" rel="noopener noreferrer">
                        Xem file đã tải lên: {fileName}
                      </a>
                    </Typography>
                  </>
                )}
              </Box>
            </Box>
          </Container>
        );
      case 3:
        return <Typography>Chúc mừng! Bạn đã hoàn tất các bước.</Typography>;
      default:
        return 'Unknown step';
    }
  };

  return (
    <PageContainer>
      <Container maxWidth="lg"
        sx={{
          marginTop: '3rem'
        }}>
        <Box>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box>
            {handleSteps(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  Quay lại
                </Button>
              )}
              <Button
                variant="contained"
                onClick={() => {
                  setIsSubmitting(true);
                  formik.handleSubmit();
                }}
              // disabled={formik.isSubmitting}
              >
                {activeStep === steps.length - 1 ? 'Hoàn tất' : 'Tiếp theo'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </PageContainer>
  );
};

export default CompanyAffiliate;
