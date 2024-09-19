import {
  Avatar,
  Box,
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
import { DataHistoryTable, DataPublishersTable } from '../datatable/OrderTableData';

interface PropsHeadTable {
  head: string;
}

const HeadTable: PropsHeadTable[] = [
  {
    head: 'ID publisher',
  },
  {
    head: 'Đối tác',
  },
  {
    head: 'Email',
  },
  {
    head: 'SĐT',
  },
  {
    head: 'Loại hình',
  },
  {
    head: 'Ngày đăng ký',
  },
  {
    head: 'Trạng thái tài khoản',
  },
  {
    head: 'Rank',
  },
  {
    head: 'Hồ sơ',
  },
  {
    head: 'Hợp đồng Affiliate',
  },
  {
    head: 'Tổng hoa hồng',
  },
  {
    head: 'Click',
  },
  {
    head: 'Khách hàng',
  },
  {
    head: 'Đơn hàng',
  },
  {
    head: 'Doanh thu',
  },
  {
    head: 'CVR',
  },
  {
    head: 'Số dư ví',
  },
  {
    head: 'Đang xử lý',
  },
  {
    head: 'Đã hoàn thành',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Đã duyệt':
      return 'success'; // Green for approved
    case 'Chờ duyệt':
      return 'warning'; // Yellow for pending approval
    case 'Từ chối':
      return 'error'; // Red for rejected
    case 'Chưa gửi':
      return 'default'; // Gray for not yet sent
    default:
      return 'default'; // Gray for any unrecognized status
  }
};

const PublisherTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = DataPublishersTable.slice(
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
                      <Typography variant="subtitle2">{item.id_publisher}</Typography>
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
                          {item.name_partner}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.email}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.phone_number}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          <Typography style={{ width: '200px' }} variant="subtitle2">
                            <Chip
                              label={item.type ? 'Doanh nghiệp' : 'Cá nhân'}
                              color={item.type ? 'success' : 'warning'}
                              variant="outlined"
                            />
                          </Typography>
                        </Box>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.create_date}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.type_account}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{item.rank}</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        <Chip label={item.contract} color={getStatusColor(item.contract)} />
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          <Chip
                            label={item.brief ? 'Đã ký' : 'Chưa ký'}
                            color={item.brief ? 'success' : 'warning'}
                            variant="outlined"
                          />
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.total_commission}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.click}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.customer}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.order}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.revenue}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.cvr}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.account_balance}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.processing}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ width: '100px' }} variant="subtitle2">
                        {item.paid}
                      </Typography>
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
        onPageChange={(event, newPage) => handleChangePage(newPage)}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default PublisherTable;
