import { Box, Checkbox, Grid, ListItemText, MenuItem, Typography } from '@mui/material';
import React from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

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

const PopupAdd = () => {
  const [gender, setGender] = React.useState('');
  const [selectedChannels, setSelectedChannels] = React.useState<string[]>([]);
  const [tags, setTags] = React.useState('');
  const [companyName, setCompanyName] = React.useState('');
  const [companyAddress, setCompanyAddress] = React.useState('');
  const [companyEmail, setCompanyEmail] = React.useState('');
  const [companyPhone, setCompanyPhone] = React.useState('');
  const [companyWebsite, setCompanyWebsite] = React.useState('');
  const [facebookUrl, setFacebookUrl] = React.useState('');
  const [zaloUrl, setZaloUrl] = React.useState('');
  const [instagramUrl, setInstagramUrl] = React.useState('');
  const [assistant, setAssistant] = React.useState('');

  const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGender(event.target.value as string);
  };

  const handleChannelChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedChannels(event.target.value as string[]);
  };

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

  const handleSubmit = () => {
    // Xử lý gửi dữ liệu
    console.log({
      gender,
      channels: selectedChannels,
      tags,
      companyName,
      companyAddress,
      companyEmail,
      companyPhone,
      companyWebsite,
      facebookUrl,
      zaloUrl,
      instagramUrl,
      assistant
    });
  };

  return (
    <div>
      
        {/* Thông tin cá nhân */}
        <Box mb={4} p={3} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2 }}>
          <Typography variant="h6" sx={{ fontSize: '1.2rem', mb: 2 }}>
            Thông tin cá nhân
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={6} md={12}>
              <CustomFormLabel htmlFor="name-text">
                Tên khách hàng
              </CustomFormLabel>
              <CustomTextField
                id="name-text"
                variant="outlined"
                fullWidth
                value={tags}
                onChange={handleChange(setTags)}
              />
              <CustomFormLabel htmlFor="phone-text">
                SĐT
              </CustomFormLabel>
              <CustomTextField
                id="phone-text"
                variant="outlined"
                fullWidth
                value={companyPhone}
                onChange={handleChange(setCompanyPhone)}
              />
              <CustomFormLabel htmlFor="gender-select">
                Giới tính
              </CustomFormLabel>
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
            </Grid>
            <Grid item lg={6} md={12}>
              <CustomFormLabel htmlFor="email-text">
                Email
              </CustomFormLabel>
              <CustomTextField
                id="email-text"
                type="email"
                variant="outlined"
                fullWidth
                value={companyEmail}
                onChange={handleChange(setCompanyEmail)}
              />
              <CustomFormLabel htmlFor="dob-text">
                Ngày sinh
              </CustomFormLabel>
              <CustomTextField
                id="dob-text"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <CustomFormLabel htmlFor="notes-text">
                Ghi chú
              </CustomFormLabel>
              <CustomTextField
                id="notes-text"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={tags}
                onChange={handleChange(setTags)}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Thông tin trợ lý và kênh */}
        <Box mb={4} p={3} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2 }}>
          <Typography variant="h6" sx={{ fontSize: '1.2rem', mb: 2 }}>
            Trợ lý và kênh
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={6} md={12}>
              <CustomFormLabel htmlFor="assistant-text">
                Trợ lý
              </CustomFormLabel>
              <CustomTextField
                id="assistant-text"
                variant="outlined"
                fullWidth
                value={assistant}
                onChange={handleChange(setAssistant)}
              />
              <CustomFormLabel htmlFor="tags-text">
                Tags
              </CustomFormLabel>
              <CustomTextField
                id="tags-text"
                variant="outlined"
                fullWidth
                value={tags}
                onChange={handleChange(setTags)}
              />
            </Grid>
            <Grid item lg={6} md={12}>
              <CustomFormLabel htmlFor="channel-select">
                Kênh
              </CustomFormLabel>
              <CustomSelect
                id="channel-select"
                multiple
                value={selectedChannels}
                onChange={handleChannelChange}
                renderValue={(selected: any) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value: any) => (
                      <Box key={value} sx={{ display: 'flex', alignItems: 'center', border: '1px solid', borderRadius: '4px', padding: '2px 6px' }}>
                        {channels.find(channel => channel.value === value)?.label}
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
        {/* thongtindoangnghiep */}
        <Box mb={4} p={3} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2 }}>
          <Typography variant="h6" sx={{ fontSize: '1.2rem', mb: 2 }}>
            Thông tin doanh nghiệp
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={6} md={12} xs={12}>
              <CustomFormLabel htmlFor="company-name-text">Tên công ty</CustomFormLabel>
              <CustomTextField
                id="company-name-text"
                variant="outlined"
                fullWidth
                value={companyName}
                onChange={handleChange(setCompanyName)}
              />
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <CustomFormLabel htmlFor="company-address-text">Địa chỉ công ty</CustomFormLabel>
              <CustomTextField
                id="company-address-text"
                variant="outlined"
                fullWidth
                value={companyAddress}
                onChange={handleChange(setCompanyAddress)}
              />
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <CustomFormLabel htmlFor="company-phone-text">Số điện thoại công ty</CustomFormLabel>
              <CustomTextField
                id="company-phone-text"
                variant="outlined"
                fullWidth
                value={companyPhone}
                onChange={handleChange(setCompanyPhone)}
              />
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <CustomFormLabel htmlFor="company-email-text">Email công ty</CustomFormLabel>
              <CustomTextField
                id="company-email-text"
                type="email"
                variant="outlined"
                fullWidth
                value={companyEmail}
                onChange={handleChange(setCompanyEmail)}
              />
            </Grid>
            <Grid item lg={6} md={12} xs={12}>
              <CustomFormLabel htmlFor="company-website-text">Website công ty</CustomFormLabel>
              <CustomTextField
                id="company-website-text"
                variant="outlined"
                fullWidth
                value={companyWebsite}
                onChange={handleChange(setCompanyWebsite)}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Thông tin mạng xã hội */}
        <Box mb={4} p={3} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2 }}>
          <Typography variant="h6" sx={{ fontSize: '1.2rem', mb: 2 }}>
            Thông tin mạng xã hội
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={6} md={12}>
              <CustomFormLabel htmlFor="facebook-url-text">
                Facebook URL
              </CustomFormLabel>
              <CustomTextField
                id="facebook-url-text"
                variant="outlined"
                fullWidth
                value={facebookUrl}
                onChange={handleChange(setFacebookUrl)}
              />
              <CustomFormLabel htmlFor="zalo-url-text">
                Zalo URL
              </CustomFormLabel>
              <CustomTextField
                id="zalo-url-text"
                variant="outlined"
                fullWidth
                value={zaloUrl}
                onChange={handleChange(setZaloUrl)}
              />
              <CustomFormLabel htmlFor="instagram-url-text">
                Instagram URL
              </CustomFormLabel>
              <CustomTextField
                id="instagram-url-text"
                variant="outlined"
                fullWidth
                value={instagramUrl}
                onChange={handleChange(setInstagramUrl)}
              />
            </Grid>
          </Grid>
        </Box>
    </div>
  );
};

export default PopupAdd;
