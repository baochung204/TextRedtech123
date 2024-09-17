// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { loginType } from 'src/types/auth/auth';
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';

import AuthSocialButtons from './AuthSocialButtons';

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [inputValue, setInputValue] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [password, setPassword] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    validateInput(value);
  };

  const validateInput = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,11}$/;

    if (emailRegex.test(value)) {
      setErrors({}); // Email hợp lệ
    } else if (phoneRegex.test(value)) {
      setErrors({}); // Số điện thoại hợp lệ
    } else {
      setErrors({ input: 'Vui lòng nhập email hoặc số điện thoại hợp lệ' });
    }
  };
  // Password validation function (minimum 8 digits)
  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handlePasswordChange = (e: any) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (!validatePassword(passwordValue)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Mật khẩu không chính xác',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: '',
      }));
    }
  };
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <AuthSocialButtons title="" />

      <Stack>
        <Box>
          <CustomFormLabel htmlFor="emailOrPhone">Tài khoản</CustomFormLabel>
          <TextField
            id="emailOrPhone"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
            error={!!errors.input}
            helperText={errors.input}
            label="Email hoặc số điện thoại"
            sx={{ mt: 1 }}
          />
          {/* <span style={{ padding: '0 10px' }}>Vui lòng Nhập Email của bạn </span> */}
        </Box>
        <Box>
          <CustomFormLabel htmlFor="password">Mật khẩu</CustomFormLabel>
          <CustomTextField
            id="password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            error={!!errors.password}
            helperText={errors.password}
            label="Mật khẩu của bạn"
            sx={{ mt: 1 }}
          />
          {/* <span style={{ padding: '0 10px' }}>Vui lòng Nhập Email của bạn </span> */}
        </Box>
        <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
          <FormGroup>
            <FormControlLabel control={<CustomCheckbox />} label="Nhớ mật khẩu" />
          </FormGroup>
          <Typography
            component={Link}
            to="/auth/forgot-password"
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
};

export default AuthLogin;
