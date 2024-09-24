import React, { useState } from 'react';
import { Box, Rating, Theme, Typography, useMediaQuery } from '@mui/material';
import { ChatsType } from 'src/types/apps/chat';
import AlertChat from './AlertChat'; // Import the AlertChat component

interface chatType {
  isInSidebar?: boolean;
  chat?: ChatsType;
}

const drawerWidth = 320;

const ChatInsideSidebar = ({ isInSidebar }: chatType) => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const [value, setValue] = useState<number | null>(0);
  const [openChartAlert, setOpenChartAlert] = useState(false); // State to control alert visibility

  // Function to handle rating change
  const handleRatingChange = (_event: React.SyntheticEvent, newValue: number | null) => {
    setValue(newValue);
    if (newValue !== null) {
      setOpenChartAlert(true); // Show alert when rating is selected
    }
  };

  // Function to handle alert close
  const handleCloseAlert = (_event: React.SyntheticEvent | any) => {
    setOpenChartAlert(false); // Close alert
  };

  return (
    <>
      {isInSidebar ? (
        <Box
          sx={{
            width: isInSidebar === true ? drawerWidth : 0,
            flexShrink: 0,
            border: '0',
            borderLeft: '1px',
            borderStyle: 'solid',
            right: '0',
            background: (theme) => theme.palette.background.paper,
            boxShadow: lgUp ? null : (theme) => theme.shadows[8],
            position: lgUp ? 'relative' : 'absolute',
            borderColor: (theme) => theme.palette.divider,
          }}
          p={3}
        >
          {/* Rating Section */}
          <Typography variant="h6" mt={5} mb={2}>
            Bạn đánh giá thế nào về lần hỗ trợ lần này?
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={handleRatingChange} // Call the handler when the rating changes
          />
        </Box>
      ) : null}

      {/* Alert component to show after rating */}
      <AlertChat handleClose={handleCloseAlert} openChartAlert={openChartAlert} />
    </>
  );
};

export default ChatInsideSidebar;
