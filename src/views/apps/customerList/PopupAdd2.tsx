import React from 'react';
import { Box, Grid, ListItemText, MenuItem, Typography, Button, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

interface ChannelType {
  value: string;
  label: string;
}

const channels: ChannelType[] = [
  { value: 'zl', label: 'Zalo' },
  { value: 'fb', label: 'Facebook' },
  { value: 'tiktok', label: 'Tiktok' },
  { value: 'inst', label: 'Instagram' },
];

const AddOrder = () => {
  const theme = useTheme();
  
  const formik = useFormik({
    initialValues: {
      customerName: '',
      phone: '',
      address: '',
      email: '',
      notes: '',
      selectedChannels: [],
    },
    validationSchema: Yup.object({
      customerName: Yup.string().required('Tên khách hàng là bắt buộc'),
      phone: Yup.string()
        .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Số điện thoại không hợp lệ')
        .required('Số điện thoại là bắt buộc'),
      address: Yup.string().required('Địa chỉ là bắt buộc'),
      email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
      notes: Yup.string(),
      selectedChannels: Yup.array().min(1, 'Chọn ít nhất một kênh'),
    }),
    onSubmit: (values) => {
      // Xử lý gửi dữ liệu
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mb={4} p={4} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2, bgcolor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
        <Typography variant="h6" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }}>
          Thông tin khách hàng
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="customerName-text">Tên khách hàng</CustomFormLabel>
            <CustomTextField
              id="customerName-text"
              variant="outlined"
              fullWidth
              value={formik.values.customerName}
              onChange={formik.handleChange}
              name="customerName"
              error={formik.touched.customerName && Boolean(formik.errors.customerName)}
              helperText={formik.touched.customerName && formik.errors.customerName}
            />
            <CustomFormLabel htmlFor="phone-text" sx={{ mt: 2 }}>SĐT</CustomFormLabel>
            <CustomTextField
              id="phone-text"
              variant="outlined"
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              name="phone"
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <CustomFormLabel htmlFor="address-text" sx={{ mt: 2 }}>Địa chỉ</CustomFormLabel>
            <CustomTextField
              id="address-text"
              variant="outlined"
              fullWidth
              value={formik.values.address}
              onChange={formik.handleChange}
              name="address"
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <CustomFormLabel htmlFor="email-text" sx={{ mt: 2 }}>Email</CustomFormLabel>
            <CustomTextField
              id="email-text"
              type="email"
              variant="outlined"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="notes-text">Ghi chú</CustomFormLabel>
            <CustomTextField
              id="notes-text"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formik.values.notes}
              onChange={formik.handleChange}
              name="notes"
              error={formik.touched.notes && Boolean(formik.errors.notes)}
              helperText={formik.touched.notes && formik.errors.notes}
            />
            <CustomFormLabel htmlFor="channel-select" sx={{ mt: 2 }}>Kênh</CustomFormLabel>
            <CustomSelect
              id="channel-select"
              multiple
              value={formik.values.selectedChannels}
              onChange={(event: any) => {
                formik.setFieldValue('selectedChannels', event.target.value);
              }}
              name="selectedChannels"
              renderValue={(selected: any) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selected.map((value: any) => (
                    <Box
                      key={value}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        padding: '2px 4px',
                      }}
                    >
                      <ListItemText primary={channels.find((channel) => channel.value === value)?.label} />
                    </Box>
                  ))}
                </Box>
              )}
              fullWidth
              variant="outlined"
            >
              {channels.map((channel) => (
                <MenuItem key={channel.value} value={channel.value}>
                  <ListItemText primary={channel.label} />
                </MenuItem>
              ))}
            </CustomSelect>
            {formik.touched.selectedChannels && Boolean(formik.errors.selectedChannels) && (
              <Typography color="error" variant="body2">{formik.errors.selectedChannels}</Typography>
            )}
          </Grid>
        </Grid>
      </Box>

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Lưu thông tin
      </Button>
    </form>
  );
};

export default AddOrder;
