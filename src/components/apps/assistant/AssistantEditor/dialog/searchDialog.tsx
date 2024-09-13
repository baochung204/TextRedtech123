import {
  Avatar,
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  FormControlLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useRef, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { IconPlus } from '@tabler/icons-react';
const emails = ['trithucchochatbot1.jsnl', 'trithuc2.jsnl', 'trithuc3.jsnl'];

const SimpleDialog = () => {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name); // Cập nhật tên file
    }
  };

  const handleAddAccount = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Mở hộp thoại chọn tệp
    }
  };

  const handleToggle = (email: string) => {
    setSelectedValues((prevSelectedValues) =>
      prevSelectedValues.includes(email)
        ? prevSelectedValues.filter((value) => value !== email)
        : [...prevSelectedValues, email],
    );
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        component="span"
        size='small'
        style={{ marginBottom: '10px' }}
        onClick={handleClickOpen}
      >
        <AddIcon fontSize="small" style={{ marginRight: '10px' }} />
        File
      </Button>
      <Typography ml={-30} variant="subtitle1" component="div">
        {selectedValues
          .join('\n')
          .split('\n')
          .map((value, index) => (
            <React.Fragment key={index}>
              {value}
              <br />
            </React.Fragment>
          ))}
      </Typography>
      <Dialog onClose={handleClose} open={open}>
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

          <ListItem autoFocus button onClick={handleAddAccount}>
            <ListItemAvatar>
              <Avatar>
                <IconPlus width={20} height={20} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Thêm trang bị" />
          </ListItem>
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
        <Typography variant="subtitle1" component="div" mt={0} ml={-30}>
          {fileName}
        </Typography>
      )}
    </>
  );
};

export default SimpleDialog;
