import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import { IconChartBar, IconGridDots } from '@tabler/icons-react';
import blog from 'src/assets/Adminphoto/bai viet.png';
import reaction from 'src/assets/Adminphoto/cam xuc.png';
import pending from 'src/assets/Adminphoto/cho xu ly.png';
import processing from 'src/assets/Adminphoto/chua xu ly.png';
import used from 'src/assets/Adminphoto/da su dung luot ap ma.png';
import checkoutsuccess from 'src/assets/Adminphoto/da thanh toan.png';
import feedbacksmallerthan3 from 'src/assets/Adminphoto/danh gia duoi 3.png';
import feedbackgreaterthan3 from 'src/assets/Adminphoto/danh gia tren 3.png';
import feedbacknormal from 'src/assets/Adminphoto/danh gia trung binh.png';
import blogrevenue from 'src/assets/Adminphoto/doanh thu bai viet.png';
import rpointrevenue from 'src/assets/Adminphoto/doanh thu r poi.png';
import productrevenue from 'src/assets/Adminphoto/doanh thu san pham.png';
import revenue from 'src/assets/Adminphoto/doanh thu.png';
import bill from 'src/assets/Adminphoto/dơn hang.png';
import commission from 'src/assets/Adminphoto/hoa hong.png';
import customer from 'src/assets/Adminphoto/khách hàng.png';
import amountbuy from 'src/assets/Adminphoto/luot mua san pham.png';
import amountview from 'src/assets/Adminphoto/luot xem bai viet.png';
import ticketsale from 'src/assets/Adminphoto/ma giam gia.png';
import publisher from 'src/assets/Adminphoto/Publisher.png';
import flashsale from 'src/assets/Adminphoto/so flash sale.png';
import amountticketsale from 'src/assets/Adminphoto/so ma giam gia.png';
import balancepublisher from 'src/assets/Adminphoto/Số dư Publisher.png';
import ticket from 'src/assets/Adminphoto/ticket.png';
import buyrate from 'src/assets/Adminphoto/ty le mua.png';
import usagerate from 'src/assets/Adminphoto/ty le su dung.png';
import revenueperpublisher from 'src/assets/dashboardadmin/doanh thu-publis.png';
import commissionperpublisher from 'src/assets/dashboardadmin/hoa hồng publis.png';
import customerperpublisher from 'src/assets/dashboardadmin/khach hang- publis.png';
import orderperpublisher from 'src/assets/dashboardadmin/đơn hàng-publis.png';
import cvr from 'src/assets/ICON/cvr.png';
import point from 'src/assets/images/logos/R-Point.png';
import view from 'src/assets/NotificationAdmin/luot xem.png';
import SpeedometerChart from 'src/components/charrts/SpeedometerChart';
import PageContainer from 'src/components/container/PageContainer';
import Affilatechartadmin1 from './Affilatechartadmin1';
import Affilatechartadmin5 from './Affiliatechartadmin5';

import Affilatechartadmin9 from './Affiliatechartadmin9';

import DateSelect from 'src/components/apps/date/DateSelect';
import GenChartAdmin from './GenChartAdmin';
import PieChartsAdmin from './PieChartsAdmin';
import RadialbarChartAdmin from './RadialbarChartAdmin';
import Topcardadminhorizontal from './topcardadminhorizontal';

const dataFilter_bussiness = [
  { value: 1, label: 'Khách hàng' },
  { value: 2, label: 'Doanh thu' },
  { value: 3, label: 'Đơn hàng' },
];

const dataFilter_token = [
  { value: 1, label: 'Tổng chi phí' },
  { value: 2, label: 'Chi phí Input' },
  { value: 3, label: 'Chi phí Output' },
  { value: 4, label: 'Tổng token' },
  { value: 5, label: 'Tokens Input' },
  { value: 6, label: 'Tokens Output' },
];

const dataFilter_rpoint = [
  { value: 1, label: 'Doanh thu' },
  { value: 2, label: 'Đơn hàng' },
];

const dataFilter_affliate = [
  { value: 1, label: 'Publisher' },
  { value: 2, label: 'Khách hàng' },
  { value: 3, label: 'Đơn hàng' },
  { value: 4, label: 'Doanh thu' },
  { value: 5, label: 'Hoa hồng' },
  // { value: 6, label: 'Số dư' },
  // { value: 7, label: 'Yêu cầu rút tiền' },
  // { value: 8, label: 'Số tiền rút' },
];

