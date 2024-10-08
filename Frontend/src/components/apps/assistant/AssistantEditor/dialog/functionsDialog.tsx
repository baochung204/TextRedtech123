import {
  Checkbox,
  Dialog,
  DialogTitle,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  Grid,
  Tooltip,
  Avatar,
} from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';

const functions = [
  { name: 'trithucchochatbot1.jsnl', url: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-4.jpg' },
  { name: 'trithuc2.jsnl', url: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-4.jpg' },
  { name: 'trithuc3.jsnl', url: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-4.jpg' },
  // Add more images as needed
];

interface PropsFunction {
  openFunction: boolean;
  setOpenFunction: React.Dispatch<React.SetStateAction<boolean>>;
}

const FunctionDialog: React.FC<PropsFunction> = ({ openFunction, setOpenFunction }) => {
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
              <Box display="flex" alignItems="center" mb={-1}>
                <Avatar
                  src={value.url}
                  alt="avatar"
                  sx={{ width: 40, height: 40, mr: 2 }}
                />
                <Typography variant="body1">{value.name}</Typography>
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
          Chọn ảnh
          <CloseIcon onClick={handleClose} style={{ cursor: 'pointer', opacity: 0.7 }} />
        </DialogTitle>

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
              <Grid item xs={3}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Tên ảnh
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Tiêu đề
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Mô tả
                </Typography>
              </Grid>
            </Grid>
          </ListItem>

          <Divider />
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
                            checked={selectedValues.some((val) => val.name === file.name)}
                            onChange={() => handleToggle(file)}
                          />
                        }
                        label=""
                      />
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
                    {/* Add more details or actions here if needed */}
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

export default FunctionDialog;
