import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  Button,
  CardContent,
  // FormControl,
  Grid,
  IconButton,
  // InputLabel,
  // MenuItem,
  // Select,
  Tab,
  Typography,
} from '@mui/material';
import { IconPackage } from '@tabler/icons-react';
import React from 'react';
// import ProductPerformances from 'src/components/dashboards/ecommerce/ProductPerformances';
import MonthlyEarnings from 'src/components/dashboards/modern/MonthlyEarnings';
import MonthlyEarnings1 from 'src/components/dashboards/modern/MonthlyEarnings1';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
// import ChildCard from 'src/components/shared/ChildCard';
import icon1 from '../../../assets/images/svgs/icon-connect.svg';
import Banner1 from 'src/components/widgets/banners/Banner1';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
// import DSdonhang from './../../../components/dashboards/ecommerce/dsdonhang';
import Danhsachdh from './dsdh';
import HistoryMoney from './lsrt';
// import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import { FaChartLine } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { PiPersonFill } from "react-icons/pi";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';



interface cardType {
  icon: JSX.Element;
  title: string;
  digits: string;
  bgcolor: string;
}
const topcards: cardType[] = [
  {
    icon: <GiClick size={40} color='#FFAE1F'/>,
    title: 'Clicks',
    digits: '96',
    bgcolor: 'warning',
  },
  {
    icon: <PiPersonFill size={40} color='#5D87FF'/>,
    title: 'Khách hàng',
    digits: '3.650',
    bgcolor: 'primary',
  },
  {
    icon: <BiSolidPurchaseTag size={40} color='#49BEFF' />,
    title: 'Đơn hàng',
    digits: '3850',
    bgcolor: 'secondary',
  },

  {
    icon: <FaChartLine size={40} color='#13DEB9' />,
    title: 'Danh Thu',
    digits: '96 tỉ',
    bgcolor: 'success',
  },
  {
    icon: <img src={icon1} alt="" />,
    title: 'CVR',
    digits: '26%',
    bgcolor: 'info',
  },
];
const CollaboratePost = () => {
  const [value, setValue] = React.useState('1');
  const [value1, setValue1] = React.useState<Dayjs | null>(null)
  const [value2, setValue2] = React.useState<Dayjs | null>(null)
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  // const [month, setMonth] = React.useState('5');

  // const handleSelectChange = (event: any) => {
  //   setMonth(event.target.value);
  //   // Cập nhật TabPanel tương ứng với giá trị chọn từ Select
  //   if (event.target.value === 5) {
  //     setMonth('5');
  //   } else if (event.target.value === 6) {
  //     setMonth('6');
  //   } else if (event.target.value === 7) {
  //     setMonth('7');
  //   }
  // };
  const BCrumb = [
    {
      to: '/',
      title: 'Home',
    },
    {
      to: '/apps/blog/posts',
      title: 'Blog',
    },
    {
      title: 'Blog post',
    },
  ];
  return (
    <Box>
      {/* <Breadcrumb title="Blog Detail" items={BCrumb} />{' '} */}
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            margin: '10px 0',
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={value1}
              onChange={(newValue) => {
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
          tới
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={value2}
              onChange={(newValue) => {
                setValue2(newValue);
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
        </div>
      </div>
      <Box display="flex" width="100%" flexWrap="wrap">
        <Box
          width={{ xs: '100%', md: '30%' }}
          textAlign={{ xs: 'center', md: 'left', xl: 'left' }}
          margin="0px "

        >
          <Box
            borderBottom="1px solid #EEEEEE"
            width={{ md: '250px', lg: '250px', xl: '320px', xs: '320px' }}
            marginX={{ xs: 'auto', md: '0px' }}
          >
            <MonthlyEarnings />
          </Box>

          <Box
            borderBottom="1px solid #EEEEEE"
            width={{ md: '250px', lg: '250px', xl: '320px', xs: '320px' }}
            marginY={{ xs: '10px', md: '10px', lg: '20px' }}
            marginX={{ xs: 'auto', md: '0px' }}
          >
            <MonthlyEarnings1 />
          </Box>
          <Box paddingRight='10px' textAlign={{ sx: 'center', lg: 'start' }}>
            {' '}
            <Box
              
              width={{ md: '250px', lg: '250px', xl: '320px', xs: '320px' }}
              marginY={{ xs: '10px', md: '10px', lg: '20px' }}
              marginX={{ xs: 'auto', md: '0px' }}
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Button variant="contained" color="primary" sx={{ width: '46%' }}>
                RÚT TIỀN
              </Button>
              <Button variant="contained" color="primary" sx={{ width: '46%' }}>
                ĐỔI POINT
              </Button>
            </Box>
            <Box
              display="flex"
              margin="10px 0"
              alignItems="center"
              justifyContent={{ xs: 'center', lg: 'start' }}
              textAlign="start"
            >
              <IconButton sx={{ padding: '0 2px' }}>
                <IconPackage />
              </IconButton>
              <Typography
                variant="body1"
                color="textSecondary"
                width="300px"
                margin="0 20px"
                padding={'0 ,20px'}
              >
                <span>
                  Redtech tiến hành chi trả từ ngày 15-20 hàng tháng cho tất cả tài khoản Affiliate{' '}
                  <a style={{ color: '#5D87FF' }} href="/apps/rule">Chính sách </a>. Hạn mức thanh toán tối thiểu là 2.000.000đ
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box width={{ xs: '100%', md: '70%' }}>
          <Box display="flex" justifyContent="space-between" flexWrap="wrap" padding="10px">
            <Grid container display={'flex'} justifyContent={'space-between'} gap={'2px'}>
              {topcards.map((topcard, i) => (
                <Grid item xs={12} sm={12} lg={3} xl={2} key={i}>
                  <Box bgcolor={topcard.bgcolor + '.light'} textAlign="center">
                    <CardContent>
                      {topcard.icon}
                      <Typography
                        color={topcard.bgcolor + '.main'}
                        mt={1}
                        variant="subtitle1"
                        fontWeight={600}
                      >
                        {topcard.title}
                      </Typography>
                      <Typography color={topcard.bgcolor + '.main'} variant="h4" fontWeight={600}>
                        {topcard.digits}
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box padding="0px 5px">
            <Typography variant="h3" margin="20px 0">
              Liên kết giới thiệu
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <CustomOutlinedInput
                  id="http"
                  placeholder="http://s"
                  value="http://Redtech.vn/affiliate/123456"
                  fontSize="17px"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ padding: '10px', width: '70%' }}
                >
                  SAO CHÉP
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Box padding="20px 0px">
            <Typography variant="h3" marginTop="20px">
              Tùy chỉnh liên kết Affiliate
            </Typography>
            <div style={{ margin: '10px' }}>
              <Typography variant="body1" color="textSecondary" marginTop="2px">
                Bạn có thể thay đổi liên kết Affiliate bằng cách nhập vào ô bên dưới
              </Typography>
              <Typography variant="body1" color="textSecondary">
                * Lưu ý: Chỉ được phép chứa chữ cái, chữ số và dấu gạch dưới
              </Typography>
            </div>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <CustomOutlinedInput
                  id="http"
                  placeholder="http://s"
                  value="http://Redtech.vn/affiliate/123456"
                  fontSize="17px"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ padding: '10px', width: '70%' }}
                >
                  SAO CHÉP
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Danh sách Đơn Hàng" value="1" />
              <Tab label="lịch sử rút tiền" value="2" />
            </TabList>
          </Box>

          <TabPanel value="1">
            {' '}
            <h1>Danh sách Đơn Hàng</h1>
            <Grid item xs={12} lg={8} style={{ height: 'auto', margin: '30px 0px' }}>
              <Danhsachdh />
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            {' '}
            <h1>Lịch sử rút tiền</h1>
            <Grid item xs={12} lg={8} style={{ height: 'auto', margin: '30px 0px' }}>
              <HistoryMoney />
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
      <Grid item xs={12}>
        <Banner1 />
      </Grid>
    </Box>
  );
};

export default CollaboratePost;
