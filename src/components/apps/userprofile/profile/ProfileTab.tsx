import React, { useState } from 'react';
import { Box, Tab, Tabs, Menu, MenuItem } from '@mui/material';
import { IconLock, IconUser, IconUserCircle, IconTicket } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

const ProfileTab = () => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleBảoMậtClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  interface profileType {
    label: string;
    icon: JSX.Element;
    to?: string;
    dropdown?: boolean;
  }

  const ProfileTabs: profileType[] = [
    {
      label: 'Thông tin cá nhân',
      icon: <IconUser size="20" />,
      to: '/user-profile',
    },
    {
      label: 'Bảo mật',
      icon: <IconLock size="20" />,
      dropdown: true,
    },
    {
      label: 'Trợ lý',
      icon: <IconUserCircle size="20" />,
      to: '/apps/assistant',
    },
    {
      label: 'Ticket',
      icon: <IconTicket size="20" />,
      to: '/apps/gallery',
    },
  ];

  return (
    <Box mt={1} sx={{ mt: 1, backgroundColor: (theme) => theme.palette.grey[100] }}>
      <Box
        justifyContent="end"
        display="flex"
        sx={{ overflow: 'auto', width: { xs: '333px', sm: 'auto' } }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="profile tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          {ProfileTabs.map((tab) => {
            if (tab.dropdown) {
              return (
                <Tab
                  key={tab.label}
                  iconPosition="start"
                  label={tab.label}
                  sx={{ minHeight: '50px' }}
                  icon={tab.icon}
                  onClick={handleBảoMậtClick}
                />
              );
            } else {
              return (
                <Tab
                  key={tab.label}
                  iconPosition="start"
                  label={tab.label}
                  sx={{ minHeight: '50px' }}
                  icon={tab.icon}
                  component={Link}
                  to={tab.to}
                  value={tab.to}
                />
              );
            }
          })}
        </Tabs>

        {/* Dropdown menu for Bảo mật */}
        <Menu
          id="bao-mat-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <MenuItem component={Link} to="/pages/account-settings" onClick={handleClose}>
            Đổi mật khẩu
          </MenuItem>
          <MenuItem component={Link} to="/auth/two-steps" onClick={handleClose}>
            Bảo mật 2 lớp
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default ProfileTab;
