import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { Box, Grid } from '@mui/material';
import { IconBrandGoogleHome, IconCoinOff, IconCoins } from '@tabler/icons-react';
import { useState } from 'react';

import { IconBox } from '@tabler/icons-react';
import TopCard from 'src/components/widgets/cards/TopCard';
import PublisherTable from './component/PublisherTable';
// const dataSource = [
//   {
//     bgColor: 'primary.light',
//     color: 'primary.main',
//     title: 'Publisher',
//     total: '1907',
//     icons: IconUserDollar,
//   },
//   {
//     bgColor: 'warning.light',
//     color: 'warning.main',
//     title: 'Đơn hàng',
//     total: '8386',
//     icons: IconTruckDelivery,
//   },
//   {
//     bgColor: 'success.light',
//     color: 'success.main',
//     title: 'Hoa hồng',
//     total: '123.456.789đ',
//     icons: IconPigMoney,
//   },
//   {
//     bgColor: 'error.light',
//     color: 'error.main',
//     title: 'Chưa thanh toán',
//     total: '123.456.789đ',
//     icons: IconBusinessplan,
//   },
// ];

const DataBox = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Publisher',
    total: '1907',
    icons: (
      <>
        <Box
          bgcolor="primary.main"
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
          <IconBrandGoogleHome color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'Đơn hàng',
    total: '8386',
    icons: (
      <>
        <Box
          bgcolor="secondary.main"
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
          <IconBox color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Hoa hồng',
    total: '123.406.369 ₫',
    icons: (
      <>
        <Box
          bgcolor="success.main"
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
          <IconCoins color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Chưa thanh toán',
    total: '11.415.123 ₫',
    icons: (
      <>
        <Box
          bgcolor="warning.main"
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
          <IconCoinOff color="white" size={30} />
        </Box>
      </>
    ),
  },
];

// interface FilmsData {
//   title: string;
// }

// const FilmsData: FilmsData[] = [
//   { title: 'Tỉ lệ chuyển đổi' },
//   { title: 'Cấp Rank' },
//   { title: 'Tổng doanh thu' },
// ];

interface FilmsData {
  id: number;
  title: string;
}
const FilmsData: FilmsData[] = [
  { id: 1, title: 'ID publisher' },
  { id: 2, title: 'Đối tác' },
  { id: 3, title: 'Email' },
  { id: 4, title: 'SĐT' },
  { id: 5, title: 'Loại hình' },
  { id: 6, title: 'Ngày đăng ký' },
  { id: 7, title: 'Trạng thái tài khoản' },
  { id: 8, title: 'Rank' },
  { id: 9, title: 'Hồ sơ' },
  { id: 10, title: 'Hợp đồng Affiliate' },
  { id: 11, title: 'Tổng hoa hồng' },
  { id: 12, title: 'Click' },
  { id: 13, title: 'Khách hàng' },
  { id: 14, title: 'Đơn hàng' },
  { id: 15, title: 'Doanh thu' },
  { id: 16, title: 'CVR' },
  { id: 17, title: 'Số dư ví' },
  { id: 18, title: 'Đang xử lý' },
  { id: 19, title: 'Đã hoàn thành' },
];
const PublisherAffiliate = () => {
  return (
    <>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          {/* <Grid container spacing={3}>
            {dataSource.map((items, index) => {
              return (
                <Grid item lg={3} sm={6} xs={12} key={index}>
                  <BoxStyled
                    sx={{
                      backgroundColor: items.bgColor,
                      color: items.color,
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        xs={3}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <items.icons />
                      </Grid>
                      <Grid item xs={9}>
                        <Typography style={{ fontSize: '19px' }} variant="h4">
                          {items.title}
                        </Typography>
                        <Typography variant="h5">{items.total}</Typography>
                      </Grid>
                    </Grid>
                  </BoxStyled>
                </Grid>
              );
            })}
          </Grid> */}
          <TopCard dataSource={DataBox} totalColumn={4} />
        </Grid>

        <Grid item xs={12}>
          <PublisherTable />
        </Grid>
      </Grid>
    </>
  );
};

export default PublisherAffiliate;
