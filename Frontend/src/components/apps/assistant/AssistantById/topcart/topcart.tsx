// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, CardContent, Grid, Typography } from '@mui/material';
import iconExpense from 'src/assets/images/icon.png/expense.png';
import iconRotation from 'src/assets/images/icon.png/rotation.png';
import icon5 from 'src/assets/images/svgs/icon-favorites.svg';
import icon4 from 'src/assets/images/svgs/icon-mailbox.svg';
import icon3 from 'src/assets/images/svgs/icon-briefcase.svg';
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
    title: 'Khách hàng',
    digits: '2,696',
    bgcolor: 'primary',
  },
  {
    icon: icon3,
    title: 'Đơn hàng',
    digits: '650',
    bgcolor: 'warning',
  },
  {
    icon: icon4,
    title: 'GMV',
    digits: '112M',
    bgcolor: 'secondary',
  },
  {
    icon: icon5,
    title: 'AOV',
    digits: '251K',
    bgcolor: 'error',
  },
  {
    icon: iconRotation,
    title: 'Tổng Vòng Quay',
    digits: '251K',
    bgcolor: 'success',
  },
  {
    icon: iconExpense,
    title: 'Chi Phí',
    digits: '251K',
    bgcolor: 'info',
  },
];
const TopCart = () => {
  return (
    <Grid item xs={12} md={12} lg={4}>
      <Grid container spacing={3}>
        {topcards.map((topcard, i) => (
          <Grid item xs={12} sm={4} lg={6} key={i}>
            <Box bgcolor={topcard.bgcolor + '.light'} textAlign="center">
              <CardContent sx={{}}>
                <img
                  src={topcard.icon}
                  alt={topcard.icon}
                  width="50"
                  style={{ objectFit: 'cover' }}
                />
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
                    ? ''
                    : topcard.title == 'GMV'
                    ? ''
                    : topcard.title == 'CVR'
                    ? '%'
                    : ''}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default TopCart;
