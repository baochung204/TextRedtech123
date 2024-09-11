import { Email } from '@mui/icons-material';
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Alert,
  AlertTitle,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

const ReceiveEmail = () => {
  const initialState = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
  };

  const [checked, setChecked] = useState(initialState);
  const [savedState, setSavedState] = useState(initialState);
  const [showAlert, setShowAlert] = useState<{ success: boolean; cancel: boolean }>({
    success: false,
    cancel: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSave = () => {
    setSavedState(checked); // Save the current state
    setShowAlert({ success: true, cancel: false });
    setTimeout(() => setShowAlert({ success: false, cancel: false }), 3000); // Hide alert after 3 seconds
  };

  const handleCancel = () => {
    setChecked(savedState); // Restore the previous state
    setShowAlert({ success: false, cancel: true });
    setTimeout(() => setShowAlert({ success: false, cancel: false }), 3000); // Hide alert after 3 seconds
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 1,
        boxShadow: 3,
        margin: '0 auto',
      }}
    >
      <Typography mb={4} variant="h4" fontWeight="600" gutterBottom display={'flex'} gap={1}>
        <Email /> <span>Tùy chọn nhận Email</span>
      </Typography>

      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={checked.option1} onChange={handleChange} name="option1" />}
          label="Chung - Nhận email liên quan đến tài khoản & hệ thống"
        />
        <FormControlLabel
          control={<Checkbox checked={checked.option2} onChange={handleChange} name="option2" />}
          label="Hóa đơn - nhận email hóa đơn mới, lời nhắc & thông báo quá hạn"
        />
        <FormControlLabel
          control={<Checkbox checked={checked.option3} onChange={handleChange} name="option3" />}
          label="Tính năng mới - Nhận email cập nhật các tính năng mới"
        />
        <FormControlLabel
          control={<Checkbox checked={checked.option4} onChange={handleChange} name="option4" />}
          label="Affiliate - Nhận email thông báo về chương trình Affiliate"
        />
        <FormControlLabel
          control={<Checkbox checked={checked.option5} onChange={handleChange} name="option5" />}
          label="Tài liệu - Nhận email tài liệu & hướng dẫn"
        />
        <FormControlLabel
          control={<Checkbox checked={checked.option6} onChange={handleChange} name="option6" />}
          label="Khuyến mại - Nhận email về các chương trình khuyến mại"
        />
      </FormGroup>

      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="contained" color="primary" onClick={handleSave}>
          Lưu thay đổi
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel}>
          Hủy thay đổi
        </Button>
      </Box>

      {/* Display alerts for success and cancellation */}
      {showAlert.success && (
        <Alert
          severity="success"
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            zIndex: theme.zIndex.snackbar,
            backgroundColor: '#4caf50',
            color: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: 1,
            padding: 2,
            width: 300,
          }}
        >
          <AlertTitle>Thành công</AlertTitle>
          Lưu thay đổi thành công!
        </Alert>
      )}
      {showAlert.cancel && (
        <Alert
          severity="info"
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            zIndex: theme.zIndex.snackbar,
            backgroundColor: '#2196f3',
            color: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: 1,
            padding: 2,
            width: 300,
          }}
        >
          <AlertTitle>Hủy bỏ</AlertTitle>
          Đã hủy thay đổi!
        </Alert>
      )}
    </Box>
  );
};

export default ReceiveEmail;
