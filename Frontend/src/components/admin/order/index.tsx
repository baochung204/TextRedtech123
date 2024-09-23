import {
  Box,
  Fab,
  Grid,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { IconEye, IconPlus, IconSearch, IconTrash } from '@tabler/icons-react';
// import { alpha } from '@mui/material/styles';
import { useState } from 'react';
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import icontext from 'src/assets/images/logos/R-Point.png';
import OrderData from './data/OrderData';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


interface HeadProps {
  head: string;
}

const HeadTable: HeadProps[] = [
  {
    head: 'ID',
  },
  {
    head: 'Họ và tên',
  },
  {
    head: 'Email',
  },
  {
    head: 'Số điện thoại',
  },
  {
    head: 'Loại tài khoản',
  },
  {
    head: 'Trợ lý',
  },
  {
    head: 'Tổng nạp',
  },
  {
    head: 'Số dư',
  },
  {
    head: 'Hành động',
  },
];

const OrderAdminPage = () => {
<<<<<<< HEAD
<<<<<<< HEAD
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    // const [selected] = useState<readonly string[]>([]);
    // const [search, setSearch] = useState('');
    // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
=======
=======

>>>>>>> ca0c9030095a04f03a6d3809b74a0526d65adbd5
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };
>>>>>>> 7ca8c1a954cca1434da67e40573a096b76dd2e40


  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const paginatedData = OrderData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          paddingY: 3,
        }}
      >
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid item xs={4} sm={4} md={4}>
            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Thêm thông báo mới" sx={{ mb: '15px' }}>
                  <Fab size="small" color="secondary" aria-label="plus" sx={{ my: 'auto' }}>
                    <IconPlus width={18} />
                  </Fab>
                </Tooltip>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm thông báo"
                  size="small"
                  type="search"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Search Followers' }}
                  sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconSearch size="20" />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth={true}
                />
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={selectedStartDate}
                  onChange={setSelectedStartDate}
                  renderInput={(params) => <TextField {...params} />}
                />
                <Typography>tới</Typography>
                <DatePicker
                  value={selectedEndDate}
                  onChange={setSelectedEndDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          </Grid>
        </Grid>
      </Grid>
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
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Typography variant="subtitle2">{item.id}</Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Typography variant="subtitle2">{item.name}</Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Typography variant="subtitle2">{item.email}</Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Typography variant="subtitle2">{item.phone}</Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                        }}
                      >
                        <Typography variant="subtitle2">{item.typeacc}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Typography variant="subtitle2">{item.troly}</Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Typography variant="subtitle2">{item.tongnap} VNĐ</Typography>
                    </TableCell>


                    <TableCell>
                      <Box width={'80px'} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Typography
                          color="textSecondary"
                          variant="subtitle2"

                          sx={{ display: 'flex', gap: 0.5 }}
                        >
                          {item.sodu}{' '}
                          <img
                            src={icontext}
                            alt=""
                            width={20}
                            height={20}
                            style={{ borderRadius: 50 }}
                          />
                        </Typography>
                        </Box>
                    </TableCell>


                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <IconButton
                        onClick={() => {
                          // setSelectedKey(item.id); setOpen(true); console.log(item.id);
                        }}
                      >
                        <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                      </IconButton>
                      <IconButton>
                        <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Scrollbar_x>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={OrderData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_event, newPage) => handleChangePage(newPage)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};


export default OrderAdminPage;
