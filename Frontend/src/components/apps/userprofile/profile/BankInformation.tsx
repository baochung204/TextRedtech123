import { Alert, Box, IconButton, Slide, Snackbar, TextField, Typography } from '@mui/material';
import { IconCheck, IconEdit } from '@tabler/icons-react';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function SlideTransition(props: any) {
  return <Slide {...props} direction="left" />;
}

const BankInformation = () => {
  const [editing, setEditing] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null,
  );

  // Sử dụng Formik để quản lý form và Yup để xác thực
  const formik = useFormik({
    initialValues: {
      bankName: '',
      accountNumber: '',
      accountHolder: '',
      branch: '',
    },
    validationSchema: Yup.object({
      bankName: Yup.string().required('Tên ngân hàng là bắt buộc'),
      accountNumber: Yup.string()
        .matches(/^[0-9]+$/, 'STK chỉ chứa số')
        .required('STK là bắt buộc'),
      accountHolder: Yup.string().required('Tên đầy đủ chủ ngân hàng là bắt buộc'),
      branch: Yup.string().required('Chi nhánh là bắt buộc'),
    }),
    onSubmit: (_values, { setSubmitting }) => {
      if (!formik.isValid) {
        return;
      }
      setEditing(null);
      setShowAlert({ type: 'success', message: 'Thông tin đã được cập nhật!' });
      setOpen(true); // Hiển thị Snackbar khi có thông báo
      setSubmitting(false);
    },
  });

  const handleEditClick = (field: string) => {
    setEditing(field);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      formik.handleSubmit();
    }
  };

  const handleClose = (_event: Event | React.SyntheticEvent<any, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); // Đóng Snackbar khi bấm ngoài
  };

  const renderField = (field: string, label: string) => {
    return (
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="500" sx={{ width: '200px' }}>
          {label}:
        </Typography>
        {editing === field ? (
          <>
            <TextField
              name={field}
              value={formik.values[field as keyof typeof formik.values]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched[field as keyof typeof formik.touched] &&
                Boolean(formik.errors[field as keyof typeof formik.errors])
              }
              helperText={
                formik.touched[field as keyof typeof formik.touched] &&
                formik.errors[field as keyof typeof formik.errors]
              }
              onKeyDown={handleKeyDown}
              sx={{ flexGrow: 1, mr: 1 }}
              size="small"
            />
            <IconButton onClick={() => formik.handleSubmit()}>
              <IconCheck />
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              {formik.values[field as keyof typeof formik.values]}
            </Typography>
            {/* Hiển thị biểu tượng chỉnh sửa luôn */}
            <IconButton onClick={() => handleEditClick(field)}>
              <IconEdit />
            </IconButton>
          </>
        )}
      </Box>
    );
  };

  return (
    <Box sx={{ padding: 3, borderRadius: 1, boxShadow: 3, margin: '0 auto' }}>
      <Typography mb={4} variant="h4" fontWeight="600" gutterBottom display={'flex'} gap={1}>
        <AccountBalanceIcon /> <span>Thông tin ngân hàng</span>
      </Typography>
      {renderField('bankName', 'Tên Ngân Hàng')}
      {renderField('branch', 'Chi nhánh')}
      {renderField('accountNumber', 'Số tài khoản')}
      {renderField('accountHolder', 'Chủ ngân hàng')}

      {/* Hiển thị Alert khi có sự thay đổi */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={SlideTransition}
      >
        <Alert onClose={handleClose} severity={showAlert?.type || 'success'} variant="filled">
          {showAlert?.message || 'Lưu thay đổi thành công'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BankInformation;
