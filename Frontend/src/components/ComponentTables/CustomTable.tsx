import React from 'react';
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
  Paper,
} from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import { Column } from './ColumnInterface';

interface CustomTableProps {
  columns: Column[];
  dataSource: any[];
  count: number;
  rowsPerPage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>,
  rowsPerPageOptions?: number[];
  dataSelect?: string[];
}

const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  dataSource,
  count,
  rowsPerPage,
  page,
  setPage,
  setRowsPerPage,
  rowsPerPageOptions = [5, 10, 25],
  dataSelect = [],
}) => {




  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    console.log('Số hàng được chọn:', event.target.value);
    setRowsPerPage(selectedValue);
    setPage(1)
  };
  const handlePageChange = (_event: unknown, newPage: number) => {

    setPage(newPage + 1);
  };


  return (
    <TableContainer component={Paper} sx={{ px: 2 }}>
      <Scrollbar_x>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => {
                const isColumnVisible = !dataSelect.includes(column.dataIndex);
                const isSortable = column.sort ?? false;
                return (
                  isColumnVisible && (
                    <TableCell key={index}>
                      <Box
                        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <Typography
                          variant="subtitle2"
                          fontWeight={600}
                          sx={{ flexGrow: 1, whiteSpace: 'nowrap'}}
                        >
                          {column.title}
                        </Typography>
                        {isSortable && (
                          <IconButton>
                            <SwapVertIcon />
                          </IconButton>
                        )}
                      </Box>
                    </TableCell>
                  )
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSource?.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, colIndex) => {
                  const value = column.dataIndex ? row[column.dataIndex] : undefined;
                  const isColumnVisible = !dataSelect.includes(column.dataIndex);
                  return (
                    isColumnVisible && (
                      <TableCell key={colIndex} sx={{ whiteSpace: 'nowrap' }}>
                        <Typography
                          variant="subtitle2"
                          style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '200px',
                          }}
                        >
                          {column.render ? column.render(value, row, rowIndex) : value}
                        </Typography>
                      </TableCell>
                    )
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
        count={count}
        rowsPerPage={rowsPerPage}
        page={page - 1}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        labelRowsPerPage="Số hàng trên trang"
        labelDisplayedRows={({ page }) =>
          // `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`
          `Trang ${page + 1}`
        }
      />
    </TableContainer>
  );
};

export default CustomTable;
