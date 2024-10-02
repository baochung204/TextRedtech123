import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { styled } from '@mui/material/styles';
import DataFeature from '../data/DataFeuture';

interface DialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    value: string;
    keyOption: string | null;
    setIsCheckFix: React.Dispatch<React.SetStateAction<boolean>>
    isCheckFix: boolean
}

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

const DialogFeature = ({ open, setOpen, value, keyOption, setIsCheckFix, isCheckFix }: DialogProps) => {
    const emptyInitialValues = useMemo(() => ({
        // avtUrl: '',
        name: '',
        email: '',
        phone: '',
        contextFeature: ''
    }), []);

    const [initialValues, setInitialValues] = useState(emptyInitialValues);
    const isViewMode = keyOption !== null;
    const validationSchema = Yup.object({
        name: Yup.string().required('Tên nhân viên là bắt buộc'),
        contextFeature: Yup.string().required('Nội dung đề xuất là bắt buộc'),
        email: Yup.string().email('Email không đúng').required('Email là bắt buộc'),
        numberPhone: Yup.string().matches(/^[0-9]+$/, 'Số điện thoại từ 0-9').required('Số điện thoại là bắt buộc'),
       
    });

    const handleSubmit = (values: typeof initialValues, { resetForm }: FormikHelpers<typeof initialValues>) => {

        if (isCheckFix) {
            setIsCheckFix(false)
        } else {
            setOpen(false);
            console.log(values);
            setIsCheckFix(false)
            resetForm();

        }
    };
    const handleClose = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>, resetForm: () => void) => {
        setIsCheckFix(false);
        setOpen(false);
        resetForm();
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: (field: string, value: string, shouldValidate?: boolean) => void) => {
        if (event.target.files !== null) {
            const file = event.target.files[0];
            const fileUrl = URL.createObjectURL(file);
            setFieldValue('avtUrl', fileUrl);
        }
    };

    useEffect(() => {
        if (keyOption === null) {
            setInitialValues(emptyInitialValues);

        } else {
            const data = DataFeature.find((item) => item.id === keyOption);
            if (data) {
                setInitialValues({
                    // avtUrl: data.avt,
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    contextFeature: data.contextFeature,
                });
            }
        }

    }, [keyOption, emptyInitialValues]);
    console.log(emptyInitialValues);

    return (
        <Dialog
            open={open && value === '1'}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth='md'
        >
            <DialogTitle
                id="alert-dialog-title"
                sx={{ textAlign: 'center' }}
            >
                {isViewMode ? <>{isCheckFix ? 'Xem thông tin nhân viên' : 'Sửa thông tin nhân viên'}</> : 'Thêm nhân viên'}
            </DialogTitle>
            <DialogContent sx={{ marginBottom: 2 }}>
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    context={{ isViewMode }}
                >
                    {({ setFieldValue, values, resetForm }) => (
                        <Form>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            paddingBottom: 3
                                        }}
                                    >
                                        
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sx={{ paddingLeft: 2 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Typography variant='h6'>Tên khách hàng</Typography>
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
                                        <Grid item xs={6}>
                                            <Typography variant='h6'>Email</Typography>
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
                                        <Grid item xs={6}>
                                            <Typography variant='h6'>Số điện thoại</Typography>
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
                                        <Grid item xs={6}>
                                            <Typography variant='h6'>Nội dung đề xuất</Typography>
                                            <Field
                                                as={TextField}
                                                name="econtextFeaturemail"
                                                fullWidth
                                                margin="normal"
                                                InputProps={{
                                                    readOnly: isCheckFix,
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
                                    variant='contained'
                                    color='error'
                                >
                                    Đóng
                                </Button>
                                {!isViewMode ?
                                    <Button
                                        type="submit"
                                        variant='contained'
                                    >
                                        Thêm
                                    </Button>
                                    :
                                    <Button
                                        type="submit"
                                        variant='contained'
                                    >
                                        {isCheckFix ? 'Sửa' : 'Lưu'}
                                    </Button>
                                }
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    );
};

export default DialogFeature;
