import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  Snackbar,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

// components
import { IconChevronDown } from '@tabler/icons-react';
import PageContainer from 'src/components/container/PageContainer';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import BlankCard from 'src/components/shared/BlankCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

import { styled } from '@mui/system';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import iconWarning from 'src/assets/images/icon.png/icon_warning.svg';
import logoVnpay from 'src/assets/images/logoPay/logoVnpay.png';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
import * as Yup from 'yup';
const BoxStyled = styled(Box)(() => ({
  padding: '30px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  // '&:hover': {
  //   transform: 'scale(1.03)',
  // },
}));
const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Quy Đổi R-Point',
  },
  {
    title: 'Thanh Toán',
  },
];
interface IPayMent {
  id: string;
  name: string;
  logo: string;
}
const Payments: IPayMent[] = [
  {
    id: '1',
    name: 'VN Pay',
    logo: logoVnpay,
  },
];

const OrderInformation = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange5 = (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const [clickPaymentId, setClickPaymentId] = useState<number | null>(null);
  const [paymentSelected, setPaymentSelected] = useState<boolean>(false);
  const validateSchema = Yup.object().shape({
    Payments: Yup.boolean().oneOf([true], 'Vui lòng hãy chọn phương thức thanh toán'),
    ...(checked && {
      CompanyName: Yup.string().required('Tên công ty bắt buộc nhập'),
      TaxCode: Yup.string()
        .required('Mã số thuế bắt buộc nhập')
        .matches(/^\d+$/, 'Mã số thuế chỉ chứa số'),
      RepresentativeName: Yup.string()
        .matches(
          /^[a-zA-ZaAáÁàÀảẢãÃạẠăĂắẮằẰẳẲẵẴặẶâÂấẤầẦẩẨẫẪậẬbBcCdDđĐeEéÉèÈẻẺẽẼẹẸêÊếẾềỀễỄệỆfFgGhHiIíÍìÌĩĨỉỈịỊjJkKlLmMnNoOóÓòÒỏỎõÕọỌôÔốỐồỒổỔỗỖộỘơƠớỚờỜởỞỡỠợỢpPqQrRsStTuUúÚùÙủỦũŨụỤưƯứỨừỪửỬữỮựỰvVwWxXyY\s]+$/,
          'Người đại diện chỉ chứa ký tự chữ.',
        )
        .required('Người đại diện là bắt buộc'),
      Position: Yup.string()
        .matches(
          /^[a-zA-ZaAáÁàÀảẢãÃạẠăĂắẮằẰẳẲẵẴặẶâÂấẤầẦẩẨẫẪậẬbBcCdDđĐeEéÉèÈẻẺẽẼẹẸêÊếẾềỀễỄệỆfFgGhHiIíÍìÌĩĨỉỈịỊjJkKlLmMnNoOóÓòÒỏỎõÕọỌôÔốỐồỒổỔỗỖộỘơƠớỚờỜởỞỡỠợỢpPqQrRsStTuUúÚùÙủỦũŨụỤưƯứỨừỪửỬữỮựỰvVwWxXyY\s]+$/,
          'Người đại diện chỉ chứa ký tự chữ.',
        )
        .required('Chức vụ là bắt buộc'),
      Address: Yup.string()
        .required('Địa chỉ là bắt buộc')
        .matches(
          /^[a-zA-Z0-9\s,.-]+$/,
          'Địa chỉ chỉ được chứa chữ, số, dấu cách, dấu phẩy, dấu chấm, và dấu gạch ngang.',
        ),
      email: Yup.string().required('Email là bắt buộc').email('Email không đúng định dạng'),
    }),
  });

  const formik = useFormik({
    initialValues: {
      CompanyName: '',
      TaxCode: '',
      RepresentativeName: '',
      Position: '',
      Address: '',
      email: '',
      Payments: 'false',
    },
    validationSchema: validateSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  const [open, setOpen] = useState<boolean>(false);
  const handleSubmitForm = () => {
    if (!paymentSelected) {
      setOpen(!open);
      return;
    }
    if (checked) {
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length === 0) {
          formik.handleSubmit();
          navigate('/');
        }
      });
    } else {
      formik.handleSubmit();
      navigate('/');
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(false);
    }, 3000);
    return () => clearInterval(interval);
  }, [open]);
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BlankCard>
            <Grid container spacing={3} sx={{ padding: 3 }}>
              {' '}
              <Grid item xs={12} lg={6}>
                <Grid container>
                  <Grid item xs={12} sx={{ pb: 3 }}>
                    <Box>
                      <Typography variant="h5" sx={{ pb: 2.8 }}>
                        Chi Tiết Gói Mua
                      </Typography>
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                          <Typography variant="h6">Tổng</Typography>
                          <Typography variant="h6">70.000 ₫</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ display: 'flex', justifyContent: 'space-between', pt: 0.3 }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{ display: 'flex', alignItems: 'center' }}
                          >
                            20
                            <img
                              src={logoPoint}
                              alt={logoPoint}
                              width={20}
                              height={20}
                              style={{ borderRadius: 50, marginLeft: '4px' }}
                            />
                          </Typography>
                          <Typography variant="subtitle2">70.000 ₫</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <Typography variant="h5" sx={{ pb: 3 }}>
                        Phương Thức Thanh Toán
                      </Typography>
                      <Grid
                        container
                        spacing={3}
                        sx={{ display: 'flex', justifyContent: 'space-between' }}
                      >
                        {Payments?.map((p: IPayMent, index: number) => (
                          <Grid item xs={6} display="flex" alignItems="center" key={index + 1}>
                            <FormControl
                              fullWidth
                              sx={{
                                borderWidth: 1,
                                borderStyle: 'solid',
                                color: 'primary.main',
                                display: 'flex',
                                p: 2,
                                width: '100%',
                                height: 'auto',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                                backgroundColor:
                                  clickPaymentId === index && paymentSelected
                                    ? '#FEEFF0'
                                    : '#F4F5F7',
                                border:
                                  clickPaymentId === index && paymentSelected
                                    ? '2px solid #FBBDC1'
                                    : 'none',
                                ':hover': {
                                  backgroundColor:
                                    clickPaymentId === index && paymentSelected
                                      ? 'none'
                                      : '#E7E7E7',
                                },
                              }}
                              onClick={() => {
                                setClickPaymentId(index);
                                setPaymentSelected(
                                  clickPaymentId === index ? !paymentSelected : true,
                                );
                                formik.setFieldValue('Payments', true);
                              }}
                            >
                              <Box
                                sx={{
                                  display: 'flex',
                                  gap: 1,
                                  justifyContent: 'flex-start ',
                                  alignItems: 'center',
                                }}
                              >
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '6px',
                                    padding: '0',
                                  }}
                                >
                                  <img
                                    src={p.logo}
                                    alt=""
                                    width={40}
                                    height={40}
                                    style={{ objectFit: 'cover' }}
                                  />
                                </Box>
                                <Typography
                                  sx={{
                                    color: 'black',
                                    paddingTop: '5px',
                                    fontWeight: 600,
                                    fontSize: 14,
                                  }}
                                >
                                  {p.name}
                                </Typography>
                              </Box>
                            </FormControl>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box>
                  <Typography variant="h5" sx={{ pb: 3 }}>
                    Thông Tin Khách Hàng
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        Mã khách hàng
                      </Typography>
                      <Typography variant="subtitle1" my={0.5} fontWeight={600}>
                        000122140001
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        Họ Và Tên
                      </Typography>
                      <Typography variant="subtitle1" my={0.5} fontWeight={600}>
                        Nguyễn Văn Bình
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        Email
                      </Typography>
                      <Typography variant="subtitle1" my={0.5} fontWeight={600}>
                        nguyenbinh@example.com
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        Số điện thoại
                      </Typography>
                      <Typography variant="subtitle1" my={0.5} fontWeight={600}>
                        0123 456 789
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Accordion
                        elevation={9}
                        expanded={expanded === 'panel1'}
                        onChange={handleChange5('panel1')}
                      >
                        <AccordionSummary
                          expandIcon={<IconChevronDown size="20" />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography variant="h6">Mã khuyến mại</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid container spacing={2} px={2}>
                            <Grid item xs={12} sm={9}>
                              <CustomTextField
                                id="promo-code"
                                placeholder="Nhập mã khuyến mại"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                              <Button
                                variant="contained"
                                color="primary"
                                sx={{ py: '10px', px: '14px', fontSize: '14px', width: '100%' }}
                              >
                                Áp dụng
                              </Button>
                            </Grid>
                            <Grid item xs={12}>
                              <Grid container spacing={2}>
                                <Grid item xs={12}>
                                  <Box
                                    sx={{
                                      border: '2px solid #FFD60A',
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                      padding: '8px 16px',
                                      borderRadius: '10px',
                                    }}
                                  >
                                    <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                                      KM025K2J - Giảm 15%
                                    </Typography>
                                    <Button variant="outlined" color="warning">
                                      Bỏ chọn
                                    </Button>
                                  </Box>
                                </Grid>
                                <Grid item xs={12}>
                                  <Box
                                    sx={{
                                      border: '2px solid #E0E0E0',
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      position: 'relative',

                                      '&:hover button': {
                                        opacity: 1,
                                        visibility: 'visible',
                                      },
                                    }}
                                  >
                                    <Typography
                                      sx={{ fontWeight: 600, px: 2, fontSize: 16, py: 2 }}
                                    >
                                      CN850KDWQ-Giảm 200.000₫
                                    </Typography>
                                    <Button
                                      variant="outlined"
                                      color="warning"
                                      sx={{
                                        height: '35px',
                                        my: 'auto',
                                        mr: 2,
                                        opacity: 0,
                                        visibility: 'hidden',
                                        transition: 'opacity 0.3s ease, visibility 0.3s ease',
                                      }}
                                    >
                                      Áp dụng
                                    </Button>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </BlankCard>
        </Grid>
        <Grid item xs={12}>
          <BoxStyled
            sx={{
              backgroundColor: 'primary.light',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              padding: 3,
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '15px',
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  Giá niêm yết
                </Typography>
                <Typography variant="h5" fontWeight={700} sx={{ px: 1 }}>
                  1.140 ₫
                </Typography>
              </Box>

              <Box
                sx={{
                  my: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '14px',
                }}
              >
                <Typography variant="subtitle1" fontWeight={600}>
                  Khuyến mại
                </Typography>
                <Typography variant="subtitle1" fontWeight={600} sx={{ px: 1 }}>
                  - 240 ₫
                </Typography>
              </Box>

              <Box
                sx={{
                  my: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '15px',
                }}
              >
                <Typography variant="subtitle1" fontWeight={600}>
                  Tổng tiền trước VAT
                </Typography>
                <Typography variant="subtitle1" fontWeight={600} sx={{ px: 1 }}>
                  900 ₫
                </Typography>
              </Box>

              <Box
                sx={{
                  my: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '15px',
                }}
              >
                <Typography variant="subtitle1" fontWeight={600}>
                  VAT (10%)
                </Typography>
                <Typography variant="subtitle1" fontWeight={600} sx={{ px: 1 }}>
                  90 ₫
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h4">Tổng cộng</Typography>
              <Typography variant="h4" fontWeight="bold" sx={{ color: '#FC3242' }}>
                990 ₫
              </Typography>
            </Box>
          </BoxStyled>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Box
              sx={{
                display: 'flex',
                gap: '6px',
                alignItems: 'center',
                cursor: 'pointer',
                justifyContent: 'flex-end',
              }}
              onClick={handleCheckboxChange}
            >
              <CustomCheckbox checked={checked} />
              <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Xuất hóa đơn</Typography>
            </Box>

            <Box
              sx={{
                height: checked ? 'auto' : 0,
                overflow: 'hidden',
                transition: 'height 0.5s ease',
                opacity: checked ? 1 : 0,
                transitionProperty: 'height, opacity',
              }}
            >
              {checked && (
                <Box>
                  <Box sx={{ display: 'flex', gap: '6px', p: 2 }}>
                    <img src={iconWarning} alt="" />
                    <Typography>
                      Quý khách vui lòng cung cấp đúng thông tin để xuất hóa đơn. Công ty không chịu
                      trách nhiệm xử lý trong trường hợp quý khách điền sai thông tin hoặc doanh
                      nghiệp không còn hoạt động.
                    </Typography>
                  </Box>
                  <form>
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomFormLabel sx={{ mt: 2 }}>Tên công ty</CustomFormLabel>
                          <CustomTextField
                            name="CompanyName"
                            id="error-text-input"
                            variant="outlined"
                            placeholder="VD: Công ty TNHH ABC"
                            fullWidth
                            value={formik.values.CompanyName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.CompanyName && Boolean(formik.errors.CompanyName)}
                          />
                          <Typography color="error">{formik.errors.CompanyName}</Typography>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomFormLabel sx={{ mt: 2 }}>Mã số thuế</CustomFormLabel>
                          <CustomTextField
                            id="error-text-input"
                            variant="outlined"
                            placeholder="VD: 0123456789"
                            name="TaxCode"
                            fullWidth
                            value={formik.values.TaxCode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.TaxCode && Boolean(formik.errors.TaxCode)}
                          />
                          <Typography color="error">{formik.errors.TaxCode}</Typography>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomFormLabel sx={{ mt: 2 }}>Người đại diện</CustomFormLabel>
                          <CustomTextField
                            id="error-text-input"
                            variant="outlined"
                            placeholder="VD: Nguyen Van A"
                            name="RepresentativeName"
                            fullWidth
                            value={formik.values.RepresentativeName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.RepresentativeName &&
                              Boolean(formik.errors.RepresentativeName)
                            }
                          />
                          <Typography color="error">{formik.errors.RepresentativeName}</Typography>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomFormLabel sx={{ mt: 2 }}>Chức vụ</CustomFormLabel>
                          <CustomTextField
                            id="error-text-input"
                            variant="outlined"
                            placeholder="VD: Giám đốc"
                            name="Position"
                            fullWidth
                            value={formik.values.Position}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Position && Boolean(formik.errors.Position)}
                          />
                          <Typography color="error">{formik.errors.Position}</Typography>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomFormLabel sx={{ mt: 2 }}>Địa chỉ</CustomFormLabel>
                          <CustomTextField
                            id="error-text-input"
                            variant="outlined"
                            placeholder="VD: 123 Đường ABC, Quận XYZ"
                            name="Address"
                            fullWidth
                            value={formik.values.Address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Address && Boolean(formik.errors.Address)}
                          />
                          <Typography color="error">{formik.errors.Address}</Typography>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomFormLabel sx={{ mt: 2 }}>
                            Email nhận hóa đơn điện tử
                          </CustomFormLabel>
                          <CustomTextField
                            id="error-text-input"
                            variant="outlined"
                            placeholder="VD: example@company.com"
                            name="email"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.email}
                          />
                          <Typography color="error">{formik.errors.email}</Typography>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                px: 7,
                py: 1,
                backgroundColor: '#FC2032',
                fontWeight: 700,
                fontSize: 18,
                ':hover': {
                  backgroundColor: '#F22A51',
                },
              }}
              onClick={() => handleSubmitForm()}
            >
              Thanh toán
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert
          variant="filled"
          severity="error"
          sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
        >
          Vui lòng hãy chọn phương thức thanh toán
        </Alert>
      </Snackbar>
    </>
  );
};

export default OrderInformation;
