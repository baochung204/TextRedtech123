import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import AddFlashSale from './AddSale';

interface PropsUp {
  isPopupOpen: boolean;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddDflashsale = ({ isPopupOpen, setIsPopupOpen }: PropsUp) => {
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
       
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
        <Box>
          <DialogTitle padding={'10px'}>Tạo Flash-sale</DialogTitle>
          <DialogContent>
            <AddFlashSale />
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

export default AddDflashsale;
