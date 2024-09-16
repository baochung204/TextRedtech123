import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Chip,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

// components
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { IconChevronDown } from '@tabler/icons-react';
import BlankCard from 'src/components/shared/BlankCard';

import products from 'src/assets/images/products/s25.jpg';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import { styled } from '@mui/system';
import iconWarning from 'src/assets/images/icon.png/icon_warning.svg';
import logoVnpay from 'src/assets/images/logoPay/logoVnpay.png';
import logoQr from 'src/assets/images/logoPay/qrcodeVnpay.jpg';
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
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

const PayMentPonit2 = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange5 = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [checked, setChecked] = React.useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const [clickPaymentId, setClickPaymentId] = useState<string | null>(null);
  const onHandleClinkPaymant = (id: string) => {
    setClickPaymentId(id);
  };
  return (
    <PageContainer title="Vertical Form" description="this is Vertical Form page">
      <BannerPage title="Thanh Toán" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BlankCard>
            <Grid container spacing={3} sx={{ padding: 3 }}>
              {' '}
              <Grid item xs={12} lg={6}>
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
                        <Box
                          sx={{
                            borderWidth: 1,
                            borderStyle: 'solid',
                            color: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            p: 2,
                            gap: 1,
                            width: '100%',
                            height: 'auto',

                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                            backgroundColor: clickPaymentId === p?.id ? '#FEEFF0' : '#F4F5F7',
                            border: clickPaymentId === p?.id ? '2px solid #FBBDC1' : 'none',
                            ':hover': {
                              backgroundColor: clickPaymentId === p?.id ? 'none' : '#E7E7E7',
                            },
                          }}
                          onClick={() => onHandleClinkPaymant(p?.id)}
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
                      </Grid>
                    ))}
                  </Grid>
                </Box>
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
          <BlankCard>
            <TableContainer>
              <Table
                aria-label="custom pagination table"
                sx={{
                  whiteSpace: 'nowrap',
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <Typography variant="h6" sx={{ textAlign: 'center' }}></Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h6" sx={{ textAlign: 'center' }}>
                        Sản phẩm
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h6" sx={{ textAlign: 'center' }}>
                        Số lượng
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h6" sx={{ textAlign: 'center' }}>
                        Giá niêm yết
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h6" sx={{ textAlign: 'center' }}>
                        Khuyến mãi
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h6" sx={{ textAlign: 'center' }}>
                        Giá sau giảm
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell align="center">
                      <Stack direction="row" justifyContent="center" alignItems="center" gap={2}>
                        <Avatar
                          src={products}
                          alt={products}
                          sx={{
                            borderRadius: '10px',
                            height: '80px',
                            width: '90px',
                          }}
                        />
                      </Stack>
                    </TableCell>

                    <TableCell align="center">
                      <Box>
                        <Typography variant="h6" align="center">
                          GTP-3
                        </Typography>
                        <Typography color="textSecondary" variant="body1" align="center">
                          toys
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell align="center">
                      <ButtonGroup size="small" color="success" aria-label="small button group">
                        <Button>{'5'}</Button>
                      </ButtonGroup>
                    </TableCell>

                    <TableCell align="center">
                      <Typography
                        variant="h6"
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        570
                        <img
                          src={logoPoint}
                          alt={logoPoint}
                          width={20}
                          height={20}
                          style={{ borderRadius: 50, marginLeft: '4px' }}
                        />
                      </Typography>
                    </TableCell>

                    <TableCell align="center">
                      <Typography
                        variant="h6"
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        120
                        <img
                          src={logoPoint}
                          alt={logoPoint}
                          width={20}
                          height={20}
                          style={{ borderRadius: 50, marginLeft: '4px' }}
                        />
                      </Typography>
                    </TableCell>

                    <TableCell align="center">
                      <Typography
                        variant="h6"
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        450
                        <img
                          src={logoPoint}
                          alt={logoPoint}
                          width={20}
                          height={20}
                          style={{ borderRadius: 50, marginLeft: '4px' }}
                        />
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">
                      <Stack direction="row" justifyContent="center" alignItems="center" gap={2}>
                        <Avatar
                          src={products}
                          alt={products}
                          sx={{
                            borderRadius: '10px',
                            height: '80px',
                            width: '90px',
                          }}
                        />
                      </Stack>
                    </TableCell>

                    <TableCell align="center">
                      <Box>
                        <Typography variant="h6" align="center">
                          GTP-3
                        </Typography>
                        <Typography color="textSecondary" variant="body1" align="center">
                          toys
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell align="center">
                      <ButtonGroup size="small" color="success" aria-label="small button group">
                        <Button>{'5'}</Button>
                      </ButtonGroup>
                    </TableCell>

                    <TableCell align="center">
                      <Typography
                        variant="h6"
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        570
                        <img
                          src={logoPoint}
                          alt={logoPoint}
                          width={20}
                          height={20}
                          style={{ borderRadius: 50, marginLeft: '4px' }}
                        />
                      </Typography>
                    </TableCell>

                    <TableCell align="center">
                      <Typography
                        variant="h6"
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        120
                        <img
                          src={logoPoint}
                          alt={logoPoint}
                          width={20}
                          height={20}
                          style={{ borderRadius: 50, marginLeft: '4px' }}
                        />
                      </Typography>
                    </TableCell>

                    <TableCell align="center">
                      <Typography
                        variant="h6"
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        450
                        <img
                          src={logoPoint}
                          alt={logoPoint}
                          width={20}
                          height={20}
                          style={{ borderRadius: 50, marginLeft: '4px' }}
                        />
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
                  1.140
                  <img
                    src={logoPoint}
                    alt={logoPoint}
                    width={20}
                    height={20}
                    style={{ borderRadius: 50, marginLeft: '4px' }}
                  />
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
                  - 240{' '}
                  <img
                    src={logoPoint}
                    alt={logoPoint}
                    width={20}
                    height={20}
                    style={{ borderRadius: 50, marginLeft: '4px' }}
                  />
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
                  900
                  <img
                    src={logoPoint}
                    alt={logoPoint}
                    width={20}
                    height={20}
                    style={{ borderRadius: 50, marginLeft: '4px' }}
                  />
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
                  90{' '}
                  <img
                    src={logoPoint}
                    alt={logoPoint}
                    width={20}
                    height={20}
                    style={{ borderRadius: 50, marginLeft: '4px' }}
                  />
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h4">Tổng cộng</Typography>
              <Typography variant="h4" fontWeight="bold" sx={{ color: '#FC3242' }}>
                990{' '}
                <img
                  src={logoPoint}
                  alt={logoPoint}
                  width={20}
                  height={20}
                  style={{ borderRadius: 50, marginLeft: '4px' }}
                />
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
                            id="error-text-input"
                            variant="outlined"
                            placeholder="VD: Công ty TNHH ABC"
                            fullWidth
                            required
                          />
                          <p style={{ margin: 0, color: 'red' }}>Vui lòng không bỏ trống</p>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomFormLabel sx={{ mt: 2 }}>Mã số thuế</CustomFormLabel>
                          <CustomTextField
                            id="error-text-input"
                            variant="outlined"
                            placeholder="VD: 0123456789"
                            fullWidth
                            required
                          />
                          <p style={{ margin: 0, color: 'red' }}>Vui lòng không bỏ trống</p>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomFormLabel sx={{ mt: 2 }}>Người đại diện</CustomFormLabel>
                          <CustomTextField
                            id="error-text-input"
                            variant="outlined"
                            placeholder="VD: Nguyen Van A"
                            fullWidth
                            required
                          />
                          <p style={{ margin: 0, color: 'red' }}>Vui lòng không bỏ trống</p>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomFormLabel sx={{ mt: 2 }}>Chức vụ</CustomFormLabel>
                          <CustomTextField
                            id="error-text-input"
                            variant="outlined"
                            placeholder="VD: Giám đốc"
                            fullWidth
                            required
                          />
                          <p style={{ margin: 0, color: 'red' }}>Vui lòng không bỏ trống</p>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <CustomFormLabel sx={{ mt: 2 }}>Địa chỉ</CustomFormLabel>
                          <CustomTextField
                            id="error-text-input"
                            variant="outlined"
                            placeholder="VD: 123 Đường ABC, Quận XYZ"
                            fullWidth
                            required
                          />
                          <p style={{ margin: 0, color: 'red' }}>Vui lòng không bỏ trống</p>
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
                            fullWidth
                            required
                          />
                          <p style={{ margin: 0, color: 'red' }}>Vui lòng không bỏ trống</p>
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
            >
              Thanh toán
            </Button>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default PayMentPonit2;
