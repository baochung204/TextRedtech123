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
import React, { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
const functions = ['trithucchochatbot1.jsnl', 'trithuc2.jsnl', 'trithuc3.jsnl'];
interface PropsFunction {
  openFunction: boolean;
  setOpenFunction: React.Dispatch<React.SetStateAction<boolean>>;
}

const FunctionsDialog: React.FC<PropsFunction> = ({openFunction,setOpenFunction}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);



  const handleClose = () => {
    setOpenFunction(false);
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

      <Typography variant="subtitle1" component="div">
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
      <Dialog onClose={handleClose} open={openFunction}>
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
