import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, Stack, MenuItem, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';

const validationSchema = yup.object({
  customerId: yup.string().required('ID khách hàng là bắt buộc'),
  assistant: yup.string().required('Trợ lý là bắt buộc'),
  channel: yup.string().required('Kênh là bắt buộc'),
  tags: yup.string().required('Tags là bắt buộc'),
  customerName: yup.string().required('Tên khách hàng là bắt buộc'),
  totalSpent: yup.number().required('Tổng chi tiêu là bắt buộc').min(0, 'Tổng chi tiêu không hợp lệ'),
  phone: yup.string().required('Số điện thoại là bắt buộc').matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ'),
  address: yup.string().required('Địa chỉ là bắt buộc'),
});

const PopupAdd2 = () => {
  const formik = useFormik({
    initialValues: {
      customerId: '',
      createdAt: null,
      assistant: '',
      channel: '',
      tags: '',
      customerName: '',
      totalSpent: '',
      phone: '',
      address: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        {/* ID Khách hàng */}
        <Box>
          <CustomFormLabel>ID Khách hàng</CustomFormLabel>
          <CustomTextField
            fullWidth
            id="customerId"
            name="customerId"
            value={formik.values.customerId}
            onChange={formik.handleChange}
            error={formik.touched.customerId && Boolean(formik.errors.customerId)}
            helperText={formik.touched.customerId && formik.errors.customerId}
          />
        </Box>

        {/* Ngày tạo */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Ngày tạo"
            value={formik.values.createdAt}
            onChange={(newDate) => formik.setFieldValue('createdAt', newDate)}
            renderInput={(params) => (
              <CustomTextField
                fullWidth
                {...params}
                error={formik.touched.createdAt && Boolean(formik.errors.createdAt)}
              />
            )}
          />
        </LocalizationProvider>

        {/* Trợ lý */}
        <Box>
          <CustomFormLabel>Trợ lý</CustomFormLabel>
          <CustomTextField
            fullWidth
            id="assistant"
            name="assistant"
            value={formik.values.assistant}
            onChange={formik.handleChange}
            error={formik.touched.assistant && Boolean(formik.errors.assistant)}
            helperText={formik.touched.assistant && formik.errors.assistant}
          />
        </Box>

        {/* Kênh (MKT) */}
        <Box>
          <CustomFormLabel>Kênh (MKT)</CustomFormLabel>
          <CustomSelect
            fullWidth
            id="channel"
            name="channel"
            value={formik.values.channel}
            onChange={formik.handleChange}
            error={formik.touched.channel && Boolean(formik.errors.channel)}
            helperText={formik.touched.channel && formik.errors.channel}
          >
            <MenuItem value="Facebook">Facebook</MenuItem>
            <MenuItem value="Google">Google</MenuItem>
            <MenuItem value="Email">Email</MenuItem>
          </CustomSelect>
        </Box>

        {/* Tags */}
        <Box>
          <CustomFormLabel>Tags</CustomFormLabel>
          <CustomTextField
            fullWidth
            id="tags"
            name="tags"
            value={formik.values.tags}
            onChange={formik.handleChange}
            error={formik.touched.tags && Boolean(formik.errors.tags)}
            helperText={formik.touched.tags && formik.errors.tags}
          />
        </Box>

        {/* Tên khách hàng */}
        <Box>
          <CustomFormLabel>Tên khách hàng</CustomFormLabel>
          <CustomTextField
            fullWidth
            id="customerName"
            name="customerName"
            value={formik.values.customerName}
            onChange={formik.handleChange}
            error={formik.touched.customerName && Boolean(formik.errors.customerName)}
            helperText={formik.touched.customerName && formik.errors.customerName}
          />
        </Box>

        {/* Tổng chi tiêu */}
        <Box>
          <CustomFormLabel>Tổng chi tiêu</CustomFormLabel>
          <CustomTextField
            fullWidth
            id="totalSpent"
            name="totalSpent"
            value={formik.values.totalSpent}
            onChange={formik.handleChange}
            error={formik.touched.totalSpent && Boolean(formik.errors.totalSpent)}
            helperText={formik.touched.totalSpent && formik.errors.totalSpent}
          />
        </Box>

        {/* Số điện thoại */}
        <Box>
          <CustomFormLabel>Số điện thoại</CustomFormLabel>
          <CustomTextField
            fullWidth
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Box>

        {/* Địa chỉ */}
        <Box mb={3}>
          <CustomFormLabel>Địa chỉ</CustomFormLabel>
          <CustomTextField
            fullWidth
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </Box>

        {/* Nút Submit */}
        <Button color="primary" variant="contained" type="submit">
          Thêm khách hàng
        </Button>
      </Stack>
    </form>
  );
};

export default PopupAdd2;
