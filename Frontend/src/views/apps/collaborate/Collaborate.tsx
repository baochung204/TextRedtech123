import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Avatar,
  Box,
  Button,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Tab,
  Typography,
  styled,
  Tooltip,
} from '@mui/material';
import { IconInfoCircle, IconPackage } from '@tabler/icons-react';
import MonthlyEarnings from 'src/components/dashboards/modern/MonthlyEarnings';
import MonthlyEarnings1 from 'src/components/dashboards/modern/MonthlyEarnings1';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import icon1 from '../../../assets/images/svgs/icon-connect.svg';
import Danhsachdh from './dsdh';
import HistoryMoney from './lsrt';
import badge from 'src/assets/images/badge/badge2.png';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { FaChartLine } from 'react-icons/fa';
import { GiClick } from 'react-icons/gi';
import { PiPersonFill } from 'react-icons/pi';
import userimg from 'src/assets/images/profile/user-1.jpg';
import React, { useState } from 'react';

import Popupwithdrawmoney from '../customerList/Popupwithdrawmoney';
import PopupConvert from '../customerList/Popupconvert';

interface cardType {
  icon: JSX.Element;
  title: string;
  digits: string;
  bgcolor: string;
}
const topcards: cardType[] = [
  {
    icon: <GiClick size={40} color="#FFAE1F" />,
    title: 'Clicks',
    digits: '96',
    bgcolor: 'warning',
  },
  {
    icon: <PiPersonFill size={40} color="#5D87FF" />,
    title: 'Khách hàng',
    digits: '3.650',
    bgcolor: 'primary',
  },
  {
    icon: <BiSolidPurchaseTag size={40} color="#49BEFF" />,
    title: 'Đơn hàng',
    digits: '3850',
    bgcolor: 'secondary',
  },

  {
    icon: <FaChartLine size={40} color="#13DEB9" />,
    title: 'Doanh Thu',
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
  const [value1, setValue1] = React.useState<Dayjs | null>(null);
  const [value2, setValue2] = React.useState<Dayjs | null>(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = React.useState(false);
  const [usdValue, setUsdValue] = useState<number | null>(null);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const ProfileImage = styled(Box)(() => ({
    backgroundImage: 'linear-gradient(#50b2fc,#f44c66)',
    borderRadius: '50%',
    width: '110px',
    height: '110px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  // Function mở popup
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // Function đóng popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleOpenPopup2 = () => {
    setIsPopupOpen2(true);
  };

  const handleClosePopup2 = () => {
    setUsdValue(null);

    setIsPopupOpen2(false);
  };

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
          <Box paddingRight="10px" textAlign={{ sx: 'center', lg: 'start' }}>
            {' '}
            <Box
              width={{ md: '250px', lg: '250px', xl: '320px', xs: '320px' }}
              marginY={{ xs: '10px', md: '10px', lg: '20px' }}
              marginX={{ xs: 'auto', md: '0px' }}
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ width: '48%' }}
                onClick={handleOpenPopup}
              >
                RÚT TIỀN
              </Button>

              <Button
                variant="contained"
                color="error"
                sx={{ width: '48%' }}
                onClick={handleOpenPopup2}
              >
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
                  Redtech tiến hành chi trả hoa hồng (tối thiểu từ 2.000.000đ) cho đối tác từ ngày
                  16-20 hàng tháng.Đối tác doanh nghiệp vui lòng xuất VAT & gửi về RedTech trước
                  ngày 16 hàng tháng
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
            <Typography variant="h3" margin="15px 0">
              Liên kết giới thiệu
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <CustomOutlinedInput
                  id="http"
                  placeholder="http://s"
                  value="https://redtech.ai.vn?ref=RT1209"
                  fontSize="17px"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ padding: '10px', width: '100%' }}
                >
                  SAO CHÉP
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box paddingTop="30px">
            <Grid container spacing={2}>
              {/* Left section - 3 columns */}
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Center horizontally
                    justifyContent: 'center', // Center vertically
                    backgroundColor: '#FDEDE8',
                    padding: '20px',
                    borderRadius: '14px',
                  }}
                >
                  <ProfileImage>
                    <Avatar
                      src={userimg}
                      alt={userimg}
                      sx={{
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                        border: '4px solid #fff',
                      }}
                    />
                  </ProfileImage>
                  <Box sx={{ marginTop: '10px', textAlign: 'center' }}>
                    <Typography fontWeight={600} variant="h5">
                      Nguyễn Đăng Hòa
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="h6"
                      fontWeight={400}
                      sx={{ color: '#757575', margin: '10px 0' }}
                    >
                      Đối tác cá nhân
                    </Typography>
                    <Chip label="Hoạt động" color="success" />
                  </Box>
                </Box>
              </Grid>
              {/* Left section - 9 columns */}
              <Grid item xs={12} md={8}>
                <Box
                  height="100%"
                  bgcolor="error.light"
                  sx={{
                    padding: 2,
                    borderRadius: 2,
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    {/* Left Column */}
                    <Grid
                      item
                      xs={4}
                      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                      {/* "Trạng thái đối tác" centered above the icon */}
                      <Typography
                        variant="h5"
                        sx={{
                          py: 2,
                          fontWeight: 600,
                          color: '#FA896B',
                          textAlign: 'center', // Center the text
                        }}
                      >
                        Trạng thái đối tác
                      </Typography>

                      {/* Icon */}
                      <Box
                        sx={{
                          width: '100%',
                          maxWidth: '150px',
                          borderRadius: 1,
                          overflow: 'hidden',
                          mb: 1, // Margin below the image
                        }}
                      >
                        <img
                          src={badge}
                          alt="Banner chiến lược"
                          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                      </Box>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={4}>
                      <Typography
                        variant="h6"
                        fontSize="30px"
                        sx={{
                          lineHeight: 1.5,
                          textAlign: 'center', // Center the paragraph
                        }}
                      >
                        Rank A
                        <Tooltip
                          title="Đối tác Affiliate có cấp bậc rank càng cao sẽ được ảnh hưởng các quyền lợi
                        tốt hơn các đối tác thông thường. Khi đó, bạn có thể thắt chặt thêm quan hệ
                        đối tác chiến lược với RedTech và tận hưởng nhiều lợi ích tốt hơn."
                          placement="top"
                          arrow
                        >
                          <IconInfoCircle />
                        </Tooltip>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Danh sách đơn hàng" value="1" />
              <Tab label="lịch sử rút tiền" value="2" />
            </TabList>
          </Box>

          <TabPanel value="1">
            {' '}
            <Grid item xs={12} lg={8} style={{ height: 'auto' }}>
              <Danhsachdh />
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            {' '}
            <Grid item xs={12} lg={8} style={{ height: 'auto', marginBottom: '30px' }}>
              <HistoryMoney />
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>

      <Dialog open={isPopupOpen} onClose={handleClosePopup} maxWidth="xs" fullWidth>
        <DialogTitle
          sx={{
            m: 'auto',
          }}
        >
          <Typography variant="h4">Rút tiền</Typography>
        </DialogTitle>
        <DialogContent style={{ display: 'flex', justifyContent: 'center' }}>
          <Popupwithdrawmoney />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup}>Hủy</Button>
          <Button onClick={handleClosePopup} variant="contained" color="primary">
            Yêu cầu rút tiền
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isPopupOpen2}
        onClose={handleClosePopup2}
        maxWidth="xs"
        keepMounted
        PaperProps={{
          sx: {
            borderRadius: '15px', // Add border-radius to the entire dialog
          },
        }}
      >
        <DialogTitle
          sx={{
            m: 'auto',
          }}
        >
          <Typography variant="h4">Đổi point</Typography>
        </DialogTitle>

        <DialogContent
          sx={{
            width: '430px',
            height: '250px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '15px',
            overflowX: 'hidden', // Turn off horizontal scrollbar
          }}
        >
          <Box
            sx={{
              width: '400px',
              height: 'auto',
              borderRadius: '15px',
              overflowX: 'hidden',
              padding: '10px 0',
            }}
          >
            <PopupConvert usdValue={usdValue} setUsdValue={setUsdValue} />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClosePopup2}>Hủy</Button>
          <Button onClick={handleClosePopup2} variant="contained" color="primary">
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CollaboratePost;