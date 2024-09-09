// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React, { useState } from 'react';
import { Stack } from '@mui/material';
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
  Radio,
  RadioGroup,
  Card,
  CardMedia,
  CardContent,
  Tooltip,
} from '@mui/material';
import sale from 'src/assets/images/icon.png/sale.png';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import AppCard from 'src/components/shared/AppCard';
import emailIcon from 'src/assets/images/breadcrumb/emailSv.png';
import { IconChevronDown } from '@tabler/icons-react';
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import iconWarning from 'src/assets/images/icon.png/icon_warning.svg';
// import Iconbank from 'src/assets/images/logoPay/bank.svg';
// import Iconmomo from 'src/assets/images/logoPay/momo.svg';
// import Iconpaypal from 'src/assets/images/logoPay/paypal.svg';
// import Iconvnpay from 'src/assets/images/logoPay/vnpay.svg';
// import Iconzalopay from 'src/assets/images/logoPay/zalopay.svg';
// import Iconshopeepay from 'src/assets/images/logoPay/shopeepay.svg';
// import { title } from 'process';

const CustomInput = styled((props: any) => <TextField {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
  },
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

      reward: 'Thưởng 10%',
    },
    {
      id: 6,
      img: 'http://localhost:5173/src/assets/images/products/s10.jpg',
      title: 'Chatbot hỗ trợ khách hàng',
      price: 2010000,
      discount: 1995002,

      reward: 'Thưởng 15%',
    },
    {
      id: 7,
      img: 'http://localhost:5173/src/assets/images/products/s12.jpg',
      title: 'Chatbot thương mại điện tử',
      price: 5025000,
      discount: 3935000,
      reward: 'Thưởng 20%',
    },
  ];

  const handleSelectPackage = (pkg: any) => {
    setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id);
    console.log(`Đã chọn gói ${pkg.amount}`);
    // Thêm logic xử lý khi khách hàng chọn gói.
  };
  return (
    <PageContainer title="Email App" description="this is email page">
      <Breadcrumb title="Thanh Toá</PageContainer>n" items={BCrumb}>
        <img src={emailIcon} alt={emailIcon} width={'165px'} />
      </Breadcrumb>
      <Box sx={{ display: { xs: 'block', md: 'block', lg: 'flex' }, gap: 2 }}>
       
        {' '}
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
                    <Grid item lg={4} xs={12}>
                      <Typography variant="body2" color="text.secondary">
                        Họ Và Tên
                      </Typography>
                      <Typography variant="subtitle1" mb={0.5} fontWeight={600}>
                        Nguyễn Văn Bình
                      </Typography>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                      <Typography variant="body2" color="text.secondary">
                        Email
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                        binhvn.reman@gmail.com
                      </Typography>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                      <Typography variant="body2" color="text.secondary">
                        Số Điện Thoại
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
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
                      Gói
                    </Typography>
                    <Typography>Tiêu chuẩn - Tháng (300.000 ký tự)</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                      Giá gói
                    </Typography>
                    <Typography>1,055,000 đ</Typography>
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

                  <AccordionDetails
                    sx={{
                      border: 'none',
                      boxShadow: 'none',
                      display: 'flex',
                      gap: 2,
                      px: 0,
                    }}
                  >
                    <CustomInput
                      id="ordinary-outlined-password-input"
                      type="text"
                      autoComplete="current-password"
                      variant="outlined"
                      fullWidth
                      placeholder="Nhập mã khuyến mãi"
                      sx={{
                        px: 0,
                        width: '80%',
                      }}
                    />

                    <Box>
                      <Button
                        color="primary"
                        variant="contained"
                        sx={{ width: 'auto', borderRadius: '50px', py: 1 }}
                      >
                        Áp dụng
                      </Button>
                    </Box>
                  </AccordionDetails>
                  <Box
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
                        Giảm 900.000 đ
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
                        Giảm 800.000 đ
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
                  </Box>
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
                      Gợi ý thêm
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      border: 'none',
                      boxShadow: 'none',
                      display: 'flex',
                      flexDirection: 'column', // Đặt các phần tử theo chiều dọc
                      gap: 2,
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
                                // position: 'relative',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'end',
                              }}
                            >
                              <div style={{ display: 'flex', gap: '20px' }}>
                                <Typography component={Link} to={`/apps/ecommerce/detail/11`}>
                                  <img
                                    src={pkg.img}
                                    alt={''}
                                    width="100"
                                    style={{ borderRadius: '10px' }}
                                  />
                                </Typography>
                                <div>
                                  <Tooltip title={pkg.reward} arrow>
                                    <Typography
                                      variant="h6"
                                      sx={{
                                        fontWeight: 'bold',
                                        mb: 1,

                                        // display: 'flex',
                                        // alignItems: 'center',
                                      }}
                                    >
                                      {pkg.title}
                                    </Typography>
                                  </Tooltip>
                                  <div style={{ display: 'flex', gap: '10px' }}>
                                    {' '}
                                    <Typography
                                      sx={{
                                        fontWeight: 'bold',
                                        mb: 1,

                                        fontSize: '14px',
                                      }}
                                    >
                                      {pkg.discount.toLocaleString()} đ
                                    </Typography>
                                    <Typography sx={{ color: '#888', mb: 1 }}>
                                      <del> {pkg.price.toLocaleString()} đ</del>
                                    </Typography>{' '}
                                  </div>
                                </div>
                              </div>

                              <Button
                                variant={selectedPackage === pkg.id ? 'contained' : 'outlined'}
                                color="warning"
                                sx={{
                                  display: { xs: 'none', md: 'block' },
                                  marginBottom: '10px',
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
                            </CardContent>
                            <Box
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
                            </Box>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                  <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5">Tổng giá gói : </Typography>
                    <Typography variant="h5" sx={{ paddingX: '3px' }}>
                      1.023.900 đ
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
                      Giá gốc :
                    </Typography>
                    <Typography variant="h6" sx={{ paddingX: '3px' }}>
                      2,078,900 đ
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
                      Tiết kiệm :{' '}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ paddingX: '3px' }}>
                      - 531,030 đ
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
                      1,547,870 đ
                    </Typography>
                  </Box>
                  <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      VAT (10%) :{' '}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ paddingX: '3px' }}>
                      154,787 đ
                    </Typography>
                  </Box>{' '}
                </Box>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h4">Tổng cộng </Typography>
                  <Typography variant="h4" fontWeight={'bold'}>
                    1,702,657 đ
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
                    sx={{
                      fontSize: 18,
                      px: 4,
                      py: 1,
                      color: 'white',
                      fontWeight: 600,
                      backgroundColor: 'red',
                      ':hover': {
                        backgroundColor: '#DC143C ',
                      },
                    }}
                    onClick={() => {}}
                  >
                    Thanh Toán{' '}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Drawer>
        </AppCard>{' '}
      </Box>
    </PageContainer>
  );
};

