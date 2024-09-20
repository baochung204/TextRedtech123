import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import logo from 'src/assets/images/logos/R-Point.png';
import useSortableData from 'src/views/apps/customerList/useSortableData';
import { DataRowCustomerTable } from './tableData';
import Scrollbar_x from '../custom-scroll/Scrollbar_x';
// Định nghĩa kiểu cho dữ liệu bảng
interface DataRow {
  imgsrc?: string;
  id: string;
  createdAt: string;
  assistant: string;
  channel: string;
  orderInfo: string;
  name: string;
  orderValue: string;
  phone: string;
  address: string;
}

const CustomerTable2 = () => {
  // State quản lý phân trang và số lượng hàng trên mỗi trang
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Sử dụng hook useSortableData để sắp xếp dữ liệu
  const { sortedItems, sortBy, sortOrder, handleSortRequest } = useSortableData<DataRow>({
    items: DataRowCustomerTable,
    initialSortBy: 'id',
    initialSortOrder: 'asc',
  });

  // Cắt dữ liệu để hiển thị theo trang
  const paginatedRows = sortedItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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

  return (
    <>
      <TableContainer component={Paper}>
        {' '}
        <Scrollbar_x>
          <Table
            aria-label="customer table"
            size="medium"
            sx={{
              whiteSpace: 'nowrap',
              '& th': { fontSize: '1.2rem', padding: '16px' },
              '& td': { fontSize: '1.2rem', padding: '16px' },
            }}
          >
            <TableHead>
              <TableRow>
                {[
                  'id',
                  'createdAt',
                  'assistant',
                  'channel',
                  'orderInfo',
                  'name',
                  'orderValue',
                  'phone',
                  'address',
                ].map((column) => (
                  <TableCell key={column} sx={{ textAlign: 'center' }}>
                    <TableSortLabel
                      active={sortBy === column}
                      direction={sortBy === column ? sortOrder : 'asc'}
                      onClick={() => handleSortRequest(column as keyof DataRow)}
                    >
                      <Typography variant="h6" fontWeight={600}>
                        {column === 'id' && 'ID khách hàng'}
                        {column === 'createdAt' && 'Ngày Tạo'}
                        {column === 'assistant' && 'Trợ Lý'}
                        {column === 'channel' && 'Kênh (MTK)'}
                        {column === 'orderInfo' && 'Tags'}
                        {column === 'name' && 'Tên Khách Hàng'}
                        {column === 'orderValue' && 'Tổng Chi Tiêu'}
                        {column === 'phone' && 'SĐT'}
                        {column === 'address' && 'Địa Chỉ'}
                      </Typography>
                    </TableSortLabel>
                  </TableCell>
                ))}
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
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {/* Avatar on the left */}
                      <img
                        src={row.imgsrc}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          marginRight: '10px',
                        }}
                      />

                      <Box>
                        <Typography variant="subtitle2">{row.channel}</Typography>
                        <Typography style={{ fontSize: '12px', color: '#ccc' }}>
                          {'MKT000' + row.id}
                        </Typography>
                      </Box>
                    </Box>
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
                    <Typography variant="subtitle2">
                      {row.orderValue}
                      <img
                        src={logo}
                        alt="Logo"
                        style={{ width: '25px', height: '25px', marginLeft: '10px' }}
                      />
                    </Typography>
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
        </Scrollbar_x>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: 2 }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={DataRowCustomerTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Số hàng trên mỗi trang"
        />
      </Box>
    </>
  );
};

export default CustomerTable2;
