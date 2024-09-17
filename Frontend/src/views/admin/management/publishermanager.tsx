import React from 'react';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const publishermanager = () => {
  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '', title: 'Danh sách Publisher' },
  ];
  return (
    <>
      <BannerPage title="Quản lý Publisher" items={BCrumb} />
    </>
  );
};

export default publishermanager;
