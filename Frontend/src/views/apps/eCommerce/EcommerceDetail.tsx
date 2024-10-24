import { Grid } from '@mui/material';
import ProductCarousel from 'src/components/apps/ecommerce/productDetail/ProductCarousel';
import PageContainer from 'src/components/container/PageContainer';
import ProductDetail from 'src/components/apps/ecommerce/productDetail/ProductDetail';
import ProductDesc from 'src/components/apps/ecommerce/productDetail/ProductDesc';
import ProductRelated from 'src/components/apps/ecommerce/productDetail/ProductRelated';
import ChildCard from 'src/components/shared/ChildCard';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { AppState, dispatch } from 'src/store/Store';
import { fetchProductById } from 'src/store/user/products/productByIdUseSlice';
import { ProductInfoType } from 'src/store/user/products/type/productByIdType';

const EcommerceDetail = () => {
  const { id } = useParams();
  const productData = useSelector((state: AppState) => state.productById.data);
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);
  const [productInfo, setProductInfo] = useState<ProductInfoType | null>(null);
  const [productDetailInformation, setProductDetailInformation] = useState<string>('');
  const [productUserManual, setProductUserManual] = useState<string>('');

  useEffect(() => {
    if (productData?.productInfo) {
      setProductInfo(productData?.productInfo);
    }
    if (productData?.detailInformation) {
      setProductDetailInformation(productData?.detailInformation);
    }
    if (productData?.userManual) {
      setProductUserManual(productData?.userManual);
    }
  }, [productData]);
  return (
    <PageContainer title="Shop List" description="this is Shop List page">
      {/* breadcrumb */}

      <Grid container spacing={3} sx={{ maxWidth: { lg: '1055px', xl: '1200px' } }}>
        <Grid item xs={12} sm={12} lg={12}>
          <ChildCard>
            {/* ------------------------------------------- */}
            {/* Carousel */}
            {/* ------------------------------------------- */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={6}>
                <ProductCarousel productInfo={productInfo} />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <ProductDetail productInfo={productInfo} />
              </Grid>
            </Grid>
          </ChildCard>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <ProductDesc productDetailInformation={productDetailInformation} />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <ProductRelated />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default EcommerceDetail;
