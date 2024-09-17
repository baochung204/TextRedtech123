import React from 'react';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

<<<<<<< HEAD:Frontend/src/views/admin/management/publishermanager.tsx
const publishermanager = () => {
  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '', title: 'Danh sách Publisher' },
  ];
=======
const OrderProducts = () => {
>>>>>>> 0d67a131fa0304ae6b321ac40f012f83f8c0162c:Frontend/src/views/admin/orderproducts/orderproducts.tsx
  return (
    <>
      <BannerPage title="Quản lý Publisher" items={BCrumb} />
    </>
  );
};

export default OrderProducts;
