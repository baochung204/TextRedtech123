import { Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

const DateSelect = () => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const [value1, setValue1] = useState<Dayjs | null>(null);
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
    </>
  );
};

export default DateSelect;
