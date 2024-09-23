import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Box, Divider, Grid, InputAdornment, Typography } from '@mui/material';
import React, { useState } from 'react';
import Classify from 'src/components/apps/sell/layout/classify';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import Tags from './Tags';
const PopupAdd = () => {
  const [tags, setTags] = React.useState('');

  // const [selectedImages, setSelectedImages] = useState<Array<File>>([]);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  // const [color, setColor] = useState<string>('#000000');

  // const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files;
  //   if (files) {
  //     setSelectedImages((prevImages) => [...prevImages, ...Array.from(files)]);
  //   }
  // };

  // const handleRemoveImage = (index: number) => {
  //   setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  // };

  // const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setColor(event.target.value);
  // };

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

      <Box mb={3} pt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} md={12}>
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
              id="gender-select"
              fullWidth
              variant="outlined"
              placeholder="Nhập giá . . ."
            />

            <CustomFormLabel htmlFor="gender-select">Giá khuyến mãi</CustomFormLabel>
            <CustomOutlinedInput
              endAdornment={<InputAdornment position="end">đ</InputAdornment>}
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
          {/* Cột 1 */}
          <Grid item xs={12} sm={6} lg={6}>
            {/* Nội dung cột 1 */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="title-text">Tiêu đề</CustomFormLabel>
                <CustomTextField
                  id="title-text"
                  variant="outlined"
                  fullWidth
                  placeholder="Nhập tiêu đề . . ."
                />
              </Grid>
              <Grid container item xs={12} spacing={2}>
                <Grid item xs={6}>
                  <Box fontWeight={600} mb={1} mt={1}>Khối lượng</Box>
                  <CustomOutlinedInput
                    endAdornment={<InputAdornment position="end">g</InputAdornment>}
                    id="weight-text"
                    variant="outlined"
                    fullWidth
                    placeholder="Nhập khối lượng . . ."
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box fontWeight={600} mb={1} mt={1}>Đơn vị tính</Box>
                  <CustomTextField
                    id="unit-text"
                    variant="outlined"
                    fullWidth
                    placeholder="Nhập đơn vị . . ."
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Box fontWeight={600} mt={1} mb={'10px'}>Kích thước</Box>

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
              <Grid item xs={12}>
                <Box fontWeight={600} mt={'10px'} mb={1}>Kiểu dáng</Box>
                <CustomTextField
                  id="style-text"
                  variant="outlined"
                  fullWidth
                  placeholder="Nhập kiểu dáng . . ."

                // value={style}
                // onChange={handleChange(setStyle)}
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
                rows={9.2}
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
        </Grid>

      </Box>
    </Box>
  );
};

export default PopupAdd;
