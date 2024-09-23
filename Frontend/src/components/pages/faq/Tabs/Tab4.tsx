import React, { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
} from '@mui/material';
import DataTable4 from '../DataTable/TableTab4';

const Tab4 = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = DataTable4.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">
                  ID
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">
                  Ngày tạo
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">
                  Tên model
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">
                  Model gốc
                </Typography>
              </TableCell>
              
              <TableCell>
                <Typography variant="h6">
                  Token huấn luyện
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((items) => (
              <TableRow key={items.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>
                  <Typography variant="subtitle2">
                    {items.idCode}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    {items.creationDate.toLocaleDateString()}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    {items.modelName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    {items.modelLocal}
                  </Typography>
                </TableCell>
               
                <TableCell>
                  <Typography variant="subtitle2">
                    {items.trainedTokens}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={DataTable4.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={() => handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Số hàng trên mỗi trang"
        />
      </TableContainer>
    </Box>
  );
};

export default Tab4;
