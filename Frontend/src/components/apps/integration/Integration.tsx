import {
  Avatar,
  Box,
  CardContent,
  Fab,
  Grid,
  Stack,
  Tab,
  Tooltip,
  Typography,
} from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react';
import BlankCard from './BlankCard';

import { IconPlus } from '@tabler/icons-react';

import { TabContext, TabList, TabPanel } from '@mui/lab';

import img1 from 'src/assets/images/badge/badge.png';
import img2 from 'src/assets/images/badge/badge2.png';
import img3 from 'src/assets/images/badge/badge3.png';
import Develop from './Develop';
interface Assistant {
  id: string;
  model: string;
  imgsrc: any;
  name: string;
  connect: string;
  status: string;
  date: string;
  isConnected: boolean;
}

const rows: Assistant[] = [
  {
    id: 'ORD - 0120145',
    model: 'GPT-3.5',
    imgsrc: img1,
    name: 'botHello',
    connect: 'Facebook',
    status: 'Completed',
    date: '10 Jun, 2021 09:51:40',
    isConnected: false,
  },
  {
    id: 'ORD - 0120146',
    model: 'GPT-4',
    imgsrc: img2,
    name: 'Chatbot Hola',
    connect: 'Zalo',
    status: 'Pending',
    date: '10 Jun, 2021 07:46:00',
    isConnected: true,
  },
  {
    id: 'ORD - 0120460',
    model: 'GPT-4',
    imgsrc: img3,
    name: 'Chatbot CSKH',
    connect: 'Telegram',
    status: 'Cancel',
    date: '10 Jun, 2021 04:19:38',
    isConnected: false,
  },
  {
    id: 'ORD - 0124060',
    model: 'GPT-3',
    imgsrc: img1,
    name: 'Chatbot XKLĐ',
    connect: 'X',
    status: 'Completed',
    date: '10 Jun, 2021 04:12:29',
    isConnected: false,
  },
  {
    id: 'ORD - 0124568',
    model: 'GPT-4',
    imgsrc: img2,
    name: 'Christopher Jamil',
    connect: 'Zalo',
    status: 'Pending',
    date: '15 Apr, 2021 04:12:50',
    isConnected: false,
  },
  {
    id: 'ORD - 0120146',
    model: 'GPT-4',
    imgsrc: img2,
    name: 'John Deo',
    connect: 'Whatsapp',
    status: 'Pending',
    date: '10 Jun, 2021 07:46:00',
    isConnected: true,
  },
  {
    id: 'ORD - 0120460',
    model: 'GPT-4',
    imgsrc: img3,
    name: 'Mily Peter',
    connect: 'Facebook',
    status: 'Cancel',
    date: '10 Jun, 2021 04:19:38',
    isConnected: false,
  },
  {
    id: 'ORD - 0124060',
    model: 'GPT-3',
    imgsrc: img3,
    name: 'Chat Room',
    connect: '457,000',
    status: 'Completed',
    date: '10 Jun, 2021 04:12:29',
    isConnected: false,
  },
  {
    id: 'ORD - 0124568',
    model: 'GPT-4',
    imgsrc: img2,
    name: 'Christopher Jamil',
    connect: 'Telegram',
    status: 'Pending',
    date: '15 Apr, 2021 04:12:50',
    isConnected: false,
  },
  {
    id: 'ORD - 0120145',
    model: 'GPT-4',
    imgsrc: img1,
    name: 'Sunil Joshi',
    connect: 'Zalo',
    status: 'Completed',
    date: '10 Jun, 2021 09:51:40',
    isConnected: false,
  },
].sort((a, b) => (a.name < b.name ? -1 : 1));

const Integration = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Facebook" value="1" />
                <Tab label="Zalo" value="2" />
                <Tab label="Telegram" value="3" />
                <Tab label="Viber" value="4" />
              </TabList>
            </Box>

            <TabPanel value="1" sx={{ padding: 'none' }}>
              <Tooltip title="Add" sx={{ mb: '15px' }}>
                <Fab size="small" color="secondary" aria-label="plus">
                  <IconPlus width={18} />
                </Fab>
              </Tooltip>
              <Grid container spacing={3}>
                {rows.map((profile) => {
                  return (
                    <Grid item xs={12} lg={4} key={profile.id}>
                      <BlankCard>
                        <CardContent>
                          <Stack direction={'row'} gap={2} alignItems="center">
                            <Avatar alt="Remy Sharp" src={profile.imgsrc} />
                            <Box>
                              <Typography variant="h6" textOverflow={'ellipsis'} noWrap>
                                {profile.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                              >
                                <CircleIcon sx={{ fontSize: '10px', color: `${profile.isConnected ? '#46AB5E' : '#e0e0e0'}` }} />
                                {profile.id}
                              </Typography>
                            </Box>
                            {/* <Box ml="auto">
                        
                      {profile.isConnected ? (
                          <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          >
                          Đã kết nối
                          </Button>
                      ) : (
                          <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          >
                          Kết nối
                          </Button>
                      )}
                      </Box> */}
                          </Stack>
                        </CardContent>
                      </BlankCard>
                    </Grid>
                  );
                })}
              </Grid>
            </TabPanel>
            <TabPanel value="2">
              <Develop />
            </TabPanel>
            <TabPanel value="3">
              <Develop />
            </TabPanel>
            <TabPanel value="4">
              <Develop />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </>
  );
};

export default Integration;