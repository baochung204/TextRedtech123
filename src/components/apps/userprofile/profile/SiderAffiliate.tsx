import React from 'react';
import { Box, Button } from '@mui/material';

const drawerWidth = 240;

const SiderAffiliate = ({ onTabChange }: { onTabChange: (tab: string) => void }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={() => onTabChange('Cá nhân')}
        >
          Cá nhân
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={() => onTabChange('Doanh nghiệp')}
        >
          Doanh nghiệp
        </Button>
      </Box>
    </Box>
  );
};

export default SiderAffiliate;
