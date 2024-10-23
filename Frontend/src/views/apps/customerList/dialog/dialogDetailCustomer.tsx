import { Group } from '@mui/icons-material';
import { Avatar, Box, DialogContentText, Grid, Slide, Stack, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import ChildCard from 'src/components/shared/ChildCard';
import avt6 from 'src/assets/images/profile/user-6.jpg';

interface PropsDialog {
  openDetail: boolean;
  setOpenDetail: React.Dispatch<React.SetStateAction<boolean>>;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const text =
  'KDC - Dao trổ khắc giấy và gỗ mỏng với cán kim loại và hộp 05 lưỡi sơ cua đi kèm asdads sadasd asda';
const price = 1253000;
const DialogDetailCustomer: React.FC<PropsDialog> = ({ openDetail, setOpenDetail }) => {
  const handleClose = () => {
    setOpenDetail(!openDetail);
  };

  return (
    <>
      <Dialog
        TransitionComponent={Transition}
        open={openDetail}
        onClose={handleClose}
        maxWidth="lg"
        sx={{
          '& .MuiDialog-container': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '1000px',
          },
        }}
      >
        <DialogContent
          sx={{
            overflowY: 'auto',
            height: '100%',
            '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#E3E3E3',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#d6d6d6',
            },
            maxHeight: '80vh',
            p: 4,
          }}
        >
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  display={'flex'}
                  alignItems="center"
                  justifyContent={'center'}
                  marginBottom={2}
                >
                  <Typography variant="h3">Chi tiết khách hàng </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar src={avt6} alt="" sx={{ width: 150, height: 150 }} />
                      </Grid>
                      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h5" fontWeight="500" mt={1}>
                          Nguyễn Đức Nhật
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Mã khách hàng :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                  OJSNJHU09939
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Tên khách hàng :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                  Nguyễn Đức Nhật (nêu không có avatar)
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Kênh :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                  Facebook
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Số điện thoại :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                  0125673489
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Email :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                  ndnhat711@gmail.com
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Địa chỉ :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                  Số nhà 123, Đường Hoàng Diệu, Phường Phú Nhuận, Quận Tân Bình,
                                  Thành phố Hồ Chí Minh, Việt Nam
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Trợ lý :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                  Trợ lý số 1
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Tổng chi tiêu :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                  12.000.590 ₫{/*{ cvm.toLocaleString('vi-VN') ₫} */}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Tên CT :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                  Công ty TNHHCP ABC
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Mã số thuế :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                  236172091283
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Website CT :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography>
                                  <a
                                    href="https://www.google.com/maps/place/123+Hoang+Dieu,+Tan+Binh,+Ho+Chi+Minh,+Vietnam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    www.microsoft.com
                                  </a>
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Số điện thoại CT :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                  0145267890
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Email :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                  cttnhhabc@gmail.com
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                  Địa chỉ :
                                </Typography>
                              </Grid>{' '}
                              <Grid item xs={8}>
                                {' '}
                                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                  Số nhà 123, Đường Hoàng Diệu, Phường Phú Nhuận, Quận Tân Bình,
                                  Thành phố Hồ Chí Minh, Việt Nam
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogDetailCustomer;
