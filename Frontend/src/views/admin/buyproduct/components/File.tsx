import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Interface for props
interface FunctionProps {
  values: {
    files: string;
  };
}

// Validation schema using Yup
const validationSchema = Yup.object({
  file: Yup.mixed().required('Bạn phải tải lên ít nhất một file'),
});

const FileUploadForm: React.FC<FunctionProps> = ({ values }) => {
  const [fileNames, setFileNames] = useState<string[]>([]);

  const initialValues = {
    file: '',
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
    const files = event.target.files; // Get the list of files
    if (files) {
      const selectedFileNames = Array.from(files).map((file) => file.name);
      setFileNames(selectedFileNames); // Set the file names for display
      setFieldValue('file', files); // Update file field in formik
    }
  };

  const handleSubmit = (values: any) => {
    // Handle file submit logic here
    console.log('Files uploaded:', values.file);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <Box mb={2}>
            <Field name="file">
              {({ field }: any) => (
                <div>
                  <input
                    accept="*"
                    id="file-upload"
                    type="file"
                    multiple // Allow multiple file selection
                    onChange={(event) => handleFileChange(event, setFieldValue)}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="file-upload">
                    <Button variant="contained" component="span">
                      Chọn file
                    </Button>
                  </label>
                  {fileNames.length > 0 && (
                    <Box mt={1}>
                      <Typography variant="body1" color="textSecondary">
                        File đã chọn:
                      </Typography>
                      <ul>
                        {fileNames.map((fileName, index) => (
                          <li key={index}>
                            <Typography variant="body2">{fileName}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>
                  )}
                </div>
              )}
            </Field>
            <ErrorMessage name="file" component="div" className="error-message" />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default FileUploadForm;
