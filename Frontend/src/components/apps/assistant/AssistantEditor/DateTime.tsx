// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateTime = () => {
  const [value3, setValue3] = React.useState<Dayjs | null>(dayjs('2018-01-01T00:00:00.000Z'));

  return (
    <Grid>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={value3}
          onChange={(newValue) => {
            setValue3(newValue);
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
    </Grid>
  );
};

export default DateTime;
