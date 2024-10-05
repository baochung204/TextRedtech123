import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface PropsUp {
  isPopupOpen: boolean;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

import AddVoucher from './Addvoucher';
// import * as React from 'react';
const AddDialogvoucher = ({ isPopupOpen, setIsPopupOpen }: PropsUp) => {
  // const [value, setValue] = useState('1');

  // Function mở popup
  // const handleOpenPopup = () => {
  //   setIsPopupOpen(true);
  // };

  // Function đóng popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };
  return (
    <Box>
      {/* <Tooltip title="Thêm thông báo mới">
        <Fab size="small" color="secondary" aria-label="plus" onClick={handleOpenPopup}>
          <IconPlus width={18} />
        </Fab>
      </Tooltip> */}
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
          <DialogTitle padding={'10px'}>Tạo mã khuyến mãi</DialogTitle>
          <DialogContent>
            <AddVoucher />
          </DialogContent>
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
