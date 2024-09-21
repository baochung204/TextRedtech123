import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Snackbar, TextField, Typography } from "@mui/material"
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useEffect, useMemo, useState } from "react";
import * as Yup from 'yup';
import OrderData from "../data/OrderData";

interface PropsDialog {
    checkID: string | null
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const DialogView = ({ open, setOpen, checkID }: PropsDialog) => {


    const InitialValues = useMemo(() => ({
        id: '',
        name: '',
        email: '',
        phone: '',
        typeacc: '',
        assistant: '',
        tongnap: '',
        sodu: '',
    }), [])


    const [initialValues, setInitialValues] = useState(InitialValues)
    const validationSchema = Yup.object({
        // name: Yup.string().required('Tên khách hàng là bắt buộc'),
        // email: Yup.string().email('Email không đúng').required('Email là bắt buộc'),
        // phone: Yup.string().matches(/^[0-9]+$/, 'Số điện thoại từ 0-9').required('Số điện thoại là bắt buộc'),

    });

    const [isCheck, setIsCheck] = useState<boolean>(false);
    const [open1, setOpen1] = useState<boolean>(false)
    const handleSubmit = (values: typeof initialValues, { resetForm }: FormikHelpers<typeof initialValues>) => {
        if (isCheck) {
            setOpen(false);
            console.log(values);
            setIsCheck(false)
            setOpen1(true);
            setTimeout(() => {
                setOpen1(false);
            }, 3000);
            resetForm();
        } else setIsCheck(true)
    };
    const handleClose = (resetForm: () => void) => {
        setOpen(false);
        resetForm();
    };
   

    useEffect(() => {
        if (checkID !== null) {
            const data = OrderData.find((item) => item.id === checkID)
            if (data) {
                setInitialValues({
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    typeacc: data.typeacc,
                    assistant: data.troly,
                    tongnap: data.tongnap,
                    sodu: data.sodu,
                })
            }
        } else setInitialValues(InitialValues)
    }, [checkID, InitialValues])

    return (
        <>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
                maxWidth='md'
            >
                <DialogTitle
                    sx={{
                        textAlign: 'center',
                        paddingTop: 4,
                        paddingBottom: 5,
                    }}
                >
                    Xem khách hàng
                </DialogTitle>
                <DialogContent>
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
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Typography variant="subtitle1" sx={{ fontSize: 16, fontWeight: 600 }}>
                                            ID khách hàng
                                        </Typography>
                                        <Field
                                            as={TextField}
                                            name='id'
                                            fullWidth
                                            margin='normal'
                                            InputProps={{
                                                readOnly: true
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="subtitle1" sx={{ fontSize: 16, fontWeight: 600 }}>
                                            Họ và tên
                                        </Typography>
                                        <Field
                                            as={TextField}
                                            name='name'
                                            fullWidth
                                            margin='normal'
                                            InputProps={{
                                                readOnly: true
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
                                        <Typography variant="subtitle1" sx={{ fontSize: 16, fontWeight: 600 }}>
                                            Email
                                        </Typography>
                                        <Field
                                            as={TextField}
                                            name='email'
                                            fullWidth
                                            margin='normal'
                                            InputProps={{
                                                readOnly: true
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
                                        <Typography variant="subtitle1" sx={{ fontSize: 16, fontWeight: 600 }}>
                                            Số điện thoại
                                        </Typography>
                                        <Field
                                            as={TextField}
                                            name='phone'
                                            fullWidth
                                            margin='normal'
                                            InputProps={{
                                                readOnly: true
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
                                        <Typography variant="subtitle1" sx={{ fontSize: 16, fontWeight: 600 }}>
                                            Loại tài khoản
                                        </Typography>
                                        <Field
                                            as={TextField}
                                            name='typeacc'
                                            fullWidth
                                            margin='normal'
                                            InputProps={{
                                                readOnly: true
                                            }}
                                            helperText={
                                                <ErrorMessage name="typeacc">
                                                    {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                </ErrorMessage>
                                            }
                                            FormHelperTextProps={{ sx: { ml: 0 } }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="subtitle1" sx={{ fontSize: 16, fontWeight: 600 }}>
                                            Trợ lý
                                        </Typography>
                                        <Field
                                            as={TextField}
                                            name='assistant'
                                            fullWidth
                                            margin='normal'
                                            InputProps={{
                                                readOnly: true
                                            }}
                                            helperText={
                                                <ErrorMessage name="assistant">
                                                    {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                </ErrorMessage>
                                            }
                                            FormHelperTextProps={{ sx: { ml: 0 } }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="subtitle1" sx={{ fontSize: 16, fontWeight: 600 }}>
                                            Tổng nạp
                                        </Typography>
                                        <Field
                                            as={TextField}
                                            name='tongnap'
                                            fullWidth
                                            margin='normal'
                                            InputProps={{
                                                readOnly: true
                                            }}
                                            helperText={
                                                <ErrorMessage name="tongnap">
                                                    {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                </ErrorMessage>
                                            }
                                            FormHelperTextProps={{ sx: { ml: 0 } }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="subtitle1" sx={{ fontSize: 16, fontWeight: 600 }}>
                                            Số dư
                                        </Typography>
                                        <Field
                                            as={TextField}
                                            name='sodu'
                                            fullWidth
                                            margin='normal'
                                            InputProps={{
                                                readOnly: true
                                            }}
                                            helperText={
                                                <ErrorMessage name="sodu">
                                                    {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                </ErrorMessage>
                                            }
                                            FormHelperTextProps={{ sx: { ml: 0 } }}
                                        />
                                    </Grid>
                                </Grid>
                                <DialogActions>
                                    <Button
                                        onClick={() => handleClose(resetForm)}
                                        variant='contained'
                                        color='error'
                                    >
                                        Đóng
                                    </Button>


                                    <Button
                                        type="submit"
                                        variant='contained'
                                    >
                                        {isCheck ? 'Lưu' : 'Sửa'}
                                    </Button>
                                </DialogActions>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
            <Snackbar
                open={open1}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert variant="filled" severity="success" sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    Thành công!
                </Alert>
            </Snackbar>

        </>
    )
}

export default DialogView
