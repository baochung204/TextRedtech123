import React, { useState } from 'react';
import {
  TableRow,
  TableHead,
  Table,
  TableContainer,
  TableCell,
  TableBody,
  Typography,
  Box,
  TablePagination,
  Paper,
  FormControlLabel,
} from '@mui/material';
// import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Import các biểu tượng mạng xã hội
import { DataRowCustomerTable } from './tableData';
import CustomSwitch from '../forms/theme-elements/CustomSwitch';

// Danh sách các icon
// const icons = [
//   <FaFacebook color="#1877F2" size={30} />, // Tăng kích thước icon
//   <FaWhatsapp color="#25D366" size={30} />,
//   <FaInstagram color="#C13584" size={30} />,
// ];

const CustomerTable2 = () => {
  // State quản lý phân trang và số lượng hàng trên mỗi trang
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dense, setDense] = useState(false);

  // Hàm xử lý thay đổi trang
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
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

  // Hàm xử lý thay đổi chế độ padding dày
  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  return (
    <TableContainer component={Paper} sx={{ padding: 4 }}>
      <Table
        aria-label="customer table"
        size={dense ? 'small' : 'medium'} // Thay đổi kích thước của bảng
        sx={{
          whiteSpace: 'nowrap',
          '& th': { fontSize: '1.2rem', padding: '16px' }, // Tăng kích thước chữ tiêu đề cột và padding
          '& td': { fontSize: '1.2rem', padding: '16px' }, // Tăng kích thước chữ dữ liệu và padding
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                Id Đơn Hàng
              </Typography>
            </TableCell>
            <TableCell sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                Ngày Tạo
              </Typography>
            </TableCell>
            <TableCell sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                Trợ Lý
              </Typography>
            </TableCell>
            <TableCell sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                Kênh (MTK)
              </Typography>
            </TableCell>
            <TableCell sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                Tags
              </Typography>
            </TableCell>
            <TableCell sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                Tên Khách Hàng
              </Typography>
            </TableCell>
            <TableCell sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                Tổng Chi Tiêu
              </Typography>
            </TableCell>
            <TableCell sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                SĐT
              </Typography>
            </TableCell>
            <TableCell sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                Địa Chỉ
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedRows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2">{row.id}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2">{row.createdAt}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2">{row.assistant}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2">{row.channel}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2">{row.orderInfo}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2" fontWeight={500}>
                  {row.name}
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2">{row.orderValue}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2">{row.phone}</Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2">{row.address}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: 2 }}>
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
      <Box sx={{ padding: 2 }}>
        <FormControlLabel
          control={<CustomSwitch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>
    </TableContainer>
  );
};

export default CustomerTable2;
