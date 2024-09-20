import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material"
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik"
import { useState } from "react"
import * as Yup from 'yup';
import icontext from 'src/assets/images/logos/R-Point.png';

interface PropsDialog {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}



const RPointDialog = ({ open, setOpen }: PropsDialog) => {

    // const emptyInitialValues = useMemo(() => ({
    //     name: '',
    //     point: '',
    //     money: '',
    //     model: '',
    //     function: '',
    //     stagety: '',
    //     files: '',
    //     function2: '',
    //     createDate: ''
    // }))
    const emptyInitialValues = {
        name: '',
        point: '',
        money: '',
        model: '',
        function: '',
        stagety: '',
        files: '',
        function2: '',
        createDate: ''
    }
    const [initialValues, setInitialValues] = useState(emptyInitialValues);

    const validateSchema = Yup.object({
        name: Yup.string()
            .required('Tên gói R-Point là bắt buộc.'),
        point: Yup.string()
            .required('Số Point là bắt buộc.'),
        money: Yup.string()
            .required('Số tiền là bắt buộc.'),
        model: Yup.string()
            .required('Model là bắt buộc.'),
        function: Yup.string()
            .required('Hành động là bắt buộc.'),
        stagety: Yup.string()
            .required('Chiến lược là bắt buộc.'),
        files: Yup.string()
            .required('Files là bắt buộc.'),
        function2: Yup.string()
            .required('Hành động là bắt buộc.')
    })

    const handleSubmit = (values: typeof initialValues, { resetForm }: FormikHelpers<typeof initialValues>) => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

        const formData = { ...values, createDate: formattedDate };
        setOpen(false);
        console.log(formData);
        resetForm();

    }

    const handleClose = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>, resetForm: () => void) => {
        setOpen(false);
        resetForm();
    };

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-describedby"
            fullWidth
            maxWidth='md'
        >
            <DialogTitle
                id='alert-dialog-title'
                sx={{
                    textAlign: 'center',
                    paddingBottom: 5,
                    paddingTop: 3
                }}
            >
                Thêm gói R-Point
            </DialogTitle>
            <DialogContent >
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={validateSchema}
                    onSubmit={handleSubmit}
                    validateOnChange={true}
                    validateOnBlur={false}
                >
                    {({ resetForm }) => (
                        <Form>
                            <Grid
                                container
                                spacing={3}
                                justifyContent="center"

                            >
                                <Grid item xs={6}>
                                    <Grid container>
                                        <Grid item xs={12} >
                                            <Typography variant="h6">
                                                Tên gói R-Point
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name='name'
                                                fullWidth
                                                margin='normal'
                                                helperText={
                                                    <ErrorMessage name='name'>
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{ sx: { ml: 0 } }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Typography variant="h6">
                                                Số Points
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name='point'
                                                fullWidth
                                                margin="normal"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <img
                                                                src={icontext}
                                                                alt="icon"
                                                                style={{ width: '24px', height: '24px' }}
                                                            />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                helperText={
                                                    <ErrorMessage name='point'>
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{ sx: { ml: 0 } }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Typography variant="h6">
                                                Giá tiền
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name='money'
                                                fullWidth
                                                margin='normal'
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            VNĐ
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                helperText={
                                                    <ErrorMessage name='money'>
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{ sx: { ml: 0 } }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Typography variant="h6">
                                                Tên Model
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name='model'
                                                fullWidth
                                                margin='normal'
                                                helperText={
                                                    <ErrorMessage name='model'>
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{ sx: { ml: 0 } }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container>
                                        <Grid item xs={12} >
                                            <Typography variant="h6">
                                                Tên hành động
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name='function'
                                                fullWidth
                                                margin='normal'
                                                helperText={
                                                    <ErrorMessage name='function'>
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{ sx: { ml: 0 } }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Typography variant="h6">
                                                Chiến lược
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name='stagety'
                                                fullWidth
                                                margin='normal'
                                                helperText={
                                                    <ErrorMessage name='stagety'>
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{ sx: { ml: 0 } }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Typography variant="h6">
                                                Files
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name='files'
                                                fullWidth
                                                margin='normal'
                                                helperText={
                                                    <ErrorMessage name='files'>
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{ sx: { ml: 0 } }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Typography variant="h6">
                                                Hành động 2
                                            </Typography>
                                            <Field
                                                as={TextField}
                                                name='function2'
                                                fullWidth
                                                margin='normal'
                                                helperText={
                                                    <ErrorMessage name='function2'>
                                                        {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                    </ErrorMessage>
                                                }
                                                FormHelperTextProps={{ sx: { ml: 0 } }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <DialogActions >
                                <Button
                                    onClick={(event) => handleClose(event, resetForm)}
                                    variant="contained"
                                    color='error'
                                >
                                    Đóng
                                </Button>
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
    )
}

export default RPointDialog
