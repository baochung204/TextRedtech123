import {
  Box,
  Button,
  CardContent,
  Chip,
  Fab,
  Grid,
  Skeleton,
  Stack,
  TablePagination,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { IconBasket, IconMenu2 } from '@tabler/icons-react';
import { filter, orderBy } from 'lodash';
import React, { useEffect, useState } from 'react';
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
import logo from 'src/assets/images/logos/R-Point.png';

interface Props {
  onClick: (event: React.SyntheticEvent | Event) => void;
}

const ProductList = ({ onClick }: Props) => {
  const dispatch = useDispatch();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
    if (sortBy === 'pointDesc') {
      products = orderBy(products, ['point'], ['desc']);
    }
    if (sortBy === 'pointAsc') {
      products = orderBy(products, ['point'], ['asc']);
    }
    if (sortBy === 'discount') {
      products = orderBy(products, ['discount'], ['desc']);
    }

    // FILTER PRODUCTS
    if (filters.tag !== 'All') {
      products = products.filter((_product) => _product.tag.includes(filters.tag));
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
        _product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      );
    }

    // FILTER PRODUCTS BY PRICE
    if (filters.point !== 'All') {
      const minMax = filters.point ? filters.point.split('-') : '';
      products = products.filter((_product) =>
        filters.point ? _product.point >= minMax[0] && _product.point <= minMax[1] : true,
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

  const paginatedData = getProducts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box>
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" pb={3}>
        {lgUp ? (
          <Typography variant="h5">Sản phẩm</Typography>
        ) : (
          <Fab
            onClick={onClick}
            color="primary"
            size="small"
            sx={{ margin: '0px 5px', width: '40px', height: '20px' }}
          >
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
        {paginatedData.length > 0 ? (
          paginatedData.map((product) => (
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
                  <Typography component={Link} to={`/shop/detail/${product.id}`}>
                    <img src={product.thumbnailUrl} alt={product.name} width="100%" />
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
                    <Typography variant="h6" sx={{ fontSize: '16px' }}>
                      {product.name}
                    </Typography>
                    <Stack direction="column" spacing={1} mt={1} flexGrow={1}>
                      <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <Typography
                            color="textSecondary"
                            ml={1}
                            my={1}
                            sx={{ textDecoration: 'line-through' }}
                          >
                            {product.discount}{' '}
                          </Typography>
                          <img
                            src={logo}
                            alt="Logo"
                            style={{ width: '18px', height: '18px', marginLeft: '5px' }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <Typography variant="h6">{product.point.toLocaleString()}</Typography>
                          <img
                            src={logo}
                            alt="Logo"
                            style={{ width: '22px', height: '22px', marginLeft: '10px' }}
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
                        {product.category.map((category: any, index: number) => (
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
                              label={category || 'tất cả'}
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
      <TablePagination
        rowsPerPageOptions={[3, 6, 9]}
        component="div"
        count={getProducts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_event, newPage) => handleChangePage(newPage)}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên mỗi trang"
      />
    </Box>
  );
};

export default ProductList;
