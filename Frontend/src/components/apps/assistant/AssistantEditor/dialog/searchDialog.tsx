import CloseIcon from '@mui/icons-material/Close';
import {
  Avatar,
  Box,
  Checkbox,
  Dialog,
  DialogTitle,
  Divider,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';

const functions = [
  { name: 'trithucchochatbot1.jsnl', url: '500 MB' },
  { name: 'trithuc2.jsnl', url: '500 MB' },
  { name: 'trithuc3.jsnl', url: '500 MB' },
  // Add more images as needed
];

interface PropsFunction {
  openFunction: boolean;
  setOpenFunction: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImageDialog: React.FC<PropsFunction> = ({ openFunction, setOpenFunction }) => {
  const [selectedValues, setSelectedValues] = useState<{ name: string, url: string }[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); // Ô tìm kiếm
  const [selectAll, setSelectAll] = useState<boolean>(false); // Trạng thái Select All

  const handleClose = () => {
    setOpenFunction(false);
  };

  const handleToggle = (image: { name: string, url: string }) => {
    setSelectedValues((prevSelectedValues) =>
      prevSelectedValues.some((val) => val.name === image.name)
        ? prevSelectedValues.filter((value) => value.name !== image.name)
        : [...prevSelectedValues, image],
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedValues([]); // Bỏ chọn tất cả
    } else {
      setSelectedValues(filteredFunctions); // Chọn tất cả các mục được lọc
    }
    setSelectAll(!selectAll);
  };

  // Lọc danh sách các files theo từ khóa tìm kiếm
  const filteredFunctions = functions.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Typography variant="subtitle1" component="div">
        <Scrollbar_y sx={{ height: '100px' }}>
          {selectedValues.map((value, index) => (
            <React.Fragment key={index}>
              <Box display="flex" alignItems="center" justifyContent={'space-between'} mb={-2}>
      
                <Typography variant="body1">{value.name}</Typography>
                <Typography variant="body1">{value.url}</Typography>
              </Box>
              <br />
            </React.Fragment>
          ))}
        </Scrollbar_y>
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

        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px', width: '400px' }}>
          <TextField
            sx={{ mx: 1 }}
            label="Tìm kiếm"
            variant="outlined"
            fullWidth
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>

        <List sx={{ pt: 0 }}>
          <ListItem>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={1}>
                <Tooltip title="Chọn tất cả">
                  <FormControlLabel
                    control={<Checkbox onClick={handleSelectAll} />}
                    label=""
                  />
                </Tooltip>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Tên file
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Dung lượng
                </Typography>
              </Grid>
              
            </Grid>
          </ListItem>

          <Divider />
          <Scrollbar_y sx={{ height: '280px' }}>
            {filteredFunctions.map((file) => (
              <React.Fragment key={file.name}>
                <Divider sx={{ mx: '0px' }} />
                <ListItem>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={1}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedValues.some((val) => val.name === file.name)}
                            onChange={() => handleToggle(file)}
                          />
                        }
                        label=""
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Typography
                        display={'flex'}
                        variant="body1"
                        alignItems={"center"}
                        noWrap
                        sx={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                      >
                        {file.name}
                      </Typography>
                    </Grid>
                    {/* Add more details or actions here if needed */}
                    <Grid item xs={5}>
                      <Typography
                        display={'flex'}
                        variant="body1"
                        alignItems={"center"}
                        noWrap
                        sx={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                      >
                        {file.url}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
              </React.Fragment>
            ))}
          </Scrollbar_y>
        </List>
      </Dialog>
    </>
  );
};

export default ImageDialog;
