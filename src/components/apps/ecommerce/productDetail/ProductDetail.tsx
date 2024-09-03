import React, { useEffect, useState } from 'react';
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
  Fab,
  ButtonGroup,
} from '@mui/material';
import { useSelector, useDispatch } from 'src/store/Store';
import { fetchProducts, addToCart } from '../../../../store/apps/eCommerce/ECommerceSlice';
import { IconCheck, IconMinus, IconPlus } from '@tabler/icons-react';
import AlertCart from '../productCart/AlertCart';
import { ProductType } from 'src/types/apps/eCommerce';

const ProductDetail = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams();  // Sử dụng destructuring cho params

  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Get Products
  const product: ProductType = useSelector((state) => state.ecommerceReducer.products[Number(id) - 1]);

  // Select colors on click
  const [scolor, setScolor] = useState(product ? product.colors[0] : '');
  const setColor = (e: string) => {
    setScolor(e);
  };

  // Set qty
  const [count, setCount] = useState(1);

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
  const convertToVND = (amount: number, rate: number = 24000) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount * rate);
  };

  return (
    <Box p={2}>
      {product ? (
        <>
          <Box display="flex" alignItems="center">
            {/* Badge and category */}
            <Chip label="In Stock" color="success" size="small" />
            <Typography color="textSecondary" variant="caption" ml={1} textTransform="capitalize">
              {product.category}
            </Typography>
          </Box>
          {/* Title and description */}
          <Typography fontWeight="600" variant="h4" mt={1}>
            {product.title}
          </Typography>
          <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex arcu, tincidunt bibendum
            felis.
          </Typography>
          {/* Price */}
          <Typography mt={2} variant="h4" fontWeight={600}>
            <Box
              component={'small'}
              color={theme.palette.text.secondary}
              sx={{ textDecoration: 'line-through' }}
            >
              {convertToVND(product.salesPrice)}
            </Box>{' '}
            {convertToVND(product.price)}
          </Typography>
          {/* Ratings */}
          <Stack direction={'row'} alignItems="center" gap="10px" mt={2} pb={3}>
            <Rating name="simple-controlled" size="small" value={product.rating} readOnly />
            <Link to="/" color="inherit">
              (236 reviews)
            </Link>
          </Stack>
          <Divider />
          {/* Colors */}
          {/* <Stack py={4} direction="row" alignItems="center">
            <Typography variant="h6" mr={1}>
              Colors:
            </Typography>
            <Box>
              {product.colors.map((color) => (
                <Fab
                  color="primary"
                  sx={{
                    transition: '0.1s ease-in',
                    scale: scolor === color ? '0.9' : '0.7',
                    backgroundColor: `${color}`,
                    '&:hover': {
                      backgroundColor: `${color}`,
                      opacity: 0.7,
                    },
                  }}
                  size="small"
                  key={color}
                  onClick={() => setColor(color)}
                >
                  {scolor === color ? <IconCheck size="1.1rem" /> : ''}
                </Fab>
              ))}
            </Box>
          </Stack> */}
          {/* Qty */}
          <Stack direction="row" alignItems="center" pb={5}>
            <Typography variant="h6" mr={4}>
              Số lượng:
            </Typography>
            <Box>
              <ButtonGroup size="small" color="secondary" aria-label="small button group">
                <Button key="one" onClick={() => setCount(count < 2 ? count : count - 1)}>
                  <IconMinus size="1.1rem" />
                </Button>
                <Button key="two">{count}</Button>
                <Button key="three" onClick={() => setCount(count + 1)}>
                  <IconPlus size="1.1rem" />
                </Button>
              </ButtonGroup>
            </Box>
          </Stack>
          <Divider />
          {/* Buttons */}
          <Grid container spacing={2} mt={3}>
            <Grid item xs={12} lg={4} md={6}>
              <Button
                color="primary"
                size="large"
                fullWidth
                component={Link}
                variant="contained"
                to="/apps/eco-checkout"
                onClick={() => dispatch(addToCart(product))}
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
                onClick={() => dispatch(addToCart(product)) && handleClick()}
              >
                Thêm giỏ hàng
              </Button>
            </Grid>
          </Grid>
          <Typography color="textSecondary" variant="body1" mt={4}>
            Gửi đi trong vòng 2-3 tuần
          </Typography>
          <Link to="/" color="inherit">
            Tại sao thời gian giao hàng lại lâu hơn?
          </Link>
          {/* Alert When click on add to cart */}
          <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
        </>
      ) : (
        'No product'
      )}
    </Box>
  );
};

export default ProductDetail;
