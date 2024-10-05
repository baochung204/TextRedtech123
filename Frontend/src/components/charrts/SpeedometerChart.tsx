import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { Box, Typography } from '@mui/material';
import Affilatec3 from '../shared/Affilatec3';

const SpeedometerChart: React.FC = () => {
  const [speed, setSpeed] = useState<number>(70.0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(parseFloat((Math.random() * 40 + 60).toFixed(2)));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'radialBar',
      offsetY: 0,
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        hollow: {
          margin: 0,
          size: '70%',
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            formatter: (val: number) => `${val.toFixed(2)}`,
            color: 'red',
            fontSize: '20px',
            fontWeight: 600,
            offsetY: 70,
          },
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        gradientToColors: ['#ff0000'],
        stops: [0, 50, 100],
        colorStops: [
          {
            offset: 0,
            color: '#ff0000',
            opacity: 0.5,
          },
          {
            offset: 50,
            color: '#ff0000',
            opacity: 0.6,
          },
          {
            offset: 100,
            color: '#ff0000 ',
            opacity: 1,
          },
        ],
      },
    },
  };
  const chartSeries: number[] = [speed];
  const needleRotation = (speed / 100) * 240 - 120;
  const labels = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
  const radius = 113;
  const labelPositions = labels.map((label, index) => {
    const angle = (40 + (index * -260) / (labels.length - 1)) * (Math.PI / 180);
    return {
      left: `calc(50% + ${radius * Math.cos(angle)}px)`,
      top: `calc(50% + ${radius * Math.sin(angle)}px)`,
      label,
    };
  });

  return (
    <Affilatec3 title="Tỉ trọng chi phí /vòng quay" text="Vòng quay trung bình" description={''}>
      <Box position="relative" width="100%" height="350px" alignItems='center'>
        <Chart options={chartOptions} series={chartSeries} type="radialBar" height="100%" />
        <Box
          position="absolute"
          width="4px"
          height="20%"
          bottom="45%"
          left="50%"
          style={{
            background: 'linear-gradient(to bottom, #ff6633, #ffcc99)',
            transition: 'transform 1s ease-out',
            transform: `rotate(${needleRotation}deg)`,
            transformOrigin: 'bottom center',
            zIndex: 1,
          }}
        />
        {labelPositions.map((pos, idx) => (
          <Typography
            key={idx}
            position="absolute"
            left={pos.left}
            top={pos.top}
            textAlign="center"
            color="red"
            fontSize="12px"
            style={{
              transform: 'translate(-50%, -50%)',
              fontWeight: 600,
            }}
          >
            {pos.label}
          </Typography>
        ))}
      </Box>
    </Affilatec3>

  );
};

export default SpeedometerChart;
