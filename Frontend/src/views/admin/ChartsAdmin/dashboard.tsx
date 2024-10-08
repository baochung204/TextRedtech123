import { Avatar, Box, Grid, MenuItem, Stack, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconChartBar, IconGridDots } from '@tabler/icons-react';
import { Dayjs } from 'dayjs';
import React from 'react';
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
import rpointblance from 'src/assets/Adminphoto/so du r poi.png';
import flashsale from 'src/assets/Adminphoto/so flash sale.png';
import amountticketsale from 'src/assets/Adminphoto/so ma giam gia.png';
import balancepublisher from 'src/assets/Adminphoto/Số dư Publisher.png';
import ticket from 'src/assets/Adminphoto/ticket.png';
import totalrevenue from 'src/assets/Adminphoto/tong doanh thu.png';
import buyrate from 'src/assets/Adminphoto/ty le mua.png';
import usagerate from 'src/assets/Adminphoto/ty le su dung.png';
import cvr from 'src/assets/ICON/cvr.png';
import view from 'src/assets/NotificationAdmin/luot xem.png';
import SpeedometerChart from 'src/components/charrts/SpeedometerChart';
import PageContainer from 'src/components/container/PageContainer';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { default as Affilatechartadmin } from './Affilatechartadmin';
import Affilatechartadmin1 from './Affilatechartadmin1';
import Affilatechartadmin5 from './Affiliatechartadmin5';
import Affilatechartadmin7 from './Affiliatechartadmin7';
import Affilatechartadmin8 from './Affiliatechartadmin8';
import GenChartAdmin from './GenChartAdmin';
import PieChartsAdmin from './PieChartsAdmin';
import RadialbarChartAdmin from './RadialbarChartAdmin';
import Topcardadminhorizontal from './topcardadminhorizontal';
import customerperpublisher from 'src/assets/dashboardadmin/khach hang- publis.png';
import orderperpublisher from 'src/assets/dashboardadmin/đơn hàng-publis.png';
import revenueperpublisher from 'src/assets/dashboardadmin/doanh thu-publis.png';
import commissionperpublisher from 'src/assets/dashboardadmin/hoa hồng publis.png';
import revenueperorder from 'src/assets/dashboardadmin/doanh thu- don hnag.png';
import commissionperorder from 'src/assets/dashboardadmin/hoa dồng - đơn hàng.png';
import point from 'src/assets/images/logos/R-Point.png';

const dataFilter_bussiness = [
  { value: 1, label: 'Khách hàng' },
  { value: 2, label: 'Doanh thu' },
  { value: 3, label: 'Đơn hàng' },
];

