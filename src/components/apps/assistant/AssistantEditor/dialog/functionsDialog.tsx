import React, { useState, useRef } from 'react';
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Checkbox,
  FormControlLabel,
} from '@mui/material';


import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
const functions = ['trithucchochatbot1.jsnl', 'trithuc2.jsnl', 'trithuc3.jsnl'];

const FunctionsDialog = () => {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleToggle = (email: string) => {
    setSelectedValues(prevSelectedValues =>
      prevSelectedValues.includes(email)
        ? prevSelectedValues.filter(value => value !== email)
        : [...prevSelectedValues, email]
    );
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        component="span"
        style={{ marginBottom: '10px' }}
        onClick={handleClickOpen}
      >
        <AddIcon fontSize='small' style={{ marginRight: '10px' }} />File
        
      </Button>
      <Typography ml={-30} variant="subtitle1" component="div">
        {selectedValues.join('\n').split('\n').map((value, index) => (
            <React.Fragment key={index}>
              {value}
              <br />
            </React.Fragment>
          ))}
      </Typography>
      <Dialog onClose={handleClose} open={open} >
        <DialogTitle 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center'
          }}>Chọn file<CloseIcon onClick={handleClose} style={{cursor:'pointer',opacity:0.7}}/></DialogTitle>
        <List sx={{ pt: 0 }}>
          {functions.map((email) => (
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
        </List>
      </Dialog>


    </>
  );
};

export default FunctionsDialog;
