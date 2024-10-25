// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';

import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useParams } from 'react-router';
import ChildCard from 'src/components/shared/ChildCard';

import { useDispatch, useSelector } from 'src/store/Store';
import { fetchProducts } from 'src/store/apps/eCommerce/ECommerceSlice';

interface TabProps {
  children: React.ReactNode;
  index: number;
  value?: number;
}

// progress

const TabPanel = (props: TabProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
interface IProps {
  productDetailInformation: string | null;
}
const ProductDesc = ({ productDetailInformation }: IProps) => {
  const [value, setValue] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const dispatch = useDispatch();
  const Id: any = useParams();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const product: any = useSelector((state) => state.ecommerceReducer.products[Id.id - 1]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const dataDetailInformation = productDetailInformation;
  return (
    <ChildCard>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'grey.100' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="primary"
            allowScrollButtonsMobile
            scrollButtons
            indicatorColor="primary"
          >
            <Tab label="Thông tin chi tiết" {...a11yProps(0)} />
            <Tab label="Hướng dẫn sử dụng" {...a11yProps(1)} />
          </Tabs>
        </Box>
        {/* ------------------------------------------- */}
        {/* Decription */}
        {/* ------------------------------------------- */}
        <TabPanel value={value} index={0}>
          <Typography color="textSecondary" mt={4}>
            {dataDetailInformation}
          </Typography>
        </TabPanel>
        {/* ------------------------------------------- */}
        {/* Reviews Tab */}
        {/* ------------------------------------------- */}
        <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
            {/* Section 1: Introduction */}
            <Grid item xs={12}>
              <Typography variant="body1" mt={4}>
                {product?.hotro}
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </ChildCard>
  );
};

export default ProductDesc;
