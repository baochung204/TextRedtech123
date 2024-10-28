import { Box, Grid, Tab, Tabs } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import used from 'src/assets/MaKhuyenMai/da su dung.png';
import sale from 'src/assets/MaKhuyenMai/ma khuyen mai.png';
import amountticket from 'src/assets/MaKhuyenMai/so luong ma.png';
import usagerate from 'src/assets/MaKhuyenMai/ty le su dung.png';
import HistoryVoucher from 'src/components/admin/voucher/historyvoucher';
import ListVoucher from 'src/components/admin/voucher/listvoucher';
import PageContainer from 'src/components/container/PageContainer';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import { AppDispatch, AppState } from 'src/store/Store';
import { fetchOverviewCounponData } from 'src/store/admin/counpon/counponlist/overview/counponSlice';
import FlashSale from './../../../components/admin/voucher/flashsale';
import { fetchOverviewFlashsaleData } from 'src/store/admin/counpon/flashsale/overview/flashsaleOverviewSlice';

const BCrumb = [
  {
    to: '/admin',
    title: 'Trang chủ',
  },
  { to: '/admin/personnel', title: 'Danh sách mã khuyến mãi' },
];

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const VoucherAdmin = () => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const dataCounponOverview = useSelector((state: AppState) => state.overview_counpon.dataa);
  const dataHistoryOverview = useSelector((state: AppState) => state.overview_flashsale.dataa);
  useEffect(() => {
    dispatch(fetchOverviewCounponData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOverviewFlashsaleData());
  }, [dispatch]);

  // console.log(dataStr);

  console.log(dataHistoryOverview);

  //list sale
  const totalVndCouponId = dataCounponOverview.totalVndCouponId;
  const totalVndCoupon = dataCounponOverview.totalVndCoupon;
  const totalUsed = dataCounponOverview.totalUsed;
  const percentUsed = dataCounponOverview.percentUsed;

  //list flash-sale
  const totalFlashSale = dataHistoryOverview.totalFlashSale;
  const totalQuantity = dataHistoryOverview.totalQuantity;
  const totalUsedFlashsle = dataHistoryOverview.totalUsed;
  const percentUsedFlashsale = dataHistoryOverview.percentUsed;

  console.log('dataHistoryOverview', dataHistoryOverview);

  const DataCounpon = [
    {
      bgColor: 'primary.light',
      title: 'Mã khuyến mãi',
      total: `${totalVndCouponId}`,
      icons: (
        <>
          <Box
            textAlign="center"
            padding={1}
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={sale} width={30} alt="Mã khuyến mãi" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Số lượng mã',
      total: `${totalVndCoupon}`,
      icons: (
        <>
          <Box
            textAlign="center"
            padding={1}
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={amountticket} width={30} alt="Số lượng mã" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Đã sử dụng',
      total: `${totalUsed}`,
      icons: (
        <>
          <Box
            textAlign="center"
            padding={1}
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={used} width={30} alt="Đã sử dụng" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Tỉ lệ sử dụng',
      total: `${percentUsed}`,
      icons: (
        <>
          <Box
            textAlign="center"
            padding={1}
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={usagerate} width={30} alt="Tỉ lệ sử dụng" />
          </Box>
        </>
      ),
    },
  ];

  const DataHistory = [
    {
      bgColor: 'primary.light',
      title: 'Tổng Flash-sale',
      total: `${totalFlashSale}`,
      icons: (
        <>
          <Box
            textAlign="center"
            padding={1}
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={sale} width={30} alt="Mã khuyến mãi" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Số lượng mã',
      total: `${totalQuantity}`,
      icons: (
        <>
          <Box
            textAlign="center"
            padding={1}
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={amountticket} width={30} alt="Số lượng mã" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Đã sử dụng',
      total: `${totalUsedFlashsle}`,
      icons: (
        <>
          <Box
            textAlign="center"
            padding={1}
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={used} width={30} alt="Đã sử dụng" />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Tỉ lệ sử dụng',
      total: `${percentUsedFlashsale}`,
      icons: (
        <>
          <Box
            textAlign="center"
            padding={1}
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={usagerate} width={30} alt="Tỉ lệ sử dụng" />
          </Box>
        </>
      ),
    },
  ];

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <PageContainer title="Mã khuyến mãi" description="this is page">
      <BannerPage title="Mã khuyến mãi" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: 'auto' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Danh sách mã khuyến mãi" {...a11yProps(0)} />
              <Tab label="Lịch sử Áp mã" {...a11yProps(1)} />
              <Tab label="Flash-Sale" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Grid item xs={12} sx={{ margin: '30px 0' }}>
              <TopCard dataSource={DataCounpon} totalColumn={4} />
            </Grid>
            <ListVoucher />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Grid item xs={12} sx={{ margin: '30px 0' }}>
              <TopCard dataSource={DataCounpon} totalColumn={4} />
            </Grid>
            <HistoryVoucher />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Grid item xs={12} sx={{ margin: '30px 0' }}>
              <TopCard dataSource={DataHistory} totalColumn={4} />
            </Grid>
            <FlashSale />
          </CustomTabPanel>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default VoucherAdmin;
