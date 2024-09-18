import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
const Publishers = () => {
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

export default Publishers;
