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
  const a = 70000;
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
              borderRadius: '5px',
              border: '1px solid #FC2005',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px' },
                fontWeight: 600,
                color: '#FC2032',
                alignItems: 'flex-end',
                position: 'relative',
              }}
            >
              {a.toLocaleString('vn-VN')}
            </Typography>

            <Box
              component="img"
              src={logochicken}
              alt=""
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: { xs: '20px', sm: '20px', md: '30px' }, // Điều chỉnh kích thước theo từng breakpoint
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
                  fontSize: { xs: '12px', sm: '12px', md: '14px' },
                  px: { xs: '5px', sm: '10px', md: '7px' },
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
