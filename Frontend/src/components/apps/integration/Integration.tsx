import {
  Avatar,
  Box,
  CardContent,
  Fab,
  Grid,
  IconButton,
  Stack,
  Tab,
  Typography,
} from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useTheme } from '@emotion/react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { IconPlus } from '@tabler/icons-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIntegrations } from 'src/store/apps/integration/integrationSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import Develop from './Develop';

const Integration = () => {
  const [value, setValue] = React.useState('1');
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const dataIntegration = useSelector((state: AppState) => state.integration.data);
  useEffect(() => {
    dispatch(fetchIntegrations());
  }, [dispatch]);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const searchSection = (
    <Box>
      <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
        {value === '1' && (
          <Grid item>
            <IconButton
              color="primary"
              aria-label="Add to cart"
              sx={{
                pr: 1.5,
              }}
            >
              <Fab size="small" color="primary" aria-label="plus">
                <IconPlus width={18} />
              </Fab>
            </IconButton>
          </Grid>
        )}
      </Grid>
    </Box>
  );

  return (
    <>
      <Grid container spacing={3}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 1,
                overflowX: 'auto',
                width: '100%',
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Facebook" value="1" />
                <Tab label="Zalo" value="2" />
                <Tab label="Telegram" value="3" />
                <Tab label="Viber" value="4" />
              </TabList>
              {searchSection}
            </Box>

            <TabPanel value="1" sx={{ paddingX: 0 }}>
              <Grid container spacing={3}>
                {dataIntegration.map((integration: any) => {
                  return (
                    <Grid item xs={12} lg={4} key={integration.id}>
                      <CardContent>
                        <Stack direction={'row'} gap={2} alignItems="center">
                          <Avatar
                            sx={{ borderRadius: '50%' }}
                            alt="Remy Sharp"
                            src={integration.imgsrc}
                          />
                          <Box>
                            <Typography variant="h6" textOverflow={'ellipsis'} noWrap>
                              {integration.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                            >
                              <Box
                                sx={{
                                  backgroundColor: integration.isConnected
                                    ? theme.palette.success.main
                                    : 'gray',
                                  borderRadius: '100%',
                                  height: '10px',
                                  width: '10px',
                                }}
                              />
                              {integration.id}
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
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
