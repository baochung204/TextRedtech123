import { Box, Grid, Tab, Tabs } from '@mui/material';
// components
// import { styled } from '@mui/system';
import React, { useState } from 'react';
import HistoryVoucher from 'src/components/admin/voucher/historyvoucher';
import ListVoucher from 'src/components/admin/voucher/listvoucher';
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import FlashSale from './../../../components/admin/voucher/flashsale';
import { Icon360 } from '@tabler/icons-react';
import TopCard from 'src/components/widgets/cards/TopCard';
// const BoxStyled = styled(Box)(() => ({
//   padding: '24px',
//   transition: '0.1s ease-in',
//   cursor: 'pointer',
//   color: 'inherit',
//   // '&:hover': {
//   //   transform: 'scale(1.03)',
//   // },
// }));
const BCrumb = [
  {
    to: '/',
    title: 'Quản trị ',
  },
  { to: '/admin/personnel', title: 'Danh sách mã khuyến mãi' },
];

const DataBox = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Mã khuyến mãi',
    total: '620',
    icons: (
      <>
        <Icon360 size={30} />
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Số lượng mã',
    total: '3.455',
    icons: (
      <>
        <Icon360 size={30} />
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đã sử sử dụng',
    total: '3.931',
    icons: (
      <>
        <Icon360 size={30} />
      </>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Tỉ lệ sử dụng',
    total: '34.2%',
    icons: (
      <>
        <Icon360 size={30} />
      </>
    ),
  },
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const VoucherAdmin = () => {
  const [selected, setSelected] = useState<readonly string[]>([]);

  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  return (
    <PageContainer title="Vertical Form" description="this is Vertical Form page">
      <BannerPage title="Mã khuyến mãi" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={DataBox} totalColumn={4} />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: 'auto' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{ padding: '0px 50px' }}
            >
              <Tab label="Danh sách mã khuyến mãi" {...a11yProps(0)} />
              <Tab label="Lịch sử Áp mã" {...a11yProps(1)} />
              <Tab label="Flash-Sale" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <ListVoucher />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <HistoryVoucher />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <FlashSale />
          </CustomTabPanel>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default VoucherAdmin;
