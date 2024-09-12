import DescriptionIcon from '@mui/icons-material/Description';
import { Box, Menu, MenuItem, Tab, Tabs, Typography } from '@mui/material';
import {
  IconCoin,
  IconHistory,
  IconShoppingCart,
  IconTicket,
  IconUser,
  IconUserCircle,
} from '@tabler/icons-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProfileTab = () => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const [anchorElTransaction, setAnchorElTransaction] = useState<null | HTMLElement>(null);
  const [anchorElContract, setAnchorElContract] = useState<null | HTMLElement>(null);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleLichSuGiaoDichClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTransaction(event.currentTarget);
  };

  const handleHopDongClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElContract(event.currentTarget);
  };

  const handleCloseTransaction = () => {
    setAnchorElTransaction(null);
  };

  const handleCloseContract = () => {
    setAnchorElContract(null);
  };

  interface profileType {
    label: string;
    icon: JSX.Element;
    to?: string;
    dropdown?: boolean;
    handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
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
      handleClick: handleLichSuGiaoDichClick,
    },
    {
      label: 'Hợp đồng',
      icon: <DescriptionIcon fontSize="small" />,
      dropdown: true,
      handleClick: handleHopDongClick,
    },
    {
      label: 'Trợ lý',
      icon: <IconUserCircle size="20" />,
      to: '/assistant/list',
    },
    {
      label: 'Ticket',
      icon: <IconTicket size="20" />,
      to: '/apps/chats',
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
                  onClick={tab.handleClick}
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
                  to={tab.to || ''}
                  value={tab.to || ''}
                />
              );
            }
          })}
        </Tabs>

        {/* Dropdown menu for Lịch sử giao dịch */}
        <Menu
          id="lich-su-giao-dich-menu"
          anchorEl={anchorElTransaction}
          open={Boolean(anchorElTransaction)}
          onClose={handleCloseTransaction}
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
            onClick={handleCloseTransaction}
            sx={{
              padding: '10px 20px',
              borderRadius: '8px',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              },
            }}
          >
            <IconShoppingCart size="20" style={{ marginRight: '8px' }} />
            <Typography variant="body1" fontWeight="500">
              Lịch sử mua hàng
            </Typography>
          </MenuItem>
          <MenuItem
            component={Link}
            to="/pointhistory"
            onClick={handleCloseTransaction}
            sx={{
              padding: '10px 20px',
              borderRadius: '8px',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              },
            }}
          >
            <IconCoin size="20" style={{ marginRight: '8px' }} />
            <Typography variant="body1" fontWeight="500">
              Lịch sử nạp Point
            </Typography>
          </MenuItem>
        </Menu>

        {/* Dropdown menu for Hợp đồng */}
        <Menu
          id="hop-dong-menu"
          anchorEl={anchorElContract}
          open={Boolean(anchorElContract)}
          onClose={handleCloseContract}
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
            to="/contracthistory"
            onClick={handleCloseContract}
            sx={{
              padding: '10px 20px',
              borderRadius: '8px',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              },
            }}
          >
            <DescriptionIcon style={{ marginRight: '8px' }} />
            <Typography variant="body1" fontWeight="500">
              Hợp đồng affiliate
            </Typography>
          </MenuItem>
          <MenuItem
            component={Link}
            to="/contracthistory"
            onClick={handleCloseContract}
            sx={{
              padding: '10px 20px',
              borderRadius: '8px',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              },
            }}
          >
            <DescriptionIcon style={{ marginRight: '8px' }} />
            <Typography variant="body1" fontWeight="500">
              Hợp đồng mua hàng
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default ProfileTab;
