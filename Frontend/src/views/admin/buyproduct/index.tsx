import PageContainer from 'src/components/container/PageContainer';
import { Grid } from '@mui/material';
import BuyProduct from 'src/components/admin/buyproduct';




const BuyPoints = () => {
  return (
    <PageContainer title="Personnel" description="this is Personnel page">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BuyProduct />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default BuyPoints;
