import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Switch,
  Toolbar,
  Typography,
  styled,
  useMediaQuery,
} from '@mui/material';
import { IconMenu2 } from '@tabler/icons-react';
import { Link as RouterLink } from 'react-router-dom';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import {
  setDarkMode,
  toggleMobileSidebar,
  toggleSidebar,
} from 'src/store/customizer/CustomizerSlice';
import { AppState, useDispatch, useSelector } from 'src/store/Store';
import Language from './Language';
import Navigation from './Navigation';
import Notifications from './Notification';
import Profile from './Profile';
import Search from './Search';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down('xl'));

  // drawer
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  const [check, setCheck] = useState<boolean>(false);

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 53,
    height: 32,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      // margin: 3,
      margin: '4px 0px 0px 0px',
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#aab4be',
          ...theme.applyStyles('dark', {
            backgroundColor: '#8796A5',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: `${!check ? '#FF5757' : '#001e3c'}`,
      width: 25,
      height: 25,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles('dark', {
        backgroundColor: `${!check ? '#FF5757' : '#001e3c'}`,
      }),
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#FFBDBD',
      borderRadius: 20 / 2,
      ...theme.applyStyles('dark', {
        backgroundColor: '#FFBDBD',
      }),
    },
  }));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));
  // const a = 70000;

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
    // if (!check) {
    //   dispatch(setDarkMode('light'))
    // } else dispatch(setDarkMode('dark'))
    if (!check) {
      dispatch(setDarkMode('dark'));
    } else dispatch(setDarkMode('light'));
  };

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        {/* ------------------------------------------- */}
        {/* Toggle Button Sidebar */}
        {/* ------------------------------------------- */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={lgUp ? () => dispatch(toggleSidebar()) : () => dispatch(toggleMobileSidebar())}
        >
          <IconMenu2 size="20" />
        </IconButton>

        {/* ------------------------------------------- */}
        {/* Search Dropdown */}
        {/* ------------------------------------------- */}
        <Search />
        {lgUp ? (
          <>
            <Navigation />
          </>
        ) : null}

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Box
            sx={{
              display: 'flex',

              py: '3px',
              alignItems: 'center',
              // borderRadius: '5px',
              // border: '1px solid #FC2005',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '12px', md: '14px', lg: '16px' },
                fontWeight: 600,
                color: '#FC2032',
                alignItems: 'flex-end',
                position: 'relative',
              }}
            >
              70.000
            </Typography>

            <Box
              component="img"
              src={logoPoint}
              alt=""
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: { xs: '20px', sm: '20px', md: '30px' },
                p: { xs: '2px', sm: '2px', md: '2px', lg: '2px' },
              }}
            />
          </Box>
          <Box sx={{ px: '15px', py: '12px' }}>
            <Link to={'/buy/point'}>
              <Button
                sx={{
                  backgroundColor: '#FC2032',
                  color: 'white',
                  ':hover': { backgroundColor: '#CA0211' },
                  fontSize: { xs: '12px', sm: '12px', md: '14px', lg: '16px', xl: '16px' },
                  px: { xs: '5px', sm: '10px', md: '7px', lg: '20px' },
                }}
              >
                {lgDown ? 'Nạp' : lgUp ? 'Nạp R-Point' : 'Nạp'}
              </Button>
            </Link>
          </Box>
          {lgDown ? null : <Language />}
          {/* ------------------------------------------- */}
          {/* Ecommerce Dropdown */}
          {/* ------------------------------------------- */}
          <Box
            component={RouterLink}
            to="/carts"
            sx={{
              cursor: 'pointer',
              transform: { xs: 'translateX(-30px)', md: 'translateX(0px)' },
            }}
          ></Box>

          {/* ------------------------------------------- */}
          {/* End Ecommerce Dropdown */}
          {/* ------------------------------------------- */}

          <Box sx={{ transform: { xs: 'translateX(-40px)', md: 'translateX(0px)' } }}>
            <Notifications />
          </Box>
          <Box>
            <MaterialUISwitch checked={check} onChange={handleSwitchChange} />
          </Box>
          {/* ------------------------------------------- */}
          {/* Toggle Right Sidebar for mobile */}
          {/* ------------------------------------------- */}
          {/* {lgDown ? <MobileRightSidebar /> : null} */}
          <Box sx={{ transform: { xs: 'translateX(-43px)', md: 'translateX(0px)' } }}>
            <Profile />
          </Box>
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
