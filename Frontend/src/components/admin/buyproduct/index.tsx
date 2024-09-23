import FilterListIcon from '@mui/icons-material/FilterList';
import NorthIcon from '@mui/icons-material/North';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
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
  Tooltip,
  Typography,
} from '@mui/material';
import { IconSearch } from '@tabler/icons-react';
import * as React from 'react';
import icontext from 'src/assets/images/logos/R-Point.png';
import PageContainer from 'src/components/container/PageContainer';
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import ProductTable from './ProductData';
// interface EnhancedTableToolbarProps {
//     numSelected: number;
//     handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
//     search: string;
// }
// const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
//     const { numSelected, handleSearch, search } = props;

//     return (
//         <Toolbar
//             sx={{
//                 pl: { sm: 2 },
//                 pr: { xs: 1, sm: 1 },
//                 ...(numSelected > 0 && {
//                     bgcolor: (theme) =>
//                         alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//                 }),
//             }}
//         >
//             {numSelected > 0 ? (
//                 <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle2" component="div">
//                     {numSelected} selected
//                 </Typography>
//             ) : (
//                 <Box sx={{ flex: '1 1 100%' }}>
//                     <TextField
//                         InputProps={{
//                             startAdornment: (
//                                 <InputAdornment position="start">
//                                     <IconSearch size="1.1rem" />
//                                 </InputAdornment>
//                             ),
//                         }}
//                         placeholder="Tìm kiếm sản phẩm"
//                         size="small"
//                         onChange={handleSearch}
//                         value={search}
//                     />
//                 </Box>
//             )}

//             {numSelected > 0 ? (
//                 <Tooltip title="Delete">
//                     <IconButton>
//                         <IconTrash width="18" />
//                     </IconButton>
//                 </Tooltip>
//             ) : (
//                 <Tooltip title="Filter list">
//                     <IconButton>
//                         <IconFilter size="1.2rem" />
//                     </IconButton>
//                 </Tooltip>
//             )}
//         </Toolbar>
//     );
// };


