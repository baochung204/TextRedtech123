import React, { useEffect } from 'react';
import { filter, orderBy } from 'lodash';
import {
  Box,
  Grid,
  Stack,
  CardContent,
  useMediaQuery,
  Typography,
  Rating,
  Fab,
  Tooltip,
  Button,
  Theme,
  Skeleton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'src/store/Store';
import {
  fetchProducts,
  addToCart,
  filterReset,
} from '../../../../store/apps/eCommerce/ECommerceSlice';
import ProductSearch from './ProductSearch';
import { IconBasket, IconMenu2 } from '@tabler/icons-react';
import AlertCart from '../productCart/AlertCart';
import emptyCart from 'src/assets/images/products/empty-shopping-cart.svg';
import BlankCard from '../../../shared/BlankCard';
import { ProductType } from 'src/types/apps/eCommerce';

interface Props {
  onClick: (event: React.SyntheticEvent | Event) => void;
}

const ProductList = ({ onClick }: Props) => {
  const dispatch = useDispatch();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getVisibleProduct = (
    products: ProductType[],
    sortBy: string,
    filters: any,
    search: string,
  ) => {
    // SORT BY
    if (sortBy === 'newest') {
      products = orderBy(products, ['created'], ['desc']);
    }
    if (sortBy === 'priceDesc') {
      products = orderBy(products, ['price'], ['desc']);
    }
    if (sortBy === 'priceAsc') {
      products = orderBy(products, ['price'], ['asc']);
    }
    if (sortBy === 'discount') {
      products = orderBy(products, ['discount'], ['desc']);
    }

    // FILTER PRODUCTS
    if (filters.category !== 'All') {
      products = products.filter((_product) => _product.category.includes(filters.category));
    }

    // FILTER PRODUCTS BY GENDER
    if (filters.gender !== 'All') {
      products = filter(products, (_product) => _product.gender === filters.gender);
    }

    // FILTER PRODUCTS BY COLOR
    if (filters.color !== 'All') {
      products = products.filter((_product) => _product.colors.includes(filters.color));
    }

    // FILTER PRODUCTS BY SEARCH
    if (search !== '') {
      products = products.filter((_product) =>
        _product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      );
    }

    // FILTER PRODUCTS BY PRICE
    if (filters.price !== 'All') {
      const minMax = filters.price ? filters.price.split('-') : '';
      products = products.filter((_product) =>
        filters.price ? _product.price >= minMax[0] && _product.price <= minMax[1] : true,
      );
    }

    return products;
  };

  const getProducts = useSelector((state) =>
    getVisibleProduct(
      state.ecommerceReducer.products,
      state.ecommerceReducer.sortBy,
      state.ecommerceReducer.filters,
      state.ecommerceReducer.productSearch,
    ),
  );

  // for alert when added something to cart
  const [cartalert, setCartalert] = React.useState(false);

  const handleClick = () => {
    setCartalert(true);
  };

  const handleClose = (reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setCartalert(false);
  };

  // Skeleton
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Convert to VND
  const convertToVND = (amount: number, rate: number = 24000) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount * rate);
  };

  return (
    <Box>
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" pb={3}>
        {lgUp ? (
          <Typography variant="h5">Sản phẩm</Typography>
        ) : (
          <Fab onClick={onClick} color="primary" size="small">
            <IconMenu2 width="16" />
          </Fab>
        )}
        <Box>
          <ProductSearch />
        </Box>
      </Stack>

      {/* Product Listing */}
      <Grid container spacing={3}>
        {getProducts.length > 0 ? (
          getProducts.map((product) => (
            <Grid item xs={12} lg={4} md={4} sm={6} display="flex" alignItems="stretch" key={product.id}>
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  width={270}
                  height={300}
                  sx={{ borderRadius: (theme) => theme.shape.borderRadius / 5 }}
                />
              ) : (
                <BlankCard className="hoverCard" sx={{ position: 'relative' }}>
                  <Typography component={Link} to={`/apps/ecommerce/detail/${product.id}`}>
                    <img src={product.photo} alt={product.title} width="100%" />
                  </Typography>
                  <Tooltip title="Add To Cart">
                    <Fab
                      size="small"
                      color="primary"
                      onClick={() => dispatch(addToCart(product)) && handleClick()}
                      sx={{ bottom: '10px', right: '10px', position: 'absolute' }}
                    >
                      <IconBasket size="16" />
                    </Fab>
                  </Tooltip>
                  <CardContent sx={{ p: 3, pt: 2 }}>
                    <Typography variant="h6">{product.title}</Typography>
                    <Stack direction="column" spacing={1} mt={1}>
                      <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="h6">{convertToVND(product.price)}</Typography>
                        <Typography color="textSecondary" ml={1} sx={{ textDecoration: 'line-through' }}>
                          {convertToVND(product.salesPrice)}
                        </Typography>
                      </Stack>
                      <Rating name="read-only" size="small" value={product.rating} readOnly />
                    </Stack>
                  </CardContent>
                </BlankCard>
              )}
              <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box textAlign="center" mt={6}>
              <img src={emptyCart} alt="cart" width="200px" />
              <Typography variant="h2">No Products Found</Typography>
              <Typography variant="h6" mb={3}>
                The product you are searching is no longer available.
              </Typography>
              <Button variant="contained" onClick={() => dispatch(filterReset())}>
                Try Again
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ProductList;
