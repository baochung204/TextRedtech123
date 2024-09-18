import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { styled } from '@mui/material/styles';

interface DialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    value: string;
    keyOption: string
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

const DialogPersonel = ({ open, setOpen, value, keyOption }: DialogProps) => {

    const initialValues = {
        avtUrl: '',
        name: '',
        position: '',
        department: '',
        email: '',
        numberPhone: '',
        password: ''
    };

    const validationSchema = Yup.object({
        avtUrl: Yup.string(),
        name: Yup.string().required('Tên nhân viên là bắt buộc'),
        position: Yup.string().required('Chức vụ là bắt buộc'),
        department: Yup.string().required('Phòng ban là bắt buộc'),
        email: Yup.string().email('Email không đúng').required('Email là bắt buộc'),
        numberPhone: Yup.string().matches(/^[0-9]+$/, 'Số điện thoại từ 0-9').required('Số điện thoại là bắt buộc'),
        password: Yup.string().required('Mật khẩu là bắt buộc')
    });

    const handleSubmit = (values: typeof initialValues) => {
        console.log(values);
        setOpen(false);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: (field: string, value: string, shouldValidate?: boolean) => void) => {
        if (event.target.files !== null) {
            const file = event.target.files[0];
            const fileUrl = URL.createObjectURL(file);
            setFieldValue('avtUrl', fileUrl);
            console.log('valie', initialValues.avtUrl);
        }
    };

    // useEffect(() => {
    //     if (keyOption === null) {
           
    //    } 
    // },[keyOption])

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
                sx={{
                    textAlign: 'center',
                }}
            >
                Thêm nhân viên
            </DialogTitle>
            <DialogContent
                sx={{
                    marginBottom: 2
                }}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue, values }) => (
                        <Form>
                            <Grid container >
                                <Grid item xs={12} >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            paddingBottom: 3
                                        }}
                                    >
                                        <IconButton aria-label="upload">
                                            <Button
                                                component="label"
                                                sx={{
                                                    height: 150,
                                                    width: 150,
                                                    '&:hover': {
                                                        backgroundColor: '#C6D5FF',
                                                        boxShadow: 'none',
                                                        borderColor: '#5D87FF',
                                                        color: '#5D87FF'
                                                    },
                                                    boxShadow: 'none',
                                                    border: `${values.avtUrl === '' ? '1px dashed black' : 'none'}`,
                                                    borderRadius: 999,
                                                    color: 'black'
                                                }}
                                            >
                                                {values.avtUrl ? (
                                                    <Avatar alt="Remy Sharp" src={values.avtUrl} sx={{ width: 150, height: 150 }} />
                                                ) : (
                                                    <Box>
                                                        + <br /> Tải ảnh lên
                                                    </Box>
                                                )}
                                                <VisuallyHiddenInput
                                                    type="file"
                                                    onChange={(event) => handleFileChange(event, setFieldValue)}
                                                    multiple
                                                    name='avtUrl'
                                                />
                                            </Button>

                                        </IconButton>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sx={{ paddingLeft: 2 }}>
                                    <Grid container xs={12} spacing={2}>
                                        <Grid item xs={6}>
                                            <Typography variant='h6' >
                                                Tên nhân viên
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name="name"
                                                fullWidth
                                                margin="normal"
                                                helperText={
                                                    <ErrorMessage name="name">
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{
                                                    sx: { ml: 0 }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant='h6' >
                                                Phòng ban
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name="department"
                                                fullWidth
                                                margin="normal"
                                                helperText={
                                                    <ErrorMessage name="department">
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{
                                                    sx: { ml: 0 }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant='h6' >
                                                Chức vụ
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name="position"
                                                fullWidth
                                                margin="normal"
                                                helperText={
                                                    <ErrorMessage name="position">
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{
                                                    sx: { ml: 0 }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant='h6' >
                                                Email
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name="email"
                                                fullWidth
                                                margin="normal"
                                                helperText={
                                                    <ErrorMessage name="email">
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{
                                                    sx: { ml: 0 }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant='h6' >
                                                Số điện thoại
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name="numberPhone"
                                                fullWidth
                                                margin="normal"
                                                helperText={
                                                    <ErrorMessage name="numberPhone">
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{
                                                    sx: { ml: 0 }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant='h6' >
                                                Nhập mật khẩu
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name="password"
                                                fullWidth
                                                margin="normal"
                                                helperText={
                                                    <ErrorMessage name="password">
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{
                                                    sx: { ml: 0 }
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <DialogActions>
                                <Button
                                    onClick={() => setOpen(false)}
                                    variant='contained'
                                    color='error'>Đóng</Button>
                                <Button
                                    type="submit"
                                    variant='contained'
                                >
                                    Thêm
                                </Button>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    );
};

export default DialogPersonel;
