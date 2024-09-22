import { Grid, Box, Typography } from '@mui/material';
import FVReques from 'src/components/forms/form-validation/FVRequest';
import ChildCard from 'src/components/shared/ChildCard';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from './../../components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';

const BCrumb = [
  {
    to: '/',
    title: 'Trang chủ',
  },
  {
    title: 'Đề xuất tính năng',
  },
];

const FormRequest = () => {
  return (
    <PageContainer title="Form Request" description="this is Form Request page">
      <BannerPage title="Đề xuất tính năng" items={BCrumb} />
      <Typography align="center" variant="h1" gutterBottom sx={{ mb: 3 }}>
        Đề xuất tính năng
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', border: 'none', pb: 1 }}
      >
        {/* <Grid container spacing={3} justifyContent="center"> */}
        <Grid item xs={12} sm={8} md={6}>
          <ChildCard sx={{ border: 'none' }}>
            <FVReques />
          </ChildCard>
        </Grid>
        {/* </Grid> */}
      </Box>
    </PageContainer>
  );
};

export default FormRequest;
