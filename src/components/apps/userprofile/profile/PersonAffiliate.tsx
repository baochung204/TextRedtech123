import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { IconChevronDown } from '@tabler/icons-react';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

const PersonAffiliate = () => {
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);

  const handleImage1Change = (event) => {
    setSelectedImage1(URL.createObjectURL(event.target.files[0]));
  };

  const handleImage2Change = (event) => {
    setSelectedImage2(URL.createObjectURL(event.target.files[0]));
  };

  const handleRemoveImage1 = () => {
    setSelectedImage1(null);
  };

  const handleRemoveImage2 = () => {
    setSelectedImage2(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Typography variant="h6" px={2} py={1}>
            Đăng ký affiliate cá nhân
          </Typography>
          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" px={2} py={1}>
                Tài khoản cá nhân
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Box>
                <CustomFormLabel htmlFor="banknumber">Số tài khoản</CustomFormLabel>
                <CustomTextField
                  id="banknumber"
                  variant="outlined"
                  placeholder="Nhập số tài khoản của bạn"
                  fullWidth
                />
              </Box>
              <Box>
                <CustomFormLabel htmlFor="password">Tên tài khoản</CustomFormLabel>
                <CustomTextField
                  id="password"
                  type="password"
                  variant="outlined"
                  placeholder="Nhập tên tài khoản của bạn"
                  fullWidth
                />
              </Box>
              <Box>
                <CustomFormLabel htmlFor="gender">Chọn ngân hàng</CustomFormLabel>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Chọn ngân hàng</InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Gender">
                    <MenuItem value="mb">Mb bank</MenuItem>
                    <MenuItem value="tp">TP bank</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6" px={2} py={1}>
                Thông tin liên hệ
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Box>
                <CustomFormLabel htmlFor="gmail">Gmail</CustomFormLabel>
                <CustomTextField
                  id="gmail"
                  type="email"
                  variant="outlined"
                  placeholder="Nhập gmail của bạn"
                  fullWidth
                />
              </Box>
              <Box>
                <CustomFormLabel htmlFor="phonenumber">Số điện thoại</CustomFormLabel>
                <CustomTextField
                  id="phonenumber"
                  type="tel"
                  variant="outlined"
                  placeholder="Nhập số điện thoại của bạn"
                  fullWidth
                />
              </Box>
              <Box>
                <CustomFormLabel htmlFor="address">Địa chỉ</CustomFormLabel>
                <CustomTextField
                  id="address"
                  type="text"
                  variant="outlined"
                  placeholder="Nhập địa chỉ của bạn"
                  fullWidth
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={9}>
            <AccordionSummary
              expandIcon={<IconChevronDown />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="h6" px={2} py={1}>
                Tài liệu xác minh
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Box mb={2}>
                {selectedImage1 && (
                  <Box mb={2} position="relative">
                    <Typography variant="subtitle1">Mặt trước căn cước công dân:</Typography>
                    <img
                      src={selectedImage1}
                      alt="Selected 1"
                      style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                    />
                    <IconButton
                      size="small"
                      onClick={handleRemoveImage1}
                      sx={{ position: 'absolute', top: 0, right: 0 }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                )}
                <CustomFormLabel htmlFor="image1">Mặt trước căn cước công dân</CustomFormLabel>
                <Button variant="contained" component="label" color="primary">
                  Choose File
                  <Input
                    id="image1"
                    type="file"
                    accept="image/*"
                    onChange={handleImage1Change}
                    style={{ display: 'none' }}
                  />
                </Button>
              </Box>
              <Box mb={2}>
                {selectedImage2 && (
                  <Box mb={2} position="relative">
                    <Typography variant="subtitle1">Mặt sau căn cước công dân:</Typography>
                    <img
                      src={selectedImage2}
                      alt="Selected 2"
                      style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                    />
                    <IconButton
                      size="small"
                      onClick={handleRemoveImage2}
                      sx={{ position: 'absolute', top: 0, right: 0 }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                )}
                <CustomFormLabel htmlFor="image2">Mặt sau căn cước công dân</CustomFormLabel>
                <Button variant="contained" component="label" color="primary">
                  Choose File
                  <Input
                    id="image2"
                    type="file"
                    accept="image/*"
                    onChange={handleImage2Change}
                    style={{ display: 'none' }}
                  />
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Stack>

        <Box mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button
                color="primary"
                variant="outlined"
                size="large"
                fullWidth
                component={Link}
                to="/"
              >
                Hủy
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary" size="large" fullWidth type="submit">
                Đăng ký
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default PersonAffiliate;
