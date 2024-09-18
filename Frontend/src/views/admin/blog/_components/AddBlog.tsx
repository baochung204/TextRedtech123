import React from 'react';
import { Box, Grid, ListItemText, MenuItem, Typography, Button, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import Tags from 'src/components/apps/sell/layout/Tags';

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
  { value: 'Makerting', label: 'MKT' },
  { value: 'Zalo', label: 'Zalo' },
  { value: 'Facebook', label: 'Facebook' },
  { value: 'Instagram', label: 'Instagram' },
  // { value: 'other', label: 'Other' },
];

const AddBlog = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      gender: '',
      email: '',
      dob: '',
      notes: '',
      assistant: '',
      tags: '',
      selectedChannels: [],
      companyName: '',
      companyAddress: '',
      taxId: '',
      companyEmail: '',
      companyPhone: '',
      companyWebsite: '',
      facebookUrl: '',
      zaloUrl: '',
      instagramUrl: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Tên khách hàng là bắt buộc'),
      phone: Yup.string()
        .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Số điện thoại không hợp lệ')
        .when('email', {
          is: (email: string) => !email, // Nếu email không có giá trị
          then: Yup.string().required('Số điện thoại khách hàng là bắt buộc')
        }),
      gender: Yup.string(),
      email: Yup.string().required('Email là bắt buộc'),
        // .email('Email không hợp lệ')
        // .when('phone', {
        //   is: (phone:string) => !phone, // Nếu phone không có giá trị
        //   then: Yup.string().required('Email là bắt buộc')
        // }),
      dob: Yup.date(),
      notes: Yup.string(),
      assistant: Yup.string(),
      tags: Yup.string(),
      selectedChannels: Yup.array().min(1, 'Chọn ít nhất một kênh'),
      companyName: Yup.string(),
      companyAddress: Yup.string(),
      taxId: Yup.string(),
      companyEmail: Yup.string().email('Email không hợp lệ'),
      companyPhone: Yup.string()
        .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Số điện thoại không hợp lệ'),
      companyWebsite: Yup.string().url('URL không hợp lệ'),
      facebookUrl: Yup.string().url('URL không hợp lệ'),
      zaloUrl: Yup.string().url('URL không hợp lệ'),
      instagramUrl: Yup.string().url('URL không hợp lệ'),
    }),
    onSubmit: (values) => {
      // Xử lý gửi dữ liệu
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Thông tin cá nhân */}
      <Box mb={4} p={4} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2, bgcolor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
        <Typography variant="h6" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }}>
          Thông tin cá nhân
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="name">Tên khách hàng</CustomFormLabel>
            <CustomTextField
              id="name"
              variant="outlined"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <CustomFormLabel htmlFor="phone" sx={{ mt: 2 }}>Số điện thoại</CustomFormLabel>
            <CustomTextField
              id="phone"
              variant="outlined"
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              name="phone"
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="assistant">Trợ lý</CustomFormLabel>
            <CustomTextField
              id="assistant"
              variant="outlined"
              fullWidth
              value={formik.values.assistant}
              onChange={formik.handleChange}
              name="assistant"
              error={formik.touched.assistant && Boolean(formik.errors.assistant)}
              helperText={formik.touched.assistant && formik.errors.assistant}
            />
            <CustomFormLabel htmlFor="tags" sx={{ mt: 2 }}>Tags</CustomFormLabel>
            <Tags />
          </Grid>
            {formik.touched.gender && Boolean(formik.errors.gender) && (
              <Typography color="error" variant="body2">{formik.errors.gender}</Typography>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomFormLabel htmlFor="zaloUrl">Zalo</CustomFormLabel>
            <CustomTextField
              placeholder="https://www.zalo.com/abc"
              id="zaloUrl"
              type="url"
              variant="outlined"
              fullWidth
              value={formik.values.zaloUrl}
              onChange={formik.handleChange}
              name="zaloUrl"
              error={formik.touched.zaloUrl && Boolean(formik.errors.zaloUrl)}
              helperText={formik.touched.zaloUrl && formik.errors.zaloUrl}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
            <CustomTextField
              id="email"
              type="email"
              variant="outlined"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <CustomFormLabel htmlFor="dob" sx={{ mt: 2 }}>Ngày sinh</CustomFormLabel>
            <CustomTextField
              id="dob"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formik.values.dob}
              onChange={formik.handleChange}
              name="dob"
              error={formik.touched.dob && Boolean(formik.errors.dob)}
              helperText={formik.touched.dob && formik.errors.dob}
            />
            <CustomFormLabel htmlFor="notes" sx={{ mt: 2 }}>Ghi chú</CustomFormLabel>
            <CustomTextField
              id="notes"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formik.values.notes}
              onChange={formik.handleChange}
              name="notes"
              error={formik.touched.notes && Boolean(formik.errors.notes)}
              helperText={formik.touched.notes && formik.errors.notes}
            />
          </Grid>
        </Grid>
      </Box>
<h1>test</h1>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          Lưu thông tin
        </Button>
      </Box>
    </form>
  );
};


export default AddBlog;
