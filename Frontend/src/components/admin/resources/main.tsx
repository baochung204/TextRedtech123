import AddCircleIcon from '@mui/icons-material/AddCircle';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';
import TopCard from 'src/components/widgets/cards/TopCard';
import { FileCells, FileRows, Files } from './mockData/TableFile';
import { Function, FunctionCells, FunctionRows } from './mockData/TableFunction';
import { Image, ImageCells, ImageRows } from './mockData/TableImage';
import { Model, ModelCells, ModelRows } from './mockData/TableModel';
import { Strategy, StrategyCells, StrategyRows } from './mockData/TableStr';
import { Url, UrlCells, UrlRows } from './mockData/TableUrl';
import Tab1 from './Tabs/Tab1';

const Main = () => {
  const [value, setValue] = React.useState('1');
  // const [open, setOpen] = useState<boolean>(false);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    // setOpen(false);
  };

  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Box>
          {/* Hiển thị TopCard khi tab value là 1 */}
          {value === '1' && <TopCard dataSource={Strategy} totalColumn={4} />}
          {value === '2' && <TopCard dataSource={Function} totalColumn={4} />}
          {value === '3' && <TopCard dataSource={Files} totalColumn={4} />}
          {value === '4' && <TopCard dataSource={Model} totalColumn={4} />}
          {value === '5' && <TopCard dataSource={Image} totalColumn={4} />}
          {value === '6' && <TopCard dataSource={Url} totalColumn={4} />}

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
                mt: 3,
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
              {/* {(value === '1' || value === '2') && ( */}
              <Box display={'flex'} justifyContent={'end'}>
                <Grid container sx={{ alignItems: 'center' }}>
                  {/* <Grid item>
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
                    </Grid> */}
                  <Grid item>
                    <TextField
                      id="outlined-search"
                      placeholder="Tìm kiếm"
                      size="small"
                      type="search"
                      variant="outlined"
                      inputProps={{ 'aria-label': 'Search Followers' }}
                      sx={{
                        fontSize: { xs: '50px', sm: '50px', md: '50px' },
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
                  {(value === '1' || value === '2') && (
                    <Grid item>
                      <IconButton
                        color="primary"
                        aria-label="Add to cart"
                        // onClick={() => setOpen(true)}
                        sx={{
                          pr: 0,
                        }}
                      >
                        <AddCircleIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                    </Grid>
                  )}
                </Grid>
              </Box>
              {/* )} */}
            </Box>

            {/* TabPanels */}
            <TabPanel sx={{ p: 0, pt: 2 }} value="1">
              <Tab1 headCells={StrategyCells} dataRows={StrategyRows} />
            </TabPanel>
            <TabPanel sx={{ p: 0, pt: 2 }} value="2">
              <Tab1 headCells={FunctionCells} dataRows={FunctionRows} />
            </TabPanel>
            <TabPanel sx={{ p: 0, pt: 2 }} value="3">
              <Tab1 headCells={FileCells} dataRows={FileRows} />

              {/* <Tab3 value={value} open={open} setOpen={setOpen} /> */}
            </TabPanel>
            <TabPanel sx={{ p: 0, pt: 2 }} value="4">
              <Tab1 headCells={ModelCells} dataRows={ModelRows} />
            </TabPanel>
            <TabPanel sx={{ p: 0, pt: 2 }} value="5">
              <Tab1 headCells={ImageCells} dataRows={ImageRows} />
            </TabPanel>
            <TabPanel sx={{ p: 0, pt: 2 }} value="6">
              <Tab1 headCells={UrlCells} dataRows={UrlRows} />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Main;
