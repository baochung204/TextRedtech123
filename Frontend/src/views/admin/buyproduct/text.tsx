import { Autocomplete, Avatar, AvatarGroup, Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useEffect, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import CustomTextField from "src/components/forms/theme-elements/CustomTextField";
import ProductTable from "../product/ProductData";
import Function from "./components/Function";
import Strategy from "./components/Strategy";
import File from "./components/File";
import { validationSchema1, validationSchema2, validationSchema3 } from "./validationSchema";
import AssistantProduct from "./components/AssistantProduct";


interface PropUp {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setCheckValue: React.Dispatch<React.SetStateAction<string | null>>;
    checkValue: string | null;
    selectID: string | null;
}
// interface PropsTitle {
//     title: string,
//     dataIndex: string
// }

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A5', '#FFBB33', '#33FFBB', '#BB33FF'];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

interface Tag {
    title: string;
    color: string;
}

interface Options {
    label: string,
    values: number,
    subOptions?: { label: string, values: string }[]
}

const Test = ({ open, setOpen, setCheckValue, selectID, checkValue }: PropUp) => {
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
            detail: '',
            guide: '',
            // Function

            nhomFunction: "",
            codeFunction: "",
            levelx: "",


            // Strategy

            anhStrategy: [] as string[],
            nhomStrategy: '',
            tenStrategy: '',
            khachhangStrategy: '',
            levelStrategy: '',
            trolyStrategy: '',
            tomtatStrategy: '',
            noidungStrategy: '',

            // file
            files: '',

            // model
            model: '',
        }),
        [],
    );

    const [initialValues, setInitialValues] = useState(emptyInitialValues);

    // const validationSchema = Yup.object({
    //     danhmuc: Yup.string().required('Vui lòng chọn danh mục.'),
    //     anh: Yup.array().of(Yup.string()).min(1, 'Vui lòng tải lên ít nhất một ảnh.'),
    //     tensanpham: Yup.string(),
    //     gianiemyet: Yup.string(),
    //     giakhuyenmai: Yup.string(),
    //     tags: Yup.string(),
    //     soluongmua: Yup.string(),
    //     tongdoanhthu: Yup.string(),
    //     titrongdoanthu: Yup.string(),
    //     ttsp: Yup.string(),
    //     ha: Yup.string(),
    //     secretkey: Yup.string(),
    //     hdsd: Yup.string(),
    //     mota: Yup.string(),
    // });
    const [key, setKey] = useState<number | null>(null)
    const [value, setValue] = useState<Options | null>(null);

    const handleClose = (resetForm: () => void) => {
        setKey(null)
        setOpen(false);
        resetForm();
    };
    const handleSubmit = (values: typeof initialValues, { resetForm }: FormikHelpers<typeof initialValues>) => {
        console.log('tesst', values.anh);
        if (checkValue === 'view') {
            setCheckValue('fix');
        } else if (checkValue === 'add') {
            setCheckValue('sub')
            setKey(value && value.values)
            setKey(null)
            console.log(key);
        }
        else if (checkValue === 'sub') {
            setOpen(false);
            console.log("Form data:", values);
            setCheckValue(null);
            resetForm();
        }
        else {
            setOpen(false);
            console.log("Form data:", values);
            setCheckValue(null);
            resetForm();
        }
    };
    console.log(key, checkValue);
    const getValidationSchema = () => {
        if (checkValue === 'add') {
            return validationSchema1
        } else if (key === 1) {
            return validationSchema3;
        }
        else if (key === 2) {
            return validationSchema2;
        }
    };
    useEffect(() => {
        if (checkValue === 'add') {
            setInitialValues(emptyInitialValues);
        } else {
            setKey(value && value.values)
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
                    // detail: data.detail,
                    detail: data.detail ?? '',
                    guide: data.guide,
                    nhomFunction: data.nhomFunction ?? '',
                    codeFunction: data.codeFunction ?? '',
                    levelx: data.levelx ?? '',
                    anhStrategy: Array.isArray(data.anhStrategy) ? data.anhStrategy : data.anhStrategy ? [data.anhStrategy] : [],
                    nhomStrategy: data.nhomStrategy ?? '',
                    tenStrategy: data.tenStrategy ?? '',
                    khachhangStrategy: data.khachhangStrategy ?? '',
                    levelStrategy: data.levelStrategy ?? '',
                    trolyStrategy: data.trolyStrategy ?? '',
                    tomtatStrategy: data.tomtatStrategy ?? '',
                    noidungStrategy: data.noidungStrategy ?? '',
                    files: data.files ?? ''

                });
            }
        }
    }, [checkValue, emptyInitialValues, selectID, value]);

    // const form: PropsTitle[] = [
    //     {
    //         title: 'Tên sản phẩm',
    //         dataIndex: 'tensanpham'
    //     },
    //     {
    //         title: 'Danh mục',
    //         dataIndex: 'danhmuc'
    //     },
    //     {
    //         title: 'Giá niêm yết',
    //         dataIndex: 'gianiemyet'
    //     },
    //     {
    //         title: 'Giá khuyến mại',
    //         dataIndex: 'giakhuyenmai'
    //     },
    //     {
    //         title: 'Tag',
    //         dataIndex: 'tags'
    //     },
    //     {
    //         title: 'Mô tả',
    //         dataIndex: 'mota'
    //     },

    // ];
    const [tags, setTags] = useState<Tag[]>([]);
    const [gianiemyet, setGianiemyet] = useState<Tag[]>([]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && (event.target as HTMLInputElement).value) {
            setTags((prevTags) => [
                ...prevTags,
                {
                    title: (event.target as HTMLInputElement).value,
                    year: new Date().getFullYear(),
                    color: getRandomColor(),
                },
            ]);
            event.preventDefault();
        }
    };
    const modelOptions = [
        { label: 'Model A', values: 'A' },
        { label: 'Model B', values: 'B' },
        { label: 'Model C', values: 'C' },
    ];

    const options: Options[] = [
        {
            label: 'Chiến lược',
            values: 1
        },
        {
            label: 'Function',
            values: 2
        },
        {
            label: 'Files',
            values: 3
        },
        {
            label: 'Model',
            values: 4,
        },
        {
            label: 'Trợ lý',
            values: 5
        },
    ];
    return (
        <Dialog
            open={open}
            onClose={() => handleClose(() => { })}
            fullWidth
            maxWidth="lg"
        >
            <DialogTitle sx={{ textAlign: 'center' }}>
                {checkValue === 'add' ? 'Thêm sản phẩm' : checkValue === 'view' ? 'Xem sản phẩm' : 'Sửa sản phẩm'}
            </DialogTitle>

            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={getValidationSchema}
                onSubmit={handleSubmit}
                validateOnChange={true}
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
                                            Tải ảnh lên
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
                                                disabled={key === null ? false : true}
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
                                                        : <span style={{ display: 'flex', alignItems: 'center' }}>+ Tải ảnh lên</span>
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
                                            <AvatarGroup max={4}

                                            >
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

                                        <Grid item xs={5}>
                                            <Grid container spacing={2}>
                                                {/* {form.map((item, index) => {
                                                    return (
                                                        <Grid item xs={12} key={index}>
                                                            <Typography variant="h6" >
                                                                {item.title}
                                                            </Typography>
                                                            {item.dataIndex === 'danhmuc' ? (
                                                                <>
                                                                    <Autocomplete
                                                                        value={value} // Giá trị danh mục hiện tại
                                                                        onChange={(_event, newValue) => {
                                                                            if (newValue) {
                                                                                setValue(newValue); // Cập nhật giá trị danh mục
                                                                                setFieldValue('danhmuc', newValue.values); // Lưu giá trị vào Formik
                                                                                console.log("Selected Category:", newValue.values);
                                                                            }
                                                                        }}
                                                                        options={options} // Các danh mục chính
                                                                        getOptionLabel={(option) => option.label}
                                                                        isOptionEqualToValue={(option, value) => option.values === value.values}
                                                                        renderInput={(params) => <TextField {...params} label="Chọn danh mục" />}
                                                                        sx={{ mt: 2 }}
                                                                    />
                                                                    {value && value.values === 4 && (
                                                                        <Grid item xs={12} sx={{ mt: 2 }}>
                                                                            <Autocomplete
                                                                                options={modelOptions} // Hiển thị các lựa chọn model
                                                                                getOptionLabel={(option) => option.label}
                                                                                onChange={(_event, newValue) => {
                                                                                    setFieldValue('model', newValue?.values); // Lưu giá trị model được chọn
                                                                                    console.log("Selected Model:", newValue?.values);
                                                                                }}
                                                                                renderInput={(params) => (
                                                                                    <TextField {...params} label="Chọn model chi tiết" />
                                                                                )}
                                                                            />
                                                                        </Grid>
                                                                    )}
                                                                </>
                                                            ) :

                                                                item.dataIndex === 'tags' ? (
                                                                    <Autocomplete
                                                                        multiple
                                                                        fullWidth

                                                                        open={false}
                                                                        id="tags-outlined"
                                                                        size="medium"
                                                                        options={[]}
                                                                        getOptionLabel={(option) => option.title}
                                                                        value={tags}
                                                                        filterSelectedOptions
                                                                        sx={{ mt: 2 }}
                                                                        onChange={(_event, newValue) =>
                                                                            setTags(newValue.map((tag) => ({ ...tag, color: getRandomColor() })))
                                                                        }
                                                                        renderTags={(value, getTagProps) =>
                                                                            value.map((option, index) => (
                                                                                <Chip
                                                                                    label={option.title}
                                                                                    {...getTagProps({ index })}
                                                                                    style={{ backgroundColor: option.color, color: '#fff' }}
                                                                                />
                                                                            ))
                                                                        }
                                                                        renderInput={(params) => (
                                                                            <CustomTextField
                                                                                {...params}
                                                                                placeholder="Enter tags"
                                                                                aria-label="tags"
                                                                                onKeyDown={handleKeyDown}
                                                                                InputProps={{
                                                                                    ...params.InputProps,
                                                                                    endAdornment: null,
                                                                                    readOnly: key === null ? false : true,
                                                                                }}
                                                                            />
                                                                        )}
                                                                    />
                                                                ) :
                                                                    item.dataIndex === "mota" ? (
                                                                        <Grid item xs={12}>
                                                                            <Field name="mota">
                                                                                {({ field }: any) => (
                                                                                    <CustomTextField
                                                                                        {...field}
                                                                                        variant="outlined"
                                                                                        fullWidth
                                                                                        multiline
                                                                                        rows={4}
                                                                                        sx={{ marginBottom: 1 }}
                                                                                    />
                                                                                )}
                                                                            </Field>
                                                                            <ErrorMessage name="codeFunction">
                                                                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                                                            </ErrorMessage>
                                                                        </Grid>
                                                                    ) :
                                                                        (
                                                                            <Field
                                                                                as={TextField}

                                                                                InputProps={{
                                                                                    readOnly: key === null ? false : true,
                                                                                    sx: {
                                                                                        '& .MuiOutlinedInput-root': {
                                                                                            '& fieldset': {
                                                                                                borderColor: 'transparent',
                                                                                            },
                                                                                            '&:hover fieldset': {
                                                                                                borderColor: 'transparent',
                                                                                            },
                                                                                            '&.Mui-focused fieldset': {
                                                                                                borderColor: 'transparent',
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                }}
                                                                                name={item.dataIndex}
                                                                                fullWidth
                                                                                margin="normal"
                                                                            />
                                                                        )}
                                                            <ErrorMessage name={item.dataIndex}>
                                                                {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                                            </ErrorMessage>
                                                        </Grid>
                                                    );

                                                })} */}

                                            </Grid>
                                        </Grid>
                                        {/* <Grid item xs={7}>
                                            <Typography variant="h6" >
                                                Chi tiết
                                            </Typography>
                                            <ReactQuill
                                                value={values.detail}
                                                onChange={(content) => setFieldValue('detail', content)}
                                                theme="snow"
                                                placeholder="Chi tiết sản phẩm"
                                                style={{ height: "270px", marginTop: '15px', paddingBottom: "42px"}}
                                            />
                                            <Typography variant="h6" style={{marginTop: '10px'}} >
                                                Hướng dẫn sử dụng
                                            </Typography>
                                            <ReactQuill
                                                value={values.guide}
                                                onChange={(content) => setFieldValue('guide', content)}
                                                theme="snow"
                                                placeholder="Hướng dẫn sử dụng sản phẩm"
                                                style={{ height: "280px", marginTop: '15px' }}
                                            />
                                        </Grid> */}
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    {key && key === 1 && <Strategy values={values} />}
                                    {key && key === 2 && <Function values={values} />}
                                    {key && key === 3 && <File values={values} />}
                                    {/* {key && key === 4 && 4234324} */}
                                    {key && key === 5 && <AssistantProduct />}

                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => handleClose(resetForm)} color="primary">Hủy</Button>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                            // onClick={() => { checkValue === 'view' && setCheckValue('fix')}}
                            >
                                {checkValue === 'add' ? 'Xác nhận'
                                    :
                                    checkValue === 'sub' ? 'Thêm' :
                                        checkValue === 'view' ? 'Sửa' : checkValue === 'fix' && ' Lưu'
                                }
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>

    );
};

export default Test;

