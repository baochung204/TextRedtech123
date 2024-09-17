// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';

interface Errors {
  email?: string;
}
const AuthForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const handleEmailChange = (e: any) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!validateEmail(emailValue)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Vui lòng nhập địa chỉ email hợp lệ.',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }));
    }
  };
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <>
      <Stack mt={4} spacing={2}>
        <CustomFormLabel htmlFor="reset-email">Email</CustomFormLabel>
        <CustomTextField
          id="reset-email"
          variant="outlined"
          fullWidth
          label="Vui lòng nhập email "
          value={email}
          onChange={handleEmailChange}
          error={!!errors.email}
          helperText={errors.email}
        />

        <Button color="primary" variant="contained" size="large" fullWidth component={Link} to="/">
          Quên mật khẩu
        </Button>
        <Button color="primary" size="large" fullWidth component={Link} to="/auth/login">
          Trở lại đăng nhập
        </Button>
      </Stack>
    </>
  );
};

export default AuthForgotPassword;
