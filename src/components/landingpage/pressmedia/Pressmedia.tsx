import React from 'react';
import { Box, CardContent, Container, Typography, Card, CardMedia, CardActions, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './pressmedia.css';
import PressMediaTitle from './PressmediaTitle';
import AnimationFadeIn from '../animation/Animation';
import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';

interface SliderType {
    image: string;
    title: string;
    subtext: string;
}

const SliderData: SliderType[] = [
    {
        image: img1,
        title: 'Biến con chữ thành giọng ảo đầy cảm xúc',
        subtext:
            'Mẫu bảng điều khiển từ adminmart đã giúp tôi cung cấp giao diện sạch sẽ và đẹp mắt cho bảng điều khiển của mình và làm cho nó trông chính xác theo cách tôi muốn, chủ yếu là không cần phải có.',
    },
    {
        image: img2,
        title: 'Tèo em',
        subtext:
            'Chất lượng thiết kế tuyệt vời, khả năng tùy chỉnh và tính linh hoạt tốt hơn nhiều so với các sản phẩm khác có trên thị trường. Tôi thực sự giới thiệu AdminMart cho những người khác.',
    },
    {
        image: img3,
        title: 'Tèo em',
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
        title: 'Tèo em',
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
    const settings = {
        className: 'testimonial-slider',
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
                <PressMediaTitle />
                <Box mt={5}>
                    <AnimationFadeIn>
                        <Slider {...settings}>
                            {SliderData.map((slider, index) => (
                                <Box p="15px" key={index}>
                                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <CardMedia
                                            sx={{ height: 160 }}
                                            image={slider.image}
                                            title={slider.title}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {slider.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {slider.subtext}
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
                    </AnimationFadeIn>
                </Box>
            </Container>
        </Box>
    );
};

export default PressMedia;
