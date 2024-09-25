import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  Paper,
  Tooltip,
  useTheme,
} from '@mui/material';
import { IconPlus } from '@tabler/icons-react';

import { useState } from 'react';
import ReactQuill from 'react-quill';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
interface CurrencyType {
  value: string;
  label: string;
}

const currencies: CurrencyType[] = [
  { value: 'female', label: 'Đồng' },
  { value: 'male', label: 'Phần trăm' },
  // { value: 'other', label: 'Khác' },
];
// import * as React from 'react';
const AddNotification = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [value, setValue] = useState('1');

  // Function mở popup
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const [text, setText] = useState('');

  const theme = useTheme();
  const borderColor = theme.palette.divider;
  // Function đóng popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  const [Name, setName] = useState('');

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  return (
    <Box>
      <Tooltip title="Thêm thông báo mới">
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
          <DialogTitle padding={'10px'}>Tạo thông báo</DialogTitle>
          <DialogContent>
            <Box mb={4} p={3} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2 }}>
              <Grid container spacing={1}>
                <Grid item lg={6} md={12}>
                  <CustomFormLabel htmlFor="name-text">Tiêu đề</CustomFormLabel>
                  <CustomTextField
                    id="name-text"
                    variant="outlined"
                    fullWidth
                    placeholder="VD: Thông báo số 1 "
                    value={Name}
                    onChange={handleChange(setName)}
                  />
                </Grid>
                <Grid item lg={6} md={12}>
                  <CustomFormLabel htmlFor="name-text">Tags</CustomFormLabel>
                  <CustomTextField
                    id="name-text"
                    variant="outlined"
                    fullWidth
                    placeholder="VD: Mục số 1"
                    value={Name}
                    onChange={handleChange(setName)}
                  />
                </Grid>
                <Grid item lg={12} md={12}>
                  <CustomFormLabel htmlFor="name-text">Đường dẫn xem thêm</CustomFormLabel>
                  <CustomTextField
                    id="name-text"
                    variant="outlined"
                    fullWidth
                    placeholder="VD:https://example.com/thong-bao-so-1"
                    value={Name}
                    onChange={handleChange(setName)}
                  />
                </Grid>
                <Grid item lg={12} md={12}>
                  <CustomFormLabel htmlFor="name-text">Đường dẫn xem thêm</CustomFormLabel>
                  <Paper sx={{ border: `1px solid ${borderColor}` }} variant="outlined">
                    <ReactQuill
                      value={text}
                      onChange={(value) => {
                        setText(value);
                      }}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Box>
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

export default AddNotification;
