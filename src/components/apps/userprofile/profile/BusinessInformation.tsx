import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField, Alert, AlertTitle } from '@mui/material';
import { IconBriefcase, IconEdit, IconCheck } from '@tabler/icons-react';

const BusinessInformation = () => {
  const [editing, setEditing] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false); // Trạng thái để hiển thị thông báo
  const [businessInfo, setBusinessInfo] = useState({
    taxCode: '1234567890',
    companyName: 'Công ty ABC',
    companyAddress: '456 Đường XYZ, TP. Hồ Chí Minh',
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
      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
        {label}:
      </Typography>
      {editing === field ? (
        <>
          <TextField
            value={businessInfo[field as keyof typeof businessInfo]}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // Xử lý sự kiện Enter
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
            {businessInfo[field as keyof typeof businessInfo]}
          </Typography>
          <IconButton onClick={() => handleEditClick(field)}>
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
        backgroundColor: '#fff',
        margin: '0 auto', // Căn giữa trang
      }}
    >
      <Typography mb={4} variant="h4" fontWeight="600" gutterBottom display={'flex'} gap={1}>
        <IconBriefcase /> <span>Thông tin doanh nghiệp</span>
      </Typography>
      {renderField('taxCode', 'Mã số thuế')}
      {renderField('companyName', 'Tên công ty')}
      {renderField('companyAddress', 'Địa chỉ công ty')}

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

export default BusinessInformation;
