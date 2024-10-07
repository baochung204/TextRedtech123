// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Affilatec2 from 'src/components/shared/Affilatec2';

// const BCrumb = [
//   {
//     to: '/',
//     title: 'Home',
//   },
//   {
//     title: 'Gradient Chart',
//   },
// ];

const Chart7 = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Chi phí',
        data: [31, 40, 28, 51, 42, 19, 10],
      },
      {
        name: 'khách hàng',
        data: [61, 22, 45, 32, 54, 22, 31],
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
      // colors: ['#c31432', '#FF5733'],
      colors: ['#fe8c00', '#f2c94c'],
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
    <Affilatec2 title="Cuộc trò chuyện" text="Chi phí / khách hàng">
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
    </Affilatec2>
  );
};

export default Chart7;
