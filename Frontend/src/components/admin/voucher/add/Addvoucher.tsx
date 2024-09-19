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
  { value: 'female', label: 'Đồng' },
  { value: 'male', label: 'Phần trăm' },
  // { value: 'other', label: 'Khác' },
];

const channels: CurrencyType[] = [
  { value: 'mkt', label: 'MKT' },
  { value: 'zl', label: 'Zalo' },
  { value: 'fb', label: 'Facebook' },
  { value: 'inst', label: 'Instagram' },
  { value: 'other', label: 'Other' },
];

const AddVoucher = () => {
  const [gender, setGender] = React.useState(currencies[0]?.value || '');
  const [selectedChannels, setSelectedChannels] = React.useState<string[]>([]);
  const [Name, setName] = React.useState('');
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

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  return (
    <div>
      {/* Thông tin cá nhân */}
      <Box mb={4} p={3} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2 }}>
        <Grid container spacing={3}>
          <Grid item lg={6} md={12}>
            <CustomFormLabel htmlFor="name-text">Tên chiến dịch</CustomFormLabel>
            <CustomTextField
              id="name-text"
              variant="outlined"
              fullWidth
              placeholder="Nhập tên chiến dịch"
              value={Name}
              onChange={handleChange(setName)}
            />
            <CustomFormLabel htmlFor="phone-text">Số lượng mã</CustomFormLabel>
            <CustomTextField
              id="phone-text"
              variant="outlined"
              fullWidth
              value={companyPhone}
              placeholder="Nhập số lượng mã"
              onChange={handleChange(setCompanyPhone)}
            />
            <CustomFormLabel htmlFor="gender-select">Loại giảm giá</CustomFormLabel>
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
            <CustomFormLabel htmlFor="dob-text">Ngày bắt đầu </CustomFormLabel>
            <CustomTextField
              id="dob-text"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <CustomFormLabel htmlFor="dob-text">Ngày kết thúc </CustomFormLabel>
            <CustomTextField
              id="dob-text"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Thông tin trợ lý và kênh */}
    </div>
  );
};

export default AddVoucher;
