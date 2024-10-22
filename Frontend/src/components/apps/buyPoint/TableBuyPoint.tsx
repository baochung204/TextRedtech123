import { Box, Button, Grid, Input, styled, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logoPoint from 'src/assets/images/logos/R-Point.png';

import { AppDispatch, AppState } from 'src/store/Store';
import { fetchListPointData } from 'src/store/user/points/listPointSlice';
const BoxStyled = styled(Box)(() => ({
  padding: '30px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const TableBuyPoint = () => {
  const theme = useTheme();
  const [clickedId, setClickedId] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState<number | string>(0);
  const [click, setClick] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);
  const [toggle, setToggle] = useState<number | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const listPoints = useSelector((state: AppState) => state.point_list.dataa);
  useEffect(() => {
    dispatch(fetchListPointData());
  }, [dispatch]);

  console.log(listPoints);

  const handlePackageClick = (items: any) => {
    setClickedId(items.pointType);
    setTotalPrice(items.cash);
  };

  const formatNumber = (num: string) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    const number = parseInt(inputValue, 10);
    if (!isNaN(number)) {
      setToggle(number * 300);
    } else {
      setToggle(null);
    }
    setValue(formatNumber(inputValue));
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={3} textAlign="center" sx={{ pt: 4 }}>
          {listPoints.map((items) => (
            <Grid item lg={3} sm={6} xs={12}>
              <BoxStyled
                onClick={() => {
                  handlePackageClick(items);
                }}
                sx={{
                  borderWidth: 1,
                  border: `2px solid ${clickedId === items.pointType ? '#ff0000' : 'none'}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '120px',
                  gap: '-10px',
                  boxShadow: ' 0px  4px 6px rgba(0, 0, 0, 0.055)',
                  backgroundColor: theme.palette.mode === 'dark' ? '#303C50' : '',
                  onClick: () => {
                    console.log('Clicked item:', clickedId);
                  },
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
                  {items.pointType === 'CUSTOMIZE' ? (
                    <>
                      <Typography variant="h3" sx={{ fontWeight: 700 }}>
                        {!click ? (
                          // <div onClick={() => setClick(!click)}>{items.point}</div>
                          <Box onClick={() => setClick(!click)}>Tùy chọn</Box>
                        ) : (
                          <Input
                            value={value}
                            onChange={handleChange}
                            onBlur={() => {
                              if (!value || value === '') setClick(false);
                            }}
                            inputProps={{
                              maxLength: 11,
                              style: {
                                textAlign: 'center',
                                fontSize: '24px',
                                color: '#161823',
                                fontWeight: '700',
                              },
                            }}
                          />
                        )}
                      </Typography>
                    </>
                  ) : (
                    <Typography variant="h3" sx={{ fontWeight: 700 }}>
                      {items.point.toLocaleString('vi-VN')}
                    </Typography>
                  )}
                  <img src={logoPoint} alt="" width={30} height={30} style={{ borderRadius: 50 }} />
                </BoxStyled>
                {items.pointType === 'CUSTOMIZE' ? (
                  <Typography
                    variant="h6"
                    sx={{
                      paddingTop: '5px',
                      color: theme.palette.mode === 'dark' ? '#ffffff' : '#16182380',
                    }}
                  >
                    Hỗ trợ số lượng lớn
                    {/* {toggle === null ? items.cash : <>{toggle.toLocaleString('vi-VN')} ₫</>} */}
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    sx={{
                      paddingTop: '5px',
                      color: theme.palette.mode === 'dark' ? '#ffffff' : '#16182380',
                    }}
                  >
                    {items.cash ? items.cash.toLocaleString('vi-VN') : '0'} ₫
                  </Typography>
                )}
              </BoxStyled>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
            <Typography variant="h3" sx={{ fontWeight: 600, fontSize: 18 }}>
              Tổng tiền :
            </Typography>
            <Typography variant="h3" sx={{ color: '#FC2032', fontWeight: 700, fontSize: 20 }}>
              {Number.isFinite(totalPrice) ? (
                totalPrice.toLocaleString('vi-VN')
              ) : (
                <> {toggle === null ? '0' : toggle.toLocaleString('vi-VN')}</>
              )}
              ₫
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to={`/pay/checkout_point/${clickedId}`} style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  px: 5,
                  py: 1,
                  backgroundColor: '#FC2032',
                  fontWeight: 700,
                  fontSize: 18,
                  ':hover': {
                    backgroundColor: '#F22A51',
                  },
                }}
              >
                Thanh toán ngay
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TableBuyPoint;
