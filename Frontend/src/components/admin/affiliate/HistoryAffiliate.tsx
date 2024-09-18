import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
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
import { IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react';

import { Dayjs } from 'dayjs';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField'; // Ensure this component works as expected
import TopCard from 'src/components/widgets/cards/TopCard';
import HistoryTable from './component/HistoryTable';

const dataSource = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Số ưu cầu',
    total: '1907',
    icons: (
      <PeopleAltIcon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Số tiền rút',
    total: '190.720.030đ',
    icons: (
      <PeopleAltIcon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đã xử lý',
    total: '123.456.789đ',
    icons: (
      <PeopleAltIcon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Chờ xử lý',
    total: '123.456.789đ',
    icons: (
      <PeopleAltIcon
        sx={{
          fontSize: 40,
        }}
      />
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

const HistoryAffiliate = () => {
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
          <TopCard dataSource={dataSource} />
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
            <HistoryTable />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HistoryAffiliate;
