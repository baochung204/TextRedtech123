import {
  Avatar,
  Box,
  FormControlLabel,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import CustomSwitch from '../forms/theme-elements/CustomSwitch';
import { DataRowCustomerTable } from './tableData';
import useSortableData from 'src/views/apps/customerList/useSortableData';

const CustomerTable = () => {
  // State quản lý phân trang và số lượng hàng trên mỗi trang
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dense, setDense] = React.useState(false);

  // Sử dụng useSortableData để sắp xếp dữ liệu
  const { sortedItems, sortBy, sortOrder, handleSortRequest } = useSortableData({
    items: DataRowCustomerTable,
    initialSortBy: 'id',
    initialSortOrder: 'asc',
  });

  // Hàm xử lý thay đổi trang
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  // Hàm xử lý thay đổi số lượng hàng trên mỗi trang
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value as string, 10));
    setPage(0);
  };

  // Cắt dữ liệu để hiển thị theo trang
  const paginatedRows = sortedItems.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ padding: 2 }}>
        <Table
          aria-label="customer table"
          size={dense ? 'small' : 'medium'} // Thay đổi kích thước của bảng để giảm padding
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => handleSortRequest('id')}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  Id Đơn Hàng {sortBy === 'id' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => handleSortRequest('createdAt')}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  Ngày Tạo {sortBy === 'createdAt' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => handleSortRequest('assistant')}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  Trợ Lý {sortBy === 'assistant' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => handleSortRequest('orderValue')}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  Giá Trị Đơn Hàng {sortBy === 'orderValue' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => handleSortRequest('channel')}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  Kênh (MTK) {sortBy === 'channel' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => handleSortRequest('name')}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  Tên Khách Hàng {sortBy === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => handleSortRequest('phone')}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  SĐT {sortBy === 'phone' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => handleSortRequest('address')}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  Địa Chỉ {sortBy === 'address' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => handleSortRequest('email')}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  Email {sortBy === 'email' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => handleSortRequest('orderInfo')}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  Thông Tin Đơn Hàng {sortBy === 'orderInfo' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                </Typography>
              </TableCell>
              <TableCell
                sx={{ padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => handleSortRequest('note')}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  Ghi Chú {sortBy === 'note' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
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
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 2,
          }}
        ></Box>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={DataRowCustomerTable.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Box ml={2}>
        <FormControlLabel
          control={<CustomSwitch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box> 
    </>
  );
};

export default CustomerTable;
