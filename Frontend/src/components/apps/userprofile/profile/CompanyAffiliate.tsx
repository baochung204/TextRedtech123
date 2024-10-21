import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  Input,
  MenuItem,
  Select,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PDFViewer from 'src/components/apps/userprofile/profile/PDFViewer';
import PageContainer from 'src/components/container/PageContainer';
import Scrollbar from 'src/components/custom-scroll/Scrollbar';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import Rule from 'src/views/apps/contract/Affiliate';
import Otp from 'src/views/apps/historycontract/Otp';
import * as Yup from 'yup';
import AlertChat from '../../chats/AlertChat';

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
        /^[a-zA-ZaAáÁàÀảẢãÃạẠăĂắẮằẰẳẲẵẴặẶâÂấẤầẦẩẨẫẪậẬbBcCdDđĐeEéÉèÈẻẺẽẼẹẸêÊếẾềỀễỄệỆfFgGhHiIíÍìÌĩĨỉỈịỊjJkKlLmMnNoOóÓòÒỏỎõÕọỌôÔốỐồỒổỔỗỖộỘơƠớỚờỜởỞỡỠợỢpPqQrRsStTuUúÚùÙủỦũŨụỤưƯứỨừỪửỬữỮựỰvVwWxXyY]+ [a-zA-ZaAáÁàÀảẢãÃạẠăĂắẮằẰẳẲẵẴặẶâÂấẤầẦẩẨẫẪậẬbBcCdDđĐeEéÉèÈẻẺẽẼẹẸêÊếẾềỀễỄệỆfFgGhHiIíÍìÌĩĨỉỈịỊjJkKlLmMnNoOóÓòÒỏỎõÕọỌôÔốỐồỒổỔỗỖộỘơƠớỚờỜởỞỡỠợỢpPqQrRsStTuUúÚùÙủỦũŨụỤưƯứỨừỪửỬữỮựỰvVwWxXyY\s]+$/,
        'Người đại diện phải nhập họ và tên đầy đủ',
      )
      .matches(
        /^[a-zA-ZaAáÁàÀảẢãÃạẠăĂắẮằẰẳẲẵẴặẶâÂấẤầẦẩẨẫẪậẬbBcCdDđĐeEéÉèÈẻẺẽẼẹẸêÊếẾềỀễỄệỆfFgGhHiIíÍìÌĩĨỉỈịỊjJkKlLmMnNoOóÓòÒỏỎõÕọỌôÔốỐồỒổỔỗỖộỘơƠớỚờỜởỞỡỠợỢpPqQrRsStTuUúÚùÙủỦũŨụỤưƯứỨừỪửỬữỮựỰvVwWxXyY\s]+$/,
        'Người đại diện chỉ chứa ký tự chữ.',
      )
      .required('Người đại diện là bắt buộc.'),
    position: Yup.string().required('Chức vụ là bắt buộc.'),
    accountName: Yup.string()
      .matches(
        /^[a-zA-ZaAáÁàÀảẢãÃạẠăĂắẮằẰẳẲẵẴặẶâÂấẤầẦẩẨẫẪậẬbBcCdDđĐeEéÉèÈẻẺẽẼẹẸêÊếẾềỀễỄệỆfFgGhHiIíÍìÌĩĨỉỈịỊjJkKlLmMnNoOóÓòÒỏỎõÕọỌôÔốỐồỒổỔỗỖộỘơƠớỚờỜởỞỡỠợỢpPqQrRsStTuUúÚùÙủỦũŨụỤưƯứỨừỪửỬữỮựỰvVwWxXyY]+ [a-zA-ZaAáÁàÀảẢãÃạẠăĂắẮằẰẳẲẵẴặẶâÂấẤầẦẩẨẫẪậẬbBcCdDđĐeEéÉèÈẻẺẽẼẹẸêÊếẾềỀễỄệỆfFgGhHiIíÍìÌĩĨỉỈịỊjJkKlLmMnNoOóÓòÒỏỎõÕọỌôÔốỐồỒổỔỗỖộỘơƠớỚờỜởỞỡỠợỢpPqQrRsStTuUúÚùÙủỦũŨụỤưƯứỨừỪửỬữỮựỰvVwWxXyY\s]+$/,
        'Chủ tài khoản phải nhập họ và tên đầy đủ',
      )
      .matches(
        /^[a-zA-ZaAáÁàÀảẢãÃạẠăĂắẮằẰẳẲẵẴặẶâÂấẤầẦẩẨẫẪậẬbBcCdDđĐeEéÉèÈẻẺẽẼẹẸêÊếẾềỀễỄệỆfFgGhHiIíÍìÌĩĨỉỈịỊjJkKlLmMnNoOóÓòÒỏỎõÕọỌôÔốỐồỒổỔỗỖộỘơƠớỚờỜởỞỡỠợỢpPqQrRsStTuUúÚùÙủỦũŨụỤưƯứỨừỪửỬữỮựỰvVwWxXyY\s]+$/,
        'Chủ tài khoản chỉ chứa ký tự chữ.',
      )
      .required('Chủ tài khoản là bắt buộc.'),
    accountNumber: Yup.string()
      .matches(/^\d+$/, 'Số tài khoản chỉ chứa ký tự số.')
      .min(8, 'Số tài khoản tối thiểu 8 số.')
      .required('Số tài khoản là bắt buộc.'),
    bank: Yup.string().required('Ngân hàng là bắt buộc.'),
    branch: Yup.string().required('Chi nhánh ngân hàng là bắt buộc.'),
  }),
  Yup.object({
    fileName: Yup.string().required('Bạn phải tải lên giấy phép đăng ký kinh doanh.'),
  }),
  Yup.object({}),
];

