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
import React, { useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';

const functions = ['trithucchochatbot1.jsnl', 'trithuc2.jsnl', 'trithuc3.jsnl', 'trithuc5.jsnl', 'trithuc55.jsnl'];

interface PropsFunction {
  openFunction: boolean;
  setOpenFunction: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImageDialog: React.FC<PropsFunction> = ({ openFunction, setOpenFunction }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); // Ô tìm kiếm
  const [selectAll, setSelectAll] = useState<boolean>(false); // Trạng thái Select All
  // const dispatch = useDispatch<AppDispatch>()
  // const dataUrl = useSelector((state: AppState) => state.urlResources.urls  )
  // useEffect(()=> {
  //   dispatch(fetchUrls())
  // },[dispatch])
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
    file.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Typography variant="subtitle1" component="div">
        <Scrollbar_y sx={{ height: '100px' }}>
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
      <Dialog onClose={handleClose} open={openFunction} >
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

        {/* Thêm ô tìm kiếm và nút Select All */}
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
          {/* Hàng tiêu đề */}
          <ListItem>
            <Grid container spacing={2} alignItems="center">
              {/* Cột 1: Checkbox chọn */}
              <Grid item xs={1}>
                <Tooltip title="Chọn tất cả">
                  <FormControlLabel
                    control={
                      <Checkbox onClick={handleSelectAll} />}
                    label=""
                  />
                </Tooltip>
              </Grid>

              {/* Cột 2: Tiêu đề */}
              {/* <Grid item xs={3}>
                <Typography variant="subtitle1" fontWeight="bold">
                  
                </Typography>
              </Grid> */}

              {/* Cột 3: Mô tả */}
              <Grid item xs={3}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Tên ảnh
                </Typography>
              </Grid>

              {/* Cột 4: URL */}
              <Grid item xs={4}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Tiêu đề
                </Typography>
              </Grid>
              {/* Cột 4: URL */}
              <Grid item xs={4}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Mô tả
                </Typography>
              </Grid>
            </Grid>
          </ListItem>

          <Divider />

          {/* Lặp qua các phần tử danh sách */}
          {filteredFunctions.map((file) => (
            <>
              <Divider sx={{ mx: '0px' }} />
              <ListItem key={file}>
                <Grid container spacing={2} alignItems="center">
                  {/* Cột 1: Checkbox */}
                  <Grid item xs={1}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedValues.includes(file)}
                          onChange={() => handleToggle(file)}
                        />
                      }
                      label=""
                    />
                  </Grid>

                  {/* Cột 2: Tiêu đề */}
                  <Grid item xs={3}>
                    <Typography
                      display={'flex'}
                      variant="body1"
                      alignItems={"center"}
                      noWrap
                      sx={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                      <Avatar sx={{mr:1}} src='data:image/webp;base64,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' />

                      {file}
                    </Typography>
                  </Grid>

                  {/* Cột 3: Mô tả */}
                  <Grid item xs={4}>
                    <Typography
                      variant="body2"
                      noWrap
                      sx={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                      {file}
                    </Typography>
                  </Grid>

                  {/* Cột 4: URL */}
                  <Grid item xs={4}>
                    <Typography
                      variant="body2"
                      noWrap
                      sx={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                      {file}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            </>
          ))}
        </List>




      </Dialog>
    </>
  );
};

export default ImageDialog;
