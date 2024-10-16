// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ProductTableList from 'src/components/apps/ecommerce/ProductTableList/ProductTableList';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Shop',
  },
];

const EcomProductList = () => {
  return (
    <PageContainer title="Shop List" description="this is Shop List page">
      {/* breadcrumb */}
      <Breadcrumb title="Ecom-Shop" items={BCrumb} />

      {/* ------------------------------------------- */}
      {/* Left part */}
      {/* ------------------------------------------- */}
      <ProductTableList />
    </PageContainer>
  );
};

export default EcomProductList;
