// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Theme,
  Toolbar,
  styled,
  useMediaQuery,
} from '@mui/material';

import { IconMenu2 } from '@tabler/icons-react';
import Logo from 'src/layouts/full/shared/logo/Logo';
import Cart from 'src/layouts/full/vertical/header/Cart';
import Language from 'src/layouts/full/vertical/header/Language';
import Navigation from 'src/layouts/full/vertical/header/Navigation';
import Notifications from 'src/layouts/full/vertical/header/Notification';
import Profile from 'src/layouts/full/vertical/header/Profile';
import Search from 'src/layouts/full/vertical/header/Search';
import { AppState, useDispatch, useSelector } from 'src/store/Store';
import { toggleMobileSidebar } from 'src/store/customizer/CustomizerSlice';

const Header = () => {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  // drawer
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',

    [theme.breakpoints.up('lg')]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    margin: '0 auto',
    width: '100%',
    color: `${theme.palette.text.secondary} !important`,
  }));

  return (
    <AppBarStyled position="sticky" color="default" elevation={8}>
      <ToolbarStyled
        sx={{
          maxWidth: customizer.isLayout === 'boxed' ? 'lg' : '100%!important',
        }}
      >
        <Box sx={{ width: lgDown ? '45px' : 'auto', overflow: 'hidden' }}>
          <Logo />
        </Box>
        {/* ------------------------------------------- */}
        {/* Toggle Button Sidebar */}
        {/* ------------------------------------------- */}
        {lgDown ? (
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={() => dispatch(toggleMobileSidebar())}
          >
            <IconMenu2 />
          </IconButton>
        ) : (
          ''
        )}
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
          <Language />
          {/* ------------------------------------------- */}
          {/* Ecommerce Dropdown */}
          {/* ------------------------------------------- */}
          <Cart />
          {/* ------------------------------------------- */}
          {/* End Ecommerce Dropdown */}
          {/* ------------------------------------------- */}
          <Notifications />
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
