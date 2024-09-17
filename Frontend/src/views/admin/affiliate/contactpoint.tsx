import React from 'react';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const contactpoint = () => {
  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '', title: 'Quản lý hợp đồng' },
  ];
  return (
    <>
      <BannerPage title="Hợp đồng R-Point" items={BCrumb} />
    </>
  );
};

export default contactpoint;
