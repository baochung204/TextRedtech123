// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';
// import PageContainer from '../../components/container/PageContainer';
// import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
// import ParentCard from '../../components/shared/ParentCard';
import { Props } from 'react-apexcharts';
import PageContainer from 'src/components/container/PageContainer';
import ParentCard from 'src/components/shared/ParentCard';

const RadialbarChartAdmin = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const success = theme.palette.success.main;
  const warning = theme.palette.warning.main;

  const optionsradialchart: Props = {
    chart: {
      id: 'pie-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
    },
    colors: [primary, secondary, success, warning],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter() {
              return 249;
            },
          },
        },
      },
    },
    tooltip: {
      theme: 'dark',
    },
  };
  const seriesradialchart: any = [44, 55, 67, 83];

  return (
    <PageContainer title="Radialbar & Radar Chart" description="this is innerpage">
      <Grid container spacing={3}>
        <Grid item lg={6} md={12} xs={12}>
          <ParentCard title="Chi tiết theo">
            <Chart
              options={optionsradialchart}
              series={seriesradialchart}
              type="radialBar"
              height="300px"
            />
          </ParentCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default RadialbarChartAdmin;
