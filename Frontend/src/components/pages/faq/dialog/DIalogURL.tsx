
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Box, TextField, Snackbar, Alert, IconButton, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';
import { Formik, FieldArray, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PropsForm } from 'src/api/user/resources/PostResourceUser';
import { dispatch } from 'src/store/Store';
import { uploadUrls } from 'src/store/user/user-resources/files/UploadUrl';


interface PropsDialog {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    value: string;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}



const DialogURL: React.FC<PropsDialog> = ({ value, open, setOpen, setPage }) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);


    const handleClose = () => {
        setOpen(false);
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const handleSubmit = (values: any[]) => {
        dispatch(uploadUrls(values))
        setOpenSnackbar(true);
        setPage(1)
        handleClose();
        setTimeout(() => {
            setOpenSnackbar(false);
        }, 3000);
    };

    // console.log(formData);


    const validationSchema = Yup.object().shape({
        formData: Yup.array().of(
            Yup.object().shape({
                url: Yup.string().required("URL không được để trống"),
                title: Yup.string().required("Tiêu đề không được để trống"),
                description: Yup.string().required("Mô tả không được để trống"),
            })
        ),
    });

    return (
        <>
            <Dialog
                fullWidth={true}
                maxWidth="md"
                open={value === '6' && open}
                onClose={handleClose}
            >
                <DialogTitle
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Box sx={{ paddingBottom: 2 }}>
                        <Typography fontWeight={600} variant='h3'>
                            Thêm URL
                        </Typography>
                    </Box>
                </DialogTitle>
                <Scrollbar_y sx={{ maxHeight: 500 }}>
                    <DialogContent>
                        <Formik
                            initialValues={{
                                formData: [{ url: '', title: '', description: '' }] as PropsForm[],
                            }}
                            onSubmit={(values) => handleSubmit(values.formData)}
                            validationSchema={validationSchema}
                        >
                            {({ values, errors, touched }) => (
                                <Form>
                                    <FieldArray name="formData">

                                        {({ push }) => (
                                            <>
                                                {values.formData && values.formData.length > 0 ? (
                                                    values.formData.map((_item, index) => (
                                                        <Grid container spacing={2} key={index}>
                                                            <Grid item xs={4}>
                                                                <Typography fontWeight={600}>URL</Typography>
                                                                <Field
                                                                    name={`formData[${index}].url`}
                                                                    as={TextField}
                                                                    fullWidth
                                                                    margin="normal"
                                                                    error={
                                                                        touched.formData && touched.formData[index]?.url &&
                                                                        errors.formData && (errors.formData[index] as any)?.url
                                                                    }
                                                                    helperText={
                                                                        touched.formData && touched.formData[index]?.url &&
                                                                        <ErrorMessage name={`formData[${index}].url`} />
                                                                    }
                                                                />
                                                            </Grid>
                                                            <Grid item xs={4}>
                                                                <Typography fontWeight={600}>Tiêu đề</Typography>
                                                                <Field
                                                                    name={`formData[${index}].title`}
                                                                    as={TextField}
                                                                    fullWidth
                                                                    margin="normal"
                                                                    error={
                                                                        touched.formData && touched.formData[index]?.title &&
                                                                        errors.formData && (errors.formData[index] as any)?.title
                                                                    }
                                                                    helperText={
                                                                        touched.formData && touched.formData[index]?.title &&
                                                                        <ErrorMessage name={`formData[${index}].title`} />
                                                                    }
                                                                />
                                                            </Grid>
                                                            <Grid item xs={4}>
                                                                <Typography fontWeight={600}>Mô tả</Typography>
                                                                <Field
                                                                    name={`formData[${index}].description`}
                                                                    as={TextField}
                                                                    fullWidth
                                                                    margin="normal"
                                                                    error={
                                                                        touched.formData && touched.formData[index]?.description &&
                                                                        errors.formData && (errors.formData[index] as any)?.description
                                                                    }
                                                                    helperText={
                                                                        touched.formData && touched.formData[index]?.description &&
                                                                        <ErrorMessage name={`formData[${index}].description`} />
                                                                    }
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    ))
                                                ) : (
                                                    <Typography>No items available. Please add a new URL entry.</Typography>
                                                )}
                                                <IconButton
                                                    sx={{
                                                        backgroundColor: 'error.light',
                                                        color: 'error.main',
                                                        "&:hover": {
                                                            backgroundColor: 'error.main',
                                                            color: 'white'
                                                        }
                                                    }}
                                                    onClick={() => push({ url: '', title: '', description: '' })}
                                                >
                                                    <AddIcon sx={{ fontSize: '15px' }} />
                                                </IconButton>
                                            </>
                                        )}

                                    </FieldArray>
                                    <DialogActions>
                                        <Button color="primary" variant="contained" type="submit">
                                            Thêm
                                        </Button>
                                        <Button onClick={handleClose}>Đóng</Button>
                                    </DialogActions>
                                </Form>
                            )}

                        </Formik>
                    </DialogContent>
                </Scrollbar_y>

                <Snackbar
                    open={openSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    onClose={handleSnackbarClose}
                    autoHideDuration={3000}
                >
                    <Alert variant="filled" severity="success" sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        Thành công!
                    </Alert>
                </Snackbar>
            </Dialog>
        </>
    );
};

export default DialogURL;
