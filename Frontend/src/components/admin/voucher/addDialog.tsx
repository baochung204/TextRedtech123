import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Tooltip,
  Fab,
} from '@mui/material';
import { IconPlus } from '@tabler/icons-react';

import { useState } from 'react';
import Scrollbar from 'src/components/custom-scroll/Scrollbar';
import PopupAdd from 'src/views/apps/customerList/PopupAdd';
// import * as React from 'react';
const AddDialogvoucher = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [value, setValue] = useState('1');

  // Function mở popup
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // Function đóng popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };
  return (
    <Box>
      <Tooltip title="Thêm">
        <Fab size="small" color="secondary" aria-label="plus" onClick={handleOpenPopup}>
          <IconPlus width={18} />
        </Fab>
      </Tooltip>
      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        maxWidth="lg"
        sx={{
          '& .MuiDialog-container': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '1000PX', // Giữ chiều rộng của Dialog
          },
        }}
      >
        <Box>
          <DialogTitle padding={'10px'}>Thêm Voucher</DialogTitle>
          <DialogContent>{/* <PopupAdd /> Gọi component PopupAdd */}</DialogContent>
          <DialogActions>
            <Button onClick={handleClosePopup}>Hủy</Button>
            <Button onClick={handleClosePopup} variant="contained" color="primary">
              Lưu
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default AddDialogvoucher;
