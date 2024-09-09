// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Box,
  CardContent,
  Chip,
  Paper,
  Stack,
  Typography,
  LinearProgress,
  Grid,
  Card,
  IconButton,
  CardMedia,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SavingsImg from '../../../assets/images/backgrounds/piggy.png';
import { IconPlayerPlay, IconPlayerSkipBack, IconPlayerSkipForward } from '@tabler/icons-react';
import img1 from 'src/assets/images/blog/blog-img5.jpg';

interface sellsData {
  product: string;
  price: string;
  percent: number;
  color: string;
}

const sells: sellsData[] = [
  {
    product: 'MaterialPro',
    price: '23,568',
    percent: 55,
    color: 'primary',
  },
  {
    product: 'Flexy Admin',
    price: '23,568',
    percent: 20,
    color: 'secondary',
  },
];

const SellingProducts = () => {
  const theme = useTheme();
  const secondarylight = theme.palette.secondary.light;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const primary = theme.palette.primary.main;
  const borderColor = theme.palette.divider;

  return (
    <Paper sx={{ bgcolor: 'primary.main', border: `1px solid ${borderColor}` }} variant="outlined">
      <CardContent>
        <Typography variant="h5" color="white">
          Sản phẩm bán chạy nhất
        </Typography>
        <Typography variant="subtitle1" color="white">
          Tổng quan 2024
        </Typography>

        <Box textAlign="center" mt={1}>
          <Grid item xs={12} sm={12}>
            <Card sx={{ display: 'flex', p: 0 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Uptown Funk
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Jon Bon Jovi
                  </Typography>
                </CardContent>
                <Stack direction="row" spacing={2} px={2} pb={3}>
                  <IconButton aria-label="previous">
                    <IconPlayerSkipBack width="20" />
                  </IconButton>
                  <IconButton aria-label="play/pause" color="error">
                    <IconPlayerPlay width="20" />
                  </IconButton>
                  <IconButton aria-label="next">
                    <IconPlayerSkipForward width="20" />
                  </IconButton>
                </Stack>
              </Box>
              {/* {isLoading ? (
              <Skeleton variant="rectangular" animation="wave" width="100%" height={180}></Skeleton>
            ) : ( */}
              <CardMedia
                component="img"
                sx={{ width: '100%', height: 180 }}
                image={img1}
                alt="Live from space album cover"
              />
              {/* )} */}
            </Card>
          </Grid>
        </Box>
      </CardContent>
      <Paper sx={{ overflow: 'hidden', zIndex: '1', position: 'relative', marginX: '25px' }}>
        <Box p={3}>
          <Stack spacing={3}>
            {sells.map((sell: any, i: number) => (
              <Box key={i}>
                <Stack
                  direction="row"
                  spacing={2}
                  mb={1}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="h6">{sell.product}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      ${sell.price}
                    </Typography>
                  </Box>
                  <Chip
                    sx={{
                      backgroundColor: sell.color === 'primary' ? primarylight : secondarylight,
                      color: sell.color === 'primary' ? primary : secondary,
                      borderRadius: '4px',
                      width: 55,
                      height: 24,
                    }}
                    label={sell.percent + '%'}
                  />
                </Stack>
                <LinearProgress value={sell.percent} variant="determinate" color={sell.color} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Paper>
    </Paper>
  );
};

export default SellingProducts;
