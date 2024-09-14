// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import { Grid, Box, Card, Typography, Backdrop } from '@mui/material';

import Logo from 'src/layouts/full/shared/logo/Logo';
import PageContainer from 'src/components/container/PageContainer';

// @ts-ignore

import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';

const ForgotPassword2 = () => {
  const [email, setEmail] = useState('');
  interface Errors {
    email?: string;
  }

  const [errors, setErrors] = useState<Errors>({});

  const [thankYou, setThankYou] = React.useState(false);
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
      {thankYou && (
        <Backdrop
          sx={{
            color: '#fff',
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={thankYou}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '200px',
              color: 'black',
            }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/342/746/original/tick-and-cross-clipart-design-illustration-free-png.png"
              alt=""
              style={{ width: '70px', height: '70px' }}
            />
            <h1>Xin cảm ơn</h1>
            <p>
              Mật khẩu đã được gửi thành công <br />
              Vui lòng kiểm tra mail để lấy mật khẩu của bạn{' '}
            </p>

            <Button
              variant="contained"
              color="primary"
              onClick={() => setThankYou(!thankYou)}
              component={Link}
              to="/auth/login"
              sx={{
                padding: '5px 16px',
                borderRadius: '4px',
                fontSize: '16px',
                textTransform: 'none',
                ':hover': {
                  backgroundColor: 'darkblue', // Customize hover color
                },
              }}
            >
              Tiếp tục
            </Button>
          </Box>
        </Backdrop>
      )}

      <PageContainer title="Forgot Password" description="this is Forgot Password page">
        <Box
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite',
              position: 'absolute',
              height: '100%',
              width: '100%',
              opacity: '0.3',
            },
          }}
        >
          <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
            <Grid
              item
              xs={12}
              sm={12}
              lg={4}
              xl={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
                <Box display="flex" justifyContent="center">
                  <Logo />
                </Box>
                <Typography
                  fontWeight="600"
                  variant="h4"
                  mb={2}
                  display="flex"
                  justifyContent="center"
                >
                  Khôi phục mật khẩu
                </Typography>
                <Typography
                  color="textSecondary"
                  textAlign="center"
                  variant="subtitle2"
                  fontWeight="400"
                >
                  Vui lòng nhập địa chỉ email được liên kết với tài khoản của bạn và chúng tôi sẽ
                  gửi email cho bạn liên kết để thiết lập lại mật khẩu của bạn.
                </Typography>
                <div>
                  <Stack mt={4} spacing={2}>
                    <CustomFormLabel htmlFor="reset-email">Email</CustomFormLabel>
                    <CustomTextField
                      id="reset-email"
                      variant="outlined"
                      fullWidth
                      value={email}
                      onChange={handleEmailChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      label="Vui lòng nhập email "
                    />

                    <Button
                      color="primary"
                      variant="contained"
                      size="large"
                      fullWidth
                      // component={Link}
                      // to="/"
                      onClick={() => setThankYou(!thankYou)}
                    >
                      Gửi yêu cầu
                    </Button>
                    <Button
                      color="primary"
                      size="large"
                      fullWidth
                      component={Link}
                      to="/auth/login"
                    >
                      Trở lại đăng nhập
                    </Button>
                  </Stack>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </>
  );
};

export default ForgotPassword2;
