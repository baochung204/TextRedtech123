// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CardContent,
  Drawer,
  FormControl,
  Grid,
  Radio,
  RadioGroup,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

import { IconChevronDown } from '@tabler/icons-react';
import emailIcon from 'src/assets/images/breadcrumb/emailSv.png';
import iconWarning from 'src/assets/images/icon.png/icon_warning.svg';
import PageContainer from 'src/components/container/PageContainer';
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import AppCard from 'src/components/shared/AppCard';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
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
const PayMentPonit2 = () => {
  const [checked, setChecked] = React.useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  // const [selectedPackage, setSelectedPackage] = useState(null);

  // const packages = [
  //   {
  //     id: 5,
  //     img: 'http://localhost:5173/src/assets/images/products/s11.jpg',
  //     title: 'Chatbot marketing',
  //     price: 1055000,
  //     discount: 1023900,
  //     sale: 80,
  //     timeFlash: 180,
  //   },
  //   {
  //     id: 6,
  //     img: 'http://localhost:5173/src/assets/images/products/s10.jpg',
  //     title: 'Chatbot hỗ trợ khách hàng',
  //     price: 2010000,
  //     discount: 1995002,
  //     sale: 80,
  //     timeFlash: 180,
  //   },
  //   {
  //     id: 7,
  //     img: 'http://localhost:5173/src/assets/images/products/s12.jpg',
  //     title: 'Chatbot thương mại điện tử',
  //     price: 5025000,
  //     discount: 3935000,
  //     sale: 80,
  //     timeFlash: 180,
  //   },
  // ];

  // const handleSelectPackage = (pkg: any) => {
  //   setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id);
  // };
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
                          ...(checked
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
                        // onClick={}
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
                            src="https://picsum.photos/300/300"
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
                            src="https://picsum.photos/300/300"
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
                            src="https://picsum.photos/300/300"
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
                            src="https://picsum.photos/300/300"
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
                            src="https://picsum.photos/300/300"
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
                            src="https://picsum.photos/300/300"
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
      </Box>
    </PageContainer>
  );
};

export default PayMentPonit2;
