import FilterListIcon from '@mui/icons-material/FilterList';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {
  Avatar,
  Badge,
  Box,
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
import { DataHistoryTable, DataPublishersTable } from '../datatable/OrderTableData';


// const HeadTable: PropsHeadTable[] = [
//   {
//     head: 'ID publisher',
//   },
//   {
//     head: 'Đối tác',
//   },
//   {
//     head: 'Email',
//   },
//   {
//     head: 'SĐT',
//   },
//   {
//     head: 'Loại hình',
//   },
//   {
//     head: 'Ngày đăng ký',
//   },
//   {
//     head: 'Trạng thái tài khoản',
//   },
//   {
//     head: 'Rank',
//   },
//   {
//     head: 'Hồ sơ',
//   },
//   {
//     head: 'Hợp đồng Affiliate',
//   },
//   {
//     head: 'Tổng hoa hồng',
//   },
//   {
//     head: 'Click',
//   },
//   {
//     head: 'Khách hàng',
//   },
//   {
//     head: 'Đơn hàng',
//   },
//   {
//     head: 'Doanh thu',
//   },
//   {
//     head: 'CVR',
//   },
//   {
//     head: 'Số dư ví',
//   },
//   {
//     head: 'Đang xử lý',
//   },
//   {
//     head: 'Đã hoàn thành',
//   },
// ];

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

// const getStatusAccountColor = (status: string) => {
//   switch (status) {
//     case 'Hoạt động':
//       return 'success'; // Green for approved
//     case 'Chờ duyệt':
//       return 'warning'; // Yellow for pending approval
//     case 'Từ chối':
//       return 'error'; // Red for rejected
//     case 'Chưa đăng ký':
//       return 'default'; // Gray for not yet sent
//     default:
//       return 'default'; // Gray for any unrecognized status
//   }
// };
interface FilmsData {
  id: number;
  title: string;
}
const FilmsData: FilmsData[] = [
  { id: 1, title: 'ID publisher' },
  { id: 2, title: 'Đối tác' },
  { id: 3, title: 'Email' },
  { id: 4, title: 'SĐT' },
  { id: 5, title: 'Loại hình' },
  { id: 6, title: 'Ngày đăng ký' },
  { id: 7, title: 'Trạng thái tài khoản' },
  { id: 8, title: 'Rank' },
  { id: 9, title: 'Hồ sơ' },
  { id: 10, title: 'Hợp đồng Affiliate' },
  { id: 11, title: 'Tổng hoa hồng' },
  { id: 12, title: 'Click' },
  { id: 13, title: 'Khách hàng' },
  { id: 14, title: 'Đơn hàng' },
  { id: 15, title: 'Doanh thu' },
  { id: 16, title: 'CVR' },
  { id: 17, title: 'Số dư ví' },
  { id: 18, title: 'Đang xử lý' },
  { id: 19, title: 'Đã hoàn thành' },
];
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
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [IDPublisher, setIDPublisher] = useState(true);
  const [DoiTac, setDoiTac] = useState(true);
  const [Email, setEmail] = useState(true);
  const [SDT, setSDT] = useState(true);
  const [LoaiHinh, setLoaiHinh] = useState(true);
  const [NgayDangKy, setNgayDangKy] = useState(true);
  const [TrangThaiTaiKhoan, setTrangThaiTaiKhoan] = useState(true);
  const [Rank, setRank] = useState(true);
  const [HoSo, setHoSo] = useState(true);
  const [HopDongAffiliate, setHopDongAffiliate] = useState(true);
  const [TongHoaHong, setTongHoaHong] = useState(true);
  const [Click, setClick] = useState(true);
  const [KhachHang, setKhachHang] = useState(true);
  const [DonHang, setDonHang] = useState(true);
  const [DoanhThu, setDoanhThu] = useState(true);
  const [CVR, setCVR] = useState(true);
  const [SoDuVi, setSoDuVi] = useState(true);
  const [DangXuLy, setDangXuLy] = useState(true);
  const [DaHoanThanh, setDaHoanThanh] = useState(true);

  const handleItemClick = (id: number) => {
    setSelectedItems((prev: any) =>
      prev.includes(id) ? prev.filter((item: any) => item !== id) : [...prev, id],
    );

    switch (id) {
      case 1:
        setIDPublisher(!IDPublisher);
        break;
      case 2:
        setDoiTac(!DoiTac);
        break;
      case 3:
        setEmail(!Email);
        break;
      case 4:
        setSDT(!SDT);
        break;
      case 5:
        setLoaiHinh(!LoaiHinh);
        break;
      case 6:
        setNgayDangKy(!NgayDangKy);
        break;
      case 7:
        setTrangThaiTaiKhoan(!TrangThaiTaiKhoan);
        break;
      case 8:
        setRank(!Rank);
        break;
      case 9:
        setHoSo(!HoSo);
        break;
      case 10:
        setHopDongAffiliate(!HopDongAffiliate);
        break;
      case 11:
        setTongHoaHong(!TongHoaHong);
        break;
      case 12:
        setClick(!Click);
        break;
      case 13:
        setKhachHang(!KhachHang);
        break;
      case 14:
        setDonHang(!DonHang);
        break;
      case 15:
        setDoanhThu(!DoanhThu);
        break;
      case 16:
        setCVR(!CVR);
        break;
      case 17:
        setSoDuVi(!SoDuVi);
        break;
      case 18:
        setDangXuLy(!DangXuLy);
        break;
      case 19:
        setDaHoanThanh(!DaHoanThanh);
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
          <Grid item xs={4} sm={4} md={4}>
            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item xs={10}>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm publisher"
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
      <TableContainer sx={{ px: 2 }}>
        <Scrollbar_x>
          <Table>
            <TableHead>
              <TableRow>
                {IDPublisher && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">ID publisher</Typography>
                  </TableCell>
                )}
                {DoiTac && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Đối tác</Typography>
                  </TableCell>
                )}
                {Email && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Email</Typography>
                  </TableCell>
                )}
                {SDT && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">SĐT</Typography>
                  </TableCell>
                )}
                {LoaiHinh && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Loại hình</Typography>
                  </TableCell>
                )}
                {NgayDangKy && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Ngày đăng ký</Typography>
                  </TableCell>
                )}
                {TrangThaiTaiKhoan && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Trạng thái tài khoản</Typography>
                  </TableCell>
                )}
                {Rank && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Rank</Typography>
                  </TableCell>
                )}
                {HoSo && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Hồ sơ</Typography>
                  </TableCell>
                )}
                {HopDongAffiliate && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Hợp đồng Affiliate</Typography>
                  </TableCell>
                )}
                {TongHoaHong && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Tổng hoa hồng</Typography>
                  </TableCell>
                )}
                {Click && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Click</Typography>
                  </TableCell>
                )}
                {KhachHang && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Khách hàng</Typography>
                  </TableCell>
                )}
                {DonHang && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Đơn hàng</Typography>
                  </TableCell>
                )}
                {DoanhThu && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Doanh thu</Typography>
                  </TableCell>
                )}
                {CVR && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">CVR</Typography>
                  </TableCell>
                )}
                {SoDuVi && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Số dư ví</Typography>
                  </TableCell>
                )}
                {DangXuLy && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Đang xử lý</Typography>
                  </TableCell>
                )}
                {DaHoanThanh && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Đã hoàn thành</Typography>
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((item, index) => {
                return (
                  <TableRow key={index}>
                    {IDPublisher && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.id_publisher}</Typography>
                      </TableCell>
                    )}
                    {DoiTac && (
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
                    )}
                    {Email && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.email}</Typography>
                      </TableCell>
                    )}
                    {SDT && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.phone_number}
                        </Typography>
                      </TableCell>
                    )}
                    {LoaiHinh && (
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
                    )}
                    {NgayDangKy && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.create_date}</Typography>
                      </TableCell>
                    )}
                    {TrangThaiTaiKhoan && (
                      <TableCell>
                        <Chip
                          label={item.type_account}
                          // color={getStatusAccountColor(item.type_account)}
                        />
                      </TableCell>
                    )}
                    {Rank && (
                      <TableCell>
                        <Typography sx={{ width: '100px' }} variant="subtitle2">
                          {item.rank}
                        </Typography>
                      </TableCell>
                    )}
                    {HoSo && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          <Chip label={item.contract} color={getStatusColor(item.contract)} />
                        </Typography>
                      </TableCell>
                    )}
                    {HopDongAffiliate && (
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
                    )}
                    {TongHoaHong && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.total_commission}
                        </Typography>
                      </TableCell>
                    )}
                    {Click && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.click}
                        </Typography>
                      </TableCell>
                    )}
                    {KhachHang && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.customer}
                        </Typography>
                      </TableCell>
                    )}
                    {DonHang && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.order}
                        </Typography>
                      </TableCell>
                    )}
                    {DoanhThu && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.revenue}
                        </Typography>
                      </TableCell>
                    )}
                    {CVR && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.cvr}
                        </Typography>
                      </TableCell>
                    )}
                    {SoDuVi && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.account_balance}
                        </Typography>
                      </TableCell>
                    )}
                    {DangXuLy && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.processing}
                        </Typography>
                      </TableCell>
                    )}
                    {DaHoanThanh && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.paid}
                        </Typography>
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
        labelRowsPerPage="Số dòng trên trang"
      />
    </>
  );
};

export default PublisherTable;
