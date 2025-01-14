// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, CardContent, Grid, Typography } from '@mui/material';
import aov from 'src/assets/Adminphoto/aov.png';
import budget from 'src/assets/Adminphoto/chi phi.png';
import cvr from 'src/assets/Adminphoto/cvr.png';
import order from 'src/assets/Adminphoto/dơn hang.png';
import gmv from 'src/assets/Adminphoto/gmv.png';
import customer from 'src/assets/Adminphoto/khách hàng.png';
import { ChatBotIndexType } from 'src/store/user/chatbots/type/assistantByIdType';

interface cardType {
  icon: string;
  title: string;
  digits: string;
  bgcolor: string;
}

interface IProps {
  chatBotIndex: ChatBotIndexType | null;
}
const Topcardassistant = ({ chatBotIndex }: IProps) => {
  const topcards: cardType[] = [
    {
      icon: customer,
      title: 'Khách hàng',
      digits: `${chatBotIndex?.customer}`,
      bgcolor: 'primary',
    },
    {
      icon: order,
      title: 'Chuyển đổi',
      digits: `${chatBotIndex?.converts}`,
      bgcolor: 'primary',
    },
    {
      icon: gmv,
      title: 'GMV',
      digits: `${chatBotIndex?.gvm}M`,
      bgcolor: 'primary',
    },
    {
      icon: aov,
      title: 'AOV',
      digits: `${chatBotIndex?.aov}K`,
      bgcolor: 'primary',
    },
    {
      icon: cvr,
      title: 'CVR',
      digits: `${chatBotIndex?.cvr}K`,
      bgcolor: 'primary',
    },
    {
      icon: budget,
      title: 'Chi Phí',
      digits: `${chatBotIndex?.expense}K`,
      bgcolor: 'primary',
    },
  ];
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
                <Typography color={topcard.bgcolor + '.main'} mt={1} variant="subtitle1">
                  {topcard.title}
                </Typography>
                <Typography color={topcard.bgcolor + '.main'} variant="h4" fontWeight={800}>
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
