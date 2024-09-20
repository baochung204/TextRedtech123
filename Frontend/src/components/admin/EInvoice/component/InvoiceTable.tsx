import {
  Button,
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
import { DataInvoiceTable } from '../datatable/InvoiceTableData';

interface PropsHeadTable {
  head: string;
}

const HeadTable: PropsHeadTable[] = [
  {
    head: 'ID hóa đơn',
  },
  {
    head: 'ID đơn hàng',
  },
  {
    head: 'Ngày tạo',
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
    head: 'Nội dung hóa đơn',
  },
  {
    head: 'DVT',
  },
  {
    head: 'Số lượng',
  },
  {
    head: 'Đơn giá',
  },
  {
    head: 'Thành tiền',
  },
  {
    head: 'VAT',
  },
  {
    head: 'Tổng(VAT)',
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
    head: 'SĐT công ty',
  },
  {
    head: 'Email công ty',
  },
  {
    head: 'Trạng thái',
  },
  {
    head: 'Hóa đơn',
  },
];

const InvoiceTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = DataInvoiceTable.slice(
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
                      <Typography variant="subtitle2">{item.id_bill}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.id_order}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.createdate}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">
                        <Chip
                          label={item.type_account ? 'Doanh nghiệp' : 'Cá nhân'}
                          color={item.type_account ? 'success' : 'warning'}
                          variant="outlined"
                        />
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
                        {item.content_bill}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.dvt}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.amount}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.price}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.into_money}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.vat}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.total_vat}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.address}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography style={{ width: '150px' }} variant="subtitle2">
                        {item.presentative}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.position}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.phone_number}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '200px' }} variant="subtitle2">
                        {item.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Button style={{ width: '100px' }}>Xuất ngay</Button>
                    </TableCell>
                    <TableCell>
                      <Button style={{ width: '100px' }}>Xuất ngay</Button>
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
        count={DataInvoiceTable.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_event, newPage) => handleChangePage(newPage)}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên mỗi trang"
      />
    </>
  );
};

export default InvoiceTable;