var base64String =
  'JVBERi0xLjMKMyAwIG9iago8PC9UeXBlIC9QYWdlCi9QYXJlbnQgMSAwIFIKL1Jlc291cmNlcyAyIDAgUgovQ29udGVudHMgNCAwIFI+PgplbmRvYmoKNCAwIG9iago8PC9GaWx0ZXIgL0ZsYXRlRGVjb2RlIC9MZW5ndGggOTQ+PgpzdHJlYW0KeJwzUvDiMtAzNVco53IKUdB3M1QwNNIzMFAISVNwDQEJGRlZ6JlbKphbmuqZmyuEpChoeKTm5OTrKJRkZBYrAFGiQnFibkFOqkKAi5tCWmZOqqKmQkgWSDcA3HAXSQplbmRzdHJlYW0KZW5kb2JqCjEgMCBvYmoKPDwvVHlwZSAvUGFnZXMKL0tpZHMgWzMgMCBSIF0KL0NvdW50IDEKL01lZGlhQm94IFswIDAgNTk1LjI4IDg0MS44OV0KPj4KZW5kb2JqCjUgMCBvYmoKPDwvVHlwZSAvRm9udAovQmFzZUZvbnQgL0hlbHZldGljYQovU3VidHlwZSAvVHlwZTEKL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUldCi9Gb250IDw8Ci9GMSA1IDAgUgo+PgovWE9iamVjdCA8PAo+Pgo+PgplbmRvYmoKNiAwIG9iago8PAovUHJvZHVjZXIgKFB5RlBERiAxLjcuMiBodHRwOi8vcHlmcGRmLmdvb2dsZWNvZGUuY29tLykKL0NyZWF0aW9uRGF0ZSAoRDoyMDI0MTAxMzEzNDE0MykKPj4KZW5kb2JqCjcgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDEgMCBSCi9PcGVuQWN0aW9uIFszIDAgUiAvRml0SCBudWxsXQovUGFnZUxheW91dCAvT25lQ29sdW1uCj4+CmVuZG9iagp4cmVmCjAgOAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAyNTAgMDAwMDAgbiAKMDAwMDAwMDQzMyAwMDAwMCBuIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwODcgMDAwMDAgbiAKMDAwMDAwMDMzNyAwMDAwMCBuIAowMDAwMDAwNTM3IDAwMDAwIG4gCjAwMDAwMDA2NDYgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA4Ci9Sb290IDcgMCBSCi9JbmZvIDYgMCBSCj4+CnN0YXJ0eHJlZgo3NDkKJSVFT0YK';

// Utils Mắt Bão
interface SignatureObject {
  pdfbase64: string;
  page?: number;
  x?: number;
  y?: number;
  signature_border?: {
    img_base64: string;
    width: number;
    height: number;
    border_size: number;
    border_color: string;
  };
  signature_hand?: {
    img_base64: string;
    x: number;
    y: number;
    width: number;
    height: number;
  };
  layer_title?: Array<{
    label_text: string;
    label_color: string;
    label_size: number;
    label_x: number;
    label_y: number;
  }>;
}

