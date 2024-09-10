import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField, Alert, AlertTitle, Button } from '@mui/material';
import { IconUserCircle, IconEdit, IconCheck, IconLock } from '@tabler/icons-react';
<<<<<<< HEAD
import { setSelected } from 'src/store/RouterSlice';
import { dispatch } from 'src/store/Store';
=======
<<<<<<< HEAD
// import { useNavigate } from 'react-router-dom';
import { dispatch } from 'src/store/Store';
import { setSelected } from 'src/store/RouterSlice';
=======
import { useNavigate } from 'react-router-dom';
import { setSelected } from 'src/store/RouterSlice';
import { dispatch, useDispatch } from 'src/store/Store';
>>>>>>> main
>>>>>>> main


const AccountInformation = () => {
  const [editing, setEditing] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [accountInfo, setAccountInfo] = useState({
    email: 'nqton301004@gmail.com',
    phone: '0901234567',
    password: '**********',
  });

<<<<<<< HEAD
=======
<<<<<<< HEAD
  // const theme = useTheme();
  // const navigate = useNavigate();

  const handleEditClick = (field: string) => {
    if (field === 'password') {
<<<<<<< HEAD
      navigate('/user-profile/changepassword');
=======
      // navigate('/pages/account-settings');
      dispatch(setSelected('changepassword'))
>>>>>>> e0eadcb (quan)
=======
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Khởi tạo dispatch
>>>>>>> main

  const handleButtonClick = (id: number) => {
    if (id === 2) {
      dispatch(setSelected('changepassword'));
    }
  };

  const handleEditClick = (field: string) => {
    if (field === 'password') {
<<<<<<< HEAD
      handleButtonClick(2);
=======
      handleButtonClick(2); // Gọi handleButtonClick khi người dùng click đổi mật khẩu
>>>>>>> main
>>>>>>> main
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
            {field === 'password' ? '**********' : accountInfo[field as keyof typeof accountInfo]}
          </Typography>
          {field !== 'password' && (
            <IconButton onClick={() => handleEditClick(field)}>
              <IconEdit />
            </IconButton>
          )}
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
            {accountInfo.password}
          </Typography>
          <Button onClick={() => handleEditClick('password')} variant="outlined" color="primary" startIcon={<IconLock />}>
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
};

export default AccountInformation;
