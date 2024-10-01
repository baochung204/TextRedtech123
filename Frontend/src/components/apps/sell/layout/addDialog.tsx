import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import PopupAdd from './PopupAdd';
// import * as React from 'react';

interface PropsDialog {
  isPopupOpen: boolean,
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const AddDialog = ({ isPopupOpen, setIsPopupOpen }: PropsDialog) => {
  
  // const [value, setValue] = useState('1');

  // Function mở popup

  // Function đóng popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };
  return (
    <Box>
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
