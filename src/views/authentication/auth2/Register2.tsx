// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Grid, Box, Card, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';

import AuthRegister from '../authForms/AuthRegister';
import AuthSocialButtons from '../authForms/AuthSocialButtons';

const Register2 = () => (
  <PageContainer title="Register" description="this is Register page">
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
          lg={8}
          xl={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%' }}>
            <Grid container spacing={4}>
              {/* Left Column */}
              <Grid item xs={12} md={6}>
                <Box display="flex" alignItems="center" justifyContent="center" sx={{ mb: 3 }}>
                  <Logo />
                </Box>

                <Stack direction="row" spacing={1} mt={3}>
                  <Typography color="textSecondary" variant="h6" fontWeight="400">
                    Bạn đã có tài khoản?
                  </Typography>
                  <Typography
                    component={Link}
                    to="/auth/login2"
                    fontWeight="500"
                    sx={{
                      textDecoration: 'none',
                      color: 'primary.main',
                    }}
                  >
                    Đăng nhập
                  </Typography>
                </Stack>
              </Grid>

              {/* Right Column */}
              <Grid item xs={12} md={6}>
                <AuthRegister />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </PageContainer>
);

export default Register2;
