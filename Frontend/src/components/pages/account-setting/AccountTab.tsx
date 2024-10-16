// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Button, CardContent, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate để chuyển hướng

// components
import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../forms/theme-elements/CustomTextField';

const AccountTab = () => {
  const navigate = useNavigate(); // Khai báo useNavigate

  // Hàm xử lý khi submit form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Ngăn việc reload trang khi submit
    // Xử lý logic đổi mật khẩu tại đây
    // ...

    // Chuyển hướng sang trang bảo mật 2 lớp
    navigate('/auth/two-steps');
  };

  return (
    <Grid display={'flex'} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} md={6}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h4" mb={2} fontWeight="bold" color="primary.main">
            Đổi mật khẩu
          </Typography>
          <Typography color="textSecondary" mb={4}>
            Nhập các thông tin bên dưới
          </Typography>
          <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            {' '}
            {/* Thêm onSubmit */}
            <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-cpwd">
              Mật khẩu hiện tại
            </CustomFormLabel>
            <CustomTextField
              id="text-cpwd"
              placeholder="Nhập mật khẩu hiện tại"
              variant="outlined"
              fullWidth
              type="password"
              sx={{ mb: 3 }}
            />
            <CustomFormLabel htmlFor="text-npwd">Mật khẩu mới</CustomFormLabel>
            <CustomTextField
              id="text-npwd"
              placeholder="Nhập mật khẩu mới"
              variant="outlined"
              fullWidth
              type="password"
              sx={{ mb: 3 }}
            />
            <CustomFormLabel htmlFor="text-conpwd">Xác nhận mật khẩu</CustomFormLabel>
            <CustomTextField
              id="text-conpwd"
              placeholder="Xác nhận mật khẩu mới"
              variant="outlined"
              fullWidth
              type="password"
              sx={{ mb: 4 }}
            />
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mt: 3 }}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                type="submit"
                sx={{ borderRadius: '30px', px: 4 }}
              >
                Lưu
              </Button>
              <Button
                size="large"
                variant="outlined"
                color="error"
                sx={{ borderRadius: '30px', px: 4 }}
              >
                Hủy
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default AccountTab;
