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
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {/* Image Instructions */}
              <CustomFormLabel sx={{ marginTop: '25px' }} htmlFor="image1">
                Hướng dẫn
              </CustomFormLabel>
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

              {/* Display instructions here */}
              <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
              <Box>
                <img
                  style={{
                    width: '500px',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                  src={Authenticate}
                  alt="Authenticate"
                />
              </Box>
              <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                {/* Front Image */}
                {selectedImage1 && (
                  <Box mb={2} position="relative">
                    <Typography variant="subtitle1">Mặt trước căn cước công dân:</Typography>
                    <img
                      src={selectedImage1}
                      alt="Selected 1"
                      style={{ width: '100%', maxWidth: '100px', objectFit: 'contain' }}
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
                <CustomFormLabel htmlFor="frontImage">Mặt trước căn cước công dân</CustomFormLabel>
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
              </Box>

              <Box>
                {/* Back Image */}
                {selectedImage2 && (
                  <Box mb={2} position="relative">
                    <Typography variant="subtitle1">Mặt sau căn cước công dân:</Typography>
                    <img
                      src={selectedImage2}
                      alt="Selected 2"
                      style={{ width: '100%', maxWidth: '100px', objectFit: 'contain' }}
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
                <CustomFormLabel htmlFor="backImage">Mặt sau căn cước công dân</CustomFormLabel>
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
            </Grid>
          </Grid>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  const handleButtonClick = () => {
    setIsSubmitting(true);
    formik.handleSubmit();
    console.log(formik.values.frontImage);
    console.log(formik.values.backImage);
    if (formik.values.backImage !== null && formik.values.frontImage !== null) {
      window.location.href = '/apps/pending';
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
            to="/user-profile"
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
                formik.handleSubmit();
                console.log(formik.errors);

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
