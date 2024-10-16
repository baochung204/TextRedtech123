// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useTheme } from '@emotion/react';
import { Box, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import Chart, { Props } from 'react-apexcharts';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import Affilatec2 from 'src/components/shared/Affilatec2';

const Affilatechartadmin5 = ({ menuItems }: { menuItems: any }) => {
  const theme = useTheme();
  const labels = ['Cá nhân', 'Doanh nghiệp'];
  const seriespiechart = [20, 90]; // Ensure these values are valid
  const total = seriespiechart.reduce((acc, value) => acc + value, 0);

  const maxIndex = seriespiechart.indexOf(Math.max(...seriespiechart));
  const defaultPercent = total > 0 ? ((seriespiechart[maxIndex] / total) * 100).toFixed(2) : 0;

  const [hoveredPercent, setHoveredPercent] = useState<number | null>(Number(defaultPercent));
  const [isHovering, setIsHovering] = useState(false); // State to track hover status

  const optionsdoughnutchart: Props = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      events: {
        dataPointMouseEnter: (event: any, chartContext: any, config: any) => {
          console.log('dataPointMouseEnter', event, chartContext, config);
          const seriesIndex = config.dataPointIndex;

          if (seriesIndex >= 0 && seriesIndex < seriespiechart.length) {
            const value = seriespiechart[seriesIndex];
            const percent = total > 0 ? ((value / total) * 100).toFixed(2) : 0;
            setHoveredPercent(Number(percent));
          }
        },
        dataPointMouseLeave: () => {
          setHoveredPercent(Number(defaultPercent));
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
              show: false,
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
    colors: [theme.palette.primary.main, theme.palette.warning.main], // Apply MUI theme colors
    tooltip: {
      enabled: true,
      theme: 'dark',
      fillSeriesColor: false,
    },
    labels,
  };

  const [month, setMonth] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  return (
    <Affilatec2 title="Cuộc trò chuyện" text="Loại tài khoản" description={''}>
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
        <Box
          sx={{ position: 'relative', width: '300px', height: '300px' }}
          onMouseEnter={() => setIsHovering(true)} // Set hovering to true on mouse enter
          onMouseLeave={() => setIsHovering(false)} // Set hovering to false on mouse leave
        >
          {/* Centered Percentage */}
          {hoveredPercent !== null && (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-45%, -170%)', // Centering the percentage
                fontSize: '24px',
                fontWeight: 'bold',
                color: theme.palette.text.primary,
              }}
            >
              {/* Conditional Rendering */}
              {!isHovering ? (
                <>
                  <Box sx={{ marginTop: '-60px' }}>
                    <Typography sx={{ color: 'red', fontSize: '15px', fontWeight: 'bold' }}>
                      Giá trị lớn nhất
                    </Typography>
                    {hoveredPercent}%
                  </Box>
                </>
              ) : (
                `${hoveredPercent}%`
              )}
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
    </Affilatec2>
  );
};

export default Affilatechartadmin5;
