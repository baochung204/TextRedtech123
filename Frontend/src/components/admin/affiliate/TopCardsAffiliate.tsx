import { Box, CardContent, Grid, Typography } from '@mui/material';
import icon3 from 'src/assets/images/svgs/icon-briefcase.svg';
import icon5 from 'src/assets/images/svgs/icon-favorites.svg';
import icon4 from 'src/assets/images/svgs/icon-mailbox.svg';
import icon2 from 'src/assets/images/svgs/icon-user-male.svg';

interface cardType {
  icon: string;
  title: string;
  digits: string;
  bgcolor: string;
}

const topcards: cardType[] = [
  {
    icon: icon2,
    title: 'Đơn hàng',
    digits: '8386',
    bgcolor: 'primary',
  },
  {
    icon: icon3,
    title: 'R-point',
    digits: '123.456.789',
    bgcolor: 'warning',
  },
  {
    icon: icon4,
    title: 'Doanh thu',
    digits: '543.210.000đ',
    bgcolor: 'secondary',
  },
  {
    icon: icon5,
    title: 'Hoa hồng',
    digits: '123.456.789đ',
    bgcolor: 'error',
  },
];
const TopCardsAffiliate = () => {
  return (
    <>
      <Grid container spacing={3}>
        {topcards.map((topcard, i) => (
          <Grid item xs={12} sm={4} lg={3} key={i}>
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
    </>
  );
};

export default TopCardsAffiliate;
