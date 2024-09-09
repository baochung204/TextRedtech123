import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField, Alert, AlertTitle } from '@mui/material';
import { IconBriefcase, IconEdit, IconCheck } from '@tabler/icons-react';

const BusinessInformation = () => {
  const [editing, setEditing] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false); // Trạng thái để hiển thị thông báo
  const [businessInfo, setBusinessInfo] = useState({
    companyName: 'Công ty ABC',
    taxCode: '1234567890',
    representative: 'Nguyễn Văn A',
    position: 'Giám đốc',
    address: '456 Đường XYZ, TP. Hồ Chí Minh',
    phone: '0901234567',
    email: 'contact@company.com',
  });

  const handleEditClick = (field: string) => {
    setEditing(field);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessInfo({
      ...businessInfo,
      [editing as string]: e.target.value,
    });
  };

  const handleSaveClick = () => {
    setEditing(null);
    setShowAlert(true); // Hiển thị thông báo thành công
    setTimeout(() => setShowAlert(false), 3000); // Ẩn thông báo sau 3 giây
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveClick();
    }
  };

  const renderField = (field: string, label: string) => (
    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6" fontWeight="500" sx={{ width: '150px', }}>
        {label}:
      </Typography>
      {editing === field ? (
        <>
          <TextField
            value={businessInfo[field as keyof typeof businessInfo]}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // Xử lý sự kiện Enter
            // sx={{ flexGrow: 1, mr: 1, backgroundColor: 'white', color: 'black' }}
            size="small"
          />
          <IconButton onClick={handleSaveClick} sx={{ }}>
            <IconCheck />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="body1" sx={{ flexGrow: 1, }}>
            {businessInfo[field as keyof typeof businessInfo]}
          </Typography>
          <IconButton onClick={() => handleEditClick(field)} sx={{  }}>
            <IconEdit />
          </IconButton>
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
        // backgroundColor: '#2A3447',
        margin: '0 auto',
        // color: 'white',
      }}
    >
      <Typography mb={4} variant="h4" fontWeight="600" gutterBottom display={'flex'} gap={1} sx={{ color: 'white' }}>
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
      {showAlert && (
        <Alert severity="success" sx={{ mt: 3, backgroundColor: '#4caf50', color: 'white' }}>
          <AlertTitle>Success</AlertTitle>
          Cập nhật thành công — <strong>kiểm tra lại thông tin!</strong>
        </Alert>
      )}
    </Box>
  );
};

export default BusinessInformation;
