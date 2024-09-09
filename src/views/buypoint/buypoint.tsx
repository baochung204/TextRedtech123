import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';

import ChildCard from 'src/components/shared/ChildCard';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Input,
  styled,
  Typography,
} from '@mui/material';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import logoMatercard from 'src/assets/images/logoPay/materCard.png';
import logoVP from 'src/assets/images/logoPay/VP.jpg';
import logoBIDV from 'src/assets/images/logoPay/bidv.jpg';
import logoVisa from 'src/assets/images/logoPay/visa.jpg';
import logoACB from 'src/assets/images/logoPay/acb.png';
import logoJCB from 'src/assets/images/logoPay/JCB.png';
import logoMB from 'src/assets/images/logoPay/Mb.jpg';
import logoTCB from 'src/assets/images/logoPay/TCB.jpg';
import { useTheme } from '@mui/material';
import { keyframes } from '@mui/system';

const BoxStyled = styled(Box)(() => ({
  padding: '30px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));
const BCrumb = [
  {
    to: '/',
    title: 'Trang Chủ',
  },
  { to: '/buy/point', title: 'Đổi R-Point' },
];
const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

interface BuyPointProps {
  id: string;
  text1: number | string;
  text2: number | string;
}

const BuyPoint = () => {
  const theme = useTheme();
  const data: BuyPointProps[] = [
    { id: '1', text1: 70, text2: 20100 },
    { id: '2', text1: 350, text2: 100500 },
    { id: '3', text1: 700, text2: 201000 },
    { id: '4', text1: 1400, text2: 402000 },
    { id: '5', text1: 3500, text2: 1055000 },
    { id: '6', text1: 7000, text2: 2010000 },
    { id: '7', text1: 17500, text2: 5025000 },
    { id: '8', text1: 'Tùy chỉnh', text2: 'Hỗ trợ số lượng lớn' },
  ];
  const [clickedId, setClickedId] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState<number | string>(0);

  const [click, setClick] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);
  const [toggle, setToggle] = useState<number | null>(null);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const onHandleOpenPopup = () => {
    setOpenPopup(!openPopup);
  };
  const handlePackageClick = (items: BuyPointProps) => {
    setClickedId(items.id);
    setTotalPrice(items.text2);
  };

  const formatNumber = (num: string) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(typeof e.target.value);

    const inputValue = e.target.value.replace(/\D/g, '');
    const number = parseInt(inputValue, 10);

    if (!isNaN(number)) {
      setToggle(number * 287);
    } else {
      setToggle(null);
    }

    setValue(formatNumber(inputValue));
  };

  return (
    <PageContainer title="Buy Point " description="Buy Point Here">
      <Breadcrumb title="Quy Đổi R-Point  " items={BCrumb} />
      <ChildCard>
        {/* <Button onClick={() => onHandleOpenPopup()}>click</Button> */}
        <Grid container spacing={7}>
          <Grid item lg={10} sm={6} xs={12} sx={{}}>
            <Box
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#404759' : '#FEF3F4', // Sử dụng màu nền tùy theo chế độ
                padding: 0.3,
                overflow: 'hidden', // Đảm bảo không có văn bản hiển thị ngoài vùng cuộn
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  animation: `${marqueeAnimation} 20s linear infinite`,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: theme.palette.mode === 'dark' ? '#FD6A76' : '#FC2032',
                    fontWeight: 400,
                    fontSize: 16,
                  }}
                >
                  [Quà tặng] Tặng 01 bộ chiến lược AIDA Sales Formula dành cho trợ lý bán hàng - áp
                  dụng từ ngày 01/10-31/12/2024 cho tất các khách hàng lần đầu tiên nạp Point
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={2} sm={6} xs={12}>
            <Link
              to={'/history/buy-point'}
              style={{
                color: 'black',
                textDecoration: 'underline',
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              <Button color="secondary">Lịch sử đổi Point</Button>
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={3} textAlign="center" sx={{ pt: 4 }}>
          {data.map((items, index) => (
            <Grid item lg={3} sm={6} xs={12} key={index}>
              <BoxStyled
                key={index}
                onClick={() => handlePackageClick(items)}
                sx={{
                  borderWidth: 1,
                  border: `2px solid ${clickedId === items.id ? '#ff0000' : 'none'}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '120px',
                  gap: '-10px',
                  boxShadow: ' 0px  4px 6px rgba(0, 0, 0, 0.055)',
                  backgroundColor: theme.palette.mode === 'dark' ? '#303C50' : '', // Sử dụng màu nền tùy theo chế độ
                }}
              >
                <BoxStyled
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '0',
                  }}
                >
                  {typeof items.text1 === 'string' ? (
                    <>
                      {' '}
                      <Typography variant="h3" sx={{ fontWeight: 700 }}>
                        {!click ? (
                          <div onClick={() => setClick(!click)}>{items.text1}</div>
                        ) : (
                          <Input
                            value={value}
                            onChange={handleChange}
                            // onChange={e => setValue(e.target.value)}
                            // onChange={handleChange1}
                            onBlur={value === '' ? () => setClick(false) : undefined}
                            inputProps={{
                              style: {
                                textAlign: 'center',
                                fontSize: '24px',
                                color: '#161823',
                                fontWeight: '700',
                              },
                            }}
                          />
                        )}
                      </Typography>{' '}
                    </>
                  ) : (
                    <>
                      {' '}
                      <Typography variant="h3" sx={{ fontWeight: 700 }}>
                        {items.text1.toLocaleString('vi-VN')}{' '}
                      </Typography>
                    </>
                  )}
                  <img src={logoPoint} alt="" width={30} height={30} style={{ borderRadius: 50 }} />
                </BoxStyled>
                {typeof items.text1 === 'string' ? (
                  <>
                    <Typography
                      variant="h6"
                      sx={{
                        paddingTop: '5px',
                        color: theme.palette.mode === 'dark' ? '#ffffff' : '#16182380',
                      }}
                    >
                      {toggle === null ? items.text2 : <>{toggle.toLocaleString('vi-VN')} ₫</>}
                    </Typography>{' '}
                  </>
                ) : (
                  <>
                    <Typography
                      variant="h6"
                      sx={{
                        paddingTop: '5px',
                        color: theme.palette.mode === 'dark' ? '#ffffff' : '#16182380',
                      }}
                    >
                      {items.text2.toLocaleString('vi-VN')} ₫
                    </Typography>
                  </>
                )}
              </BoxStyled>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row', md: 'row' },
            alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'center' },
            mt: { xs: 1, sm: 5, md: 5 },
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: 16 }}>Phương thức thanh toán :</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            <ul
              style={{
                display: 'flex',
                listStyleType: 'none',
                padding: 0,
                margin: 0,
                gap: 4,
                flexWrap: 'wrap',
              }}
            >
              <li>
                <img src={logoVisa} alt="visa" height={18} width={40} />
              </li>
              <li>
                <img src={logoMatercard} alt="matercard" height={18} width={40} />
              </li>
              <li>
                <img src={logoJCB} alt="acb" height={18} width={40} />
              </li>
              <li>
                <img src={logoBIDV} alt="bidv" height={18} width={40} />
              </li>
              <li>
                <img src={logoVP} alt="vp" height={18} width={40} />
              </li>

              <li>
                <img src={logoACB} alt="acb" height={18} width={40} />
              </li>
              <li>
                <img src={logoMB} alt="mb" height={18} width={40} />
              </li>
              <li>
                <img src={logoTCB} alt="mb" height={18} width={40} />
              </li>
            </ul>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            gap: '25px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              alignItems: 'center',
              mt: { xs: 1, sm: 5, md: 5 },
              xs: { alignContent: 'center' },
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 600, fontSize: 18 }}>
              Tổng tiền :
            </Typography>
            <Typography variant="h3" sx={{ color: '#FC2032', fontWeight: 700, fontSize: 20 }}>
              {typeof totalPrice === 'number' ? (
                totalPrice.toLocaleString('vi-VN')
              ) : (
                <> {toggle === null ? '0' : toggle.toLocaleString('vi-VN')}</>
              )}
              ₫
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 5,
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                px: 7,
                py: 1,
                backgroundColor: '#FC2032',
                fontWeight: 700,
                fontSize: 18,
                ':hover': {
                  backgroundColor: '#F22A51',
                },
              }}
            >
              <Link to={'/pay/point'} style={{ color: 'white' }}>
                Thanh toán ngay
              </Link>
            </Button>
          </Box>
        </Box>
        <Dialog open={openPopup}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <DialogTitle>Thông tin khuyến mãi</DialogTitle>
            <Button onClick={() => onHandleOpenPopup()}>X</Button>
          </Box>

          <DialogContent>
            <Typography variant="body1">
              Chúc mừng bạn! Bạn đã nhận được một ưu đãi đặc biệt cho việc quy đổi ngân lượng.
            </Typography>
          </DialogContent>
          <DialogContent>
            <Typography>
              Chi Tiêu Tối Thiểu: 100.000 VNĐ Xu Nhận Được: 1 xu cho mỗi 1.000 VNĐ chi tiêu Thời
              Gian Áp Dụng: 1 tuần
            </Typography>
          </DialogContent>
        </Dialog>
      </ChildCard>
    </PageContainer>
  );
};

export default BuyPoint;
