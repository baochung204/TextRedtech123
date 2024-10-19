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
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import OrderData from 'src/components/admin/order/data/OrderData';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';

interface PropsDialog {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectID: string | null;
  checkValue: string | null;
  setCheckValue: React.Dispatch<React.SetStateAction<string | null>>;
}

interface PropsTableData {
  title: string;
  dataIndex: string;
}

const DialogOrder = ({ open, setOpen, selectID, checkValue, setCheckValue }: PropsDialog) => {
  const data = OrderData.find((item) => item.id === selectID);
  const emptyInitialValues = {
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
  };
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
  });

  const handleSubmit = (
    values: typeof emptyInitialValues,
    { resetForm }: FormikHelpers<typeof emptyInitialValues>,
  ) => {
    if (checkValue === 'view') {
      setCheckValue('fix');
    } else {
      setOpen(false);
      console.log(values);
      resetForm();
    }
  };
  const handleClose = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    resetForm: () => void,
  ) => {
    // setIsCheckFix(false);
    setCheckValue('view');
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
  ];

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
  ];
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
    },
  ];
  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
      <DialogTitle
        sx={{
          textAlign: 'center',
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
            <Scrollbar_y sx={{ maxHeight: '550px' }}>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h5" sx={{ marginBottom: 2 }}>
                      Cá nhân
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Typography variant="h6" fontWeight={400}>
                              ID
                            </Typography>
                            <Field
                              as={TextField}
                              name="id"
                              fullWidth
                              margin="normal"
                              InputProps={{ readOnly: checkValue === 'view' }}
                              helperText={
                                <ErrorMessage name={form1[0].dataIndex}>
                                  {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                </ErrorMessage>
                              }
                              FormHelperTextProps={{ sx: { ml: 0 } }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h6" fontWeight={400}>
                              Họ và tên
                            </Typography>
                            <Field
                              as={TextField}
                              name="name"
                              fullWidth
                              margin="normal"
                              InputProps={{ readOnly: checkValue === 'view' }}
                              helperText={
                                <ErrorMessage name={form1[1].dataIndex}>
                                  {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                </ErrorMessage>
                              }
                              FormHelperTextProps={{ sx: { ml: 0 } }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h6" fontWeight={400}>
                              Mã số thuế
                            </Typography>
                            <Field
                              as={TextField}
                              name="mstcn"
                              fullWidth
                              margin="normal"
                              InputProps={{ readOnly: checkValue === 'view' }}
                              helperText={
                                <ErrorMessage name={form1[6].dataIndex}>
                                  {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                </ErrorMessage>
                              }
                              FormHelperTextProps={{ sx: { ml: 0 } }}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography variant="h6" fontWeight={400}>
                              Giới tính
                            </Typography>
                            <Field
                              as={TextField}
                              name="sex"
                              fullWidth
                              margin="normal"
                              InputProps={{ readOnly: checkValue === 'view' }}
                              helperText={
                                <ErrorMessage name={form1[2].dataIndex}>
                                  {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                </ErrorMessage>
                              }
                              FormHelperTextProps={{ sx: { ml: 0 } }}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="h6" fontWeight={400}>
                              Ngày sinh
                            </Typography>
                            <Field
                              as={TextField}
                              name="date"
                              fullWidth
                              margin="normal"
                              InputProps={{ readOnly: checkValue === 'view' }}
                              helperText={
                                <ErrorMessage name={form1[3].dataIndex}>
                                  {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                </ErrorMessage>
                              }
                              FormHelperTextProps={{ sx: { ml: 0 } }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h6" fontWeight={400}>
                              Số điện thoại
                            </Typography>
                            <Field
                              as={TextField}
                              name="phone"
                              fullWidth
                              margin="normal"
                              InputProps={{ readOnly: checkValue === 'view' }}
                              helperText={
                                <ErrorMessage name={form1[5].dataIndex}>
                                  {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                </ErrorMessage>
                              }
                              FormHelperTextProps={{ sx: { ml: 0 } }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="h6" fontWeight={400}>
                              Email
                            </Typography>
                            <Field
                              as={TextField}
                              name="email"
                              fullWidth
                              margin="normal"
                              InputProps={{ readOnly: checkValue === 'view' }}
                              helperText={
                                <ErrorMessage name={form1[4].dataIndex}>
                                  {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                                </ErrorMessage>
                              }
                              FormHelperTextProps={{ sx: { ml: 0 } }}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" fontWeight={400}>
                          Địa chỉ
                        </Typography>
                        <Field
                          as={TextField}
                          name="adress"
                          fullWidth
                          margin="normal"
                          InputProps={{ readOnly: checkValue === 'view' }}
                          helperText={
                            <ErrorMessage name={form1[3].dataIndex}>
                              {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                            </ErrorMessage>
                          }
                          FormHelperTextProps={{ sx: { ml: 0 } }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5" sx={{ marginBottom: 2 }}>
                      Thông tin tài khoản
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="h6" fontWeight={400}>
                          Loại tài khoản
                        </Typography>
                        <Field
                          as={TextField}
                          name="typeacc"
                          fullWidth
                          margin="normal"
                          InputProps={{ readOnly: checkValue === 'view' }}
                          helperText={
                            <ErrorMessage name={form2[0].dataIndex}>
                              {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                            </ErrorMessage>
                          }
                          FormHelperTextProps={{ sx: { ml: 0 } }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h6" fontWeight={400}>
                          Tổng nạp
                        </Typography>
                        <Field
                          as={TextField}
                          name="tongnap"
                          fullWidth
                          margin="normal"
                          InputProps={{ readOnly: checkValue === 'view' }}
                          helperText={
                            <ErrorMessage name={form2[2].dataIndex}>
                              {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                            </ErrorMessage>
                          }
                          FormHelperTextProps={{ sx: { ml: 0 } }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h6" fontWeight={400}>
                          Trợ lý
                        </Typography>
                        <Field
                          as={TextField}
                          name="troly"
                          fullWidth
                          margin="normal"
                          InputProps={{ readOnly: checkValue === 'view' }}
                          helperText={
                            <ErrorMessage name={form2[1].dataIndex}>
                              {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                            </ErrorMessage>
                          }
                          FormHelperTextProps={{ sx: { ml: 0 } }}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Typography variant="h6" fontWeight={400}>
                          Số dư
                        </Typography>
                        <Field
                          as={TextField}
                          name="sodu"
                          fullWidth
                          margin="normal"
                          InputProps={{ readOnly: checkValue === 'view' }}
                          helperText={
                            <ErrorMessage name={form2[3].dataIndex}>
                              {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                            </ErrorMessage>
                          }
                          FormHelperTextProps={{ sx: { ml: 0 } }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5" sx={{ marginBottom: 2 }}>
                      Công ty
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="h6" fontWeight={400}>
                          Tên công ty
                        </Typography>
                        <Field
                          as={TextField}
                          name="tct"
                          fullWidth
                          margin="normal"
                          InputProps={{ readOnly: checkValue === 'view' }}
                          helperText={
                            <ErrorMessage name={form3[0].dataIndex}>
                              {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                            </ErrorMessage>
                          }
                          FormHelperTextProps={{ sx: { ml: 0 } }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h6" fontWeight={400}>
                          Mã số thuế
                        </Typography>
                        <Field
                          as={TextField}
                          name="mstdn"
                          fullWidth
                          margin="normal"
                          InputProps={{ readOnly: checkValue === 'view' }}
                          helperText={
                            <ErrorMessage name={form3[4].dataIndex}>
                              {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                            </ErrorMessage>
                          }
                          FormHelperTextProps={{ sx: { ml: 0 } }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h6" fontWeight={400}>
                          Người đại diện
                        </Typography>
                        <Field
                          as={TextField}
                          name="ndd"
                          fullWidth
                          margin="normal"
                          InputProps={{ readOnly: checkValue === 'view' }}
                          helperText={
                            <ErrorMessage name={form3[1].dataIndex}>
                              {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                            </ErrorMessage>
                          }
                          FormHelperTextProps={{ sx: { ml: 0 } }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h6" fontWeight={400}>
                          Chức vụ
                        </Typography>
                        <Field
                          as={TextField}
                          name="ndd"
                          fullWidth
                          margin="normal"
                          InputProps={{ readOnly: checkValue === 'view' }}
                          helperText={
                            <ErrorMessage name={form3[1].dataIndex}>
                              {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                            </ErrorMessage>
                          }
                          FormHelperTextProps={{ sx: { ml: 0 } }}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Typography variant="h6" fontWeight={400}>
                          Địa chỉ
                        </Typography>
                        <Field
                          as={TextField}
                          name="dcct"
                          fullWidth
                          margin="normal"
                          InputProps={{ readOnly: checkValue === 'view' }}
                          helperText={
                            <ErrorMessage name={form3[2].dataIndex}>
                              {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                            </ErrorMessage>
                          }
                          FormHelperTextProps={{ sx: { ml: 0 } }}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Typography variant="h6" fontWeight={400}>
                          Email
                        </Typography>
                        <Field
                          as={TextField}
                          name="ect"
                          fullWidth
                          margin="normal"
                          InputProps={{ readOnly: checkValue === 'view' }}
                          helperText={
                            <ErrorMessage name={form3[3].dataIndex}>
                              {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                            </ErrorMessage>
                          }
                          FormHelperTextProps={{ sx: { ml: 0 } }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Typography variant="h6" fontWeight={400}>
                          Xuất VAT
                        </Typography>
                        <Field
                          as={TextField}
                          name="xvat"
                          fullWidth
                          margin="normal"
                          InputProps={{ readOnly: checkValue === 'view' }}
                          helperText={
                            <ErrorMessage name={form3[5].dataIndex}>
                              {(msg) => <Typography sx={{ color: 'red' }}>{msg}</Typography>}
                            </ErrorMessage>
                          }
                          FormHelperTextProps={{ sx: { ml: 0 } }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>
            </Scrollbar_y>
            <DialogActions>
              <Button
                onClick={(event) => handleClose(event, resetForm)}
                variant="contained"
                color="error"
              >
                Đóng
              </Button>
              <Button type="submit" variant="contained">
                {checkValue === 'view' ? 'Sửa' : 'Lưu'}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};
export default DialogOrder;
