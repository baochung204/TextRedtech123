import { TabContext } from '@mui/lab';
import {
  Box,
  Grid,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  IconBusinessplan,
  IconChartArcs,
  IconChartBar,
  IconPasswordUser,
  IconPigMoney,
  IconReceipt,
  IconSearch,
  IconTruckDelivery,
  IconUserDollar,
  IconZoomMoney,
} from '@tabler/icons-react';
import React, { useState } from 'react';

import { styled } from '@mui/system';
import { Dayjs } from 'dayjs';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField'; // Ensure this component works as expected
import PublisherTable from './component/PublisherTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import { IconBox } from '@tabler/icons-react';
import { IconWashDrycleanOff } from '@tabler/icons-react';
// const dataSource = [
//   {
//     bgColor: 'primary.light',
//     color: 'primary.main',
//     title: 'Publisher',
//     total: '1907',
//     icons: IconUserDollar,
//   },
//   {
//     bgColor: 'warning.light',
//     color: 'warning.main',
//     title: 'Đơn hàng',
//     total: '8386',
//     icons: IconTruckDelivery,
//   },
//   {
//     bgColor: 'success.light',
//     color: 'success.main',
//     title: 'Hoa hồng',
//     total: '123.456.789đ',
//     icons: IconPigMoney,
//   },
//   {
//     bgColor: 'error.light',
//     color: 'error.main',
//     title: 'Chưa thanh toán',
//     total: '123.456.789đ',
//     icons: IconBusinessplan,
//   },
// ];

const DataBox = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Publisher',
    total: '1907',
    icons: (
      <>
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
          <IconPasswordUser color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'Đơn hàng',
    total: '8386',
    icons: (
      <>
        <Box
          bgcolor="secondary.main"
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
          <IconBox color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Hoa hồng',
    total: '123.456.369 ₫',
    icons: (
      <>
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
          <IconZoomMoney color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Chưa thanh toán',
    total: '11.415.123 ₫',
    icons: (
      <>
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
          <IconWashDrycleanOff color="white" size={30} />
        </Box>
      </>
    ),
  },
];

interface FilmsData {
  title: string;
}

const FilmsData: FilmsData[] = [
  { title: 'Tỉ lệ chuyển đổi' },
  { title: 'Cấp Rank' },
  { title: 'Tổng doanh thu' },
];

const BoxStyled = styled(Box)(() => ({
  padding: '30px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const PublisherAffiliate = () => {
  const [expectvalue] = React.useState('1');
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [value1, setValue1] = React.useState<Dayjs | null>(null);
  const [selectedItems, setSelectedItems] = useState<string>('');

  const handleChange1 = (event: SelectChangeEvent<string>) => {
    setSelectedItems(event.target.value);
  };

  const handleItemClick1 = (title: string) => {
    if (selectedItems === title) {
      setSelectedItems('');
    } else {
      setSelectedItems(title);
    }
  };

  return (
    <>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          {/* <Grid container spacing={3}>
            {dataSource.map((items, index) => {
              return (
                <Grid item lg={3} sm={6} xs={12} key={index}>
                  <BoxStyled
                    sx={{
                      backgroundColor: items.bgColor,
                      color: items.color,
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        xs={3}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <items.icons />
                      </Grid>
                      <Grid item xs={9}>
                        <Typography style={{ fontSize: '19px' }} variant="h4">
                          {items.title}
                        </Typography>
                        <Typography variant="h5">{items.total}</Typography>
                      </Grid>
                    </Grid>
                  </BoxStyled>
                </Grid>
              );
            })}
          </Grid> */}
          <TopCard dataSource={DataBox} totalColumn={4} />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={expectvalue}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box>
                  {/* Ô tìm kiếm */}
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
                          <IconSearch size="12" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    justifyContent: 'end',
                  }}
                >
                  {/* lọc thời gian */}
                  <Box style={{ width: '60%' }} display={'flex'} alignItems={'center'} gap="5px">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(props) => (
                          <CustomTextField
                            {...props}
                            fullWidth
                            size="small"
                            sx={{
                              '& .MuiSvgIcon-root': {
                                width: '18px',
                                height: '18px',
                              },
                              '& .MuiFormHelperText-root': {
                                display: 'none',
                              },
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                    tới
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        value={value1}
                        onChange={(newValue) => {
                          setValue1(newValue);
                        }}
                        renderInput={(props) => (
                          <CustomTextField
                            {...props}
                            fullWidth
                            size="small"
                            sx={{
                              '& .MuiSvgIcon-root': {
                                width: '18px',
                                height: '18px',
                              },
                              '& .MuiFormHelperText-root': {
                                display: 'none',
                              },
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                  {/* Bộ lọc */}
                  <Select
                    value={selectedItems}
                    onChange={handleChange1}
                    displayEmpty
                    renderValue={(selected) => (selected === '' ? 'Sửa đổi cột' : `Sửa đổi cột`)}
                    size="small"
                    style={{ maxWidth: 300, marginRight: '10px' }}
                  >
                    {FilmsData.map((film) => (
                      <MenuItem
                        key={film.title}
                        value={film.title}
                        onClick={() => handleItemClick1(film.title)}
                      >
                        <ListItemText primary={film.title} />
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
            </TabContext>
            <PublisherTable />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PublisherAffiliate;
