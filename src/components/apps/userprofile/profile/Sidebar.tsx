import React from 'react';
import { Tabs, Tab, Stack } from '@mui/material';
import { AccountCircle, Business, Email, Person } from '@mui/icons-material'; // Import icons nếu cần

interface SidebarProps {
  selected: string | null;
  onSelect: (buttonName: string) => void;
}

const SCROLLABLE_TAB = [
  { value: 'personal', icon: <Person />, label: 'Thông tin cá nhân' },
  { value: 'account', icon: <AccountCircle />, label: 'Thông tin tài khoản' },
  { value: 'business', icon: <Business />, label: 'Thông tin doanh nghiệp' },
  { value: 'email', icon: <Email />, label: 'Tùy chọn nhận Email' }
];

const Sidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => {

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    onSelect(newValue);
  };

  return (
    <Tabs
      orientation="vertical"
      value={selected}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      sx={{ borderRight: '1px solid #e0e0e0', padding: 2, minWidth: 240 }}
    >
      {SCROLLABLE_TAB.map((tab) => (
        <Tab
          key={tab.value}
          icon={tab.icon}
          label={tab.label}
          value={tab.value}
          sx={{
            display: 'flex',
            minHeight: 72, // Chiều cao tối thiểu cho mỗi tab
            '&.Mui-selected': {
              color: 'primary.main',
              backgroundColor: 'action.hover',
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default Sidebar;
