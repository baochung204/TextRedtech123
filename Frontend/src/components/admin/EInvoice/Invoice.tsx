import { Box, Grid } from '@mui/material';
import { IconBox, IconChartBar, IconZoomMoney } from '@tabler/icons-react';
import RPoint from 'src/assets/images/logos/R-Point.png';
import TopCard from 'src/components/widgets/cards/TopCard';
import InvoiceTable from './component/InvoiceTable';

const dataSource = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Đơn hàng',
    total: '1907',
    icons: (
      <>
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
          <IconBox color="white" size={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'R-Point',
    total: '190.720.030',
    icons: (
      <>
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
          {/* <IconWashDrycleanOff color="white" size={30} /> */}{' '}
          <img src={RPoint} alt="RPoint" style={{ width: '24px', height: '24px' }} />,
        </Box>
      </>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Doanh thu',
    total: '123.456.789đ',
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
    title: 'Hoa hồng',
    total: '123.456.789đ',
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
        <IconZoomMoney color="white" size={30} />
      </Box>
    ),
  },
];

const Invoice = () => {
  return (
    <>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          {/* <TopCard dataSource={dataSource} totalColumn={4} /> */}
          <TopCard dataSource={dataSource} totalColumn={4} />
        </Grid>

        <Grid item xs={12}>
          <InvoiceTable />
        </Grid>
      </Grid>
    </>
  );
};

export default Invoice;
