import CloseIcon from '@mui/icons-material/Close';
import {
  Accordion,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Typography,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

// const packages = [
//   {
//     id: 5,
//     img: 'http://localhost:5173/src/assets/images/products/s11.jpg',
//     title: 'Chatbot marketing',
//     price: 1055000,
//     discount: 1023900,
//     reward: 'Thưởng 10%',
//   },
//   {
//     id: 6,
//     img: 'http://localhost:5173/src/assets/images/products/s10.jpg',
//     title: 'Chatbot hỗ trợ khách hàng',
//     price: 2010000,
//     discount: 1995002,
//     reward: 'Thưởng 15%',
//   },
//   {
//     id: 7,
//     img: 'http://localhost:5173/src/assets/images/products/s12.jpg',
//     title: 'Chatbot thương mại điện tử',
//     price: 5025000,
//     discount: 3935000,
//     reward: 'Thưởng 20%',
//   },
// ];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Afletpoint1 = ({ row }: any) => {
  const [open, setOpen] = React.useState(false);
  const fullWidth = true;
  const maxWidth = 'lg';

  // const [checked, setChecked] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // const handleCheckboxChange = () => {
  //   setChecked(!checked);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {row.status == 1 ? (
        <Button variant="contained" color="success" sx={{ width: '50%' }} onClick={handleClickOpen}>
          Xem
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
        {' '}
        <DialogActions style={{ padding: '0' }}>
          <a
            onClick={handleClose}
            style={{
              background: 'rgb(252, 32, 50)',
              color: 'white',
              width: '40px',
              height: '30px',
              borderBottomLeftRadius: '10px',
              textAlign: 'center',
              paddingTop: '2px',
              cursor: 'pointer',
            }}
          >
            <CloseIcon />
          </a>
        </DialogActions>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box>
              {/* <AppCard> */}
              {/* <Drawer
                  anchor="right"
                  variant="permanent"
                  sx={{
                    zIndex: 0,
                    width: '200px',
                    flex: '1 1 auto',
                    [`& .MuiDrawer-paper`]: { position: 'relative' },
                    boxShadow: 'none',
                    border: 'none',
                  }}
                > */}
              <Box sx={{ py: 3, px: { xs: 3, md: 20 }, mb: 10 }}>
                <Box>
                  <Box
                    display={'flex'}
                    alignItems="center"
                    justifyContent={'center'}
                    marginBottom={5}
                  >
                    <Typography variant="h3">Thông tin mua hàng</Typography>
                  </Box>
                  <Box>
                    <Grid container sx={{ mt: 2 }}>
                      <Grid item lg={4} xs={12}>
                        <Typography variant="body1" color="text.secondary">
                          Họ Và Tên
                        </Typography>
                        <Typography variant="subtitle1" mb={0.5} fontWeight={600}>
                          Nguyễn Văn Bình
                        </Typography>
                      </Grid>
                      <Grid item lg={4} xs={12}>
                        <Typography variant="body1" color="text.secondary">
                          Email
                        </Typography>
                        <Typography variant="subtitle1" fontWeight={600} mb={0.5}>
                          binhvn.reman@gmail.com
                        </Typography>
                      </Grid>
                      <Grid item lg={4} xs={12}>
                        <Typography variant="body1" color="text.secondary">
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
                    <Box
                      sx={{
                        fontSize: 15,
                        px: 0,
                        border: 'none',
                        boxShadow: 'none',
                        display: 'flex',

                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontSize: 17, fontWeight: 500 }}>
                        Mã khuyến mãi
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: 17, fontWeight: 500 }}>
                        KM025K2J - Giảm 15%{' '}
                      </Typography>
                    </Box>
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
                        Tiết kiệm :{' '}
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ paddingX: '3px' }}>
                        - 531,030 đ
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
                    </Box>
                  </Box>
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h4">Tổng cộng </Typography>
                    <Typography variant="h4" fontWeight={'bold'}>
                      1,702,657 đ
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* </Drawer> */}
              {/* </AppCard> */}
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Afletpoint1;
