import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';

import ChildCard from 'src/components/shared/ChildCard';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  styled,
  Typography,
} from '@mui/material';
import visa from '../../assets/images/pay/visa_acffbd.png';
import zalo from '../../assets/images/pay/zalopay_8e254f.png';
import momo from '../../assets/images/pay/momo_4256e5.png';
import matercard from '../../assets/images/pay/mastercard_light_5865fd.png';
import discover from '../../assets/images/pay/discover_4adc90.png';
import diners from '../../assets/images/pay/diners_0faca9.png';
import card_american from '../../assets/images/pay/card_american_express_51cd3f.png';
import bank_transfer from '../../assets/images/pay/BankTransfer_facae0.png';
import giftbox from '../../assets/images/icon.png/gift_9521097.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logochicken from 'src/assets/images/logos/logo chicken.png';
import { set } from 'lodash';
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
  { to: '/buy/point', title: 'Đổi Ngân Lượng' },
];

const IconCoin = () => (
  <svg
    className="custom-coin-icon"
    width="30"
    height="30"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
    <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
      fill="#FABC15"
    ></path>
    <path
      d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
      fill="#FEF5CD"
    ></path>
  </svg>
);
const BuyPoint = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const onHanldeClickOpenPopup = () => {
    setOpenPopup(!openPopup);
  };
  return (
    <PageContainer title="Buy Point " description="Buy Point Here">
      <Breadcrumb title="Quy Đổi Ngân Lượng  " items={BCrumb} />
      <ChildCard>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              gap: 1,
            }}
          >
            <marquee maxWidth="50%">
              <Typography variant="h3" sx={{ color: '#F22A51', fontWeight: 700, fontSize: 16 }}>
                Quy Đổi Ngân Lượng chương trình khuyến mại 25% cho các huynh đệ quy đổi ngân lượng
                lần đầu tiên
              </Typography>
            </marquee>
          </Box>
          <Box>
            <Link
              to={'/history/buy-point'}
              style={{
                color: 'black',
                textDecoration: 'underline',
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              <Button color="secondary">Lịch sử quy đổi</Button>
            </Link>
          </Box>
        </Box>

        <Grid container spacing={3} textAlign="center" sx={{ pt: 4 }}>
          <Grid item lg={3} sm={6} xs={12}>
            <BoxStyled
              sx={{
                backgroundColor: 'white',
                borderColor: '#EFEFEF',
                borderWidth: 1,
                borderStyle: 'solid',
                color: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120px',
                gap: '-10px',
                boxShadow: ' 0px  4px 6px rgba(0, 0, 0, 0.055)',
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
                <img
                  src={logochicken}
                  alt=""
                  width={30}
                  height={30}
                  style={{ padding: '4px', backgroundColor: '#FFE0B3', borderRadius: 50 }}
                />

                <Typography variant="h3" sx={{ color: 'black', fontWeight: 700 }}>
                  70
                </Typography>
              </BoxStyled>

              <Typography variant="h6" sx={{ color: '#16182380', paddingTop: '5px' }}>
                ₫20,100
              </Typography>
            </BoxStyled>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <BoxStyled
              sx={{
                backgroundColor: 'white',
                borderColor: '#EFEFEF',
                borderWidth: 1,
                borderStyle: 'solid',
                color: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120px',
                gap: '-10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                position: 'relative',
              }}
            >
              <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                <img
                  src={giftbox}
                  alt="Giftbox"
                  width={25}
                  height={25}
                  onClick={() => onHanldeClickOpenPopup()}
                />
              </Box>

              <BoxStyled
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '0',
                }}
              >
                <img
                  src={logochicken}
                  alt=""
                  width={30}
                  height={30}
                  style={{ padding: '4px', backgroundColor: '#FFE0B3', borderRadius: 50 }}
                />

                <Typography variant="h3" sx={{ color: 'black', fontWeight: 700 }}>
                  350
                </Typography>
              </BoxStyled>

              <Typography variant="h6" sx={{ color: '#16182380', paddingTop: '5px' }}>
                ₫100,500
              </Typography>
            </BoxStyled>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <BoxStyled
              sx={{
                backgroundColor: 'white',
                borderColor: '#EFEFEF',
                borderWidth: 1,
                borderStyle: 'solid',
                color: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120px',
                gap: '-10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                position: 'relative',
              }}
            >
              {' '}
              <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                <>
                  <img src={giftbox} alt="" width={25} height={25} />
                </>
              </Box>
              <BoxStyled
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '0',
                }}
              >
                <img
                  src={logochicken}
                  alt=""
                  width={30}
                  height={30}
                  style={{ padding: '4px', backgroundColor: '#FFE0B3', borderRadius: 50 }}
                />

                <Typography variant="h3" sx={{ color: 'black', fontWeight: 700 }}>
                  700
                </Typography>
              </BoxStyled>
              <Typography variant="h6" sx={{ color: '#16182380', paddingTop: '5px' }}>
                ₫201,000
              </Typography>
            </BoxStyled>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <BoxStyled
              sx={{
                backgroundColor: 'white',
                borderColor: '#EFEFEF',
                borderWidth: 1,
                borderStyle: 'solid',
                color: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120px',
                gap: '-10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                position: 'relative',
              }}
            >
              {' '}
              <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                <>
                  <img src={giftbox} alt="" width={25} height={25} />
                </>
              </Box>
              <BoxStyled
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '0',
                }}
              >
                <img
                  src={logochicken}
                  alt=""
                  width={30}
                  height={30}
                  style={{ padding: '4px', backgroundColor: '#FFE0B3', borderRadius: 50 }}
                />

                <Typography variant="h3" sx={{ color: 'black', fontWeight: 700 }}>
                  1,400
                </Typography>
              </BoxStyled>
              <Typography
                variant="h6"
                sx={{ color: '#16182380', paddingTop: '5px', fontWeight: 700 }}
              >
                ₫402,000
              </Typography>
            </BoxStyled>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <BoxStyled
              sx={{
                backgroundColor: 'white',
                borderColor: '#EFEFEF',
                borderWidth: 1,
                borderStyle: 'solid',
                color: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120px',
                gap: '-10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                position: 'relative',
              }}
            >
              {' '}
              <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                <>
                  <img src={giftbox} alt="" width={25} height={25} />
                </>
              </Box>
              <BoxStyled
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '0',
                }}
              >
                <img
                  src={logochicken}
                  alt=""
                  width={30}
                  height={30}
                  style={{ padding: '4px', backgroundColor: '#FFE0B3', borderRadius: 50 }}
                />

                <Typography variant="h3" sx={{ color: 'black', fontWeight: 700 }}>
                  3,500
                </Typography>
              </BoxStyled>
              <Typography
                variant="h6"
                sx={{ color: '#16182380', paddingTop: '5px', fontWeight: 700 }}
              >
                ₫1,0.055,000
              </Typography>
            </BoxStyled>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <BoxStyled
              sx={{
                backgroundColor: 'white',
                borderColor: '#EFEFEF',
                borderWidth: 1,
                borderStyle: 'solid',
                color: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120px',
                gap: '-10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                position: 'relative',
              }}
            >
              {' '}
              <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                <>
                  <img src={giftbox} alt="" width={25} height={25} />
                </>
              </Box>
              <BoxStyled
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '0',
                }}
              >
                <img
                  src={logochicken}
                  alt=""
                  width={30}
                  height={30}
                  style={{ padding: '4px', backgroundColor: '#FFE0B3', borderRadius: 50 }}
                />

                <Typography variant="h3" sx={{ color: 'black', fontWeight: 700 }}>
                  7000
                </Typography>
              </BoxStyled>
              <Typography
                variant="h6"
                sx={{ color: '#16182380', paddingTop: '5px', fontWeight: 700 }}
              >
                ₫2.010.000
              </Typography>
            </BoxStyled>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <BoxStyled
              sx={{
                backgroundColor: 'white',
                borderColor: '#EFEFEF',
                borderWidth: 1,
                borderStyle: 'solid',
                color: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120px',
                gap: '-10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                position: 'relative',
              }}
            >
              {' '}
              <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                <>
                  <img src={giftbox} alt="" width={25} height={25} />
                </>
              </Box>
              <BoxStyled
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '0',
                }}
              >
                <img
                  src={logochicken}
                  alt=""
                  width={30}
                  height={30}
                  style={{ padding: '4px', backgroundColor: '#FFE0B3', borderRadius: 50 }}
                />

                <Typography variant="h3" sx={{ color: 'black', fontWeight: 700 }}>
                  17,500
                </Typography>
              </BoxStyled>
              <Typography
                variant="h6"
                sx={{ color: '#16182380', paddingTop: '5px', fontWeight: 700 }}
              >
                ₫5.025.000
              </Typography>
            </BoxStyled>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <BoxStyled
              sx={{
                backgroundColor: 'white',
                borderColor: '#EFEFEF',
                borderWidth: 1,
                borderStyle: 'solid',
                color: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120px',
                gap: '-10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.055)',
                position: 'relative',
              }}
            >
              {' '}
              <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                <>
                  <img src={giftbox} alt="" width={25} height={25} />
                </>
              </Box>
              <BoxStyled
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '0',
                }}
              >
                <img
                  src={logochicken}
                  alt=""
                  width={30}
                  height={30}
                  style={{ padding: '4px', backgroundColor: '#FFE0B3', borderRadius: 50 }}
                />

                <Typography variant="h3" sx={{ color: 'black', fontWeight: 700 }}>
                  Tùy chỉnh
                </Typography>
              </BoxStyled>
              <Typography
                variant="h6"
                sx={{ color: '#16182380', paddingTop: '5px', fontWeight: 700 }}
              >
                Hỗ trợ số lượng lớn
              </Typography>
            </BoxStyled>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row', md: 'row' },
            alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'center' },
            gap: 2,
            mt: { xs: 1, sm: 5, md: 5 },
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: 16, color: 'black' }}>
            Phương thức thanh toán :
          </Typography>
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
                <img src={visa} alt="visa" height={16} width={25} />
              </li>
              <li>
                <img src={zalo} alt="zalo" height={16} width={25} />
              </li>
              <li>
                <img src={momo} alt="momo" height={16} width={25} />
              </li>
              <li>
                <img src={matercard} alt="mastercard" height={16} width={25} />
              </li>
              <li>
                <img src={discover} alt="discover" height={16} width={25} />
              </li>
              <li>
                <img src={diners} alt="diners" height={16} width={25} />
              </li>
              <li>
                <img src={card_american} alt="american express" height={16} width={25} />
              </li>
              <li>
                <img src={bank_transfer} alt="bank transfer" height={16} width={25} />
              </li>
            </ul>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
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
            <Typography variant="h3" sx={{ color: 'black', fontWeight: 600, fontSize: 18 }}>
              Tổng tiền :
            </Typography>
            <Typography variant="h3" sx={{ color: '#F22A51', fontWeight: 700, fontSize: 20 }}>
              ₫1,055,000
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
                backgroundColor: '#FE2C55',
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
            <Button onClick={() => onHanldeClickOpenPopup()}>X</Button>
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
