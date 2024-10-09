import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Affilatec1 from 'src/components/shared/Affilatec1';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Chart, { Props } from 'react-apexcharts';

const Affilatechart = () => {
  const theme = useTheme();
  const warning = theme.palette.warning.main;
  const labels = ['Chi phí /doanh thu'];

  const optionsradialchart: Props = {
    chart: {
      id: 'radial-bar-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#000000',
      toolbar: {
        show: false,
      },
    },
    colors: [warning],
    plotOptions: {
      radialBar: {
        dataLabels: {
          label: 'Chi phí / doanh thu',
          name: {
            fontSize: '20px', // Tăng kích thước chữ cho tên
            color: '#FC2032', // Màu đen cho tên
          },
          value: {
            fontSize: '20px', // Tăng kích thước chữ cho giá trị
            color: '#000000', // Màu đen cho giá trị
          },
          total: {
            show: true,
            label: 'Tỉ lệ',
            formatter() {
              return '96%'; // Giá trị tổng
            },
            fontSize: '22px', // Tăng kích thước chữ cho tổng
            color: '#000000', // Màu đen cho tổng
          },
        },
        track: {
          background: '#e0e0e0', // Màu nền của vòng tròn
          strokeWidth: '97%', // Độ dày của vòng tròn nền
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

  const seriesradialchart: any = [96]; // Replace with dynamic series data if needed

  return (
    <Affilatec1 title=" Đơn hàng" text="Chi phí /doanh thu" description={''}>
      <div>
        <div id="chart">
          <Chart
            options={optionsradialchart}
            series={seriesradialchart}
            type="radialBar"
            height="300px"
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </Affilatec1>
  );
};

export default Affilatechart;
