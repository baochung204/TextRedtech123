import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  DialogContentText,
  Grid,
  Slide,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import ChildCard from 'src/components/shared/ChildCard';

interface PropsDialog {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DialogDetailListOrder: React.FC<PropsDialog> = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Dialog
        TransitionComponent={Transition}
        open={open}
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
            <Grid container>
              <Grid item xs={12}>
                <Box
                  display={'flex'}
                  alignItems="center"
                  justifyContent={'center'}
                  marginBottom={2}
                >
                  <Typography variant="h3">Thông tin đơn hàng của bạn </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box my={3}>
                  <ChildCard>
                    <Box p={{ sx: 0, md: 2 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Grid container spacing={2}>
                            {/* <Grid item xs={12}>
                          {' '}
                          <Typography variant="h5">Thông tin yêu cầu</Typography>
                        </Grid> */}
                            <Grid item xs={6}>
                              <Grid container>
                                <Grid item xs={4}>
                                  <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                    Mã đơn hàng :
                                  </Typography>
                                </Grid>{' '}
                                <Grid item xs={8}>
                                  {' '}
                                  <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                    OD10JSNJHU09939
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={6}>
                              <Grid container>
                                <Grid item xs={4}>
                                  <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                    Ngày tạo :
                                  </Typography>
                                </Grid>{' '}
                                <Grid item xs={8}>
                                  {' '}
                                  <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                    12/02/2024
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={6}>
                              <Grid container>
                                <Grid item xs={4}>
                                  <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                    Kênh marketing :
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
                            <Grid item xs={6}>
                              <Grid container>
                                <Grid item xs={4}>
                                  <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                    Trợ lý :
                                  </Typography>
                                </Grid>{' '}
                                <Grid item xs={8}>
                                  {' '}
                                  <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                    Trợ lý số
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={6}>
                              <Grid container>
                                <Grid item xs={4}>
                                  <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                    Tên khách hàng :
                                  </Typography>
                                </Grid>{' '}
                                <Grid item xs={8}>
                                  {' '}
                                  <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                    Nguyễn Văn A
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={6}>
                              <Grid container>
                                <Grid item xs={4}>
                                  <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                    Số điện thoại :
                                  </Typography>
                                </Grid>{' '}
                                <Grid item xs={8}>
                                  {' '}
                                  <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                    0123456789
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item xs={6}>
                              <Grid container>
                                <Grid item xs={4}>
                                  <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                    Email :
                                  </Typography>
                                </Grid>{' '}
                                <Grid item xs={8}>
                                  {' '}
                                  <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                    nguyenvana@gmail.com
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item xs={6}>
                              <Grid container>
                                <Grid item xs={4}>
                                  <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                                    Địa chỉ :
                                  </Typography>
                                </Grid>{' '}
                                <Grid item xs={8}>
                                  {' '}
                                  <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                    Số 123, Đường Lê Lợi, Phường Bến Thành, Quận 1, Thành phố Hồ Chí
                                    Minh, Việt Nam
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </ChildCard>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <TableContainer sx={{ minWidth: 350 }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          {' '}
                          <TableCell align="center">
                            <Typography variant="h6"></Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="h6">Sản phẩm</Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="h6">Số lượng</Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="h6">Giá niêm yết</Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="h6">Khuyến mãi</Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="h6">Giá sau giảm</Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        <TableRow>
                          {/* ------------------------------------------- */}
                          {/* Hình ảnh và tiêu đề sản phẩm */}
                          {/* ------------------------------------------- */}
                          <TableCell align="center" sx={{ pl: 0 }}>
                            <Stack direction="row" alignItems="center">
                              <Avatar
                                src="https://picsum.photos/300/300"
                                alt=""
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
                              <Typography variant="h6">Chat box</Typography>{' '}
                              <Typography color="textSecondary" variant="body1">
                                sản phẩm 1
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell align="center">
                            <ButtonGroup
                              size="small"
                              color="success"
                              aria-label="small button group"
                            >
                              {/* <Button>
                      <IconMinus stroke={1.5} size="0.8rem" />
                    </Button> */}
                              <Button>2</Button>
                              {/* <Button>
                      <IconPlus stroke={1.5} size="0.8rem" />
                    </Button> */}
                            </ButtonGroup>
                          </TableCell>

                          <TableCell align="center">
                            <Typography
                              variant="h6"
                              sx={{ display: 'flex', justifyContent: 'center' }}
                            >
                              20
                              <img
                                src={logoPoint}
                                alt={logoPoint}
                                width={20}
                                height={20}
                                style={{ borderRadius: 50 }}
                              />
                            </Typography>
                          </TableCell>

                          <TableCell align="center">
                            <Typography
                              variant="h6"
                              sx={{ display: 'flex', justifyContent: 'center' }}
                            >
                              13
                              <img
                                src={logoPoint}
                                alt={logoPoint}
                                width={20}
                                height={20}
                                style={{ borderRadius: 50 }}
                              />
                              {/* ${product.salesPrice * product.qty - product.price * product.qty} */}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography
                              variant="h6"
                              sx={{ display: 'flex', justifyContent: 'center' }}
                            >
                              {/* {(
                                product.point * product.qty -
                                product.discount * product.qty
                              ).toLocaleString()} */}
                              20
                              <img
                                src={logoPoint}
                                alt={logoPoint}
                                width={20}
                                height={20}
                                style={{ borderRadius: 50 }}
                              />
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>{' '}
                  </TableContainer>
                  <Box my={3}>
                    <ChildCard>
                      <Box p={{ sx: 0, md: 2 }}>
                        <Typography variant="h5" fontWeight={600} mb={3}>
                          Đơn hàng
                        </Typography>

                        <Stack direction="row" justifyContent="space-between" mb={3}>
                          <Typography variant="h6" fontWeight={400}>
                            Giá trị đơn hàng
                          </Typography>
                          <Typography variant="h6" display={'flex'} alignItems={'center'} gap="3px">
                            {/* {(total + (pointsEarned === null ? 0 : pointsEarned)).toLocaleString(
                              'vn-VN',
                            )}{' '} */}
                            12
                            <img
                              src={logoPoint}
                              alt={logoPoint}
                              width={20}
                              height={20}
                              style={{ borderRadius: 50 }}
                            />
                          </Typography>
                        </Stack>

                        {/* Giảm giá */}
                        <Stack direction="row" justifyContent="space-between" mb={3}>
                          <Typography variant="h6" fontWeight={400}>
                            Khuyến mãi
                          </Typography>
                          <Typography
                            variant="h6"
                            color="error"
                            display={'flex'}
                            alignItems={'center'}
                            gap="3px"
                          >
                            {/* -{discountProduct.toLocaleString('vn-VN')}{' '} */}
                            50
                            <img
                              src={logoPoint}
                              alt={logoPoint}
                              width={20}
                              height={20}
                              style={{ borderRadius: 50 }}
                            />
                          </Typography>
                        </Stack>
                        {/* Vận chuyển */}

                        {/* Tổng cộng */}
                        <Stack direction="row" justifyContent="space-between" mb={1}>
                          <Typography variant="h6">Tổng thanh toán</Typography>
                          <Typography
                            variant="h4"
                            color="main"
                            display={'flex'}
                            alignItems={'center'}
                            gap="3px"
                          >
                            {/* {(
                              total -
                              discountProduct +
                              (pointsEarned === null ? 0 : pointsEarned)
                            ).toLocaleString('vn-VN')} */}
                            900
                            <img
                              src={logoPoint}
                              alt={logoPoint}
                              width={20}
                              height={20}
                              style={{ borderRadius: 50 }}
                            />
                          </Typography>
                        </Stack>
                      </Box>
                    </ChildCard>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogDetailListOrder;
