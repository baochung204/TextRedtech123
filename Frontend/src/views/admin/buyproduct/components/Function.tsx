// import { Grid, TextField } from '@mui/material';
// import { ErrorMessage, Field } from 'formik';
// import React from 'react';
// import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

// interface FunctionProps {
//   values: {
//     nhomFunction: string;
//     codeFunction: string;
//     levelx: string;
//   };
// }

// const Function: React.FC<FunctionProps> = () => {
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={6}>
//         <Field
//           name="nhomFunction"
//           as={TextField}
//           label="Nhóm Function"
//           fullWidth
//           sx={{ marginBottom: 1 }}
//         />
//         <ErrorMessage name="nhomFunction">
//           {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
//         </ErrorMessage>
//       </Grid>

//       <Grid item xs={6}>
//         <Field name="levelx" as={TextField} label="Level" fullWidth />
//         <ErrorMessage name="levelx">
//           {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
//         </ErrorMessage>
//       </Grid>
//       <Grid item xs={6}>
//         <Field name="codeFunction">
//           {({ field }: any) => (
//             <CustomTextField
//               {...field}
//               label="Code Function"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={4}
//               sx={{ marginBottom: 1 }}
//             />
//           )}
//         </Field>
//         <ErrorMessage name="codeFunction">
//           {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
//         </ErrorMessage>
//       </Grid>
//     </Grid>
//   );
// };

// export default Function;
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
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

// interface FunctionProps {
//   values: {
//     nhomFunction: string;
//     codeFunction: string;
//     levelx: string;
//   };
// }

const Function = () => {
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
      <CustomFormLabel htmlFor="name">Function</CustomFormLabel>
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
        <Grid item xs>
          <FormControl fullWidth variant="outlined">
            <Field
              name="nhomFunction"
              as={Select}
              labelId="nhomFunction-label"
              placeholder="Nhóm function"
              displayEmpty
            >
              <MenuItem value="" disabled>
                Nhóm function
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

        <Grid item xs>
          <Field
            name="levelx"
            as={TextField}
            placeholder="Level function"
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
          <ErrorMessage name="levelx">
            {(msg) => <div style={{ color: 'red', marginTop: 4 }}>{msg}</div>}
          </ErrorMessage>
        </Grid>
      </Grid>
      <Grid>
        <CustomTextField
          placeholder="Tóm tắt function"
          id="name"
          variant="outlined"
          fullWidth
          name="name"
          sx={{ marginLeft: 2, marginTop: 3, width: '830px' }}
        />
      </Grid>
      <Grid item xs={12}>
        <Field name="codeFunction">
          {({ field }: any) => (
            <CustomTextField
              {...field}
              label="Code Function"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: 1 }}
            />
          )}
        </Field>
        <ErrorMessage name="codeFunction">
          {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>
      </Grid>
    </Grid>
  );
};

export default Function;
