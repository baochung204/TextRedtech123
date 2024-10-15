import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react'; // Correctly importing useState
import { Link } from 'react-router-dom';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import products2 from 'src/assets/images/products/s24.jpg';
import products from 'src/assets/images/products/s25.jpg';
import ChildCard from 'src/components/shared/ChildCard';

interface IProp {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DialogDetailOrder = ({ open, setOpen }: IProp) => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const packages = [
    {
      id: 7,
      img: products2,
      title: 'Chatbot thương mại điện tử',
      price: 520,
      discount: 499,
      sale: 80,
      timeFlash: 180,
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const handleSelectPackage = (pkgId: number) => {
    setSelectedPackage(selectedPackage === pkgId ? null : pkgId);
  };
  const handleCloseDialog = () => {
    setOpen(!open);
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      keepMounted
      fullWidth
      maxWidth="lg"
      sx={{
        maxHeight: '90vh',
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
        }}
      >
        <DialogContentText id="alert-dialog-slide-description">
          {/* <ProductChecout /> */}
          <Box display={'flex'} alignItems="center" justifyContent={'center'} marginBottom={5}>
            <Typography variant="h3">Chi tiết đơn hàng </Typography>
          </Box>
          <Box>
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
                    <TableCell align="center">
                      <Stack direction="row" alignItems="center" gap={2}>
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
                        <Typography variant="h6">GTP-3</Typography>{' '}
                        <Typography color="textSecondary" variant="body1">
                          toys
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <ButtonGroup size="small" color="success" aria-label="small button group">
                        {/* <Button>
                          <IconMinus stroke={1.5} size="0.8rem" />
                        </Button> */}
                        <Button>{'5'}</Button>
                        {/* <Button>
                          <IconPlus stroke={1.5} size="0.8rem" />
                        </Button> */}
                      </ButtonGroup>
                    </TableCell>

                    <TableCell align="center">
                      <Box width={'150px'} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Typography
                          color="textSecondary"
                          variant="h6"
                          sx={{ display: 'flex', gap: 0.5 }}
                        >
                          123
                          <img
                            src={logoPoint}
                            alt=""
                            width={20}
                            height={20}
                            style={{ borderRadius: 50 }}
                          />
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell align="center">
                      <Box width={'150px'} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Typography
                          color="textSecondary"
                          variant="h6"
                          sx={{ display: 'flex', gap: 0.5 }}
                        >
                          123
                          <img
                            src={logoPoint}
                            alt=""
                            width={20}
                            height={20}
                            style={{ borderRadius: 50 }}
                          />
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box width={'150px'} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Typography
                          color="textSecondary"
                          variant="h6"
                          sx={{ display: 'flex', gap: 0.5 }}
                        >
                          12321
                          <img
                            src={logoPoint}
                            alt=""
                            width={20}
                            height={20}
                            style={{ borderRadius: 50 }}
                          />
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {/* ------------------------------------------- */}
                    {/* Hình ảnh và tiêu đề sản phẩm */}
                    {/* ------------------------------------------- */}
                    <TableCell align="center">
                      <Stack direction="row" alignItems="center" gap={2}>
                        <Avatar
                          src={products2}
                          alt={products2}
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
                        <Typography variant="h6">GTP-4</Typography>{' '}
                        <Typography color="textSecondary" variant="body1">
                          toys
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <ButtonGroup size="small" color="success" aria-label="small button group">
                        {/* <Button>
                          <IconMinus stroke={1.5} size="0.8rem" />
                        </Button> */}
                        <Button>{'2'}</Button>
                        {/* <Button>
                          <IconPlus stroke={1.5} size="0.8rem" />
                        </Button> */}
                      </ButtonGroup>
                    </TableCell>

                    <TableCell align="center">
                      <Box width={'150px'} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Typography
                          color="textSecondary"
                          variant="h6"
                          sx={{ display: 'flex', gap: 0.5 }}
                        >
                          12321
                          <img
                            src={logoPoint}
                            alt=""
                            width={20}
                            height={20}
                            style={{ borderRadius: 50 }}
                          />
                        </Typography>
                      </Box>
                      {/* <Typography
                        variant="h6"
                        sx={{ display: 'flex', justifyContent: 'end', gap: 0.5 }}
                      >
                        1022{' '}
                        <img
                          src={logoPoint}
                          alt={logoPoint}
                          width={20}
                          height={20}
                          style={{ borderRadius: 50 }}
                        />
                      </Typography> */}
                    </TableCell>

                    <TableCell align="center">
                      {/* <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }}>
                        255{' '}
                        <img
                          src={logoPoint}
                          alt={logoPoint}
                          width={20}
                          height={20}
                          style={{ borderRadius: 50 }}
                        />
                         ${product.salesPrice * product.qty - product.price * product.qty} 
                      </Typography> */}
                      <Box width={'150px'} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Typography
                          color="textSecondary"
                          variant="h6"
                          sx={{ display: 'flex', gap: 0.5 }}
                        >
                          1232
                          <img
                            src={logoPoint}
                            alt=""
                            width={20}
                            height={20}
                            style={{ borderRadius: 50 }}
                          />
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      {/* <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }}>
                        767{' '}
                        <img
                          src={logoPoint}
                          alt={logoPoint}
                          width={20}
                          height={20}
                          style={{ borderRadius: 50 }}
                        />
                      </Typography> */}
                      <Box width={'150px'} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Typography
                          color="textSecondary"
                          variant="h6"
                          sx={{ display: 'flex', gap: 0.5 }}
                        >
                          1232
                          <img
                            src={logoPoint}
                            alt=""
                            width={20}
                            height={20}
                            style={{ borderRadius: 50 }}
                          />
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>{' '}
            </TableContainer>
            <Box my={3}>
              <ChildCard>
                <Box p={2}>
                  <Typography variant="h5" fontWeight={600} mb={0}>
                    Đơn hàng
                  </Typography>
                  {/* Tổng cộng */}
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
                              onClick={() => handleSelectPackage(pkg.id)}
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
                                  <Typography component={Link} to={`/shop/detail/11`}>
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

                                    <Box
                                      sx={{
                                        display: 'flex',
                                        gap: 1.5,
                                        marginTop: '10px',
                                      }}
                                    >
                                      <Typography
                                        variant="h6"
                                        sx={{
                                          fontWeight: 'bold',
                                          gap: 1,
                                          display: 'flex',
                                          justifyContent: 'center',
                                        }}
                                      >
                                        {' '}
                                        {pkg.price.toLocaleString()}
                                        <img
                                          src={logoPoint}
                                          alt={logoPoint}
                                          width={20}
                                          height={20}
                                          style={{ borderRadius: 50 }}
                                        />
                                      </Typography>{' '}
                                      <Typography
                                        sx={{
                                          mb: 1,
                                          color: '#888',
                                          fontSize: '12px',
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          gap: 1,
                                        }}
                                      >
                                        <del>{pkg.discount.toLocaleString()} </del>
                                        <img
                                          src={logoPoint}
                                          alt={logoPoint}
                                          width={20}
                                          height={20}
                                          style={{ borderRadius: 50 }}
                                        />
                                      </Typography>
                                    </Box>
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
                      <Typography
                        variant="h6"
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                      >
                        499{' '}
                        <img
                          src={logoPoint}
                          alt={logoPoint}
                          width={20}
                          height={20}
                          style={{ borderRadius: 50 }}
                        />
                      </Typography>
                    </Box>{' '}
                  </Accordion>
                  <Stack direction="row" justifyContent="space-between" mb={2}>
                    <Typography variant="h6" fontWeight={400}>
                      Giá trị đơn hàng :
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}
                    >
                      900{' '}
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
                  <Stack direction="row" justifyContent="space-between" mb={2}>
                    <Typography variant="h6" fontWeight={400}>
                      Khuyến mãi :
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'error.main',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      -500{' '}
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
                    <Typography variant="h6">Tổng thanh toán :</Typography>
                    <Typography
                      variant="h5"
                      color="success"
                      sx={{
                        gap: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      400{' '}
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
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Switch {...label} />
      </DialogActions>
    </Dialog>
  );
};

export default DialogDetailOrder;
