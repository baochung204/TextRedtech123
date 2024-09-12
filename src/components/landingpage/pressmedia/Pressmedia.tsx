import { useRef } from 'react';
import {
  Box,
  CardContent,
  Container,
  Typography,
  Card,
  CardMedia,
  CardActions,
  Button,
} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PressMediaTitle from './PressmediaTitle';
import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface SliderType {
  image: string;
  title: string;
  subtext: string;
}

const sliderData: SliderType[] = [
  {
    image: img1,
    title: 'Biến con chữ thành giọng ảo đầy cảm xúc',
    subtext:
      'Mẫu bảng điều khiển từ AdminMart đã giúp tôi cung cấp giao diện sạch sẽ và đẹp mắt cho bảng điều khiển của mình và làm cho nó trông chính xác theo cách tôi muốn, chủ yếu là không cần phải có.',
  },
  {
    image: img2,
    title: 'Tèo em đến từ Thạch Thất',
    subtext:
      'Chất lượng thiết kế tuyệt vời, khả năng tùy chỉnh và tính linh hoạt tốt hơn nhiều so với các sản phẩm khác có trên thị trường. Tôi thực sự giới thiệu AdminMart cho những người khác.',
  },
  {
    image: img3,
    title: 'Tèo em ',
    subtext:
      'Chất lượng thiết kế tuyệt vời, khả năng tùy chỉnh và tính linh hoạt tốt hơn nhiều so với các sản phẩm khác có trên thị trường. Tôi thực sự giới thiệu AdminMart cho những người khác.',
  },
  {
    image: img1,
    title: 'Tèo em',
    subtext:
      'Chất lượng thiết kế tuyệt vời, khả năng tùy chỉnh và tính linh hoạt tốt hơn nhiều so với các sản phẩm khác có trên thị trường. Tôi thực sự giới thiệu AdminMart cho những người khác.',
  },
  {
    image: img2,
    title: 'Tèo em dsddddddddd',
    subtext:
      'Chất lượng thiết kế tuyệt vời, khả năng tùy chỉnh và tính linh hoạt tốt hơn nhiều so với các sản phẩm khác có trên thị trường. Tôi thực sự giới thiệu AdminMart cho những người khác.',
  },
  {
    image: img3,
    title: 'Tèo em',
    subtext:
      'Chất lượng thiết kế tuyệt vời, khả năng tùy chỉnh và tính linh hoạt tốt hơn nhiều so với các sản phẩm khác có trên thị trường. Tôi thực sự giới thiệu AdminMart cho những người khác.',
  },
];

const PressMedia = () => {
  const sliderRef = useRef<Slider>(null);
  // const [playing, setPlaying] = useState(true);

  const settings = {
    className: 'testimonial-slider',
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    ref: sliderRef,
    centerMode: true, // Kích hoạt chế độ center
    centerPadding: '15px', // Điều chỉnh khoảng cách giữa các thẻ
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const maxCharCount = 100;

  const truncateText = (text: string) => {
    return text.length <= maxCharCount ? text : `${text.substring(0, maxCharCount)}...`;
  };

  const goToPrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  // const togglePlayPause = () => {
  //   setPlaying(!playing);
  //   if (playing) {
  //     sliderRef.current?.slickPause();
  //   } else {
  //     sliderRef.current?.slickPlay();
  //   }
  // };

  return (
    <Box pt={14} pb={11} position="relative">
      <Container maxWidth="lg">
        <PressMediaTitle />
        <Box display="flex" justifyContent="center" mt={2} mb={2}>
          <Button
            onClick={goToPrevious}
            size="small"
            sx={{
              position: 'absolute',
              left: 300, // Canh về bên trái
              top: '400px',
              transform: 'translateY(-50%)', // Canh giữa theo chiều dọc
              zIndex: 10,
            }}
          >
            <ArrowBackIosIcon />
          </Button>
          <Button
            onClick={goToNext}
            size="small"
            sx={{
              position: 'absolute',
              right: 300, // Canh về bên trái
              top: '400px',
              transform: 'translateY(-50%)', // Canh giữa theo chiều dọc
              zIndex: 10,
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Box>
        <Box mt={5}>
          <Slider {...settings}>
            {sliderData.map((slider, index) => (
              <Box p="15px" key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardMedia sx={{ height: 160 }} image={slider.image} title={slider.title} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      style={{
                        width: '180px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {slider.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {truncateText(slider.subtext)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Chia sẻ</Button>
                    <Button size="small">Đọc thêm</Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default PressMedia;
