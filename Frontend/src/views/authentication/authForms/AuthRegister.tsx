import { Box, Button, CircularProgress, Grid, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import Logo from 'src/layouts/full/shared/logo/Logo';
import { registerType, registrationV2 } from 'src/types/auth/auth';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import ApiService from 'src/service/ApiService';
import { useNavigate } from 'react-router';
import AlertChat from 'src/components/apps/chats/AlertChat';

const AuthRegister = ({ subtitle }: registerType) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nkow, setnkow] = useState('OTHER');
  const [isLoading, setIsLoading] = useState(false);
  const [openAlertChat, setOpenAlertChat] = useState(false);
  const handleChangenkow = (event: any) => {
    setnkow(event.target.value);
  };
  const navigate = useNavigate();
  interface Errors {
    username?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    confirmPassword?: string; // Add confirmPassword property
  }
  // const [checked, setChecked] = React.useState(true);

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
  const handleSubmit = async () => {
    // Validate
    if (
      errors.username ||
      errors.email ||
      errors.phoneNumber ||
      errors.password ||
      errors.confirmPassword ||
      !validateEmail(email) ||
      !validateUsername(username) ||
      !validatePassword(password) ||
      !validatePhoneNumber(phoneNumber)
    ) {
      return;
    }
    setIsLoading(true);
    const requestBody: registrationV2 = {
      name: username,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      confirmPassword: confirmPassword,
      platform: nkow,
    };
    try {
      const data = await ApiService.registerV2User(requestBody);
      console.log(data);

      if (data.code == 201) {
        setIsLoading(false);
        setOpenAlertChat(true);
        navigate('/auth/login');
      } else if (data.code == 306) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Email đã tồn tại.',
          phoneNumber: 'Số điện thoại đã tồn tại',
        }));
      } else if (data.code == 400) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: data.result.name,
          email: data.result.email,
          phoneNumber: data.result.phoneNumber,
          password: data.result.password,
          confirmPassword: data.result.registerFormRequest,
        }));
      } else if (data.code == 1023) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Email đã tồn tại',
        }));
      } else if (data.code == 1024) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: 'Số điện thoại đã tồn tại',
        }));
      } else {
        throw new Error(data.message);
      }
      setIsLoading(false);
    } catch (e: any) {
      setIsLoading(false);
      throw new Error('Error in register-v2');
    }
  };

  return (
    <>
      <Box>
        <Box mb={6}>
          <Logo />
        </Box>
        <Typography variant="h4" fontWeight="600" mb={3}>
          Tạo tài khoản
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
              <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
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
          <Grid container item xs={12} spacing={2} alignItems="center">
            <Grid item xs={4} display={'flex'}>
              <Typography color="textSecondary" fontWeight={600}>
                Bạn biết đến chúng tôi qua đâu
              </Typography>
            </Grid>
            <Grid item xs={4}>
              {' '}
              <CustomSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={nkow}
                onChange={handleChangenkow}
                fullWidth
              >
                <MenuItem value={'OTHER'}>Kênh khác</MenuItem>
                <MenuItem value={'FACEBOOK'}>Facebook</MenuItem>
                <MenuItem value={'TICTOK'}>TikTok</MenuItem>
                <MenuItem value={'EMAIL'}>Email</MenuItem>
                <MenuItem value={'GOOGLE'}>Google</MenuItem>
                <MenuItem value={'ZALO'}>Zalo</MenuItem>
                <MenuItem value={'FRIEND'}>Bạn bè giới thiệu</MenuItem>
              </CustomSelect>
            </Grid>
          </Grid>
          {/* Fifth Row: Gender */}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={1}>
          {!isLoading ? (
            <Button
              color="primary"
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handleSubmit}
            >
              Đăng ký
            </Button>
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Box>
      {subtitle}
      <AlertChat
        text="Đăng ký thành công"
        openChartAlert={openAlertChat}
        handleClose={setOpenAlertChat}
      />
    </>
  );
};

export default AuthRegister;
