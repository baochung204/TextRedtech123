// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import icon1 from 'src/assets/images/svgs/google-icon.svg';
import icon2 from 'src/assets/images/svgs/face.svg';
import CustomSocialButton from '../../../components/forms/theme-elements/CustomSocialButton';
import { Avatar, Box, Stack } from '@mui/material';
import { signInType } from 'src/types/auth/auth';
import { Link } from 'react-router-dom';

const AuthSocialButtons = ({ title }: signInType) => (
  <>
    <Stack direction="row" justifyContent="center" spacing={1} mt={3}>
      <Link to={'/auth/register'}>
        <CustomSocialButton>
          {' '}
          <Box
            sx={{
              minWidth: '148px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              src={icon1}
              alt="Google Icon"
              sx={{
                width: 25,
                height: 25,
                borderRadius: 0,
                mr: 1,
              }}
            />
            <Box
              sx={{ display: { xs: 'none', sm: 'flex' }, whiteSpace: 'nowrap', mr: { sm: '3px' } }}
            >
              {title}
            </Box>
            <Box sx={{ fontWeight: 600, color: 'black', opacity: 0.8, fontSize: 16 }}>Google</Box>
          </Box>
        </CustomSocialButton>
      </Link>
      <Link to={'/auth/register'}>
        <CustomSocialButton>
          <Box
            sx={{
              minWidth: '148px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              src={icon2}
              alt="Facebook Icon"
              sx={{
                width: 25,
                height: 25,
                borderRadius: 0,
                mr: 1,
              }}
            />
            <Box
              sx={{ display: { xs: 'none', sm: 'flex' }, whiteSpace: 'nowrap', mr: { sm: '3px' } }}
            >
              {title}{' '}
            </Box>{' '}
            <Box sx={{ fontWeight: 600, color: 'black', opacity: 0.8, fontSize: 16 }}>Facebook</Box>
          </Box>
        </CustomSocialButton>
      </Link>
    </Stack>
  </>
);

export default AuthSocialButtons;