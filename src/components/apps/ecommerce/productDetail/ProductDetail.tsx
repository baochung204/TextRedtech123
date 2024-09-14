import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Chip,
  Button,
  Rating,
  Divider,
  Stack,
  useTheme,
  ButtonGroup,
} from '@mui/material';
import { useSelector, useDispatch } from 'src/store/Store';
import { fetchProducts, addToCart } from '../../../../store/apps/eCommerce/ECommerceSlice';
import AlertCart from '../productCart/AlertCart';
// import { ProductType } from 'src/types/apps/eCommerce';

const ProductDetail = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams();

  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Get Products
  const product: any = useSelector((state) => state.ecommerceReducer.products[Number(id) - 1]);

  // Set qty
  // const [count, setCount] = useState(500);
  const count = 500;

  // For alert when added something to cart
  const [cartalert, setCartalert] = useState(false);

  const handleClick = () => {
    setCartalert(true);
  };

  const handleClose = (reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setCartalert(false);
  };

  // Convert USD to VND
  // const convertToVND = (amount: number, rate: number = 24000) => {
  //   return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
  //     amount * rate,
  //   );
  // };

  return (
    <Box p={2}>
      {product ? (
        <>
          <Box display="flex" alignItems="center">
            {/* Badge and category */}
            <Chip label={product.category} color="success" size="small" />
          </Box>
          {/* Title and description */}
          <Typography fontWeight="600" variant="h4" mt={1}>
            {product.title}
          </Typography>
          <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
            Superintelligent AI: Là AI thông minh hơn con người trong mọi lĩnh vực. Đây là một khái
            niệm tương lai.
          </Typography>
          {/* Price */}
          <Typography mt={2} variant="h4" fontWeight={600}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box component="span">{product.price - 10} point</Box>
              <Box
                component="small"
                color={theme.palette.text.secondary}
                sx={{ textDecoration: 'line-through' }}
              >
                {/* Display the original price */}
                {product.price} point
              </Box>
            </Box>
          </Typography>
          {/* Ratings */}
          <Stack direction={'row'} alignItems="center" gap="10px" mt={2} pb={3}>
            <Rating name="simple-controlled" size="small" value={product.rating} readOnly />
          </Stack>
          <Divider />
          {/* Qty */}
          <Stack direction="row" alignItems="center" pb={5}>
            <Typography variant="h6" mt={4} mr={4}>
              Dung lượng
            </Typography>
            <Box mt={4}>
              <ButtonGroup size="small" color="secondary" aria-label="small button group">
                {/* <Button key="one" onClick={() => setCount(count < 2 ? count : count - 1)}>
                  <IconMinus size="1.1rem" />
                </Button> */}
                <Button key="two">{count} MB</Button>
                {/* <Button key="three" onClick={() => setCount(count + 1)}>
                  <IconPlus size="1.1rem" />
                </Button> */}
              </ButtonGroup>
            </Box>
          </Stack>
          <Divider />
          {/* Buttons */}
          <Grid container spacing={2} mt={5}>
            <Grid item xs={12} lg={4} md={6}>
              <Button
                color="primary"
                size="large"
                fullWidth
                component={Link}
                variant="contained"
                to="/apps/eco-checkout"
                onClick={() => dispatch(addToCart(product as any))}
              >
                Mua ngay
              </Button>
            </Grid>
            <Grid item xs={12} lg={4} md={6}>
              <Button
                color="error"
                size="large"
                fullWidth
                variant="contained"
                sx={{ width: '200px' }}
                onClick={() => dispatch(addToCart(product as any)) && handleClick()}
              >
                Thêm giỏ hàng
              </Button>
            </Grid>
          </Grid>
          {/* Alert When click on add to cart */}
          <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
        </>
      ) : (
        'Không có sản phẩm'
      )}
    </Box>
  );
};

export default ProductDetail;
