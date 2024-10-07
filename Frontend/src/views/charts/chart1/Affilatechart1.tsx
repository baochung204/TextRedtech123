// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Affilatec1 from 'src/components/shared/Affilatec1';

const Affilatechart1 = () => {
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

  //   chart: {
  //     id: 'donut-chart',
  //     fontFamily: "'Plus Jakarta Sans', sans-serif",
  //     foreColor: '#0000000',

  //     events: {
  //       mounted: (chart: any) => {
  //         chart.w.globals.seriesTotals.reduce((a: any, b: any) => a + b, 0);
  //         const maxValue = Math.max(...seriesdoughnutchart);
  //         const maxIndex = seriesdoughnutchart.indexOf(maxValue);
  //         optionsdoughnutchart.labels ? optionsdoughnutchart.labels[maxIndex] + '%' : '';

  //         // Custom label for center text
  //         chart.updateOptions({
  //           annotations: {
  //             position: 'front',
  //             text: {
  //               x: 0,
  //               y: 0,
  //               text: `${maxValue}%`,
  //               textAnchor: 'middle',
  //               dominantBaseline: 'middle',
  //               style: {
  //                 fontSize: '20px',
  //                 fontWeight: 'bold',
  //                 color: '#000000', // màu đen
  //               },
  //             },
  //           },
  //         });
  //       },
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   plotOptions: {
  //     pie: {
  //       donut: {
  //         size: '70px',
  //         labels: {
  //           show: true,
  //           total: {
  //             show: true,
  //             label: 'Tỉ lệ cao nhất',
  //             formatter: () => `${Math.max(...seriesdoughnutchart)}%`,
  //             fontWeight: 'bold',
  //           },
  //         },
  //       },
  //     },
  //   },
  //   legend: {
  //     show: true,
  //     position: 'bottom',
  //     width: '50px',
  //   },
  //   colors: ['#f45c43', '#fd1d1d'],
  //   fill: {
  //     type: 'gradient',
  //     gradient: {
  //       shade: 'light',
  //       type: 'vertical',
  //       shadeIntensity: 0.5,
  //       gradientToColors: ['#feb47b', '#ff7e5f'],
  //       inverseColors: true,
  //       opacityFrom: 1,
  //       opacityTo: 1,
  //       stops: [0, 100],
  //     },
  //   },
  //   tooltip: {
  //     theme: 'dark',
  //     fillSeriesColor: false,
  //   },
  //   labels: ['Chi phí', 'Đơn hàng'],
  // };

  return (
    // <PageContainer title="Doughnut & Pie Chart" description="this is innerpage">
    //   {/* breadcrumb */}
    //   <Breadcrumb title="Doughtnut Chart" items={BCrumb} />
    //   {/* end breadcrumb */}
    //   <Grid container spacing={3}>
    //     <Grid item lg={6} md={12} xs={12}>

    //     </Grid>
    //   </Grid>
    // </PageContainer>
    <Affilatec1 title=" Đơn hàng" text="Chi phí /đơn hàng" description={''}>
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

export default Affilatechart1;
