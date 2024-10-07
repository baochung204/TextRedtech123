import { Box, Button, Grid, MenuItem } from '@mui/material';
import React from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import LoopIcon from '@mui/icons-material/Loop';

interface CurrencyType {
  value: string;
  label: string;
}

const currencies: CurrencyType[] = [
  { value: 'female', label: 'Đồng' },
  { value: 'male', label: 'Phần trăm' },
];

const AddVoucher = () => {
  const [gender, setGender] = React.useState(currencies[0]?.value || '');
  const [Name, setName] = React.useState('');
  const [companyPhone, setCompanyPhone] = React.useState('');
  const [discountCode, setDiscountCode] = React.useState('');

  const generateRandomCode = () => {
    const randomCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    setDiscountCode(randomCode);
  };

  const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGender(event.target.value as string);
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
            <CustomFormLabel htmlFor="discount-code">Mã giảm giá</CustomFormLabel>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <CustomTextField
                  id="discount-code"
                  variant="outlined"
                  fullWidth
                  value={discountCode}
                  placeholder="Nhập mã giảm giá"
                  onChange={handleChange(setDiscountCode)}
                />
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" color="primary" onClick={generateRandomCode} >
                  <LoopIcon />
                </Button>
              </Grid>
            </Grid>
            <CustomFormLabel htmlFor="start-date">Ngày bắt đầu</CustomFormLabel>
            <CustomTextField
              id="start-date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <CustomFormLabel htmlFor="end-date">Ngày kết thúc</CustomFormLabel>
            <CustomTextField
              id="end-date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddVoucher;
