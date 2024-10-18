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
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';

const functions = [
  { name: 'trithucchochatbot1.jsnl', url: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-4.jpg' },
  { name: 'trithuc2.jsnl', url: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-4.jpg' },
  { name: 'trithuc3.jsnl', url: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-4.jpg' },
  // Add more files as needed
];

interface PropsFunction {
  openFunction: boolean;
  setOpenFunction: React.Dispatch<React.SetStateAction<boolean>>;
}

const FunctionsDialog: React.FC<PropsFunction> = ({ openFunction, setOpenFunction }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleClose = () => {
    setOpenFunction(false);
  };

  const handleToggle = (name: string) => {
    setSelectedValues((prevSelectedValues) =>
      prevSelectedValues.includes(name)
        ? prevSelectedValues.filter((value) => value !== name)
        : [...prevSelectedValues, name]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedValues([]); // Deselect all
    } else {
      setSelectedValues(filteredFunctions.map((file) => file.name)); // Select all filtered files
    }
    setSelectAll(!selectAll);
  };

  // Filter the file list based on the search term
  const filteredFunctions = functions.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Display selected values with Avatars */}
      <Typography variant="subtitle1" component="div">
        <Scrollbar_y sx={{ height: '100px' }}>
          {selectedValues.map((value, index) => {
            const selectedFile = functions.find((file) => file.name === value);
            return (
              selectedFile && (
                <React.Fragment key={index}>
                  <Box display="flex" alignItems="center" mb={-1}>
                    <Avatar
                      src={selectedFile.url}
                      alt="avatar"
                      sx={{ width: 40, height: 40, mr: 2 }}
                    />
                    <Typography variant="body1">{selectedFile.name}</Typography>
                  </Box>
                  <br />
                </React.Fragment>
              )
            );
          })}
        </Scrollbar_y>
      </Typography>

      {/* Dialog for selecting files */}
      <Dialog onClose={handleClose} open={openFunction}>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          Chọn sản phẩm
          <CloseIcon onClick={handleClose} style={{ cursor: 'pointer', opacity: 0.7 }} />
        </DialogTitle>

        {/* Search bar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '5px', width: '600px' }}>
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

        {/* List of files */}
        <List sx={{ pt: 0 }}>
          <ListItem>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={1}>
                <Tooltip title="Chọn tất cả">
                  <FormControlLabel
                    control={<Checkbox checked={selectAll} onChange={handleSelectAll} />}
                    label=""
                  />
                </Tooltip>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1" fontWeight="bold">ID</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" fontWeight="bold">Tên sản phẩm</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" fontWeight="bold">Giá niêm yết</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1" fontWeight="bold">Giá khuyến mãi</Typography>
              </Grid>
            </Grid>
          </ListItem>

          <Divider />

          {/* Scrollable file list */}
          <Scrollbar_y sx={{ height: '300px' }}>
            {filteredFunctions.map((file) => (
              <React.Fragment key={file.name}>
                <Divider sx={{ mx: '0px' }} />
                <ListItem>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={1}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedValues.includes(file.name)}
                            onChange={() => handleToggle(file.name)}
                          />
                        }
                        label=""
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body1" noWrap sx={{ maxWidth: '100px', textOverflow: 'ellipsis' }}>
                        {file.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography
                        display={'flex'}
                        variant="body1"
                        alignItems={"center"}
                        noWrap
                        sx={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                      >
                        <Avatar sx={{ mr: 1 }} src={file.url} />
                        {file.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="body2" noWrap sx={{ maxWidth: '200px', textOverflow: 'ellipsis' }}>
                        {file.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="body2" noWrap sx={{ maxWidth: '200px', textOverflow: 'ellipsis' }}>
                        {file.name}
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

export default FunctionsDialog;
