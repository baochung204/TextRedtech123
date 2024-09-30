import { Box, CardContent, Grid, Typography } from '@mui/material';

import icon3 from '../../../assets/ICON/khách hàng.png';
import icon1 from '../../../assets/ICON/cvr.png';
import icon5 from '../../../assets/ICON/aov.png';
import icon4 from '../../../assets/ICON/dơn hang.png';
import icon6 from '../../../assets/ICON/gmv.png';
import icon2 from '../../../assets/ICON/khach hang.png';

interface cardType {
  icon: string;
  title: string;
  digits: string;
  bgcolor: string;
}

const topcards: cardType[] = [
  {
    icon: icon2,
    title: 'Trợ lý',
    digits: '96',
    bgcolor: 'error.light',
  },
  {
    icon: icon3,
    title: 'Khách hàng',
    digits: '3,650',
    bgcolor: 'error.light',
  },
  {
    icon: icon4,
    title: 'Đơn hàng',
    digits: '356',
    bgcolor: 'error.light',
  },
  {
    icon: icon5,
    title: 'AOV',
    digits: '696',
    bgcolor: 'error.light',
  },
  {
    icon: icon6,
    title: 'GMV',
    digits: '96',
    bgcolor: 'error.light',
  },
  {
    icon: icon1,
    title: 'CVR',
    digits: '59',
    bgcolor: 'error.light',
  },
];

const TopCards = () => {
  return (
    <Grid container spacing={3}>
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={2} key={i}>
          <Box textAlign="center" sx={{ backgroundColor: topcard.bgcolor }}>
            <CardContent>
              <img src={topcard.icon} alt={topcard.icon} height={40} />
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
                {topcard.title == 'AOV'
                  ? 'k'
                  : topcard.title == 'GMV'
                  ? 'M'
                  : topcard.title == 'CVR'
                  ? '%'
                  : ''}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
