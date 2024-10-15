import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
} from '@mui/material';
import React from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import LoopIcon from '@mui/icons-material/Loop';
import VndCouponService from 'src/service/VndCouponService';
import { FormCreateVndCoupon, VndCouponScopeEnum, VndCouponTypeEnum } from 'src/types/apps/vnd_coupon';

interface CurrencyType {
  value: VndCouponTypeEnum;
  label: string;
}

const currencies: CurrencyType[] = [
  { value: VndCouponTypeEnum.VALUE, label: 'Đồng' },
  { value: VndCouponTypeEnum.PERCENT, label: 'Phần trăm' },
];

const AddVoucher:React.FC<{handleSubmit: any}> = (props) => {
  const [discountType, setDiscountType] = React.useState<VndCouponTypeEnum>(currencies[0]?.value || VndCouponTypeEnum.VALUE);
  const [Name, setName] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [discountCode, setDiscountCode] = React.useState('');
  const [discountValue, setDiscountValue] = React.useState('');
  const [minOrderValue, setMinOrderValue] = React.useState('');
  const [maxDiscountAmount, setMaxDiscountAmount] = React.useState('');
  const [scopeEnum, setScopeEnum] = React.useState<VndCouponScopeEnum>(VndCouponScopeEnum.IN_SYSTEM);
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  // Generate random code with current date (ddMM format)
  const generateRandomCode = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase() + day + month;
    setDiscountCode(randomCode);
  };

  const handleDiscountTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDiscountType(event.target.value as VndCouponTypeEnum);
    setDiscountValue(''); // Reset discount value when switching discount type
    setMaxDiscountAmount(''); // Reset max discount amount when switching
  };

  const handleScopeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setScopeEnum(event.target.value as VndCouponScopeEnum);
  };

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

  const handleSubmit = async () => {
    const vndCoupon: FormCreateVndCoupon = {
      name: Name,
      quantity: Number(quantity),
      type: discountType,
      code: discountCode,
      scopeEnum: scopeEnum,
      start: new Date(startDate),
      end: new Date(endDate),
      value: discountType === VndCouponTypeEnum.VALUE ? Number(discountValue) : undefined,
      percent: discountType === VndCouponTypeEnum.PERCENT ? Number(discountValue) : undefined,
      lowerBound: Number(minOrderValue),
      upperBound: discountType === VndCouponTypeEnum.PERCENT ? Number(maxDiscountAmount) : undefined,
    };

    try {
      const data = await VndCouponService.createVndCoupon(vndCoupon);
      console.log('Coupon created successfully', data);
    } catch (error) {
      console.error('Error occurred while submitting the form.', error);
    }
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

            <CustomFormLabel htmlFor="quantity">Số lượng mã</CustomFormLabel>
            <CustomTextField
              id="quantity"
              variant="outlined"
              fullWidth
              value={quantity}
              placeholder="Nhập số lượng mã"
              onChange={handleChange(setQuantity)}
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

            <CustomFormLabel htmlFor="scope-select">Phạm vi mã</CustomFormLabel>
            <CustomSelect
              id="scope-select"
              value={scopeEnum}
              onChange={handleScopeChange}
              fullWidth
              variant="outlined"
            >
              <MenuItem value={VndCouponScopeEnum.IN_SYSTEM}>Trong hệ thống</MenuItem>
              <MenuItem value={VndCouponScopeEnum.OUT_OF_SYSTEM}>Ngoài hệ thống</MenuItem>
            </CustomSelect>
          </Grid>

          <Grid item lg={6} md={12}>
            <CustomFormLabel htmlFor="start-date">Ngày bắt đầu</CustomFormLabel>
            <CustomTextField
              id="start-date"
              type="date"
              variant="outlined"
              fullWidth
              value={startDate}
              onChange={handleChange(setStartDate)}
              InputLabelProps={{ shrink: true }}
            />

            <CustomFormLabel htmlFor="end-date">Ngày kết thúc</CustomFormLabel>
            <CustomTextField
              id="end-date"
              type="date"
              variant="outlined"
              fullWidth
              value={endDate}
              onChange={handleChange(setEndDate)}
              InputLabelProps={{ shrink: true }}
            />

            {discountType === VndCouponTypeEnum.PERCENT ? (
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

                <CustomFormLabel htmlFor="max-discount-amount">Số tiền giảm tối đa (VNĐ)</CustomFormLabel>
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

            <CustomFormLabel htmlFor="min-order-value">Giá trị đơn hàng tối thiểu (VNĐ) để áp dụng</CustomFormLabel>
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
