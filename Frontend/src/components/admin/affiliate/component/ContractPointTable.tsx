import FilterListIcon from '@mui/icons-material/FilterList';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconSearch } from '@tabler/icons-react';
import React, { createElement, useState } from 'react';
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import { DataContactAffiliateTable } from '../datatable/OrderTableData';

interface FilmsData {
  id: number;
  title: string;
}
const FilmsData: FilmsData[] = [
  { id: 1, title: 'Mã hợp đồng' },
  { id: 2, title: 'Mã khách hàng' },
  { id: 3, title: 'Ngày tạo' },
  { id: 4, title: 'Ngày ký' },
  { id: 5, title: 'Loại tài khoản' },
  { id: 6, title: 'Tên công ty' },
  { id: 7, title: 'Mã số thuế' },
  { id: 8, title: 'Địa chỉ' },
  { id: 9, title: 'Người đại diện' },
  { id: 10, title: 'Chức vụ' },
  { id: 11, title: 'SDT công ty' },
  { id: 12, title: 'Email công ty' },
  { id: 13, title: 'Trạng thái' },
  { id: 14, title: 'Duyệt hồ sơ' },
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

  // const getStatusColor = (status: string) => {
  //   switch (status) {
  //     case 'Đã ký':
  //       return 'success'; // Green for approved
  //     case 'Chờ ký':
  //       return 'warning'; // Yellow for pending approval
  //     case 'Từ chối':
  //       return 'error'; // Red for rejected
  //     default:
  //       return 'default'; // Gray for any unrecognized status
  //   }
  // };
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [MAHd, setMAHd] = useState(true);
  const [MAKH, setMAKH] = useState(true);
  const [NGT, setNGT] = useState(true);
  const [NGK, setNGK] = useState(true);
  const [LTK, setLTK] = useState(true);
  const [TCT, setTCT] = useState(true);
  const [MST, setMST] = useState(true);
  const [DC, setDC] = useState(true);
  const [NDD, setNDD] = useState(true);
  const [CV, setCV] = useState(true);
  const [SDT, setSDT] = useState(true);
  const [EMAIL, setEMAIL] = useState(true);
  const [TT, setTT] = useState(true);
  const [DHS, setDHS] = useState(true);

  const handleItemClick = (id: number) => {
    setSelectedItems((prev: any) =>
      prev.includes(id) ? prev.filter((item: any) => item !== id) : [...prev, id],
    );

    if (id === 1) {
      setMAHd(!MAHd);
    }
    if (id === 2) {
      setMAKH(!MAKH);
    }
    if (id === 3) {
      setNGT(!NGT);
    }
    if (id === 4) {
      setNGK(!NGK);
    }
    if (id === 5) {
      setLTK(!LTK);
    }
    if (id === 6) {
      setTCT(!TCT);
    }
    if (id === 7) {
      setMST(!MST);
    }
    if (id === 8) {
      setDC(!DC);
    }
    if (id === 9) {
      setNDD(!NDD);
    }
    if (id === 10) {
      setCV(!CV);
    }
    if (id === 11) {
      setSDT(!SDT);
    }
    if (id === 12) {
      setEMAIL(!EMAIL);
    }
    if (id === 13) {
      setTT(!TT);
    }
    if (id === 14) {
      setDHS(!DHS);
    }
  };

  const [iconIndex, setIconIndex] = useState<number>(0);
  const icons = [SwapVertIcon, SouthIcon, NorthIcon];

  const handleClickIcon = () => {
    setIconIndex((pre) => (pre + 1) % icons.length);
  };
  return (
    <>
      {' '}
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4}>
            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item xs={10}>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm hợp đồng R-Point"
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
          <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            <IconButton aria-label="filter" sx={{ mr: 2 }}>
              <Badge badgeContent={column.length - dataSelect.length} color="primary">
                <FilterListIcon />
              </Badge>
            </IconButton>

            <Select
              multiple
              value={selectedItems}
              displayEmpty
              renderValue={(selected) =>
                selected.length === 0 ? 'Sửa đổi cột' : `${selected.length} cột đã chọn`
              }
              size="small"
              sx={{ minWidth: 150 }}
            >
              <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {FilmsData.map((film) => (
                  <MenuItem key={film.id} value={film.id} onClick={() => handleItemClick(film.id)}>
                    <Checkbox checked={selectedItems.includes(film.id)} />
                    <ListItemText primary={film.title} />
                  </MenuItem>
                ))}
              </div>
            </Select>

            <IconButton
              aria-label="filter"
              onClick={handleClickIcon}
              sx={{
                ml: 1,
              }}
            >
              {createElement(icons[iconIndex])}
            </IconButton>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={selectedStartDate}
                  onChange={setSelectedStartDate}
                  renderInput={(params: any) => <TextField {...params} />}
                />
                <Typography>tới</Typography>
                <DatePicker
                  value={selectedEndDate}
                  onChange={setSelectedEndDate}
                  renderInput={(params: any) => <TextField {...params} />}
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
                {MAHd && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Mã hợp đồng</Typography>
                  </TableCell>
                )}{' '}
                {MAKH && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Mã khách hàng</Typography>
                  </TableCell>
                )}
                {NGT && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Ngày tạo</Typography>
                  </TableCell>
                )}
                {NGK && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Ngày ký</Typography>
                  </TableCell>
                )}
                {LTK && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Loại tài khoản</Typography>
                  </TableCell>
                )}
                {TCT && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Tên công ty</Typography>
                  </TableCell>
                )}
                {MST && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Mã số thuế</Typography>
                  </TableCell>
                )}
                {DC && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Địa chỉ</Typography>
                  </TableCell>
                )}
                {NDD && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Người đại diện</Typography>
                  </TableCell>
                )}
                {CV && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Chức vụ</Typography>
                  </TableCell>
                )}
                {SDT && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">SDT công ty</Typography>
                  </TableCell>
                )}
                {EMAIL && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Email công ty</Typography>
                  </TableCell>
                )}
                {TT && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Trạng thái</Typography>
                  </TableCell>
                )}
                {DHS && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Duyệt hồ sơ</Typography>
                  </TableCell>
                )}
                <TableCell
                  sx={{
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Typography variant="h6">Hợp đồng </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((item, index) => {
                return (
                  <TableRow key={index}>
                    {MAHd && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.id_contract}</Typography>
                      </TableCell>
                    )}
                    {MAKH && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.id_customer}</Typography>
                      </TableCell>
                    )}
                    {NGT && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.createdate}
                        </Typography>
                      </TableCell>
                    )}
                    {NGK && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.confirmdate}
                        </Typography>
                      </TableCell>
                    )}
                    {LTK && (
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
                    )}
                    {TCT && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.name_company}</Typography>
                      </TableCell>
                    )}
                    {MST && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.tax_code}</Typography>
                      </TableCell>
                    )}
                    {DC && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.address}
                        </Typography>
                      </TableCell>
                    )}
                    {NDD && (
                      <TableCell>
                        <Typography style={{ width: '200px' }} variant="subtitle2">
                          {item.representative}
                        </Typography>
                      </TableCell>
                    )}
                    {CV && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.position}
                        </Typography>
                      </TableCell>
                    )}
                    {SDT && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.phone_number}
                        </Typography>
                      </TableCell>
                    )}
                    {EMAIL && (
                      <TableCell>
                        <Typography style={{ width: '200px' }} variant="subtitle2">
                          {item.email}
                        </Typography>
                      </TableCell>
                    )}
                    {TT && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          <Chip label={item.status} />
                        </Typography>
                      </TableCell>
                    )}
                    {DHS && (
                      <TableCell>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          <Checkbox defaultChecked />
                        </Box>
                      </TableCell>
                    )}
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
        onPageChange={(_event, newPage) => handleChangePage(newPage)}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên mỗi trang"
      />
    </>
  );
};

export default ContractPointTable;
