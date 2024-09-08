import React from 'react';

import {
  TableRow,
  TableHead,
  Table,
  TableContainer,
  TableCell,
  TableBody,
  Typography,
  Avatar,
  Box,
  Stack,
} from '@mui/material';
import { DataRowCustomerTable } from './tableData';
import img1 from 'src/assets/images/products/s11.jpg';
const CustomerTable = () => {
  return (
    <TableContainer>
      <Table
        aria-label="simple table"
        sx={{
          whiteSpace: 'nowrap',
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                STT
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Họ Tên
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Email
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Số Điện Thoại
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Ngày Đăng Ký
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Loại khách hàng
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {DataRowCustomerTable.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  {row.id}
                </Typography>
              </TableCell>
              <TableCell className="flex">
                <Stack direction="row" spacing={2}>
                  <Avatar
                    src={row.image}
                    variant="rounded"
                    alt={img1}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={500}>
                      {row.name}
                    </Typography>
                    <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                      {row.electronics}
                    </Typography>
                  </Box>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  {row.email}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  {row.phone}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  {row.registrationDate}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="subtitle2"
                  fontWeight={400}
                  style={{ color: row.totalExpenses === 'Miễn phí' ? 'green' : 'red' }}
                >
                  {row.totalExpenses}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