const dataFilter_token = [
  { value: 1, label: 'Tổng chi phí' },
  { value: 2, label: 'Tổng số lượng token' },
  { value: 3, label: 'Chi phí Input' },
  { value: 4, label: 'Chi phí Output' },
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

const dataFilter_blog = [
  { value: 1, label: 'Lượt xem' },
  { value: 2, label: 'Doanh thu' },
  { value: 3, label: 'Số cảm xúc' },
];

const dataFilter_ticket = [
  { value: 1, label: 'Tickets' },
  { value: 2, label: 'Đánh giá > 3*' },
  { value: 3, label: 'Đánh giá < 3*' },
  // { value: 2, label: 'Khách hàng' },
];

const dataFilter_customer = [
  { value: 1, label: 'Doanh thu / Khách hàng(tất cả)' },
  { value: 2, label: 'Doanh thu / Khách hàng(trả phi)' },
  { value: 3, label: 'tỉ lệ khách hàng(doanh nghiệp)' },
  { value: 4, label: 'Tỉ lệ Khách hàng(trả phí)' },
];

const dataFilter_account = [
  { value: 1, label: 'Khách hàng' },
  { value: 2, label: 'Đơn hàng(nạp point)' },
  { value: 3, label: 'Doanh thu(đ)' },
  { value: 4, label: 'Loại khách hàng' },
];

const dataFilter_social = [
  { value: 1, label: 'Khách hàng' },
  { value: 2, label: 'Đơn hàng(nạp point)' },
  { value: 3, label: 'Doanh thu(đ)' },
  // { value: 4, label: 'CVR(%)' },
];

const dataFilter_density = [
  { value: 1, label: 'Chi phí / Khách hàng(đ)' },
  { value: 2, label: 'Tokens / Khách hàng(số)' },
  { value: 3, label: 'Chi phí / Doanh thu(%)' },
];

const dataFilter_type_account = [
  { value: 1, label: 'Tổng chi phí' },
  { value: 2, label: 'Chi phí Input' },
  { value: 3, label: 'Chi phí Output' },
  { value: 4, label: 'Tokens Input' },
  { value: 5, label: 'Tokens Output' },
];

const dataFilter_type = [
  { value: 1, label: 'Publisher' },
  { value: 2, label: 'Khách hàng' },
  { value: 3, label: 'Đơn hàng' },
  { value: 4, label: 'Doanh thu' },
  { value: 5, label: 'Hoa hồng' },
  { value: 6, label: 'Số dư' },
  { value: 7, label: 'Yêu cầu rút tiền' },
  { value: 8, label: 'Số tiền rút' },
];

const dataFilter_density2 = [
  { value: 1, label: 'Khách hàng / Publisher' },
  { value: 2, label: 'Đơn hàng / Publisher' },
  { value: 3, label: 'Doanh thu / Publisher' },
  { value: 3, label: 'Hoa hồng / Publisher' },
  { value: 3, label: 'Doanh thu / Đơn hàng' },
  { value: 3, label: 'Hoa hồng / Đơn hàng' },
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
    total: (
      <>
        <Box display="flex" alignItems="center" gap={0.4}>
          <Typography variant="h6">190</Typography>
          <img src={point} alt="" width={17} />
        </Box>
      </>
    ),
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
        <img src={rpointrevenue} width={30} />
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
  {
    bgColor: 'primary.light',
    title: 'Số dư R-Point',
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
        <img src={rpointblance} width={30} />
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
        <img src={customer} width={30} />
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

    title: 'Khách hàng / Publisher',
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
  {
    bgColor: 'primary.light',
    title: 'Doanh thu / Đơn hàng',
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
        <img src={revenueperpublisher} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Hoa hồng / Đơn hàng',
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
        <img src={commissionperorder} width={30} />
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
        {/* <IconChartBar color="white" size={30} /> */}
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
        {/* <IconChartBar color="white" size={30} /> */}
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
        <img src={totalrevenue} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',

    title: 'lượt xem trung bình / bài viết',
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

    title: 'Doanh thu / bài viết',
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
        {/* <IconChartBar color="white" size={30} /> */}
        <img src={blogrevenue} width={30} />
      </Box>
    ),
  },
];

const dataSource_ticket = [
  {
    bgColor: 'primary.light',
    title: 'Khách hàng',
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
        <img src={customer} width={30} />
      </Box>
    ),
  },
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
        {/* <IconChartBar color="white" size={30} /> */}
        <img src={ticket} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đánh giá trung bình',
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
        {/* <IconChartBar color="white" size={30} /> */}
        <img src={feedbackgreaterthan3} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đánh giá < 3*',
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
        {/* <IconChartBar color="white" size={30} /> */}
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
  const [value1, setValue1] = React.useState<Dayjs | null>(null);
  const [value2, setValue2] = React.useState<Dayjs | null>(null);

  return (
    <PageContainer title="Modern Dashboard" description="this is Modern Dashboard page">
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            margin: '10px 0',
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={value1}
              onChange={(newValue) => {
                setValue1(newValue);
              }}
              renderInput={(props) => (
                <CustomTextField
                  {...props}
                  fullWidth
                  size="small"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      width: '18px',
                      height: '18px',
                    },
                    '& .MuiFormHelperText-root': {
                      display: 'none',
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
          tới
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={value2}
              onChange={(newValue) => {
                setValue2(newValue);
              }}
              renderInput={(props) => (
                <CustomTextField
                  {...props}
                  fullWidth
                  size="small"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      width: '18px',
                      height: '18px',
                    },
                    '& .MuiFormHelperText-root': {
                      display: 'none',
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </div>
      </div>
      <Box>
        <Box sx={{ margin: '30px 0px' }}>
          <Typography variant={'h3'} sx={{ marginBottom: '10px' }}>
            Kinh doanh
          </Typography>
          <Grid>
            <Grid item xs={12}>
              <Topcardadminhorizontal dataSource={dataSource} totalColumn={4} />
              <Box sx={{ marginTop: '30px' }}>
                <GenChartAdmin text={''} menuItems={dataFilter_bussiness} />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <Affilatechartadmin menuItems={dataFilter_customer} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Affilatechartadmin1 menuItems={dataFilter_account} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <PieChartsAdmin menuItems={dataFilter_social} />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ margin: '30px 0px' }}>
          <Typography variant={'h3'} marginBottom={'10px'}>
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
                      <Typography variant="subtitle2" color="textSecondary">
                        Tổng chi phí
                      </Typography>
                      <Typography variant="h3" fontWeight="700">
                        351.216.213đ
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary">
                        123.456.789 tokens
                      </Typography>
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
                      <Typography variant="subtitle1" color="textSecondary">
                        987.654.321đ
                      </Typography>
                      <Typography variant="h5" fontSize={'15px'}>
                        123.456.789 tokens
                      </Typography>
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
                      <Typography variant="subtitle1" color="textSecondary">
                        123.456.789đ
                      </Typography>
                      <Typography variant="h5" fontSize={'15px'}>
                        190.720.030 tokens
                      </Typography>
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
              {/* <Affilatechartadmin6 /> */}
              <SpeedometerChart />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box sx={{ marginLeft: '20px' }}>
                <Stack spacing={3} mt={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box>
                      <Typography variant="h4" color="textSecondary">
                        Tổng
                      </Typography>
                      <Typography>
                        Chi phí / khách hàng:
                        <Typography variant="h6" fontWeight="700">
                          351.216.213đ
                        </Typography>
                      </Typography>
                      <Typography>
                        Tokens / khách hàng:
                        <Typography variant="h6" fontWeight="700">
                          197 token
                        </Typography>
                      </Typography>
                      <Typography>
                        Chi phí / doanh thu:
                        <Typography variant="h6" fontWeight="700">
                          30%
                        </Typography>
                      </Typography>
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
                      <Typography variant="h5">Chi phí / khách hàng(đ)</Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        987.654.321đ
                      </Typography>
                      <Typography variant="h5" fontSize={'15px'}>
                        197 khách hàng
                      </Typography>
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
                      <Typography variant="h5">Tokens / khách hàng(số)</Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        123.456.789 tokens
                      </Typography>
                      <Typography variant="h5" fontSize={'15px'}>
                        147 khách hàng
                      </Typography>
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
                      <Typography variant="h5">Chi phí / doanh thu(%)</Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        123.456.789đ
                      </Typography>
                      <Typography variant="h5" fontSize={'15px'}>
                        190.720.030đ
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
              <Topcardadminhorizontal dataSource={dataSource_rpoint} totalColumn={3} />
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
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7} lg={7}>
              <Typography variant={'h3'}>Hợp đồng - Hóa đơn</Typography>
              <Box sx={{ width: '700px' }}>
                <GenChartAdmin text={''} menuItems={dataFilter_order_bill} />
              </Box>
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
              <Box sx={{ width: '900px', height: 'auto', marginLeft: '28px' }}>
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
              <Topcardadminhorizontal dataSource={dataSource_ticket} totalColumn={3} />
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
