import React, { useState } from 'react';
import { Grid, IconButton, TextField, Button, Box, Tooltip, InputAdornment, Paper } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ClearIcon from '@mui/icons-material/Clear';
interface Classification {
  label: string;
  values: string[];
}

const ProductClassification: React.FC = () => {
  const [classifications, setClassifications] = useState<Classification[]>([]);
  const [newClassification, setNewClassification] = useState(''); // Kiểu phân loại đang nhập
  const [showAddButton, setShowAddButton] = useState(false); // Kiểm soát hiển thị ô nhập hay nút thêm

  // Xử lý khi người dùng nhấn Enter sau khi nhập kiểu phân loại
  const handleAddClassification = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newClassification.trim()) {
      setClassifications([
        ...classifications,
        { label: newClassification.trim(), values: [''] },
      ]);
      setNewClassification(''); // Reset lại ô nhập sau khi Enter
      setShowAddButton(true); // Hiển thị nút "Thêm kiểu phân loại mới"
    }
  };

  // Thêm một giá trị mới cho phân loại
  const handleAddValue = (index: number) => {
    const newClassifications = [...classifications];
    newClassifications[index].values.push('');
    setClassifications(newClassifications);
  };

  // Xóa một giá trị trong phân loại
  const handleRemoveValue = (classificationIndex: number, valueIndex: number) => {
    const newClassifications = [...classifications];
    newClassifications[classificationIndex].values.splice(valueIndex, 1);
    setClassifications(newClassifications);
  };

  // Xóa toàn bộ kiểu phân loại
  const handleRemoveClassification = (classificationIndex: number) => {
    const newClassifications = classifications.filter((_, index) => index !== classificationIndex);
    setClassifications(newClassifications);
  };

  // Cập nhật giá trị khi người dùng nhập vào ô phân loại
  const handleValueChange = (
    classificationIndex: number,
    valueIndex: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newClassifications = [...classifications];
    newClassifications[classificationIndex].values[valueIndex] = event.target.value;
    setClassifications(newClassifications);
  };

  return (
    <Box>
      <Box fontWeight={600} mt={3.1} >Phân loại</Box>

      {/* Hiển thị các kiểu phân loại và ô nhập chi tiết */}
      <Paper elevation={3}>
        <Grid container pl={2} mb={1}> 
          
          {classifications.map((classification, classificationIndex) => (
            <Grid item xs={12} key={classificationIndex}>
              <Box mb={2}>
                {/* Hiển thị tên kiểu phân loại và nút xóa */}
                <Box display={'flex'} alignItems="center" justifyContent="space-between">
                  <strong>{classification.label}</strong>
                  <IconButton onClick={() => handleRemoveClassification(classificationIndex)}>
                    <ClearIcon fontSize='small'/>
                  </IconButton>
                </Box>
                {classification.values.map((value, valueIndex) => (
                  <Grid container spacing={0} mb={1} key={valueIndex} alignItems="center">
                    <Grid item xs={1} mb={1} mr={1.5} >
                      <Box p={0}>
                        <Tooltip title="Thêm ảnh">
                          <IconButton
                            sx={{
                              backgroundColor: '#000', // Màu nền
                              opacity: 0.1, // Độ trong suốt ban đầu
                              color: '#fff', // Màu biểu tượng
                              borderRadius: '8px', // Bo góc
                              padding: '9px', // Kích thước padding để nút lớn hơn
                              '&:hover': {
                                backgroundColor: '#333', // Màu nền khi hover
                                opacity: 0.3, // Độ trong suốt khi hover
                              },
                              transition: 'all 0.3s ease', // Tạo hiệu ứng chuyển mượt mà
                            }}
                          >
                            <AddPhotoAlternateIcon fontSize="medium" /> {/* Tăng kích thước biểu tượng */}
                          </IconButton>
                        </Tooltip>
                      </Box>



                    </Grid>
                    <Grid item xs={4} mb={1}>
                      <CustomTextField
                        fullWidth
                        value={value}
                        onChange={(event) => handleValueChange(classificationIndex, valueIndex, event)}
                        placeholder={`Nhập ${classification.label.toLowerCase()} . . .`}
                      />
                    </Grid>
                    <Grid item xs={4} mb={1} ml={1}>
                      <CustomOutlinedInput
                        endAdornment={<InputAdornment position="end">đ</InputAdornment>}
                        placeholder='Nhập giá . . .'
                      />
                    </Grid>
                    <Grid item xs={2} mb={1} display="flex" alignItems="center" justifyContent="center">
                      <IconButton sx={{ p: 1 }}
                        onClick={() => handleAddValue(classificationIndex)}
                      >
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        sx={{ p: 0 }}
                        onClick={() => handleRemoveValue(classificationIndex, valueIndex)}
                        disabled={classification.values.length === 1} // Không cho phép xóa nếu chỉ còn 1 ô
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
        <CustomTextField
          // label="Nhập kiểu phân loại"
          fullWidth
          value={newClassification}
          onChange={(e) => setNewClassification(e.target.value)}
          onKeyDown={handleAddClassification} // Nhấn Enter để thêm kiểu phân loại
          placeholder="Nhập kiểu phân loại, sau đó nhấn Enter"
        />
      ) : (
        <Button sx={{ p: 0.9  }}
          startIcon={<AddIcon />}
          onClick={() => setShowAddButton(false)} // Hiển thị lại ô nhập khi nhấn nút
        >
          Thêm phân loại
        </Button>
      )}



    </Box>
  );
};

export default ProductClassification;
