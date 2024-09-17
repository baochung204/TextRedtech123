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
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import useSortableData from './useSortableData';
import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';

const DataRowCustomerTable = [
  {
    id: 'ORD001',
    createdAt: '2024-09-01',
    assistant: 'Trợ lý A',
    channel: 'Ngô Đình Toản',
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    address: 'Hà Nội',
    email: 'a@example.com',
    orderInfo: 'Thông tin đơn hàng A',
    notes: 'Ghi chú A',
    imgsrc: img1,
  },
  {
    id: 'ORD002',
    createdAt: '2024-09-02',
    assistant: 'Trợ lý B',
    channel: 'Trần Dần',
    name: 'Trần Thị B',
    phone: '0987654321',
    address: 'Hồ Chí Minh',
    email: 'b@example.com',
    orderInfo: 'Thông tin đơn hàng B',
    notes: 'Ghi chú B',
    imgsrc: img2,
  },
  // Thêm dữ liệu mẫu nếu cần
];

const TableListOrder = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { sortedItems, sortBy, sortOrder, handleSortRequest } = useSortableData({
    items: DataRowCustomerTable,
    initialSortBy: 'id',
    initialSortOrder: 'asc',
  });

  const paginatedRows = sortedItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ padding: 4 }}>
        <Scrollbar_x sx={{ maxHeight: 400 }}>
          <Table
            aria-label="order table"
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
                  'phone',
                  'address',
                ].map((column) => (
                  <TableCell key={column} sx={{ textAlign: 'center' }}>
                    <TableSortLabel
                      active={sortBy === column}
                      direction={sortBy === column ? sortOrder : 'asc'}
                      onClick={() =>
                        handleSortRequest(column as keyof (typeof DataRowCustomerTable)[0])
                      }
                    >
                      <Typography variant="h6" fontWeight={600}>
                        {column === 'id' && 'Id Đơn Hàng'}
                        {column === 'createdAt' && 'Ngày Tạo'}
                        {column === 'assistant' && 'Trợ Lý'}
                        {column === 'channel' && 'Kênh (MTK)'}
                        {column === 'orderInfo' && 'Tags'}
                        {column === 'name' && 'Tên Khách Hàng'}
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
                      <img
                        src={row.imgsrc}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          marginRight: '10px',
                        }}
                      />
                      <Box>
                        <Typography variant="subtitle2">{row.channel}</Typography>
                        <Typography style={{ fontSize: '12px', color: '#ccc' }}>
                          {row.id}
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
        />
      </Box>
    </>
  );
};

export default TableListOrder;
