// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  TextField,
  CircularProgress,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { loginType } from 'src/types/auth/auth';
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';

import AuthSocialButtons from './AuthSocialButtons';
import ApiService from 'src/service/ApiService';

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [inputValue, setInputValue] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true';

    if (savedRememberMe) {
      setRememberMe(savedRememberMe);
      setInputValue(savedUsername || '');
      setPassword(savedPassword || '');
    }
  }, []);

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

  const handleLogin = async () => {
    // Kiểm tra có lỗi không trước khi gọi API
    if (errors.input || errors.password || !inputValue || !password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: 'Vui lòng điền đầy đủ và chính xác thông tin',
      }));
      return;
    }

    setIsLoading(true);

    try {
      // Gọi API đăng nhập
      const response = await ApiService.loginUser(inputValue, password);
      console.log(response);

      // Kiểm tra phản hồi từ server
      if (response && response.code === 200) {
        const { accessToken, refreshToken, roles, userId, tokenExpired } = response.result;

        // Lưu token và roles vào localStorage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('roles', JSON.stringify(roles));
        localStorage.setItem('userId', JSON.stringify(userId));
        localStorage.setItem('tokenExpired', tokenExpired);

        // Nếu Remember Me được chọn, lưu thông tin vào localStorage
        if (rememberMe) {
          localStorage.setItem('username', inputValue);
          localStorage.setItem('password', password);
          localStorage.setItem('rememberMe', 'true');
        } else {
          // Xóa thông tin nếu không chọn Remember Me
          localStorage.removeItem('username');
          localStorage.removeItem('password');
          localStorage.setItem('rememberMe', 'false');
        }

        // Chuyển hướng người dùng đến trang chính (hoặc trang dashboard)
        navigate('/dashboards');
      } else if (response.code === 1004) {
        setErrors({ form: 'Tài khoản không tồn tại, vui lòng kiểm tra lại.' });
        console.log('Tài khoản không tồn tại');
      } else if (response.code === 1005) {
        setErrors({ form: 'Mật khẩu không chính xác, vui lòng kiểm tra lại.' });
      } else if (response.code === 1006) {
        setErrors({ form: 'Tài khoản của bạn đã bị khóa.' });
      } else {
        setErrors({ form: 'Đăng nhập thất bại, vui lòng kiểm tra lại.' });
      }
      setIsLoading(false);
    } catch (error: any) {
      // Kiểm tra xem lỗi có phải là từ phản hồi của server
      if (error.response && error.response.data && error.response.data.code) {
        const serverError = error.response.data;
        // Bắt mã lỗi từ server
        if (serverError.code === 1004) {
          setErrors({ input: 'Tài khoản không tồn tại.' });
          console.log('Tài khoản không tồn tại');
        } else if (serverError.code === 1013) {
          setErrors({ password: 'Mật khẩu không chính xác.' });
        } else if (serverError.code === 1006) {
          setErrors({ form: 'Tài khoản bị khóa.' });
        } else {
          setErrors({ form: 'Lỗi không xác định từ máy chủ.' });
        }
      } else {
        // Nếu lỗi không đến từ phản hồi của server
        console.error('Error logging in:', error);
        setErrors({ form: 'Đăng nhập thất bại, vui lòng kiểm tra lại.' });
      }
      setIsLoading(false);
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
            <FormControlLabel
              control={
                <CustomCheckbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Nhớ mật khẩu"
            />
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
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        {!isLoading ? (
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            onClick={handleLogin}
            type="submit"
          >
            Đăng nhập
          </Button>
        ) : (
          <CircularProgress />
        )}
      </Box>
      {subtitle}
    </>
  );
};

export default AuthLogin;
