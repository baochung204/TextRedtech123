import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import DataOrderProduct from './data/DataOrderProduct';

interface DataOrderProductInter {
  id_don_hang: string;
  createdAt: Date | string;
  id_khach_hang: string;
  ten_khach_hang: string;
  gia_niem_yet: number | string;
  khuyen_mai: number | string;
  thanh_toan: number | string;
}

interface PropUp {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckValue: React.Dispatch<React.SetStateAction<string | null>>;
  checkValue: string | null;
  selectID: string | null;
}

interface PropsTitle {
  title: string;
  dataIndex: string;
}

const DialogProduct = ({ open, setOpen, setCheckValue, selectID, checkValue }: PropUp) => {
  const emptyInitialValues: DataOrderProductInter = useMemo(
    () => ({
      id_don_hang: '',
      createdAt: '',
      id_khach_hang: '',
      ten_khach_hang: '',
      gia_niem_yet: '',
      khuyen_mai: '',
      thanh_toan: '',
    }),
    [],
  );

  const [initialValues, setInitialValues] = useState(emptyInitialValues);

  const validationSchema = Yup.object({
    id_don_hang: Yup.string(),
    createdAt: Yup.date(),
    id_khach_hang: Yup.string(),
    ten_khach_hang: Yup.string(),
    gia_niem_yet: Yup.number(),
    khuyen_mai: Yup.number(),
    thanh_toan: Yup.number(),
  });

  const handleClose = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    resetForm: () => void,
  ) => {
    setInitialValues(emptyInitialValues);
    setOpen(false);
    resetForm();
  };
  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>,
  ) => {
    if (checkValue === 'show' || checkValue === 'add') {
      setCheckValue('fix');
    } else {
      setOpen(false);
      console.log(values);
      setCheckValue(null);
      resetForm();
    }
  };

  useEffect(() => {
    if (checkValue === 'add') {
      setInitialValues(emptyInitialValues);
    } else {
      const data = DataOrderProduct.find((item) => item.id_don_hang === selectID);
      console.log('data', data);

      if (data) {
        setInitialValues({
          id_don_hang: data.id_don_hang,
          createdAt: data.createdAt.toLocaleDateString(),
          id_khach_hang: data.id_khach_hang,
          ten_khach_hang: data.ten_khach_hang,
          gia_niem_yet: data.gia_niem_yet,
          khuyen_mai: data.khuyen_mai,
          thanh_toan: data.thanh_toan,
        });
      }
    }
  }, [checkValue, emptyInitialValues, selectID]);

  const form: PropsTitle[] = [
    {
      title: 'ID',
      dataIndex: 'id_don_hang',
    },
    {
      title: 'Ngày mua',
      dataIndex: 'createdAt',
    },
    {
      title: 'ID',
      dataIndex: 'id_khach_hang',
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'ten_khach_hang',
    },
  ];

  const form1: PropsTitle[] = [
    {
      title: 'Giá niêm yết',
      dataIndex: 'gia_niem_yet',
    },
    {
      title: 'Khuyến mại',
      dataIndex: 'khuyen_mai',
    },
    {
      title: 'Thanh toán',
      dataIndex: 'thanh_toan',
    },
  ];

  console.log(initialValues);

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
      <DialogTitle sx={{ textAlign: 'center', fontSize: '20px', padding: '30px 0' }}>
        {checkValue === 'add'
          ? 'Thêm sản phẩm'
          : checkValue === 'show'
          ? 'Xem sản phẩm'
          : 'Sửa sản phẩm'}
      </DialogTitle>

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
            <DialogContent
              sx={{
                paddingX: 8,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {form.map((item, index) => {
                      return (
                        <Grid item xs={6} key={index}>
                          <Typography variant="h6" fontWeight={400}>
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
                      );
                    })}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {form1.map((item, index) => {
                      return (
                        <Grid item xs={4} key={index}>
                          <Typography variant="h6" fontWeight={400}>
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
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={(event) => handleClose(event, resetForm)}
                variant="contained"
                color="error"
              >
                Đóng
              </Button>
              <Button type="submit" variant="contained">
                {checkValue === 'show' ? 'Sửa' : 'Lưu'}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default DialogProduct;
