// src/pages/AllNotifications.tsx
import { Box, Typography, Stack, Avatar, IconButton } from '@mui/material';
import Scrollbar from 'src/components/custom-scroll/Scrollbar';
import * as dropdownData from './data'; // Adjust the path as necessary
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'; // Add an icon for notification
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Icon for timestamps

const AllNotifications = () => {
  return (
    <Box p={4} bgcolor="#f9f9f9">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
        <Typography variant="h4">Tất cả thông báo</Typography>
        <IconButton>
          <NotificationsNoneIcon fontSize="large" color="primary" />
        </IconButton>
      </Stack>

      <Scrollbar sx={{ height: '700px', pr: 2 }}>
        {dropdownData.notifications.map((notification: any, index: number) => (
          <Stack
            key={index}
            direction="row"
            alignItems="center"
            spacing={2}
            mb={3}
            p={2}
            bgcolor="#ffffff"
            borderRadius="12px"
            boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)"
          >
            <Avatar
              src={notification.avatar}
              alt="Avatar"
              sx={{ width: 56, height: 56 }}
            />
            <Box flexGrow={1}>
              <Typography variant="subtitle1" fontWeight={600}>
                {notification.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {notification.subtitle}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                <AccessTimeIcon fontSize="small" color="action" />
                <Typography variant="caption" color="text.secondary">
                  {notification.timestamp}
                </Typography>
              </Stack>
            </Box>
          </Stack>
        ))}
      </Scrollbar>
    </Box>
  );
};

export default AllNotifications;
