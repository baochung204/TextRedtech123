import { Box, Container, Stack, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

// images
import bannerbgImg3 from 'src/assets/images/landingpage/ai.png';
import bannerbgImg4 from 'src/assets/images/landingpage/ai2.png';
import bannerbgImg5 from 'src/assets/images/landingpage/qchatbot.png';
import FrameworksTitle from './FrameworksTitle';

// Define the images you want to display
const images = [
  {
    id: 1,
    src: bannerbgImg3,
    title: 'Tiết kiệm tới 90% chi phí và thời gian',
    subtitle: 'Giảm thiểu chi phí vận hành và tối ưu hóa quy trình.',
  },
  {
    id: 2,
    src: bannerbgImg4,
    title: 'Sáng tạo nội dung không giới hạn',
    subtitle: 'Tạo ra nội dung phong phú và sáng tạo không ngừng.',
  },
  {
    id: 3,
    src: bannerbgImg5,
    title: 'Giọng nói đầy cảm xúc như con người',
    subtitle: 'Trải nghiệm giọng nói chân thực và tự nhiên.',
  },
  {
    id: 4,
    src: bannerbgImg3,
    title: 'Đa ứng dụng và dễ dàng tích hợp',
    subtitle: 'Tích hợp dễ dàng với các hệ thống hiện có.',
  },
];

const SliderBox = styled(Box)(() => ({
  width: '50%',
  height: '300px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'background-image 0.5s ease-in-out',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  paddingLeft: '40px',
  fontWeight: 'bold',
  fontSize: '18px',
  color: theme.palette.text.primary,
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '0',
    height: '0',
    border: '8px solid transparent',
    borderRightColor: theme.palette.primary.main,
    opacity: 0,
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  },
  '&.active::before': {
    opacity: 1,
    transform: 'translateY(-50%) scaleX(1.2)',
  },
}));

const Subtitle = styled(Typography)<{ visible: boolean }>(({ theme, visible }) => ({
  paddingLeft: '40px',
  fontSize: '14px',
  color: theme.palette.text.secondary,
  whiteSpace: 'nowrap',
  height: visible ? 'auto' : '0',
  opacity: visible ? 1 : 0,
  transition: 'opacity 0.3s ease, height 0.3s ease',
  overflow: 'hidden',
  marginTop: visible ? '10px' : '0', // Add margin-top to push elements down
}));

const StyledListItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '10px 0',
  minHeight: '40px', // Ensure minimum height to accommodate subtitle
  transition: 'min-height 0.3s ease',
}));

const Frameworks = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex].src;

  return (
    <Box
      bgcolor="action.hover"
      sx={{
        py: {
          xs: '70px',
          lg: '120px',
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Box mb={9}>
          <FrameworksTitle />
        </Box>

        <Stack direction="row" spacing={2} alignItems="center">
          <SliderBox style={{ backgroundImage: `url(${currentImage})` }} />
          <Stack spacing={2}>
            {images.map((image, index) => (
              <StyledListItem key={image.id}>
                <StyledTypography
                  variant="h6"
                  className={index === currentImageIndex ? 'active' : ''}
                  onMouseEnter={() => setCurrentImageIndex(index)}
                >
                  {image.title}
                </StyledTypography>
                <Subtitle visible={index === currentImageIndex}>{image.subtitle}</Subtitle>
              </StyledListItem>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Frameworks;
