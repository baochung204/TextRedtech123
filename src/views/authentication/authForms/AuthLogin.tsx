// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Box, Typography, FormGroup, FormControlLabel, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { loginType } from 'src/types/auth/auth';
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';

import AuthSocialButtons from './AuthSocialButtons';

const AuthLogin = ({ title, subtitle, subtext }: loginType) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h3" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <AuthSocialButtons title="Đăng nhập với" />


    <Stack>
      <Box>

        <CustomFormLabel htmlFor="gmail">Tài khoản</CustomFormLabel>
        <CustomTextField id="gmail" variant="outlined" fullWidth required: true label="Email hoặc số điện thoại" />
        {/* <span style={{ padding: '0 10px' }}>Vui lòng Nhập Email của bạn </span> */}


      </Box>
      <Box>
        <CustomFormLabel htmlFor="password">Mật khẩu</CustomFormLabel>
        <CustomTextField
          id="password"
          type="password"
          variant="outlined"
          fullWidth
          required: true
          label="Nhập mật khẩu của bạn"
        />
        {/* <span style={{ padding: '0 10px' }}>Vui lòng Nhập Email của bạn </span> */}

      </Box>
      <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
        <FormGroup>
          <FormControlLabel control={<CustomCheckbox  />} label="Nhớ mật khẩu" />
        </FormGroup>
        <Typography
          component={Link}
          to="/auth/forgot-password2"
          fontWeight="500"
          sx={{
            textDecoration: 'none',
            color: 'primary.main',
          }}
        >
          Quên mật khẩu ?
        </Typography>
      </Stack>
    </Stack>
    <Box>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        to="/"
        type="submit"
      >
        Đăng nhập
      </Button>
    </Box>
    {subtitle}
  </>
);

export default AuthLogin;
