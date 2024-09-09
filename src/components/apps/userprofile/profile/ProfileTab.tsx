import React, { useState } from 'react';
import { Box, Tab, Tabs, Menu, MenuItem, Typography } from '@mui/material';
import { IconHistory, IconPoint, IconUser } from '@tabler/icons-react'; // Sử dụng các icon phù hợp hơn
import { Link, useLocation } from 'react-router-dom';
import { IconUserCircle } from '@tabler/icons-react';
import { IconTicket } from '@tabler/icons-react';

const ProfileTab = () => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleLichSuGiaoDichClick = (event: React.MouseEvent<HTMLElement>) => {
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
      label: 'Lịch sử giao dịch',
      icon: <IconHistory size="20" />,
      dropdown: true,
    },
    // {
    //   label: 'Trợ lý',
    //   icon: <IconUserCircle size="20" />,
    //   to: '/apps/assistant',
    // },
    {
      label: 'Trợ lý',
      icon: <IconUserCircle size="20" />,
      to: '/assistant/list',
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
                  onClick={handleLichSuGiaoDichClick}
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

        {/* Dropdown menu for Lịch sử giao dịch */}
        <Menu
          id="lich-su-giao-dich-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          PaperProps={{
            sx: {
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              minWidth: '200px',
              bgcolor: 'background.paper',
            },
          }}
        >
          <MenuItem
            component={Link}
            to="/purchasehistory"
            onClick={handleClose}
            sx={{
              padding: '10px 20px',
              borderRadius: '8px',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              },
            }}
          >
            <Typography variant="body1" fontWeight="500">
              Lịch sử mua hàng
            </Typography>
          </MenuItem>
          <MenuItem
            component={Link}
            to="/pointhistory"
            onClick={handleClose}
            sx={{
              padding: '10px 20px',
              borderRadius: '8px',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              },
            }}
          >
            <Typography variant="body1" fontWeight="500">
              Lịch sử nạp Point
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default ProfileTab;
