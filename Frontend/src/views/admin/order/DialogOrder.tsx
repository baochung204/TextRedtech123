import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from "@mui/material"
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import OrderData from "src/components/admin/order/data/OrderData";


interface PropsDialog {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    selectID: string | null,
    checkValue: string | null,
    setCheckValue: React.Dispatch<React.SetStateAction<string | null>>
}

interface PropsTableData {
    title: string,
    dataIndex: string
}

const DialogOrder = ({ open, setOpen, selectID, checkValue, setCheckValue }: PropsDialog) => {
    const data = OrderData.find(item => item.id === selectID)
    const emptyInitialValues =
    {
        id: data?.id,
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        typeacc: data?.typeacc,
        troly: data?.troly,
        tongnap: data?.tongnap,
        sodu: data?.sodu,
        sex: data?.sex,
        date: data?.date,
        dccn: data?.dccn,
        mstcn: data?.mstcn,
        xvat: data?.xvat,
        tct: data?.tct,
        mstdn: data?.mstdn,
        ndd: data?.ndd,
        cv: data?.cv,
        dcct: data?.dcct,
        ect: data?.ect,
    }
    console.log('data: ', data);

    // const emptyInitialValues = useMemo(() => ({
    //     id: '',
    //     name: '',
    //     email: '',
    //     phone: '',
    //     typeacc: '',
    //     troly: '',
    //     tongnap: '',
    //     sodu: '',
    //     sex: '',
    //     date: '',
    //     dccn: '',
    //     mstcn: '',
    //     xvat: false,
    //     tct: '',
    //     mstdn: '',
    //     ndd: '',
    //     cv: '',
    //     dcct: '',
    //     ect: '',

    // }), []);


    // const [initialValues, setInitialValues] = useState(emptyInitialValues);

    const validationSchema = Yup.object({
        id: Yup.string(),
        name: Yup.string(),
        email: Yup.string(),
        phone: Yup.string(),
        typeacc: Yup.string(),
        troly: Yup.string(),
        tongnap: Yup.string(),
        sodu: Yup.string(),
        sex: Yup.string(),
        date: Yup.string(),
        dccn: Yup.string(),
        mstcn: Yup.string(),
        // xvat: Yup.boolean().oneOf([true], 'You must accept the xvat condition').required(),
        xvat: Yup.boolean(),
        tct: Yup.string(),
        mstdn: Yup.string(),
        ndd: Yup.string(),
        cv: Yup.string(),
        dcct: Yup.string(),
        ect: Yup.string(),
    })


    const handleSubmit = (values: typeof emptyInitialValues, { resetForm }: FormikHelpers<typeof initialValues>) => {
        if (checkValue === 'view') {
            setCheckValue('fix')
        }
        else {
            setOpen(false);
            console.log(values);
            resetForm();
        }

    };
    const handleClose = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>, resetForm: () => void) => {
        // setIsCheckFix(false);
        setCheckValue('view')
        setOpen(false);
        resetForm();
    };
    const form1: PropsTableData[] = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
        },
        {
            title: 'Giới tính',
            dataIndex: 'sex',
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'date',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'adress',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
        },
        {
            title: 'Chúc vụ',
            dataIndex: 'cv',
        },
        {
            title: 'Mã số thuế',
            dataIndex: 'mstcn',
        },
    ]

    const form2: PropsTableData[] = [
        {
            title: 'Loại tài khoản',
            dataIndex: 'typeacc',
        },
        {
            title: 'Trợ lý',
            dataIndex: 'troly',
        },
        {
            title: 'Tổng nạp',
            dataIndex: 'tongnap',
        },
        {
            title: 'Số dư',
            dataIndex: 'sodu',
        },
    ]
    const form3: PropsTableData[] = [
        {
            title: 'Tên công ty',
            dataIndex: 'tct',
        },
        {
            title: 'Người đại diện',
            dataIndex: 'ndd',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'dcct',
        },
        {
            title: 'Email',
            dataIndex: 'ect',
        },
        {
            title: 'Mã số thuế',
            dataIndex: 'mstdn',
        },
        {
            title: 'Xuất VAT',
            dataIndex: 'xvat',
        }
    ]
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth='md'
        >
            <DialogTitle
                sx={{
                    textAlign: 'center'
                }}
            >
                {checkValue === 'view' ? 'Xem khách hàng' : 'Sửa khách hàng'}
            </DialogTitle>
            <Formik
                enableReinitialize
                initialValues={emptyInitialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ resetForm }) => (
                    <Form>
                        <DialogContent>
                            <Grid
                                container
                                spacing={2}
                            >
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <Typography variant="h5" sx={{ marginBottom: 2 }}>
                                        Cá nhân
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {form1.map((item, index) => {
                                            return (
                                                <Grid
                                                    item
                                                    xs={4}
                                                    key={index}
                                                >
                                                    <Typography variant='h6' fontWeight={400}>{item.title}</Typography>
                                                    <Field
                                                        as={TextField}
                                                        name={item.dataIndex}
                                                        fullWidth
                                                        margin="normal"
                                                        InputProps={{
                                                            readOnly: checkValue === 'view' ? true : false,
                                                        }}
                                                        helperText={
                                                            <ErrorMessage name={item.dataIndex}>
                                                                {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                            </ErrorMessage>
                                                        }
                                                        FormHelperTextProps={{ sx: { ml: 0 } }}
                                                    />
                                                </Grid>
                                            )
                                        })}

                                    </Grid>

                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <Typography variant="h5" sx={{ marginBottom: 2 }}>
                                        Thông tin tài khoản
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {form2.map((item, index) => {
                                            return (
                                                <Grid item xs={6} key={index}>
                                                    <Typography variant='h6' fontWeight={400}>{item.title}</Typography>
                                                    <Field
                                                        as={TextField}
                                                        name={item.dataIndex}
                                                        fullWidth
                                                        margin="normal"
                                                        InputProps={{
                                                            readOnly: checkValue === 'view' ? true : false,
                                                        }}
                                                        helperText={
                                                            <ErrorMessage name={item.dataIndex}>
                                                                {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                            </ErrorMessage>
                                                        }
                                                        FormHelperTextProps={{ sx: { ml: 0 } }}
                                                    />
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <Typography variant="h5" sx={{ marginBottom: 2 }}>
                                        Công ty
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {form3.map((item, index) => {
                                            return (
                                                <Grid item xs={6} key={index}>
                                                    <Typography variant='h6' fontWeight={400}>{item.title}</Typography>
                                                    <Field
                                                        as={TextField}
                                                        name={item.dataIndex}
                                                        fullWidth
                                                        margin="normal"
                                                        InputProps={{
                                                            readOnly: checkValue === 'view' ? true : false,
                                                        }}
                                                        helperText={
                                                            <ErrorMessage name={item.dataIndex}>
                                                                {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                                            </ErrorMessage>
                                                        }
                                                        FormHelperTextProps={{ sx: { ml: 0 } }}
                                                    />
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={(event) => handleClose(event, resetForm)}
                                variant='contained'
                                color='error'
                            >
                                Đóng
                            </Button>
                            <Button
                                type="submit"
                                variant='contained'
                            >
                                {checkValue === 'view' ? 'Sửa' : 'Lưu'}
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>
    )
}
export default DialogOrder