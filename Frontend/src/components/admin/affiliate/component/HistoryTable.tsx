import {
  Avatar,
  Box,
  Button,
  Checkbox,
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
import { DataHistoryTable } from '../datatable/OrderTableData';
import FilterListIcon from '@mui/icons-material/FilterList';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {
  Badge,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconSearch } from '@tabler/icons-react';
import { createElement } from 'react';
interface PropsHeadTable {
  head: string;
}

const HeadTable: PropsHeadTable[] = [
  {
    head: 'ID thanh toán',
  },
  {
    head: 'Khách hàng',
  },
  {
    head: 'Ngày yêu cầu',
  },
  {
    head: 'Ngày hoàn tất',
  },
  {
    head: 'Email',
  },
  {
    head: 'SĐT',
  },
  {
    head: 'Số tiền rút',
  },
  {
    head: 'Số tài khoản',
  },
  {
    head: 'Ngân hàng',
  },
  {
    head: 'Chủ tải khoản',
  },
  {
    head: 'Chi nhánh',
  },
  {
    head: 'Hóa đơn',
  },
  {
    head: 'Trạng thái',
  },
  {
    head: 'Duyệt hóa đơn',
  },
  {
    head: 'Đã thanh toán',
  },
  {
    head: 'Thông báo',
  },
];
interface FilmsData {
  id: number;
  title: string;
}
const FilmsData: FilmsData[] = [
  { id: 1, title: 'ID thanh toán' },
  { id: 2, title: 'Khách hàng' },
  { id: 3, title: 'Ngày yêu cầu' },
  { id: 4, title: 'Ngày hoàn tất' },
  { id: 5, title: 'Email' },
  { id: 6, title: 'SĐT' },
  { id: 7, title: 'Số tiền rút' },
  { id: 8, title: 'Số tài khoản' },
  { id: 9, title: 'Ngân hàng' },
  { id: 10, title: 'Chủ tải khoản' },
  { id: 11, title: 'Chi nhánh' },
  { id: 12, title: 'Hóa đơn' },
  { id: 13, title: 'Trạng thái' },
  { id: 14, title: 'Duyệt hóa đơn' },
  { id: 15, title: 'Đã thanh toán' },
  { id: 16, title: 'Thông báo' },
];
const HistoryTable = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Chờ duyệt':
        return 'warning'; // Yellow or custom color
      case 'Từ chối':
        return 'error'; // Red or custom color
      case 'Đã đi tiền':
        return 'success'; // Green or custom color
      default:
        return 'default'; // Gray or default color
    }
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = DataHistoryTable.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [IDThanhToan, setIDThanhToan] = useState(true);
  const [KhachHang, setKhachHang] = useState(true);
  const [NgayYeuCau, setNgayYeuCau] = useState(true);
  const [NgayHoanTat, setNgayHoanTat] = useState(true);
  const [Email, setEmail] = useState(true);
  const [SDT, setSDT] = useState(true);
  const [SoTienRut, setSoTienRut] = useState(true);
  const [SoTaiKhoan, setSoTaiKhoan] = useState(true);
  const [NganHang, setNganHang] = useState(true);
  const [ChuTaiKhoan, setChuTaiKhoan] = useState(true);
  const [ChiNhanh, setChiNhanh] = useState(true);
  const [HoaDon, setHoaDon] = useState(true);
  const [TrangThai, setTrangThai] = useState(true);
  const [DuyetHoaDon, setDuyetHoaDon] = useState(true);
  const [DaThanhToan, setDaThanhToan] = useState(true);
  const [ThongBao, setThongBao] = useState(true);

  const handleItemClick = (id: number) => {
    setSelectedItems((prev: any) =>
      prev.includes(id) ? prev.filter((item: any) => item !== id) : [...prev, id],
    );

    switch (id) {
      case 1:
        setIDThanhToan(!IDThanhToan);
        break;
      case 2:
        setKhachHang(!KhachHang);
        break;
      case 3:
        setNgayYeuCau(!NgayYeuCau);
        break;
      case 4:
        setNgayHoanTat(!NgayHoanTat);
        break;
      case 5:
        setEmail(!Email);
        break;
      case 6:
        setSDT(!SDT);
        break;
      case 7:
        setSoTienRut(!SoTienRut);
        break;
      case 8:
        setSoTaiKhoan(!SoTaiKhoan);
        break;
      case 9:
        setNganHang(!NganHang);
        break;
      case 10:
        setChuTaiKhoan(!ChuTaiKhoan);
        break;
      case 11:
        setChiNhanh(!ChiNhanh);
        break;
      case 12:
        setHoaDon(!HoaDon);
        break;
      case 13:
        setTrangThai(!TrangThai);
        break;
      case 14:
        setDuyetHoaDon(!DuyetHoaDon);
        break;
      case 15:
        setDaThanhToan(!DaThanhToan);
        break;
      case 16:
        setThongBao(!ThongBao);
        break;
      default:
        break;
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
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextField
              id="outlined-search"
              placeholder="Tìm kiếm lịch sử rút tiền"
              size="small"
              type="search"
              variant="outlined"
              inputProps={{ 'aria-label': 'Search Followers' }}
              sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconSearch size="12" />
                  </InputAdornment>
                ),
              }}
              fullWidth={true}
            />
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
              <Badge badgeContent={selectedItems.length} color="primary">
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
                {IDThanhToan && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">ID thanh toán</Typography>
                  </TableCell>
                )}
                {KhachHang && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Khách hàng</Typography>
                  </TableCell>
                )}
                {NgayYeuCau && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Ngày yêu cầu</Typography>
                  </TableCell>
                )}
                {NgayHoanTat && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Ngày hoàn tất</Typography>
                  </TableCell>
                )}
                {Email && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Email</Typography>
                  </TableCell>
                )}
                {SDT && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">SĐT</Typography>
                  </TableCell>
                )}
                {SoTienRut && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Số tiền rút</Typography>
                  </TableCell>
                )}
                {SoTaiKhoan && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Số tài khoản</Typography>
                  </TableCell>
                )}
                {NganHang && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Ngân hàng</Typography>
                  </TableCell>
                )}
                {ChuTaiKhoan && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Chủ tài khoản</Typography>
                  </TableCell>
                )}
                {ChiNhanh && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Chi nhánh</Typography>
                  </TableCell>
                )}
                {HoaDon && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Hóa đơn</Typography>
                  </TableCell>
                )}
                {TrangThai && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Trạng thái</Typography>
                  </TableCell>
                )}
                {DuyetHoaDon && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Duyệt hóa đơn</Typography>
                  </TableCell>
                )}
                {DaThanhToan && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Đã thanh toán</Typography>
                  </TableCell>
                )}
                {ThongBao && (
                  <TableCell
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">Thông báo</Typography>
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((item, index) => {
                return (
                  <TableRow key={index}>
                    {IDThanhToan && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.id_checkout}</Typography>
                      </TableCell>
                    )}
                    {KhachHang && (
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
                            {item.name_publisher}
                          </Typography>
                        </Box>
                      </TableCell>
                    )}
                    {NgayYeuCau && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.date_request}</Typography>
                      </TableCell>
                    )}
                    {NgayHoanTat && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.date_done}
                        </Typography>
                      </TableCell>
                    )}
                    {Email && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.email}</Typography>
                      </TableCell>
                    )}
                    {SDT && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.phone_number}</Typography>
                      </TableCell>
                    )}
                    {SoTienRut && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.bank_amount}</Typography>
                      </TableCell>
                    )}
                    {SoTaiKhoan && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.bank_number}</Typography>
                      </TableCell>
                    )}
                    {NganHang && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.bank_name}</Typography>
                      </TableCell>
                    )}
                    {ChuTaiKhoan && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.own_bank}</Typography>
                      </TableCell>
                    )}
                    {ChiNhanh && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.branch}
                        </Typography>
                      </TableCell>
                    )}
                    {HoaDon && (
                      <TableCell>
                        <Typography variant="subtitle2">
                          <Button style={{ width: '100px' }}>Tải xuống</Button>
                        </Typography>
                      </TableCell>
                    )}
                    {TrangThai && (
                      <TableCell>
                        <Typography variant="subtitle2">
                          <Chip label={item.status} color={getStatusColor(item.status)} />
                        </Typography>
                      </TableCell>
                    )}
                    {DuyetHoaDon && (
                      <TableCell>
                        <Checkbox defaultChecked />
                      </TableCell>
                    )}
                    {DaThanhToan && (
                      <TableCell>
                        <Checkbox defaultChecked />
                      </TableCell>
                    )}
                    {ThongBao && (
                      <TableCell>
                        <Button style={{ width: '100px' }}>Gửi email</Button>
                      </TableCell>
                    )}
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
        onPageChange={(_event, newPage) => handleChangePage(newPage)}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên mỗi trang"
      />
    </>
  );
};

export default HistoryTable;
