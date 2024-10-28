import {
  Box,
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
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/images/logos/R-Point.png';
import emptyCart from 'src/assets/images/products/empty-shopping-cart.svg';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { fetchProducts } from 'src/store/user/products/productsUseSlice';
import { addToCart } from '../../../../store/apps/eCommerce/ECommerceSlice';
import BlankCard from '../../../shared/BlankCard';
import AlertCart from '../productCart/AlertCart';
import ProductSearch from './ProductSearch';
import ProductSelect from './ProductSelect';

interface Props {
  onClick: (event: React.SyntheticEvent | Event) => void;
}

const ProductList = ({ onClick }: Props) => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(9);
  const Products = useSelector((state: AppState) => state.products.data);

  useEffect(() => {
    dispatch(fetchProducts({ page: page, size: rowsPerPage }));
  }, [page, rowsPerPage]);

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    setPage(1);
    setRowsPerPage(selectedValue);
  };

  const handlePageChange = (_event: unknown, newPage: number) => {
    setPage(newPage + 1);
  };

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
            <ProductSelect />
            <ProductSearch />
          </Stack>
        </Box>
      </Stack>

      {/* Product Listing */}
      <Grid container spacing={3}>
        {Products.content.length > 0 ? (
          Products.content.map((product) => (
            <Grid
              item
              xs={12}
              lg={4}
              md={4}
              sm={6}
              display="flex"
              alignItems="stretch"
              key={product?.productId}
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
                  <Typography component={Link} to={`/shop/detail/${product?.productId}`}>
                    <Box
                      component="img"
                      src={product?.imageUrl}
                      alt={product?.productName}
                      sx={{
                        width: '100%',
                        height: 250,
                        objectFit: 'cover',
                      }}
                    />
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
                      {product?.productName}
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
                            {product.price}{' '}
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
                          <Typography variant="h6">
                            {product?.discount?.toLocaleString()}
                          </Typography>
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
                        {/* {product.category.map((category: any, index: number) => (
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
                      ))} */}
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Chip
                            sx={{
                              backgroundColor: '#13DEB9',
                              width: 'auto',
                              textAlign: 'center',
                              overflow: 'hidden',
                              whiteSpace: 'nowrap',
                              color: 'white',
                              display: 'block',
                            }}
                            label={product?.categoryName || 'tất cả'}
                            size="small"
                          />
                          <Tooltip title="Thêm giỏ hàng">
                            <Fab
                              size="small"
                              color="primary"
                              onClick={() => dispatch(addToCart(product as any)) && handleClick()}
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
                        </Stack>
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
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <img
                src={emptyCart}
                alt="Empty Cart"
                style={{ width: '40%', marginBottom: '16px' }}
              />
              <Typography variant="h6" color="textSecondary">
                Không có sản phẩm nào
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>

      <TablePagination
        component="div"
        count={Products.totalElements} // Use totalElements for the count
        rowsPerPageOptions={[9, 18, 27]}
        rowsPerPage={rowsPerPage}
        page={page - 1}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      {/* Cart alert */}
      <AlertCart handleClose={handleClose} open={cartalert} />
    </Box>
  );
};

export default ProductList;
