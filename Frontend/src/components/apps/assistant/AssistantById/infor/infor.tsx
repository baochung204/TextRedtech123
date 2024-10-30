// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Chip, Grid, LinearProgress, Paper, Stack, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import DashboardCard from 'src/components/shared/DashboardCard';
import { ChatBotInfoType } from 'src/store/user/chatbots/type/assistantByIdType';
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
interface IProps {
  chatBotInfo: ChatBotInfoType | null;
}
const chipColors = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];
const InFor = ({ chatBotInfo }: IProps) => {
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
              src={chatBotInfo?.badgeUrl}
              alt=""
              style={{
                width: '100%',
                height: '100%',

                position: 'relative',
                zIndex: 99,
              }}
            />

            <img
              src={chatBotInfo?.avatar}
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
              sx={{ fontSize: { xs: '16px', sm: '16px', md: '18px', lg: '18px' }, mt: 2 }}
            >
              {chatBotInfo?.name}
            </Typography>
            <Tooltip title="Model" placement="top">
              <Chip label={chatBotInfo?.modelName} color="warning" sx={{ my: 0.5 }} />
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
                  {chatBotInfo?.totalToken}
                </Typography>
              </Typography>
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',

              mt: 2,
            }}
          >
            <Grid item>
              <Typography variant="h6" sx={{ display: 'flex', gap: 1 }}>
                {chatBotInfo?.level}
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
                p: { xs: 2, sm: 2, md: 1.7, lg: 2 },
                boxShadow: ' 0px  4px 6px rgba(0, 0, 0, 0.055)',
              }}
            >
              <Stack spacing={3}>
                <Box>
                  <Stack direction="row" mb={2} justifyContent="space-between" alignItems="center">
                    <Box>
                      <Typography variant="h6">Kinh nghiệm</Typography>
                      {/* <Typography variant="subtitle2" color="textSecondary">
                        {`EXP Max: ${chatBotInfo?.expMax || 0}`}
                      </Typography> */}
                    </Box>
                    <Chip
                      sx={{
                        backgroundColor: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.primary.contrastText,
                        borderRadius: '4px',
                        width: 'auto',
                        height: 24,
                      }}
                      label={`${
                        chatBotInfo?.exp && chatBotInfo?.expMax
                          ? Math.floor((chatBotInfo?.exp / chatBotInfo?.expMax) * 100) ===
                            (chatBotInfo?.exp / chatBotInfo?.expMax) * 100
                            ? (chatBotInfo?.exp / chatBotInfo?.expMax) * 100
                            : ((chatBotInfo?.exp / chatBotInfo?.expMax) * 100).toFixed(1)
                          : 0
                      }%`}
                    />
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={
                      chatBotInfo?.exp && chatBotInfo?.expMax
                        ? (chatBotInfo?.exp / chatBotInfo?.expMax) * 100
                        : 0
                    }
                    sx={{
                      height: 5,
                      borderRadius: 5,
                      backgroundColor: (theme) => theme.palette.grey[300],
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 5,
                        backgroundColor: 'red',
                      },
                    }}
                  />
                </Box>
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
                <Typography>{chatBotInfo?.dateOfBirth}</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
              <Grid item xs={5}>
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  Giới tính
                </CustomFormLabel>
              </Grid>
              <Grid item xs={7}>
                <Typography>{chatBotInfo?.gender}</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
              <Grid item xs={5}>
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  Quốc gia
                </CustomFormLabel>
              </Grid>
              <Grid item xs={7}>
                <Typography>{chatBotInfo?.nation}</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
              <Grid item xs={5}>
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  Ngôn ngữ
                </CustomFormLabel>
              </Grid>
              <Grid item xs={7}>
                <Typography>{chatBotInfo?.language}</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
              <Grid item xs={5}>
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  Vị trí nghề nghiệp
                </CustomFormLabel>
              </Grid>
              <Grid item xs={7}>
                <Typography>{chatBotInfo?.education}</Typography>
              </Grid>
            </Grid>

            <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
              <Grid item xs={5}>
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  Chuyên môn
                </CustomFormLabel>
              </Grid>
              <Grid item xs={7} sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {chatBotInfo?.chatBotPersonalities?.map((item: string, index: number) => (
                  <Chip
                    key={index}
                    label={item}
                    color={chipColors[index % chipColors.length]}
                    sx={{ px: 1 }}
                  />
                ))}
              </Grid>
            </Grid>
            <Grid container sx={{ mt: { xs: 1, md: 2 } }}>
              <Grid item xs={5}>
                <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                  Tính cách
                </CustomFormLabel>
              </Grid>
              <Grid item xs={7} sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {chatBotInfo?.chatBotExpertises?.map((item: string, index: number) => (
                  <Chip
                    key={index}
                    label={item}
                    variant="outlined"
                    color={chipColors[index % chipColors.length]}
                    sx={{ px: 1 }}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </DashboardCard>
      </Grid>
    </>
  );
};

export default InFor;
