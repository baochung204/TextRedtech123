import { Box, Button, Checkbox, FormControlLabel, Grid, MenuItem } from '@mui/material';
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
  { value: 'dong', label: 'Đồng' },
  { value: 'percent', label: 'Phần trăm' },
];

const AddVoucher = () => {
  const [discountType, setDiscountType] = React.useState(currencies[0]?.value || '');
  const [Name, setName] = React.useState('');
  const [companyPhone, setCompanyPhone] = React.useState('');
  const [discountCode, setDiscountCode] = React.useState('');
  const [discountValue, setDiscountValue] = React.useState('');
  const [minOrderValue, setMinOrderValue] = React.useState('');
  const [maxDiscountAmount, setMaxDiscountAmount] = React.useState('');
  const [externalCode, setExternalCode] = React.useState(false);
  const [internalCode, setInternalCode] = React.useState(false);
  // Generate random code with current date (ddMM format)
  const generateRandomCode = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase() + day + month;
    setDiscountCode(randomCode);
  };

  const handleDiscountTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDiscountType(event.target.value as string);
    setDiscountValue(''); // Reset discount value when switching discount type
    setMaxDiscountAmount(''); // Reset max discount amount when switching
  };

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value);
      };

  return (
    <div>
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

            <CustomFormLabel htmlFor="discount-type-select">Loại giảm giá</CustomFormLabel>
            <CustomSelect
              id="discount-type-select"
              value={discountType}
              onChange={handleDiscountTypeChange}
              fullWidth
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CustomSelect>

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
                <Button variant="contained" color="primary" onClick={generateRandomCode}>
                  <LoopIcon />
                </Button>
              </Grid>
            </Grid>
            <FormControlLabel
              control={
                <Checkbox
                  checked={externalCode}
                  onChange={() => setExternalCode(!externalCode)}
                  color="primary"
                />
              }
              label="Mã giảm bên ngoài hệ thống"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={internalCode}
                  onChange={() => setInternalCode(!internalCode)}
                  color="primary"
                />
              }
              label="Mã giảm bên trong hệ thống"
            />
          </Grid>

          <Grid item lg={6} md={12}>
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

            {discountType === 'percent' ? (
              <>
                <CustomFormLabel htmlFor="discount-percentage">Giảm bao nhiêu %</CustomFormLabel>
                <CustomTextField
                  id="discount-percentage"
                  variant="outlined"
                  fullWidth
                  value={discountValue}
                  placeholder="Nhập % giảm giá"
                  onChange={handleChange(setDiscountValue)}
                />

                <CustomFormLabel htmlFor="max-discount-amount">
                  Số tiền giảm tối đa (VNĐ)
                </CustomFormLabel>
                <CustomTextField
                  id="max-discount-amount"
                  variant="outlined"
                  fullWidth
                  value={maxDiscountAmount}
                  placeholder="Nhập số tiền giảm tối đa"
                  onChange={handleChange(setMaxDiscountAmount)}
                />
              </>
            ) : (
              <>
                <CustomFormLabel htmlFor="discount-amount">Giảm bao nhiêu tiền (VNĐ)</CustomFormLabel>
                <CustomTextField
                  id="discount-amount"
                  variant="outlined"
                  fullWidth
                  value={discountValue}
                  placeholder="Nhập số tiền giảm"
                  onChange={handleChange(setDiscountValue)}
                />
              </>
            )}

            <CustomFormLabel htmlFor="min-order-value">
              Giá trị đơn hàng tối thiểu (VNĐ) để áp dụng
            </CustomFormLabel>
            <CustomTextField
              id="min-order-value"
              variant="outlined"
              fullWidth
              value={minOrderValue}
              placeholder="Nhập giá trị đơn hàng tối thiểu"
              onChange={handleChange(setMinOrderValue)}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddVoucher;
