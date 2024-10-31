import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { AppState, useSelector } from 'src/store/Store';
import './Carousel.css';

const ProductCarousel = () => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slider1 = useRef<any>(null);
  const slider2 = useRef<any>(null);
  const productData = useSelector((state: AppState) => state.productById.data);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settingsMain = {
    asNavFor: nav2,
    ref: slider1,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: any) => setSelectedIndex(current),
  };

  const settingsThumbs = {
    asNavFor: nav1,
    ref: slider2,
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    infinite: false,
    // beforeChange: (current: any, next: any) => setSelectedIndex(next),
    beforeChange: (_: any, next: any) => setSelectedIndex(next),
  };

  const images = productData?.productInfo?.productImages || [];

  return (
    <Box>
      <Slider {...settingsMain}>
        {images.map((imageUrl: string, index: number) => (
          <Box key={index}>
            <img
              src={imageUrl}
              alt={`Product Image ${index + 1}`}
              style={{
                width: '100%',
                height: '351px',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
          </Box>
        ))}
      </Slider>

      <Slider {...settingsThumbs}>
        {images.map((imageUrl: string, index: number) => (
          <Box
            key={index}
            sx={{
              p: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ml: 0.7,
            }}
          >
            <img
              src={imageUrl}
              alt={`Thumbnail ${index + 1}`}
              style={{
                // width: selectedIndex === index ? '85px' : '80px',
                // height: selectedIndex === index ? '85px' : '80px',
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '5px',
                transition: 'all 0.1s ease', // Smooth transition effect
                border: selectedIndex === index ? '3px solid #000' : 'none', // Optional border to highlight selected
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;
