import FilterListIcon from '@mui/icons-material/FilterList';
import { TabContext, TabList, TabPanel } from '@mui/lab';
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
  Tab,
  TextField,
  Typography,
} from '@mui/material';
import {
  IconBrandStrava,
  IconLockSquareRounded,
  IconPasswordUser,
  IconSearch,
  IconUser,
} from '@tabler/icons-react';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import React, { createElement, useState } from 'react';
import PersonnelTab from './component/personnelTab';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TopCard from 'src/components/widgets/cards/TopCard';

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
    title: 'Nhân viên',
    total: '120',
    icons: (
      <Box
        bgcolor="primary.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconUser color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Quản trị',
    total: '5',
    icons: (
      <Box
        bgcolor="warning.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconPasswordUser color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Hoạt động',
    total: '52',
    icons: (
      <Box
        bgcolor="success.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconBrandStrava color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Khóa',
    total: '12',
    icons: (
      <Box
        bgcolor="error.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconLockSquareRounded color="white" size={30} />
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

const Personnels = () => {
  const [value, setValue] = useState('1');

  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
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
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        <TopCard dataSource={DataBox} totalColumn={4} />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'space-between',
                mb: 2,
              }}
            >
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Nhân viên" value="1" />
                <Tab label="Phân quyền" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: 0 }}>
              <Grid container spacing={2}>
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
                        placeholder="Tìm kiếm nhân viên "
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
                          <MenuItem
                            key={film.id}
                            value={film.id}
                            onClick={() => handleItemClick(film.id)}
                          >
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
                  <PersonnelTab value={value} open={open} setOpen={setOpen} />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Personnels;
