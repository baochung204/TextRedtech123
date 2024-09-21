import { Box, CardContent, Grid, MenuItem, TextField, Typography } from '@mui/material';

import icon1 from '../../../assets/images/svgs/icon-connect.svg';
import icon2 from '../../../assets/images/svgs/icon-user-male.svg';
import icon3 from '../../../assets/images/svgs/icon-briefcase.svg';
import icon4 from '../../../assets/images/svgs/icon-mailbox.svg';
import icon5 from '../../../assets/images/svgs/icon-favorites.svg';
import icon6 from '../../../assets/images/svgs/icon-speech-bubble.svg';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import { ChangeEvent, useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { max } from 'lodash';

interface cardType {
  icon: string;
  title: string;
  digits: string;
  bgcolor: string;
}

const topcards: cardType[] = [
  {
    icon: icon2,
    title: 'Trợ lý',
    digits: '96',
    bgcolor: 'primary',
  },
  {
    icon: icon3,
    title: 'Khách hàng',
    digits: '3,650',
    bgcolor: 'warning',
  },
  {
    icon: icon4,
    title: 'Đơn hàng',
    digits: '356',
    bgcolor: 'secondary',
  },
  {
    icon: icon5,
    title: 'AOV',
    digits: '696',
    bgcolor: 'error',
  },
  {
    icon: icon6,
    title: 'GMV',
    digits: '96',
    bgcolor: 'success',
  },
  {
    icon: icon1,
    title: 'CVR',
    digits: '59',
    bgcolor: 'info',
  },
];

const TopCards = () => {
  const [month, setMonth] = useState('1');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ padding: 0 }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid item xs={4}>
            {' '}
            <CustomSelect
              labelId="month-dd"
              id="month-dd"
              size="small"
              value={month}
              onChange={handleChange}
              sx={{ py: 0.5 }}
            >
              <MenuItem value={1}>Tất cả</MenuItem>
              <MenuItem value={2}>Assistant 1</MenuItem>
              <MenuItem value={3}>Assistant 2</MenuItem>
            </CustomSelect>{' '}
          </Grid>
          <Grid item xs={3.85}>
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
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={2} key={i}>
          <Box bgcolor={topcard.bgcolor + '.light'} textAlign="center">
            <CardContent>
              <img src={topcard.icon} alt={topcard.icon} width="50" />
              <Typography
                color={topcard.bgcolor + '.main'}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >
                {topcard.title}
              </Typography>
              <Typography color={topcard.bgcolor + '.main'} variant="h4" fontWeight={600}>
                {topcard.digits}
                {topcard.title == 'AOV'
                  ? 'k'
                  : topcard.title == 'GMV'
                  ? 'M'
                  : topcard.title == 'CVR'
                  ? '%'
                  : ''}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