const dataFilter_sale = [
  // { value: 1, label: 'Lượt áp mã' },
  { value: 1, label: 'Số tiền giảm' },
  { value: 2, label: 'Lượt mua Flash-sale' },
  { value: 3, label: 'Doanh thu Flash-sale' },
  // { value: 1, label: 'Tỉ lệ mua Flash-sale' },
];

const dataFilter_order_bill = [
  { value: 1, label: 'Hợp đồng nguyên tắc' },
  { value: 2, label: 'Hợp đồng Affiliate' },
  { value: 3, label: 'E-Invoice' },
];

// const dataFilter_blog = [
//   { value: 1, label: 'Lượt xem' },
//   { value: 2, label: 'Doanh thu' },
//   { value: 3, label: 'Số cảm xúc' },
// ];

const dataFilter_ticket = [
  { value: 1, label: 'Tickets' },
  { value: 2, label: 'Đánh giá > 3*' },
  { value: 3, label: 'Đánh giá ≤ 3*' },
  // { value: 2, label: 'Khách hàng' },
];

// const dataFilter_customer = [
//   { value: 1, label: 'Doanh thu / Khách hàng(tất cả)' },
//   { value: 2, label: 'Doanh thu / Khách hàng(trả phi)' },
//   { value: 3, label: 'tỉ lệ khách hàng(doanh nghiệp)' },
//   { value: 4, label: 'Tỉ lệ Khách hàng(trả phí)' },
// ];

const dataFilter_account = [
  { value: 1, label: 'Khách hàng' },
  { value: 2, label: 'Đơn hàng (point)' },
  { value: 3, label: 'Doanh thu (đ)' },
  // { value: 4, label: 'Loại khách hàng' },
];

const dataFilter_social = [
  { value: 1, label: 'Khách hàng' },
  { value: 2, label: 'Đơn hàng (point)' },
  { value: 3, label: 'Doanh thu (đ)' },
];

const dataFilter_type_account = [
  { value: 1, label: 'Tổng chi phí' },
  { value: 2, label: 'Chi phí Input' },
  { value: 3, label: 'Chi phí Output' },
  { value: 4, label: 'Tổng token' },
  { value: 5, label: 'Tokens Input' },
  { value: 6, label: 'Tokens Output' },
];

const dataFilter_detail = [
  { value: 1, label: 'Tổng' },
  { value: 2, label: 'Đã ký / Đã xuất' },
  { value: 3, label: 'Chờ ký / Chờ xuất' },
  { value: 4, label: 'Từ chối' },
];

const dataSource = [
  {
    bgColor: 'primary.light',

    title: 'Khách hàng',
    total: '190',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <IconChartBar color="white" size={30} /> */}
        <img src={customer} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',

    title: 'CVR',
    total: '30%',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={cvr} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Chuyển đổi',
    total: '123',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={bill} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Doanh thu',
    total: '234.567đ',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={revenue} width={30} />
      </Box>
    ),
  },
];

const dataSource_rpoint = [
  {
    bgColor: 'primary.light',
    title: 'Đơn hàng',
    total: '123',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={bill} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Doanh thu',
    total: '190',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={point} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Doanh thu/sản phẩm',
    total: '23',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={productrevenue} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Lượt mua/sản phẩm',
    total: '123',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={amountbuy} width={30} />
      </Box>
    ),
  },
];

const dataSource_affiliate = [
  {
    bgColor: 'primary.light',
    title: 'Publisher',
    total: '190',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={publisher} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Khách hàng',
    total: '190',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconChartBar color="white" size={30} />
        <img src={customer} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đơn hàng',
    total: '123',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={bill} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Doanh thu',
    total: '123.456.789đ',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={revenue} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Hoa hồng',
    total: '123.456.789đ',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={commission} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Số dư Publisher',
    total: '234.567đ',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={balancepublisher} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đã thanh toán',
    total: '123.456.789đ',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={checkoutsuccess} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Chờ xử lý',
    total: '234.567.789đ',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={pending} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Khách hàng/Pub',
    total: '23',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={customerperpublisher} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đơn hàng / Publisher',
    total: '23',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={orderperpublisher} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Doanh thu / Publisher',
    total: '789.567đ',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={revenueperpublisher} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Hoa hồng / Publisher',
    total: '456.789đ',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={commissionperpublisher} width={30} />
      </Box>
    ),
  },
];

