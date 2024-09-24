import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';

interface Column {
  title: string;
  dataIndex?: string;
  render?: (value: any, record: any, rowIndex: number) => React.ReactNode;
  sort?: boolean;
}

interface CustomTableProps {
  columns: Column[];
  dataSource: any[];
  rowsPerPageOptions?: number[];
}

const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  dataSource,
  rowsPerPageOptions = [5, 10, 25],
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

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

  const paginatedData = dataSource.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableContainer>
      <Scrollbar_x>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <Typography variant="h6" sx={{ flexGrow: 1, whiteSpace: 'nowrap' }}>
                      {column.title}
                    </Typography>
                    {column.sort && (
                      <IconButton>
                        <SwapVertIcon />
                      </IconButton>
                    )}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, colIndex) => {
                  const value = column.dataIndex ? row[column.dataIndex] : undefined;
                  return (
                    <TableCell key={colIndex} sx={{ whiteSpace: 'nowrap' }}>
                      <Typography variant="subtitle2">
                        {column.render ? column.render(value, row, rowIndex) : value}
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar_x>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={dataSource.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên trang "
        labelDisplayedRows={({ from, to, count }) =>
          `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`
        }
      />
    </TableContainer>
  );
};

export default CustomTable;
