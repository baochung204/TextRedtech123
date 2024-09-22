import { Avatar, Box, Grid, MenuItem, Select, Stack, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconChartBar, IconGridDots } from '@tabler/icons-react';
import { Dayjs } from 'dayjs';
import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { default as Affilatechartadmin } from './Affilatechartadmin';
import Affilatechartadmin1 from './Affilatechartadmin1';
import Affilatechartadmin5 from './Affiliatechartadmin5';
import Affilatechartadmin6 from './Affiliatechartadmin6';
import Affilatechartadmin7 from './Affiliatechartadmin7';
import Affilatechartadmin8 from './Affiliatechartadmin8';
import GenChartAdmin from './GenChartAdmin';
import PieChartsAdmin from './PieChartsAdmin';
import RadialbarChartAdmin from './RadialbarChartAdmin';
import Topcardadmin from './Topcardadmin';

const dataFilter_bussiness = [
  { value: 1, label: 'Khách hàng' },
  { value: 2, label: 'Doanh thu' },
  { value: 3, label: 'Đơn hàng' },
  { value: 4, label: 'CVR' },
];

const dataFilter_token = [
  { value: 1, label: 'Tổng chi phí' },
  { value: 2, label: 'Tổng Tokens' },
  { value: 3, label: 'Chi phí Input' },
  { value: 4, label: 'Chi phí Output' },
  { value: 5, label: 'Tokens Input' },
  { value: 6, label: 'Tokens Output' },
];

const dataFilter_rpoint = [
  { value: 1, label: 'Doanh thu' },
  { value: 2, label: 'Khách hàng' },
  { value: 3, label: 'Đơn hàng' },
  { value: 4, label: 'Số dư R-Point' },
];

const dataFilter_affliate = [
  { value: 1, label: 'Publisher' },
  { value: 2, label: 'Khách hàng' },
  { value: 3, label: 'Đơn hàng' },
  { value: 4, label: 'Doanh thu' },
  { value: 1, label: 'Hoa hồng' },
  { value: 2, label: 'Số dư' },
  { value: 3, label: 'Yêu cầu rút tiền' },
  { value: 4, label: 'Số tiền rút' },
];

const dataFilter_sale = [
  { value: 1, label: 'Lượt áp mã' },
  { value: 2, label: 'Số tiền giảm' },
  { value: 3, label: 'Lượt mua Flash-sale' },
  { value: 4, label: 'Doanh thu Flash-sale' },
  { value: 1, label: 'Tỉ lệ mua Flash-sale' },
];

const dataFilter_order_bill = [
  { value: 1, label: 'Họp đồng R-Point' },
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
  { value: 2, label: 'Khách hàng' },
  { value: 3, label: 'Đánh giá > 3*' },
  { value: 4, label: 'Đánh giá < 3*' },
];

const dataFilter_customer = [
  { value: 1, label: 'Doanh thu / Khách hàng(tất cả)' },
  { value: 2, label: 'Doanh thu / Khách hàng(trả phi)' },
  { value: 3, label: 'Đơn hàng / Khách hàng(tất cả)' },
  { value: 4, label: 'Đơn hàng / Khách hàng(trả phí)' },
  { value: 5, label: 'AOV' },
];

const dataFilter_account = [
  { value: 1, label: 'Khách hàng' },
  { value: 2, label: 'Đơn hàng(nạp point)' },
  { value: 3, label: 'Doanh thu(đ)' },
  { value: 4, label: 'CVR(%)' },
];

const dataFilter_social = [
  { value: 1, label: 'Khách hàng' },
  { value: 2, label: 'Đơn hàng(nạp point)' },
  { value: 3, label: 'Doanh thu(đ)' },
  { value: 4, label: 'CVR(%)' },
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
    color: 'primary.main',
    title: 'Khách hàng',
    total: '190',
    icons: (
      <Box
        bgcolor="primary.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'CVR',
    total: '190',
    icons: (
      <Box
        bgcolor="warning.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đơn hàng',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Doanh thu',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
      </Box>
    ),
  },
];

const dataSource_rpoint = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Khách hàng',
    total: '190',
    icons: (
      <Box
        bgcolor="primary.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Doanh thu(point)',
    total: '190',
    icons: (
      <Box
        bgcolor="warning.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đơn hàng',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Số dư R-Point',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Lượt mua/sản phẩm',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Doanh thu/sản phẩm',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
      </Box>
    ),
  },
];

const dataSource_affiliate = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Publisher',
    total: '190',
    icons: (
      <Box
        bgcolor="primary.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Khách hàng',
    total: '190',
    icons: (
      <Box
        bgcolor="warning.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đơn hàng',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Doanh thu',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Hoa hồng',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Số dư Publisher',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đã thanh toán',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Chờ xử lý',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
      </Box>
    ),
  },
];