export default PayMentPonit;
{/* <Box>
          <AppCard>
            <Drawer
              anchor="right"
              variant="permanent"
              sx={{
                zIndex: 0,
                flex: '1 1 auto',
                [`& .MuiDrawer-paper`]: { position: 'relative' },
              }}
            >
              <Box sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box alignItems="center">
                    <Typography variant="h4">Tiêu chuẩn</Typography>
                  </Box>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #F2F6FA',
                        borderRadius: 0,
                        py: 2,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <Radio
                          color="default"
                          value="top"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                          sx={{ width: '10px', height: '10px' }}
                        />
                        <Typography sx={{ fontSize: 16, fontWeight: 700 }}>Theo tháng</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'end',
                          alignItems: 'end',
                        }}
                      >
                        <Typography sx={{ fontSize: 16, fontWeight: 400 }}>199.000 đ</Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #F2F6FA',
                        borderRadius: 0,
                        py: 2,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <Radio
                          value="body"
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                          sx={{ width: '10px', height: '10px' }}
                        />
                        <Box>
                          <Typography sx={{ fontSize: 16, fontWeight: 700 }}>Theo quý</Typography>
                          <Typography sx={{ fontSize: 12, fontWeight: 500, color: '#3C3C43A3' }}>
                            Tiết kiệm 77.000 đ{' '}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'end',
                          alignItems: 'end',
                        }}
                      >
                        <Typography sx={{ fontSize: 16, fontWeight: 400 }}>199.999 đ</Typography>
                        <Typography sx={{ fontSize: 12, fontWeight: 500, color: '#3C3C43A3' }}>
                          520.000 đ/quý
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #F2F6FA',
                        borderRadius: 0,
                        py: 2,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <Radio
                          value="end"
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                          sx={{ width: '10px', height: '10px' }}
                        />
                        <Box>
                          <Typography sx={{ fontSize: 16, fontWeight: 700 }}>Theo năm</Typography>
                          <Typography sx={{ fontSize: 12, fontWeight: 500, color: '#3C3C43A3' }}>
                            Tiết kiệm 489.000 đ{' '}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'end',
                          alignItems: 'end',
                        }}
                      >
                        <Typography sx={{ fontSize: 16, fontWeight: 400 }}>199.999 đ</Typography>
                        <Typography sx={{ fontSize: 12, fontWeight: 500, color: '#3C3C43A3' }}>
                          1.899.000 đ/năm
                        </Typography>
                      </Box>
                    </Box>{' '}
                  </RadioGroup>
                </Box>

                <Box sx={{ py: 3 }}>
                  <Box alignItems="center">
                    <Typography variant="h4">Chọn phương thức thanh toán</Typography>
                  </Box>
                  <Box>
                    <Grid
                      container
                      textAlign="center"
                      sx={{ pt: 4, gap: '10px' }}
                      display={'flex'}
                      justifyContent={'center'}
                    >
                      <Grid sx={{}}>
                        <Box
                          sx={{
                            ...(onClick
                              ? {
                                  backgroundColor: 'white',
                                  borderColor: 'yellow',
                                }
                              : {
                                  backgroundColor: '#F4F5F7',
                                  borderColor: '#EFEFEF',
                                  ':hover': {
                                    backgroundColor: '#E9E9E9',
                                  },
                                }),

                            borderWidth: 1,
                            borderStyle: 'solid',
                            color: 'primary.main',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '155px',
                            height: '90px',
                            gap: '-10px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                          }}
                          onClick={onHandleClick}
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
                              src={Iconbank}
                              alt=""
                              width={35}
                              height={35}
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
                            Chuyển khoản
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid sx={{}}>
                        <Box
                          sx={{
                            backgroundColor: '#F4F5F7',
                            borderColor: '#EFEFEF',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            color: 'primary.main',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '155px',
                            height: '90px',
                            gap: '-10px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                            ':hover': {
                              backgroundColor: '#E9E9E9',
                            },
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
                              src={Iconmomo}
                              alt=""
                              width={35}
                              height={35}
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
                            Chuyển khoản
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid sx={{}}>
                        <Box
                          sx={{
                            backgroundColor: '#F4F5F7',
                            borderColor: '#EFEFEF',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            color: 'primary.main',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '155px',
                            height: '90px',
                            gap: '-10px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                            ':hover': {
                              backgroundColor: '#E9E9E9',
                            },
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
                              src={Iconzalopay}
                              alt=""
                              width={35}
                              height={35}
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
                            Chuyển khoản
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid sx={{}}>
                        <Box
                          sx={{
                            backgroundColor: '#F4F5F7',
                            borderColor: '#EFEFEF',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            color: 'primary.main',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '155px',
                            height: '90px',
                            gap: '-10px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                            ':hover': {
                              backgroundColor: '#E9E9E9',
                            },
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
                              src={Iconpaypal}
                              alt=""
                              width={35}
                              height={35}
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
                            Chuyển khoản
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid sx={{}}>
                        <Box
                          sx={{
                            backgroundColor: '#F4F5F7',
                            borderColor: '#EFEFEF',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            color: 'primary.main',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '155px',
                            height: '90px',
                            gap: '-10px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                            ':hover': {
                              backgroundColor: '#E9E9E9',
                            },
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
                              src={Iconvnpay}
                              alt=""
                              width={35}
                              height={35}
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
                            Chuyển khoản
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid sx={{}}>
                        <Box
                          sx={{
                            backgroundColor: '#F4F5F7',
                            borderColor: '#EFEFEF',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            color: 'primary.main',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '155px',
                            height: '90px',
                            gap: '-10px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                            ':hover': {
                              backgroundColor: '#E9E9E9',
                            },
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
                              src={Iconshopeepay}
                              alt=""
                              width={35}
                              height={35}
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
                            Chuyển khoản
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Drawer>
          </AppCard>
        </Box> */}