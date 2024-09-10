// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Drawer,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  styled,
  TextField,
  FormControl,
  Card,
  CardContent,
} from '@mui/material';

import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import AppCard from 'src/components/shared/AppCard';
import emailIcon from 'src/assets/images/breadcrumb/emailSv.png';
import { IconChevronDown } from '@tabler/icons-react';
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import iconWarning from 'src/assets/images/icon.png/icon_warning.svg';

import Countdown from 'src/components/countdown/countdown';

const CustomInput = styled((props: any) => <TextField {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8',
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '1',
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[200],
  },
}));
const BCrumb = [
  {
    to: '/',
    title: 'Trang Chủ',
  },
  { to: '/buy/point', title: 'Đổi Ngân Lượng' },
  { to: '/pay/point', title: 'Thanh Toán' },
];
const PayMentPonit = () => {
  const [checked, setChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 5,
      img: 'http://localhost:5173/src/assets/images/products/s11.jpg',
      title: 'Chatbot marketing',
      price: 1055000,
      discount: 1023900,
      sale: 80,
      timeFlash: 180,
    },
    {
      id: 6,
      img: 'http://localhost:5173/src/assets/images/products/s10.jpg',
      title: 'Chatbot hỗ trợ khách hàng',
      price: 2010000,
      discount: 1995002,
      sale: 80,
      timeFlash: 180,
    },
    {
      id: 7,
      img: 'http://localhost:5173/src/assets/images/products/s12.jpg',
      title: 'Chatbot thương mại điện tử',
      price: 5025000,
      discount: 3935000,
      sale: 80,
      timeFlash: 180,
    },
  ];

  const handleSelectPackage = (pkg: any) => {
    setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id);
  };
  return (
    <PageContainer title="Email App" description="this is email page">
      <Breadcrumb title="Thanh Toá</PageContainer>n" items={BCrumb}>
        <img src={emailIcon} alt={emailIcon} width={'165px'} />
      </Breadcrumb>
      <Box sx={{ display: { xs: 'block', md: 'block', lg: 'flex' }, gap: 2 }}>
        <AppCard>
          <Drawer
            anchor="right"
            variant="permanent"
            sx={{
              zIndex: 0,
              width: '200px',
              flex: '1 1 auto',
              [`& .MuiDrawer-paper`]: { position: 'relative' },
            }}
          >
            <Box sx={{ py: 3, px: { xs: 3, md: 20 } }}>
              <Box>
                <Box display={'flex'} alignItems="center">
                  <Typography variant="h4">Thông tin mua hàng</Typography>
                </Box>
                <Box>
                  <Grid container sx={{ mt: 2 }}>
                    <Grid item lg={5} xs={12}>
                      <Typography variant="body2" color="text.secondary">
                        Họ Và Tên
                      </Typography>
                      <Typography variant="subtitle1" my={0.5} fontWeight={600}>
                        Nguyễn Văn Bình
                      </Typography>
                    </Grid>
                    <Grid item lg={5} xs={12}>
                      <Typography variant="body2" color="text.secondary">
                        Email
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} my={0.5}>
                        binhvn.reman@gmail.com
                      </Typography>
                    </Grid>
                    <Grid item lg={2} xs={12}>
                      <Typography variant="body2" color="text.secondary">
                        Số Điện Thoại
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} my={0.5}>
                        0123456789
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Box display={'flex'} alignItems="center">
                  <Typography variant="h4">Đơn hàng</Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                      Gói sản phẩm
                    </Typography>
                    <Typography>
                      Gói 5000 R-Point + Tặng 50MB dung lượng file lưu trữ Files
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                      Giá niêm yết
                    </Typography>
                    <Typography>1,055,000₫</Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Accordion
                  sx={{
                    mt: 2,
                    border: 'none',
                    boxShadow: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<IconChevronDown />}
                    sx={{
                      fontSize: 15,
                      px: 0,
                      border: 'none',
                      boxShadow: 'none',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontSize: 17, fontWeight: 500 }}>
                      Mã khuyến mãi
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Grid container spacing={3}>
                      <Grid item xs={3} lg={9}>
                        <CustomInput
                          id="ordinary-outlined-password-input"
                          type="text"
                          autoComplete="current-password"
                          variant="outlined"
                          fullWidth
                          placeholder="Nhập mã khuyến mãi"
                          sx={{
                            width: '100%',
                          }}
                        />
                      </Grid>
                      <Grid item xs={3} lg={3}>
                        <Box>
                          <Button
                            color="primary"
                            variant="contained"
                            sx={{ width: '100%', py: 1.3 }}
                          >
                            Áp dụng
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                  {/* <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        border: '2px solid #FFD60A',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography sx={{ fontWeight: 600, px: 2, fontSize: 16, py: 2 }}>
                        KM025K2J - Giảm 15%
                      </Typography>
                      <Button
                        variant="outlined"
                        color="warning"
                        sx={{ height: '35px', my: 'auto', mr: 2 }}
                      >
                        Bỏ chọn
                      </Button>
                    </Box>
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
                      <Typography sx={{ fontWeight: 600, px: 2, fontSize: 16, py: 2 }}>
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
                  </Box> */}
                  <Grid container spacing={3} px={2}>
                    <Grid item lg={6}>
                      <Box
                        sx={{
                          border: '2px solid #FFD60A',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography sx={{ fontWeight: 600, px: 2, fontSize: 16, py: 2 }}>
                          KM025K2J - Giảm 15%
                        </Typography>
                        <Button
                          variant="outlined"
                          color="warning"
                          sx={{ height: '35px', my: 'auto', mr: 2 }}
                        >
                          Bỏ chọn
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item lg={6}>
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
                        <Typography sx={{ fontWeight: 600, px: 2, fontSize: 16, py: 2 }}>
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
                </Accordion>
                <Accordion
                  sx={{
                    border: 'none',
                    boxShadow: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<IconChevronDown />}
                    sx={{
                      fontSize: 15,
                      px: 0,
                      border: 'none',
                      boxShadow: 'none',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontSize: 16, fontWeight: 500 }}>
                      Flash-sale
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      border: 'none',
                      boxShadow: 'none',
                      display: 'flex',
                      flexDirection: 'column',

                      px: 0,
                    }}
                  >
                    <Grid container spacing={1}>
                      {packages.map((pkg) => (
                        <Grid item xs={12} md={12} key={pkg.id}>
                          <Card
                            sx={{
                              borderRadius: '15px',
                              overflow: 'hidden',
                              boxShadow:
                                selectedPackage === pkg.id
                                  ? '0 6px 18px rgba(128, 128, 128, 0.4)'
                                  : '0 6px 18px rgba(0,0,0,0.1)',
                              transition: 'transform 0.3s',
                              height: 'auto',
                              marginY: '0px',
                              paddingY: '0px',

                              transform: selectedPackage === pkg.id ? 'scale(1.02) ' : 'scale(1)',
                            }}
                            onClick={() => handleSelectPackage(pkg)}
                          >
                            <CardContent
                              sx={{
                                p: 2,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'end',
                                '&:last-child': {
                                  pb: 2,
                                },
                              }}
                            >
                              <div style={{ display: 'flex', gap: '20px' }}>
                                <Typography component={Link} to={`/apps/ecommerce/detail/11`}>
                                  <img
                                    src={pkg.img}
                                    alt={''}
                                    width="120"
                                    style={{ borderRadius: '10px' }}
                                  />
                                </Typography>
                                <div>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      fontWeight: 'bold',
                                      mb: 1,
                                    }}
                                  >
                                    {pkg.title}
                                  </Typography>

                                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                    {' '}
                                    <Typography
                                      sx={{
                                        fontWeight: 'bold',
                                        mb: 1,

                                        fontSize: '14px',
                                      }}
                                    >
                                      {pkg.discount.toLocaleString()} ₫
                                    </Typography>
                                    <Typography sx={{ color: '#888', mb: 1 }}>
                                      <del> {pkg.price.toLocaleString()} ₫</del>
                                    </Typography>{' '}
                                  </div>
                                  <Box>
                                    <Button
                                      variant={'outlined'}
                                      color="warning"
                                      sx={{
                                        display: { xs: 'none', md: 'block' },
                                        backgroundImage: 'none',
                                        ':hover': { backgroundColor: 'none' },
                                        mt: 3.4,
                                      }}
                                    >
                                      {pkg.sale}%
                                    </Button>
                                  </Box>
                                </div>
                              </div>
                              <Box>
                                <Countdown initialSeconds={pkg.timeFlash} />
                                <Button
                                  variant={selectedPackage === pkg.id ? 'contained' : 'outlined'}
                                  color="warning"
                                  sx={{
                                    display: { xs: 'none', md: 'block' },
                                    width: '123.86px',
                                    backgroundImage:
                                      selectedPackage === pkg.id
                                        ? 'linear-gradient(45deg, #ff6f61, #ff9a76)'
                                        : 'none',
                                    borderColor:
                                      selectedPackage === pkg.id ? 'transparent' : '#FFD60A',
                                  }}
                                >
                                  {selectedPackage === pkg.id ? 'Đã chọn' : 'Chọn Mua'}
                                </Button>
                              </Box>
                            </CardContent>
                            {/* <Box
                              style={{
                                position: 'absolute',
                                top: '-15px',

                                padding: '5px 10px',
                                color: 'white',
                                borderRadius: '0px 0px 10px 10px',
                                fontWeight: 'bold',
                              }}
                              sx={{ right: { xs: '-15px', md: '45px' } }}
                            >
                              <img src={sale} alt="" style={{ width: '70px' }} />
                            </Box> */}
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                  <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5">Tổng giá gói : </Typography>
                    <Typography variant="h5" sx={{ paddingX: '3px' }}>
                      1.023.900₫
                    </Typography>
                  </Box>{' '}
                </Accordion>
              </Box>
              <Box>
                <Box sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      my: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '15px',
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} sx={{ display: 'flex' }}>
                      Giá niêm yết
                    </Typography>
                    <Typography variant="h6" fontWeight={700} sx={{ paddingX: '3px' }}>
                      2,078,900₫
                    </Typography>
                  </Box>{' '}
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
                    <Typography variant="subtitle1" fontWeight={600} sx={{ paddingX: '3px' }}>
                      - 531,030₫
                    </Typography>
                  </Box>{' '}
                  <Box
                    sx={{
                      my: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '15px',
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={600}>
                      Tổng tiền trước VAT :{' '}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ paddingX: '3px' }}>
                      1,547,870₫
                    </Typography>
                  </Box>
                  <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      VAT (10%) :{' '}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ paddingX: '3px' }}>
                      154,787₫
                    </Typography>
                  </Box>{' '}
                </Box>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h4">Tổng cộng </Typography>
                  <Typography variant="h4" fontWeight={'bold'} sx={{ color: '#FC3242' }}>
                    1,702,657₫
                  </Typography>
                </Box>

                <Box sx={{ my: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '6px',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={handleCheckboxChange}
                  >
                    <CustomCheckbox checked={checked} />
                    <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Xuất hóa đơn</Typography>
                  </Box>

                  <Box
                    sx={{
                      height: checked ? 'auto' : 0, // Đặt height tự động khi checked
                      overflow: 'hidden', // Ẩn nội dung khi height là 0
                      transition: 'height 0.5s ease', // Hiệu ứng transition mượt mà
                      opacity: checked ? 1 : 0, // Thêm hiệu ứng opacity
                      transitionProperty: 'height, opacity',
                    }}
                  >
                    {checked && (
                      <Box>
                        <Box sx={{ display: 'flex', gap: '6px', p: 2 }}>
                          <img src={iconWarning} alt="" />
                          <Typography>
                            Quý khách vui lòng cung cấp đúng thông tin để xuất hóa đơn. Công ty
                            không chịu trách nhiệm xử lý trong trường hợp quý khách điền sai thông
                            tin hoặc doanh nghiệp không còn hoạt động.
                          </Typography>
                        </Box>
                        <form>
                          <FormControl fullWidth>
                            <CustomFormLabel sx={{ mt: 2 }}>Mã số thuế</CustomFormLabel>
                            <CustomTextField
                              id="error-text-input"
                              variant="outlined"
                              fullWidth
                              required
                              placeholder="Mã số thuế"
                            />
                            <p style={{ margin: 0, color: 'red' }}>Vui lòng không bỏ trống </p>
                          </FormControl>

                          <FormControl fullWidth>
                            <CustomFormLabel sx={{ mt: 2 }}>Tên công ty</CustomFormLabel>
                            <CustomTextField
                              id="error-text-input"
                              variant="outlined"
                              placeholder="tối thiểu 2 ký tự"
                              fullWidth
                              required
                            />
                            <p style={{ margin: 0, color: 'red' }}>Vui lòng không bỏ trống </p>
                          </FormControl>

                          <FormControl fullWidth>
                            <CustomFormLabel sx={{ mt: 2 }}>Địa chỉ</CustomFormLabel>
                            <CustomTextField
                              id="error-text-input"
                              variant="outlined"
                              fullWidth
                              required
                              placeholder="Địa chỉ công ty"
                            />
                            <p style={{ margin: 0, color: 'red' }}>Vui lòng không bỏ trống </p>
                          </FormControl>

                          <FormControl fullWidth>
                            <CustomFormLabel sx={{ mt: 2 }}>
                              Email nhận hóa đơn điện tử
                            </CustomFormLabel>
                            <CustomTextField
                              id="error-text-input"
                              variant="outlined"
                              fullWidth
                              required
                              placeholder="Email"
                            />
                            <p style={{ margin: 0, color: 'red' }}>Vui lòng không bỏ trống </p>
                          </FormControl>
                        </form>
                      </Box>
                    )}
                  </Box>
                </Box>
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
              </Box>
            </Box>
          </Drawer>
        </AppCard>
      </Box>
    </PageContainer>
  );
};

export default PayMentPonit;
