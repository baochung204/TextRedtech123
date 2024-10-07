// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { error } from 'console';
import React from 'react';
import Chart, { Props } from 'react-apexcharts';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import Modarm from 'src/components/shared/moderm';

const PieChartsAdmin = ({ menuItems }: { menuItems: any }) => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const warning = theme.palette.warning.main;

  // 1
  const optionsdoughnutchart: Props = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: [
      primary, // Color for 'Facebook'
      secondary, // Color for 'Tiktok'
      warning, // Color for 'Email'
      '#2c5364', // Color for 'Zalo'
      '#99f2c8', // Color for 'Google'
      '#f5a623', // Color for 'Bạn bè' (added new color)
      '#e74c3c', // Color for 'Khác' (added new color)
    ],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels: ['Facebook', 'Tiktok', 'Email', 'Zalo', 'Google', 'Bạn bè', 'Khác'],
  };

  const seriespiechart = [45, 65, 27, 18, 35];

  const [month, setMonth] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  return (
    <Modarm title="Nguồn khách hàng" text="Kênh" description="">
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
        <Chart options={optionsdoughnutchart} series={seriespiechart} type="donut" height="300px" />
      </Box>
    </Modarm>
  );
};

export default PieChartsAdmin;
