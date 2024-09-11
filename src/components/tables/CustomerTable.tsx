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
import { DataRowCustomerTable } from './tableData';
import CustomSwitch from '../forms/theme-elements/CustomSwitch';

const CustomerTable = () => {
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
  const paginatedRows = DataRowCustomerTable.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );
  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };
  return (
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
            <TableCell sx={{ padding: '8px 16px' }}>
              {' '}
              {/* Tùy chỉnh padding */}
              <Typography variant="subtitle2" fontWeight={600}>
                Id Đơn Hàng
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Ngày Tạo
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Trợ Lý
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Giá Trị Đơn Hàng
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Kênh (MTK)
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Tên Khách Hàng
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                SĐT
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Địa Chỉ
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Email
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Thông Tin Đơn Hàng
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Ghi Chú
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedRows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2">{row.id}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2">{row.createdAt}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2">{row.assistant}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2">{row.orderValue}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2">{row.channel}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    src={row.imgsrc}
                    variant="rounded"
                    alt={row.name}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Box>
                    <Typography variant="body2" fontWeight={500}>
                      {row.name}
                    </Typography>
                  </Box>
                </Stack>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2">{row.phone}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2">{row.address}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2">{row.email}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2">{row.orderInfo}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2">{row.note}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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
          count={DataRowCustomerTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <Box ml={2}>
        <FormControlLabel
          control={<CustomSwitch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>
    </TableContainer>
  );
};

export default CustomerTable;
