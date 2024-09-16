import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const PopupWithdrawMoney = () => {
  const [currentBalance, setCurrentBalance] = useState<number>(10000000); // Số tiền hiện có
  const [withdrawAmount, setWithdrawAmount] = useState(0); // Số tiền muốn rút
  const remainingBalance = currentBalance - withdrawAmount; // Số tiền còn lại

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setWithdrawAmount(value);
  };

  return (
    <Box
    >
      <Box mb={2}>
        <Typography variant="body1" color="textSecondary">
          Số tiền hiện có:
        </Typography>
        <Typography variant="h6" color="primary">
          {currentBalance.toLocaleString()} VND
        </Typography>
      </Box>

      <TextField
        label="Nhập số tiền muốn rút"
        type="number"
        fullWidth
        value={withdrawAmount}
        onChange={handleInputChange}
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <Box mb={2}>
        <Typography variant="body1" color="textSecondary">
          Số tiền còn lại:
        </Typography>
        <Typography variant="h6" color={remainingBalance >= 0 ? 'secondary' : 'error'}>
          {remainingBalance >= 0 ? remainingBalance.toLocaleString() : currentBalance} VND
        </Typography>
      </Box>

      {withdrawAmount > currentBalance && (
        <Typography variant="body2" color="error" sx={{ mb: 2 }}>
          Số tiền rút vượt quá số tiền hiện có!
        </Typography>
      )}
    </Box>
  );
};

export default PopupWithdrawMoney;
