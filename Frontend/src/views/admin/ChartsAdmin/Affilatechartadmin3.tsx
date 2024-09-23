import { Box, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import Chart from 'react-apexcharts';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import Affilatec3 from 'src/components/shared/Affilatec3';

const Affilatechartadmin3 = ({ menuItems }: { menuItems: any }) => {
  // chart color
  const theme = useTheme();
  const success = '#1AC45F';
  const warning = theme.palette.warning.main;
  const danger = '#FC2032';

  const optionsradialchart = {
    chart: {
      id: 'gauge-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -130,
        endAngle: 130,
        hollow: {
          margin: 15,
          size: '70%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: '24px',
            fontWeight: 'bold',
            formatter: (val: any) => `${val}%`, // Thêm đơn vị phần trăm
          },
        },
        track: {
          background: '#ccc',
          strokeWidth: '100%',
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        gradientToColors: [warning, '#FC2032'], // Màu vàng và màu đỏ cho gradient
        stops: [0, 50, 100], // Vị trí bắt đầu chuyển đổi màu: xanh, vàng, đỏ
        colorStops: [
          {
            offset: 0,
            color: success, // Màu xanh cho 0-30
            opacity: 1,
          },
          {
            offset: 50,
            color: warning, // Màu vàng cho 30-70
            opacity: 1,
          },
          {
            offset: 100,
            color: danger, // Màu đỏ cho 70-100
            opacity: 1,
          },
        ],
      },
    },
    labels: [''],
    tooltip: {
      enabled: true,
      theme: 'dark',
    },
  };
  const seriesradialchart = [93.27]; // Giá trị hiển thị trên đồng hồ

  const [month, setMonth] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  return (
    <Affilatec3 title="Tỉ trọng chi phí /vòng quay" description={''}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <CustomSelect
          labelId="month-dd"
          id="month-dd"
          size="small"
          value={month}
          onChange={handleChange}
          sx={{ marginBottom: '20px' }}
        >
          {menuItems && Array.isArray(menuItems) ? (
            menuItems.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No options available</MenuItem>
          )}
        </CustomSelect>
        <Chart
          options={optionsradialchart}
          series={seriesradialchart}
          type="radialBar"
          height="300px"
        />
      </Box>
    </Affilatec3>
  );
};

export default Affilatechartadmin3;
