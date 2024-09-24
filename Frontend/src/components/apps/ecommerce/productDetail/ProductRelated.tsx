import { Box, CardContent, Chip, Grid, Skeleton, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/images/logos/R-Point.png';
import { useDispatch, useSelector } from 'src/store/Store';
import { fetchProducts } from 'src/store/apps/eCommerce/ECommerceSlice';
import { ProductType } from 'src/types/apps/eCommerce';
import BlankCard from '../../../shared/BlankCard';

const ProductRelated = () => {
  const dispatch = useDispatch();

  // Get Product
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filterRelatedProduct = (products: ProductType[]) => {
    if (products) return products.filter((t) => t.related);

    return products;
  };

  // Get Products
  const Relatedproducts = useSelector((state: any) =>
    filterRelatedProduct(state.ecommerceReducer.products),
  );

  // Skeleton
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Typography variant="h4" mb={2} mt={5}>
        Sản phẩm liên quan
      </Typography>
      <Grid container spacing={3}>
        {Relatedproducts.map((product) => (
          <Grid item xs={12} lg={3} sm={4} display="flex" alignItems="stretch" key={product.title}>
            {/* Product Card */}
            <BlankCard sx={{ p: 0 }} className="hoverCard">
              <Typography component={Link} to={`/apps/ecommerce/detail/${product.id}`}>
                {isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height={270}
                  ></Skeleton>
                ) : (
                  <img src={product.photo} alt="img" width="100%" />
                )}
              </Typography>
              <CardContent sx={{ p: 3, pt: 2 }}>
                <Typography fontWeight={600}>{product.title}</Typography>
                <Stack direction="column" spacing={1} mt={1}>
                  {/* <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5">{product.price.toLocaleString()} point</Typography>
                    <Typography color={'GrayText'} ml={1} sx={{ textDecoration: 'line-through' }}>
                      {product.salesPrice.toLocaleString()} point
                    </Typography>
                  </Stack> */}
                  {/* <Rating name="read-only" size="small" value={product.rating} readOnly /> */}
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="h6">{product.price}</Typography>
                      <img
                        src={logo}
                        alt="Logo"
                        style={{ width: '22px', height: '22px', marginLeft: '10px' }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        color="textSecondary"
                        ml={1}
                        sx={{ textDecoration: 'line-through' }}
                      >
                        {product.salesPrice}{' '}
                      </Typography>
                      <img
                        src={logo}
                        alt="Logo"
                        style={{ width: '18px', height: '18px', marginLeft: '5px' }}
                      />
                    </Box>
                    {/* <Typography
                          color="textSecondary"
                          ml={1}
                          sx={{ textDecoration: 'line-through' }}
                        >
                          {product.salesPrice}{' '}
                        </Typography> */}
                  </Stack>
                  <Stack direction="column" spacing={1} mt={1} sx={{ position: 'relative' }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Chip
                        sx={{
                          backgroundColor: '#13DEB9',
                          width: '100px',
                          textAlign: 'center',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          color: 'white',
                          display: 'block', // Ensures each Chip is on a new line
                        }}
                        label="Smart"
                        size="small"
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </BlankCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductRelated;
