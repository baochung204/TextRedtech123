// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Button, Divider, Grid, Paper, styled } from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';
import AppLinks from 'src/layouts/full/vertical/header/AppLinks';
import Language from 'src/layouts/full/vertical/header/Language';
import Notifications from 'src/layouts/full/vertical/header/Notification';
import Profile from 'src/layouts/full/vertical/header/Profile';
import QuickLinks from 'src/layouts/full/vertical/header/QuickLinks';
import DemosDD from './DemosDD';

const Navigations = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: '16px',
    color: theme.palette.text.secondary,
  }));

  // demos
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // pages

  const [open2, setOpen2] = useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <>
      <StyledButton
        color="inherit"
        variant="text"
        aria-expanded={open ? 'true' : undefined}
        sx={{
          color: open ? 'primary.main' : (theme) => theme.palette.text.secondary,
        }}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        endIcon={<IconChevronDown size="15" style={{ marginLeft: '-5px', marginTop: '2px' }} />}
      >
        Trang chủ
      </StyledButton>
      {open && (
        <Paper
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          sx={{
            position: 'absolute',
            left: '0',
            right: '0',
            top: '55px',
            maxWidth: '1200px',
            width: '100%',
          }}
        >
          <DemosDD />
        </Paper>
      )}
      <Box>
        <StyledButton
          color="inherit"
          variant="text"
          onMouseEnter={handleOpen2}
          onMouseLeave={handleClose2}
          sx={{
            color: open2 ? 'primary.main' : (theme) => theme.palette.text.secondary,
          }}
          endIcon={<IconChevronDown size="15" style={{ marginLeft: '-5px', marginTop: '2px' }} />}
        >
          Assistant
        </StyledButton>
        {open2 && (
          <Paper
            onMouseEnter={handleOpen2}
            onMouseLeave={handleClose2}
            sx={{
              position: 'absolute',
              left: '0',
              right: '0',
              top: '55px',
              width: '850px',
              margin: '0 auto',
            }}
          >
            <Grid container>
              <Grid item sm={8} display="flex">
                <Box p={4} pr={0} pb={3}>
                  <AppLinks />
                </Box>
                <Divider orientation="vertical" />
              </Grid>
              <Grid item sm={4}>
                <Box p={4}>
                  <QuickLinks />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Box>
      <StyledButton
        color="inherit"
        variant="text"
        href="https://demos.adminmart.com/premium/react/modernize-react/docs/index.html"
      >
        giới thiệu
      </StyledButton>
      <StyledButton color="inherit" variant="text" href="https://adminmart.com/support/">
        Liên hệ
      </StyledButton>
      <StyledButton color="inherit" variant="text" href="https://adminmart.com/support/">
        Mua point
      </StyledButton>
      <StyledButton color="inherit" variant="text" href="https://adminmart.com/support/">
        Mua dịch vụ
      </StyledButton>
      {/* <Button color="primary" target="_blank" variant="contained" href="#">
                Buy Now
            </Button> */}
      <Language />
      <Notifications />
      <Profile />
    </>
  );
};

export default Navigations;
