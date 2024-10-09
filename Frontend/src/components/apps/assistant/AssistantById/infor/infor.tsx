// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Chip, Grid, LinearProgress, Paper, Stack, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import DashboardCard from 'src/components/shared/DashboardCard';
import avt9 from 'src/assets/images/profile/user-9.jpg';
import rank8 from 'src/assets/images/rank/rank8.png';
import bot from 'src/assets/images/backgrounds/bot.svg';

interface sellsData {
  product: string;
  percent: number;
  color: string;
}
const sells: sellsData[] = [
  {
    product: 'Kinh nghiệm',
    percent: 90,
    color: 'secondary',
  },
];
interface IInforBot {
  name: string;
  date: string;
  model: string;
  avatar: string;
}
const inforBot: IInforBot = {
  name: 'Chat Bot Message Of Facebook',
  date: '18/8/2024',
  model: 'GPT-4',
  avatar: bot,
};
const BoxStyled = styled(Box)(() => ({
  padding: '22px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  '&:hover': {
    transform: 'scale(1.03)',
  },
  boxShadow: ' 0px  4px 6px rgba(0, 0, 0, 0.055)',
  border: '1px solid #EFEFEF',
}));
const InFor = () => {
  return (
    <>
      <Grid item xs={12} sm={5} md={5} lg={4}>
        <BoxStyled sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              position: 'relative',
              display: 'inline-block',
              width: '80%',
              height: '80%',
              px: 2,
            }}
          >
            <img
              src={rank8}
              alt=""
              style={{
                width: '100%',
                height: '100%',

                position: 'relative',
                zIndex: 99,
              }}
            />

            <img
              src={avt9}
              alt=""
              style={{
                height: '61%',
                objectFit: 'cover',
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                overflow: 'hidden',
                top: '49%',
                left: '50%',
                zIndex: 1,
              }}
            />
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h6"
              mb={1}
              sx={{ fontSize: { xs: '16px', sm: '16px', md: '18px', lg: '18px' }, mt: 3 }}
            >
              {inforBot.name}
            </Typography>
            <Tooltip title="Model" placement="top">
              <Chip label={inforBot.model} color="warning" sx={{ my: 1 }} />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',

              mt: 1.5,
            }}
          >
            <Grid item>
              <Typography variant="h6" sx={{ display: 'flex', gap: 1 }}>
                Token huấn luyện :
                <Typography color="textSecondary" variant="h6" fontWeight="400">
                  1.604.142
                </Typography>
              </Typography>
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',

              mt: 1.5,
            }}
          >
            <Grid item>
              <Typography variant="h6" sx={{ display: 'flex', gap: 1 }}>
                Level 1
              </Typography>
            </Grid>
          </Box>
          <Paper
            sx={{
              overflow: 'hidden',
              zIndex: '1',
              position: 'relative',
              mt: { xs: 1, sm: 3 },
              mb: 0.5,
            }}
          >
            <Box
              sx={{
                p: { xs: 2, sm: 2, md: 1.7, lg: 3 },
                boxShadow: ' 0px  4px 6px rgba(0, 0, 0, 0.055)',
              }}
            >
              <Stack spacing={3}>
                {sells.map((sell: any) => (
                  <Box>
                    <Stack
                      direction="row"
                      mb={2}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        <Typography variant="h6">Kinh nghiệm</Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          {sell.total}
                        </Typography>
                      </Box>
                      <Chip
                        sx={{
                          backgroundColor: 'primary',
                          color: 'primary',
                          borderRadius: '4px',
                          width: 55,
                          height: 24,
                        }}
                        label={sell.percent + '%'}
                      />
                    </Stack>
                    <LinearProgress value={sell.percent} variant="determinate" color="primary" />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Paper>
        </BoxStyled>
      </Grid>
      <Grid item xs={12} sm={7} md={7} lg={4}>
        <DashboardCard title="Thông tin trợ lý">
          <Grid container sx={{ mt: { sm: '-20px', md: 0 } }}>
            <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
              <Grid item xs={5}>
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  Ngày sinh
                </CustomFormLabel>
              </Grid>
              <Grid item xs={7}>
                <Typography>11/08/2025</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
              <Grid item xs={5}>
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  Giới tính
                </CustomFormLabel>
              </Grid>
              <Grid item xs={7}>
                <Typography>Nữ</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
              <Grid item xs={5}>
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  Quốc gia
                </CustomFormLabel>
              </Grid>
              <Grid item xs={7}>
                <Typography>Việt Nam</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
              <Grid item xs={5}>
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  Ngôn ngữ
                </CustomFormLabel>
              </Grid>
              <Grid item xs={7}>
                <Typography>Tiếng Việt</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
              <Grid item xs={5}>
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  Vị trí nghề nghiệp
                </CustomFormLabel>
              </Grid>
              <Grid item xs={7}>
                <Typography>Đại học</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
              <Grid item xs={5}>
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  Chuyên môn
                </CustomFormLabel>
              </Grid>
              <Grid item xs={7} sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                <Chip label="Tương tác đa phương tiện" color="primary" sx={{ px: 1 }} />
                <Chip label="Phân tích dữ liệu và báo cáo" color="error" sx={{ px: 1 }} />
                <Chip label="Hỗ trợ đa ngôn ngữ" color="warning" sx={{ px: 1 }} />
              </Grid>
            </Grid>
            <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
              <Grid item xs={5}>
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  Tính cách
                </CustomFormLabel>
              </Grid>
              <Grid item xs={7} sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                <Chip variant="outlined" label="Vui vẻ" color="primary" sx={{ px: 1 }} />
                <Chip variant="outlined" label="Tận tâm" color="error" sx={{ px: 1 }} />
                <Chip variant="outlined" label="Cởi mở" color="warning" sx={{ px: 1 }} />
                <Chip variant="outlined" label="Thân thiện" color="success" sx={{ px: 1 }} />
                <Chip variant="outlined" label="Hướng ngoại" color="default" sx={{ px: 1 }} />
              </Grid>
            </Grid>
          </Grid>
        </DashboardCard>
      </Grid>
    </>
  );
};

export default InFor;
