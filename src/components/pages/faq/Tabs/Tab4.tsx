import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Paper,
  Stack,
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
                <Typography variant="h6">ID</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Tên file</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Dung lượng</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Ngày tải</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Định dạng</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((items) => (
              <TableRow key={items.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      src={items.images}
                      variant="rounded"
                      alt={items.images}
                      sx={{ width: 48, height: 48 }}
                    />
                    <Box>
                      <Typography variant="subtitle2" fontWeight={500}>
                        {items.fullName}
                      </Typography>
                      <Typography color="textSecondary" fontSize="11px" variant="subtitle2">
                        {items.election}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>

                <TableCell>
                  <Typography variant="subtitle2" color="textSecondary">
                    {items.modelName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" color="textSecondary">
                    {items.modelLocal}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" color="textSecondary">
                    {items.creationDate.toLocaleDateString()}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" color="textSecondary">
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
        />
      </TableContainer>
    </Box>
  );
};

export default Tab4;
