import { AccountCircle, Business, Email, Person, Security } from '@mui/icons-material'; // Import icons nếu cần
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Box, Tab, Tabs } from '@mui/material';
import { IconLock } from '@tabler/icons-react';
import React from 'react';
import { setSelected } from 'src/store/RouterSlice';
import { dispatch } from 'src/store/Store';
interface SidebarProps {
  selected: string | null;
  onSelect: (buttonName: string) => void;
}

const SCROLLABLE_TAB = [
  { value: 'personal', icon: <Person />, label: 'Thông tin cá nhân' },
  { value: 'account', icon: <AccountCircle />, label: 'Thông tin tài khoản' },
  { value: 'business', icon: <Business />, label: 'Thông tin doanh nghiệp' },
  { value: 'bankking', icon: <AccountBalanceIcon />, label: 'Thông tin ngân hàng' },
  { value: 'email', icon: <Email />, label: 'Tùy chọn nhận Email' },
  { value: 'changepassword', icon: <IconLock />, label: 'Đổi mật khẩu' },
  { value: 'twofactorsecurity', icon: <Security />, label: 'Bảo mật 2 lớp' },
];

const Sidebar: React.FC<SidebarProps> = ({ selected }) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    dispatch(setSelected(newValue));
  };

  return (
    <Tabs
      orientation="vertical"
      value={selected}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      sx={{
        borderRight: '1px solid #e0e0e0',
        padding: 2,
        minWidth: 240,
        textAlign: 'left',
      }}
    >
      {SCROLLABLE_TAB.map((tab) => (
        <Tab
          key={tab.value}
          label={
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                justifyContent: 'flex-start',
                textAlign: 'left',
                paddingLeft: 0,
                fontWeight: 'bold',
              }}
            >
              {tab.icon}
              {tab.label}
            </Box>
          }
          value={tab.value}
          sx={{
            minHeight: 72,
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingLeft: 1,
            '&.Mui-selected': {
              color: 'primary.main',
              backgroundColor: 'action.hover',
            },
            '& .MuiTab-wrapper': {
              justifyContent: 'flex-start',
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default Sidebar;
