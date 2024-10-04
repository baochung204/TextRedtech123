import { Box, Dialog, DialogContent, DialogTitle, Grid } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import ProductTable from '../product/ProductData';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'src/store/Store';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Carousel.css';
import { fetchProducts } from 'src/store/apps/eCommerce/ECommerceSlice';

interface PropUp {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckValue: React.Dispatch<React.SetStateAction<string | null>>;
  checkValue: string | null;
  selectID: string | null;
}

const DialogBuyProduct = ({ open, setOpen, setCheckValue, selectID, checkValue }: PropUp) => {
  const [state, setState] = useState<any>({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  const dispatch = useDispatch();
  const Id: any = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product: any = useSelector((state) => state.ecommerceReducer.products[Id.id - 1]);
  const getProductImage = product ? product.thumbnailUrl : '';

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const { nav1, nav2 } = state;
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    centerMode: true,
    className: 'centerThumb',
    speed: 500,
  };

  const emptyInitialValues = useMemo(
    () => ({
      id: '',
      danhmuc: '',
      anh: '',
      tensanpham: '',
      gianiemyet: '',
      giakhuyenmai: '',
      level: <></>,
      tags: '',
      soluongmua: '',
      tongdoanhthu: '',
      titrongdoanthu: '',
      ttsp: '',
      ha: '',
      secretkey: '',
      hdsd: '',
    }),
    [],
  );

  const [initialValues, setInitialValues] = useState(emptyInitialValues);

  const validationSchema = Yup.object({
    id: Yup.string(),
    danhmuc: Yup.string(),
    anh: Yup.string(),
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
  });

  const handleClose = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    resetForm: () => void,
  ) => {
    setOpen(false);
    resetForm();
  };
  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>,
  ) => {
    if (checkValue === 'view' || checkValue === 'add') {
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
      const data = ProductTable.find((item) => item.id === selectID);
      if (data) {
        setInitialValues({
          id: data.id,
          danhmuc: data.danhmuc,
          anh: data.anh,
          tensanpham: data.tensanpham,
          gianiemyet: data.gianiemyet,
          giakhuyenmai: data.giakhuyenmai,
          level: data.level,
          tags: data.tags,
          soluongmua: data.soluongmua,
          tongdoanhthu: data.tongdoanhthu,
          titrongdoanthu: data.titrongdoanthu,
          ttsp: data.ttsp ?? '',
          ha: data.ha ?? '',
          secretkey: data.secretkey ?? '',
          hdsd: data.hdsd ?? '',
        });
      }
    }
  }, [checkValue, emptyInitialValues, selectID]);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      maxWidth="md"
      sx={{ '& .MuiDialog-paper': { height: '1000px' } }}
    >
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
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ resetForm }) => (
          <Form>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box>
                    <Slider asNavFor={nav2} ref={(slider: any) => (slider1.current = slider)}>
                      <Box>
                        <img
                          src={getProductImage}
                          alt={getProductImage}
                          width="100%"
                          style={{ borderRadius: '5px' }}
                        />
                      </Box>
                      {product?.gender.map((step: any) => (
                        <Box key={step.id}>
                          <img src={step} alt={step} width="100%" style={{ borderRadius: '5px' }} />
                        </Box>
                      ))}
                    </Slider>
                    <Slider
                      asNavFor={nav1}
                      ref={(slider: any) => (slider2.current = slider)}
                      {...settings}
                    >
                      <Box sx={{ p: 1, cursor: 'pointer' }}>
                        <img
                          src={getProductImage}
                          alt={getProductImage}
                          width="100%"
                          style={{ borderRadius: '5px' }}
                        />
                      </Box>
                      {product?.gender.map((step: any) => (
                        <Box key={step.id} sx={{ p: 1, cursor: 'pointer' }}>
                          <img src={step} alt={step} width="100%" style={{ borderRadius: '5px' }} />
                        </Box>
                      ))}
                    </Slider>
                  </Box>
                </Grid>
                {/* Other Grid items go here */}
              </Grid>
            </DialogContent>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default DialogBuyProduct;