const dataSource_sale = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Mã khuyến mãi',
    total: '190',
    icons: (
      <Box
        bgcolor="primary.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Số lượng mã',
    total: '190',
    icons: (
      <Box
        bgcolor="warning.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đã sử dụng (lượt áp mã)',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Tỉ lệ sử dụng',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Số Flash-sale',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Lượt mua',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Doanh thu',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Tỉ lệ mua',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
      </Box>
    ),
  },
];

const dataSource_blog = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Bài viết',
    total: '190',
    icons: (
      <Box
        bgcolor="primary.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Lượt xem',
    total: '190',
    icons: (
      <Box
        bgcolor="warning.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Tổng doanh thu',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Số cảm xúc',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Tổng doanh thu',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Lượt xem / bài viết',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Doanh thu / bài viết',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
      </Box>
    ),
  },
];

const dataSource_ticket = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Đánh giá trung bình',
    total: '190',
    icons: (
      <Box
        bgcolor="primary.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Tickets',
    total: '190',
    icons: (
      <Box
        bgcolor="warning.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Khách hàng',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Đánh giá > 3*',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đánh giá < 3*',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
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
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Chưa xử lý',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
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
          <Grid container spacing={2}>
            <Grid item xs={12} lg={7}>
              <GenChartAdmin text={'Kinh doanh'} menuItems={dataFilter_bussiness} />
            </Grid>
            <Grid item xs={12} lg={5}>
              <Topcardadmin dataSource={dataSource} totalColumn={2} />
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
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <GenChartAdmin text={'Token'} menuItems={dataFilter_token} />
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
                      <Typography variant="h5">123.456.789 tokens</Typography>
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
                      <Typography variant="h5">190.720.030 tokens</Typography>
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
              <Affilatechartadmin7 menuItems={dataFilter_density} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Affilatechartadmin5 menuItems={dataFilter_type_account} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Affilatechartadmin6 />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ margin: '30px 0px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={7}>
              <GenChartAdmin text={'R-Point'} menuItems={dataFilter_rpoint} />
            </Grid>
            <Grid item xs={12} lg={5}>
              <Topcardadmin dataSource={dataSource_rpoint} totalColumn={2} />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ margin: '30px 0px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={7}>
              <GenChartAdmin text={'Affiliate'} menuItems={dataFilter_affliate} />
            </Grid>
            <Grid item xs={12} lg={5}>
              <Topcardadmin dataSource={dataSource_affiliate} totalColumn={2} />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ margin: '30px 0px' }}>
          <Grid container spacing={3}>
            {/* First Box */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  border: '1px solid #ccc',
                  padding: '16px',
                  borderRadius: '8px',
                  height: '100%', // Ensures both boxes have the same height
                }}
              >
                <Box>
                  <Typography
                    style={{ fontWeight: 'bold', marginRight: '16px', marginBottom: '20px' }}
                  >
                    Loại tài khoản
                  </Typography>
                  <Select defaultValue="" sx={{ minWidth: '200px' }}>
                    {dataFilter_type && Array.isArray(dataFilter_type) ? (
                      dataFilter_type.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem disabled>No options available</MenuItem>
                    )}
                  </Select>
                </Box>

                <Box sx={{ width: '50%' }}>
                  <Affilatechartadmin8 />
                </Box>
              </Box>
            </Grid>

            {/* Second Box */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  border: '1px solid #ccc',
                  padding: '16px',
                  borderRadius: '8px',
                  height: '100%', // Ensures both boxes have the same height
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box>
                  <Typography
                    style={{ fontWeight: 'bold', marginRight: '16px', marginBottom: '30px' }}
                  >
                    Loại tài khoản
                  </Typography>
                  <Select defaultValue="" sx={{ minWidth: '200px' }}>
                    {dataFilter_density2 && Array.isArray(dataFilter_density2) ? (
                      dataFilter_density2.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem disabled>No options available</MenuItem>
                    )}
                  </Select>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ margin: '30px 0px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={7}>
              <GenChartAdmin text={'Mã khuyến mãi'} menuItems={dataFilter_sale} />
            </Grid>
            <Grid item xs={12} lg={5}>
              <Topcardadmin dataSource={dataSource_sale} totalColumn={2} />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ margin: '30px 0px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7} lg={7}>
              <Box sx={{ width: '700px' }}>
                <GenChartAdmin text={'Hợp đồng - Hóa đơn'} menuItems={dataFilter_order_bill} />
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
          <Grid container spacing={2}>
            <Grid item xs={12} lg={7}>
              <GenChartAdmin text={'Blog'} menuItems={dataFilter_blog} />
            </Grid>
            <Grid item xs={12} lg={5}>
              <Topcardadmin dataSource={dataSource_blog} totalColumn={2} />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ margin: '30px 0px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={7}>
              <GenChartAdmin text={'Ticket hỗ trợ'} menuItems={dataFilter_ticket} />
            </Grid>
            <Grid item xs={12} lg={5}>
              <Topcardadmin dataSource={dataSource_ticket} totalColumn={2} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default DashboardAdmin;
