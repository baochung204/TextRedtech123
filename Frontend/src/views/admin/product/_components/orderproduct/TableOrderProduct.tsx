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
import { IconEye } from '@tabler/icons-react';
import React, { useState } from 'react';
import DataOrderProduct from '../../data/DataOrderProduct';
import point from 'src/assets/images/logos/R-Point.png'
interface PropsHeadTable {
  head: string;
}

const HeadTable: PropsHeadTable[] = [
  { head: 'ID' },
  { head: 'Ngày mua' },
  { head: 'ID' },
  { head: 'Tên khách hàng' },
  { head: 'Giá niêm yết' },
  { head: 'Khuyến mại' },
  { head: 'Thanh toán' },
  { head: 'Thao tác' },
];

const TableOrderProduct = () => {
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

  const paginatedData = DataOrderProduct.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

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
                    <Typography variant="subtitle2">{item.id_don_hang}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {item.createdAt.toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: 100, overflow: 'hidden' }}>
                    <Typography variant="subtitle2">{item.id_khach_hang}</Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: 100, overflow: 'hidden' }}>
                    <Typography variant="subtitle2">{item.ten_khach_hang}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
                      {item.gia_niem_yet}
                      <img src={point} alt="" width={20} style={{ marginLeft: '8px' }} />
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
                      {item.khuyen_mai}
                      <img src={point} alt="" width={20} style={{ marginLeft: '8px' }} />
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
                      {item.thanh_toan}
                      <img src={point} alt="" width={20} style={{ marginLeft: '8px' }} />
                    </Typography>
                  </TableCell>

                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <IconButton onClick={() => setKey(item.id_don_hang)}>
                      <IconEye stroke={2} style={{ color: '#b1ffb3' }} />
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
          count={DataOrderProduct.length}
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

export default TableOrderProduct;
