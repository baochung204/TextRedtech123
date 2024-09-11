import React, { useState } from 'react';
import {
  TableRow,
  TableHead,
  Table,
  TableContainer,
  TableCell,
  TableBody,
  Typography,
  Avatar,
  Box,
  Stack,
  TablePagination,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Paper,
  FormControlLabel,
} from '@mui/material';
import { tabledh } from 'src/components/tables/tabledh';
import CustomSwitch from '../forms/theme-elements/CustomSwitch';

const CustomerTable3 = () => {
  // State quản lý phân trang và số lượng hàng trên mỗi trang
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dense, setDense] = React.useState(false);
  // Hàm xử lý thay đổi trang
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  // Hàm xử lý thay đổi số lượng hàng trên mỗi trang
  const handleChangeRowsPerPage = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(parseInt(event.target.value as string, 10));
    setPage(0);
  };

  // Cắt dữ liệu để hiển thị theo trang
  const paginatedRows = tabledh.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };
  return (
    <>
      <TableContainer component={Paper} sx={{ padding: 2 }}>
        <Table
          aria-label="customer table"
          size="small" // Thay đổi kích thước của bảng để giảm padding
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  STT
                </Typography>
              </TableCell>{' '}
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Mã đơn hàng
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Khách hàng
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  EMAIL
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  NGÀY MUA
                </Typography>
              </TableCell>{' '}
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  SỐ ĐIỆN THOẠI
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  GIÁ TRỊ ĐƠN HÀNG
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  GÓI ĐƠN HÀNG
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  HOA HỒNG
                </Typography>
              </TableCell>
              {/* <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    TRẠNG THÁI
                  </Typography>
                </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow>
                <TableCell>
                  <Typography color="textSecondary">1</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {row.MHD}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={''} variant="rounded" alt={''} sx={{ width: 48, height: 48 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {row.username}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    {row.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    {new Date(row.createdAt).toLocaleDateString('vi-VN')}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    {row.phone}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    {row.amount.toLocaleString('vn-VN')}đ
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    {row.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={400}>
                    {row.money.toLocaleString('vn-VN')}đ
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>{' '}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}
      >
        <FormControl>
          <InputLabel id="rows-per-page-label">Hàng trên mỗi trang</InputLabel>
          <Select
            labelId="rows-per-page-label"
            id="rows-per-page"
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            sx={{ width: 120 }}
          >
            {[5, 10, 25].map((rows) => (
              <MenuItem key={rows} value={rows}>
                {rows}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tabledh.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          labelRowsPerPage="Hàng trên mỗi trang"
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <Box ml={2}>
        <FormControlLabel
          control={<CustomSwitch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>
    </>
  );
};

export default CustomerTable3;
