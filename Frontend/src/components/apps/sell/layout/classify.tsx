import { Add as AddIcon } from '@mui/icons-material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Tooltip
} from '@mui/material';
import React, { useState } from 'react';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

interface Classification {
  label: string;
  values: string[];
  images: (File | null)[]; // Lưu các tệp ảnh
}

const ProductClassification: React.FC = () => {
  const [classifications, setClassifications] = useState<Classification[]>([]);
  const [newClassification, setNewClassification] = useState(''); // Kiểu phân loại đang nhập
  const [showAddButton, setShowAddButton] = useState(false); // Kiểm soát hiển thị ô nhập hay nút thêm
  const [uploadedImages, setUploadedImages] = useState<{ [key: number]: string }>({}); // Để lưu các ảnh đã upload

  // Xử lý khi người dùng nhấn Enter sau khi nhập kiểu phân loại
  const handleAddClassification = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newClassification.trim()) {
      setClassifications([
        ...classifications,
        { label: newClassification.trim(), values: [''], images: [null] },
      ]);
      setNewClassification(''); // Reset lại ô nhập sau khi Enter
      setShowAddButton(true); // Hiển thị nút "Thêm kiểu phân loại mới"
    }
  };

  // Thêm một giá trị mới cho phân loại
  const handleAddValue = (index: number) => {
    const newClassifications = [...classifications];
    newClassifications[index].values.push('');
    newClassifications[index].images.push(null); // Thêm phần tử null cho ảnh tương ứng
    setClassifications(newClassifications);
  };

  // Xóa một giá trị trong phân loại
  const handleRemoveValue = (classificationIndex: number, valueIndex: number) => {
    const newClassifications = [...classifications];
    newClassifications[classificationIndex].values.splice(valueIndex, 1);
    newClassifications[classificationIndex].images.splice(valueIndex, 1); // Xóa ảnh tương ứng
    setClassifications(newClassifications);
  };

  // Cập nhật giá trị khi người dùng nhập vào ô phân loại
  const handleValueChange = (
    classificationIndex: number,
    valueIndex: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newClassifications = [...classifications];
    newClassifications[classificationIndex].values[valueIndex] = event.target.value;
    setClassifications(newClassifications);
  };
  const handleRemoveClassification = (classificationIndex: number) => {
    const newClassifications = classifications.filter((_, index) => index !== classificationIndex);
    setClassifications(newClassifications);
  };
  // Xử lý sự kiện khi chọn ảnh
  const handleImageChange = (
    classificationIndex: number,
    valueIndex: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0] || null;
    const newClassifications = [...classifications];
    newClassifications[classificationIndex].images[valueIndex] = file;

    // Tạo đường dẫn tạm thời để hiển thị ảnh
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImages((prev) => ({ ...prev, [valueIndex]: imageUrl }));
    }

    setClassifications(newClassifications);
  };

  return (
    <Box>
      <Box fontWeight={600}>Phân loại</Box>

      {/* Hiển thị các kiểu phân loại và ô nhập chi tiết */}
      <Paper elevation={3}>
        <Grid container xs={12} sm={12} lg={12} pl={2} mb={1} mt={1}>
          {classifications.map((classification, classificationIndex) => (
            <Grid item xs={12} key={classificationIndex}>
              <Divider sx={{ mr: 1 }} />
              <Box mb={2}>
                {/* Hiển thị tên kiểu phân loại và nút xóa */}
                <Box
                  display={'flex'}
                  alignItems="center"
                  justifyContent="space-between"
                  mb={1}
                  mt={1}
                >
                  <strong>{classification.label}</strong>
                  <IconButton onClick={() => handleRemoveClassification(classificationIndex)}>
                    <ClearIcon sx={{ fontSize: 15, opacity: 0.8 }} />
                  </IconButton>
                </Box>

                {classification.values.map((value, valueIndex) => (
                  <Grid container spacing={0} mb={1} key={valueIndex} alignItems="center">
                    <Grid item xs={0.7} mb={1}>
                      <Box p={0}>
                        <input
                          type="file"
                          style={{ display: 'none' }}
                          onChange={(event) =>
                            handleImageChange(classificationIndex, valueIndex, event)
                          }
                          id={`upload-button-${classificationIndex}-${valueIndex}`}
                        />
                        <Tooltip title="Thêm ảnh">
                          <IconButton
                            sx={{
                              backgroundColor: uploadedImages[valueIndex] ? 'transparent' : '#000',
                              opacity: uploadedImages[valueIndex] ? 1 : 0.1,
                              backgroundImage: uploadedImages[valueIndex]
                                ? `url(${uploadedImages[valueIndex]})`
                                : 'none', // Hiển thị ảnh nền nếu đã upload
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              color: '#fff',
                              borderRadius: '8px',
                              padding: '9px',
                              '&:hover': {
                                backgroundColor: '#333',
                                opacity: 0.8,
                              },
                              transition: 'all 0.3s ease',
                            }}
                            onClick={() =>
                              document
                                .getElementById(
                                  `upload-button-${classificationIndex}-${valueIndex}`,
                                )
                                ?.click()
                            }
                          >
                            <AddPhotoAlternateIcon fontSize="medium" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Grid>
                    <Grid item xs={5} mb={1}>
                      <CustomTextField
                        fullWidth
                        value={value}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleValueChange(classificationIndex, valueIndex, event)
                        }
                        placeholder={`Nhập ${classification.label.toLowerCase()} . . .`}
                      />
                    </Grid>
                    <Grid item xs={5} mb={1} ml={1}>
                      <CustomOutlinedInput
                        fullWidth
                        endAdornment={<InputAdornment position="end">đ</InputAdornment>}
                        placeholder="Nhập giá . . ."
                      />
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      mb={1}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <IconButton sx={{ p: 1 }} onClick={() => handleAddValue(classificationIndex)}>
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        sx={{ p: 0 }}
                        onClick={() => handleRemoveValue(classificationIndex, valueIndex)}
                        disabled={classification.values.length === 1}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Kiểm tra để hiển thị ô nhập hoặc nút thêm */}
      {!showAddButton ? (

        <TextField
          sx={{ width: '100%' }}
          value={newClassification}
          onChange={(e) => setNewClassification(e.target.value)}
          onKeyDown={handleAddClassification}
          placeholder="Nhập kiểu phân loại, sau đó nhấn Enter"
        />


      )
        :
        (
          // <Button sx={{ p: 0.9 }} startIcon={<AddIcon />} onClick={() => setShowAddButton(false)}>
          //   Thêm phân loại
          // </Button>
          <></>
        )
      }
    </Box>
  );
};

export default ProductClassification;
