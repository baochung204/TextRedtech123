import React, { useState } from 'react';
import { Box, Rating, Theme, Typography, Button, useMediaQuery } from '@mui/material';
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
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false); // Track if feedback was submitted

  // Function to handle rating change
  const handleRatingChange = (_event: React.SyntheticEvent, newValue: number | null) => {
    setValue(newValue);
  };

  // Function to handle feedback submission
  const handleSubmitFeedback = () => {
    if (value !== null && !feedbackSubmitted) {
      setOpenChartAlert(true); // Show alert when feedback is submitted
      setFeedbackSubmitted(true); // Prevent multiple submissions
    }
  };

  // Function to handle alert close
  const handleCloseAlert = () => {
    setOpenChartAlert(false);
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
          <Box>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={handleRatingChange} // Call the handler when the rating changes
            />
          </Box>

          {/* Submit Feedback Button */}
          <Box>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleSubmitFeedback}
              disabled={value === null || feedbackSubmitted} // Disable if no rating or already submitted
            >
              Đánh giá
            </Button>
          </Box>
        </Box>
      ) : null}

      {/* Alert component to show after feedback is submitted */}
      <AlertChat
        handleClose={handleCloseAlert}
        openChartAlert={openChartAlert}
        text="Cảm ơn bạn đã đánh giá !!!"
      />
    </>
  );
};

export default ChatInsideSidebar;
