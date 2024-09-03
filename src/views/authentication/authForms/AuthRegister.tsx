import { Box, Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { registerType } from 'src/types/auth/auth';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

const AuthRegister = ({ subtitle }: registerType) => {
  // const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  interface Errors {
    username?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    confirmPassword?: string; // Add confirmPassword property
  }

  const [errors, setErrors] = useState<Errors>({});

  const validateUsername = (username: string) => {
    return username.trim().length > 2;
  };
  const handleUsernameChange = (e: any) => {
    const usernameValue = e.target.value;
    setUsername(usernameValue);

    if (!validateUsername(usernameValue)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: 'Tên người dùng phải có ít nhất 3 ký tự.',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: '',
      }));
    }
  };
  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone number validation function (Vietnamese format)
  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/;
    return phoneRegex.test(number);
  };

  // Password validation function (minimum 8 digits)
  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  // Handle change function for email validation
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

  // Handle change function for phone number validation
  const handlePhoneNumberChange = (e: any) => {
    const phoneNumberValue = e.target.value;
    setPhoneNumber(phoneNumberValue);

    if (!validatePhoneNumber(phoneNumberValue)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: 'Vui lòng nhập số điện thoại chính xác.',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: '',
      }));
    }
  };

  // Handle change function for password validation
  const handlePasswordChange = (e: any) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (!validatePassword(passwordValue)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Mật khẩu phải có ít nhất 8 ký tự.',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: '',
      }));
    }
  };
  const handleConfirmPasswordChange = (e: any) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);

    if (password !== confirmPasswordValue) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Mật khẩu không khớp.',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: '',
      }));
    }
  };
  // Handle change function for gender selection
  // const handleGenderChange = (event: any) => {
  //   setGender(event.target.value);
  // };

  return (
    <>
      <Box>
        <Typography variant="h4" fontWeight="600" mb={3}>
          Đăng ký thành viên Redtech
        </Typography>
        <Grid container spacing={2}>
          {/* First Row: Name */}
          <Grid container item xs={12} spacing={2} alignItems="center">
            <Grid item xs={4}>
              <CustomFormLabel htmlFor="name">Họ và Tên</CustomFormLabel>
            </Grid>
            <Grid item xs={8}>
              <CustomTextField
                id="username"
                variant="outlined"
                fullWidth
                onChange={handleUsernameChange}
                type="text"
                value={username}
                label="Nhập họ và tên của bạn"
                error={!!errors.username}
                helperText={errors.username}
              />
            </Grid>
          </Grid>

          {/* Second Row: Email */}
          <Grid container item xs={12} spacing={2} alignItems="center">
            <Grid item xs={4}>
              <CustomFormLabel htmlFor="email">Gmail</CustomFormLabel>
            </Grid>
            <Grid item xs={8}>
              <CustomTextField
                id="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={handleEmailChange}
                error={!!errors.email}
                helperText={errors.email}
                label="Nhập email của bạn"
              />
            </Grid>
          </Grid>

          {/* Third Row: Phone Number */}
          <Grid container item xs={12} spacing={2} alignItems="center">
            <Grid item xs={4}>
              <CustomFormLabel htmlFor="phonenumber">Số điện thoại</CustomFormLabel>
            </Grid>
            <Grid item xs={8}>
              <CustomTextField
                id="phonenumber"
                variant="outlined"
                fullWidth
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
                label="Nhập số điện thoại của bạn"
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={2} alignItems="center">
            <Grid item xs={4}>
              <CustomFormLabel htmlFor="password">Mật khẩu</CustomFormLabel>
            </Grid>
            <Grid item xs={8}>
              <CustomTextField
                id="password"
                variant="outlined"
                fullWidth
                type="password"
                value={password}
                onChange={handlePasswordChange}
                error={!!errors.password}
                helperText={errors.password}
                label="Nhập mật khẩu của bạn"
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={2} alignItems="center">
            <Grid item xs={4}>
              <CustomFormLabel htmlFor="confirmPassword">Nhập Lại mật khẩu</CustomFormLabel>
            </Grid>
            <Grid item xs={8}>
              <CustomTextField
                id="confirmPassword"
                variant="outlined"
                fullWidth
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                label="Nhập lại mật khẩu của bạn"
              />
            </Grid>
          </Grid>
          {/* Fifth Row: Gender */}
        </Grid>

        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          sx={{ mt: 3 }}
          component={Link}
          to="/auth/login"
        >
          Đăng ký
        </Button>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthRegister;
