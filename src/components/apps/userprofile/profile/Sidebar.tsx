import React from 'react';
import { Button, Stack } from '@mui/material';

interface SidebarProps {
  selected: string | null;
  onSelect: (buttonName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => (
  <Stack spacing={2} sx={{ width: '100%', maxWidth: 240, borderRight: '1px solid #e0e0e0', padding: 2 }}>
    <Button
      variant={selected === 'personal' ? 'contained' : 'outlined'}
      fullWidth
      onClick={() => onSelect('personal')}
    >
      Thông tin cá nhân
    </Button>
    <Button
      variant={selected === 'account' ? 'contained' : 'outlined'}
      fullWidth
      onClick={() => onSelect('account')}
    >
      Thông tin tài khoản
    </Button>
    <Button
      variant={selected === 'business' ? 'contained' : 'outlined'}
      fullWidth
      onClick={() => onSelect('business')}
    >
      Thông tin doanh nghiệp
    </Button>
  </Stack>
);

export default Sidebar;
