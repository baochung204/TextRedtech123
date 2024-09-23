import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface Props {
  handleClose: (event: React.SyntheticEvent | any) => void;
  openChartAlert: boolean;
}

const AlertChat = ({ handleClose, openChartAlert }: Props) => {
  return (
    <Snackbar
      open={openChartAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={1000} // Auto-close after 1 second
      onClose={handleClose}
    >
      <Alert severity="success" variant="filled" sx={{ width: '100%', color: 'white' }}>
        Cảm ơn bạn đã đánh giá !!!
      </Alert>
    </Snackbar>
  );
};

export default AlertChat;
