import React from 'react';
import { Box, Button, Grid, MenuItem, FormControl, Alert, Select, Checkbox, ListItemText } from '@mui/material';
import ParentCard from 'src/components/shared/ParentCard';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomSelect from './../../../components/forms/theme-elements/CustomSelect';

interface currencyType {
  value: string;
  label: string;
}

const currencies: currencyType[] = [
  { value: 'facebook', label: 'Facebook' },
  { value: 'zalo', label: 'Zalo' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'other', label: 'Other' },
];

const PopupAdd2 = () => {
  const [gender, setGender] = React.useState('');
  const [channel, setChannel] = React.useState<string[]>([]);
  const [tags, setTags] = React.useState('');
  const [companyName, setCompanyName] = React.useState('');
  const [companyAddress, setCompanyAddress] = React.useState('');
  const [companyEmail, setCompanyEmail] = React.useState('');
  const [companyPhone, setCompanyPhone] = React.useState('');
  const [companyWebsite, setCompanyWebsite] = React.useState('');
  const [facebookUrl, setFacebookUrl] = React.useState('');
  const [zaloUrl, setZaloUrl] = React.useState('');
  const [instagramUrl, setInstagramUrl] = React.useState('');

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleChannelChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setChannel(event.target.value as string[]);
  };

  const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTags(event.target.value);
  };

  const handleCompanyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(event.target.value);
  };

  const handleCompanyAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyAddress(event.target.value);
  };

  const handleCompanyEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyEmail(event.target.value);
  };

  const handleCompanyPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyPhone(event.target.value);
  };

  const handleCompanyWebsiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyWebsite(event.target.value);
  };

  const handleFacebookUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFacebookUrl(event.target.value);
  };

  const handleZaloUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZaloUrl(event.target.value);
  };

  const handleInstagramUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstagramUrl(event.target.value);
  };

  return (
    <div>
      <ParentCard
        title=""
        footer={
          <>
            <Button
              variant="contained"
              color="error"
              sx={{ mr: 1, fontSize: '1.1rem', padding: '8px 16px' }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontSize: '1.1rem', padding: '8px 16px' }}
            >
              Submit
            </Button>
          </>
        }
      >
        {/* Thông tin cá nhân */}
        <Alert severity="info" sx={{ fontSize: '1.2rem', mb: 2 }}>Thông tin cá nhân</Alert>
        <form>
          <Grid container spacing={3} mb={3}>
            <Grid item lg={6} md={12} sm={12}>
              <CustomFormLabel htmlFor="name-text" sx={{ fontSize: '1.1rem' }}>
                Tên khách hàng
              </CustomFormLabel>
              <CustomTextField
                id="name-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
              <CustomFormLabel htmlFor="phone-text" sx={{ fontSize: '1.1rem' }}>
                SĐT
              </CustomFormLabel>
              <CustomTextField
                id="phone-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
              <CustomFormLabel htmlFor="email-text" sx={{ fontSize: '1.1rem' }}>
                Email
              </CustomFormLabel>
              <CustomTextField
                id="email-text"
                type="email"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
              <CustomFormLabel htmlFor="gender-select" sx={{ fontSize: '1.1rem' }}>
                Giới tính
              </CustomFormLabel>
              <CustomSelect
                id="gender-select"
                value={gender}
                onChange={handleGenderChange}
                fullWidth
                variant="outlined"
                sx={{ fontSize: '1rem' }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </CustomSelect>
              <CustomFormLabel htmlFor="dob-text" sx={{ fontSize: '1.1rem' }}>
                Ngày sinh
              </CustomFormLabel>
              <CustomTextField
                id="dob-text"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                sx={{ fontSize: '1rem' }}
              />
              <CustomFormLabel htmlFor="notes-text" sx={{ fontSize: '1.1rem' }}>
                Ghi chú
              </CustomFormLabel>
              <CustomTextField
                id="notes-text"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                sx={{ fontSize: '1rem' }}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <CustomFormLabel htmlFor="assistant-text" sx={{ fontSize: '1.1rem' }}>
                Trợ lý
              </CustomFormLabel>
              <CustomTextField
                id="assistant-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
              <CustomFormLabel htmlFor="channel-select" sx={{ fontSize: '1.1rem' }}>
                Kênh (MKT)
              </CustomFormLabel>
              <FormControl fullWidth variant="outlined" sx={{ fontSize: '1rem' }}>
                <Select
                  id="channel-select"
                  multiple
                  value={channel}
                  onChange={handleChannelChange}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Box key={value}>{currencies.find(c => c.value === value)?.label}</Box>
                      ))}
                    </Box>
                  )}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <Checkbox checked={channel.indexOf(option.value) > -1} />
                      <ListItemText primary={option.label} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <CustomFormLabel htmlFor="tags-text" sx={{ fontSize: '1.1rem' }}>
                Tags
              </CustomFormLabel>
              <CustomTextField
                id="tags-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
              <CustomFormLabel htmlFor="company-name-text" sx={{ fontSize: '1.1rem' }}>
                Tên công ty
              </CustomFormLabel>
              <CustomTextField
                id="company-name-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
              <CustomFormLabel htmlFor="company-address-text" sx={{ fontSize: '1.1rem' }}>
                Địa chỉ công ty
              </CustomFormLabel>
              <CustomTextField
                id="company-address-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
              <CustomFormLabel htmlFor="company-email-text" sx={{ fontSize: '1.1rem' }}>
                Email công ty
              </CustomFormLabel>
              <CustomTextField
                id="company-email-text"
                type="email"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
              <CustomFormLabel htmlFor="company-phone-text" sx={{ fontSize: '1.1rem' }}>
                Số điện thoại công ty
              </CustomFormLabel>
              <CustomTextField
                id="company-phone-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
              <CustomFormLabel htmlFor="company-website-text" sx={{ fontSize: '1.1rem' }}>
                Website công ty
              </CustomFormLabel>
              <CustomTextField
                id="company-website-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
              />
              <CustomFormLabel htmlFor="facebook-url-text" sx={{ fontSize: '1.1rem' }}>
                Facebook URL
              </CustomFormLabel>
              <CustomTextField
                id="facebook-url-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
                value={facebookUrl}
                onChange={handleFacebookUrlChange}
              />
              <CustomFormLabel htmlFor="zalo-url-text" sx={{ fontSize: '1.1rem' }}>
                Zalo URL
              </CustomFormLabel>
              <CustomTextField
                id="zalo-url-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
                value={zaloUrl}
                onChange={handleZaloUrlChange}
              />
              <CustomFormLabel htmlFor="instagram-url-text" sx={{ fontSize: '1.1rem' }}>
                Instagram URL
              </CustomFormLabel>
              <CustomTextField
                id="instagram-url-text"
                variant="outlined"
                fullWidth
                sx={{ fontSize: '1rem' }}
                value={instagramUrl}
                onChange={handleInstagramUrlChange}
              />
            </Grid>
          </Grid>
        </form>
      </ParentCard>
    </div>
  );
};

export default PopupAdd2;
