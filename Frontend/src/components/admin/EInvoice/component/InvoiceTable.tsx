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
import React, { createElement, useState } from 'react';
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';

import { IconEye, IconSearch } from '@tabler/icons-react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DataInvoiceTable } from '../datatable/InvoiceTableData';
// interface PropsHeadTable {
//   head: string;
// }
interface FilmsData {
  id: number;
  title: string;
}
const FilmsData: FilmsData[] = [
  { id: 1, title: 'ID hóa đơn' },
  { id: 2, title: 'ID đơn hàng' },
  { id: 3, title: 'Ngày tạo' },
  { id: 4, title: 'Loại tài khoản' },
  { id: 5, title: 'Tên công ty' },
  { id: 6, title: 'Mã số thuế' },
  { id: 7, title: 'Nội dung hóa đơn' },
  { id: 8, title: 'DVT' },
  { id: 9, title: 'Số lượng' },
  { id: 10, title: 'Đơn giá' },
  { id: 11, title: 'Thành tiền' },
  { id: 12, title: 'VAT' },
  { id: 13, title: 'Tổng(VAT)' },
  { id: 14, title: 'Địa chỉ' },
  { id: 15, title: 'Người đại diện' },
  { id: 16, title: 'SĐT công ty' },
  { id: 17, title: 'Email công ty' },
  { id: 18, title: 'Trạng thái' },
  { id: 19, title: 'Hoạt động' },
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
  const [MADH, setMADH] = useState(true);
  const [NGT, setNGT] = useState(true);
  const [LTK, setLTK] = useState(true);
  const [TCT, setTCT] = useState(true);
  const [MST, setMST] = useState(true);
  const [ND, setND] = useState(true);

  const [DVT, setDVT] = useState(true);
  const [Quantity, setQuantity] = useState(true);
  const [DG, setDG] = useState(true);
  const [TT, setTT] = useState(true);
  const [VAT, setVAT] = useState(true);
  const [TongVAT, setTongVAT] = useState(true);
  const [DC, setDC] = useState(true);
  const [NDD, setNDD] = useState(true);
  const [SDT, setSDT] = useState(true);
  const [EMAIL, setEMAIL] = useState(true);
  const [TTT, setTTT] = useState(true);
  const [action, setAction] = useState(true);
  const [position, setPosition] = useState(true);
  const handleItemClick = (id: number) => {
    setSelectedItems((prev: any) =>
      prev.includes(id) ? prev.filter((item: any) => item !== id) : [...prev, id],
    );

    if (id === 1) {
      setMAHd(!MAHd);
    }
    if (id === 2) {
      setMADH(!MADH);
    }
    if (id === 3) {
      setNGT(!NGT);
    }

    if (id === 4) {
      setLTK(!LTK);
    }
    if (id === 5) {
      setTCT(!TCT);
    }
    if (id === 6) {
      setMST(!MST);
    }
    if (id === 7) {
      setND(!ND);
    }
    if (id === 8) {
      setDVT(!DVT);
    }
    if (id === 9) {
      setQuantity(!Quantity);
    }
    if (id === 10) {
      setDG(!DG);
    }
    if (id === 11) {
      setTT(!TT);
    }
    if (id === 12) {
      setVAT(!VAT);
    }
    if (id === 13) {
      setTongVAT(!TongVAT);
    }
    if (id === 14) {
      setDC(!DC);
    }
    if (id === 15) {
      setNDD(!NDD);
    }
    if (id === 16) {
      setSDT(!SDT);
    }
    if (id === 17) {
      setEMAIL(!EMAIL);
    }
    if (id === 18) {
      setTTT(!TTT);
    }
    if (id === 19) {
      setAction(!action);
    }
    if (id === 20) {
      setPosition(!position);
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
              {' '}
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
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">ID hóa đơn</Typography>
                  </TableCell>
                )}
                {MADH && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">ID đơn hàng</Typography>
                  </TableCell>
                )}
                {NGT && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Ngày tạo</Typography>
                  </TableCell>
                )}
                {LTK && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Loại tài khoản</Typography>
                  </TableCell>
                )}
                {TCT && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Tên công ty</Typography>
                  </TableCell>
                )}
                {MST && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Mã số thuế</Typography>
                  </TableCell>
                )}
                {ND && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Nội dung hóa đơn</Typography>
                  </TableCell>
                )}
                {DVT && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">DVT</Typography>
                  </TableCell>
                )}
                {Quantity && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Số lượng</Typography>
                  </TableCell>
                )}
                {DG && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Đơn giá</Typography>
                  </TableCell>
                )}
                {TT && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Thành tiền</Typography>
                  </TableCell>
                )}
                {VAT && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">VAT</Typography>
                  </TableCell>
                )}
                {TongVAT && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Tổng(VAT)</Typography>
                  </TableCell>
                )}
                {DC && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Địa chỉ</Typography>
                  </TableCell>
                )}
                {NDD && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Người đại diện</Typography>
                  </TableCell>
                )}
                {position && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Chức vụ</Typography>
                  </TableCell>
                )}
                {SDT && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">SĐT công ty</Typography>
                  </TableCell>
                )}
                {EMAIL && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Email công ty</Typography>
                  </TableCell>
                )}
                {TTT && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Trạng thái</Typography>
                  </TableCell>
                )}
                <TableCell sx={{ whiteSpace: 'nowrap' }}>
                  <Typography variant="h6">Hóa đơn</Typography>
                </TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>
                  <Typography variant="h6">Hoạt động</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((item: any, index: React.Key | null | undefined) => {
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
                      <Typography variant="subtitle2">{item.price}đ</Typography>
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
                      <Typography
                        sx={{
                          color: item.status ? 'success.main' : 'warning.main',
                        }}
                        variant="subtitle2"
                      >
                        {item.status ? 'Đã xuất' : 'Chưa xuất'}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Button style={{ width: '100px' }}>Xuất ngay</Button>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <IconButton>
                        <IconEye stroke={2} style={{ color: '#b1ffb3' }} />
                      </IconButton>
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
