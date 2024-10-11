import { Box, Grid, MenuItem } from '@mui/material';
import React, { useEffect } from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSwitch from 'src/components/forms/theme-elements/CustomSwitch';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

// interface CurrencyType {
//   value: string;
//   label: string;
// }

// const currencies: CurrencyType[] = [
//   { value: 'female', label: 'Đồng' },
//   { value: 'male', label: 'Phần trăm' },
//   // { value: 'other', label: 'Khác' },
// ];

// const channels: CurrencyType[] = [
//   { value: 'mkt', label: 'MKT' },
//   { value: 'zl', label: 'Zalo' },
//   { value: 'fb', label: 'Facebook' },
//   { value: 'inst', label: 'Instagram' },
//   { value: 'other', label: 'Other' },
// ];
const options = [
  { id: 1, label: 'GPT4.0', price: 20000 },
  { id: 2, label: 'Gitcopilot', price: 3000 },
  { id: 3, label: 'Git', price: 4000 },
  { id: 4, label: 'GPT', price: 4500 },
];

const AddFlashSale = () => {
  const [quatity, setQuantity] = React.useState<string>('');
  const [Name, setName] = React.useState('');
  const [Switch] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState('');
  const [discount, setDiscount] = React.useState<number | null>(null);
  const [finalPrice, setFinalPrice] = React.useState<number | null>(null);
  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };
  // const handleCalculateDiscount = (selectedValue) => {
  //   const product = options.find((option: any) => option.id === selectedValue);
  //   if (product && discount > 0 && discount <= 100) {
  //     const newPrice = product.price - (product.price * discount) / 100;
  //     setFinalPrice(newPrice);
  //   }
  // };
  useEffect(() => {
    const product = options.find((option: any) => option.id === selectedValue);
    if (product && discount && discount > 0 && discount <= 100) {
      const newPrice = product.price - (product.price * discount) / 100;
      setFinalPrice(newPrice);
    }
  }, [discount, selectedValue]);

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
            <CustomFormLabel htmlFor="custom-select">Chọn sản phẩm</CustomFormLabel>
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
                <MenuItem key={option.id} value={option.id}>
                  {option.label}_{option.price}
                </MenuItem>
              ))}
            </CustomTextField>
          </Grid>

          <Grid item lg={6} md={12}>
            <Grid container>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="dob-text">Giảm giá (%)</CustomFormLabel>
                <CustomTextField
                  id="dob-text"
                  type="number"
                  placeholder="Giá mới"
                  variant="outlined"
                  min={0}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  onChange={(e: any) => setDiscount(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                {selectedValue && discount && (
                  <Grid item lg={6} md={12}>
                    <CustomFormLabel htmlFor="dob-text">Giá khuyến mãi</CustomFormLabel>
                    <CustomTextField
                      id="dob-text"
                      variant="outlined"
                      min={0}
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      value={finalPrice}
                    />
                  </Grid>
                )}
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="dob-text">Trạng thái </CustomFormLabel>
                <CustomSwitch color="primary" defaultChecked={Switch} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Thông tin trợ lý và kênh */}
    </div>
  );
};

export default AddFlashSale;
