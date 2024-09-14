import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  styled,
  useMediaQuery,
} from '@mui/material';
import { IconMenu2 } from '@tabler/icons-react';
import { Link as RouterLink } from 'react-router-dom';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import { toggleMobileSidebar, toggleSidebar } from 'src/store/customizer/CustomizerSlice';
import { AppState, useDispatch, useSelector } from 'src/store/Store';
import Cart from './Cart';
import Language from './Language';
import MobileRightSidebar from './MobileRightSidebar';
import Navigation from './Navigation';
import Notifications from './Notification';
import Profile from './Profile';
import Search from './Search';

import { Link } from 'react-router-dom';
const Header = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down('xl'));

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
  // const a = 70000;
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
              gap: 1,
              px: '15px',
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
                p: '2px',
              }}
            />
          </Box>
          <Box sx={{ p: '12px' }}>
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
          <Language />
          {/* ------------------------------------------- */}
          {/* Ecommerce Dropdown */}
          {/* ------------------------------------------- */}
          <Box component={RouterLink} to="/apps/ecommerce/eco-checkout" sx={{ cursor: 'pointer' }}>
            <Cart />
          </Box>

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
