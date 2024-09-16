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
  { value: 'mkt', label: 'MKT' },
  { value: 'zl', label: 'Zalo' },
  { value: 'fb', label: 'Facebook' },
  { value: 'inst', label: 'Instagram' },
  { value: 'other', label: 'Other' },
];

const PopupAddList2 = () => {
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
        .required('Số điện thoại là bắt buộc'),
      gender: Yup.string().required('Giới tính là bắt buộc'),
      email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
      dob: Yup.date().required('Ngày sinh là bắt buộc'),
      notes: Yup.string(),
      assistant: Yup.string(),
      tags: Yup.string(),
      selectedChannels: Yup.array().min(1, 'Chọn ít nhất một kênh'),
      companyName: Yup.string().required('Tên công ty là bắt buộc'),
      companyAddress: Yup.string().required('Địa chỉ công ty là bắt buộc'),
      taxId: Yup.string().required('Mã số thuế là bắt buộc'),
      companyEmail: Yup.string().email('Email không hợp lệ').required('Email công ty là bắt buộc'),
      companyPhone: Yup.string()
        .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Số điện thoại không hợp lệ')
        .required('Số điện thoại công ty là bắt buộc'),
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
            <CustomFormLabel htmlFor="phone" sx={{ mt: 2 }}>SĐT</CustomFormLabel>
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
            <CustomFormLabel htmlFor="gender" sx={{ mt: 2 }}>Giới tính</CustomFormLabel>
            <CustomSelect
              id="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              name="gender"
              fullWidth
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CustomSelect>
            {formik.touched.gender && Boolean(formik.errors.gender) && (
              <Typography color="error" variant="body2">{formik.errors.gender}</Typography>
            )}
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

      {/* Thông tin trợ lý và kênh */}
      <Box mb={4} p={4} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2, bgcolor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
        <Typography variant="h6" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }}>
          Trợ lý và kênh
        </Typography>
        <Grid container spacing={2}>
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
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="selectedChannels">Kênh</CustomFormLabel>
            <CustomSelect
              id="selectedChannels"
              multiple
              value={formik.values.selectedChannels}
              onChange={(event: any) => {
                formik.setFieldValue('selectedChannels', event.target.value);
              }}
              name="selectedChannels"
              renderValue={(selected: any) => selected.join(', ')}
              fullWidth
              variant="outlined"
            >
              {channels.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <ListItemText primary={option.label} />
                </MenuItem>
              ))}
            </CustomSelect>
            {formik.touched.selectedChannels && Boolean(formik.errors.selectedChannels) && (
              <Typography color="error" variant="body2">{formik.errors.selectedChannels}</Typography>
            )}
          </Grid>
        </Grid>
      </Box>

      {/* Thông tin công ty */}
      <Box mb={4} p={4} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2, bgcolor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
        <Typography variant="h6" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }}>
          Thông tin công ty
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="companyName">Tên công ty</CustomFormLabel>
            <CustomTextField
              id="companyName"
              variant="outlined"
              fullWidth
              value={formik.values.companyName}
              onChange={formik.handleChange}
              name="companyName"
              error={formik.touched.companyName && Boolean(formik.errors.companyName)}
              helperText={formik.touched.companyName && formik.errors.companyName}
            />
            <CustomFormLabel htmlFor="companyAddress" sx={{ mt: 2 }}>Địa chỉ công ty</CustomFormLabel>
            <CustomTextField
              id="companyAddress"
              variant="outlined"
              fullWidth
              value={formik.values.companyAddress}
              onChange={formik.handleChange}
              name="companyAddress"
              error={formik.touched.companyAddress && Boolean(formik.errors.companyAddress)}
              helperText={formik.touched.companyAddress && formik.errors.companyAddress}
            />
            <CustomFormLabel htmlFor="taxId" sx={{ mt: 2 }}>Mã số thuế</CustomFormLabel>
            <CustomTextField
              id="taxId"
              variant="outlined"
              fullWidth
              value={formik.values.taxId}
              onChange={formik.handleChange}
              name="taxId"
              error={formik.touched.taxId && Boolean(formik.errors.taxId)}
              helperText={formik.touched.taxId && formik.errors.taxId}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="companyEmail">Email công ty</CustomFormLabel>
            <CustomTextField
              id="companyEmail"
              type="email"
              variant="outlined"
              fullWidth
              value={formik.values.companyEmail}
              onChange={formik.handleChange}
              name="companyEmail"
              error={formik.touched.companyEmail && Boolean(formik.errors.companyEmail)}
              helperText={formik.touched.companyEmail && formik.errors.companyEmail}
            />
            <CustomFormLabel htmlFor="companyPhone" sx={{ mt: 2 }}>SĐT công ty</CustomFormLabel>
            <CustomTextField
              id="companyPhone"
              variant="outlined"
              fullWidth
              value={formik.values.companyPhone}
              onChange={formik.handleChange}
              name="companyPhone"
              error={formik.touched.companyPhone && Boolean(formik.errors.companyPhone)}
              helperText={formik.touched.companyPhone && formik.errors.companyPhone}
            />
            <CustomFormLabel htmlFor="companyWebsite" sx={{ mt: 2 }}>Website công ty</CustomFormLabel>
            <CustomTextField
              id="companyWebsite"
              variant="outlined"
              fullWidth
              value={formik.values.companyWebsite}
              onChange={formik.handleChange}
              name="companyWebsite"
              error={formik.touched.companyWebsite && Boolean(formik.errors.companyWebsite)}
              helperText={formik.touched.companyWebsite && formik.errors.companyWebsite}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Thông tin mạng xã hội */}
      <Box mb={4} p={4} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2, bgcolor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
        <Typography variant="h6" sx={{ fontSize: '1.5rem', mb: 2, fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#fff' : '#333' }}>
          Mạng xã hội
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <CustomFormLabel htmlFor="facebookUrl">Facebook</CustomFormLabel>
            <CustomTextField
              id="facebookUrl"
              type="url"
              variant="outlined"
              fullWidth
              value={formik.values.facebookUrl}
              onChange={formik.handleChange}
              name="facebookUrl"
              error={formik.touched.facebookUrl && Boolean(formik.errors.facebookUrl)}
              helperText={formik.touched.facebookUrl && formik.errors.facebookUrl}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomFormLabel htmlFor="zaloUrl">Zalo</CustomFormLabel>
            <CustomTextField
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
          <Grid item xs={12} md={4}>
            <CustomFormLabel htmlFor="instagramUrl">Instagram</CustomFormLabel>
            <CustomTextField
              id="instagramUrl"
              type="url"
              variant="outlined"
              fullWidth
              value={formik.values.instagramUrl}
              onChange={formik.handleChange}
              name="instagramUrl"
              error={formik.touched.instagramUrl && Boolean(formik.errors.instagramUrl)}
              helperText={formik.touched.instagramUrl && formik.errors.instagramUrl}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          Lưu thông tin
        </Button>
      </Box>
    </form>
  );
};

export default PopupAddList2;
