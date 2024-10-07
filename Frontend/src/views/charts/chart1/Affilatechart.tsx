// import React from 'react';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Affilatec from 'src/components/shared/Affilatec';

const Affilatechart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Chi phí',
        data: [61, 80, 38, 21, 42, 39, 90],
      },
      {
        name: 'Doanh thu',
        data: [11, 42, 15, 32, 34, 12, 21],
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
      colors: ['#4cb8c4', '#3cd3ad'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },

      tooltip: {
        x: {
          format: 'dd/MM/yy ',
        },
      },
    },
  });

  return (
    <Affilatec title="Tỉ trọng chi phí / doanh thu" text="Chi phí / doanh thu" description={''}>
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
    </Affilatec>
  );
};

export default Affilatechart;
