// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  Badge,
  Checkbox,
  Fab,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from '@mui/material';
import { createElement, useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';

<<<<<<< HEAD
import FilterListIcon from '@mui/icons-material/FilterList';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import Products from 'src/components/apps/sell/Product';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

=======
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import ProductAdmin from 'src/views/admin/product/product';
>>>>>>> main
const BCrumb = [
  {
    to: '/',
    title: 'Trang Chủ',
  },
  { to: '/', title: 'Quản lý sản phẩm' },
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
const Product = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleItemClick = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const [iconIndex, setIconIndex] = useState<number>(0);
  const icons = [SwapVertIcon, SouthIcon, NorthIcon];

  const handleClickIcon = () => {
    setIconIndex((pre) => (pre + 1) % icons.length);
  };
  return (
    <PageContainer title="User Profile" description="this is User Profile page">
      <BannerPage title="Quản lý sản phẩm  " items={BCrumb} />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid item xs={4} sm={4} md={4}>
              <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Tooltip title="Thêm mới sản phẩm" sx={{ mb: '15px' }}>
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
              <Tooltip title="Cao Thấp" placement="top">
                <IconButton
                  aria-label="filter"
                  onClick={handleClickIcon}
                  sx={{
                    ml: 1,
                  }}
                >
                  {createElement(icons[iconIndex])}
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
        <Grid item sm={12}>
          <ProductAdmin />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Product;
