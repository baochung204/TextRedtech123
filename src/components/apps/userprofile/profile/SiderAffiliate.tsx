import React from 'react';
import { Box, Button, Switch } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const SiderAffiliate = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Centers the box horizontally
        mt: 5, // Optional: Adds some margin at the top to position it better vertically
      }}
    >
      <Box
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          boxShadow: 3, // Optional shadow
          borderRadius: 2, // Optional rounded corners
          backgroundColor: 'white', // Optional background color
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          component={Link}
          to="/apps/person-affiliate"
        >
          Cá nhân
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          component={Link}
          to="/apps/company-affiliate"
        >
          Doanh nghiệp
        </Button>
        <Box textAlign="center">
          <Switch defaultChecked />
        </Box>
      </Box>
    </Box>
  );
};

export default SiderAffiliate;
