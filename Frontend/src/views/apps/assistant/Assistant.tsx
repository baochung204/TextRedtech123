// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import ProductTableList from 'src/components/apps/assistant/Assiatant/Assistant';
import PageContainer from 'src/components/container/PageContainer';

const Assistant = () => {
  const nav = useNavigate();
  const handleAdd = () => {
    nav('/assistants/add');
  };
  return (
    <PageContainer title="Trợ lý" description="this is page">
      <Button
        onClick={handleAdd}
        variant="contained"
        color="primary"
        style={{ marginBottom: '20px' }} // Khoảng cách giữa ParentCard và Button
      >
        <AddIcon fontSize="small" style={{ marginRight: '8px' }} />
        Thêm mới
      </Button>

      {/* ------------------------------------------- */}
      {/* Left part */}
      {/* ------------------------------------------- */}
      <ProductTableList />
    </PageContainer>
  );
};

export default Assistant;
