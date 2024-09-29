// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import * as React from 'react';

const Welcome = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  React.useEffect(() => {
    // Update the document title using the browser API
    const timer = setTimeout(() => {
      handleClick();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={2000}
        onClose={handleClose}
        sx={{
          '@media (min-width: 600px)': {
            top: '15px',
            right: '15px',
            left: 'auto',
          },
        }}
      >

        <Alert
          onClose={handleClose}
          variant="filled"
          sx={{ width: '100%', color: 'white', backgroundColor: 'primary.main', textAlign: 'center'  }}
        >
          <AlertTitle>Chào mừng đến với<br />  RedTech </AlertTitle>
          {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography></Typography>
          </Box> */}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default Welcome;
