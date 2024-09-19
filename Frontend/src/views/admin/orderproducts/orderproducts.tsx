import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

 const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '', title: 'Danh sách Publisher' },
  ];

const OrderProducts = () => {
  return (
    <>
      <BannerPage title="Quản lý Publisher" items={BCrumb} />
    </>
  );
};

export default OrderProducts;
