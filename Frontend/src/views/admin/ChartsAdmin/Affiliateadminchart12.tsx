// import React from 'react';
import { Box, MenuItem } from '@mui/material';
import React from 'react';
import Chart, { Props } from 'react-apexcharts';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import Affilatec from 'src/components/shared/Affilatec';

const Affilatechartadmin = ({ menuItems }: { menuItems: any }) => {
  const seriesdoughnutchart = [35, 65];

  const optionsdoughnutchart: Props = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#000000',
      events: {
        mounted: (chart: any) => {
          chart.w.globals.seriesTotals.reduce((a: any, b: any) => a + b, 0);
          const maxValue = Math.max(...seriesdoughnutchart);
          const maxIndex = seriesdoughnutchart.indexOf(maxValue);
          optionsdoughnutchart.labels ? optionsdoughnutchart.labels[maxIndex] : '';

          // Custom label for center text
          chart.updateOptions({
            annotations: {
              position: 'front',
              text: {
                x: 0,
                y: 0,
                text: `${maxValue}%`,
                textAnchor: 'middle',
                dominantBaseline: 'middle',
                style: {
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#000000', // màu đen
                },
              },
            },
          });
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Chỉ số',
              formatter: () => `${Math.max(...seriesdoughnutchart)}`,
              fontWeight: 'bold',
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: ['#4cb8c4', '#3cd3ad'],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels: ['Doanh thu', 'Khách hàng trả phí'],
  };

  return (
    <Affilatec title="Khách hàng" text="Doanh thu/Khách hàng trả phí" description={''}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Chart
          options={optionsdoughnutchart}
          series={seriesdoughnutchart}
          type="donut"
          height="300px"
        />
      </Box>
    </Affilatec>
  );
};

export default Affilatechartadmin;
