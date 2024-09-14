import { Box, Button, Grid, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import Tags from './Tags';
// import Tags from './tags';

interface CurrencyType {
  value: string;
  label: string;
}

const currencies: CurrencyType[] = [
  { value: 'female', label: 'Nữ' },
  { value: 'male', label: 'Nam' },
  { value: 'other', label: 'Khác' },
];

// const channels: CurrencyType[] = [
//   { value: 'mkt', label: 'MKT' },
//   { value: 'zl', label: 'Zalo' },
//   { value: 'fb', label: 'Facebook' },
//   { value: 'inst', label: 'Instagram' },
//   { value: 'other', label: 'Other' },
// ];

const PopupAddList2 = () => {
  const [gender, setGender] = React.useState('');
  // const [selectedChannels, setSelectedChannels] = React.useState<string[]>([]);
  // const [selectedChannels, setSelectedChannels] = React.useState<string[]>([]);

  const [tags, setTags] = React.useState('');
  const [companyPhone, setCompanyPhone] = React.useState('');
  // const [assistant, setAssistant] = React.useState('');
  const [thumbnailImage, setThumbnailImage] = useState<File | null>(null);
  const [productImage, setProductImage] = useState<File | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<File | null>>,
  ) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGender(event.target.value as string);
  };

  // const handleChannelChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setSelectedChannels(event.target.value as string[]);
  // };

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const renderImagePreview = (image: File | null) => {
    if (!image) return null;
    const url = URL.createObjectURL(image);
    return (
      <Box mt={2}>
        <img src={url} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
      </Box>
    );
  };

  return (
    <Box>
      {/* Thông tin cá nhân */}
      <Box mb={4} p={3} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2 }}>
        <Typography variant="h6" sx={{ fontSize: '1.2rem', mb: 2 }}>
          Thông tin chung
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={6} md={12}>
            <CustomFormLabel htmlFor="name-text">Tên sản phẩm</CustomFormLabel>
            <CustomTextField
              id="name-text"
              variant="outlined"
              fullWidth
              value={tags}
              onChange={handleChange(setTags)}
            />

            <CustomFormLabel htmlFor="phone-text">Giá niêm yết</CustomFormLabel>
            <CustomTextField
              id="phone-text"
              variant="outlined"
              fullWidth
              size="medium"
              value={companyPhone}
              onChange={handleChange(setCompanyPhone)}
            />
            <CustomFormLabel htmlFor="gender-select">Giá khuyến mãi</CustomFormLabel>
            <CustomSelect
              id="gender-select"
              value={gender}
              onChange={handleGenderChange}
              fullWidth
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CustomSelect>
            <CustomFormLabel htmlFor="tags-text">Tags</CustomFormLabel>
            <Tags />
          </Grid>

          <Grid item lg={6} md={12}>
            {/* Ảnh thumbnail */}
            <Box>
              <CustomFormLabel htmlFor="thumbnail-image">Ảnh thumbnail</CustomFormLabel>
              <input
                type="file"
                id="thumbnail-image"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={(e) => handleFileChange(e, setThumbnailImage)}
              />

<<<<<<< HEAD


            



              {/* Khung hiển thị ảnh */}
              <Box

=======
              {/* Khung hiển thị ảnh */}
              <Box
>>>>>>> f0509e58af1f5de6796d0cb4f0dee9221fb1f73d
                p={1}
                sx={{
                  width: '300px', // Kích thước khung cố định
                  height: '296px',
                  border: '2px dashed #ddd',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden', // Ẩn phần ảnh bị vượt quá khung
                }}
              >
                {/* Hiển thị ảnh nếu có */}
                {thumbnailImage ? (
                  <img
                    src={URL.createObjectURL(thumbnailImage)}
                    alt="Thumbnail Preview"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Đảm bảo ảnh lấp đầy khung
                  />
                ) : (
                  <Typography variant="body2" color="textSecondary">
                    Chưa có ảnh
                  </Typography>
                )}
              </Box>
              <Button
                sx={{ mt: 2 }}
                variant="contained"
                color="primary"
                component="label"
                htmlFor="thumbnail-image"
              >
                Chọn ảnh thumbnail
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Thông tin trợ lý và kênh */}
      <Box mb={4} p={3} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2 }}>
        <Typography variant="h6" sx={{ fontSize: '1.2rem', mb: 2 }}>
          Chi tiết sản phẩm
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={6} md={12}>
            <CustomFormLabel htmlFor="title-text">Tiêu đề</CustomFormLabel>
            <CustomTextField
              id="title-text"
              variant="outlined"
              fullWidth
              // value={title}
              // onChange={handleChange(setTitle)}
            />

            <CustomFormLabel htmlFor="description-text">Mô tả</CustomFormLabel>
            <CustomTextField
              id="description-text"
              variant="outlined"
              fullWidth
              // value={description}
              // onChange={handleChange(setDescription)}
            />

            <CustomFormLabel htmlFor="weight-text">Khối lượng</CustomFormLabel>
            <CustomTextField
              id="weight-text"
              variant="outlined"
              fullWidth
              // value={weight}
              // onChange={handleChange(setWeight)}
            />

            <CustomFormLabel htmlFor="unit-text">Đơn vị tính</CustomFormLabel>
            <CustomTextField
              id="unit-text"
              variant="outlined"
              fullWidth
              // value={unit}
              // onChange={handleChange(setUnit)}
            />
          </Grid>

          <Grid item lg={6} md={12}>
            <CustomFormLabel htmlFor="size-text">Kích thước</CustomFormLabel>
            <CustomTextField
              id="size-text"
              variant="outlined"
              fullWidth
              // value={size}
              // onChange={handleChange(setSize)}
            />

            <CustomFormLabel htmlFor="color-text">Màu sắc</CustomFormLabel>
            <CustomTextField
              id="color-text"
              variant="outlined"
              fullWidth
              // value={color}
              // onChange={handleChange(setColor)}
            />

            <CustomFormLabel htmlFor="material-text">Chất liệu</CustomFormLabel>
            <CustomTextField
              id="material-text"
              variant="outlined"
              fullWidth
              // value={material}
              // onChange={handleChange(setMaterial)}
            />

            <CustomFormLabel htmlFor="style-text">Kiểu dáng</CustomFormLabel>
            <CustomTextField
              id="style-text"
              variant="outlined"
              fullWidth
              // value={style}
              // onChange={handleChange(setStyle)}
            />
            {/* Ảnh sản phẩm */}
            <CustomFormLabel htmlFor="product-image">Ảnh sản phẩm</CustomFormLabel>
            <input
              type="file"
              id="product-image"
              style={{ display: 'none' }}
              onChange={(e) => handleFileChange(e, setProductImage)}
            />
            <Button variant="contained" color="primary" component="label" htmlFor="product-image">
              Chọn ảnh sản phẩm
            </Button>
            {productImage && (
              <Box mt={1}>
                <Typography variant="subtitle1" component="div">
                  {productImage.name}
                </Typography>
                {renderImagePreview(productImage)}
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PopupAddList2;
