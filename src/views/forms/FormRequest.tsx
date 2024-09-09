import { Grid, Box, Typography } from '@mui/material';
import FVReques from 'src/components/forms/form-validation/FVRequest';
import ChildCard from 'src/components/shared/ChildCard';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from './../../components/container/PageContainer';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Form Request',
  },
];

const FormRequest = () => {
  return (
    <PageContainer title="Form Request" description="this is Form Request page">
      <Breadcrumb title="Form Request" items={BCrumb} />
      <Typography align="center" variant="h1" gutterBottom>
        Đề xuất tính năng
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        {/* <Grid container spacing={3} justifyContent="center"> */}
        <Grid item xs={12} sm={8} md={6}>
          <ChildCard>
            <FVReques />
          </ChildCard>
        </Grid>
        {/* </Grid> */}
      </Box>
    </PageContainer>
  );
};

export default FormRequest;
