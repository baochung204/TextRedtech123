import React from 'react';
import { Box, Grid, Typography, Button, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import Tags from 'src/components/apps/sell/layout/Tags';

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
      title: Yup.string().required('Tiêu đề là bắt buộc'),
      url: Yup.string(),
      description: Yup.string().min(90, 'Mô tả phải có ít nhất 90 ký tự'),
      content: Yup.string().required('Nội dung bài viết là bắt buộc'),
      thumbnail: Yup.string(),
      pricePoint: Yup.number().typeError('Giá phải là số').positive('Giá phải lớn hơn 0'),
      status: Yup.string(),
      tags: Yup.string(),
    }),
    onSubmit: (values) => {
      // Xử lý gửi dữ liệu
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mb={4} p={4} sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2, bgcolor: theme.palette.mode === 'dark' ? '#2A3447' : '#fff', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="title">Tiêu đề</CustomFormLabel>
            <CustomTextField
              id="title"
              variant="outlined"
              fullWidth
              value={formik.values.title}
              onChange={formik.handleChange}
              name="title"
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
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
          </Grid>
          <Grid item xs={12}>
            <CustomFormLabel htmlFor="description">Mô tả</CustomFormLabel>
            <CustomTextField
              id="description"
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
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          Lưu thông tin
        </Button>
      </Box>
    </form>
  );
};

export default AddBlog;
