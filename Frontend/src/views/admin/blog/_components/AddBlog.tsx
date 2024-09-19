<<<<<<< HEAD
import React from 'react';
import { Box, Grid, Typography, Button, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
=======
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { useFormik } from 'formik';
>>>>>>> 9a4f29ca058ba07ba7cfccc2dd406ec1f657bef8
import Tags from 'src/components/apps/sell/layout/Tags';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import * as Yup from 'yup';

<<<<<<< HEAD
=======
// interface CurrencyType {
//   value: string;
//   label: string;
// }

// const currencies: CurrencyType[] = [
//   { value: 'female', label: 'Nữ' },
//   { value: 'male', label: 'Nam' },
//   { value: 'other', label: 'Khác' },
// ];

// const channels: CurrencyType[] = [
//   { value: 'Makerting', label: 'MKT' },
//   { value: 'Zalo', label: 'Zalo' },
//   { value: 'Facebook', label: 'Facebook' },
//   { value: 'Instagram', label: 'Instagram' },
//   // { value: 'other', label: 'Other' },
// ];

>>>>>>> 9a4f29ca058ba07ba7cfccc2dd406ec1f657bef8
const AddBlog = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      title: '',
      url: '',
      description: '',
      content: '',
      tags: '',
      thumbnail: '',
      pricePoint: '',
      status: '',
    },
    validationSchema: Yup.object({
<<<<<<< HEAD
      title: Yup.string().required('Tiêu đề là bắt buộc'),
      url: Yup.string(),
      description: Yup.string().min(90, 'Mô tả phải có ít nhất 90 ký tự'),
      content: Yup.string().required('Nội dung bài viết là bắt buộc'),
      thumbnail: Yup.string(),
      pricePoint: Yup.number().typeError('Giá phải là số').positive('Giá phải lớn hơn 0'),
      status: Yup.string(),
      tags: Yup.string(),
=======
      name: Yup.string().required('Tên khách hàng là bắt buộc'),
      phone: Yup.string()
        .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Số điện thoại không hợp lệ')
        .when('email', {
          is: (email: string) => !email, // Nếu email không có giá trị
          then: Yup.string().required('Số điện thoại khách hàng là bắt buộc'),
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
      companyPhone: Yup.string().matches(
        /^(0[3|5|7|8|9])+([0-9]{8})$/,
        'Số điện thoại không hợp lệ',
      ),
      companyWebsite: Yup.string().url('URL không hợp lệ'),
      facebookUrl: Yup.string().url('URL không hợp lệ'),
      zaloUrl: Yup.string().url('URL không hợp lệ'),
      instagramUrl: Yup.string().url('URL không hợp lệ'),
>>>>>>> 9a4f29ca058ba07ba7cfccc2dd406ec1f657bef8
    }),
    onSubmit: (values) => {
      // Xử lý gửi dữ liệu
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
<<<<<<< HEAD
      <Box mb={4} p={4} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2, bgcolor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
=======
      {/* Thông tin cá nhân */}
      <Box
        mb={4}
        p={4}
        sx={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: 2,
          bgcolor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff',
          color: theme.palette.mode === 'dark' ? '#fff' : '#000',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.5rem',
            mb: 2,
            fontWeight: 'bold',
            color: theme.palette.mode === 'dark' ? '#fff' : '#333',
          }}
        >
          Thông tin cá nhân
        </Typography>
>>>>>>> 9a4f29ca058ba07ba7cfccc2dd406ec1f657bef8
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="title">Tiêu đề</CustomFormLabel>
            <CustomTextField
              id="title"
              variant="outlined"
              fullWidth
              value={formik.values.title}
              onChange={formik.handleChange}
<<<<<<< HEAD
              name="title"
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
=======
              name="name"
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <CustomFormLabel htmlFor="phone" sx={{ mt: 2 }}>
              Số điện thoại
            </CustomFormLabel>
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
              <CustomFormLabel htmlFor="tags" sx={{ mt: 2 }}>
                Tags
              </CustomFormLabel>
              <Tags />
            </Grid>
            {formik.touched.gender && Boolean(formik.errors.gender) && (
              <Typography color="error" variant="body2">
                {formik.errors.gender}
              </Typography>
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
>>>>>>> 9a4f29ca058ba07ba7cfccc2dd406ec1f657bef8
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="url">URL</CustomFormLabel>
            <CustomTextField
              id="url"
              variant="outlined"
              fullWidth
              value={formik.values.url}
              onChange={formik.handleChange}
              name="url"
              error={formik.touched.url && Boolean(formik.errors.url)}
              helperText={formik.touched.url && formik.errors.url}
            />
<<<<<<< HEAD
          </Grid>
          <Grid item xs={12}>
            <CustomFormLabel htmlFor="description">Mô tả</CustomFormLabel>
            <CustomTextField
              id="description"
=======
            <CustomFormLabel htmlFor="dob" sx={{ mt: 2 }}>
              Ngày sinh
            </CustomFormLabel>
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
            <CustomFormLabel htmlFor="notes" sx={{ mt: 2 }}>
              Ghi chú
            </CustomFormLabel>
            <CustomTextField
              id="notes"
>>>>>>> 9a4f29ca058ba07ba7cfccc2dd406ec1f657bef8
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              name="description"
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomFormLabel htmlFor="content">Nội dung</CustomFormLabel>
            <CustomTextField
              id="content"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              value={formik.values.content}
              onChange={formik.handleChange}
              name="content"
              error={formik.touched.content && Boolean(formik.errors.content)}
              helperText={formik.touched.content && formik.errors.content}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="thumbnail">Ảnh đại diện</CustomFormLabel>
            <CustomTextField
              id="thumbnail"
              variant="outlined"
              fullWidth
              value={formik.values.thumbnail}
              onChange={formik.handleChange}
              name="thumbnail"
              error={formik.touched.thumbnail && Boolean(formik.errors.thumbnail)}
              helperText={formik.touched.thumbnail && formik.errors.thumbnail}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="pricePoint">Giá Point</CustomFormLabel>
            <CustomTextField
              id="pricePoint"
              variant="outlined"
              fullWidth
              type="number"
              value={formik.values.pricePoint}
              onChange={formik.handleChange}
              name="pricePoint"
              error={formik.touched.pricePoint && Boolean(formik.errors.pricePoint)}
              helperText={formik.touched.pricePoint && formik.errors.pricePoint}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="status">Trạng thái</CustomFormLabel>
            <CustomTextField
              id="status"
              variant="outlined"
              fullWidth
              value={formik.values.status}
              onChange={formik.handleChange}
              name="status"
              error={formik.touched.status && Boolean(formik.errors.status)}
              helperText={formik.touched.status && formik.errors.status}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomFormLabel htmlFor="tags">Tags</CustomFormLabel>
            <Tags
              id="tags"
              value={formik.values.tags}
              onChange={(tags) => formik.setFieldValue('tags', tags)}
              error={formik.touched.tags && Boolean(formik.errors.tags)}
              helperText={formik.touched.tags && formik.errors.tags}
            />
          </Grid>
        </Grid>
      </Box>
<<<<<<< HEAD
=======
      <h1>test</h1>
>>>>>>> 9a4f29ca058ba07ba7cfccc2dd406ec1f657bef8
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          Lưu thông tin
        </Button>
      </Box>
    </form>
  );
};

export default AddBlog;
