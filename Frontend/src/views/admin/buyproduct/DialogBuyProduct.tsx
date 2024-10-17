import {
  Autocomplete,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import ProductTable from '../product/ProductData';
import AssistantProduct from './components/AssistantProduct';
import File from './components/File';
import Function from './components/Function';
import Model from './components/Model';
import Strategy from './components/Strategy';
import { validationSchema1, validationSchema2, validationSchema3 } from './validationSchema';

interface PropUp {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckValue: React.Dispatch<React.SetStateAction<string | null>>;
  checkValue: string | null;
  selectID: string | null;
}
// interface PropsTitle {
//   title: string;
//   dataIndex: string;
// }

// const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A5', '#FFBB33', '#33FFBB', '#BB33FF'];

// const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

interface Tag {
  title: string;
  color: string;
}

interface Options {
  label: string;
  values: number;
  subOptions?: { label: string; values: string }[];
}
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const DialogBuyProduct = ({ open, setOpen, setCheckValue, selectID, checkValue }: PropUp) => {
  const [tags, setTags] = useState([]);

  const handleTagChange = (event:any, newValue: any) => {
    // Assign a random color to each new tag
    const updatedTags = newValue.map((tag: any) => ({
      title: tag.title || tag, 
      color: tag.color || getRandomColor()  
    }));
    setTags(updatedTags);
  };
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

      nhomFunction: '',
      codeFunction: '',
      levelx: '',

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
  const [key, setKey] = useState<number | null>(null);
  const [value, setValue] = useState<Options | null>(null);

  const handleClose = (resetForm: () => void) => {
    setKey(null);
    setOpen(false);
    resetForm();
  };
  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>,
  ) => {
    console.log('tesst', values.anh);
    if (checkValue === 'view') {
      setCheckValue('fix');
    } else if (checkValue === 'add') {
      setCheckValue('sub');
      setKey(value && value.values);
      setKey(null);
      console.log(key);
    } else if (checkValue === 'sub') {
      setOpen(false);
      console.log('Form data:', values);
      setCheckValue(null);
      resetForm();
    } else {
      setOpen(false);
      console.log('Form data:', values);
      setCheckValue(null);
      resetForm();
    }
  };
  console.log(key, checkValue);
  const getValidationSchema = () => {
    if (checkValue === 'add') {
      return validationSchema1;
    } else if (key === 1) {
      return validationSchema3;
    } else if (key === 2) {
      return validationSchema2;
    }
  };
  useEffect(() => {
    if (checkValue === 'add') {
      setInitialValues(emptyInitialValues);
    } else {
      setKey(value && value.values);
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
          guide: data.guide ?? '',
          nhomFunction: data.nhomFunction ?? '',
          codeFunction: data.codeFunction ?? '',
          levelx: data.levelx ?? '',
          anhStrategy: Array.isArray(data.anhStrategy)
            ? data.anhStrategy
            : data.anhStrategy
              ? [data.anhStrategy]
              : [],
          nhomStrategy: data.nhomStrategy ?? '',
          tenStrategy: data.tenStrategy ?? '',
          khachhangStrategy: data.khachhangStrategy ?? '',
          levelStrategy: data.levelStrategy ?? '',
          trolyStrategy: data.trolyStrategy ?? '',
          tomtatStrategy: data.tomtatStrategy ?? '',
          noidungStrategy: data.noidungStrategy ?? '',
          files: data.files ?? '',
          model: data.model ?? '',
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
  //     {
  //         title: "Chi tiết",
  //         dataIndex: "chitiet"
  //     },
  //     {
  //         title: "Hướng dẫn",
  //         dataIndex: "huongdan"
  //     }

  // ];
  //   const [tags, setTags] = useState<Tag[]>([]);
  // const [tags] = useState<Tag[]>([]);

  //   const [gianiemyet, setGianiemyet] = useState<Tag[]>([]);

  //   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //     if (event.key === 'Enter' && (event.target as HTMLInputElement).value) {
  //       setTags((prevTags) => [
  //         ...prevTags,
  //         {
  //           title: (event.target as HTMLInputElement).value,
  //           year: new Date().getFullYear(),
  //           color: getRandomColor(),
  //         },
  //       ]);
  //       event.preventDefault();
  //     }
  //   };

  const options: Options[] = [
    {
      label: 'Chiến lược',
      values: 1,
    },
    {
      label: 'Function',
      values: 2,
    },
    {
      label: 'Files',
      values: 3,
    },
    {
      label: 'Model',
      values: 4,
    },
    {
      label: 'Trợ lý',
      values: 5,
    },
  ];
  return (
    <Dialog open={open} onClose={() => handleClose(() => { })} fullWidth maxWidth="lg">
      <DialogTitle sx={{ textAlign: 'center' }}>
        {checkValue === 'add'
          ? 'Thêm sản phẩm'
          : checkValue === 'view'
            ? 'Xem sản phẩm'
            : 'Sửa sản phẩm'}
      </DialogTitle>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={getValidationSchema}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validateOnBlur={false}
      >
        {({ values, setFieldValue, resetForm, errors, touched }) => (
          <Form>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      backgroundColor: 'transparent',
                    }}
                  >
                    <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
                      Tải ảnh lên
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingBottom: 3,
                      }}
                    >
                      <IconButton aria-label="upload" disabled={key === null ? false : true}>
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
                              color: '#5D87FF',
                            },
                            boxShadow: 'none',
                            border: values.anh ? '1px dashed black' : 'none',
                            borderRadius: 999,
                            color: 'black',
                          }}
                        >
                          {values.anh && values.anh.length > 0 ? (
                            <Box sx={{ position: 'relative' }}>
                              <Avatar
                                alt="Remy Sharp"
                                src={values.anh[0]}
                                sx={{ width: 150, height: 150 }}
                              />
                            </Box>
                          ) : (
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                              + Tải ảnh lên
                            </span>
                          )}
                          <input
                            type="file"
                            hidden
                            multiple
                            accept="image/*"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              if (e.target.files) {
                                const files = Array.from(e.target.files).map((file) =>
                                  URL.createObjectURL(file),
                                );
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
                      <AvatarGroup max={4}>
                        {values.anh &&
                          values.anh.length > 0 &&
                          values.anh.map((url: string, index: number) => (
                            <Avatar alt={url} src={url} key={index} />
                          ))}
                      </AvatarGroup>
                    </Box>

                    <ErrorMessage name="anh">
                      {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
                  </Box>
                </Grid>
                <Grid item xs={9}>
                  <Grid container spacing={2}>
                    {/* Tên sản phẩm and Mô tả */}
                    <Grid item xs={6}>
                      <CustomFormLabel htmlFor="name">Tên sản phẩm</CustomFormLabel>
                      <TextField
                        fullWidth
                        required
                        // label="Tên sản phẩm"
                        value={values.tensanpham}
                        error={Boolean(errors.tensanpham && touched.tensanpham)}
                        helperText={
                          errors.tensanpham && touched.tensanpham ? errors.tensanpham : ''
                        }
                        onChange={(e) => setFieldValue('tensanpham', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CustomFormLabel htmlFor="name">Mô tả</CustomFormLabel>
                      <TextField
                        fullWidth
                        required
                        // label="Tên sản phẩm"
                        value={values.mota}
                        error={Boolean(errors.mota && touched.mota)}
                        helperText={errors.mota && touched.mota ? errors.mota : ''}
                        onChange={(e) => setFieldValue('mota', e.target.value)}
                      />
                    </Grid>

                    {/* Giá niêm yết and Giá khuyến mại */}
                    <Grid item xs={6}>
                      <CustomFormLabel htmlFor="gianiemyet">Giá niêm yết</CustomFormLabel>
                      <TextField
                        fullWidth
                        required
                        type="number"
                        value={values.gianiemyet}
                        error={Boolean(errors.gianiemyet && touched.gianiemyet)}
                        helperText={errors.gianiemyet && touched.gianiemyet ? errors.gianiemyet : ''}
                        onChange={(e) => setFieldValue('gianiemyet', e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <CustomFormLabel htmlFor="giakhuyenmai">Giá khuyến mại</CustomFormLabel>
                      <TextField
                        fullWidth
                        required
                        type="number"
                        value={values.giakhuyenmai}
                        error={Boolean(errors.giakhuyenmai && touched.giakhuyenmai)}
                        helperText={errors.giakhuyenmai && touched.giakhuyenmai ? errors.giakhuyenmai : ''}
                        onChange={(e) => setFieldValue('giakhuyenmai', e.target.value)}
                      />
                    </Grid>

                    {/* Tags and Danh mục */}
                    <Grid item xs={6}>
                      <CustomFormLabel htmlFor="tags">Tags</CustomFormLabel>
                      <Autocomplete
                        multiple
                        freeSolo
                        options={[]}
                        value={tags}
                        onChange={handleTagChange}
                        getOptionLabel={(option: Tag | string) => typeof option === 'string' ? option : option.title}
                        renderTags={(value: (Tag | string)[], getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                              label={typeof option === 'string' ? option : option.title}
                              {...getTagProps({ index })}
                              style={{ backgroundColor: typeof option === 'string' ? '#000' : option.color, color: '#fff' }}
                            />
                          ))
                        }
                        renderInput={(params) => (
                          <TextField {...params}  placeholder="Enter tags" />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CustomFormLabel htmlFor="name">Chọn danh mục</CustomFormLabel>
                      <Autocomplete
                        value={value}
                        onChange={(_event, newValue) => {
                          if (newValue) {
                            setValue(newValue);
                            setFieldValue('danhmuc', newValue.values);
                          }
                        }}
                        options={options}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>

                    {/* Chi tiết sản phẩm */}
                    <Grid item xs={12}>
                      <CustomFormLabel htmlFor="name">Chi tiết sản phẩm</CustomFormLabel>
                      <ReactQuill
                        value={values.detail}
                        onChange={(content) => setFieldValue('detail', content)}
                        theme="snow"
                        placeholder="Chi tiết sản phẩm"
                      />
                    </Grid>

                    {/* Hướng dẫn */}
                    <Grid item xs={12}>
                      <CustomFormLabel htmlFor="name">Hướng dẫn</CustomFormLabel>
                      <ReactQuill
                        value={values.guide}
                        onChange={(content) => setFieldValue('guide', content)}
                        theme="snow"
                        placeholder="Hướng dẫn"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  {key && key === 1 && <Strategy values={values} />}
                  {key && key === 2 && <Function values={values} />}
                  {key && key === 3 && <File values={values} />}
                  {key && key === 4 && <Model values={values} />}
                  {key && key === 5 && <AssistantProduct />}
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleClose(resetForm)} color="primary">
                Hủy
              </Button>
              <Button
                type="submit"
                color="primary"
                variant="contained"
              // onClick={() => { checkValue === 'view' && setCheckValue('fix')}}
              >
                {checkValue === 'add'
                  ? 'Xác nhận'
                  : checkValue === 'sub'
                    ? 'Thêm'
                    : checkValue === 'view'
                      ? 'Sửa'
                      : checkValue === 'fix' && ' Lưu'}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default DialogBuyProduct;
