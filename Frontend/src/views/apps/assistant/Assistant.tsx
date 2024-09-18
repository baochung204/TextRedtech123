// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import ProductTableList from 'src/components/apps/assistant/Assiatant/Assistant';
import PageContainer from 'src/components/container/PageContainer';
import BlankCard from 'src/components/shared/BlankCard';

const Assistant = () => {
  const nav = useNavigate();
  const handleAdd = () => {
    nav('/apps/assistant/add');
  };
  return (
    <PageContainer title="Assistant" description="this is Shop List page">
      {/* breadcrumb */}
      {/* <BannerPage title="Quản lý sản phẩm  " items={BCrumb} /> */}

      <Button
        onClick={handleAdd}
        variant="contained"
        color="primary"
        style={{ marginBottom: '20px' }} // Khoảng cách giữa ParentCard và Button
      >
        <AddIcon fontSize="small" style={{ marginRight: '8px' }} />
        Thêm mới
      </Button>
      <BlankCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}
        <ProductTableList />
      </BlankCard>
    </PageContainer>
  );
};

export default Assistant;
