import React from 'react';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const historyaffiliate = () => {
  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '', title: 'Affiliate' },
  ];
  return (
    <>
      <BannerPage title="Lịch sử rút tiền" items={BCrumb} />
    </>
  );
};

export default historyaffiliate;
