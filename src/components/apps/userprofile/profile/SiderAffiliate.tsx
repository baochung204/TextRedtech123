import React from 'react';
import { Box, Button, Typography } from '@mui/material';
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
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 2, // Adds some margin below the text
            textAlign: 'justify', // Justifies text so that it starts and ends at the same point
            width: '100%', // Ensures the text takes up the full width of the box
          }}
        >
          Bạn muốn kiếm thêm thu nhập từ việc giới thiệu sản phẩm? Hãy chọn phương thức phù hợp với
          bạn nhất!
        </Typography>

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
      </Box>
    </Box>
  );
};

export default SiderAffiliate;