const dataSource_sale = [
  {
    bgColor: 'primary.light',
    title: 'Mã khuyến mãi',
    total: '190',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={ticketsale} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',

    title: 'Số lượng mã',
    total: '190',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={amountticketsale} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',

    title: 'Đã sử dụng',
    total: '123',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={used} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',

    title: 'Tỉ lệ sử dụng',
    total: '23%',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={usagerate} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',

    title: 'Số Flash-sale',
    total: '123',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={flashsale} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',

    title: 'Lượt mua',
    total: '23',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={amountbuy} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Doanh thu',
    total: '123.456đ',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={revenue} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Tỉ lệ mua',
    total: '23%',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={buyrate} width={30} />
      </Box>
    ),
  },
];

const dataSource_blog = [
  {
    bgColor: 'primary.light',
    title: 'Bài viết',
    total: '190',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={blog} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Lượt xem',
    total: '190',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={view} width={30} />
      </Box>
    ),
  },

  {
    bgColor: 'primary.light',
    title: 'Số lượt like',
    total: '23',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={reaction} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Tổng doanh thu',
    total: '123.456',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={rpointrevenue} width={40} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Lượt xem / Bài viết',
    total: '23',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={amountview} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Doanh thu / Bài viết',
    total: '234.567',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={blogrevenue} width={30} />
      </Box>
    ),
  },
];

const dataSource_ticket = [
  {
    bgColor: 'primary.light',
    title: 'Tickets',
    total: '190',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={ticket} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đánh giá trung bình',
    total: '4.5',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={feedbacknormal} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đánh giá > 3*',
    total: '23',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={feedbackgreaterthan3} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đánh giá ≤ 3*',
    total: '123',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={feedbacksmallerthan3} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Chưa đánh giá',
    total: '23',
    icons: (
      <Box
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={processing} width={30} />
      </Box>
    ),
  },
];

