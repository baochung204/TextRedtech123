// import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
// import React, { useState } from 'react'

// interface DialogProps {
//     open: boolean,
//     setOpen: React.Dispatch<React.SetStateAction<boolean>>,
//     value: string
// }

// const DialogPersonel = ({ open, setOpen, value }: DialogProps) => {

//     const initialValues = {
//         avtUrl: '',
//         name: '',
//         position: '',
//         department: '',
//         email: '',
//         numberPhone: '',
//     };



//     return (
//         <Dialog
//             open={open && value === '1'}
//             onClose={() => setOpen(false)}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//         >
//             <DialogTitle id="alert-dialog-title">
//                 Thêm nhân viên
//             </DialogTitle>
//             <DialogContent>
//                 <DialogContentText id="alert-dialog-description">
//                     Let Google help apps determine location. This means sending anonymous
//                     location data to Google, even when no apps are running.
//                 </DialogContentText>
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={() => setOpen(false)}>Disagree</Button>
//                 <Button onClick={() => setOpen(false)} autoFocus>
//                 Agree
//             </Button>
//         </DialogActions>
//       </Dialog >
//   )
// }

// export default DialogPersonel



import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, Input } from '@mui/material';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface DialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    value: string;
}

const DialogPersonel = ({ open, setOpen, value }: DialogProps) => {

    const initialValues = {
        avtUrl: '',
        name: '',
        position: '',
        department: '',
        email: '',
        numberPhone: '',
    };

    const validationSchema = Yup.object({
        avtUrl: Yup.string().url('Invalid URL').required('Required'),
        name: Yup.string().required('Required'),
        position: Yup.string().required('Required'),
        department: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        numberPhone: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').required('Required'),
    });

    const handleSubmit = (values: typeof initialValues) => {
        console.log(values);
        setOpen(false);
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            // Handle file upload here
            const fileUrl = URL.createObjectURL(file); // Temporary URL for preview
            setFieldValue('avtUrl', fileUrl);
        }
    };

    return (
        <Dialog
            open={open && value === '1'}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth

        >
            <DialogTitle
                id="alert-dialog-title"
                sx={{
                    textAlign: 'center',
                }}
            >
                Thêm nhân viên
            </DialogTitle>
            <DialogContent>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                           
                            <Typography variant='h6' >
                                Tên nhân viên
                            </Typography>
                            <Field
                                as={TextField}
                                name="name"
                                fullWidth
                                margin="normal"
                                helperText={<ErrorMessage name="name" />}
                            />
                            <Typography variant='h6' >
                                Phòng ban
                            </Typography>
                            <Field
                                as={TextField}
                                name="department"
                                fullWidth
                                margin="normal"
                                helperText={<ErrorMessage name="department" />}
                            />
                            <Typography variant='h6' >
                                Chức vụ
                            </Typography>
                            <Field
                                as={TextField}
                                name="position"
                                fullWidth
                                margin="normal"
                                helperText={<ErrorMessage name="position" />}
                            />
                            <Typography variant='h6' >
                                Email
                            </Typography>
                            <Field
                                as={TextField}
                                name="email"
                                fullWidth
                                margin="normal"
                                helperText={<ErrorMessage name="email" />}
                            />
                            <Typography variant='h6' >
                                Số điện thoại
                            </Typography>
                            <Field
                                as={TextField}
                                name="numberPhone"
                                fullWidth
                                margin="normal"
                                helperText={<ErrorMessage name="numberPhone" />}
                            />

                            <DialogActions>
                                <Button onClick={() => setOpen(false)} disabled={isSubmitting}>Disagree</Button>
                                <Button type="submit" disabled={isSubmitting} autoFocus>
                                    Agree
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
