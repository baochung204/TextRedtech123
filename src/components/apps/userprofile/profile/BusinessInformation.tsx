import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import { IconBriefcase, IconEdit } from '@tabler/icons-react'; // Thay thế với biểu tượng bạn muốn

const BusinessInformation = () => {
  const [editing, setEditing] = useState<string | null>(null);
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
    // Thực hiện lưu dữ liệu ở đây, ví dụ: gọi API để cập nhật dữ liệu
  };

  const renderField = (field: string, label: string) => (
    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6" fontWeight="500" sx={{ flexGrow: 1 }}>
        {label}:
      </Typography>
      {editing === field ? (
        <>
          <TextField
            value={businessInfo[field as keyof typeof businessInfo]}
            onChange={handleInputChange}
            sx={{ flexGrow: 1, mr: 1 }}
            size="small"
          />
          <IconButton onClick={handleSaveClick}>
            <IconEdit />
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
      }}
    >
      <Typography variant="h4" fontWeight="600" gutterBottom>
        <IconBriefcase /> Thông tin doanh nghiệp
      </Typography>
      {renderField('taxCode', 'Mã số thuế')}
      {renderField('companyName', 'Tên công ty')}
      {renderField('companyAddress', 'Địa chỉ công ty')}
    </Box>
  );
};

export default BusinessInformation;
