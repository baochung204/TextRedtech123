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

const steps = [
  'Thỏa thuận hợp tác',
  'Thông tin doanh nghiệp',
  'Xác minh doanh nghiệp',
  'Ký hợp đồng',
];

const CompanyAffiliate = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  // State to hold form data
  const [formData, setFormData] = useState({
    agreeTerms: false,
    companyName: '',
    taxCode: '',
    companyEmail: '',
    accountNumber: '',
    accountName: '',
    bank: '',
    branch: '',
    fileName: '',
  });

  const [selectedDocument, setSelectedDocument] = useState(null);
  const theme = useTheme(); // Lấy theme để kiểm tra chế độ dark/light
  const isDarkMode = theme.palette.mode === 'dark';

  // Handlers to manage form data
  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, fileName: file.name });
    }
  };

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

  // Validation logic for each step
  const validateStep = (step) => {
    switch (step) {
      case 0:
        return formData.agreeTerms;
      case 1:
        return (
          formData.companyName !== '' &&
          formData.taxCode !== '' &&
          formData.companyEmail !== '' &&
          formData.accountNumber !== '' &&
          formData.accountName !== '' &&
          formData.bank !== '' &&
          formData.branch !== ''
        );
      case 2:
        return formData.fileName !== '';
      case 3:
        return true; // No validation for step 3
      default:
        return false;
    }
  };

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            
            <Checkbox
              id="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              color="primary"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            <span>Đồng ý với các điều khoản của chúng tôi</span>
          </>
        );
      case 1:
        return (
          <Box>
            <Alert severity="warning" sx={{ marginTop: '30px' }}>
              Chú ý: Nội dung đối tác điền dưới đây sẽ được sử dụng làm thông tin trong hợp đồng hợp
              tác và thanh toán hoa hồng. Đối tác vui lòng điền chính xác thông tin doanh nghiệp &
              Thông tin tài khoản trước khi chuyển qua bước tiếp theo. Trân trọng!
            </Alert>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <CustomFormLabel htmlFor="companyName">Tên công ty</CustomFormLabel>
                <CustomTextField
                  id="companyName"
                  variant="outlined"
                  placeholder="Nhập tên của công ty"
                  fullWidth
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel htmlFor="taxCode">Mã số thuế</CustomFormLabel>
                <CustomTextField
                  id="taxCode"
                  variant="outlined"
                  placeholder="Mã số thuế của công ty"
                  fullWidth
                  value={formData.taxCode}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel htmlFor="companyEmail">Email công ty</CustomFormLabel>
                <CustomTextField
                  id="companyEmail"
                  variant="outlined"
                  placeholder="Nhập email công ty của bạn"
                  fullWidth
                  value={formData.companyEmail}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel htmlFor="accountNumber">Số tài khoản</CustomFormLabel>
                <CustomTextField
                  id="accountNumber"
                  variant="outlined"
                  placeholder="Nhập số tài khoản của bạn"
                  fullWidth
                  value={formData.accountNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="accountName">Tên tài khoản</CustomFormLabel>
                <CustomTextField
                  id="accountName"
                  variant="outlined"
                  placeholder="Nhập tên tài khoản của bạn"
                  fullWidth
                  value={formData.accountName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel htmlFor="bank">Ngân hàng</CustomFormLabel>
                <FormControl fullWidth>
                  <InputLabel id="bank-select-label">Chọn ngân hàng</InputLabel>
                  <Select
                    labelId="bank-select-label"
                    id="bank"
                    value={formData.bank}
                    onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
                  >
                    <MenuItem value="mb">Mb bank</MenuItem>
                    <MenuItem value="tp">TP bank</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel htmlFor="branch">Chi nhánh ngân hàng</CustomFormLabel>
                <FormControl fullWidth>
                  <InputLabel id="branch-select-label">Chọn chi nhánh</InputLabel>
                  <Select
                    labelId="branch-select-label"
                    id="branch"
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  >
                    <MenuItem value="hanoi">Hà Nội</MenuItem>
                    <MenuItem value="hochiminh">Hồ Chí Minh</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
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
              <Typography>
                Vui lòng tải lên giấy phép đăng ký kinh doanh để tiến hành xác minh doanh nghiệp của
                bạn trước khi ký hợp đồng. File hợp lệ là pdf.
              </Typography>
              <Box sx={{ marginTop: '30px' }}>
                <Input
                  type="file"
                  onChange={handleFileChange}
                  sx={{ display: 'none' }} // Hide the input
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button variant="contained" color="primary" component="span">
                    Tải lên
                  </Button>
                </label>

                {formData.fileName && ( // Conditionally render the file name if a file is uploaded
                  <Typography variant="body2" sx={{ marginTop: '10px', color: '#555' }}>
                    File đã tải lên: {formData.fileName}
                  </Typography>
                )}
              </Box>
            </Box>
          </Container>
        );
      case 3:
        return (
          <Box sx={{ width: '100%', padding: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    border: '1px solid #ccc',
                    padding: '16px',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/iCRV5g-u_M0?si=fM5Z3KQsaL5uv_PA"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`, // Dark mode border
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: isDarkMode
                      ? '0px 4px 12px rgba(0, 0, 0, 0.7)' // Darker shadow in dark mode
                      : '0px 4px 12px rgba(0, 0, 0, 0.1)', // Lighter shadow in light mode
                    backgroundColor: isDarkMode ? theme.palette.background.paper : '#fafafa', // Background color based on mode
                    height: '100%',
                    color: isDarkMode ? theme.palette.text.primary : 'black', // Change text color based on dark mode
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '25px',
                      marginBottom: '20px',
                      color: isDarkMode ? theme.palette.text.primary : '#333', // Adjust text color
                    }}
                  >
                    Hướng dẫn ký hợp đồng
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '16px',
                      marginBottom: '20px',
                      color: isDarkMode ? theme.palette.text.secondary : '#555', // Adjust text color based on mode
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
        return null;
    }
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
              <Button
                onClick={handleNext}
                variant="contained"
                color={activeStep === steps.length - 1 ? 'success' : 'secondary'}
                disabled={!validateStep(activeStep)} // Disable button if validation fails
              >
                {activeStep === steps.length - 1 ? 'Kết thúc' : 'Tiếp tục'}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </PageContainer>
  );
};

export default CompanyAffiliate;
