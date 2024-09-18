// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

import DashboardWidgetCard from '../../shared/DashboardWidgetCard';
import { Props } from 'react-apexcharts';

const EmployeeSalary = () => {
  // Màu sắc biểu đồ
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.grey[100];

  // Cấu hình biểu đồ
  const optionscolumnchart: Props = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 280,
    },
    colors: [primarylight, primarylight, primary, primarylight, primarylight, primarylight],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '45%',
        distributed: true,
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: [['Tháng 4'], ['Tháng 5'], ['Tháng 6'], ['Tháng 7'], ['Tháng 8'], ['Tháng 9']],
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  const seriescolumnchart = [
    {
      name: '',
      data: [20, 15, 30, 25, 10, 15],
    },
  ];

  return (
    <DashboardWidgetCard
      title="Lương Nhân Viên"
      subtitle="Hàng tháng"
      dataLabel1="Lương"
      dataItem1="$36,358"
      dataLabel2="Lợi nhuận"
      dataItem2="$5,296"
      action={undefined}
    >
      <>
        <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height="280px" />
      </>
    </DashboardWidgetCard>
  );
};

export default EmployeeSalary;
