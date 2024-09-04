import {
  IconButton,
  Box,
  AppBar,
  useMediaQuery,
  Toolbar,
  styled,
  Stack,
  Button,
  Typography,
} from '@mui/material';

import { useSelector, useDispatch } from 'src/store/Store';
import { toggleSidebar, toggleMobileSidebar } from 'src/store/customizer/CustomizerSlice';
import { IconMenu2 } from '@tabler/icons-react';
import Notifications from './Notification';
import Profile from './Profile';
import Cart from './Cart';
import Search from './Search';
import Language from './Language';
import { AppState } from 'src/store/Store';
import Navigation from './Navigation';
import MobileRightSidebar from './MobileRightSidebar';
import logochicken from 'src/assets/images/logos/logo chicken.png';
import { Link } from 'react-router-dom';
const Header = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down('lg'));

  // drawer
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

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
          <Box sx={{ display: 'flex', gap: 1, p: '12px', alignItems: 'center' }}>
            <Typography
              sx={{
                fontSize: { sx: '14px', sm: '16px' },
                fontWeight: 600,
                color: '#FC2032',
                alignItems: 'flex-end',
                position: 'relative',
              }}
            >
              70000
            </Typography>
            {/* <Box sx={{ backgroundColor: 'black', w: '40px', h: '40px' }}>
              <img src={logochicken} alt="" width={30} height={30} style={{ padding: '2px' }} />
            </Box> */}
            <img src={logochicken} alt="" width={30} height={30} />
          </Box>
          <Box sx={{ p: '12px' }}>
            <Link to={'/buy/point'}>
              <Button
                sx={{
                  backgroundColor: '#FC2032',
                  color: 'white',
                  ':hover': { backgroundColor: '#CA0211' },
                  fontSize: { xs: '12px', sm: '14px', md: '16px' },
                  px: { xs: '5px', sm: '10px', md: '20px' },
                }}
              >
                Nạp Gà
              </Button>
            </Link>
          </Box>
          <Language />
          {/* ------------------------------------------- */}
          {/* Ecommerce Dropdown */}
          {/* ------------------------------------------- */}
          <Cart />
          {/* ------------------------------------------- */}
          {/* End Ecommerce Dropdown */}
          {/* ------------------------------------------- */}
          <Notifications />
          {/* ------------------------------------------- */}
          {/* Toggle Right Sidebar for mobile */}
          {/* ------------------------------------------- */}
          {lgDown ? <MobileRightSidebar /> : null}
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
