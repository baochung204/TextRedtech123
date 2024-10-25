import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { fetchProducts } from 'src/store/apps/eCommerce/ECommerceSlice';
import { useDispatch } from 'src/store/Store';
import './Carousel.css';
import { ProductInfoType } from 'src/store/user/products/type/productByIdType';

interface IProps {
  productInfo: ProductInfoType | null;
}

const ProductCarousel = ({ productInfo }: IProps) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const mainSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: nav2 ?? undefined,
    ref: (slider: Slider) => setNav1(slider),
  };

  const slidesToShow = Math.min(productInfo?.productImages.length || 0, 4);

  const thumbnailSettings = {
    dots: false,
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: productInfo?.productImages.length > 4,
    centerPadding: '0px',
    swipeToSlide: true,
    asNavFor: nav1 ?? undefined,
    ref: (slider: Slider) => setNav2(slider),
  };

  if (!productInfo?.productImages?.length) {
    return null;
  }

  return (
    <Box>
      {/* Slider Chính */}
      <Box sx={{ mb: 2 }}>
        <Slider {...mainSettings}>
          {productInfo.productImages.map((image, index) => (
            <Box key={`main-${index}`} sx={{ position: 'relative', paddingTop: '56.25%' }}>
              <img
                src={image}
                alt={`${productInfo.name} - ${index + 1}`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Slider Thumbnail */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Slider {...thumbnailSettings}>
          {productInfo.productImages.map((image, index) => (
            <Box
              key={`thumb-${index}`}
              sx={{
                padding: '0 5px',
                cursor: 'pointer',
                // Loại bỏ display: 'inline-block'
              }}
            >
              <Box
                sx={{
                  width: '80px',
                  height: '80px',
                  '&:hover': {
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <img
                  src={image}
                  alt={`${productInfo.name} thumbnail - ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '4px',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ProductCarousel;
