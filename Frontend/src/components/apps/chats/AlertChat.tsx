import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface Props {
  handleClose: (event: React.SyntheticEvent | any) => void;
  openChartAlert: boolean;
  text: string;
}

const AlertChat = ({ handleClose, openChartAlert, text }: Props) => {
  return (
    <Snackbar
      open={openChartAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={1000}
      onClose={handleClose}
    >
      <Alert severity="success" variant="filled" sx={{ width: '100%', color: 'white' }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default AlertChat;
