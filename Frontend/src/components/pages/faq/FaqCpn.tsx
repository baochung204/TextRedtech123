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
import { Grid, IconButton, TextField, InputAdornment, MenuItem, Checkbox, Select, ListItemText } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconSearch } from '@tabler/icons-react';
// import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



const tableHeaders = {
  "1": [],
  "2": [],
  "3": [
    {
      title: 'ID',
      dataIndex: 'idCode',
    },
    {
      title: 'Tên file',
      dataIndex: 'fileName'
    },
    {
      title: 'Dung lượng',
      dataIndex: 'datas'
    },
    {
      title: 'Ngày tải',
      dataIndex: 'creationDate',
    },
    {
      title: 'Định dạng',
      dataIndex: 'formats'
    },
    {
      title: 'Hành động',
      dataIndex: 'isCheck',
    }
  ],
  "4": [],
  "5": [
    {
      title: 'ID',
      dataIndex: 'idCode'
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createDate'
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'images',
    },
    {
      title: 'Tên ảnh',
      dataIndex: 'imgName'
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa'
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title'
    },
    {
      title: 'Hoạt động',
      dataIndex: 'action',
    }
   
  ],
  "6": [],
};

const Faq = () => {
  const [value, setValue] = useState<'1' | '2' | '3' | '4' | '5' | '6'>('1');
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [dataSelect, setDataSelect] = useState<string[]>([]);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    if (["1", "2", "3", "4", "5", "6"].includes(newValue)) {
      setValue(newValue as '1' | '2' | '3' | '4' | '5' | '6');
      setOpen(false);
      setDataSelect([]); // Reset selected data
    }
  };
  const [search, setSearch] = useState<boolean>(false);

  const handleSearch = () => {
    setSearch(!search);
  }
  const handleColumnChange = (event: any) => {
    const { target: { value } } = event;
    console.log("aasas", value);
    
    setDataSelect(
      typeof value === 'string' ? value.split(',') : value
    );
    console.log(dataSelect);
    
  };


  const searchSection = (
    <Box>
      <Grid container sx={{ display: 'flex', alignItems: 'center', paddingTop: 2 }}>
        <Grid item>
          <Select
            multiple
            value={dataSelect}
            onChange={handleColumnChange}
            renderValue={() => 'Bộ lọc'}
            sx={{
              minWidth: 100
            }}
          >
            {tableHeaders[value]?.map((header: { title: string; dataIndex: string }) => {
              console.log('header: ', header.dataIndex);

              return (
                <MenuItem key={header.dataIndex} value={header.dataIndex}>
                  <Checkbox checked={!dataSelect.includes(header.dataIndex)} />
                  <ListItemText primary={header.title} />
                </MenuItem>
              )
            })}
          </Select>
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
              fontSize: { xs: '24px', sm: '35px', md: '50px' },
              maxWidth: { xs: search ? '150px' : '40px', md: '700px' },
              transition: 'max-width 0.5s ease-in-out',
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconSearch onClick={() => handleSearch()} size="12" />
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
  );


  // const searchSection = (
  //   <Box>
  //     <Grid container sx={{ display: 'flex', alignItems: 'center', paddingTop: 2 }}>
  //       <Grid item>
  //         <CustomSelect
  //           labelId="column-sort"
  //           id="column-sort"
  //           size="small"
  //           value={1}
  //           sx={{ marginRight: '20px' }}
  //         >
  //           <MenuItem value={1}>Tất cả</MenuItem>
  //           <MenuItem value={2}>ID</MenuItem>
  //         </CustomSelect>
  //       </Grid>
  //       <Grid item>
  //         <TextField
  //           id="outlined-search"
  //           placeholder="Tìm kiếm"
  //           size="small"
  //           type="search"
  //           variant="outlined"
  //           inputProps={{ 'aria-label': 'Search Followers' }}
  //           sx={{
  //             fontSize: { xs: '24px', sm: '35px', md: '50px' },
  //             maxWidth: { xs: search ? '150px' : '40px', md: '700px' },
  //             transition: 'max-width 0.5s ease-in-out',
  //           }}
  //           InputProps={{
  //             startAdornment: (
  //               <InputAdornment position="start">
  //                 <IconSearch
  //                   onClick={() => handleSearch()}
  //                   size="12"
  //                 />
  //               </InputAdornment>
  //             ),
  //           }}
  //           fullWidth={true}
  //         />
  //       </Grid>
  //       <Grid item>
  //         <IconButton
  //           color="primary"
  //           aria-label="Add to cart"
  //           onClick={() => setOpen(true)}
  //           sx={{
  //             pr: 1.5,
  //           }}
  //         >
  //           <AddCircleIcon sx={{ fontSize: 30 }} />
  //         </IconButton>
  //       </Grid>
  //     </Grid>
  //   </Box>
  // );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <TabContext
            value={value}

          >
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 1,
                overflowX: 'auto',
                width: '100%'
              }}
            >
              <TabList
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"

              >
                <Tab
                  label="Chiến Lược"
                  value="1"
                  sx={{
                    fontSize: 15,
                    fontWeight: 600
                  }}
                />
                <Tab label="Function" value="2" />
                <Tab label="Files" value="3" />
                <Tab label="Model" value="4" />
                <Tab label="Hình Ảnh" value="5" />
                <Tab label="URL" value="6" />
              </TabList>
              {!isXsScreen && (value === '3' || value === '5' || value === '6') && searchSection}
            </Box>
            {isXsScreen && (value === '3' || value === '5' || value === '6') && searchSection}
            <TabPanel value="1">
              <Tab1 />
            </TabPanel>
            <TabPanel value="2">
              <Tab2 />
            </TabPanel>
            <TabPanel value="3">
              <Tab3 value={value} open={open} setOpen={setOpen} dataSelected={dataSelect} />
            </TabPanel>
            <TabPanel value="4">
              <Tab4 />
            </TabPanel>
            <TabPanel value="5">
              <Tab5 value={value} open={open} setOpen={setOpen} dataSelected={dataSelect} />
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
