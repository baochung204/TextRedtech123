// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import { Button, IconButton } from '@mui/material';
import ProductTableList from 'src/components/apps/assistant/Assiatant/Assistant';
import PageContainer from 'src/components/container/PageContainer';
import BlankCard from 'src/components/shared/BlankCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Assistant = () => {
  const nav = useNavigate();
  const handleAdd = () => {
    nav('/assistants/add');
  };
  return (
    <PageContainer title="Trợ lý" description="this is page">
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
