import { Grid } from '@mui/material';
import React from 'react';
import SpeedometerChart from 'src/components/charrts/SpeedometerChart';
import Affilatechart from '../charts/chart1/Affilatechart';
import Affilatechart1 from '../charts/chart1/Affilatechart1';
import Affilatechart2 from '../charts/chart1/Affilatechart2';
import Affiliatedetail from '../charts/chart1/Affiliatedetail1';
// import Affilatechart21 from '../charts/chart2/Affilatechart21';
// import Affilatechart22 from '../charts/chart2/Affilatechart22';
// import Affilatechart23 from '../charts/chart2/Affilatechart23';
// import Affilatechart24 from '../charts/chart2/Affilatechart24';
// import Affiliatedetail2 from '../charts/chart2/Affiliatedetail2';
// import Affilatechart30 from '../charts/chart3/Affilatechart30';
// import Affilatechart31 from '../charts/chart3/Affilatechart31';
// import Affilatechart32 from '../charts/chart3/Affilatechart32';
// import Affilatechart33 from '../charts/chart3/Affilatechart33';
// import Affiliatedetail3 from '../charts/chart3/Affiliatedetail3';

const Charts = () => {
  const [month] = React.useState('1');
  // const [month, setMonth] = React.useState('1');
  // const [value, setValue] = React.useState<any | null>(null);
  // const [value1, setValue1] = React.useState<any | null>(null);
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setMonth(event.target.value);
  // };
  return (
    <>
      {/*<Grid item xs={12} lg={12}>
        {' '}
        <Typography variant="h3" sx={{}}>
          Báo cáo chi tiêu{' '}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <CustomSelect
            labelId="month-dd"
            id="month-dd"
            size="small"
            value={month}
            onChange={handleChange}
          >
            <MenuItem value={1}>Tất cả</MenuItem>
            <MenuItem value={2}>Assistant 1</MenuItem>
            <MenuItem value={3}>Assistant 2</MenuItem>
          </CustomSelect>{' '}
          <Box style={{ width: '50%' }} display={'flex'} alignItems={'center'} gap="5px">
            {' '}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(props) => (
                  <CustomTextField
                    {...props}
                    fullWidth
                    size="small"
                    sx={{
                      '& .MuiSvgIcon-root': {
                        width: '18px',
                        height: '18px',
                      },
                      '& .MuiFormHelperText-root': {
                        display: 'none',
                      },
                    }}
                  />
                )}
              />
            </LocalizationProvider>
            tới
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={value1}
                onChange={(newValue: any) => {
                  setValue1(newValue);
                }}
                renderInput={(props) => (
                  <CustomTextField
                    {...props}
                    fullWidth
                    size="small"
                    sx={{
                      '& .MuiSvgIcon-root': {
                        width: '18px',
                        height: '18px',
                      },
                      '& .MuiFormHelperText-root': {
                        display: 'none',
                      },
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
        </Box> 
      </Grid>*/}
      {month == '1' && (
        <React.Fragment>
          <Grid item xs={12} lg={8}>
            <Affiliatedetail />
          </Grid>
          <Grid item xs={12} lg={4}>
            {/* <Affilatechart3 /> */}
            <SpeedometerChart />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Affilatechart />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Affilatechart1 />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Affilatechart2 />
          </Grid>
        </React.Fragment>
      )}
      {/* {month == '2' && (
        <React.Fragment>
          <Grid item xs={12} lg={8}>
            <Affiliatedetail2 />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Affilatechart23 />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Affilatechart21 />
          </Grid>{' '}
          <Grid item xs={12} lg={4}>
            <Affilatechart22 />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Affilatechart24 />
          </Grid>
        </React.Fragment>
      )} */}
      {/* {month == '3' && (
        <React.Fragment>
          <Grid item xs={12} lg={8}>
            <Affiliatedetail3 />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Affilatechart33 />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Affilatechart30 />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Affilatechart31 />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Affilatechart32 />
          </Grid>
        </React.Fragment>
      )} */}
    </>
  );
};

export default Charts;
