import { Box, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Point from 'src/assets/images/logos/R-Point.png';

interface PropsItem {
  usdValue: number | null;
  setUsdValue: React.Dispatch<React.SetStateAction<number | null>>;
}

const PopupConvert = ({ usdValue, setUsdValue }: PropsItem) => {
  const [currentBalance] = useState<number>(10000000); // Assume this is the current balance in VND
  const conversionRate = 48000 / 24000; // Conversion rate for points
  const [vndValue, setVndValue] = useState<number | null>(null);
  const [remainingBalance, setRemainingBalance] = useState<number>(currentBalance); // Ensure it's a number

  // Update the VND value and remaining balance when usdValue changes
  useEffect(() => {
    if (usdValue !== null) {
      setVndValue(usdValue * conversionRate);
      setRemainingBalance(currentBalance - usdValue); // Calculate remaining balance
    } else {
      setVndValue(null);
      setRemainingBalance(currentBalance);
    }
  }, [usdValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setUsdValue(null);
    } else {
      const numericValue = parseFloat(value);
      setUsdValue(numericValue);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Display the current balance */}
      <Box mb={2}>
        <Typography variant="body1" color="textSecondary" sx={{ mb: '10px' }}>
          Số dư hiện tại:
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mb: '20px' }}>
          {currentBalance.toLocaleString()} VND
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Input field for entering amount to convert */}
        <Grid item xs={6}>
          <TextField
            label="Nhập số tiền"
            type="number"
            fullWidth
            value={usdValue || ''}
            onChange={handleInputChange}
            variant="outlined"
            sx={{ mb: '10px' }}
          />
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ marginTop: '-5px', mb: '10px' }}>
            <Typography variant="body1" color="textSecondary">
              Số point:
            </Typography>
            <Typography variant="h6" color="primary" sx={{ mb: '10px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {vndValue !== null && vndValue.toLocaleString()}{' '}
                <img src={Point} alt="Point" style={{ width: '30px', height: '30px' }} />
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Display remaining balance after conversion */}
      <Box mt={2} sx={{ mb: '10px' }}>
        <Typography variant="h6" color={remainingBalance >= 0 ? 'secondary' : 'error'}>
          Số dư còn lại: {remainingBalance.toLocaleString()} VND
        </Typography>
      </Box>

      {/* Error messages */}
      {usdValue !== null && usdValue > currentBalance && (
        <Typography variant="body2" color="error" sx={{ mb: 2, mt: '10px' }}>
          Số tiền rút vượt quá số tiền hiện có!
        </Typography>
      )}

      {usdValue !== null && usdValue <= 0 && (
        <Typography variant="body2" color="error" sx={{ mt: 1, mb: '10px' }}>
          Số tiền muốn rút cần lớn hơn 0
        </Typography>
      )}
    </Box>
  );
};

export default PopupConvert;
