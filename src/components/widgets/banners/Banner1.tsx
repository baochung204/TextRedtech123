// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Card, CardContent, Typography, Button, Box, Grid } from '@mui/material';
import ai from 'src/assets/images/svgs/ai.png';
const Banner1 = () => {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: (theme) => theme.palette.info.light,
        py: 0,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <CardContent sx={{ p: '30px' }}>
        <Grid container justifyContent="space-between">
          <Grid item sm={6} display="flex" alignItems="center">
            <Box
              sx={{
                textAlign: {
                  xs: 'center',
                  sm: 'left',
                },
              }}
            >
              <Typography variant="h5">
                Sử dụng hình ảnh sản phẩm để gia tăng hiệu quả marketing
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" my={2}>
                Chỉ được phép chứa chữ cái, chữ số và dấu gạch dưới Sử dụng hình ảnh sản phẩm để gia
                tăng hiệu quả marketing tăng hiệu quả marketing
              </Typography>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: '220px', marginTop: '20px', padding: '10px 0' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M5 12l6 6" />
                    <path d="M5 12l6 -6" />
                  </svg>
                  <span style={{ marginLeft: ' 10px' }}>GIỚI THIỆU DỊCH VỤ</span>
                </Button>{' '}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: '210px', marginTop: '20px', padding: '10px 0' }}
                >
                  <span style={{ marginRight: ' 10px' }}> HÌNH ẢNH VÀ VIDEO</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M15 16l4 -4" />
                    <path d="M15 8l4 4" />
                  </svg>
                </Button>{' '}
              </div>
            </Box>
          </Grid>
          <Grid sm={5}>
            <Box
              component="img"
              src={ai}
              alt="AI"
              sx={{
                width: { xs: 400, md: 450, lg: 500, xl: 700 },
                height: 300,
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Banner1;
