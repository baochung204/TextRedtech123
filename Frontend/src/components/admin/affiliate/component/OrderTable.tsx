import {
  Avatar,
  Box,
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
import { DataAffiliateTable } from '../datatable/OrderTableData';

interface PropsHeadTable {
  head: string;
}

const HeadTable: PropsHeadTable[] = [
  {
    head: 'ID đơn hàng',
  },
  {
    head: 'ID Publisher',
  },
  {
    head: 'Ngày mua',
  },
  {
    head: 'Tên Publisher',
  },
  {
    head: 'Email Publisher',
  },
  {
    head: 'SĐT Publisher',
  },
  {
    head: 'Khách hàng',
  },
  {
    head: 'Email',
  },
  {
    head: 'SĐT',
  },
  {
    head: 'Tên gói nạp',
  },
  {
    head: 'Số point',
  },
  {
    head: 'Giá trị đơn hàng',
  },
  {
    head: 'Hoa hồng',
  },
  {
    head: 'Trạng thái',
  },
];

const OrderTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = DataAffiliateTable.slice(
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
                // const isItemSelected = isSelected(item.id);
                // console.log(isItemSelected);

                return (
                  <TableRow
                    key={index}
                    // selected={isItemSelected}
                  >
                    <TableCell>
                      <Typography variant="subtitle2">{item.id_order}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.id_publisher}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.createdate}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.name_publisher}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.email_publisher}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.phonenumber_publisher}</Typography>
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
                          {item.name_customer}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.email_customer}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.phonenumber_customer}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.package}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.numberpoint}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.value}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.commission}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.status}</Typography>
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
        count={DataAffiliateTable.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_event, newPage) => handleChangePage(newPage)}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên mỗi trang"
      />
    </>
  );
};

export default OrderTable;
