// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Chart, { Props } from 'react-apexcharts';
import Affilatec1 from 'src/components/shared/Affilatec1';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// const BCrumb = [
//   {
//     to: '/',
//     title: 'Home',
//   },
//   {
//     title: 'Gradient Chart',
//   },
// ];

const Chart6 = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Chi phí',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Đơn hàng',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        zoom: {
          enabled: false, // Vô hiệu hóa zoom
        },
        toolbar: {
          show: false, // Ẩn toolbar (icon ở góc)
        },
      },
      colors: ['#c31432', '#FF5733'],
      // colors: ['#64b3f4', '#ffe000'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },

      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });

  return (
    <Affilatec1 title=" Đơn hàng" text="Chi phí / đơn hàng">
      <div>
        <div id="chart">
          <ReactApexChart
            options={chartData.options as any}
            series={chartData.series}
            type="area"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </Affilatec1>
  );
};

export default Chart6;
