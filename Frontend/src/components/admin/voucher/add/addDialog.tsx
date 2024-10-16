import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface PropsUp {
  isPopupOpen: boolean;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

import AddVoucher from './Addvoucher';
const AddDialogvoucher = ({ isPopupOpen, setIsPopupOpen }: PropsUp) => {

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = () => {

    setIsPopupOpen(false);
  }
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
            maxWidth: '1000PX',
          },
        }}
      >
        <Box>
          <DialogTitle padding={'10px'}>Tạo mã khuyến mãi</DialogTitle>
          <DialogContent>
            <AddVoucher handleSubmit={handleSubmit} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosePopup}>Hủy</Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Lưu
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default AddDialogvoucher;
