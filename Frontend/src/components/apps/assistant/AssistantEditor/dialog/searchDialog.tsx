import {
  Checkbox,
  Dialog,
  DialogTitle,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import React, { useRef, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';
const emails = ['trithucchochatbot1.jsnl', 'trithuc2.jsnl', 'trithuc3.jsnl', 'trithucchochatbot.jsnl', 'trithucchochatbot11.jsnl', 'trithucchochatbot12.jsnl',];
interface PropsSearch {
  openSearch: boolean;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
const SimpleDialog: React.FC<PropsSearch> = ({ openSearch, setOpenSearch }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClose = () => {
    setOpenSearch(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name); // Cập nhật tên file
    }
  };

  // const handleAddAccount = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click(); // Mở hộp thoại chọn tệp
  //   }
  // };

  const handleToggle = (email: string) => {
    setSelectedValues((prevSelectedValues) =>
      prevSelectedValues.includes(email)
        ? prevSelectedValues.filter((value) => value !== email)
        : [...prevSelectedValues, email],
    );
  };

  return (
    <>
      <Typography variant="subtitle1" component="div">
        <Scrollbar_y sx={{ height: '80px' }}>
          {selectedValues
            .join('\n')
            .split('\n')
            .map((value, index) => (
              <React.Fragment key={index}>
                {value}
                <br />
              </React.Fragment>

            ))}
        </Scrollbar_y>
      </Typography>
      <Dialog onClose={handleClose} open={openSearch}>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          Chọn file
          <CloseIcon onClick={handleClose} style={{ cursor: 'pointer', opacity: 0.7 }} />
        </DialogTitle>
        <List sx={{ pt: 0 }}>
          {emails.map((email) => (
            <ListItem key={email}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedValues.includes(email)}
                    onChange={() => handleToggle(email)}
                  />
                }
                label=""
              />
              <ListItemText primary={email} />
            </ListItem>
          ))}

          {/* <ListItem autoFocus button onClick={handleAddAccount}>
            <ListItemAvatar>
              <Avatar>
                <IconPlus width={20} height={20} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Thêm trang bị" />
          </ListItem> */}
        </List>
      </Dialog>

      {/* Hộp thoại upload file */}
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      {fileName && (
        <Typography variant="subtitle1" component="div" mt={0}>
          {fileName}
        </Typography>
      )}
    </>
  );
};

export default SimpleDialog;
