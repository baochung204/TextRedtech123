import React, { useEffect, useState } from 'react';
import {
  Box,
  CardContent,
  Chip,
  Fab,
  Grid,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { IconBasket } from '@tabler/icons-react';
import { Link, useParams } from 'react-router-dom';
import logo from 'src/assets/images/logos/R-Point.png';
import BlankCard from 'src/components/shared/BlankCard';
import { addToCart } from 'src/store/apps/eCommerce/ECommerceSlice';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { fetchProductById } from 'src/store/user/products/productByIdUseSlice';
import { fetchProducts } from 'src/store/user/products/productsUseSlice';
import AlertCart from '../productCart/AlertCart';
import Slider from 'react-slick';

interface DataProductType {
  productId: number;
  productName: string;
  categoryName: string;
  price: number;
  discount: number;
  imageUrl: string;
  isOwn: boolean;
}

const ProductRelated = () => {
  const { id } = useParams();
  const productById = useSelector((state: AppState) => state.productById.data);
  const categoryName = productById?.productInfo.category;
  const productData = useSelector((state: AppState) => state.products.data);
  const [rowsPerPage] = useState<number>(16);
  const [cartalert, setCartalert] = React.useState(false);
  const [relatedProducts, setRelatedProducts] = useState<DataProductType[]>([]);
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    dispatch(fetchProductById(id));
    dispatch(fetchProducts({ size: rowsPerPage, category: categoryName }));
  }, [dispatch, id, categoryName, rowsPerPage]);

  useEffect(() => {
    if (productData?.content) {
      const filteredProducts = productData.content.filter(
        (product: DataProductType) => product.productId !== parseInt(id as string, 10),
      );

      const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
      const selectedProducts = shuffled.slice(0, 16);
      setRelatedProducts(selectedProducts);
    }
  }, [productData, id]);

  const handleClose = (reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setCartalert(false);
  };

  const handleClick = () => {
    setCartalert(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false, // Add this line to disable default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h4" mb={2} mt={5}>
        Sản phẩm liên quan
      </Typography>
      <Slider {...settings}>
        {relatedProducts.map((product: DataProductType) => (
          <Box key={product?.productId} sx={{ px: 1 }}>
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                width={250}
                height={300}
                sx={{ borderRadius: (theme) => theme.shape.borderRadius / 5 }}
              />
            ) : (
              <BlankCard className="hoverCard" sx={{ position: 'relative', px: 2 }}>
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
                <CardContent sx={{ p: 3, pt: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ fontSize: '16px' }}>
                    {product?.productName}
                  </Typography>
                  <Stack direction="column" spacing={1} mt={1} flexGrow={1}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6">{product?.discount?.toLocaleString()}</Typography>
                        <img
                          src={logo}
                          alt="Logo"
                          style={{ width: '22px', height: '22px', marginLeft: '10px' }}
                        />
                      </Box>
                    </Stack>
                    <Stack direction="column" spacing={1} mt={1} sx={{ position: 'relative' }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip
                          sx={{
                            backgroundColor: '#13DEB9',
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
                            onClick={() => {
                              dispatch(addToCart(product?.productId));
                              handleClick();
                            }}
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
                  </Stack>
                </CardContent>
              </BlankCard>
            )}
            <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductRelated;
