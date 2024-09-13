import { Alert, Box, IconButton, Slide, Snackbar, TextField, Typography } from '@mui/material';
import { IconBriefcase, IconCheck, IconEdit } from '@tabler/icons-react';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

function SlideTransition(props: any) {
  return <Slide {...props} direction="left" />;
}

const BusinessInformation = () => {
  const [editing, setEditing] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null,
  );

  // Sử dụng Formik để quản lý form và Yup để xác thực
  const formik = useFormik({
    initialValues: {
      companyName: 'Công ty ABC',
      taxCode: '1234567890',
      representative: 'Nguyễn Văn A',
      position: 'Giám đốc',
      address: '456 Đường XYZ, TP. Hồ Chí Minh',
      phone: '0901234567',
      email: 'contact@company.com',
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required('Tên công ty là bắt buộc'),
      taxCode: Yup.string()
        .matches(/^[0-9]+$/, 'Mã số thuế chỉ chứa số')
        .min(10, 'Mã số thuế phải có ít nhất 10 số')
        .required('Mã số thuế là bắt buộc'),
      representative: Yup.string().required('Người đại diện là bắt buộc'),
      position: Yup.string().required('Chức vụ là bắt buộc'),
      address: Yup.string().required('Địa chỉ công ty là bắt buộc'),
      phone: Yup.string()
        .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Số điện thoại không hợp lệ')
        .required('Số điện thoại là bắt buộc'),
      email: Yup.string().email('Email không hợp lệ').required('Email doanh nghiệp là bắt buộc'),
    }),
    onSubmit: () => {
      setEditing(null);
      setShowAlert({ type: 'success', message: 'Thông tin đã được cập nhật!' });
      setOpen(true); // Hiển thị Snackbar khi có thông báo
    },
  });

  // const theme = useTheme();

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

  const renderField = (field: string, label: string) => (
    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
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
          <IconButton onClick={() => handleEditClick(field)}>
            <IconEdit />
          </IconButton>
        </>
      )}
    </Box>
  );

  return (
    <Box sx={{ padding: 3, borderRadius: 1, boxShadow: 3, margin: '0 auto' }}>
      <Typography mb={4} variant="h4" fontWeight="600" gutterBottom display={'flex'} gap={1}>
        <IconBriefcase /> <span>Thông tin doanh nghiệp</span>
      </Typography>
      {renderField('companyName', 'Tên công ty')}
      {renderField('taxCode', 'Mã số thuế')}
      {renderField('representative', 'Người đại diện')}
      {renderField('position', 'Chức vụ')}
      {renderField('address', 'Địa chỉ công ty')}
      {renderField('phone', 'Số điện thoại')}
      {renderField('email', 'Email doanh nghiệp')}

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

export default BusinessInformation;
