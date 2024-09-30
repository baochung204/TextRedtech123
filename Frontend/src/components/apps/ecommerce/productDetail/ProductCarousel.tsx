import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'src/store/Store';

//Carousel slider for product
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Carousel.css';

//Carousel slider data

//fetch product
import { fetchProducts } from 'src/store/apps/eCommerce/ECommerceSlice';
// import { ProductType } from 'src/types/apps/eCommerce';

const ProductCarousel = () => {
  const [state, setState] = React.useState<any>({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  const dispatch = useDispatch();
  const Id: any = useParams();

  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Get Products
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

  return (
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
      <Slider asNavFor={nav1} ref={(slider: any) => (slider2.current = slider)} {...settings}>
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
  );
};

export default ProductCarousel;
