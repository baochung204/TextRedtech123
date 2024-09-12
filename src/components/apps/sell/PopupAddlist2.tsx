import React, { useState } from 'react';
import { Box, Button, Checkbox, Grid, ListItemText, MenuItem, Typography } from '@mui/material';
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

const channels: CurrencyType[] = [
  { value: 'mkt', label: 'MKT' },
  { value: 'zl', label: 'Zalo' },
  { value: 'fb', label: 'Facebook' },
  { value: 'inst', label: 'Instagram' },
  { value: 'other', label: 'Other' },
];

const PopupAddList2 = () => {
  const [gender, setGender] = React.useState('');
  const [selectedChannels, setSelectedChannels] = React.useState<string[]>([]);
  const [tags, setTags] = React.useState('');
  const [companyPhone, setCompanyPhone] = React.useState('');
  const [assistant, setAssistant] = React.useState('');
  const [thumbnailImage, setThumbnailImage] = useState<File | null>(null);
  const [productImage, setProductImage] = useState<File | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setter(event.target.files[0]);
    }
  };

  const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGender(event.target.value as string);
  };

  const handleChannelChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedChannels(event.target.value as string[]);
  };

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
                onChange={(e) => handleFileChange(e, setThumbnailImage)}
              />
              <Button
                variant="contained"
                color="primary"
                component="label"
                htmlFor="thumbnail-image"
              >
                Chọn ảnh thumbnail
              </Button>
              {thumbnailImage && (
                <Box mt={1}>
                  <Typography variant="subtitle1" component="div">
                    {thumbnailImage.name}
                  </Typography>
                  {renderImagePreview(thumbnailImage)}
                </Box>
              )}
            </Box>

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

      {/* Thông tin trợ lý và kênh */}
      <Box mb={4} p={3} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2 }}>
        <Typography variant="h6" sx={{ fontSize: '1.2rem', mb: 2 }}>
          Chi tiết sản phẩm
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={6} md={12}>
            <CustomFormLabel htmlFor="assistant-text">Trợ lý</CustomFormLabel>
            <CustomTextField
              id="assistant-text"
              variant="outlined"
              fullWidth
              value={assistant}
              onChange={handleChange(setAssistant)}
            />
            <CustomFormLabel htmlFor="tags-text">Tags</CustomFormLabel>
            <CustomTextField
              id="tags-text"
              variant="outlined"
              fullWidth
              value={tags}
              onChange={handleChange(setTags)}
            />
          </Grid>
          <Grid item lg={6} md={12}>
            <CustomFormLabel htmlFor="channel-select">Kênh</CustomFormLabel>
            <CustomSelect
              id="channel-select"
              multiple
              value={selectedChannels}
              onChange={handleChannelChange}
              renderValue={(selected: any) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value: any) => (
                    <Box
                      key={value}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid',
                        borderRadius: '4px',
                        padding: '2px 6px',
                      }}
                    >
                      {channels.find((channel) => channel.value === value)?.label}
                    </Box>
                  ))}
                </Box>
              )}
              fullWidth
              variant="outlined"
            >
              {channels.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Checkbox checked={selectedChannels.indexOf(option.value) > -1} />
                  <ListItemText primary={option.label} />
                </MenuItem>
              ))}
            </CustomSelect>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PopupAddList2;
