// src/components/DialogFeature.tsx

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
import DataFeature, { FeatureItem } from '../data/DataFeuture';

interface DialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  keyOption: string | null;
  setIsCheckFix: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckFix: boolean;
}

const DialogFeature = ({
  open,
  setOpen,
  value,
  keyOption,
  setIsCheckFix,
  isCheckFix,
}: DialogProps) => {
  // Default empty initial values for form fields
  const emptyInitialValues = useMemo(
    () => ({
      name: '',
      email: '',
      phone: '',
      contextFeature: '',
    }),
    [],
  );

  const [initialValues, setInitialValues] = useState(emptyInitialValues);
  // const isViewMode = keyOption !== null;

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Tên nhân viên là bắt buộc'),
    contextFeature: Yup.string().required('Nội dung đề xuất là bắt buộc'),
    email: Yup.string().email('Email không đúng').required('Email là bắt buộc'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Số điện thoại chỉ được chứa số từ 0-9')
      .required('Số điện thoại là bắt buộc'),
  });

  // Form submit handler
  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>,
  ) => {
    console.log('Submitted values:', values);
    if (isCheckFix) {
      // Logic xử lý khi sửa (nếu cần)
      setIsCheckFix(false);
    } else {
      // Logic xử lý khi thêm mới (nếu cần)
      setOpen(false);
      setIsCheckFix(false);
      resetForm();
    }
  };

  // Close the dialog and reset the form
  const handleClose = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    resetForm: () => void,
  ) => {
    setIsCheckFix(false);
    setOpen(false);
    resetForm();
  };

  // Update form initial values based on keyOption
  useEffect(() => {
    if (keyOption === null) {
      setInitialValues(emptyInitialValues);
    } else {
      const data: FeatureItem | undefined = DataFeature.find((item) => item.id === keyOption);
      console.log('Fetched Data:', data); // Debugging
      if (data) {
        setInitialValues({
          name: data.name,
          phone: data.phone,
          email: data.email,
          contextFeature: data.contextFeature,
        });
      }
    }
  }, [keyOption, emptyInitialValues]);

  return (
    <Dialog
      open={open && value === '1'}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
      sx={{ zIndex: 1300 }} // Ensure Dialog is on top
    >
      <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center' }}>
        Xem thông tin đề xuất
      </DialogTitle>

      <DialogContent
        sx={{
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#E3E3E3',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#d6d6d6',
          },
        }}
      >
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ resetForm }) => (
            <Form>
              <Grid container>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography variant="h6">Tên khách hàng</Typography>
                      <Field
                        as={TextField}
                        name="name"
                        fullWidth
                        margin="normal"
                        InputProps={{
                          readOnly: isCheckFix,
                        }}
                        helperText={
                          <ErrorMessage name="name">
                            {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                          </ErrorMessage>
                        }
                        FormHelperTextProps={{ sx: { ml: 0 } }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">Email</Typography>
                      <Field
                        as={TextField}
                        name="email"
                        fullWidth
                        margin="normal"
                        InputProps={{
                          readOnly: isCheckFix,
                        }}
                        helperText={
                          <ErrorMessage name="email">
                            {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                          </ErrorMessage>
                        }
                        FormHelperTextProps={{ sx: { ml: 0 } }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">Số điện thoại</Typography>
                      <Field
                        as={TextField}
                        name="phone"
                        fullWidth
                        margin="normal"
                        InputProps={{
                          readOnly: isCheckFix,
                        }}
                        helperText={
                          <ErrorMessage name="phone">
                            {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                          </ErrorMessage>
                        }
                        FormHelperTextProps={{ sx: { ml: 0 } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">Nội dung đề xuất</Typography>
                      <Field
                        as={TextField}
                        name="contextFeature"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        InputProps={{
                          readOnly: isCheckFix,
                          sx: {
                            padding: 0,
                          },
                        }}
                        helperText={
                          <ErrorMessage name="contextFeature">
                            {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                          </ErrorMessage>
                        }
                        FormHelperTextProps={{ sx: { ml: 0 } }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <DialogActions>
                <Button
                  onClick={(event) => handleClose(event, resetForm)}
                  variant="contained"
                  color="error"
                  sx={{ mb: 0 }}
                >
                  Đóng
                </Button>
                {/* {!isViewMode ? (
                    <Button type="submit" variant="contained" color="primary">
                      Thêm
                    </Button>
                  ) : (
                    <Button type="submit" variant="contained" color="primary">
                      {isCheckFix ? 'Sửa' : 'Lưu'}
                    </Button>
                  )} */}
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default DialogFeature;
