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
    setSavedState(checked); // Lưu trạng thái hiện tại
    setShowAlert({ success: true, cancel: false });
    setTimeout(() => setShowAlert({ success: false, cancel: false }), 3000); // Ẩn thông báo sau 3 giây
  };

  const handleCancel = () => {
    setChecked(savedState); // Khôi phục trạng thái trước đó
    setShowAlert({ success: false, cancel: true });
    setTimeout(() => setShowAlert({ success: false, cancel: false }), 3000); // Ẩn thông báo sau 3 giây
  };

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 1,
        boxShadow: 3,
        // backgroundColor: '#2A3447',
        margin: '0 auto', // Căn giữa trang
        // color: 'white', // Màu chữ sáng cho dark mode
      }}
    >
      <Typography mb={4} variant="h4" fontWeight="600" gutterBottom display={'flex'} gap={1} sx={{  }}>
        <Email /> <span>Tùy chọn nhận Email</span>
      </Typography>

      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={checked.option1} onChange={handleChange} name="option1" sx={{  }} />}
          label="Chung - Nhận email liên quan đến tài khoản & hệ thống"
          // sx={{ color: 'white' }}
        />
        <FormControlLabel
          control={<Checkbox checked={checked.option2} onChange={handleChange} name="option2" sx={{  }} />}
          label="Hóa đơn - nhận email hóa đơn mới, lời nhắc & thông báo quá hạn"
          // sx={{ color: 'white' }}
        />
        <FormControlLabel
          control={<Checkbox checked={checked.option3} onChange={handleChange} name="option3" sx={{ }} />}
          label="Tính năng mới - Nhận email cập nhật các tính năng mới"
          // sx={{ color: 'white' }}
        />
        <FormControlLabel
          control={<Checkbox checked={checked.option4} onChange={handleChange} name="option4" sx={{  }} />}
          label="Affiliate - Nhận email thông báo về chương trình Affiliate"
          // sx={{ color: 'white' }}
        />
        <FormControlLabel
          control={<Checkbox checked={checked.option5} onChange={handleChange} name="option5" sx={{  }} />}
          label="Tài liệu - Nhận email tài liệu & hướng dẫn"
          // sx={{ color: 'white' }}
        />
        <FormControlLabel
          control={<Checkbox checked={checked.option6} onChange={handleChange} name="option6" sx={{ }} />}
          label="Khuyến mại - Nhận email về các chương trình khuyến mại"
          // sx={{ color: 'white' }}
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

      {/* Hiển thị thông báo khi lưu hoặc hủy */}
      {showAlert.success && (
        <Alert severity="success" sx={{ mt: 3, backgroundColor: '#4caf50', }}>
          <AlertTitle>Thành công</AlertTitle>
          Lưu thay đổi thành công!
        </Alert>
      )}
      {showAlert.cancel && (
        <Alert severity="info" sx={{ mt: 3, backgroundColor: '#2196f3',  }}>
          <AlertTitle>Hủy thay đổi</AlertTitle>
          Các thay đổi đã được hủy!
        </Alert>
      )}
    </Box>
  );
};

export default ReceiveEmail;
