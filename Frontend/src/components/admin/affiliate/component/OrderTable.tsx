import FilterListIcon from '@mui/icons-material/FilterList';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {
  Avatar,
  Badge,
  Box,
  Checkbox,
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
import { DataAffiliateTable } from '../datatable/OrderTableData';
// interface PropsHeadTable {
//   head: string;
// }
interface FilmsData {
  id: number;
  title: string;
}
const FilmsData: FilmsData[] = [
  { id: 1, title: 'ID đơn hàng' },
  { id: 2, title: 'ID Publisher' },
  { id: 3, title: 'Ngày mua' },
  { id: 4, title: 'Tên Publisher' },
  { id: 5, title: 'Email Publisher' },
  { id: 6, title: 'SĐT Publisher' },
  { id: 7, title: 'Khách hàng' },
  { id: 8, title: 'Email' },
  { id: 9, title: 'SĐT' },
  { id: 10, title: 'Tên gói nạp' },
  { id: 11, title: 'Số point' },
  { id: 12, title: 'Giá trị đơn hàng' },
  { id: 13, title: 'Hoa hồng' },
  { id: 14, title: 'Trạng thái' },
];
// const HeadTable: PropsHeadTable[] = [
//   {
//     head: 'ID đơn hàng',
//   },
//   {
//     head: 'ID Publisher',
//   },
//   {
//     head: 'Ngày mua',
//   },
//   {
//     head: 'Tên Publisher',
//   },
//   {
//     head: 'Email Publisher',
//   },
//   {
//     head: 'SĐT Publisher',
//   },
//   {
//     head: 'Khách hàng',
//   },
//   {
//     head: 'Email',
//   },
//   {
//     head: 'SĐT',
//   },
//   {
//     head: 'Tên gói nạp',
//   },
//   {
//     head: 'Số point',
//   },
//   {
//     head: 'Giá trị đơn hàng',
//   },
//   {
//     head: 'Hoa hồng',
//   },
//   {
//     head: 'Trạng thái',
//   },
// ];

const OrderTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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
  const paginatedData = DataAffiliateTable.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );
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
                  placeholder="Tìm kiếm trợ lý"
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
              {FilmsData.map((film) => (
                <MenuItem key={film.id} value={film.id} onClick={() => handleItemClick(film.id)}>
                  <Checkbox checked={selectedItems.includes(film.id)} />
                  <ListItemText primary={film.title} />
                </MenuItem>
              ))}
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
                {IDPublisher && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">ID đơn hàng</Typography>
                  </TableCell>
                )}
                {DoiTac && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">ID Publisher</Typography>
                  </TableCell>
                )}
                {Email && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Ngày mua</Typography>
                  </TableCell>
                )}
                {SDT && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Tên Publisher</Typography>
                  </TableCell>
                )}
                {LoaiHinh && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Email Publisher</Typography>
                  </TableCell>
                )}
                {NgayDangKy && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">SĐT Publisher</Typography>
                  </TableCell>
                )}
                {TrangThaiTaiKhoan && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Khách hàng</Typography>
                  </TableCell>
                )}
                {Rank && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Email</Typography>
                  </TableCell>
                )}
                {HoSo && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">SĐT</Typography>
                  </TableCell>
                )}
                {HopDongAffiliate && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Tên gói nạp</Typography>
                  </TableCell>
                )}
                {TongHoaHong && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Số point</Typography>
                  </TableCell>
                )}
                {Click && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Giá trị đơn hàng</Typography>
                  </TableCell>
                )}
                {KhachHang && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Hoa hồng</Typography>
                  </TableCell>
                )}
                {DonHang && (
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="h6">Trạng thái</Typography>
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((item, index) => {
                // const isItemSelected = isSelected(item.id);
                // console.log(isItemSelected);

                return (
                  <TableRow
                    key={index}
                    // selected={isItemSelected}
                  >
                    {IDPublisher && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.id_order}</Typography>
                      </TableCell>
                    )}
                    {DoiTac && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.id_publisher}</Typography>
                      </TableCell>
                    )}
                    {Email && (
                      <TableCell>
                        <Typography style={{ width: '100px' }} variant="subtitle2">
                          {item.createdate}
                        </Typography>
                      </TableCell>
                    )}
                    {SDT && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.name_publisher}</Typography>
                      </TableCell>
                    )}
                    {LoaiHinh && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.email_publisher}</Typography>
                      </TableCell>
                    )}
                    {NgayDangKy && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.phonenumber_publisher}</Typography>
                      </TableCell>
                    )}
                    {TrangThaiTaiKhoan && (
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
                            {item.name_customer}
                          </Typography>
                        </Box>
                      </TableCell>
                    )}
                    {Rank && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.email_customer}</Typography>
                      </TableCell>
                    )}
                    {HoSo && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.phonenumber_customer}</Typography>
                      </TableCell>
                    )}
                    {HopDongAffiliate && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.package}</Typography>
                      </TableCell>
                    )}
                    {TongHoaHong && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.numberpoint}</Typography>
                      </TableCell>
                    )}
                    {Click && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.value}</Typography>
                      </TableCell>
                    )}
                    {KhachHang && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.commission}</Typography>
                      </TableCell>
                    )}
                    {DonHang && (
                      <TableCell>
                        <Typography variant="subtitle2">{item.status}</Typography>
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
        count={DataAffiliateTable.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_event, newPage) => handleChangePage(newPage)}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên mỗi trang"
      />
    </>
  );
};

export default OrderTable;
