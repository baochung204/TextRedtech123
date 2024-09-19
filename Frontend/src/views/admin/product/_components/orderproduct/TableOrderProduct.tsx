import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { IconEye } from '@tabler/icons-react';
import { useState } from 'react';
import DataOrderProduct from '../../data/DataOrderProduct';

interface PropsHeadTable {
  head: string;
}

const HeadTable: PropsHeadTable[] = [
  { head: 'ID' },
  { head: 'Ngày mua' },
  { head: 'ID khách hàng' },
  { head: 'Tên khách hàng' },
  { head: 'Giá niêm yết' },
  { head: 'Khuyến mại' },
  { head: 'Thanh toán' },
  { head: 'Thao tác' },
];

const TableOrderProduct = () => {
  const [page] = useState(0);
  const [rowsPerPage] = useState(5);
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

  // // Placeholder functions for button actions
  // const handleView = (id: string) => {
  //     console.log('View blog with ID:', id);
  // };

  // const handleEdit = (id: string) => {
  //     console.log('Edit blog with ID:', id);
  // };

  // const handleDelete = (id: string) => {
  //     console.log('Delete blog with ID:', id);
  // };

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
                  <TableCell sx={{ maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <Typography variant="subtitle2">{item.gia_niem_yet}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 150,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="subtitle2">{item.khuyen_mai}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 200,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="subtitle2">{item.thanh_toan}</Typography>
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
      </TableContainer>
    </>
  );
};

export default TableOrderProduct;
