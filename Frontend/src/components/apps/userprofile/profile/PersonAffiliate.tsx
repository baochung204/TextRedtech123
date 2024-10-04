import { useState } from 'react';
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
  IconButton,
  Checkbox,
  Grid,
  Divider,
} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import CloseIcon from '@mui/icons-material/Close';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import Authenticate from 'src/assets/images/authenticate/authenticate.png';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Rule from 'src/views/apps/contract/Affiliate';
import Scrollbar from 'src/components/custom-scroll/Scrollbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = ['Thỏa thuận hợp tác', 'Tài khoản cá nhân', 'Xác minh tài khoản'];

const validationSchemas = [
  Yup.object({
    agreeTerms: Yup.boolean().oneOf([true], 'Bạn cần đồng ý với các điều khoản'),
  }),
  Yup.object({
    bankNumber: Yup.string()
      .matches(/^\d+$/, 'Số tài khoản chỉ chứa các ký tự số')
      .min(8, 'Số tài khoản tối thiểu 8 số.')
      .required('Số tài khoản là bắt buộc'),
    accountName: Yup.string()
      .matches(
        /^[a-zA-ZaAáÁàÀảẢãÃạẠăĂắẮằẰẳẲẵẴặẶâÂấẤầẦẩẨẫẪậẬbBcCdDđĐeEéÉèÈẻẺẽẼẹẸêÊếẾềỀễỄệỆfFgGhHiIíÍìÌĩĨỉỈịỊjJkKlLmMnNoOóÓòÒỏỎõÕọỌôÔốỐồỒổỔỗỖộỘơƠớỚờỜởỞỡỠợỢpPqQrRsStTuUúÚùÙủỦũŨụỤưƯứỨừỪửỬữỮựỰvVwWxXyY]+ [a-zA-ZaAáÁàÀảẢãÃạẠăĂắẮằẰẳẲẵẴặẶâÂấẤầẦẩẨẫẪậẬbBcCdDđĐeEéÉèÈẻẺẽẼẹẸêÊếẾềỀễỄệỆfFgGhHiIíÍìÌĩĨỉỈịỊjJkKlLmMnNoOóÓòÒỏỎõÕọỌôÔốỐồỒổỔỗỖộỘơƠớỚờỜởỞỡỠợỢpPqQrRsStTuUúÚùÙủỦũŨụỤưƯứỨừỪửỬữỮựỰvVwWxXyY\s]+$/,
        'Người đại diện phải nhập họ và tên đầy đủ',
      )
      .matches(
        /^[a-zA-ZaAáÁàÀảẢãÃạẠăĂắẮằẰẳẲẵẴặẶâÂấẤầẦẩẨẫẪậẬbBcCdDđĐeEéÉèÈẻẺẽẼẹẸêÊếẾềỀễỄệỆfFgGhHiIíÍìÌĩĨỉỈịỊjJkKlLmMnNoOóÓòÒỏỎõÕọỌôÔốỐồỒổỔỗỖộỘơƠớỚờỜởỞỡỠợỢpPqQrRsStTuUúÚùÙủỦũŨụỤưƯứỨừỪửỬữỮựỰvVwWxXyY\s]+$/,
        'Người đại diện chỉ chứa ký tự chữ.',
      )

      .required('Chủ tài khoản là bắt buộc'),
    bank: Yup.number().required('Ngân hàng là bắt buộc'),
    branch: Yup.number().required('Chi nhánh ngân hàng là bắt buộc'),
  }),
  Yup.object({
    frontImage: Yup.mixed().required('Bạn cần tải lên hình ảnh mặt trước'),
    backImage: Yup.mixed().required('Bạn cần tải lên hình ảnh mặt sau'),
  }),
];

