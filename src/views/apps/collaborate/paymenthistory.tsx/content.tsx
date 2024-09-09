// import { Box } from '@mui/material';
// import React from 'react';
import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Stack,
  ButtonGroup,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from '@mui/material';
// import { Link } from 'react-router-dom';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';
// import { useSelector, useDispatch } from 'src/store/Store';
import products from 'src/assets/images/products/s25.jpg';
import products2 from 'src/assets/images/products/s24.jpg';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import ChildCard from 'src/components/shared/ChildCard';



const steps = ['Giỏ hàng', 'Thanh toán & địa chỉ', 'Payment'];
const Content = () => {
  const [activeStep, setActiveStep] = React.useState(2);
  return (
    <div>
      {/* <ProductChecout /> */}
      <Box sx={{ width: '100%', px: 10, py: 3 }}>
        <Stepper activeStep={3} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepButton color="inherit" >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box>
        <TableContainer sx={{ minWidth: 350 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Sản phẩm</TableCell>
                <TableCell align="center">Số lượng</TableCell>
                <TableCell align="center">Giá niêm yết</TableCell>
                <TableCell align="center">Khuyến mại</TableCell>
                <TableCell align="center">Giá sau giảm</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                {/* ------------------------------------------- */}
                {/* Hình ảnh và tiêu đề sản phẩm */}
                {/* ------------------------------------------- */}
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
                    <Box>
                      <Typography variant="h6">GTP-3</Typography>{' '}
                      <Typography color="textSecondary" variant="body1">
                        toys
                      </Typography>
                      <IconButton
                        size="small"
                        color="error"
                      // onClick={() => dispatch(deleteCart(product.id))}
                      >
                        <IconTrash size="1rem" />
                      </IconButton>
                    </Box>
                  </Stack>
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
                  <Typography variant="h6">570.000 đ</Typography>
                </TableCell>

                <TableCell align="center">
                  <Typography variant="h6">
                    120.000 đ
                    {/* ${product.salesPrice * product.qty - product.price * product.qty} */}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">450.000 đ</Typography>
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
                    <Box>
                      <Typography variant="h6">GTP-5</Typography>{' '}
                      <Typography color="textSecondary" variant="body1">
                        boys
                      </Typography>
                      <IconButton
                        size="small"
                        color="error"
                      // onClick={() => dispatch(deleteCart(product.id))}
                      >
                        <IconTrash size="1rem" />
                      </IconButton>
                    </Box>
                  </Stack>
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
                  <Typography variant="h6">222.000 đ</Typography>
                </TableCell>

                <TableCell align="center">
                  <Typography variant="h6">
                    555.000 đ
                    {/* ${product.salesPrice * product.qty - product.price * product.qty} */}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">444.000 đ</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box my={3}>
            <ChildCard>
              <Box p={2}>
                <Typography variant="h5" fontWeight={600} mb={3}>
                  Đơn hàng
                </Typography>
                {/* Tổng cộng */}
                <Stack direction="row" justifyContent="space-between" mb={3}>
                  <Typography variant="h6" fontWeight={400}>
                    Giá trị đơn hàng
                  </Typography>
                  <Typography variant="h6">900.000 đ</Typography>
                </Stack>
                {/* Giảm giá */}
                <Stack direction="row" justifyContent="space-between" mb={3}>
                  <Typography variant="h6" fontWeight={400}>
                    Khuyến mãi
                  </Typography>
                  <Typography variant="h6" color="error">
                    -500.000 đ
                  </Typography>
                </Stack>
                {/* Vận chuyển */}
                <Stack direction="row" justifyContent="space-between" mb={3}>
                  <Typography variant="h6" fontWeight={400}>
                    Vận chuyển
                  </Typography>
                  <Typography variant="h6">Miễn phí</Typography>
                </Stack>
                {/* Tổng cộng */}
                <Stack direction="row" justifyContent="space-between" mb={1}>
                  <Typography variant="h6">Tổng thanh toán</Typography>
                  <Typography variant="h5" color="success">
                    400.000 đ
                  </Typography>
                </Stack>
              </Box>
            </ChildCard>
          </Box>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Content;