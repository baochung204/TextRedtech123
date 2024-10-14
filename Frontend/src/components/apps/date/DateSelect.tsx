import { Box, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useEffect, useState } from 'react';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
const DateSelect = () => {
  const date = new Date();
  const tenDaysBeforeToday = new Date(date);
  tenDaysBeforeToday.setDate(date.getDate() - 10);
  console.log(tenDaysBeforeToday);
  const [startDate, setStartDate] = useState<Date | any>(tenDaysBeforeToday);
  const [endDate, setEndDate] = useState<Date | any>(new Date());
  const [error, setError] = useState<string | null>(null);

  // Effect to validate dates in real-time
  useEffect(() => {
    if (startDate && endDate && startDate > endDate) {
      setError('Start date must be earlier than end date');
    } else {
      setError(null);
    }
  }, [startDate, endDate]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Start Date Picker */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            inputFormat="dd/MM/yyyy"
            maxDate={endDate}
            renderInput={(props) => (
              <CustomTextField
                {...props}
                fullWidth
                size="small"
                error={!!error}
                sx={{
                  '& .MuiSvgIcon-root': { width: '18px', height: '18px' },
                  '& .MuiFormHelperText-root': { display: 'none' },
                }}
              />
            )}
          />
        </LocalizationProvider>
        tới
        {/* End Date Picker */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            inputFormat="dd/MM/yyyy"
            maxDate={new Date()}
            renderInput={(props) => (
              <CustomTextField
                {...props}
                fullWidth
                size="small"
                error={!!error}
                sx={{
                  '& .MuiSvgIcon-root': { width: '18px', height: '18px' },
                  '& .MuiFormHelperText-root': { display: 'none' },
                }}
              />
            )}
          />
        </LocalizationProvider>
      </Box>

      {/* Error Message Display */}
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default DateSelect;
