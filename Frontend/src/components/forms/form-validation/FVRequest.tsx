import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, Grid } from '@mui/material';
import CustomTextField from '../theme-elements/CustomTextField';
import CustomFormLabel from '../theme-elements/CustomFormLabel';

const validationSchema = yup.object({
  username: yup
    .string()
    .min(2, 'Ít nhất 2 ký tự')
    .max(50, 'Nhiều nhất 50 ký tự')
    .required('Không được bỏ trống tên'),
  email: yup.string().email('Email không đúng định dạng').required('Không được bỏ trống email'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Số điện thoại chỉ được chứa chữ số')
    .min(10, 'Số điện thoại phải dài ít nhất 10 chữ số')
    .max(15, 'Số điện thoại không được dài quá 15 chữ số')
    .required('Không được bỏ trống số điện thoại'),
  feature: yup.number().required('Vui lòng chọn tính năng'),
  description: yup.string().max(500, 'Mô tả không được quá 500 ký tự').notRequired(),
});

const FVReques = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phone: '',
      feature: '',
      description: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2)); // Show all form values
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Box>
            <CustomFormLabel htmlFor="username">Họ và Tên</CustomFormLabel>
            <CustomTextField
              fullWidth
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box>
            <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
            <CustomTextField
              fullWidth
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box>
            <CustomFormLabel htmlFor="phone">Số điện thoại</CustomFormLabel>
            <CustomTextField
              fullWidth
              id="phone"
              name="phone"
              type="text"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box>
            <CustomFormLabel htmlFor="description">Nội dung đề xuất của bạn</CustomFormLabel>
            <CustomTextField
              fullWidth
              rows={4}
              multiline
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Box>
        </Grid>

        <Grid item xs={12} textAlign="center">
          <Button variant="contained" type="submit">
            Gửi cho chúng tôi
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FVReques;
