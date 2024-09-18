import React, { useState } from 'react';

import DataTable3 from '../DataTable/TableTab3';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  TablePagination,
} from '@mui/material';
import DialogFile from '../dialog/DialogFile';

interface PropsTab3 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tab3: React.FC<PropsTab3> = ({ value, open, setOpen }) => {
  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handle pagination
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Slice the data based on the current page and rows per page
  const paginatedData = DataTable3.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6" >
                    ID
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" >
                    Tên file
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" >
                    Dung lượng
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" >
                    Ngày tải
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" >
                    Định dạng
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((items) => (
                <TableRow key={items.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <Typography variant="subtitle2">
                      {items.idCode}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {items.fileName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {items.datas}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {items.creationDate.toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {items.formats}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={DataTable3.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={() => handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>
      <DialogFile open={open} setOpen={setOpen} value={value} />
    </>
  );
};

export default Tab3;