const CompanyAffiliate = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  // const theme = useTheme();
  // const isDarkMode = theme.palette.mode === 'dark';
  const [open, setOpen] = useState(false);
  const [openOtpDialog, setOpenOtpDialog] = useState(false); // State for OTP dialog
  const [openChartAlert, setOpenChartAlert] = useState(false); // State for alert

  // Begin Mắt Bão
  const [pdfData, setPdfData] = useState<string | null>(null);
  var _url_local_listener = 'http://127.0.0.1:22109';

  async function ___signPdfFile(pdfBase64: string) {
    const snv2_obj: SignatureObject = {
      pdfbase64: pdfBase64,
      page: 1,
      x: 350,
      y: 100,
      signature_border: {
        img_base64:
          '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',
        width: 221,
        height: 100,
        border_size: 10,
        border_color: '',
      },
      signature_hand: {
        img_base64: '',
        x: 100,
        y: 170,
        width: 200,
        height: 120,
      },
      layer_title: [
        {
          label_text: 'Được ký bởi',
          label_color: '#000000',
          label_size: 30,
          label_x: 20,
          label_y: 15,
        },
        {
          label_text: '', // Điền tên người ký nếu cần
          label_color: '#000000',
          label_size: 35,
          label_x: 20,
          label_y: 70,
        },
        {
          label_text: '',
          label_color: '#000000',
          label_size: 35,
          label_x: 20,
          label_y: 125,
        },
      ],
    };

    try {
      const response = await fetch(`${_url_local_listener}/sign_pdf_v3`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(snv2_obj),
      });

      const datajson = await response.json();

      if (datajson && datajson.status === 200) {
        alert('Ký thành công!');
        setPdfData(datajson.data);
      } else {
        alert('Ký KHÔNG thành công! -> ' + datajson.error);
      }
    } catch (error) {
      console.error('Error signing PDF:', error);
      alert('Ký KHÔNG thành công! Có lỗi xảy ra.');
    }
  }

  const ___signPdfFileAction = () => {
    ___signPdfFile(base64String);
  };
  // End Mắt Bão

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenOtpDialog = () => {
    setOpen(false); // Close the first dialog
    setOpenOtpDialog(true); // Open the OTP dialog
  };

  const handleCloseOtpDialog = () => {
    setOpenOtpDialog(false);
  };

  const handleAlertClose = () => {
    setOpenChartAlert(false);
  };

  const handleOtpSubmit = () => {
    setOpenChartAlert(true); // Show the success alert after OTP verification
    handleCloseOtpDialog(); // Close the OTP dialog
    navigate('/pending');
  };

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
                  của bạn trước khi ký hợp đồng. File hợp lệ là JPG, PNG hoặc PDF.
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
              <Grid item xs={12}>
                <PDFViewer base64Data={base64String} />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Ký hợp đồng ngay
                  </Button>
                </Box>

                {/* First Popup Dialog */}
                <Dialog
                  open={open}
                  onClose={handleClose}
                  maxWidth="md"
                  fullWidth
                  PaperProps={{
                    sx: {
                      width: '400px',
                      maxWidth: '100%',
                    },
                  }}
                >
                  <DialogTitle sx={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
                    Hợp Đồng
                  </DialogTitle>
                  <DialogContent>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
                    >
                      <Button sx={{ width: '150px' }} onClick={___signPdfFileAction}>
                        Ký USB
                      </Button>
                      <Button sx={{ width: '150px' }} onClick={handleOpenOtpDialog}>
                        Ký OTP
                      </Button>
                    </Box>
                  </DialogContent>
                </Dialog>

                {/* Second Popup Dialog for OTP */}
                <Dialog
                  open={openOtpDialog}
                  onClose={handleCloseOtpDialog}
                  maxWidth="sm"
                  fullWidth
                  PaperProps={{
                    sx: {
                      width: '500px',
                      maxWidth: '100%',
                    },
                  }}
                >
                  <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
                    Xác nhận OTP
                  </DialogTitle>
                  <DialogContent
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      padding: '40px',
                    }}
                  >
                    <Otp onOtpSubmit={handleOtpSubmit} /> {/* Pass the submit handler */}
                  </DialogContent>
                </Dialog>

                {/* AlertChat Component */}
                <AlertChat
                  handleClose={handleAlertClose}
                  openChartAlert={openChartAlert}
                  text="Xác minh tài khoản thành công!" // Success Alert message
                />
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
            {/* <Box textAlign="right">
              <Button component={Link} to="/pending" variant="contained" color="error">
                Hoàn thành
              </Button>
            </Box> */}
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
                to="/user_profile"
                sx={{ mr: 1 }}
              >
                Hủy bỏ
              </Button>
              <Box flex="1 1 auto" />
              {activeStep === steps.length - 1 ? (
                <></>
              ) : (
                // <Button
                //   onClick={() => {
                //     setIsSubmitting(true);
                //     formik.handleSubmit();
                //   }}
                //   variant="contained"
                //   color="success"
                //   component={Link}
                //   to="/pending"
                // >
                //   Hoàn thành
                // </Button>
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
