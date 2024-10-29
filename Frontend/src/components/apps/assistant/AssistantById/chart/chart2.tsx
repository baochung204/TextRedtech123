import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';
import { Props } from 'react-apexcharts';
import { Box, MenuItem, Typography } from '@mui/material';
import DashboardCard from 'src/components/shared/DashboardCard';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import { ChangeEvent, useEffect, useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { fetchChartAssisstant } from 'src/store/user/chatbots/chart/chartAssisstantByID/ChartAssisstantByIDSlice';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { format } from 'date-fns';

interface PropData {
  id: number
}


const Chart2 = ({ id }: PropData) => {
  const chatbotID = Number(id);
  const [months, setMonths] = useState<string>('revenue');
  const [start_date, setStart_Date] = useState<string | null>(null)
  const [end_date, setEnd_Date] = useState<string | null>(null)

  const createAt = new Date(2023, 9, 15); // Thay thế giá trị này bằng giá trị của bạn
  const date = new Date();

  // Ngày đầu tiên của tháng
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  // Ngày hiện tại
  const currentDate = new Date();

  // Khởi tạo startDate là ngày đầu tiên của tháng hoặc createAt, tùy theo ngày nào lớn hơn
  const initialStartDate = firstDayOfMonth < createAt ? createAt : firstDayOfMonth;


  const [startDate, setStartDate] = useState<Date | any>(initialStartDate);
  const [endDate, setEndDate] = useState<Date | any>(currentDate);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (startDate && endDate && startDate > endDate) {
      setError('Start date must be earlier than end date');
    } else {
      setError(null);
    }
  }, [startDate, endDate]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMonths(event.target.value);
  };

  const data = useSelector((state: AppState) => state.chartAssisstantID.data)

  useEffect(() => {

    // dispatch(fetchChartAssisstant({ chatbot_id: chatbotID }))
    dispatch(fetchChartAssisstant({ chatbot_id: chatbotID, object: { type_chart: months, start_date: start_date, end_date: end_date  } }))
  }, [chatbotID, months, start_date, end_date])

  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primary2 = theme.palette.primary.start;
  const categories = Object.keys(data.chart);
  const seriesgredientchart: any = [
    {
      name: 'Points',
      data: Object.values(data.chart)
    },
  ];
  const maxYValue = Math.max(...seriesgredientchart[0].data) + 5;
  // const optionsgredientchart: Props = {
  //   chart: {
  //     height: 350,
  //     type: 'line',
  //     fontFamily: "'Plus Jakarta Sans', sans-serif",
  //     foreColor: primary,
  //     toolbar: {
  //       show: false,
  //     },
  //     dropShadow: {
  //       enabled: true,
  //       color: 'rgba(0,0,0,0.2)',
  //       top: 12,
  //       left: 4,
  //       blur: 3,
  //       opacity: 0.4,
  //     },
  //     zoom: {
  //       enabled: true,
  //     },
  //     offsetX: 0,
  //   },
  //   stroke: {
  //     width: 7,
  //     curve: 'smooth',
  //   },
  //   xaxis: {
  //     type: 'datetime',
  //     categories: categories,
  //     labels: {
  //       show: true,
  //       formatter: (value: string, _time: string, opts?: any) => {
  //         const date = new Date(value);
  //         if (opts.i === 0 || opts.i === categories.length - 1) {
  //           return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  //         }
  //         return '';
  //       },
  //     },
  //     tickAmount: categories.length - 1,
  //     tickPlacement: 'on',
  //   },


  //   fill: {
  //     type: 'gradient',
  //     gradient: {
  //       shade: 'dark',
  //       gradientToColors: [primary2],
  //       shadeIntensity: 1,
  //       type: 'horizontal',
  //       opacityFrom: 1,
  //       opacityTo: 0.9,
  //       stops: [0, 100],
  //       colorStops: [
  //         {
  //           offset: 0,
  //           color: primary2,
  //           opacity: 1,
  //         },
  //         {
  //           offset: 100,
  //           color: primary,
  //           opacity: 0.9,
  //         },
  //       ],
  //     },
  //   },
  //   colors: [primary],
  //   // markers: {
  //   //   size: 4,
  //   //   opacity: 0.9,
  //   //   colors: [primary],
  //   //   strokeColor: '#fff',
  //   //   strokeWidth: 2,
  //   //   hover: {
  //   //     size: 7,
  //   //   },
  //   // },
  //   yaxis: {
  //     min: 0,
  //     max: maxYValue,
  //   },
  //   tooltip: {
  //     theme: 'dark',
  //   },
  //   grid: {
  //     show: true,
  //     padding: {
  //       right: 30,
  //     },
  //   },
  //   responsive: [
  //     {
  //       breakpoint: 600,
  //       options: {
  //         chart: {
  //           height: 250,
  //         },
  //         xaxis: {
  //           labels: {
  //             rotate: -30,
  //             style: {
  //               fontSize: '8px',
  //             },
  //           },
  //         },
  //       },
  //     },
  //   ],
  // };

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
          const date = new Date(value);
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
    yaxis: {
      min: 0,
      max: maxYValue,
    },
    tooltip: {
      theme: 'dark',
      formatter: (value: number, _seriesIndex: number, dataPointIndex: number) => {
        const date = new Date(categories[dataPointIndex]);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return `${formattedDate}: ${value}`;
      },
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
              value={months}
              onChange={handleChange}
            >
              <MenuItem value={'revenue'}>Doanh thu </MenuItem>
              <MenuItem value={'customer'}>Khách hàng </MenuItem>
              <MenuItem value={'order'}>Chuyển đổi</MenuItem>
            </CustomSelect>
            <Box style={{ width: '60%' }} display={'flex'} alignItems={'center'} gap="5px">
              {/* <DateSelect /> */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={startDate}
                      onChange={(newValue) => {
                        setStartDate(newValue);
                        if (newValue) {
                          const formattedDate = format(newValue, 'yyyy-MM-dd');
                          setStart_Date(formattedDate)
                        }
                      }}

                      inputFormat="dd/MM/yyyy"
                      maxDate={endDate}
                      renderInput={(props) => (
                        <CustomTextField
                          {...props}
                          fullWidth
                          size="small"
                          error={!!error}
                          sx={{
                            '& .MuiSvgIcon-root': { width: '18px', height: '18px' },
                            '& .MuiFormHelperText-root': { display: 'none' },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                  tới
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={endDate}
                      // onChange={(newValue) => setEndDate(newValue)}
                      onChange={(newValue) => {
                        setEndDate(newValue);
                        if (newValue) {
                          const formattedDate = format(newValue, 'yyyy-MM-dd');
                          setEnd_Date(formattedDate)
                        }
                      }}
                      inputFormat="dd/MM/yyyy"
                      maxDate={new Date()}
                      renderInput={(props) => (
                        <CustomTextField
                          {...props}
                          fullWidth
                          size="small"
                          error={!!error}
                          sx={{
                            '& .MuiSvgIcon-root': { width: '18px', height: '18px' },
                            '& .MuiFormHelperText-root': { display: 'none' },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>

                {/* Hiển thị thông báo lỗi */}
                {error && (
                  <Typography color="error" variant="body2">
                    {error}
                  </Typography>
                )}
              </Box>
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
