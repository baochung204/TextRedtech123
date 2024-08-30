// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Avatar, Box, CardContent, Container, Typography, Rating, Stack } from '@mui/material';
import TestimonialTitle from './TestimonialTitle';
import BlankCard from '../../shared/BlankCard';
import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import AnimationFadeIn from '../animation/Animation';

//Carousel slider for product
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css';

interface SliderType {
  title: string;
  subtitle: string;
  avatar: string;
  subtext: string;
}

const SliderData: SliderType[] = [
  {
    title: 'Tèo anh',
    subtitle: 'Tính năng khả dụng',
    avatar: img1,
    subtext:
      'Mẫu bảng điều khiển từ adminmart đã giúp tôi cung cấp giao diện sạch sẽ và đẹp mắt cho bảng điều khiển của mình và làm cho nó trông chính xác theo cách tôi muốn, chủ yếu là không cần phải có.',
  },
  {
    title: 'Tèo em',
    subtitle: 'Tính năng khả dụng',
    avatar: img2,
    subtext:
      'Chất lượng thiết kế tuyệt vời, khả năng tùy chỉnh và tính linh hoạt tốt hơn nhiều so với các sản phẩm khác có trên thị trường. Tôi thực sự giới thiệu AdminMart cho những người khác.',
  },
  {
    title: 'Tèo chị',
    subtitle: 'Tính năng khả dụng',
    avatar: img3,
    subtext:
      'Mẫu này tuyệt vời, giao diện người dùng phong phú và cập nhật. Mặc dù khá đầy đủ, tôi đề xuất cải thiện một chút tài liệu. Cảm ơn & Rất khuyến khích!',
  },
  {
    title: 'Tèo cháu',
    subtitle: 'Tính năng khả dụng',
    avatar: img1,
    subtext:
      'Mẫu bảng điều khiển từ adminmart đã giúp tôi cung cấp giao diện sạch sẽ và đẹp mắt cho bảng điều khiển của mình và làm cho nó trông chính xác theo cách tôi muốn, chủ yếu là không cần phải có.',
  },
  {
    title: 'Tèo cậu',
    subtitle: 'Tính năng khả dụng',
    avatar: img2,
    subtext:
      'Chất lượng thiết kế tuyệt vời, khả năng tùy chỉnh và tính linh hoạt tốt hơn nhiều so với các sản phẩm khác có trên thị trường. Tôi thực sự giới thiệu AdminMart cho những người khác.',
  },
  {
    title: 'Tèo bác',
    subtitle: 'Tính năng khả dụng',
    avatar: img3,
    subtext:
      'Mẫu này tuyệt vời, giao diện người dùng phong phú và cập nhật. Mặc dù khá đầy đủ, tôi đề xuất cải thiện một chút tài liệu. Cảm ơn & Rất khuyến khích!',
  },
];

const Testimonial = () => {
  const [value, setValue] = React.useState<number | null>(5);

  const settings = {
    className: 'testimonial-slider',
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  return (
    <Box pt={14} pb={11}>
      <Container maxWidth="lg">
        <TestimonialTitle />
        <Box mt={5}>
          <AnimationFadeIn>
            <Slider {...settings}>
              {SliderData.map((slider, index) => (
                <Box p="15px" key={index}>
                  <BlankCard>
                    <CardContent>
                      <Stack direction="row">
                        <Avatar src={slider.avatar} alt="user" sx={{ width: 40, height: 40 }} />
                        <Box ml={2}>
                          <Typography variant="h6">{slider.title}</Typography>
                          <Typography color="textSecondary" variant="subtitle1">
                            {slider.subtitle}
                          </Typography>
                        </Box>
                        <Box ml="auto">
                          <Rating
                            size="small"
                            name="simple-controlled"
                            value={value}
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Box>
                      </Stack>
                      <Typography fontSize="15px" color="textSecondary" mt={3}>
                        {slider.subtext}
                      </Typography>
                    </CardContent>
                  </BlankCard>
                </Box>
              ))}
            </Slider>
          </AnimationFadeIn>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;