interface StyleProps {
  bgColor: string;
  color: string;
  title: string;
  total: string;
  icons: JSX.Element;
}
const DataBox: StyleProps[] = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Khách hàng',
    total: '6251',
    icons: (
      <PeopleAltIcon
        sx={{
          fontSize: 30,
        }}
      />
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Khách trả phí',
    total: '1204 (33%)',
    icons: (
      <PeopleAltIcon
        sx={{
          fontSize: 30,
        }}
      />
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'CN/DN',
    total: '3251/3000',
    icons: (
      <PeopleAltIcon
        sx={{
          fontSize: 30,
        }}
      />
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Doanh thu',
    total: '15.126.422.555đ',
    icons: (
      <PeopleAltIcon
        sx={{
          fontSize: 30,
        }}
      />
    ),
  },
  {
    bgColor: 'info.light',
    color: 'info.main',
    title: 'Số dư R-Point',
    total: '52.126.422',
    icons: (
      <PeopleAltIcon
        sx={{
          fontSize: 30,
        }}
      />
    ),
  },
];
const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  { to: 'admin/buy/products', title: 'Danh mục sản phẩm' },
];
interface FilmsData {
  id: number;
  title: string;
}
const FilmsData: FilmsData[] = [
  { id: 1, title: 'ID' },
  { id: 2, title: 'Danh mục' },
  { id: 3, title: 'Ảnh' },
  { id: 4, title: 'Tên sản phẩm' },
  { id: 5, title: 'Giá niêm yết' },
  { id: 6, title: 'Giá khuyến mãi' },
  { id: 7, title: 'Level' },
  { id: 8, title: 'Tags' },
  { id: 9, title: 'Số lượng mua' },
  { id: 10, title: 'Tổng doanh thu' },
  { id: 11, title: 'Tỉ trọng doanh thu' },
];
const BuyProduct = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [selected] = React.useState<readonly string[]>([]);

  // const [search, setSearch] = React.useState('');
  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(event.target.value);
  // };

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [ID, setID] = React.useState(true);
  const [DanhMuc, setDanhMuc] = React.useState(true);
  const [Anh, setAnh] = React.useState(true);
  const [TenSanPham, setTenSanPham] = React.useState(true);
  const [GiaNiemYet, setGiaNiemYet] = React.useState(true);
  const [GiaKhuyenMai, setGiaKhuyenMai] = React.useState(true);
  const [Level, setLevel] = React.useState(true);
  const [Tags, setTags] = React.useState(true);
  const [SoLuongMua, setSoLuongMua] = React.useState(true);
  const [TongDoanhThu, setTongDoanhThu] = React.useState(true);
  const [TiTrongDoanhThu, setTiTrongDoanhThu] = React.useState(true);

  const handleItemClick = (id: number) => {
    setSelectedItems((prev: any) =>
      prev.includes(id) ? prev.filter((item: any) => item !== id) : [...prev, id],
    );

    switch (id) {
      case 1:
        setID(!ID);
        break;
      case 2:
        setDanhMuc(!DanhMuc);
        break;
      case 3:
        setAnh(!Anh);
        break;
      case 4:
        setTenSanPham(!TenSanPham);
        break;
      case 5:
        setGiaNiemYet(!GiaNiemYet);
        break;
      case 6:
        setGiaKhuyenMai(!GiaKhuyenMai);
        break;
      case 7:
        setLevel(!Level);
        break;
      case 8:
        setTags(!Tags);
        break;
      case 9:
        setSoLuongMua(!SoLuongMua);
        break;
      case 10:
        setTongDoanhThu(!TongDoanhThu);
        break;
      case 11:
        setTiTrongDoanhThu(!TiTrongDoanhThu);
        break;
      default:
        break;
    }
  };
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);

  const [iconIndex, setIconIndex] = React.useState<number>(0);
  const icons = [SwapVertIcon, SouthIcon, NorthIcon];

  const handleClickIcon = () => {
    setIconIndex((pre) => (pre + 1) % icons.length);
  };

  const paginatedData = ProductTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  return (
    <PageContainer title="Pagination Table" description="this is Pagination Table page">
      <BannerPage title="Quản lý sản phẩm" items={BCrumb} />

      <Grid item xs={12}>
        <TopCard dataSource={DataBox} totalColumn={DataBox.length} />
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          sx={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0px' }}
        >
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
              placeholder="Tìm kiếm sản phẩm"
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

            <Tooltip title="Sắp xếp" placement="top">
              <IconButton
                aria-label="filter"
                onClick={handleClickIcon}
                sx={{
                  ml: 1,
                }}
              >
                {React.createElement(icons[iconIndex])}
              </IconButton>
            </Tooltip>
          </Grid>

          {/* <Grid item xs={4}>
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
            </Grid> */}
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Scrollbar_x>
              <Table>
                <TableHead>
                  <TableRow>
                    {ID && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="h6">ID</Typography>
                      </TableCell>
                    )}
                    {DanhMuc && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="h6">Danh mục</Typography>
                      </TableCell>
                    )}
                    {Anh && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="h6">Ảnh</Typography>
                      </TableCell>
                    )}
                    {TenSanPham && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="h6">Tên sản phẩm</Typography>
                      </TableCell>
                    )}
                    {GiaNiemYet && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="h6">Giá niêm yết</Typography>
                      </TableCell>
                    )}
                    {GiaKhuyenMai && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="h6">Giá khuyến mãi</Typography>
                      </TableCell>
                    )}
                    {Level && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="h6">Level</Typography>
                      </TableCell>
                    )}
                    {Tags && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="h6">Tags</Typography>
                      </TableCell>
                    )}
                    {SoLuongMua && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="h6">Số lượng mua</Typography>
                      </TableCell>
                    )}
                    {TongDoanhThu && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="h6">Tổng doanh thu</Typography>
                      </TableCell>
                    )}
                    {TiTrongDoanhThu && (
                      <TableCell
                        sx={{
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Typography variant="h6">Tỉ trọng doanh thu</Typography>
                      </TableCell>
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedData.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        {ID && (
                          <TableCell
                            sx={{
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Typography variant="subtitle2">{item.id}</Typography>
                          </TableCell>
                        )}
                        {DanhMuc && (
                          <TableCell
                            sx={{
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Typography variant="subtitle2">{item.danhmuc}</Typography>
                          </TableCell>
                        )}
                        {Anh && (
                          <TableCell
                            sx={{
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Typography variant="subtitle2">
                              <Avatar src={item.anh} alt={item.anh} />
                            </Typography>
                          </TableCell>
                        )}
                        {TenSanPham && (
                          <TableCell
                            sx={{
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Typography variant="subtitle2">{item.tensanpham}</Typography>
                          </TableCell>
                        )}
                        {GiaNiemYet && (
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
                              <Typography variant="subtitle2">{item.gianiemyet}</Typography>
                              <img src={icontext} alt="" width={20} />
                            </Box>
                          </TableCell>
                        )}
                        {GiaKhuyenMai && (
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
                              <Typography variant="subtitle2">{item.giakhuyenmai}</Typography>
                              <img src={icontext} alt="" width={20} />
                            </Box>
                          </TableCell>
                        )}
                        {Level && (
                          <TableCell
                            sx={{
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Typography variant="subtitle2">{item.level}</Typography>
                          </TableCell>
                        )}
                        {Tags && (
                          <TableCell
                            sx={{
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Typography variant="subtitle2">{item.tags}</Typography>
                          </TableCell>
                        )}
                        {SoLuongMua && (
                          <TableCell
                            sx={{
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Typography variant="subtitle2">{item.soluongmua}</Typography>
                          </TableCell>
                        )}
                        {TongDoanhThu && (
                          <TableCell
                            sx={{
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Typography variant="subtitle2">{item.tongdoanhthu}</Typography>
                          </TableCell>
                        )}
                        {TiTrongDoanhThu && (
                          <TableCell
                            sx={{
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Typography variant="subtitle2">{item.titrongdoanthu}</Typography>
                          </TableCell>
                        )}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Scrollbar_x>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={ProductTable.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(_event, newPage) => handleChangePage(newPage)}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Số hàng trên mỗi trang"
            />
          </TableContainer>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default BuyProduct;
