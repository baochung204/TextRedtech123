import {
  Box,
  Grid
} from '@mui/material';
import {
  IconBrandCashapp,
  IconBrandGumroad,
  IconChartArcs,
  IconNumber
} from '@tabler/icons-react';

import TopCard from 'src/components/widgets/cards/TopCard';
import HistoryTable from './component/HistoryTable';
const dataSource = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Số ưu cầu',
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
          <IconNumber color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Số tiền rút',
    total: '190.720.030đ',
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
          <IconBrandCashapp color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đã xử lý',
    total: '123.406.789đ',
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
          <IconBrandGumroad color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Chờ xử lý',
    total: '123.406.789đ',
    icons: (
      <>
        <Box
          bgcolor="error.main"
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
          <IconChartArcs color="white" size={30} />
        </Box>
      </>
    ),
  },
];

interface FilmsData {
  id: number;
  title: string;
}
const FilmsData: FilmsData[] = [
  { id: 1, title: 'File' },
  { id: 2, title: 'Dung lượng' },
  { id: 3, title: 'Functions' },
  { id: 4, title: 'Token huấn luyện' },
  { id: 5, title: 'Ngày tạo' },
  { id: 6, title: 'Vòng quay trung bình' },
  { id: 7, title: 'khách hàng' },
  { id: 8, title: 'Đơn hàng' },
  { id: 9, title: 'CVR' },
  { id: 10, title: 'GMV' },
  { id: 11, title: 'Chi phí' },
  { id: 12, title: 'Chi phí/Doanh thu' },
  { id: 13, title: 'Chi phí/Đơn hàng' },
  { id: 14, title: 'Chi phí/Khách hàng' },
  { id: 15, title: 'Chiến lược' },
];
const HistoryAffiliate = () => {

  return (
    <>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={dataSource} totalColumn={4} />
        </Grid>

        <Grid item xs={12}>
          <HistoryTable />
        </Grid>
      </Grid>
    </>
  );
};

export default HistoryAffiliate;
