  import React, { useState, useMemo } from 'react';
  import {
    TableRow,
    TableHead,
    Table,
    TableContainer,
    TableCell,
    TableBody,
    Typography,
    Box,
    TablePagination,
    Paper,
    IconButton,
  } from '@mui/material';
  import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
  import { DataRowCustomerTable } from './tableData';

  const CustomerTable2 = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(
      null
    );

    // Handle sorting
    const sortedRows = useMemo(() => {
      if (!sortConfig) return DataRowCustomerTable;
      return [...DataRowCustomerTable].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }, [sortConfig]);

    const handleSort = (key: string) => {
      setSortConfig((prev) => ({
        key,
        direction: prev?.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
      }));
    };

    // Pagination
    const handleChangePage = (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage);
    const handleChangeRowsPerPage = (event: React.ChangeEvent<{ value: unknown }>) => {
      setRowsPerPage(parseInt(event.target.value as string, 10));
      setPage(0);
    };

    const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    // Table column data
    const columns = [
      { label: 'Id Đơn Hàng', key: 'id' },
      { label: 'Ngày Tạo', key: 'createdAt' },
      { label: 'Trợ Lý', key: 'assistant' },
      { label: 'Kênh (MTK)', key: 'channel' },
      { label: 'Tags', key: 'orderInfo' },
      { label: 'Tên Khách Hàng', key: 'name' },
      { label: 'Tổng Chi Tiêu', key: 'orderValue' },
      { label: 'SĐT', key: 'phone' },
      { label: 'Địa Chỉ', key: 'address' },
    ];

    return (
      <>
        <TableContainer component={Paper} sx={{ padding: 4 }}>
          <Table aria-label="customer table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.key} sx={{ textAlign: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => handleSort(column.key)}>
                      <Typography variant="h6" fontWeight={600}>{column.label}</Typography>
                      {sortConfig?.key === column.key && (
                        <IconButton size="small">
                          {sortConfig.direction === 'asc' ? <ArrowUpward /> : <ArrowDownward />}
                        </IconButton>
                      )}
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((column) => (
                    <TableCell key={column.key} sx={{ textAlign: 'center' }}>
                      <Typography variant="subtitle2">{row[column.key]}</Typography>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
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

  export default CustomerTable2;
