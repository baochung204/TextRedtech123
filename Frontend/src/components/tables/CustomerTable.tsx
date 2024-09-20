import {
  Box,
  FormControlLabel,
  Paper,
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
import useSortableData from 'src/views/apps/customerList/useSortableData';
import Scrollbar_x from '../custom-scroll/Scrollbar_x'; // Import your Scrollbar_x component
import CustomSwitch from '../forms/theme-elements/CustomSwitch';
import { DataCustomerListAffiliateTable } from './tableData';

const CustomerTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dense, setDense] = useState(false);

  const { sortedItems, sortBy, sortOrder, handleSortRequest } = useSortableData({
    items: DataCustomerListAffiliateTable,
    initialSortBy: 'id',
    initialSortOrder: 'asc',
  });

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
                    STT {sortBy === 'id' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('name')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Họ và tên {sortBy === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('phone')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    SĐT {sortBy === 'phone' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('email')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Email {sortBy === 'email' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('createdAt')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Ngày đăng ký {sortBy === 'createdAt' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
                <TableCell onClick={() => handleSortRequest('typeofcustomer')}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Loại khách hàng{' '}
                    {sortBy === 'typeofcustomer' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Typography variant="body2">{row.id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img
                        src={row.imgsrc}
                        alt={`${row.name}'s avatar`}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          marginRight: '10px',
                        }}
                      />
                      <Box>
                        {/* <Typography variant="subtitle2">{row.channel}</Typography> */}
                        <Typography style={{ fontSize: '12px', color: '#ccc' }}>
                          {'MKT000' + row.id}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.phone}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.createdAt}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{row.typeofcustomer}</Typography>
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
        count={DataCustomerListAffiliateTable.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên mỗi trang"
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
