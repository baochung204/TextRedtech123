// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid, MenuItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import Chart from 'react-apexcharts';
// import PageContainer from '../../components/container/PageContainer';
// import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
// import ParentCard from '../../components/shared/ParentCard';
import { Props } from 'react-apexcharts';
import PageContainer from 'src/components/container/PageContainer';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import Affilatec2 from 'src/components/shared/Affilatec2';
import ParentCard from 'src/components/shared/ParentCard';

const RadialbarChartAdmin = ({ menuItems }: { menuItems: any }) => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const success = theme.palette.success.main;
  const warning = theme.palette.warning.main;

  const optionsradialchart: Props = {
    chart: {
      id: 'pie-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
    },
    colors: [primary, secondary, success, warning],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter() {
              return 249;
            },
          },
        },
      },
    },
    tooltip: {
      theme: 'dark',
    },
  };
  const seriesradialchart: any = [44, 55, 67, 83];

  const [month, setMonth] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  return (
    <PageContainer title="RedAI" description="this is innerpage">
      <Grid container spacing={3}>
        <Grid item lg={6} md={12} xs={12}>
          <Affilatec2 title="" text="" description={''}>
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
                height="325px"
              />
            </Box>
          </Affilatec2>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default RadialbarChartAdmin;
