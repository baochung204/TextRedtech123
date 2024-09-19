import { Box, Grid, MenuItem } from '@mui/material';
import React from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomSwitch from 'src/components/forms/theme-elements/CustomSwitch';
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
const options = [
  { value: 'option1', label: 'Giá gốc' },
  { value: 'option2', label: 'Giá khuyến mãi' },
];

const AddFlashSale = () => {
  const [setGender] = React.useState(currencies[0]?.value || '');
  const [quatity, setQuantity] = React.useState<string>('');
  const [Name, setName] = React.useState('');
  const [Switch] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState('');

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
            <CustomFormLabel htmlFor="phone-text">Số lượng Flash-sale</CustomFormLabel>
            <CustomTextField
              id="phone-text"
              variant="outlined"
              fullWidth
              value={quatity}
              placeholder="Nhập số lượng mã"
              onChange={handleChange(setQuantity)}
            />
            <CustomFormLabel htmlFor="custom-select">Chọn một tùy chọn</CustomFormLabel>
            <CustomTextField
              id="custom-select"
              select
              variant="outlined"
              fullWidth
              label="Chọn một tùy chọn"
              value={selectedValue}
              onChange={(e: any) => setSelectedValue(e.target.value)}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CustomTextField>
          </Grid>
          <Grid item lg={6} md={12}>
            <CustomFormLabel htmlFor="dob-text">Giảm giá (%)</CustomFormLabel>
            <CustomTextField
              id="dob-text"
              type="number"
              placeholder="Giá mới"
              variant="outlined"
              min={0}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <CustomFormLabel htmlFor="dob-text">Trạng thái </CustomFormLabel>
            <CustomSwitch color="primary" defaultChecked={Switch} />
          </Grid>
        </Grid>
      </Box>

      {/* Thông tin trợ lý và kênh */}
    </div>
  );
};

export default AddFlashSale;
