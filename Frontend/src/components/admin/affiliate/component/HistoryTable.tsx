import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Chip,
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
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import { DataHistoryTable } from '../datatable/OrderTableData';

interface PropsHeadTable {
  head: string;
}

const HeadTable: PropsHeadTable[] = [
  {
    head: 'ID thanh toán',
  },
  {
    head: 'Khách hàng',
  },
  {
    head: 'Ngày yêu cầu',
  },
  {
    head: 'Ngày hoàn tất',
  },
  {
    head: 'Email',
  },
  {
    head: 'SĐT',
  },
  {
    head: 'Số tiền rút',
  },
  {
    head: 'Số tài khoản',
  },
  {
    head: 'Ngân hàng',
  },
  {
    head: 'Chủ tải khoản',
  },
  {
    head: 'Chi nhánh',
  },
  {
    head: 'Hóa đơn',
  },
  {
    head: 'Trạng thái',
  },
  {
    head: 'Duyệt hóa đơn',
  },
  {
    head: 'Đã thanh toán',
  },
  {
    head: 'Thông báo',
  },
];

const HistoryTable = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Chờ duyệt':
        return 'warning'; // Yellow or custom color
      case 'Từ chối':
        return 'error'; // Red or custom color
      case 'Đã đi tiền':
        return 'success'; // Green or custom color
      default:
        return 'default'; // Gray or default color
    }
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = DataHistoryTable.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <>
      <TableContainer>
        <Scrollbar_x>
          <Table>
            <TableHead>
              <TableRow>
                {HeadTable.map((item, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
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
                      <Typography variant="subtitle2">{item.id_checkout}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: 'flex',
                          width: '200px',
                          alignItems: 'center',
                        }}
                      >
                        <Avatar
                          src={item.imgsrc}
                          variant="rounded"
                          alt={item.imgsrc}
                          sx={{ width: 48, height: 48 }}
                        />
                        <Typography style={{ marginLeft: '10px' }} variant="subtitle2">
                          {item.name_publisher}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.date_request}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.date_done}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.email}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.phone_number}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.bank_amount}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.bank_number}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.bank_name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.own_bank}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.branch}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">
                        <Button style={{ width: '100px' }}>Tải xuống</Button>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">
                        <Chip label={item.status} color={getStatusColor(item.status)} />
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Checkbox defaultChecked />
                    </TableCell>

                    <TableCell>
                      <Checkbox defaultChecked />
                    </TableCell>
                    <TableCell>
                      <Button style={{ width: '100px' }}>Gửi email</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Scrollbar_x>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={DataHistoryTable.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_event, newPage) => handleChangePage(newPage)}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên mỗi trang"
      />
    </>
  );
};

export default HistoryTable;
