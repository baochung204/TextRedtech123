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
interface HeadProps {
  head: string;
}
const HeadTable: HeadProps[] = [
  {
    head: 'ID',
  },
  {
    head: 'Danh mục',
  },
  {
    head: 'Ảnh',
  },
  {
    head: 'Tên sản phẩm',
  },
  {
    head: 'Giá niêm yết',
  },
  {
    head: 'Giá khuyến mãi',
  },
  {
    head: 'Level',
  },
  {
    head: 'Tags',
  },
  {
    head: 'Số lượng mua',
  },
  {
    head: 'Tổng doanh thu',
  },
  {
    head: 'Tỉ trọng doanh thu',
  },
];
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
  { id: 1, title: 'File' },
  { id: 2, title: 'Dung lượng' },
  { id: 3, title: 'Functions' },
  { id: 4, title: 'Token huấn luyện' },
  { id: 5, title: 'Ngày tạo' },
  { id: 6, title: 'Vòng quay trung bình' },
  { id: 7, title: 'khách hàng' },
  { id: 8, title: 'Đơn hàng' },
  { id: 9, title: 'CVR' },
  { id: 10, title: 'GMV' },
  { id: 11, title: 'Chi phí' },
  { id: 12, title: 'Chi phí/Doanh thu' },
  { id: 13, title: 'Chi phí/Đơn hàng' },
  { id: 14, title: 'Chi phí/Khách hàng' },
  { id: 15, title: 'Chiến lược' },
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
  //   const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  //   const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);

  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);

  const handleItemClick = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const [iconIndex, setIconIndex] = React.useState<number>(0);
  const icons = [SwapVertIcon, SouthIcon, NorthIcon];

  const handleClickIcon = () => {
    setIconIndex((pre) => (pre + 1) % icons.length);
  };

  const paginatedData = ProductTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  return (
    <PageContainer title="Pagination Table" description="this is Pagination Table page">
      <BannerPage title="Quản lý sản phẩm" items={BCrumb} />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} totalColumn={DataBox.length} />
        </Grid>
        <Grid item xs={12}>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                {FilmsData.map((film) => (
                  <MenuItem key={film.id} value={film.id} onClick={() => handleItemClick(film.id)}>
                    <Checkbox checked={selectedItems.includes(film.id)} />
                    <ListItemText primary={film.title} />
                  </MenuItem>
                ))}
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
        </Grid>
        <Grid item xs={12}>
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
                          <Typography variant="subtitle2">{item.danhmuc}</Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="subtitle2">
                            <Avatar src={item.anh} alt={item.anh} />
                          </Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="subtitle2">{item.tensanpham}</Typography>
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
                            <Typography variant="subtitle2">{item.gianiemyet}</Typography>
                            <img src={icontext} alt="" width={20} />
                          </Box>
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
                            <Typography variant="subtitle2">{item.giakhuyenmai}</Typography>
                            <img src={icontext} alt="" width={20} />
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="subtitle2">{item.level}</Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="subtitle2">{item.tags}</Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="subtitle2">{item.soluongmua}</Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="subtitle2">{item.tongdoanhthu}</Typography>
                        </TableCell>
                        <TableCell
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Typography variant="subtitle2">{item.titrongdoanthu}</Typography>
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
              count={ProductTable.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(_event, newPage) => handleChangePage(newPage)}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default BuyProduct;
