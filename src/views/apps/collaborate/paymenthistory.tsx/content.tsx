// import { Box } from '@mui/material';
// import React from 'react';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'src/store/Store';
import products2 from 'src/assets/images/products/s24.jpg';
import products from 'src/assets/images/products/s25.jpg';
import ChildCard from 'src/components/shared/ChildCard';

const Content = () => {
  return (
    <div>
      {/* <ProductChecout /> */}
      <Box display={'flex'} alignItems="center" justifyContent={'center'} marginBottom={5}>
        <Typography variant="h3">Chi tiết đơn hàng </Typography>
      </Box>
      <Box>
        <TableContainer sx={{ minWidth: 350 }}>
          <Table>
            <TableHead>
              <TableRow>
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
                  <Typography variant="h6">570 point</Typography>
                </TableCell>

                <TableCell align="center">
                  <Typography variant="h6">
                    120 point
                    {/* ${product.salesPrice * product.qty - product.price * product.qty} */}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">450 point</Typography>
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
                  <Typography variant="h6">222 point</Typography>
                </TableCell>

                <TableCell align="center">
                  <Typography variant="h6">
                    555 point
                    {/* ${product.salesPrice * product.qty - product.price * product.qty} */}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">444 point</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>{' '}
        </TableContainer>
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
                <Typography variant="h6">900 point</Typography>
              </Stack>
              {/* Giảm giá */}
              <Stack direction="row" justifyContent="space-between" mb={3}>
                <Typography variant="h6" fontWeight={400}>
                  Khuyến mãi
                </Typography>
                <Typography variant="h6" color="error">
                  -500 point
                </Typography>
              </Stack>
              {/* Vận chuyển */}

              {/* Tổng cộng */}
              <Stack direction="row" justifyContent="space-between" mb={1}>
                <Typography variant="h6">Tổng thanh toán</Typography>
                <Typography variant="h5" color="success">
                  400 point
                </Typography>
              </Stack>
            </Box>
          </ChildCard>
        </Box>
      </Box>
    </div>
  );
};

export default Content;
