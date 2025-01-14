// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useTheme } from '@mui/material/styles';
import Chart, { Props } from 'react-apexcharts';
import Affilatec1 from 'src/components/shared/Affilatec1';

const Affilatechart1 = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const labels = ['Chi phí / Đơn hàng'];

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
          label: 'Chi phí /đơn hàng',
          name: {
            fontSize: '20px', // Tăng kích thước chữ cho tên
            color: '#000000', // Màu đen cho tên
          },
          value: {
            show: true, // Hiển thị giá trị tổng
            fontSize: '22px', // Tăng kích thước chữ
            fontWeight: 'bold', // Làm chữ đậm
            color: '#000000', // Màu chữ đen
            offsetY: 0, // Đảm bảo giá trị nằm chính giữa theo chiều dọc
          },
          total: {
            show: true,
            label: '',
            formatter() {
              return '66%'; // Giá trị tổng
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

  const seriesradialchart: any = [66]; // Replace with dynamic series data if needed

  return (
    <Affilatec1 title=" Đơn hàng" text="Chi phí / Đơn hàng" description={''}>
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

export default Affilatechart1;
