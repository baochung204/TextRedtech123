// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
  styled,
  TextField,
  Typography,
  FormControl,
  Grid,
  AccordionDetails,
  Card,
  Accordion,
  CardContent,
  Tooltip,
  AccordionSummary,
  Drawer,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import sale from 'src/assets/images/icon.png/sale.png';
import AppCard from 'src/components/shared/AppCard';
import { IconChevronDown } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import iconWarning from 'src/assets/images/icon.png/icon_warning.svg';

// import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
// import PageContainer from 'src/components/container/PageContainer';
// import ProductChecout from 'src/components/apps/ecommerce/productCheckout/ProductCheckout';
// import ChildCard from 'src/components/shared/ChildCard';
// const BCrumb = [
//   {
//     to: '/',
//     title: 'Home',
//   },
//   {
//     title: 'Checkout',
//   },
// ];

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
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// interface PropsTable {

// }
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
const Afletpoint = ({ row }: any) => {
  const [open, setOpen] = React.useState(false);
  const fullWidth = true; // Declare and initialize fullWidth variable
  const maxWidth = 'lg'; // Declare and initialize maxWidth variable
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [checked, setChecked] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSelectPackage = (pkg: any) => {
    setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id);
    console.log(`Đã chọn gói ${pkg.amount}`);
    // Thêm logic xử lý khi khách hàng chọn gói.
  };
  return (
    <>
      {row.status == 1 ? (
        <Button variant="contained" color="success" sx={{ width: '50%' }} onClick={handleClickOpen}>
          Chi tiết
        </Button>
      ) : (
        ''
      )}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box>
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

                                    transform:
                                      selectedPackage === pkg.id ? 'scale(1.02) ' : 'scale(1)',
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
                                      <Typography component={Link} to={`/shop/detail/11`}>
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
                                      variant={
                                        selectedPackage === pkg.id ? 'contained' : 'outlined'
                                      }
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
                          <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                            Xuất hóa đơn
                          </Typography>
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
                                  Quý khách vui lòng cung cấp đúng thông tin để xuất hóa đơn. Công
                                  ty không chịu trách nhiệm xử lý trong trường hợp quý khách điền
                                  sai thông tin hoặc doanh nghiệp không còn hoạt động.
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
                                  <p style={{ margin: 0, color: 'red' }}>
                                    Vui lòng không bỏ trống{' '}
                                  </p>
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
                                  <p style={{ margin: 0, color: 'red' }}>
                                    Vui lòng không bỏ trống{' '}
                                  </p>
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
                                  <p style={{ margin: 0, color: 'red' }}>
                                    Vui lòng không bỏ trống{' '}
                                  </p>
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
                                  <p style={{ margin: 0, color: 'red' }}>
                                    Vui lòng không bỏ trống{' '}
                                  </p>
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
              </AppCard>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Afletpoint;
