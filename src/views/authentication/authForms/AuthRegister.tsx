import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import { registerType } from 'src/types/auth/auth';
import AuthSocialButtons from './AuthSocialButtons';

const AuthRegister = ({ title, subtitle }: registerType) => {
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone number validation function (Vietnamese format)
  const validatePhoneNumber = (number) => {
    const phoneRegex = /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/;
    return phoneRegex.test(number);
  };

  // Password validation function (minimum 8 digits)
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Handle change function for email validation
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!validateEmail(emailValue)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address.',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }));
    }
  };

  // Handle change function for phone number validation
  const handlePhoneNumberChange = (e) => {
    const phoneNumberValue = e.target.value;
    setPhoneNumber(phoneNumberValue);

    if (!validatePhoneNumber(phoneNumberValue)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: 'Please enter correct phone',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: '',
      }));
    }
  };

  // Handle change function for password validation
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (!validatePassword(passwordValue)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 8 characters long.',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: '',
      }));
    }
  };

  // Handle change function for gender selection
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {/* First Row: Name */}
          <Grid container item xs={12} spacing={2} alignItems="center">
            <Grid item xs={4}>
              <CustomFormLabel htmlFor="name">Họ và Tên</CustomFormLabel>
            </Grid>
            <Grid item xs={8}>
              <CustomTextField id="name" variant="outlined" fullWidth />
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
              />
            </Grid>
          </Grid>

          {/* Fourth Row: Date of Birth */}
          <Grid container item xs={12} spacing={2} alignItems="center">
            <Grid item xs={4}>
              <CustomFormLabel htmlFor="dateofbirth">Ngày sinh</CustomFormLabel>
            </Grid>
            <Grid item xs={8}>
              <CustomTextField id="dateofbirth" variant="outlined" fullWidth type="date" />
            </Grid>
          </Grid>

          {/* Fifth Row: Gender */}
          <Grid container item xs={12} spacing={2} alignItems="center">
            <Grid item xs={4}>
              <CustomFormLabel htmlFor="gender">Giới tính</CustomFormLabel>
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Giới tính</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Gender"
                  value={gender}
                  onChange={handleGenderChange}
                >
                  <MenuItem value="male">Trai</MenuItem>
                  <MenuItem value="female">Gái</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Sixth Row: Password */}
          <Grid container item xs={12} spacing={2} alignItems="center">
            <Grid item xs={4}>
              <CustomFormLabel htmlFor="password">Mật khẩu</CustomFormLabel>
            </Grid>
            <Grid item xs={8}>
              <CustomTextField
                id="password"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>
          </Grid>
        </Grid>

        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          sx={{ mt: 3 }}
          component={Link}
          to="/auth/login2"
        >
          Đăng ký
        </Button>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthRegister;
