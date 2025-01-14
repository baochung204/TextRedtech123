// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Container, Grid, Stack, styled, Theme, useMediaQuery } from '@mui/material';
import bannerbgImg3 from 'src/assets/images/landingpage/ai.png';
import bannerbgImg4 from 'src/assets/images/landingpage/ai2.png';
import bannerbgImg5 from 'src/assets/images/landingpage/chatbot.png';
import BannerContent from './BannerContent';

const Banner = () => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const SliderBox = styled(Box)(() => ({
    '@keyframes slideup': {
      '0%': {
        transform: 'translate3d(0, 0, 0)',
      },
      '100% ': {
        transform: 'translate3d(0px, -100%, 0px)',
      },
    },

    animation: 'slideup 35s linear infinite',
  }));

  const SliderBox2 = styled(Box)(() => ({
    '@keyframes slideDown': {
      '0%': {
        transform: 'translate3d(0, -100%, 0)',
      },
      '100% ': {
        transform: 'translate3d(0px, 0, 0px)',
      },
    },

    animation: 'slideDown 35s linear infinite',
  }));

  return (
    <Box mb={10} sx={{ overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6} sm={8}>
            <BannerContent />
          </Grid>
          {lgUp ? (
            <Grid item xs={12} lg={6}>
              <Box
                p={3.2}
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.light,
                  minWidth: '2000px',
                  height: 'calc(100vh - 100px)',
                  maxHeight: '790px',
                }}
              >
                <Stack direction={'row'}>
                  <Box>
                    <SliderBox>
                      <img
                        src={bannerbgImg5}
                        alt="banner"
                        style={{ width: '400px', margin: '20px 5px', borderRadius: '20px' }}
                      />
                    </SliderBox>
                    <SliderBox>
                      <img
                        src={bannerbgImg4}
                        alt="banner"
                        style={{ width: '400px', margin: '20px 5px', borderRadius: '20px' }}
                      />
                    </SliderBox>
                    <SliderBox>
                      <img
                        src={bannerbgImg3}
                        alt="banner"
                        style={{ width: '400px', margin: '20px 5px', borderRadius: '20px' }}
                      />
                    </SliderBox>
                  </Box>
                  <Box>
                    <SliderBox2>
                      <img
                        src={bannerbgImg3}
                        alt="banner"
                        style={{
                          width: '400px',
                          marginRight: '5px',
                          marginLeft: '5px',
                          marginBottom: '80px',
                          borderRadius: '20px',
                        }}
                      />
                    </SliderBox2>
                    <SliderBox2>
                      <img
                        src={bannerbgImg4}
                        alt="banner"
                        style={{
                          width: '400px',
                          marginRight: '5px',
                          marginLeft: '5px',
                          marginBottom: '80px',

                          borderRadius: '20px',
                        }}
                      />
                    </SliderBox2>
                    <SliderBox2>
                      <img
                        src={bannerbgImg5}
                        alt="banner"
                        style={{ width: '400px', margin: '20px 5px', borderRadius: '20px' }}
                      />
                    </SliderBox2>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ) : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
