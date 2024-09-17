import React from 'react';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const contactaffiliate = () => {
  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '', title: 'Quản lý hợp đồng' },
  ];
  return (
    <>
      <BannerPage title="Hợp đồng affiliate" items={BCrumb} />
    </>
  );
};

export default contactaffiliate;
