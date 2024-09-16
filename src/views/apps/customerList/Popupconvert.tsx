import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Grid } from '@mui/material';

interface PropsItem {
  usdValue: number | null;
  setUsdValue: React.Dispatch<React.SetStateAction<number | null>>;
}

const PopupConvert = ({ usdValue, setUsdValue }: PropsItem) => {
  const conversionRate = 24000; // 1 USD = 24,000 VND (you can update this rate)
  const [vndValue, SetVNDValue] = useState<number | null>(null);

  useEffect(() => {
    if (usdValue !== null) {
      SetVNDValue(usdValue * conversionRate);
    }
  }, [usdValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setUsdValue(value);
  };
  console.log(usdValue);

  return (
    <Box sx={{ p: 3, maxWidth: 400, mx: 'auto', mt: 5, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ marginBottom: '40px' }}>
        Đổi Point
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Nhập số point"
            type="number"
            fullWidth
            value={usdValue}
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1" color="textSecondary">
            Giá trị VND:
          </Typography>
          <Typography variant="h6" color="primary">
            {vndValue !== null && vndValue.toLocaleString()} VND
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PopupConvert;
