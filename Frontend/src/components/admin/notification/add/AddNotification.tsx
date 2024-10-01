import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  Tooltip,
  useTheme,
} from '@mui/material';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import * as Yup from 'yup';

const AddNotification = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const theme = useTheme();
  const borderColor = theme.palette.divider;
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const validateSchema = Yup.object().shape({
    title: Yup.string().required('Tiêu đề là bắt buộc'),
    tags: Yup.string().required('Tags là bắt buộc'),
    url: Yup.string().url('Đường dẫn không hợp lệ').required('Đường dẫn là bắt buộc'),
    content: Yup.string().required('Nội dung là bắt buộc'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      tags: '',
      url: '',
      content: '',
    },
    validationSchema: validateSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values) => {
      const isSuccess = true;
      if (isSuccess) {
        console.log(values);
        formik.resetForm();
        setIsPopupOpen(!isPopupOpen);
        setSnackbarMessage('Thêm mới thành công');
        setSnackbarSeverity('success');
      } else {
        setSnackbarMessage('Thêm mới thất bại');
        setSnackbarSeverity('error');
      }
      setOpenSnackbar(true);
      setTimeout(() => {
        setOpenSnackbar(false);
      }, 3000);
    },
  });

  return (
    <Box>
      <Tooltip title="Thêm thông báo mới">
        <IconButton color="primary" aria-label="Add to cart" onClick={handleOpenPopup}>
          <AddCircleIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Tooltip>
      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        maxWidth="lg"
        sx={{
          '& .MuiDialog-container': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '1000px',
          },
        }}
      >
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <DialogTitle padding={'10px'}>Tạo thông báo</DialogTitle>
            <DialogContent>
              <Box
                mb={4}
                p={3}
                sx={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: 2 }}
              >
                <Grid container spacing={1}>
                  <Grid item lg={6} md={12}>
                    <CustomFormLabel htmlFor="title">Tiêu đề</CustomFormLabel>
                    <CustomTextField
                      id="title"
                      variant="outlined"
                      fullWidth
                      placeholder="VD: Thông báo số 1"
                      value={formik.values.title}
                      name="title"
                      onChange={formik.handleChange}
                      error={formik.touched.title && Boolean(formik.errors.title)}
                      helperText={formik.touched.title && formik.errors.title}
                    />
                  </Grid>
                  <Grid item lg={6} md={12}>
                    <CustomFormLabel htmlFor="tags">Tags</CustomFormLabel>
                    <CustomTextField
                      id="tags"
                      variant="outlined"
                      fullWidth
                      placeholder="VD: Mục số 1"
                      value={formik.values.tags}
                      name="tags"
                      onChange={formik.handleChange}
                      error={formik.touched.tags && Boolean(formik.errors.tags)}
                      helperText={formik.touched.tags && formik.errors.tags}
                    />
                  </Grid>
                  <Grid item lg={12} md={12}>
                    <CustomFormLabel htmlFor="url">Đường dẫn xem thêm</CustomFormLabel>
                    <CustomTextField
                      id="url"
                      variant="outlined"
                      fullWidth
                      placeholder="VD: https://example.com/thong-bao-so-1"
                      value={formik.values.url}
                      name="url"
                      onChange={formik.handleChange}
                      error={formik.touched.url && Boolean(formik.errors.url)}
                      helperText={formik.touched.url && formik.errors.url}
                    />
                  </Grid>
                  <Grid item lg={12} md={12}>
                    <CustomFormLabel htmlFor="content">Nội dung</CustomFormLabel>
                    <Paper sx={{ border: `1px solid ${borderColor}` }} variant="outlined">
                      <ReactQuill
                        value={formik.values.content}
                        onChange={(value) => formik.setFieldValue('content', value)}
                      />
                    </Paper>
                    {formik.touched.content && formik.errors.content && (
                      <p style={{ color: 'red' }}>{formik.errors.content}</p>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClosePopup}>Hủy</Button>
              <Button variant="contained" type="submit" color="primary">
                Lưu
              </Button>
            </DialogActions>
          </form>
        </Box>
      </Dialog>

      {/* Snackbar hiển thị thông báo */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddNotification;
