import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Alert,
  AlertTitle,
  Button,
  useTheme,
} from '@mui/material';
import { IconUserCircle, IconEdit, IconCheck, IconLock } from '@tabler/icons-react';
// import { useNavigate } from 'react-router-dom';
import { dispatch } from 'src/store/Store';
import { setSelected } from 'src/store/RouterSlice';
<<<<<<< HEAD
import { dispatch, useDispatch } from 'src/store/Store';
import * as yup from 'yup';
import { useFormik } from 'formik';
=======
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
>>>>>>> d6e173af768bc6c0cf2903f10ba071a2f188be0a

const AccountInformation = () => {
  const [editing, setEditing] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Validation schema
  const validationSchema = yup.object({
    email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    phone: yup
      .string()
      .matches(/^0\d{9}$/, 'Số điện thoại không hợp lệ, phải có 10 chữ số và bắt đầu bằng 0')
      .required('Vui lòng nhập số điện thoại'),
  });

  const formik = useFormik({
    initialValues: {
      email: 'nqton301004@gmail.com',
      phone: '0901234567',
      password: '**********',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setEditing(null);
      setShowAlert({ message: 'Cập nhật thông tin thành công!', type: 'success' });
      setTimeout(() => setShowAlert(null), 3000);
    },
  });

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
<<<<<<< HEAD

  const handleButtonClick = (id: number) => {
    if (id === 2) {
      dispatch(setSelected('changepassword'));
    }
  };

  const handleEditClick = (field: string) => {
    if (field === 'password') {
      handleButtonClick(2);
    } else {
      setEditing(field);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      formik.handleSubmit();
    }
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
            error={formik.touched[field as keyof typeof formik.touched] && Boolean(formik.errors[field as keyof typeof formik.errors])}
            helperText={formik.touched[field as keyof typeof formik.touched] && formik.errors[field as keyof typeof formik.errors]}
            onKeyDown={handleKeyDown}
            sx={{ flexGrow: 1, mr: 1 }}
            size="small"
          />
          <IconButton onClick={formik.handleSubmit}>
            <IconCheck />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            {field === 'password' ? '**********' : formik.values[field as keyof typeof formik.values]}
=======

  const handleEditClick = (field: string) => {
    if (field === 'password') {
      // navigate('/user-profile/changepassword');
      navigate('/pages/account-settings');
      dispatch(setSelected('changepassword'));

      const handleButtonClick = (id: number) => {
        if (id === 2) {
          dispatch(setSelected('changepassword')); // Dispatch action để điều hướng
        }
      };

      const handleEditClick = (field: string) => {
        if (field === 'password') {
          handleButtonClick(2); // Gọi handleButtonClick khi người dùng click đổi mật khẩu
        } else {
          setEditing(field);
        }
      };

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccountInfo({
          ...accountInfo,
          [editing as string]: e.target.value,
        });
      };

      const handleSaveClick = () => {
        setEditing(null);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      };

      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          handleSaveClick();
        }
      };

      const renderField = (field: string, label: string) => (
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
            {label}:
>>>>>>> d6e173af768bc6c0cf2903f10ba071a2f188be0a
          </Typography>
          {editing === field ? (
            <>
              <TextField
                value={accountInfo[field as keyof typeof accountInfo]}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                sx={{ flexGrow: 1, mr: 1 }}
                size="small"
              />
              <IconButton onClick={handleSaveClick}>
                <IconCheck />
              </IconButton>
            </>
          ) : (
            <>
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                {field === 'password'
                  ? '**********'
                  : accountInfo[field as keyof typeof accountInfo]}
              </Typography>
              {field !== 'password' && (
                <IconButton onClick={() => handleEditClick(field)}>
                  <IconEdit />
                </IconButton>
              )}
            </>
          )}
<<<<<<< HEAD
        </>
      )}
    </Box>
  );

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 1,
        boxShadow: 3,
        margin: '0 auto',
      }}
    >
      <Typography mb={4} variant="h4" fontWeight="600" gutterBottom display={'flex'} gap={1}>
        <IconUserCircle /> <span>Thông tin tài khoản</span>
      </Typography>
      {renderField('email', 'Email')}
      {renderField('phone', 'Số điện thoại')}
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
          Mật khẩu:
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            {formik.values.password}
          </Typography>
          <Button onClick={() => handleEditClick('password')} variant="outlined" color="primary" startIcon={<IconLock />}>
            Đổi mật khẩu
          </Button>
=======
>>>>>>> d6e173af768bc6c0cf2903f10ba071a2f188be0a
        </Box>
      );

<<<<<<< HEAD
      {showAlert && (
        <Alert
          severity={showAlert.type}
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            zIndex: theme.zIndex.snackbar,
            backgroundColor: showAlert.type === 'success' ? '#4caf50' : '#f44336',
            color: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
            borderRadius: 1, 
            padding: 2, 
            width: 300,
          }}
        >
          <AlertTitle>{showAlert.type === 'success' ? 'Thành công' : 'Lỗi'}</AlertTitle>
          {showAlert.message}
        </Alert>
      )}
    </Box>
  );
=======
      return (
        <Box
          sx={{
            padding: 3,
            borderRadius: 1,
            boxShadow: 3,
            margin: '0 auto',
          }}
        >
          <Typography mb={4} variant="h4" fontWeight="600" gutterBottom display={'flex'} gap={1}>
            <IconUserCircle /> <span>Thông tin tài khoản</span>
          </Typography>
          {renderField('email', 'Email')}
          {renderField('phone', 'Số điện thoại')}
          <Box
            sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
              Mật khẩu:
            </Typography>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                {accountInfo.password}
              </Typography>
              <Button
                onClick={() => handleEditClick('password')}
                variant="outlined"
                color="primary"
                startIcon={<IconLock />}
              >
                Đổi mật khẩu
              </Button>
            </Box>
          </Box>

          {/* Hiển thị Alert khi có sự thay đổi */}
          {showAlert && (
            <Alert severity="success" sx={{ mt: 3 }}>
              <AlertTitle>Success</AlertTitle>
              Cập nhật thành công — <strong>kiểm tra lại thông tin!</strong>
            </Alert>
          )}
        </Box>
      );
    }
  };
>>>>>>> d6e173af768bc6c0cf2903f10ba071a2f188be0a
};

export default AccountInformation;
