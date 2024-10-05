// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, CardContent, Grid, Typography } from '@mui/material';
import aov from 'src/assets/Adminphoto/aov.png';
import cvr from 'src/assets/Adminphoto/cvr.png';
import order from 'src/assets/Adminphoto/dơn hang.png';
import gmv from 'src/assets/Adminphoto/gmv.png';
import customer from 'src/assets/Adminphoto/khách hàng.png';
import iconExpense from 'src/assets/images/icon.png/expense.png';
import budget from 'src/assets/Adminphoto/chi phi.png';

interface cardType {
  icon: string;
  title: string;
  digits: string;
  bgcolor: string;
}
const topcards: cardType[] = [
  {
    icon: customer,
    title: 'Khách hàng',
    digits: '2,696',
    bgcolor: 'primary',
  },
  {
    icon: order,
    title: 'Đơn hàng',
    digits: '650',
    bgcolor: 'primary',
  },
  {
    icon: gmv,
    title: 'GMV',
    digits: '112M',
    bgcolor: 'primary',
  },
  {
    icon: aov,
    title: 'AOV',
    digits: '251K',
    bgcolor: 'primary',
  },
  {
    icon: cvr,
    title: 'CVR',
    digits: '251K',
    bgcolor: 'primary',
  },
  {
    icon: budget,
    title: 'Chi Phí',
    digits: '251K',
    bgcolor: 'primary',
  },
];
const Topcardassistant = () => {
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
                  width="auto"
                  height="50"
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

export default Topcardassistant;
