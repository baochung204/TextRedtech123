import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import Tags from './Tags';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';

const PopupAdd = () => {
  const [tags, setTags] = React.useState('');

  const [selectedImages, setSelectedImages] = useState<Array<File>>([]);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [color, setColor] = useState<string>('#000000');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [length, setLength] = useState('');
  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedImages((prevImages) => [...prevImages, ...Array.from(files)]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
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
    <Box>
      {/* <Infor/> */}
      {/* Thông tin cá nhân */}
      <Divider sx={{ mx: '-24px' }} />

      <Box mb={3} pt={2} sx={{}}>
        <Grid container spacing={2}>
          <Grid item lg={4} md={12}>
            <Box sx={{ textAlign: 'center', justifyContent: 'center', mt: { md: 2 }, mb: '20px' }}>
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
                    border: 'none', // Xóa đường viền mặc định
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '50%',
                      padding: '6px', // Độ rộng của đường viền
                      background: 'linear-gradient(#50b2fc, #f44c66)', // Gradient màu
                      '-webkit-mask':
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      zIndex: 1, // Đảm bảo gradient ở sau avatar
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
          <Grid item lg={4} md={12}>
            <Box>
              <CustomFormLabel htmlFor="name-text">Tên sản phẩm</CustomFormLabel>
              <CustomTextField
                id="name-text"
                variant="outlined"
                fullWidth
                placeholder="Nhập tên sản phẩm . . ."
                value={tags}
                onChange={handleChange(setTags)}
              />
              <CustomFormLabel htmlFor="tags-text">Tags</CustomFormLabel>
              <Tags />
            </Box>
          </Grid>

          <Grid item lg={4} md={12}>
            <CustomFormLabel htmlFor="phone-text">Giá niêm yết</CustomFormLabel>
            <CustomOutlinedInput
              endAdornment={<InputAdornment position="end">POINT</InputAdornment>}
              id="gender-select"
              fullWidth
              variant="outlined"
              placeholder="Nhập giá . . ."
            />

            <CustomFormLabel htmlFor="gender-select">Giá khuyến mãi</CustomFormLabel>
            <CustomOutlinedInput
              endAdornment={<InputAdornment position="end">POINT</InputAdornment>}
              id="gender-select"
              fullWidth
              variant="outlined"
              placeholder="Nhập giá . . ."
            />

            {/* Ảnh thumbnail */}
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ mx: '-24px' }} />

      {/* Thông tin trợ lý và kênh */}
      <Box mb={4} p={3} sx={{}}>
        <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>
          Chi tiết sản phẩm
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={6} md={12}>
            <Grid lg={12}>
              <CustomFormLabel htmlFor="title-text">Tiêu đề</CustomFormLabel>
              <CustomTextField
                id="title-text"
                variant="outlined"
                fullWidth
                placeholder="Nhập tiêu đề . . ."

                // value={title}
                // onChange={handleChange(setTitle)}
              />
            </Grid>
            <Grid container item xs={12} sm={12} lg={12} spacing={2}>
              <Grid item xs={12} sm={6} lg={6}>
                <CustomFormLabel htmlFor="weight-text">Khối lượng</CustomFormLabel>
                <CustomOutlinedInput
                  endAdornment={<InputAdornment position="end">g</InputAdornment>}
                  id="weight-text"
                  variant="outlined"
                  fullWidth
                  placeholder="Nhập khối lượng . . ."
                  // value={weight}
                  // onChange={handleChange(setWeight)}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <CustomFormLabel htmlFor="unit-text">Đơn vị tính</CustomFormLabel>
                <CustomTextField
                  id="unit-text"
                  variant="outlined"
                  fullWidth
                  placeholder="Nhập đơn vị . . ."

                  // value={unit}
                  // onChange={handleChange(setUnit)}
                />
              </Grid>
            </Grid>
            {/* Ảnh sản phẩm */}

            <Grid container item xs={12} sm={12} lg={12} spacing={2}>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="size-text">Kích thước</CustomFormLabel>

                {/* Tạo hàng cho ba thuộc tính rộng, dài, cao */}
                <Grid container spacing={2}>
                  {' '}
                  {/* Thêm container để sắp xếp hàng ngang */}
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
            </Grid>

            <CustomFormLabel htmlFor="style-text">Kiểu dáng</CustomFormLabel>
            <CustomTextField
              id="style-text"
              variant="outlined"
              fullWidth
              // value={style}
              // onChange={handleChange(setStyle)}
            />
          </Grid>

          <Grid item lg={6} md={12}>
            <Grid container item xs={12} sm={12} lg={12} spacing={2}>
              <Grid item xs={12} sm={6} lg={6}>
                <CustomFormLabel htmlFor="color-text">Màu sắc</CustomFormLabel>
                <CustomTextField
                  fullWidth
                  value={color}
                  onChange={handleColorChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <input
                          type="color"
                          value={color}
                          onChange={handleColorChange}
                          style={{
                            width: '40px',
                            height: '40px',
                            border: 'none',
                            background: 'none',
                            padding: '0',
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <CustomFormLabel htmlFor="material-text">Chất liệu</CustomFormLabel>
                <CustomTextField
                  id="material-text"
                  variant="outlined"
                  fullWidth
                  placeholder="Nhập chất liệu . . ."

                  // value={material}
                  // onChange={handleChange(setMaterial)}
                />
              </Grid>
            </Grid>

            <Grid lg={12}>
              <CustomFormLabel htmlFor="description-text">Mô tả</CustomFormLabel>
              <CustomTextField
                id="description-text"
                variant="outlined"
                fullWidth
                multiline
                rows={9.2}
                placeholder="Nhập mô tả sản phẩm . . ."
                // value={description}
                // onChange={handleChange(setDescription)}
              />
            </Grid>
          </Grid>
          <Grid item lg={6} md={12}>
            {/* <CustomFormLabel htmlFor="product-image">Ảnh sản phẩm</CustomFormLabel> */}
            <input
              type="file"
              id="product-images"
              multiple
              style={{ display: 'none' }}
              onChange={handleFilesChange}
              accept="image/*" // Chỉ cho phép chọn ảnh
            />
            <Button variant="contained" color="primary" component="label" htmlFor="product-images">
              Chọn ảnh sản phẩm
            </Button>

            {selectedImages.length > 0 && (
              <div>
                <h4>Ảnh đã chọn:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {selectedImages.map((image, index) => (
                    <div key={index} style={{ position: 'relative', margin: '10px' }}>
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`preview ${index}`}
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'cover',
                          borderRadius: '5px',
                        }}
                      />
                      <IconButton
                        onClick={() => handleRemoveImage(index)}
                        style={{
                          position: 'absolute',
                          top: '0',
                          right: '0',
                          background: 'rgba(255, 255, 255, 0.7)',
                          borderRadius: '50%',
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PopupAdd;
