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
  Stack,
  Alert,
  Checkbox,
  Container,
} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Scrollbar from 'src/components/custom-scroll/Scrollbar';
import Rule from 'src/views/apps/contract/Affiliate';

const steps = [
  'Thỏa thuận hợp tác',
  'Thông tin doanh nghiệp',
  'Xác minh doanh nghiệp',
  'Ký hợp đồng',
];
const validationSchemas = [
  Yup.object({
    agreeTerms: Yup.boolean().oneOf([true], 'Bạn phải đồng ý với các điều khoản.'),
  }),
  Yup.object({
    companyName: Yup.string().required('Tên công ty là bắt buộc.'),
    taxCode: Yup.string()
      .required('Mã số thuế là bắt buộc')
      .min(10, 'Mã số thuế tối thiểu 10 số, tối đa 13 số')
      .max(13, 'Mã số thuế tối thiểu 10 số, tối đa 13 số')
      .matches(/^\d+$/, 'Số tài khoản chỉ chứa ký tự số.'),
    companyEmail: Yup.string().email('Email không hợp lệ').required('Email công ty là bắt buộc.'),
    address: Yup.string().required('Địa chỉ công ty là bắt buộc'),
    representative: Yup.string()
      .matches(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẾẾỄỀỦỶỴýỳỷỹ\s]+$/,
        'Người đại diện chỉ chứa ký tự chữ.',
      )
      .required('Người đại diện là bắt buộc.'),
    position: Yup.string().required('Chức vụ là bắt buộc.'),
    accountName: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, 'Chủ tài khoản chỉ chứa ký tự chữ.')
      .required('Chủ tài khoản là bắt buộc.'),
    accountNumber: Yup.string()
      .matches(/^\d+$/, 'Số tài khoản chỉ chứa ký tự số.')
      .min(8, 'Số tài khoản tối thiểu 8 só.')
      .required('Số tài khoản là bắt buộc.'),
    bank: Yup.string().required('Ngân hàng là bắt buộc.'),
    branch: Yup.string().required('Chi nhánh ngân hàng là bắt buộc.'),
  }),
  Yup.object({
    fileName: Yup.string().required('Bạn phải tải lên giấy phép đăng ký kinh doanh.'),
  }),
  Yup.object({}),
];
const CompanyAffiliate = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

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
      fileName: '',
      fileNameURL: '',
      representative: '',
      position: '',
    },
    validationSchema: validationSchemas[activeStep],
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: async (values) => {
      if (activeStep === steps.length - 1) {
        console.log('Final Values:', values);
      } else {
        handleNext();
      }
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { id, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    let filteredValue = value;

    if (id === 'taxCode') {
      filteredValue = value;
    } else if (id === 'accountNumber') {
      filteredValue = value.replace(/[^a-zA-Z\s + ^0-9]/g, '');
    } else if (id === 'accountName') {
      filteredValue = value.replace(/[^a-zA-Z\s + ^0-9]/g, '');
    }

    formik.setFieldValue(id, type === 'checkbox' ? checked : filteredValue);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log('test', file);

    if (file) {
      const validTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      if (!validTypes.includes(file.type)) {
        alert('File không hợp lệ. Vui lòng tải lên file PDF hoặc DOCX.');
        return;
      }

      const fileURL = URL.createObjectURL(file);
      console.log('URLLL: ', fileURL);
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
          const newSkipped = new Set(prevSkipped);
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

  const isStepSkipped = (step: number) => skipped.has(step);
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSteps = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <Box
              sx={{
                height: '700px',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'hidden',
                padding: '16px 16px 0 16px',
                borderRadius: '8px',
                marginTop: '20px',
              }}
            >
              <Scrollbar sx={{ overflowY: 'auto', height: '700px' }}>
                <Rule />
              </Scrollbar>
            </Box>
            <Box>
              <Checkbox
                id="agreeTerms"
                name="agreeTerms"
                checked={formik.values.agreeTerms}
                onChange={formik.handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
              <span>Đồng ý với các điều khoản của chúng tôi</span>

              {/* Show error if agreeTerms has validation error */}
              {formik.errors.agreeTerms && (
                <Typography color="error">{formik.errors.agreeTerms}</Typography>
              )}
            </Box>
          </>
        );
      case 1:
        return (
          <Box>
            <Alert severity="warning" sx={{ marginTop: '30px', fontWeight: 'bold' }}>
              Chú ý: Nội dung đối tác điền dưới đây sẽ được sử dụng làm thông tin trong hợp đồng hợp
              tác và thanh toán hoa hồng. Đối tác vui lòng điền chính xác thông tin doanh nghiệp &
              Thông tin tài khoản trước khi chuyển qua bước tiếp theo. Trân trọng!
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
                    error={isSubmitting && Boolean(formik.errors.companyName)}
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
                    onChange={handleChange}
                    error={isSubmitting && Boolean(formik.errors.taxCode)}
                    helperText={isSubmitting && formik.errors.taxCode}
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
                    error={isSubmitting && Boolean(formik.errors.companyEmail)}
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
                    error={isSubmitting && Boolean(formik.errors.address)}
                    helperText={isSubmitting && formik.errors.address}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomFormLabel htmlFor="address">Người đại diện</CustomFormLabel>
                  <CustomTextField
                    id="representative"
                    variant="outlined"
                    placeholder="Nhập tên người đại diện"
                    fullWidth
                    value={formik.values.representative}
                    onChange={handleChange}
                    error={isSubmitting && Boolean(formik.errors.representative)}
                    helperText={isSubmitting && formik.errors.representative}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomFormLabel htmlFor="address">Chức vụ</CustomFormLabel>
                  <CustomTextField
                    id="position"
                    variant="outlined"
                    placeholder="Nhập chức vụ"
                    fullWidth
                    value={formik.values.position}
                    onChange={handleChange}
                    error={isSubmitting && Boolean(formik.errors.position)}
                    helperText={isSubmitting && formik.errors.position}
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
                Thông tin làm hợp đồng
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <CustomFormLabel htmlFor="accountName">Chủ tài khoản</CustomFormLabel>
                  <CustomTextField
                    id="accountName"
                    variant="outlined"
                    placeholder="Chủ tài khoản ngân hàng"
                    fullWidth
                    value={formik.values.accountName}
                    onChange={handleChange}
                    error={isSubmitting && Boolean(formik.errors.accountName)}
                    helperText={isSubmitting && formik.errors.accountName}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomFormLabel htmlFor="accountNumber">Số tài khoản</CustomFormLabel>
                  <CustomTextField
                    id="accountNumber"
                    variant="outlined"
                    placeholder="Số tài khoản ngân hàng"
                    fullWidth
                    value={formik.values.accountNumber}
                    onChange={handleChange}
                    error={isSubmitting && Boolean(formik.errors.accountNumber)}
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
                {formik.values.fileNameURL && (
                  <>
                    <Typography variant="body2" sx={{ marginTop: '10px', color: '#555' }}>
                      <a href={formik.values.fileNameURL} target="_blank" rel="noopener noreferrer">
                        Xem file đã tải lên: {formik.values.fileName}
                      </a>
                    </Typography>
                  </>
                )}
                {formik.errors.fileNameURL ? (
                  <Typography color="error">{formik.errors.fileNameURL}</Typography>
                ) : null}
              </Box>
            </Box>
          </Container>
        );

      case 3:
        return (
          <Box sx={{ width: '100%', padding: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/iCRV5g-u_M0?si=fM5Z3KQsaL5uv_PA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
                    padding: '24px',
                    boxShadow: isDarkMode
                      ? '0px 4px 12px rgba(0, 0, 0, 0.7)'
                      : '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    backgroundColor: isDarkMode ? theme.palette.background.paper : '#fafafa',
                    height: '100%',
                    color: isDarkMode ? theme.palette.text.primary : 'black',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '25px',
                      marginBottom: '20px',
                      color: isDarkMode ? theme.palette.text.primary : '#333',
                    }}
                  >
                    Hướng dẫn ký hợp đồng
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '16px',
                      marginBottom: '20px',
                      color: isDarkMode ? theme.palette.text.secondary : '#555',
                    }}
                  >
                    Bước 1: Tải xuống hợp đồng có chứa thông tin của đối tác.
                  </Typography>

                  <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        padding: '8px 16px',
                        borderRadius: '4px',
                        fontSize: '14px',
                      }}
                    >
                      Tải xuống
                    </Button>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: '16px',
                      marginBottom: '20px',
                      color: isDarkMode ? theme.palette.text.secondary : '#555',
                    }}
                  >
                    Bước 2: Kiểm tra & xác minh toàn bộ thông tin trong hợp đồng.
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '16px',
                      marginBottom: '20px',
                      color: isDarkMode ? theme.palette.text.secondary : '#555',
                    }}
                  >
                    Bước 3: Tiến hành ký hợp đồng như video hướng dẫn bên trái.
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '16px',
                      marginBottom: '20px',
                      color: isDarkMode ? theme.palette.text.secondary : '#555',
                    }}
                  >
                    Bước 4: Tải file hợp đồng đã ký lên.
                  </Typography>

                  <Box sx={{ textAlign: 'center' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        padding: '8px 16px',
                        borderRadius: '4px',
                        fontSize: '14px',
                      }}
                    >
                      Tải hợp đồng đã ký lên
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        );

      default:
        return 'Unknown step';
    }
  };
  return (
    <PageContainer>
      <Box mt={4}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
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
              <Button component={Link} to="/apps/pending" variant="contained" color="error">
                Hoàn thành
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
              <Button
                component={Link}
                color="inherit"
                variant="contained"
                to="/user-profile"
                sx={{ mr: 1 }}
              >
                Hủy bỏ
              </Button>
              <Box flex="1 1 auto" />
              {activeStep === steps.length - 1 ? (
                <Button
                  onClick={() => {
                    setIsSubmitting(true);
                    formik.handleSubmit();
                  }}
                  variant="contained"
                  color="success"
                  component={Link}
                  to="/apps/pending"
                >
                  Hoàn thành
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setIsSubmitting(true);
                    formik.handleSubmit();
                  }}
                  variant="contained"
                  color="secondary"
                >
                  Tiếp tục
                </Button>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </PageContainer>
  );
};
export default CompanyAffiliate;
