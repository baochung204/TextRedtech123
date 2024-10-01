import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Tooltip,
} from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import PopupAdd from './PopupAdd';
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
        <Fab size="small" color="primary" aria-label="plus" onClick={handleOpenPopup}>
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
            maxWidth: '1000px', // Giữ chiều rộng của Dialog
          },
        }}
      >
        <DialogTitle>Thêm sản phẩm</DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <PopupAdd />
          {/* Gọi component PopupAdd */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup}>Hủy</Button>
          <Button onClick={handleClosePopup} variant="contained" color="primary">
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddDialog;
