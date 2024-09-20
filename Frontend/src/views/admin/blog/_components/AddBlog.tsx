import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { useFormik } from 'formik';
// import Tags from 'src/components/apps/sell/layout/Tags';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import * as Yup from 'yup';

const AddBlog = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      title: '',
      url: '',
      phone: '',
      description: '',
      content: '',
      gender: '',
      dob: '',
      tags: [],
      thumbnail: '',
      pricePoint: '',
      status: '',
      assistant: '',
      zaloUrl: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Tiêu đề là bắt buộc'),
      phone: Yup.string()
        .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Số điện thoại không hợp lệ')
        .required('Số điện thoại là bắt buộc'),
      gender: Yup.string(),
      url: Yup.string().url('URL không hợp lệ'),
      dob: Yup.date(),
      zaloUrl: Yup.string().url('URL Zalo không hợp lệ'),
      tags: Yup.string().required('Tags là bắt buộc'),
    }),
    onSubmit: (values) => {
      // Xử lý gửi dữ liệu
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
            <CustomFormLabel htmlFor="phone">Số điện thoại</CustomFormLabel>
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
          </Grid>

          <Grid item xs={12} md={6}>
            <CustomFormLabel htmlFor="zaloUrl">Zalo URL</CustomFormLabel>
            <CustomTextField
              id="zaloUrl"
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
            <CustomFormLabel htmlFor="dob">Ngày sinh</CustomFormLabel>
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
          </Grid>

          {/* <Grid item xs={12}>
            <CustomFormLabel htmlFor="tags">Tags</CustomFormLabel>
            <Tags
              value={formik.values.tags}
              onChange={(tags: string[]) => formik.setFieldValue('tags', tags)}
              error={formik.touched.tags && Boolean(formik.errors.tags)}
              helperText={formik.touched.tags ? formik.errors.tags : ''}
            />
          </Grid> */}

          <Grid item xs={12}>
            <CustomFormLabel htmlFor="description">Ghi chú</CustomFormLabel>
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
<<<<<<< HEAD
=======
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
          {/* <Grid item xs={12}>
            <CustomFormLabel htmlFor="tags">Tags</CustomFormLabel>
            <Tags
              value={formik.values.tags}
              onChange={(tags: any) => formik.setFieldValue('tags', tags)}
              error={formik.touched.tags && Boolean(formik.errors.tags)}
              helperText={formik.touched.tags && formik.errors.tags}
            />
          </Grid> */}
>>>>>>> f7f9881141679f68152a78a4d88cb61cb7668c8e
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
