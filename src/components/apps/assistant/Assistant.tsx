// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Typography,
  TableHead,
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  TableFooter,
  IconButton,
  TableContainer,
  Stack,
} from '@mui/material';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import PageContainer from 'src/components/container/PageContainer';

import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';
import ParentCard from 'src/components/shared/ParentCard';
import BlankCard from '../../../components/shared/BlankCard';
import { IconEdit } from '@tabler/icons-react';
interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: any) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: any) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: any) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: any) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

interface OrderType {
  id: string;
  model: string;
  imgsrc: any;
  customer: string;
  connect: string;
  status: string;
  date: string;
}

const rows: OrderType[] = [
  {
    id: 'ORD - 0120145',
    model: 'GPT-3.5',
    imgsrc: img1,
    customer: 'botHello',
    connect: 'Facebook',
    status: 'Completed',
    date: '10 Jun, 2021 09:51:40',
  },
  {
    id: 'ORD - 0120146',
    model: 'GPT-4',
    imgsrc: img2,
    customer: 'Chatbot Hola',
    connect: 'Zalo',
    status: 'Pending',
    date: '10 Jun, 2021 07:46:00',
  },
  {
    id: 'ORD - 0120460',
    model: 'GPT-4',
    imgsrc: img3,
    customer: 'Chatbot CSKH',
    connect: 'Telegram',
    status: 'Cancel',
    date: '10 Jun, 2021 04:19:38',
  },
  {
    id: 'ORD - 0124060',
    model: 'GPT-3',
    imgsrc: img4,
    customer: 'Chatbot XKLĐ',
    connect: 'X',
    status: 'Completed',
    date: '10 Jun, 2021 04:12:29',
  },
  {
    id: 'ORD - 0124568',
    model: 'GPT-4',
    imgsrc: img5,
    customer: 'Christopher Jamil',
    connect: 'Zalo',
    status: 'Pending',
    date: '15 Apr, 2021 04:12:50',
  },
  {
    id: 'ORD - 0120146',
    model: 'GPT-4',
    imgsrc: img2,
    customer: 'John Deo',
    connect: 'Whatsapp',
    status: 'Pending',
    date: '10 Jun, 2021 07:46:00',
  },
  {
    id: 'ORD - 0120460',
    model: 'GPT-4',
    imgsrc: img3,
    customer: 'Mily Peter',
    connect: 'Facebook',
    status: 'Cancel',
    date: '10 Jun, 2021 04:19:38',
  },
  {
    id: 'ORD - 0124060',
    model: 'GPT-3',
    imgsrc: img4,
    customer: 'Andrew McDownland',
    connect: '457,000',
    status: 'Completed',
    date: '10 Jun, 2021 04:12:29',
  },
  {
    id: 'ORD - 0124568',
    model: 'GPT-4',
    imgsrc: img5,
    customer: 'Christopher Jamil',
    connect: 'Telegram',
    status: 'Pending',
    date: '15 Apr, 2021 04:12:50',
  },
  {
    id: 'ORD - 0120145',
    model: 'GPT-4',
    imgsrc: img1,
    customer: 'Sunil Joshi',
    connect: 'Zalo',
    status: 'Completed',
    date: '10 Jun, 2021 09:51:40',
  },
].sort((a, b) => (a.customer < b.customer ? -1 : 1));

const Assistant = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const nav = useNavigate();
  const handleInfor = () => {
    nav('/apps/assistant/:id');
  };

  return (
    <PageContainer title="Quản lý Trợ lý" description="this is Pagination Table page">
      <ParentCard title="Quản lý Trợ lý">
        <BlankCard>
          <TableContainer>
            <Table
              aria-label="custom pagination table"
              sx={{
                whiteSpace: 'nowrap',
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Id</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Tên</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Model</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Tích hợp</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="h6">Ngày tạo</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6"></Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : rows
                ).map((row, index) => (
                  <TableRow key={index}>
                    <TableCell onClick={handleInfor}>
                      <Typography sx={{ cursor: 'pointer' }} variant="subtitle2">
                        {row.id}
                      </Typography>
                    </TableCell>
                    <TableCell onClick={handleInfor}>
                      <Stack direction="row" spacing={2} alignmodel="center">
                        <Avatar src={row.imgsrc} alt={row.imgsrc} sx={{ width: 30, height: 30 }} />

                        <Link to={'/apps/assistant/:id'}>
                          <Typography
                            sx={{ cursor: 'pointer' }}
                            variant="subtitle2"
                            fontWeight="600"
                          >
                            {row.customer}
                          </Typography>
                        </Link>
                      </Stack>
                    </TableCell>
                    <TableCell onClick={handleInfor}>
                      <Typography
                        sx={{ cursor: 'pointer' }}
                        color="textSecondary"
                        variant="h6"
                        fontWeight="400"
                      >
                        {row.model}
                      </Typography>
                    </TableCell>

                    <TableCell onClick={handleInfor}>
                      <Typography
                        sx={{ cursor: 'pointer' }}
                        color="textSecondary"
                        variant="h6"
                        fontWeight="400"
                      >
                        {row.connect}
                      </Typography>
                    </TableCell>

                    <TableCell onClick={handleInfor}>
                      <Typography sx={{ cursor: 'pointer' }} variant="subtitle2">
                        {row.date}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ cursor: 'pointer', color: 'steelblue' }}>
                      <IconEdit />
                      {/* <DeleteIcon sx={{marginRight: '10px', cursor: "pointer"}}/> */}
                    </TableCell>
                  </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={6}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </BlankCard>
      </ParentCard>
    </PageContainer>
  );
};

export default Assistant;
