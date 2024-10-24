import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { IconArrowUpRight } from '@tabler/icons-react';
import welcomeImg from 'src/assets/images/backgrounds/welcome-bg.svg';
import userImg from 'src/assets/images/profile/user-1.jpg';

import PageContainer from 'src/components/container/PageContainer';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import SpeedometerChart from 'src/components/charrts/SpeedometerChart';
import { AppState, dispatch } from 'src/store/Store';
import { fetchAssistantById } from 'src/store/user/chatbots/assistantByIdUseSlice';
import {
  ChatBotIndexType,
  ChatBotInfoType,
  ChatBotResourceType,
} from 'src/store/user/chatbots/type/assistantByIdType';
import Chart1 from './chart/chart1';
import Chart2 from './chart/chart2';
import Chart3 from './chart/chart3';
import Chart5 from './chart/chart5';
import Chart6 from './chart/chart6';
import Chart7 from './chart/chart7';
import Configuration from './configuration/configuration';
import File from './configuration/file';
import Function from './configuration/function';
import InFor from './infor/infor';
import Topcardassistant from './topcard/Topcardassistant';

const AssistantInfor = () => {
  const { id } = useParams();
  const chatBotById = useSelector((state: AppState) => state.assistantById.data);
  useEffect(() => {
    if (id !== null) {
      dispatch(fetchAssistantById(id));
    }
  }, [dispatch, id]);
  const [chatBotInfo, setChatBotInfo] = useState<ChatBotInfoType | null>(null);
  const [chatBotIndex, setChatBotIndex] = useState<ChatBotIndexType | null>(null);
  const [chatBotResource, setChatBotResource] = useState<ChatBotResourceType | null>(null);
  // const chatBotInfo = chatBotById ? chatBotById.chatBotInfo : null;
  // const chatBotIndex = chatBotById ? chatBotById.chatBotIndex : null;
  // const chatBotResource = chatBotById ? chatBotById.chatBotResource : null;
  useEffect(() => {
    if (chatBotById?.chatBotInfo) {
      setChatBotInfo(chatBotById.chatBotInfo);
    }
    if (chatBotById?.chatBotIndex) {
      setChatBotIndex(chatBotById.chatBotIndex);
    }
    if (chatBotById?.chatBotResource) {
      setChatBotResource(chatBotById.chatBotResource);
    }
  }, [chatBotById]);
  return (
    <PageContainer title="Thông tin trợ lý" description="this is page">
      <Box mt={3}>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} sm={chatBotInfo?.campaignName ? 8 : 12}>
            <Card
              elevation={0}
              sx={{ backgroundColor: (theme) => theme.palette.primary.light, py: 0 }}
            >
              <CardContent sx={{ py: 2, px: 2, m: 0 }}>
                <Grid container justifyContent="space-between">
                  <Grid item sm={6} display="flex" alignItems="center">
                    <Box>
                      <Box
                        gap="16px"
                        mb={5}
                        sx={{
                          display: {
                            xs: 'block',
                            sm: 'flex',
                          },
                          alignItems: 'center',
                        }}
                      >
                        <Avatar src={userImg} alt="img" sx={{ width: 40, height: 40 }} />
                        <Typography
                          variant="h5"
                          whiteSpace="nowrap"
                          sx={{ fontSize: { sm: 16, md: 18 } }}
                        >
                          Chào mừng bạn đến với trang hồ sơ trợ lý !
                        </Typography>
                      </Box>

                      <Stack
                        spacing={2}
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                      >
                        <Tooltip title="Tỉ lệ chuyển đổi" placement="top">
                          <Box>
                            <Typography variant="h2" whiteSpace="nowrap">
                              {chatBotIndex?.cvr}%
                              <span>
                                <IconArrowUpRight width={18} color="#39B69A" />
                              </span>
                            </Typography>
                            <Typography variant="subtitle1" whiteSpace="nowrap">
                              CVR
                            </Typography>
                          </Box>
                        </Tooltip>
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid item sm={6}>
                    <Box mb="-51px">
                      <img src={welcomeImg} alt={welcomeImg} width={'340px'} />
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {chatBotInfo?.campaignName && (
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Box
                height="100%"
                bgcolor="error.light"
                sx={{
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    py: 2,
                    fontWeight: 600,
                    color: '#FA896B',
                    fontSize: { sm: 16, md: 18 },
                  }}
                >
                  Chiến lược của trợ lý
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Box
                        sx={{
                          width: '100%',
                          maxWidth: '100px',
                          borderRadius: 1,
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          src={chatBotInfo?.campaignBadge}
                          alt="Banner chiến lược"
                          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%',
                          textAlign: 'center',
                        }}
                      >
                        <Typography
                          variant="h6"
                          fontWeight={500}
                          sx={{
                            lineHeight: 1.5,
                          }}
                        >
                          {chatBotInfo?.campaignName}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          )}
          {/* column */}
          <InFor chatBotInfo={chatBotInfo} />
          <Topcardassistant chatBotIndex={chatBotIndex} />
          {/* column */}
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Chart1 />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Chart2 />
          </Grid>
          {/* column */}
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Configuration chatBotResource={chatBotResource} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Function chatBotResource={chatBotResource} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <File chatBotResource={chatBotResource} />
          </Grid>
          {/* column */}
          <Grid item xs={12} md={8} lg={8}>
            <Chart3 />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            {/* <Chart4 /> */}
            <SpeedometerChart />
          </Grid>{' '}
          {/* column */}
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Chart5 />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Chart6 />
          </Grid>{' '}
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Chart7 />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default AssistantInfor;
