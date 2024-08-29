import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  Button,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Typography,
} from '@mui/material';
import { IconPackage } from '@tabler/icons-react';
import React from 'react';
import ProductPerformances from 'src/components/dashboards/ecommerce/ProductPerformances';
import MonthlyEarnings from 'src/components/dashboards/modern/MonthlyEarnings';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import ChildCard from 'src/components/shared/ChildCard';
import icon1 from '../../../assets/images/svgs/icon-connect.svg';
import icon2 from '../../../assets/images/svgs/icon-user-male.svg';
import icon3 from '../../../assets/images/svgs/icon-briefcase.svg';
import icon4 from '../../../assets/images/svgs/icon-mailbox.svg';
import icon5 from '../../../assets/images/svgs/icon-favorites.svg';
import icon6 from '../../../assets/images/svgs/icon-speech-bubble.svg';
import icon7 from '../../../assets/images/svgs/img.png';

interface cardType {
  icon: string;
  title: string;
  digits: string;
  bgcolor: string;
}
const topcards: cardType[] = [
  {
    icon: icon7,
    title: 'Lượt Clicks',
    digits: '96',
    bgcolor: 'warning',
  },
  {
    icon: icon2,
    title: 'Thành Viên',
    digits: '3,650',
    bgcolor: 'primary',
  },
  {
    icon: icon1,
    title: 'Tỉ Lệ',
    digits: '35 %',
    bgcolor: 'secondary',
  },

  {
    icon: icon6,
    title: 'Payroll',
    digits: '$96k',
    bgcolor: 'success',
  },
  {
    icon: icon1,
    title: 'Reports',
    digits: '59',
    bgcolor: 'info',
  },
];
const CollaboratePost = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [month, setMonth] = React.useState('5');

  const handleSelectChange = (event: any) => {
    setMonth(event.target.value);
    // Cập nhật TabPanel tương ứng với giá trị chọn từ Select
    if (event.target.value === 5) {
      setMonth('5');
    } else if (event.target.value === 6) {
      setMonth('6');
    } else if (event.target.value === 7) {
      setMonth('7');
    }
  };

  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <div>
          <FormControl sx={{ margin: '20px 0', minWidth: 120 }}>
            <InputLabel id="month-dd">Chọn thời gian</InputLabel>
            <Select
              labelId="month-dd"
              id="month-dd"
              value={month}
              onChange={handleSelectChange}
              label="Chọn thời gian"
            >
              <MenuItem value={5}>1 tuần</MenuItem>
              <MenuItem value={6}>1 tháng</MenuItem>
              <MenuItem value={7}>1 năm</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <Box display="flex" width="100%" flexWrap="wrap">
        <Box
          width={{ xs: '100%', md: '30%' }}
          textAlign={{ xs: 'center', md: 'left', xl: 'left' }}
          margin="0px"
        >
          <Box
            borderBottom="1px solid #EEEEEE"
            width={{ md: '250px', lg: '250px', xl: '320px', xs: '320px' }}
            marginX={{ xs: 'auto', md: '0' }}
          >
            <MonthlyEarnings />
          </Box>

          <Box marginTop="30px" borderBottom="1px solid #EEEEEE">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" fontSize="15px">
                  Số tiền trong trạng thái chờ
                </Typography>

                <Typography variant="h1" fontSize="38px" margin="20px 0">
                  0 đ
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" fontSize="15px">
                  Số tiền đã nhận
                </Typography>
                <Typography variant="h1" fontSize="38px" margin="20px 0">
                  0 đ
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box textAlign={'start'}>
            {' '}
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '250px', marginTop: '20px', padding: '10px 0' }}
            >
              GỬi YÊU CẦU THANH TOÁN
            </Button>
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
              <Typography variant="body1" color="textSecondary" width="240px">
                <span>
                  Vbee tiến hành chi trả từ ngày 15-20 hàng tháng cho tất cả tài khoản Affiliate{' '}
                  <a href="#">Chính sách </a>. Hạn mức thanh toán tối thiểu là 2.000.000đ
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box width={{ xs: '100%', md: '70%' }}>
          <Box display="flex" justifyContent="space-between" flexWrap="wrap" padding="10px">
            <Grid container display={'flex'} justifyContent={'space-between'} gap={'2px'}>
              {topcards.map((topcard, i) => (
                <Grid item xs={12} sm={4} lg={2} key={i}>
                  <Box bgcolor={topcard.bgcolor + '.light'} textAlign="center">
                    <CardContent>
                      <img src={topcard.icon} alt={topcard.icon} width="50" />
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
                  value="http://vbee.vn/affiliate/123456"
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
                  value="http://vbee.vn/affiliate/123456"
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
              <Tab label="Yêu cầu rút tiền" value="2" />
            </TabList>
          </Box>

          <TabPanel value="1">
            {' '}
            <h1>Danh sách Đơn Hàng</h1>
            <Grid item xs={12} lg={8} style={{ height: 'auto', margin: '30px 0px' }}>
              <ProductPerformances />
            </Grid>
            <Grid>
              <Box
                sx={{
                  position: 'relative',
                  display: { md: 'inline-block', xs: 'none' },
                  width: '100%',
                  maxWidth: '100%',
                  textAlign: 'center',
                }}
              >
                <img
                  src="https://www.pageonepower.com/hs-fs/hubfs/Footer-4.png?width=1440&height=576&name=Footer-4.png"
                  alt=""
                  style={{ maxWidth: '100%' }}
                />
                <div
                  style={{
                    textAlign: 'center',
                    width: '510px',
                    position: 'absolute',
                    top: '40%',
                    left: '60%',
                    transform: 'translate(-50%, -50%)',
                    color: 'black',
                    lineHeight: '1.2',
                    fontSize: '40px',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <span>Sử dụng hình ảnh sản phẩm để gia tăng hiệu quả marketing</span>
                  <Typography variant="body1" color="textSecondary">
                    Chỉ được phép chứa chữ cái, chữ số và dấu gạch dưới Sử dụng hình ảnh sản phẩm để
                    gia tăng hiệu quả marketing tăng hiệu quả marketing
                  </Typography>
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ width: '250px', marginTop: '20px', padding: '10px 0' }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l6 6" />
                        <path d="M5 12l6 -6" />
                      </svg>
                      <span style={{ marginLeft: ' 10px' }}>GIỚI THIỆU DỊCH VỤ</span>
                    </Button>{' '}
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ width: '250px', marginTop: '20px', padding: '10px 0' }}
                    >
                      <span style={{ marginRight: ' 10px' }}> HÌNH ẢNH VÀ VIDEO</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M15 16l4 -4" />
                        <path d="M15 8l4 4" />
                      </svg>
                    </Button>{' '}
                  </div>
                </div>
              </Box>
            </Grid>
          </TabPanel>
          <TabPanel value="3">
            {' '}
            <h1>Yêu cầu rút tiền </h1>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default CollaboratePost;
