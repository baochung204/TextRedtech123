// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab6 from './Tabs/Tab6'
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';
import Tab5 from './Tabs/Tab5';
const Faq = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Chiến Lược" value="1" />
            <Tab label="Function" value="2" />
            <Tab label="Files" value="3" />
            <Tab label="Model" value="4" />
            <Tab label="Hình Ảnh" value="5" />
            <Tab label="URL" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1"><Tab1 /></TabPanel>
        <TabPanel value="2"><Tab2 /></TabPanel>
        <TabPanel value="3"><Tab3 /></TabPanel>
        <TabPanel value="4"><Tab4 /></TabPanel>
        <TabPanel value="5"><Tab5 /></TabPanel>
        <TabPanel value="6"><Tab6 /></TabPanel>
      </TabContext>
    </Box>
  );
};

export default Faq;
