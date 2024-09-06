// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { CardContent, Grid, Typography, Box, Button, Stack } from '@mui/material';

// components
import BlankCard from '../../shared/BlankCard';
import CustomTextField from '../../forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';

// images
import user1 from 'src/assets/images/profile/user-1.jpg';

interface GenderType {
  value: string;
  label: string;
}

// locations
const locations: GenderType[] = [
  {
    value: 'Nam',
    label: 'Nam',
  },
  {
    value: 'Nữ',
    label: 'Nữ',
  },
];

const AccountTab = () => {
  const [location, setLocation] = React.useState('Nam');

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      {/*  Change Password */}
      {/* <Grid item xs={12} lg={6}> */}
        <BlankCard>
          <CardContent >
            <Typography variant="h5" mb={1}>
              Đổi mật khẩu
            </Typography>
            <Typography color="textSecondary" mb={3}>
              Nhập các thông tin bên dưới
            </Typography>
            <form>
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text-cpwd"
              >
                Mật khẩu hiện tại
              </CustomFormLabel>
              <CustomTextField
                id="text-cpwd"
                value="MathewAnderson"
                variant="outlined"
                fullWidth
                type="password"
              />
              {/* 2 */}
              <CustomFormLabel htmlFor="text-npwd">Mật khẩu mới</CustomFormLabel>
              <CustomTextField
                id="text-npwd"
                value="MathewAnderson"
                variant="outlined"
                fullWidth
                type="password"
              />
              {/* 3 */}
              <CustomFormLabel htmlFor="text-conpwd">Xác nhận mật khẩu</CustomFormLabel>
              <CustomTextField
                id="text-conpwd"
                value="MathewAnderson"
                variant="outlined"
                fullWidth
                type="password"
              />
              {/* Submit Button */}
              <Stack direction="row" spacing={2} sx={{ justifyContent: 'end', mt: 3 }}>
                <Button size="large" variant="contained" color="primary" type="submit">
                  Lưu
                </Button>
                <Button size="large" variant="text" color="error">
                  Hủy
                </Button>
              </Stack>
            </form>
          </CardContent>
        </BlankCard>
      {/* </Grid> */}
      {/* Edit Details */}
      {/* ... other code ... */}
    </Grid>
  );
};

export default AccountTab;
