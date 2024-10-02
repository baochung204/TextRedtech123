import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Box, Button, Divider, Grid, InputAdornment, Typography } from '@mui/material';
import React, { useState } from 'react';
import Classify from 'src/components/apps/sell/layout/classify';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import Tags from './Tags';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';
import ClearIcon from '@mui/icons-material/Clear';

const PopupAdd = () => {
  const [tags, setTags] = React.useState('');
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value);
      };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Scrollbar_y sx={{ maxHeight: '550px', paddingX: 5 }}>
      <Box>
        <Divider sx={{ mx: '-50px' }} />

        <Scrollbar_y sx={{ maxHeight: '400px', overflowX: 'hidden' }}>
          {/* Set maxHeight for scrolling */}
          <Box mb={3} pt={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={4} md={12}>
                <Box
                  sx={{ textAlign: 'center', justifyContent: 'center', mt: { md: 2 }, mb: '20px' }}
                >
                  <label htmlFor="avatar-upload">
                    <Avatar
                      src={avatarPreview || ''}
                      alt="avatar preview"
                      sx={{
                        width: { xs: 90, sm: 110, md: 130, lg: 160 },
                        height: { xs: 90, sm: 110, md: 130, lg: 160 },
                        margin: 'auto',
                        fontSize: 50,
                        backgroundColor: avatarPreview ? 'transparent' : '#f0f0f0',
                        color: '#9e9e9e',
                        cursor: 'pointer',
                        position: 'relative',
                        zIndex: 1,
                        borderRadius: '50%',
                        border: 'none', // Remove default border
                        '&:before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          borderRadius: '50%',
                          padding: '6px', // Border width
                          background: 'linear-gradient(#50b2fc, #f44c66)', // Gradient
                          '-webkit-mask':
                            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          maskComposite: 'exclude',
                          zIndex: 1, // Ensure gradient is behind the avatar
                        },
                      }}
                    >
                      {!avatarPreview && <PersonIcon fontSize="inherit" />}
                    </Avatar>
                  </label>
                  {/* Hidden file input */}
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleAvatarChange}
                  />
                  <Typography mt={1} fontWeight={600}>
                    Ảnh thumbnail
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} lg={4} md={12}>
                <Grid item xs={12} sm={6} lg={12}>
                  <CustomFormLabel htmlFor="name-text">Tên sản phẩm</CustomFormLabel>
                  <CustomTextField
                    id="name-text"
                    variant="outlined"
                    fullWidth
                    placeholder="Nhập tên sản phẩm . . ."
                    value={tags}
                    onChange={handleChange(setTags)}
                  />
                  <CustomFormLabel htmlFor="tags-text">Nhãn</CustomFormLabel>
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                  <Tags />
                </Grid>
              </Grid>

              <Grid item xs={12} lg={4} md={12}>
                <CustomFormLabel htmlFor="phone-text">Giá niêm yết</CustomFormLabel>
                <CustomOutlinedInput
                  endAdornment={<InputAdornment position="end">đ</InputAdornment>}
                  id="price-list"
                  fullWidth
                  variant="outlined"
                  placeholder="Nhập giá . . ."
                />

                <CustomFormLabel htmlFor="sale-price">Giá khuyến mãi</CustomFormLabel>
                <CustomOutlinedInput
                  endAdornment={<InputAdornment position="end">đ</InputAdornment>}
                  id="sale-price"
                  fullWidth
                  variant="outlined"
                  placeholder="Nhập giá . . ."
                />
              </Grid>
            </Grid>
          </Box>
        </Scrollbar_y>

        <Divider sx={{ mx: '-50px' }} />

        {/* Thông tin trợ lý và kênh */}
        {/* <Scrollbar_y sx={{ maxHeight: '400px', overflowX: 'hidden' }}> */}
        {/* Set maxHeight for scrolling */}
        <Box mb={4} p={3}>
          <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>
            Chi tiết sản phẩm
          </Typography>
          <Grid container spacing={3}>
            {/* Cột 1 */}
            <Grid item xs={12} sm={6} lg={6}>
              {/* Nội dung cột 1 */}
              <Grid container spacing={2}>
                {/* <Grid item xs={12}>
                    <CustomFormLabel htmlFor="title-text">Tiêu đề</CustomFormLabel>
                    <CustomTextField
                      id="title-text"
                      variant="outlined"
                      fullWidth
                      placeholder="Nhập tiêu đề . . ."
                    />
                  </Grid> */}
                <Grid container item xs={12} spacing={2}>
                  <Grid item xs={6}>
                    <CustomFormLabel>
                      Khối lượng
                    </CustomFormLabel>
                    <CustomOutlinedInput
                      endAdornment={<InputAdornment position="end">g</InputAdornment>}
                      id="weight-text"
                      variant="outlined"
                      fullWidth
                      placeholder="Nhập khối lượng . . ."
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomFormLabel>
                      Đơn vị tính
                    </CustomFormLabel>
                    <CustomTextField
                      id="unit-text"
                      variant="outlined"
                      fullWidth
                      placeholder="Nhập đơn vị . . ."
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Box fontWeight={600} mt={1} mb={'10px'}>
                    Kích thước
                  </Box>

                  {/* Tạo hàng cho ba thuộc tính rộng, dài, cao */}
                  <Grid container spacing={2}>
                    {/* Trường nhập cho chiều rộng */}
                    <Grid item xs={12} sm={4} lg={4}>
                      <CustomOutlinedInput
                        id="width-text"
                        variant="outlined"
                        endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                        fullWidth
                        placeholder="rộng"
                      />
                    </Grid>
                    {/* Trường nhập cho chiều dài */}
                    <Grid item xs={12} sm={4} lg={4}>
                      <CustomOutlinedInput
                        id="length-text"
                        variant="outlined"
                        endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                        fullWidth
                        placeholder="dài"
                      />
                    </Grid>
                    {/* Trường nhập cho chiều cao */}
                    <Grid item xs={12} sm={4} lg={4}>
                      <CustomOutlinedInput
                        id="height-text"
                        variant="outlined"
                        endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                        fullWidth
                        placeholder="cao"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Box fontWeight={600} mt={'10px'} mb={1}>
                    Kiểu dáng
                  </Box>
                  <CustomTextField
                    id="style-text"
                    variant="outlined"
                    fullWidth
                    placeholder="Nhập kiểu dáng . . ."
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Cột 2 */}
            <Grid item xs={12} sm={6} lg={6}>
              {/* Nội dung cột 2 */}
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="description-text">Mô tả</CustomFormLabel>
                <CustomTextField
                  id="description-text"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4.4}
                  placeholder="Nhập mô tả sản phẩm . . ."
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="material-text">Chất liệu</CustomFormLabel>
                <CustomTextField
                  id="material-text"
                  variant="outlined"
                  fullWidth
                  placeholder="Nhập chất liệu . . ."
                />
              </Grid>
            </Grid>

            {/* Cột 3 */}
            <Grid item xs={12}>
              <Classify />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="image-upload">
                <input
                  style={{ display: "none" }}
                  id="image-upload"
                  type="file"
                  multiple
                  onChange={handleImageUpload}
                />
                <Button variant="contained" component="span">
                  Thêm ảnh sản phẩm
                </Button>
              </label>
              {images.length > 0 && (
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {images.map((image, index) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <div style={{ position: "relative" }}>
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`uploaded-${index}`}
                            style={{ width: "200px", height: "auto" }}
                          />
                          <ClearIcon
                            
                            onClick={() => handleRemoveImage(index)}
                            style={{
                              position: "absolute",
                              top: 5,
                              right: 5,
                              cursor: "pointer"
                            }}
                          >
                            Xóa
                          </ClearIcon>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Box>
        {/* </Scrollbar_y> */}
      </Box>
    </Scrollbar_y>
  );
};

export default PopupAdd;
