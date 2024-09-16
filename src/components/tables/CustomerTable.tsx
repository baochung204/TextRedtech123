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
import Scrollbar_x from '../custom-scroll/Scrollbar_x'; // Import your Scrollbar_x component

const CustomerTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dense, setDense] = React.useState(false);

  const { sortedItems, sortBy, sortOrder, handleSortRequest } = useSortableData({
    items: DataRowCustomerTable,
    initialSortBy: 'id',
    initialSortOrder: 'asc',
  });

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value as string, 10));
    setPage(0);
  };

  const paginatedRows = sortedItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ padding: 2 }}>
        {/* Use Scrollbar_x for horizontal scrolling */}
        <Scrollbar_x sx={{ maxHeight: 400 }}>
          <Table
            aria-label="customer table"
            size={dense ? 'small' : 'medium'}
            sx={{ whiteSpace: 'nowrap' }}
          >
            <TableHead>
              <TableRow>
                {/* Table headers */}
                <TableCell onClick={() => handleSortRequest('id')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Id Đơn Hàng {sortBy === 'id' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('createdAt')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Ngày Tạo {sortBy === 'createdAt' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('assistant')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Trợ Lý {sortBy === 'assistant' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('orderValue')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Giá Trị Đơn Hàng{' '}
                    {sortBy === 'orderValue' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('channel')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Kênh (MTK) {sortBy === 'channel' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('name')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Tên Khách Hàng {sortBy === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('phone')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    SĐT {sortBy === 'phone' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('address')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Địa Chỉ {sortBy === 'address' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('email')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Email {sortBy === 'email' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('orderInfo')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Thông Tin Đơn Hàng{' '}
                    {sortBy === 'orderInfo' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('note')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Ghi Chú {sortBy === 'note' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Table data rows */}
              {paginatedRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Typography variant="body2">{row.id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.createdAt}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.assistant}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.orderValue}</Typography>
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
                          {'MKT000' + row.id}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        src={row.imgsrc}
                        variant="rounded"
                        alt={row.name}
                        sx={{ width: 48, height: 48 }}
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" fontWeight={500}>
                          {row.name}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.phone}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.address}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.orderInfo}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.note}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Scrollbar_x>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 2,
          }}
        >
          {/* Add any additional content or controls here */}
        </Box>
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
