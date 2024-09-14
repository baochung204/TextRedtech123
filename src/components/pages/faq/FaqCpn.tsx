import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab6 from './Tabs/Tab6';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';
import Tab5 from './Tabs/Tab5';
import { Grid, IconButton, TextField, InputAdornment, MenuItem } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconSearch } from '@tabler/icons-react';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';


const Faq = () => {
  const [value, setValue] = React.useState('1');
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setOpen(false);
  };

  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Box>
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
              }}
            >
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Chiến Lược" value="1" />
                <Tab label="Function" value="2" />
                <Tab label="Files" value="3" />
                <Tab label="Model" value="4" />
                <Tab label="Hình Ảnh" value="5" />
                <Tab label="URL" value="6" />
              </TabList>
              {(value === '3' || value === '5' || value === '6') && (
                <Box>                  
                  <Grid container sx={{display: 'flex', alignItems: 'center'}} >
                    <Grid item>
                      <CustomSelect
                        labelId="column-sort"
                        id="column-sort"
                        size="small"
                        value={1}
                        sx={{ marginRight: '20px' }}
                      >
                        <MenuItem value={1}>Tất cả</MenuItem>
                        <MenuItem value={2}>ID</MenuItem>
                      </CustomSelect>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="outlined-search"
                        placeholder="Tìm kiếm"
                        size="small"
                        type="search"
                        variant="outlined"
                        inputProps={{ 'aria-label': 'Search Followers' }}
                        sx={{
                          fontSize: { xs: '50px', sm: '50px', md: '50px' }
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconSearch size="12" />
                            </InputAdornment>
                          ),
                        }}
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item>
                      <IconButton
                        color="primary"
                        aria-label="Add to cart"
                        onClick={() => setOpen(true)}
                        sx={{
                          pr: 1.5,
                        }}
                      >
                        <AddCircleIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
            <TabPanel value="1">
              <Tab1 />
            </TabPanel>
            <TabPanel value="2">
              <Tab2 />
            </TabPanel>
            <TabPanel value="3">
              <Tab3 value={value} open={open} setOpen={setOpen} />
            </TabPanel>
            <TabPanel value="4">
              <Tab4 />
            </TabPanel>
            <TabPanel value="5">
              <Tab5 value={value} open={open} setOpen={setOpen} />
            </TabPanel>
            <TabPanel value="6">
              <Tab6 value={value} open={open} setOpen={setOpen} />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Faq;
