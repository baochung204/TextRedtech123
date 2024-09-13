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
import PopupAddList2 from './PopupAddlist2';
import { useState } from 'react';
// import * as React from 'react';
const AddDialog = () => {
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
            width: '40%',
            maxWidth: 'none', // Giữ chiều rộng của Dialog
          },
        }}
      >
        <DialogTitle padding={'10px'}>Thêm sản phẩm</DialogTitle>
        <DialogContent>
          <PopupAddList2 /> {/* Gọi component PopupAdd */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup}>Hủy</Button>
          <Button onClick={handleClosePopup} variant="contained" color="primary">
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddDialog;
