import { Box, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import Chart, { Props } from 'react-apexcharts';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import Modarm from 'src/components/shared/moderm';

const PieChartsAdmin = ({ menuItems }: { menuItems: any }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const warning = theme.palette.warning.main;

  const seriespiechart = [45, 65, 27, 18, 35]; // Percentages
  const labels = ['Facebook', 'Tiktok', 'Email', 'Zalo', 'Google', 'Bạn bè', 'Khác'];

  // 1. State to hold hovered percentage
  const [hoveredPercent, setHoveredPercent] = useState<number | null>(null);

  // 2. Calculate the total value for dynamic percentage calculation
  const total = seriespiechart.reduce((acc, value) => acc + value, 0);

  const optionsdoughnutchart: Props = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      events: {
        // Capture the event when hovering over the slices
        dataPointMouseEnter: (event, chartContext, config) => {
          const seriesIndex = config.dataPointIndex;
          const value = seriespiechart[seriesIndex];
          const percent = ((value / total) * 100).toFixed(2); // Calculate percentage
          setHoveredPercent(Number(percent));
        },
        dataPointMouseLeave: () => {
          setHoveredPercent(null); // Reset when not hovering
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
          labels: {
            show: true,
            value: {
              show: false, // We will show the percentage via our custom method
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: [primary, secondary, warning, '#2c5364', '#99f2c8', '#f5a623', '#e74c3c'],
    tooltip: {
      enabled: true,
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels,
  };

  const [month, setMonth] = useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  return (
    <Modarm title="Nguồn khách hàng" text="" description="">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative', // To position the percentage in the center
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

        <Box sx={{ position: 'relative', width: '300px', height: '300px' }}>
          {/* Centered Percentage */}
          {hoveredPercent !== null && (
            <Box
              sx={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-40%, -90%)',
                fontSize: '24px',
                fontWeight: 'bold',
                color: theme.palette.text.primary,
              }}
            >
              {hoveredPercent}%
            </Box>
          )}
          {/* Pie Chart */}
          <Chart
            options={optionsdoughnutchart}
            series={seriespiechart}
            type="donut"
            height="300px"
          />
        </Box>
      </Box>
    </Modarm>
  );
};

export default PieChartsAdmin;
