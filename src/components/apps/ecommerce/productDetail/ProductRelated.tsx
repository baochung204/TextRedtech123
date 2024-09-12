import { Box, CardContent, Grid, Rating, Skeleton, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  const Relatedproducts = useSelector((state) =>
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
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5">{product.price.toLocaleString()} point</Typography>
                    <Typography color={'GrayText'} ml={1} sx={{ textDecoration: 'line-through' }}>
                      {product.salesPrice.toLocaleString()} point
                    </Typography>
                  </Stack>
                  <Rating name="read-only" size="small" value={product.rating} readOnly />
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
