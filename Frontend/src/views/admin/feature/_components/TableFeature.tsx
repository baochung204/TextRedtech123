import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react';
import DataFeature from '../data/DataFeuture';

interface PropsHeadTable {
  head: string;
}

const HeadTable: PropsHeadTable[] = [
  { head: 'ID' },
  { head: 'Ngày tạo' },
  { head: 'Họ và tên' },
  { head: 'Email' },
  { head: 'Số điện thoại' },
  { head: 'Nội dùng đề xuất' },
  { head: 'Trạng thái' },
  { head: 'Ghi chú' },
  { head: 'Thao tác' },
];

const TableFeature = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [key, setKey] = useState<string | null>(null);
  key && console.log(key);
  // const handleChangePage = (newPage: number) => {
  //     setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setRowsPerPage(parseInt(event.target.value, 10));
  //     setPage(0);
  // };

  const paginatedData = DataFeature.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {HeadTable.map((item, index) => (
                <TableCell key={index} sx={{ whiteSpace: 'nowrap' }}>
                  <Typography variant="h6">{item.head}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="subtitle2">{item.id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {item.createdAt.toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 150,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="subtitle2">{item.name}</Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: 100, overflow: 'hidden' }}>
                    <Typography variant="subtitle2">{item.email}</Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: 100, overflow: 'hidden' }}>
                    <Typography variant="subtitle2">{item.phone}</Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <Typography variant="subtitle2">{item.contextFeature}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 150,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="subtitle2">{item.status}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 200,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="subtitle2">{item.note}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <IconButton onClick={() => setKey(item.id)}>
                      <IconEye stroke={2} style={{ color: '#b1ffb3' }} />
                    </IconButton>
                    <IconButton>
                      <IconEdit stroke={2} style={{ color: '#5D87FF' }} />
                    </IconButton>
                    <IconButton>
                      <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={DataFeature.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(_event, newPage) => handleChangePage(newPage)}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Số hàng trên mỗi trang"
            />
      </TableContainer>
    </>
  );
};

export default TableFeature;
