import { useTheme } from '@emotion/react';
import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';
import Otp from './Otp';
import AlertChat from 'src/components/apps/chats/AlertChat';

const ContractAffiliateUser = () => {
  const theme = useTheme(); // Get theme to check dark/light mode
  const isDarkMode = theme.palette.mode === 'dark';

  const [open, setOpen] = useState(false);
  const [openOtpDialog, setOpenOtpDialog] = useState(false); // State for OTP dialog
  const [openChartAlert, setOpenChartAlert] = useState(false); // State for alert

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenOtpDialog = () => {
    setOpen(false); // Close the first dialog
    setOpenOtpDialog(true); // Open the OTP dialog
  };

  const handleCloseOtpDialog = () => {
    setOpenOtpDialog(false);
  };

  const handleAlertClose = () => {
    setOpenChartAlert(false);
  };

  const handleOtpSubmit = () => {
    // Logic for verifying account can be added here
    setOpenChartAlert(true); // Show the success alert after OTP verification
    handleCloseOtpDialog(); // Close the OTP dialog
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <ProfileBanner />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: 'center',
              border: `2px solid ${isDarkMode ? '#444' : '#ddd'}`,
              borderRadius: '10px',
              padding: '20px',
              color: isDarkMode ? '#fff' : '#000',
            }}
          >
            <Grid item xs={12} sm={12}>
              {/* Success Message */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: theme.palette.success.main,
                  margin: '20px 0',
                }}
              >
                Bạn đã đăng ký thành công!
              </Typography>
              <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Ký hợp đồng ngay
              </Button>

              {/* First Popup Dialog */}
              <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
                PaperProps={{
                  sx: {
                    width: '400px',
                    maxWidth: '100%',
                  },
                }}
              >
                <DialogTitle sx={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
                  Hợp Đồng
                </DialogTitle>
                <DialogContent>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
                  >
                    <Button sx={{ width: '150px' }}>Ký USB</Button>
                    <Button sx={{ width: '150px' }} onClick={handleOpenOtpDialog}>
                      Ký OTP
                    </Button>
                  </Box>
                </DialogContent>
              </Dialog>

              {/* Second Popup Dialog for OTP */}
              <Dialog
                open={openOtpDialog}
                onClose={handleCloseOtpDialog}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                  sx: {
                    width: '500px',
                    maxWidth: '100%',
                  },
                }}
              >
                <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
                  Xác nhận OTP
                </DialogTitle>
                <DialogContent
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '40px',
                  }}
                >
                  <Otp onOtpSubmit={handleOtpSubmit} /> {/* Pass the submit handler */}
                </DialogContent>
              </Dialog>

              {/* AlertChat Component */}
              <AlertChat
                handleClose={handleAlertClose}
                openChartAlert={openChartAlert}
                text="Xác minh tài khoản thành công!" // Success Alert message
              />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ContractAffiliateUser;
