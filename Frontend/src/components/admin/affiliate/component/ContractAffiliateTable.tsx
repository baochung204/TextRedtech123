import {
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

const ContractAffiliateTable = () => {
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Đã ký':
        return 'success'; // Green for approved
      case 'Chờ ký':
        return 'warning'; // Yellow for pending approval
      case 'Từ chối':
        return 'error'; // Red for rejected
      default:
        return 'default'; // Gray for any unrecognized status
    }
  };

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
                      <Typography variant="subtitle2">{item.id_contract}</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="subtitle2">{item.id_customer}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.createdate}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.confirmdate}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          <Typography style={{ width: '200px' }} variant="subtitle2">
                            <Chip
                              label={item.type_company ? 'Doanh nghiệp' : 'Cá nhân'}
                              color={item.type_company ? 'success' : 'warning'}
                              variant="outlined"
                            />
                          </Typography>
                        </Box>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.name_company}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.tax_code}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.address}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '200px' }} variant="subtitle2">
                        {item.representative}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.position}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '150px' }} variant="subtitle2">
                        {item.phone_number}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '200px' }} variant="subtitle2">
                        {item.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        <Chip label={item.status} color={getStatusColor(item.status)} />
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Checkbox defaultChecked />
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Button style={{ width: '100px' }}>Ký ngay</Button>
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

export default ContractAffiliateTable;
