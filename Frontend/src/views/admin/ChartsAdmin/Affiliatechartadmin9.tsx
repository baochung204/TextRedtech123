// import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Chart, { Props } from 'react-apexcharts';
import Affilatec from 'src/components/shared/Affilatec';

const Affilatechartadmin9 = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const labels = ['Tỉ lệ khách hàng trả phí'];

  const optionsradialchart: Props = {
    chart: {
      id: 'radial-bar-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
    },
    colors: [primary],
    plotOptions: {
      radialBar: {
        dataLabels: {
          label: 'hello',
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
              return '100%';
            },
          },
        },
      },
    },
    tooltip: {
      enabled: true, // Enable tooltips
      theme: 'dark', // Set the tooltip theme to dark
      y: {
        formatter: (val: number) => {
          return `${val}%`; // Display the label and value
        },
      },
    },
    labels: labels, // Set the labels for the radial bars
  };

  const seriesradialchart: any = [66]; // Replace with dynamic series data if needed

  return (
    <Affilatec title="Khách hàng" text="Tỉ lệ khách hàng trả phí" description={''}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Chart
          options={optionsradialchart}
          series={seriesradialchart}
          type="radialBar"
          height="300px"
        />
      </Box>
    </Affilatec>
  );
};

export default Affilatechartadmin9;
