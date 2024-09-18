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
import { DataContactAffiliateTable } from '../datatable/OrderTableData';

interface PropsHeadTable {
  head: string;
}

const HeadTable: PropsHeadTable[] = [
  {
    head: 'ID hợp đồng',
  },
  {
    head: 'ID khách hàng',
  },
  {
    head: 'Ngày tạo',
  },
  {
    head: 'Ngày ký',
  },
  {
    head: 'Loại tài khoản',
  },
  {
    head: 'Tên công ty',
  },
  {
    head: 'Mã số thuế',
  },
  {
    head: 'Địa chỉ',
  },
  {
    head: 'Người đại diện',
  },
  {
    head: 'Chức vụ',
  },
  {
    head: 'SDT công ty',
  },
  {
    head: 'Email công ty',
  },
  {
    head: 'Trạng thái',
  },
  {
    head: 'Duyệt hồ sơ',
  },
  {
    head: 'Hợp đồng',
  },
];

const ContractPointTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = DataContactAffiliateTable.slice(
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
                        <Chip label={item.status} />
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
        count={DataContactAffiliateTable.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => handleChangePage(newPage)}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default ContractPointTable;