const PersonAffiliate = () => {
  const [selectedImage1, setSelectedImage1] = useState<string | null>(null);
  const [selectedImage2, setSelectedImage2] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isStepSkipped = (step: number) => skipped.has(step);

  const handleImage1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      formik.setFieldValue('frontImage', file.name);
      setSelectedImage1(URL.createObjectURL(file));
    }
  };

  const handleImage2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      formik.setFieldValue('backImage', file.name);
      setSelectedImage2(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage1 = () => {
    formik.setFieldValue('frontImage', null);
    setSelectedImage1(null);
  };

  const handleRemoveImage2 = () => {
    formik.setFieldValue('backImage', null);
    setSelectedImage2(null);
  };

  const formik = useFormik({
    initialValues: {
      agreeTerms: false,
      bankNumber: '',
      accountName: '',
      bank: '',
      branch: '',
      frontImage: null,
      backImage: null,
    },
    validationSchema: validationSchemas[activeStep],
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values) => {
      if (activeStep === steps.length - 1) {
        console.log('Final values:', values);
      } else {
        handleNext();
      }
    },
  });

  const handleNext = async () => {
    setIsSubmitting(true);
    try {
      const errors = await formik.validateForm();
      console.log('testttt: ', errors);

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
  const handleNext1 = async () => {
    console.log('Thành công');

    setIsSubmitting(true);
    try {
      const errors = await formik1.validateForm();
      console.log('testttt: ', errors);

      if (Object.keys(errors).length === 0) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped);
          newSkipped.delete(activeStep);
          return newSkipped;
        });
      } else {
        formik1.setErrors(errors);
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

  // Sử dụng Formik để quản lý form
  const [currentId] = useState(1);

  const formik1 = useFormik({
    initialValues: {
      agreeTerms1: false,
    },
    validationSchema: Yup.object({
      agreeTerms1: Yup.boolean().oneOf([true], 'Bạn cần đồng ý với các điều khoản'),
    }),
    onSubmit: (values) => {
      if (activeStep === steps.length - 1) {
        console.log('Final values:', values);
      } else {
        handleNext1();
      }
    },
  });

  // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const isChecked = event.target.checked;
  //   console.log('132123', isChecked);
  //   // Get the checkbox state (true/false)
  //   formik1.setFieldValue('agreeTerms1', isChecked); // Update Formik's value for agreeTerms

  //   // JSON data with the current state of agreeTerms
  //   const jsonData = JSON.stringify({
  //     id: currentId,
  //     is_check: isChecked, // The value will be true or false based on the checkbox state
  //   });

  //   // Send the updated checkbox value immediately to the API
  //   fetch(`http://localhost:9999/status/1`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: jsonData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('Success:', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };
  const handleCheckboxChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    // Get the checkbox state (true/false)
    formik1.setFieldValue('agreeTerms1', isChecked); // Update Formik's value for agreeTerms
    console.log('agreeTerms1', formik1.values.agreeTerms1);
    // JSON data with the current state of agreeTerms
    const jsonData = JSON.stringify({
      id: currentId,
      is_check: isChecked,
    });

    // Send the updated checkbox value immediately to the API
    fetch(`http://localhost:9999/status/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
              {/* Form for checkbox */}
              <form>
                <Checkbox
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formik1.values.agreeTerms1}
                  onChange={handleCheckboxChange1}
                  color="primary"
                  inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
                <span>Đồng ý với các điều khoản của chúng tôi</span>
              </form>

              {/* Show validation error if agreeTerms has an error */}
              {formik1.errors.agreeTerms1 && (
                <Typography color="error">{formik1.errors.agreeTerms1}</Typography>
              )}
            </Box>
          </>
        );

      case 1:
        return (
          <Box>
            <CustomFormLabel htmlFor="bankNumber">Số tài khoản</CustomFormLabel>
            <CustomTextField
              id="bankNumber"
              variant="outlined"
              placeholder="Nhập số tài khoản của bạn"
              fullWidth
              value={formik.values.bankNumber}
              onChange={formik.handleChange}
              error={isSubmitting && Boolean(formik.errors.bankNumber)}
              helperText={isSubmitting && formik.errors.bankNumber}
            />
            <CustomFormLabel htmlFor="accountName">Chủ tài khoản</CustomFormLabel>
            <CustomTextField
              id="accountName"
              variant="outlined"
              placeholder="Nhập tên tài khoản của bạn"
              fullWidth
              value={formik.values.accountName}
              onChange={formik.handleChange}
              error={isSubmitting && Boolean(formik.errors.accountName)}
              helperText={isSubmitting && formik.errors.accountName}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CustomFormLabel htmlFor="bank">Ngân hàng</CustomFormLabel>
                <FormControl fullWidth error={!!formik.errors.bank}>
                  <Select
                    placeholder="Chọn ngân hàng"
                    labelId="bank-select-label"
                    id="bank"
                    name="bank"
                    value={formik.values.bank}
                    // onChange={formik.handleChange}
                    onChange={(e) => formik.setFieldValue('bank', e.target.value)}
                    error={isSubmitting && Boolean(formik.errors.bank)}
                  >
                    <MenuItem value={1}>Mb bank</MenuItem>
                    <MenuItem value={2}>TP bank</MenuItem>
                  </Select>
                  {isSubmitting && formik.errors.bank && (
                    <Typography color="error">{formik.errors.bank}</Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel htmlFor="branch">Chi nhánh ngân hàng</CustomFormLabel>
                <FormControl fullWidth error={!!formik.errors.branch}>
                  <Select
                    labelId="branch-select-label"
                    id="branch"
                    name="branch"
                    value={formik.values.branch}
                    onChange={formik.handleChange}
                    // onChange={(e) => formik.setFieldValue('branch', e.target.value)}
                    error={isSubmitting && Boolean(formik.errors.branch)}
                  >
                    <MenuItem value={1}>Hà Nội</MenuItem>
                    <MenuItem value={2}>Hồ Chí Minh</MenuItem>
                  </Select>
                  {isSubmitting && formik.errors.branch && (
                    <Typography color="error">{formik.errors.branch}</Typography>
                  )}
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                // border: '2px solid #000',
                borderRadius: '8px',
                padding: '20px',
                width: '500px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CustomFormLabel sx={{ marginTop: '25px' }} htmlFor="image1">
                  <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>
                    Xác minh danh tính
                  </Typography>
                </CustomFormLabel>
              </Box>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    maxWidth: '500px',
                    margin: '0 auto',
                    padding: '20px',
                  }}
                >
                  {/* Image Instructions Section */}
                  <Box sx={{ width: '100%', padding: '10px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <CheckCircleIcon sx={{ color: 'green', marginRight: '8px' }} />
                      <Typography>Chụp đủ mặt trước và mặt sau</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <CheckCircleIcon sx={{ color: 'green', marginRight: '8px' }} />
                      <Typography>Chụp rõ nét không bị mất góc</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <CheckCircleIcon sx={{ color: 'green', marginRight: '8px' }} />
                      <Typography>
                        Chụp hình ảnh giấy tờ còn hạn, hình gốc, không scan hay photocopy
                      </Typography>
                    </Box>

                    <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
                    <Box>
                      <img
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'contain',
                        }}
                        src={Authenticate}
                        alt="Authenticate"
                      />
                    </Box>
                    <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
                  </Box>

                  {/* Upload Images Section */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center', // Align items vertically
                      justifyContent: 'space-between', // Distribute space between form and image
                      width: '100%',
                      padding: '10px',
                      flexWrap: 'wrap', // Ensure responsiveness for smaller screens
                    }}
                  >
                    <Box sx={{ flex: '1' }}>
                      {/* Front Image Upload Section */}
                      <CustomFormLabel htmlFor="frontImage">Mặt trước CCCD</CustomFormLabel>
                      <Button variant="contained" component="label" color="primary">
                        Tải tệp lên
                        <Input
                          id="frontImage"
                          type="file"
                          inputProps={{ accept: 'image/*' }}
                          onChange={handleImage1Change}
                          style={{ display: 'none' }}
                        />
                      </Button>
                      {isSubmitting && formik.errors.frontImage && (
                        <Typography color="error">{formik.errors.frontImage}</Typography>
                      )}

                      <CustomFormLabel htmlFor="backImage" sx={{ marginTop: '20px' }}>
                        Mặt sau CCCD
                      </CustomFormLabel>
                      <Button variant="contained" component="label" color="primary">
                        Tải tệp lên
                        <Input
                          id="backImage"
                          type="file"
                          inputProps={{ accept: 'image/*' }}
                          onChange={handleImage2Change}
                          style={{ display: 'none' }}
                        />
                      </Button>
                      {isSubmitting && formik.errors.backImage && (
                        <Typography color="error">{formik.errors.backImage}</Typography>
                      )}
                    </Box>

                    <Box sx={{ flex: '1', textAlign: 'right' }}>
                      {/* Display uploaded images here */}
                      {selectedImage1 && (
                        <Box mb={2} position="relative">
                          <Typography variant="subtitle1">Mặt trước:</Typography>
                          <img
                            src={selectedImage1}
                            alt="Selected 1"
                            style={{ width: '150px', objectFit: 'contain' }}
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

                      {selectedImage2 && (
                        <Box mb={2} position="relative">
                          <Typography variant="subtitle1">Mặt sau:</Typography>
                          <img
                            src={selectedImage2}
                            alt="Selected 2"
                            style={{ width: '150px', objectFit: 'contain' }}
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
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Box>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  const handleButtonClick = () => {
    setIsSubmitting(true);
    formik1.handleSubmit();
    console.log(formik.values.frontImage);
    console.log(formik.values.backImage);
    if (formik.values.backImage !== null && formik.values.frontImage !== null) {
      window.location.href = '/pending';
    }
  };
  return (
    <PageContainer>
      <Box mt={2} sx={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Stepper activeStep={activeStep} sx={{ padding: '0 8px', gap: '8px' }}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }

            return (
              <Step key={label} {...stepProps}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <Box sx={{ mt: 2 }}>{handleSteps(activeStep)}</Box>

        <Box display="flex" flexDirection="row" mt={2}>
          <Button
            color="inherit"
            variant="contained"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
            size="small"
          >
            Quay lại
          </Button>
          <Button
            component={Link}
            color="inherit"
            variant="contained"
            to="/user_profile"
            sx={{ mr: 1 }}
            size="small"
          >
            Hủy bỏ
          </Button>
          <Box flex="1 1 auto" />
          {activeStep === steps.length - 1 ? (
            <Button onClick={handleButtonClick} variant="contained" color="secondary" size="small">
              Hoàn tất đăng ký
            </Button>
          ) : (
            <Button
              onClick={() => {
                setIsSubmitting(true);
                formik1.handleSubmit();
                console.log(formik1.errors);
              }}
              variant="contained"
              color="secondary"
              size="small"
            >
              Tiếp tục
            </Button>
          )}
        </Box>
      </Box>
    </PageContainer>
  );
};

export default PersonAffiliate;
