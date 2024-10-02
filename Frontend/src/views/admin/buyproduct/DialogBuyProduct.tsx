import { Avatar, AvatarGroup, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ProductTable from "../product/ProductData";
import { PhotoCamera } from "@mui/icons-material";

interface PropUp {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setCheckValue: React.Dispatch<React.SetStateAction<string | null>>;
    checkValue: string | null;
    selectID: string | null;
}
interface PropsTitle {
    title: string,
    dataIndex: string
}
const DialogBuyProduct = ({ open, setOpen, setCheckValue, selectID, checkValue }: PropUp) => {
    const emptyInitialValues = useMemo(
        () => ({
            danhmuc: '',
            anh: [] as string[],
            tensanpham: '',
            gianiemyet: '',
            giakhuyenmai: '',
            tags: '',
            soluongmua: '',
            tongdoanhthu: '',
            titrongdoanthu: '',
            ttsp: '',
            ha: '',
            secretkey: '',
            hdsd: '',
            mota: '',
        }),
        [],
    );

    const [initialValues, setInitialValues] = useState(emptyInitialValues);

    const validationSchema = Yup.object({
        danhmuc: Yup.string(),
        anh: Yup.array().of(Yup.string()).min(1, 'Vui lòng tải lên ít nhất một ảnh.'), // Validate that at least one image is uploaded
        tensanpham: Yup.string(),
        gianiemyet: Yup.string(),
        giakhuyenmai: Yup.string(),
        tags: Yup.string(),
        soluongmua: Yup.string(),
        tongdoanhthu: Yup.string(),
        titrongdoanthu: Yup.string(),
        ttsp: Yup.string(),
        ha: Yup.string(),
        secretkey: Yup.string(),
        hdsd: Yup.string(),
        mota: Yup.string(),
    });

    const handleClose = (resetForm: () => void) => {
        setOpen(false);
        resetForm();
    };

    const handleSubmit = (values: typeof initialValues, { resetForm }: FormikHelpers<typeof initialValues>) => {
        console.log(values);
        if (checkValue === 'view' || checkValue === 'add') {
            setCheckValue('fix');
        } else {
            setOpen(false);
            console.log("Form data:", values);
            setCheckValue(null);
            resetForm();
        }
    };

    useEffect(() => {
        if (checkValue === 'add') {
            setInitialValues(emptyInitialValues);
        } else {
            const data = ProductTable.find((item) => item.id === selectID);
            if (data) {
                setInitialValues({
                    danhmuc: data.danhmuc,
                    anh: Array.isArray(data.anh) ? data.anh : data.anh ? [data.anh] : [],
                    tensanpham: data.tensanpham,
                    gianiemyet: data.gianiemyet,
                    giakhuyenmai: data.giakhuyenmai,
                    tags: data.tags,
                    soluongmua: data.soluongmua,
                    tongdoanhthu: data.tongdoanhthu,
                    titrongdoanthu: data.titrongdoanthu,
                    ttsp: data.ttsp ?? '',
                    ha: data.ha ?? '',
                    secretkey: data.secretkey ?? '',
                    hdsd: data.hdsd ?? '',
                    mota: data.mota,
                });
            }
        }
    }, [checkValue, emptyInitialValues, selectID]);

    const form: PropsTitle[] = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'tensanpham'
        },
        {
            title: 'Mô tả',
            dataIndex: 'mota'
        },
        {
            title: 'Giá niêm yết',
            dataIndex: 'gianiemyet'
        },
        {
            title: 'Tag',
            dataIndex: 'tags'
        },
    ]

    return (
        <Dialog
            open={open}
            onClose={() => handleClose(() => { })}
            fullWidth
            maxWidth="md"
        >
            <DialogTitle sx={{ textAlign: 'center' }}>
                {checkValue === 'add' ? 'Thêm sản phẩm' : checkValue === 'view' ? 'Xem sản phẩm' : 'Sửa sản phẩm'}
            </DialogTitle>

            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ values, setFieldValue, resetForm }) => (
                    <Form>
                        <DialogContent>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <Box
                                        sx={{
                                        backgroundColor: 'transparent'
                                    }}
                                    >
                                        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
                                            Upload Images
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingBottom: 3
                                            }}
                                        >
                                            <IconButton
                                                aria-label="upload"
                                            >
                                                <Button
                                                    variant="contained"
                                                    component="label"
                                                    sx={{
                                                        height: 150,
                                                        width: 150,
                                                        backgroundColor: '#C6D5FF',
                                                        '&:hover': {
                                                            backgroundColor: '#D9E3FF',
                                                            boxShadow: 'none',
                                                            borderColor: '#5D87FF',
                                                            color: '#5D87FF'
                                                        },
                                                        boxShadow: 'none',
                                                        border: values.anh ? '1px dashed black' : 'none',
                                                        borderRadius: 999,
                                                        color: 'black'
                                                    }}
                                                >
                                                    {values.anh && values.anh.length > 0 ?
                                                        <Box sx={{ position: 'relative' }}>
                                                            <Avatar alt="Remy Sharp" src={values.anh[0]} sx={{ width: 150, height: 150 }} />
                                                        </Box>
                                                        : <span style={{display: 'flex', alignItems: 'center'}}>+ Tải ảnh lên</span>
                                                    }

                                                    <input
                                                        type="file"
                                                        hidden
                                                        multiple
                                                        accept="image/*"
                                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                            if (e.target.files) {
                                                                const files = Array.from(e.target.files).map(file => URL.createObjectURL(file));
                                                                setFieldValue('anh', files);
                                                            }
                                                        }}
                                                    />
                                                </Button>
                                            </IconButton>

                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <AvatarGroup max={4} >
                                                {values.anh && values.anh.length > 0 &&
                                                    values.anh.map((url: string, index: number) => (
                                                        <Avatar alt={url} src={url} key={index} />
                                                    ))
                                                }
                                            </AvatarGroup>
                                        </Box>

                                        <ErrorMessage name="anh">
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    </Box>
                                </Grid>
                                <Grid item xs={9}>
                                    <Grid container spacing={2}>
                                        {form.map((item, index) => {
                                            return (
                                                <Grid item xs={6} key={index}>
                                                    <Typography variant="h5">
                                                        {item.title}
                                                    </Typography>
                                                    <Field
                                                        as={TextField}
                                                        name={item.dataIndex}
                                                        fullWidth
                                                        margin="normal"
                                                        InputProps={{
                                                            readOnly: checkValue === 'show' ? true : false,
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
                            <Button type="submit">
                                Submit
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>
    );
};

export default DialogBuyProduct;
