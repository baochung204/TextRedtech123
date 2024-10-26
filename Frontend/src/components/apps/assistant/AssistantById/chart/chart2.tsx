import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';
import { Props } from 'react-apexcharts';
import { Box, MenuItem, Typography } from '@mui/material';
import DashboardCard from 'src/components/shared/DashboardCard';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import { ChangeEvent, useEffect, useState } from 'react';
import DateSelect from 'src/components/apps/date/DateSelect';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { useParams } from 'react-router';
import { fetchChartAssisstant } from 'src/store/user/chatbots/chart/chartAssisstantByID/ChartAssisstantByIDSlice';





const Chart2 = () => {

  const { id } = useParams();

  const [month, setMonth] = useState<string>('revenue');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  const data = useSelector((state: AppState) => state.chartAssisstantID.data)


  useEffect(() => {
    if (id !== undefined) {
      const chatbotID = Number(id);
      if (!isNaN(chatbotID)) {
        dispatch(fetchChartAssisstant({ chatbotID, typeChart: month }));
      }
    }
  }, [id, month])
  // console.log(data);


  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primary2 = theme.palette.primary.start;
  const categories = Object.keys(data);
  const seriesgredientchart: any = [
    {
      name: 'Points',
      data: Object.values(data)
    },
  ];
  const maxYValue = Math.max(...seriesgredientchart[0].data) + 5;
  const optionsgredientchart: Props = {
    chart: {
      height: 350,
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: primary,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)',
        top: 12,
        left: 4,
        blur: 3,
        opacity: 0.4,
      },
      zoom: {
        enabled: true,
      },
      offsetX: 0,
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: categories,
      labels: {
        show: true,
        formatter: (value: string, _time: string, opts?: any) => {
          // console.log(value, _time, opts);


          const date = new Date(value);
          // console.log('date', date.getDay());

          if (opts.i === 0 || opts.i === categories.length - 1) {
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
          }
          return '';
        },
      },
      tickAmount: categories.length - 1,
      tickPlacement: 'on',
    },


    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [primary2],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: primary2,
            opacity: 1,
          },
          {
            offset: 100,
            color: primary,
            opacity: 0.9,
          },
        ],
      },
    },
    colors: [primary],
    // markers: {
    //   size: 4,
    //   opacity: 0.9,
    //   colors: [primary],
    //   strokeColor: '#fff',
    //   strokeWidth: 2,
    //   hover: {
    //     size: 7,
    //   },
    // },
    yaxis: {
      min: 0,
      max: maxYValue,
    },
    tooltip: {
      theme: 'dark',
    },
    grid: {
      show: true,
      padding: {
        right: 30,
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 250,
          },
          xaxis: {
            labels: {
              rotate: -30,
              style: {
                fontSize: '8px',
              },
            },
          },
        },
      },
    ],
  };


  return (
    <DashboardCard>
      <Box>
        <Box sx={{ marginTop: '0px' }}>
          <Typography variant="h4">Báo cáo công việc</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: '5px',
            }}
          >
            <CustomSelect
              labelId="month-dd"
              id="month-dd"
              size="small"
              value={month}
              onChange={handleChange}
            >
              <MenuItem value={'revenue'}>Doanh thu </MenuItem>
              <MenuItem value={'customers'}>Khách hàng </MenuItem>
              <MenuItem value={'conversion'}>Chuyển đổi</MenuItem>
            </CustomSelect>
            <Box style={{ width: '60%' }} display={'flex'} alignItems={'center'} gap="5px">
              <DateSelect />
            </Box>
          </Box>
        </Box>

        <Chart
          options={optionsgredientchart}
          series={seriesgredientchart}
          type="line"
          height="300px"
        />
      </Box>
    </DashboardCard>
  );
};

export default Chart2;
