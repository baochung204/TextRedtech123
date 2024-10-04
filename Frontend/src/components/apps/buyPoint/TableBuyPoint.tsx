import { Box, Button, Grid, Input, styled, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import TableData from './data/dataBuyPoint';
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
  const handlePackageClick = (items: any) => {
    setClickedId(items.id);
    setTotalPrice(items.text2);
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
          {TableData.map((items, index) => (
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
                  backgroundColor: theme.palette.mode === 'dark' ? '#303C50' : '',
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
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
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
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
              <Link to={'/pay/checkout_point'} style={{ color: 'white' }}>
                Thanh toán ngay
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TableBuyPoint;
