import ClearIcon from '@mui/icons-material/Clear';
import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Classify from 'src/components/apps/sell/layout/classify';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import Tags from './Tags';
import iconWarning from 'src/assets/images/icon.png/icon_warning.svg';
const PopupAdd = () => {
  const [tags, setTags] = React.useState('');
  const [images, setImages] = useState<File[]>([]);
  const [selectOption, setSelectOption] = useState('');
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };
  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    setSelectOption(selectOption === value ? 0 : value);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  // const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const file = e.target.files[0];
  //     setAvatarPreview(URL.createObjectURL(file));
  //   }
  // };

  return (
    <Scrollbar_y sx={{ maxHeight: '550px', paddingX: 5, overflowX: 'hidden' }}>
      <Box>
        <Divider sx={{ mx: '-50px' }} />

        {/* Set maxHeight for scrolling */}
        <Box mb={3} pt={0}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6} md={12}>
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

            <Grid item xs={12} lg={6} md={12}>
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

        <Divider sx={{ mx: '-50px' }} />

        {/* Thông tin trợ lý và kênh */}
        {/* <Scrollbar_y sx={{ maxHeight: '400px', overflowX: 'hidden' }}> */}
        {/* Set maxHeight for scrolling */}
        <Box mb={4} paddingY={3}>
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
                    <CustomFormLabel>Khối lượng</CustomFormLabel>
                    <CustomOutlinedInput
                      endAdornment={<InputAdornment position="end">g</InputAdornment>}
                      id="weight-text"
                      variant="outlined"
                      fullWidth
                      placeholder="Nhập khối lượng . . ."
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomFormLabel>Đơn vị tính</CustomFormLabel>
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
                  rows={6}
                  placeholder="Nhập mô tả sản phẩm . . ."
                  InputProps={{
                    sx: {
                      padding: 0,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="material-text" sx={{ mt: '27px' }}>
                  Chất liệu
                </CustomFormLabel>
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
                  style={{ display: 'none' }}
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
                        <div style={{ position: 'relative' }}>
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`uploaded-${index}`}
                            style={{ width: '200px', height: '200px' }}
                          />
                          <ClearIcon
                            onClick={() => handleRemoveImage(index)}
                            style={{
                              position: 'absolute',
                              top: 5,
                              right: 5,
                              cursor: 'pointer',
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
            <Grid item xs={12}>
              <CustomFormLabel htmlFor="shipping-cost" sx={{ mt: 0 }}>
                Thời gian và phương thức giao hàng
              </CustomFormLabel>
              <Select
                value={selectOption}
                onChange={handleSelectChange}
                displayEmpty
                autoWidth
                sx={{ marginBottom: '16px' }}
              >
                <MenuItem value="" disabled>
                  Chọn phương thức
                </MenuItem>
                <MenuItem value="2">Thanh toán sau</MenuItem>
                <MenuItem value="1">Thanh toán trước</MenuItem>
              </Select>
              {selectOption === '1' && (
                <Box sx={{ display: 'flex', gap: '6px', p: 2, alignItems: 'center' }}>
                  <img src={iconWarning} alt="" />
                  <Typography variant="h6">Tính năng đang được cập nhật</Typography>
                </Box>
              )}
              {selectOption === '2' && (
                <CustomTextField
                  id="shipping-cost"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4.4}
                  placeholder="VD: Nội thành 25.000 ₫, Ngoại thành 50.000 ₫, Ngoại tỉnh 50.000 ₫"
                  InputProps={{
                    sx: {
                      padding: 0,
                    },
                  }}
                />
              )}{' '}
            </Grid>
          </Grid>
        </Box>
        {/* </Scrollbar_y> */}
      </Box>
    </Scrollbar_y>
  );
};

export default PopupAdd;
