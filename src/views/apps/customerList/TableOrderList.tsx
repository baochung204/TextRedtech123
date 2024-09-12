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
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import CustomSwitch from 'src/components/forms/theme-elements/CustomSwitch';

const icons = [
  <FaFacebook color="#1877F2" size={20} />,
  <FaWhatsapp color="#25D366" size={20} />,
  <FaInstagram color="#C13584" size={20} />,
  <FaTiktok color="#000000" size={20} />,
];

const DataRowCustomerTable = [
  {
    id: 'ORD001',
    createdAt: '2024-09-01',
    assistant: 'Trợ lý A',
    channel: 0,
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    address: 'Hà Nội',
    email: 'a@example.com',
    orderInfo: 'Thông tin đơn hàng A',
    notes: 'Ghi chú A',
  },
  {
    id: 'ORD002',
    createdAt: '2024-09-02',
    assistant: 'Trợ lý B',
    channel: 1,
    name: 'Trần Thị B',
    phone: '0987654321',
    address: 'Hồ Chí Minh',
    email: 'b@example.com',
    orderInfo: 'Thông tin đơn hàng B',
    notes: 'Ghi chú B',
  },
  {
    id: 'ORD002',
    createdAt: '2024-09-02',
    assistant: 'Trợ lý B',
    channel: 1,
    name: 'Trần Thị B',
    phone: '0987654321',
    address: 'Hồ Chí Minh',
    email: 'b@example.com',
    orderInfo: 'Thông tin đơn hàng B',
    notes: 'Ghi chú B',
  },
  {
    id: 'ORD002',
    createdAt: '2024-09-02',
    assistant: 'Trợ lý B',
    channel: 1,
    name: 'Trần Thị B',
    phone: '0987654321',
    address: 'Hồ Chí Minh',
    email: 'b@example.com',
    orderInfo: 'Thông tin đơn hàng B',
    notes: 'Ghi chú B',
  },
  {
    id: 'ORD002',
    createdAt: '2024-09-02',
    assistant: 'Trợ lý B',
    channel: 1,
    name: 'Trần Thị B',
    phone: '0987654321',
    address: 'Hồ Chí Minh',
    email: 'b@example.com',
    orderInfo: 'Thông tin đơn hàng B',
    notes: 'Ghi chú B',
  },
  // Thêm 6 sản phẩm mẫu khác
];

const TableListOrder = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dense, setDense] = useState(false);

  const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedRows = DataRowCustomerTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  return (
    <TableContainer component={Paper} sx={{ padding: 2 }}>
      <Table
        aria-label="order table"
        size={dense ? 'small' : 'medium'}
        sx={{ whiteSpace: 'nowrap' }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Id Đơn Hàng
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Ngày Tạo
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Trợ Lý
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Kênh
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Tên Khách Hàng
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                SĐT
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Địa Chỉ
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Email
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Thông Tin Đơn Hàng
              </Typography>
            </TableCell>
            <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Ghi Chú
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedRows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
                <Typography variant="body2">{row.id}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
                <Typography variant="body2">{row.createdAt}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
                <Typography variant="body2">{row.assistant}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  {icons[row.channel]}
                </Box>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
                <Typography variant="body2">{row.name}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
                <Typography variant="body2">{row.phone}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
                <Typography variant="body2">{row.address}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
                <Typography variant="body2">{row.email}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
                <Typography variant="body2">{row.orderInfo}</Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px', textAlign: 'center' }}>
                <Typography variant="body2">{row.notes}</Typography>
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
      <Box ml={2}>
        <FormControlLabel
          control={<CustomSwitch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>
    </TableContainer>
  );
};

export default TableListOrder;
