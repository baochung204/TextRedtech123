import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Grid, Tab } from '@mui/material';
import { IconChartBar } from '@tabler/icons-react';
import { useState } from 'react';
import TopCard from 'src/components/widgets/cards/TopCard';
import Decentralization from './component/Decentralization';
import PersonnelTab from './component/personnelTab';

interface StyleProps {
  bgColor: string;
  color: string;
  title: string;
  total: string;
  icons: JSX.Element;
}

const DataBox: StyleProps[] = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Nhân viên',
    total: '120',
    icons: (
      <Box
        bgcolor="primary.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconChartBar color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Admin',
    total: '5',
    icons: (
      <Box
        bgcolor="warning.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconChartBar color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Hoạt động',
    total: '52',
    icons: (
      <Box
        bgcolor="success.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconChartBar color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Khóa',
    total: '12',
    icons: (
      <Box
        bgcolor="error.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconChartBar color="white" size={30} />
      </Box>
    ),
  },
];

const Personnels = () => {
  const [value, setValue] = useState('1');
  // const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TopCard dataSource={DataBox} totalColumn={4} />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'space-between',
                mb: 2,
              }}
            >
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Nhân viên" value="1" />
                <Tab label="Phân quyền" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: 0 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <PersonnelTab
                    value={value}
                    open={open}
                    setOpen={setOpen}
                    setSelectedKey={setSelectedKey}
                    selectedKey={selectedKey}
                  />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="2">
              <Decentralization />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Personnels;
