import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Switch,
  Toolbar,
  styled,
  useMediaQuery,
} from '@mui/material';
import { IconMenu2 } from '@tabler/icons-react';
import {
  setDarkMode,
  toggleMobileSidebar,
  toggleSidebar,
} from 'src/store/customizer/CustomizerSlice';
import { AppState, useDispatch, useSelector } from 'src/store/Store';
import Language from './Language';
import MobileRightSidebar from './MobileRightSidebar';
import Notifications from './Notification';
import Profile from './Profile';
import SearchAdmin from './SearchAdmin';
import { useState } from 'react';

const HeaderAdmin = () => {
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
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
    // if (!check) {
    //   dispatch(setDarkMode('light'))
    // } else dispatch(setDarkMode('dark'))
    if (!check) {
      dispatch(setDarkMode('dark'));
    } else dispatch(setDarkMode('light'));
  };
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
        <SearchAdmin />

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Language />

          <Notifications />

          <Box>
            <MaterialUISwitch checked={check} onChange={handleSwitchChange} />
          </Box>

          {lgDown ? <MobileRightSidebar /> : null}

          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default HeaderAdmin;
