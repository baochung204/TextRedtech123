import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import * as Yup from 'yup';
// interface File {
//   values: {
//     file: string;
//     dungluong: string;
//     slot: string;
//   };
// }
// Validation schema using Yup
const validationSchema = Yup.object({
  option: Yup.string().required('Bạn phải chọn một tùy chọn'),
});

const FileUploadForm = () => {
  const [selectedOption, setSelectedOption] = useState<string>(''); // State to hold selected option
  const [fileNames, setFileNames] = useState<string[]>([]); // Lưu trữ danh sách file đã chọn

  const initialValues = {
    option: '',
  };

  const handleOptionChange = (event: React.ChangeEvent<{ value: unknown }>, setFieldValue: any) => {
    setSelectedOption(event.target.value as string);
    setFieldValue('option', event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const selectedFileNames = Array.from(files).map((file) => file.name);
      setFileNames(selectedFileNames);
    }
  };

  const handleSubmit = (values: any) => {
    // Handle submit logic here
    console.log('Selected Option:', values.option);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <CustomFormLabel sx={{ fontSize: 18, marginLeft: 36, width: 850 }} htmlFor="name">
            Files
          </CustomFormLabel>
          <Box mb={2}>
            <Field name="option">
              {() => (
                <div>
                  <Select
                    id="option-select"
                    value={selectedOption}
                    onChange={(event: any) => handleOptionChange(event, setFieldValue)}
                    displayEmpty
                    fullWidth
                    sx={{
                      marginLeft: 36,
                      width: 850,
                    }}
                  >
                    <MenuItem value="" disabled>
                      Chọn tùy chọn
                    </MenuItem>
                    <MenuItem value="file">File</MenuItem>
                    <MenuItem value="dungluong">Dung lượng</MenuItem>
                    <MenuItem value="slot">Slot</MenuItem>
                  </Select>
                  <ErrorMessage name="option" component="div" className="error-message" />
                </div>
              )}
            </Field>
          </Box>

          {selectedOption === 'file' && (
            <Box sx={{ marginLeft: 36, width: 850 }} mb={2}>
              <Typography>Chọn file:</Typography>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                style={{
                  marginLeft: 5,
                  width: 850,
                  padding: '10px',
                  border: '2px solid red',
                  borderRadius: '8px',
                }}
              />
              {fileNames.length > 0 && (
                <Box mt={1} sx={{ marginLeft: 5 }}>
                  <Typography variant="body1" color="textSecondary">
                    File đã chọn:
                  </Typography>
                  <ul>
                    {fileNames.map((fileName, index) => (
                      <li key={index}>{fileName}</li>
                    ))}
                  </ul>
                </Box>
              )}
            </Box>
          )}

          {selectedOption === 'dungluong' && (
            <Box sx={{ marginLeft: 36, width: 850 }} mb={2}>
              <Typography>Nhập dung lượng:</Typography>
              <TextField
                placeholder="Nhập dung lượng (MB)"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'red',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ff6666',
                    },
                  },
                }}
              />
            </Box>
          )}

          {selectedOption === 'slot' && (
            <Box sx={{ marginLeft: 36, width: 850 }} mb={2}>
              <Typography>Nhập số lượng slot:</Typography>
              <TextField
                placeholder="Nhập số lượng slot"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'red',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ff6666',
                    },
                  },
                }}
              />
            </Box>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FileUploadForm;
