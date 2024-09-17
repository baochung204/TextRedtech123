import FeaturesTitle from './FeaturesTitle';
import { Typography, Grid, Container, Box, Button } from '@mui/material';
import AnimationFadeIn from '../animation/Animation';
import bannerbgImg3 from 'src/assets/images/landingpage/ai.png';
import bannerbgImg4 from 'src/assets/images/landingpage/ai2.png';
import bannerbgImg5 from 'src/assets/images/landingpage/chatbot.png';

const Features = () => {
  return (
    <Box py={6}>
      <Container maxWidth="lg">
        <FeaturesTitle />
        <AnimationFadeIn>
          <Box mt={6}>
            {/* Section 1 */}
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box>
                  <img
                    src={bannerbgImg3}
                    alt="Feature Image"
                    style={{ width: '100%', height: '300px', borderRadius: '16px' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                  Chữ thành lời
                </Typography>
                <Typography variant="body1" paragraph>
                  Công cụ tạo tiếng nói nhân tạo AI từ văn bản chỉ trong tích tắc, mở ra một kỷ
                  nguyên mới về tổng hợp tiếng nói chất lượng cao, giàu cảm xúc như con người.
                </Typography>
                <Box mt={2}>
                  <Button variant="contained" color="primary" sx={{ mr: 2, borderRadius: '8px' }}>
                    Dùng thử
                  </Button>
                  <Button variant="outlined" color="primary" sx={{ borderRadius: '8px' }}>
                    Khám phá
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* Section 2 */}
            <Grid container spacing={4} alignItems="center" mt={6}>
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Typography variant="h5" gutterBottom>
                  Lồng tiếng AI
                </Typography>
                <Typography variant="body1">
                  Giải pháp lồng tiếng bằng công nghệ tiếng nói và dịch máy AI tiên tiến, giúp tạo
                  ra sản phẩm lồng tiếng chất lượng cao một cách nhanh chóng và hiệu quả chi phí.
                </Typography>
                <Box mt={2}>
                  <Button variant="contained" color="primary" sx={{ mr: 2, borderRadius: '8px' }}>
                    Dùng thử
                  </Button>
                  <Button variant="outlined" color="primary" sx={{ borderRadius: '8px' }}>
                    Khám phá
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box>
                  <img
                    src={bannerbgImg4}
                    alt="Feature Image"
                    style={{ width: '100%', height: '300px', borderRadius: '16px' }}
                  />
                </Box>
              </Grid>
            </Grid>

            {/* Section 3 */}
            <Grid container spacing={4} alignItems="center" mt={6}>
              <Grid item xs={12} md={6}>
                <Box>
                  <img
                    src={bannerbgImg5}
                    alt="Feature Image"
                    style={{ width: '100%', height: '300px', borderRadius: '16px' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                  AIVoice API
                </Typography>
                <Typography variant="body1">
                  Nền tảng tích hợp nhanh chóng giọng nói nhân tạo và các dịch vụ tiếng nói vào hệ
                  thống của bạn mà không cần đầu tư nhiều thời gian và nguồn lực phát triển từ đầu.
                </Typography>
                <Box mt={2}>
                  <Button variant="contained" color="primary" sx={{ mr: 2, borderRadius: '8px' }}>
                    Dùng thử
                  </Button>
                  <Button variant="outlined" color="primary" sx={{ borderRadius: '8px' }}>
                    Khám phá
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </AnimationFadeIn>
      </Container>
    </Box>
  );
};

export default Features;