const DashboardAdmin = () => {
  return (
    <PageContainer title="Modern Dashboard" description="this is Modern Dashboard page">
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <DateSelect />
      </div>
      <Box>
        <Box sx={{ margin: '30px 0px' }}>
          <Typography variant={'h3'} sx={{ marginBottom: '10px' }}>
            Kinh doanh
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Topcardadminhorizontal dataSource={dataSource} totalColumn={4} />
            </Grid>

            <Grid container item xs={12} spacing={2}>
              <Grid item xs={12} md={8}>
                <Box>
                  <GenChartAdmin text={''} menuItems={dataFilter_bussiness} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <PieChartsAdmin menuItems={dataFilter_social} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <Affilatechartadmin1 menuItems={dataFilter_account} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Affilatechartadmin9 />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box>
                <Stack spacing={3} mt={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      width={40}
                      height={40}
                      bgcolor="primary.light"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography color="primary" variant="h6" display="flex">
                        <IconGridDots width={21} />
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary">
                        Doanh thu / Khách trả phí
                      </Typography>
                      <Typography variant="h5" fontWeight="700">
                        351.216.213đ
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
                <Stack spacing={3} mt={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      width={40}
                      height={40}
                      bgcolor="primary.light"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography color="primary" variant="h6" display="flex">
                        <IconGridDots width={21} />
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary">
                        Doanh thu / Khách hàng (All)
                      </Typography>
                      <Typography variant="h5" fontWeight="700">
                        351.216.213đ
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Box>
              {/* <Affilatechartadmin13 /> */}
            </Grid>
          </Grid>
        </Box>
        {/* <Box sx={{ marginTop: '30px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <Affilatechartadmin11 />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Affilatechartadmin12 />
            </Grid>
          </Grid>
        </Box> */}
        <Box sx={{ margin: '30px 0px' }}>
          <Typography variant={'h3'} marginTop={'10px'}>
            Chi phí
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Box sx={{ marginTop: '30px' }}>
                <GenChartAdmin text={'Token'} menuItems={dataFilter_token} />
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box sx={{ marginLeft: '20px' }}>
                <Stack spacing={3} mt={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      width={40}
                      height={40}
                      bgcolor="primary.light"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography color="primary" variant="h6" display="flex">
                        <IconGridDots width={21} />
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h5" color="textSecondary">
                        Tổng chi phí
                      </Typography>
                      <Typography variant="h5" fontWeight="700">
                        351.216.213đ
                      </Typography>
                      <Typography color="textSecondary">123.456.789 tokens</Typography>
                    </Box>
                  </Stack>
                </Stack>
                <Stack spacing={3} my={5}>
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      sx={{
                        width: 9,
                        mt: 1,
                        height: 9,
                        bgcolor: '#1976d2',
                        svg: { display: 'none' },
                      }}
                    ></Avatar>
                    <Box>
                      <Typography variant="h5">Input</Typography>
                      <Typography variant="h5" color="textSecondary">
                        987.654.321đ
                      </Typography>
                      <Typography fontSize={'15px'}>123.456.789 tokens</Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      sx={{
                        width: 9,
                        mt: 1,
                        height: 9,
                        bgcolor: '#1976d2',
                        svg: { display: 'none' },
                      }}
                    ></Avatar>
                    <Box>
                      <Typography variant="h5">Output</Typography>
                      <Typography variant="h5" color="textSecondary">
                        123.456.789đ
                      </Typography>
                      <Typography fontSize={'15px'}>190.720.030 tokens</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <Affilatechartadmin5 menuItems={dataFilter_type_account} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <SpeedometerChart />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box>
                <Stack spacing={3} mt={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      width={40}
                      height={40}
                      bgcolor="primary.light"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography color="primary" variant="h6" display="flex">
                        <IconGridDots width={21} />
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary">
                        Chi phí / doanh thu:
                      </Typography>
                      <Typography variant="h5" fontWeight="700">
                        30%
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
                <Stack spacing={3} mt={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      width={40}
                      height={40}
                      bgcolor="primary.light"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography color="primary" variant="h6" display="flex">
                        <IconGridDots width={21} />
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary">
                        Chi phí / khách hàng:
                      </Typography>
                      <Typography variant="h5" fontWeight="700">
                        19.703đ
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
                <Stack spacing={3} mt={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      width={40}
                      height={40}
                      bgcolor="primary.light"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography color="primary" variant="h6" display="flex">
                        <IconGridDots width={21} />
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="textSecondary">
                        Tokens / khách hàng:
                      </Typography>
                      <Typography variant="h5" fontWeight="700">
                        197.000
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ margin: '30px 0px' }}>
          <Typography variant={'h3'} marginBottom={'10px'}>
            R-Point
          </Typography>
          <Grid>
            <Grid item xs={12}>
              <Topcardadminhorizontal dataSource={dataSource_rpoint} totalColumn={4} />
              <Box sx={{ marginTop: '30px' }}>
                <GenChartAdmin text={''} menuItems={dataFilter_rpoint} />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ margin: '30px 0px' }}>
          <Typography variant={'h3'} marginBottom={'10px'}>
            Affiliate
          </Typography>
          <Grid>
            <Grid item xs={12}>
              <Topcardadminhorizontal dataSource={dataSource_affiliate} totalColumn={4} />
              <Box sx={{ marginTop: '30px' }}>
                <GenChartAdmin text={''} menuItems={dataFilter_affliate} />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ margin: '30px 0px' }}>
          <Typography variant={'h3'} marginBottom={'10px'}>
            Mã khuyến mãi
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Topcardadminhorizontal dataSource={dataSource_sale} totalColumn={4} />
              <Box sx={{ marginTop: '30px' }}>
                <GenChartAdmin text={''} menuItems={dataFilter_sale} />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Typography variant={'h3'}>Hợp đồng - Hóa đơn</Typography>
        <Box>
          <Grid container>
            <Grid item xs={12} md={8} lg={8}>
              <Box sx={{ width: '750px' }}>
                <GenChartAdmin text={''} menuItems={dataFilter_order_bill} />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Box sx={{ width: '800px', height: 'auto' }}>
                <RadialbarChartAdmin menuItems={dataFilter_detail} />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ margin: '30px 0px' }}>
          <Typography variant="h3" sx={{ marginBottom: '10px' }}>
            Blog
          </Typography>
          <Grid>
            <Grid item xs={12}>
              <Topcardadminhorizontal dataSource={dataSource_blog} totalColumn={3} />
              {/* <Box sx={{ marginTop: '30px' }}>
                <GenChartAdmin text={''} menuItems={dataFilter_blog} />
              </Box> */}
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ margin: '30px 0px' }}>
          <Typography variant={'h3'} sx={{ marginBottom: '10px' }}>
            Ticket hỗ trợ
          </Typography>
          <Grid>
            <Grid item xs={12}>
              <Topcardadminhorizontal dataSource={dataSource_ticket} totalColumn={5} />
              <Box sx={{ marginTop: '30px' }}>
                <GenChartAdmin text={''} menuItems={dataFilter_ticket} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default DashboardAdmin;
