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
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';
import { AppDispatch, AppState, useSelector } from 'src/store/Store';
import { useDispatch } from 'react-redux';
import { fetchUrls } from 'src/store/apps/resources/url/UrlSlice';

const functions = ['trithucchochatbot1.jsnl', 'trithuc2.jsnl', 'trithuc3.jsnl', 'trithuc5.jsnl', 'trithuc55.jsnl'];

interface PropsFunction {
  openFunction: boolean;
  setOpenFunction: React.Dispatch<React.SetStateAction<boolean>>;
}

const FunctionsDialog: React.FC<PropsFunction> = ({ openFunction, setOpenFunction }) => {
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
          Chọn URL
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
              <Grid item xs={3}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Tiêu đề
                </Typography>
              </Grid>

              {/* Cột 3: Mô tả */}
              <Grid item xs={4}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Mô tả
                </Typography>
              </Grid>

              {/* Cột 4: URL */}
              <Grid item xs={4}>
                <Typography variant="subtitle1" fontWeight="bold">
                  URL
                </Typography>
              </Grid>
            </Grid>
          </ListItem>

          <Divider />
          <Scrollbar_y sx={{ height: '300px' }}>

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
                        variant="body1"
                        noWrap
                        sx={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                      >
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
          </Scrollbar_y>
        </List>




      </Dialog>
    </>
  );
};

export default FunctionsDialog;
