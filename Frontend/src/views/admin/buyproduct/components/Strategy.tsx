import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'; // Icon cho nút upload ảnh
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from '@mui/material';
import { ErrorMessage, Field } from 'formik';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

interface StrategyProps {
  values: {
    nhomStrategy: string;
    levelStrategy: string;
    noidungStrategy: string;
  };
}

const Strategy = ({ values }: StrategyProps) => {
  const [uploadedImages, setUploadedImages] = useState<{ [key: number]: string }>({}); // Để lưu URL ảnh đã upload
  const [classifications, setClassifications] = useState<{ images: (File | null)[] }>({
    images: [],
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (!file) return;

    // Tạo URL tạm thời cho ảnh đã tải lên
    const imageUrl = URL.createObjectURL(file);
    const newIndex = classifications.images.length; // Tính index mới cho ảnh này

    // Cập nhật state classifications và uploadedImages
    setClassifications((prev) => ({
      images: [...prev.images, file],
    }));
    setUploadedImages((prev) => ({
      ...prev,
      [newIndex]: imageUrl,
    }));
  };

  return (
    <Grid container spacing={2} sx={{ paddingLeft: 38 }}>
      <CustomFormLabel htmlFor="name">Chiến lược</CustomFormLabel>
      <Grid container alignItems="center" spacing={2}>
        {/* Khu vực hiển thị nút upload và các ảnh đã upload */}
        <Grid item>
          <Box p={0}>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
              id={`upload-button-0`} // Mặc định chỉ số 0 (có thể thay đổi nếu cần)
            />
            <Tooltip title="Thêm ảnh">
              <IconButton
                sx={{
                  backgroundColor: uploadedImages[0] ? 'transparent' : '#000',
                  opacity: uploadedImages[0] ? 1 : 0.1,
                  backgroundImage: uploadedImages[0] ? `url(${uploadedImages[0]})` : 'none', // Hiển thị ảnh nền nếu đã upload
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: '#fff',
                  borderRadius: '8px',
                  padding: '9px',
                  width: 40,
                  height: 40,
                  '&:hover': {
                    backgroundColor: '#333',
                    opacity: 0.8,
                  },
                  transition: 'all 0.3s ease',
                }}
                onClick={() => document.getElementById(`upload-button-0`)?.click()}
              >
                {!uploadedImages[0] && <AddPhotoAlternateIcon fontSize="medium" />}
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>

        {/* Input cho Nhóm chiến lược (đã chuyển thành dropdown) */}
        <Grid item xs>
          <FormControl fullWidth variant="outlined">
            {/* <InputLabel id=""></InputLabel> */}
            <Field
              name="nhomStrategy"
              as={Select}
              labelId="nhomStrategy-label"
              placeholder="Nhóm chiến lược"
              displayEmpty
            >
              <MenuItem value="" disabled>
                Nhóm chiến lược
              </MenuItem>
              <MenuItem value="nhom1">Nhóm 1</MenuItem>
              <MenuItem value="nhom2">Nhóm 2</MenuItem>
              <MenuItem value="nhom3">Nhóm 3</MenuItem>
            </Field>
          </FormControl>
          <ErrorMessage name="nhomStrategy">
            {(msg) => <div style={{ color: 'red', marginTop: 4 }}>{msg}</div>}
          </ErrorMessage>
        </Grid>

        {/* Input cho Giá trị chiến lược */}
        <Grid item xs>
          <Field
            name="levelStrategy"
            as={TextField}
            placeholder="Level chiến lược"
            variant="outlined"
            InputProps={{
              sx: {
                height: 40,
              },
            }}
            sx={{
              width: '100%',
            }}
          />
          <ErrorMessage name="levelStrategy">
            {(msg) => <div style={{ color: 'red', marginTop: 4 }}>{msg}</div>}
          </ErrorMessage>
        </Grid>
      </Grid>
      <Grid>
        <CustomTextField
          placeholder="Tóm tắt chiến lược"
          id="name"
          variant="outlined"
          fullWidth
          name="name"
          sx={{ marginLeft: 2, marginTop: 3, width: '830px' }}
        />
      </Grid>
      <Grid item xs={12}>
        {/* Nội dung chiến lược */}
        <ReactQuill theme="snow" placeholder="Nhập nội dung chiến lược" />
        <ErrorMessage name="noidungStrategy">
          {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>
      </Grid>
    </Grid>
  );
};

export default Strategy;
