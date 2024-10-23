import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  IconButton,
  Typography,
  TextField,
  styled,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteIcon from '@mui/icons-material/Delete';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface PropsDialog {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const validationSchema = Yup.object().shape({
  file: Yup.mixed().when('showLinkInput', {
    is: false,
    then: Yup.mixed().required('File không được bỏ trống'),
  }),
  linkTCT: Yup.string().when('showLinkInput', {
    is: true,
    then: Yup.string().required('Link TCT không được bỏ trống'),
  }),
});

const DialogUpload = ({ open, setOpen }: PropsDialog) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showLinkInput, setShowLinkInput] = useState(false);

  const formik = useFormik({
    initialValues: {
      file: null,
      linkTCT: '',
      showLinkInput: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (values.showLinkInput) {
        console.log('Sending link:', values.linkTCT);
      } else {
        console.log('Sending file:', values.file);
      }
      setOpen(false);
      resetForm();
      setFileName(null);
      setShowLinkInput(false);
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      formik.setFieldValue('linkTCT', '');
      setShowLinkInput(false);
      formik.setFieldValue('file', file);
      setFileName(file.name);
    }
  };

  const handleRemoveFile = () => {
    formik.setFieldValue('file', null);
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const toggleLinkInput = () => {
    if (showLinkInput) {
      formik.setFieldValue('file', null);
      setFileName(null);
    } else {
      formik.setFieldValue('linkTCT', '');
    }
    setShowLinkInput(!showLinkInput);
    formik.setFieldValue('showLinkInput', !showLinkInput);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
      <DialogContent>
        <DialogContentText>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  display={'flex'}
                  alignItems="center"
                  justifyContent={'center'}
                  marginBottom={2}
                >
                  <Typography variant="h3">Tải lên</Typography>
                </Box>
              </Grid>
              {!showLinkInput && (
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        fullWidth
                      >
                        Tải file lên
                        <VisuallyHiddenInput
                          ref={fileInputRef}
                          type="file"
                          onChange={handleFileChange}
                          accept=".txt, .docx, .pdf, .pptx, .xlsx, .csv"
                        />
                      </Button>
                      {formik.touched.file && formik.errors.file && (
                        <Typography color="error">{formik.errors.file}</Typography>
                      )}
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        color="error"
                        fullWidth
                        onClick={toggleLinkInput}
                        disabled={!!fileName}
                        sx={{
                          backgroundColor: fileName ? 'gray' : 'error',
                        }}
                      >
                        Link thuế TCT
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      {fileName && (
                        <Grid
                          item
                          xs={12}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <AttachFileIcon />
                          <Typography>{fileName}</Typography>
                          <IconButton onClick={handleRemoveFile} sx={{ ml: 1 }}>
                            <DeleteIcon color="error" />
                          </IconButton>
                        </Grid>
                      )}
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      {fileName && (
                        <Button
                          type="submit"
                          color="secondary"
                          variant="contained"
                          disabled={!(formik.isValid && formik.dirty)}
                        >
                          Xác nhận
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              )}
              {showLinkInput && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nhập link thuế TCT"
                      variant="outlined"
                      name="linkTCT"
                      value={formik.values.linkTCT}
                      onChange={formik.handleChange}
                      error={formik.touched.linkTCT && Boolean(formik.errors.linkTCT)}
                      helperText={formik.touched.linkTCT && formik.errors.linkTCT}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
                  >
                    <Button variant="outlined" onClick={toggleLinkInput}>
                      Quay lại
                    </Button>
                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      disabled={!(formik.isValid && formik.dirty)}
                    >
                      Xác nhận
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </form>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default DialogUpload;
