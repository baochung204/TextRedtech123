import { Box, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState, useEffect } from 'react';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

const DateSelect = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
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
