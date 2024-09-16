import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const PopupWithdrawMoney = () => {
  const [currentBalance] = useState<number>(10000000); // Số tiền hiện có
  const [withdrawAmount, setWithdrawAmount] = useState<number | null>(null); // Số tiền muốn rút

  // Số tiền còn lại - dùng mặc định 0 nếu withdrawAmount là null hoặc không hợp lệ
  const remainingBalance =
    withdrawAmount !== null ? currentBalance - withdrawAmount : currentBalance;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    // Kiểm tra giá trị có phải là số hợp lệ hay không
    if (!isNaN(value)) {
      setWithdrawAmount(value);
    } else {
      setWithdrawAmount(null); // Đặt về null nếu input trống hoặc không hợp lệ
    }
  };

  return (
    <Box sx={{ width: '400px' }}>
      {/* Hiển thị số tiền hiện có */}
      <Box mb={2}>
        <Typography variant="body1" color="textSecondary">
          Số tiền hiện có:
        </Typography>
        <Typography variant="h6" color="primary">
          {currentBalance.toLocaleString()} VND
        </Typography>
      </Box>

      {/* Ô nhập số tiền muốn rút */}
      <TextField
        label="Nhập số tiền muốn rút"
        type="number"
        fullWidth
        value={withdrawAmount !== null ? withdrawAmount : ''} // Hiển thị giá trị hoặc trống
        onChange={handleInputChange}
        variant="outlined"
        sx={{ margin: '30px 0' }}
      />

      {/* Hiển thị số tiền còn lại */}
      <Box mb={2}>
        <Typography variant="body1" color="textSecondary">
          Số tiền còn lại:
        </Typography>
        <Typography variant="h6" color={remainingBalance >= 0 ? 'secondary' : 'error'}>
          {remainingBalance >= 0 ? remainingBalance.toLocaleString() : currentBalance} VND
        </Typography>
      </Box>

      {/* Cảnh báo khi số tiền rút vượt quá số tiền hiện có */}
      {withdrawAmount !== null && withdrawAmount > currentBalance && (
        <Typography variant="body2" color="error" sx={{ mb: 2 }}>
          Số tiền rút vượt quá số tiền hiện có!
        </Typography>
      )}

      {/* Cảnh báo khi số tiền muốn rút nhỏ hơn 2 triệu */}
      {withdrawAmount !== null && withdrawAmount < 2000000 && (
        <Typography variant="body2" color="error" sx={{ mb: 2 }}>
          Số tiền muốn rút cần lớn hơn 2 triệu
        </Typography>
      )}
    </Box>
  );
};

export default PopupWithdrawMoney;
