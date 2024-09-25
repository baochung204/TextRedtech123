import { Box, Button, Grid, Typography, useTheme, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import Tags from 'src/components/apps/sell/layout/Tags';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import * as Yup from 'yup';
import ReactQuill from 'react-quill';

const AddBlog = () => {
  const theme = useTheme();
  const [content, setContent] = useState('');
  const [thumbnailPreview, setThumbnailPreview] = useState('');

  const formik = useFormik({
    initialValues: {
      title: '',
      url: '',
      description: '',
      content: '',
      tags: [],
      thumbnail: '',
      pricePoint: '',
      status: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Tiêu đề là bắt buộc'),
      url: Yup.string().url('URL không hợp lệ').required('URL là bắt buộc'),
      description: Yup.string().required('Mô tả là bắt buộc'),
      content: Yup.string().required('Nội dung là bắt buộc'),
      thumbnail: Yup.string().required('Ảnh đại diện là bắt buộc'),
      pricePoint: Yup.number().required('Điểm giá là bắt buộc').positive('Điểm giá phải là số dương'),
      status: Yup.string().required('Trạng thái là bắt buộc'),
      tags: Yup.array().min(1, 'Tags là bắt buộc').required('Tags là bắt buộc'),
    }),
    onSubmit: (values) => {
      // Xử lý gửi dữ liệu
      console.log(values);
    },
  });

  const handleContentChange = (value: string) => {
    setContent(value);
    formik.setFieldValue('content', value);
  };

  const handleThumbnailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
        formik.setFieldValue('thumbnail', file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
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
            mb: 3,
            fontWeight: 'bold',
            color: theme.palette.mode === 'dark' ? '#fff' : '#333',
          }}
        >
          Thêm Bài Viết Mới
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
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
            <ReactQuill
              value={content}
              onChange={handleContentChange}
              theme="snow"
              placeholder="Nhập nội dung bài viết..."
              style={{ height: '300px', paddingBottom: '10px' }}
            />
            {formik.touched.content && formik.errors.content && (
              <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                {formik.errors.content}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <CustomFormLabel htmlFor="url">Đường link URL</CustomFormLabel>
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
            <CustomFormLabel htmlFor="tags">Tags</CustomFormLabel>
            <Tags />
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
            <CustomFormLabel>Trạng thái</CustomFormLabel>
            <FormControl component="fieldset" error={formik.touched.status && Boolean(formik.errors.status)}>
              <RadioGroup
                row
                aria-label="status"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
              >
                <FormControlLabel value="published" control={<Radio />} label="Đăng" />
                <FormControlLabel value="draft" control={<Radio />} label="Nháp" />
              </RadioGroup>
              {formik.touched.status && formik.errors.status && (
                <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                  {formik.errors.status}
                </Typography>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <CustomFormLabel htmlFor="thumbnail">Ảnh đại diện</CustomFormLabel>
            <input
              type="file"
              id="thumbnail"
              accept="image/*"
              onChange={handleThumbnailChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="thumbnail">
              <Button variant="outlined" component="span">
                Chọn ảnh
              </Button>
            </label>
            {thumbnailPreview && (
              <Box mt={2}>
                <Typography variant="body2">Ảnh đã chọn:</Typography>
                <img
                  src={thumbnailPreview}
                  alt="Preview"
                  style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', marginTop: '8px' }}
                />
              </Box>
            )}
            {formik.touched.thumbnail && formik.errors.thumbnail && (
              <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                {formik.errors.thumbnail}
              </Typography>
            )}
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
