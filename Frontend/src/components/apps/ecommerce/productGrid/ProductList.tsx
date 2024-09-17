import {
  Box,
  Button,
  CardContent,
  Chip,
  Fab,
  Grid,
  Skeleton,
  Stack,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { IconBasket, IconMenu2 } from '@tabler/icons-react';
import { filter, orderBy } from 'lodash';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import emptyCart from 'src/assets/images/products/empty-shopping-cart.svg';
import { useDispatch, useSelector } from 'src/store/Store';
import { ProductType } from 'src/types/apps/eCommerce';
import {
  addToCart,
  fetchProducts,
  filterReset,
} from '../../../../store/apps/eCommerce/ECommerceSlice';
import BlankCard from '../../../shared/BlankCard';
import AlertCart from '../productCart/AlertCart';
import ProductSearch from './ProductSearch';
import ProductSelect from './ProductSelect';
import logo from '../../../../assets/images/logos/R-Point.png';

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

  const getProducts = useSelector((state: any) =>
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
          <Stack direction="row" spacing={2} alignItems="center">
            {/* ProductSelect (Sort dropdown) */}
            <ProductSelect />

            {/* Search Box */}
            <ProductSearch />
          </Stack>
        </Box>
      </Stack>

      {/* Product Listing */}
      <Grid container spacing={3}>
        {getProducts.length > 0 ? (
          getProducts.map((product) => (
            <Grid
              item
              xs={12}
              lg={4}
              md={4}
              sm={6}
              display="flex"
              alignItems="stretch"
              key={product.id}
            >
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
                  <CardContent
                    sx={{
                      p: 3,
                      pt: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontSize: '20px' }}>
                      {product.title}
                    </Typography>
                    <Stack direction="column" spacing={1} mt={1} flexGrow={1}>
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
                            style={{ width: '25px', height: '25px', marginLeft: '10px' }}
                          />
                        </Box>
                        <Typography
                          color="textSecondary"
                          ml={1}
                          sx={{ textDecoration: 'line-through' }}
                        >
                          {product.salesPrice}{' '}
                        </Typography>
                      </Stack>
                      <Stack direction="column" spacing={1} mt={1} sx={{ position: 'relative' }}>
                        {product.category.map((category, index) => (
                          <Stack direction="row" spacing={1} alignItems="center" key={index}>
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
                              label={category}
                              size="small"
                            />
                            {index === 0 && (
                              <Tooltip title="Thêm giỏ hàng">
                                <Fab
                                  size="small"
                                  color="primary"
                                  onClick={() =>
                                    dispatch(addToCart(product as any)) && handleClick()
                                  }
                                  sx={{
                                    position: 'absolute',
                                    right: 0,
                                    top: 0,
                                    transform: 'translateY(-15%)',
                                  }}
                                >
                                  <IconBasket size="16" />
                                </Fab>
                              </Tooltip>
                            )}
                          </Stack>
                        ))}
                      </Stack>
                      <Typography sx={{ fontWeight: 'bold' }}></Typography>
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
              <Typography variant="h2">Không tìm thấy</Typography>
              <Typography variant="h6" mb={3}>
                Sản phẩm bạn tìm kiếm không tồn tại
              </Typography>
              <Button variant="contained" onClick={() => dispatch(filterReset())}>
                Thử lại
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ProductList;
