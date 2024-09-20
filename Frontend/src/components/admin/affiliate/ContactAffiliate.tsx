import FilterListIcon from '@mui/icons-material/FilterList';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {
  Badge,
  Box,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  IconDevicesCancel,
  IconFileText,
  IconPencilDollar,
  IconPencilSearch,
  IconSearch,
} from '@tabler/icons-react';
import { createElement, useState } from 'react';
import TopCard from 'src/components/widgets/cards/TopCard';
import ContractAffiliateTable from './component/ContractAffiliateTable';

const dataSource = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Hợp đồng',
    total: '190',
    icons: (
      <Box
        bgcolor="primary.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconFileText color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Từ chối',
    total: '190',
    icons: (
      <Box
        bgcolor="warning.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconDevicesCancel color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đã ký',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconPencilDollar color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Chờ ký',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconPencilSearch color="white" size={30} />
      </Box>
    ),
  },
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
const ContactAffiliate = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

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
    <>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={dataSource} totalColumn={4} />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4} sm={4} md={4}>
              <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={10}>
                  <TextField
                    id="outlined-search"
                    placeholder="Tìm kiếm hợp đồng affiliate"
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
        <Grid item xs={12}>
          {' '}
          <ContractAffiliateTable />
        </Grid>
      </Grid>
    </>
  );
};

export default ContactAffiliate;
