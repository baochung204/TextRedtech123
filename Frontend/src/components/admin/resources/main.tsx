import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Badge, Checkbox, Grid, IconButton, InputAdornment, ListItemText, MenuItem, Select, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { IconSearch } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import BlankCard from 'src/components/shared/BlankCard';
import TopCard from 'src/components/widgets/cards/TopCard';
import DialogFile from './dialog/DialogFile';
import DialogFunction from './dialog/DialogFunction';
import DialogStr from './dialog/DialogStr';
import { FileCells, Files } from './mockData/TableFile';
import { Function, FunctionCells, FunctionRows } from './mockData/TableFunction';
import { Image, ImageCells, ImageRows } from './mockData/TableImage';
import { Model, ModelCells, ModelRows } from './mockData/TableModel';
import { Strategy, StrategyCells, StrategyRows } from './mockData/TableStr';
import { Url, UrlCells, UrlRows } from './mockData/TableUrl';
interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const Main = () => {
  const [value, setValue] = useState<'1' | '2' | '3' | '4' | '5' | '6'>('1');
  const [data, setData] = useState([]);
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue as '1' | '2' | '3' | '4' | '5' | '6');
    setOpen(false);
  }; 



  const [dataSelect, setDataSelect] = useState<string[]>([]);
  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  const column: { [key: string]: Column[] } = useMemo(
    () => ({
      '1': [
        {
          dataIndex: 'id',
          title: 'ID',
        },
        {
          dataIndex: 'strategyGroup',
          title: 'Nhóm chiến lược',
        },
        {
          dataIndex: 'badge',
          title: 'Huy hiệu',
        },
        {
          dataIndex: 'strategyName',
          title: 'Tên chiến lược',
        },
        {
          dataIndex: 'level',

          title: 'Level',
        },
        {
          dataIndex: 'ownedCustomers',

          title: 'Khách hàng sở hữu',
        },
        {
          dataIndex: 'appliedAssistants',

          title: 'Trợ lý áp dụng',
        },
        {
          dataIndex: 'summary',

          title: 'Tóm tắt',
        },
        {
          dataIndex: 'content',

          title: 'Nội dung',
        },
        {
          dataIndex: 'actions',

          title: 'Hoạt động',
        },
      ],
      '2': [
        {
          dataIndex: 'id',
          title: 'ID',
        },
        {
          dataIndex: 'creationTime',
          title: 'Ngày tạo',
        },
        {
          dataIndex: 'functionGroup',
          title: 'Nhóm function',
        },
        {
          dataIndex: 'level',
          title: 'Level',
        },
        {
          dataIndex: 'ownedCustomers',
          title: 'Khách hàng sở hữu',
        },
        {
          dataIndex: 'appliedAssistants',
          title: 'Trợ lý áp dụng',
        },
        {
          dataIndex: 'summary',
          title: 'Tóm tắt',
        },
        {
          dataIndex: 'functionCode',
          title: 'Code function',
        },
        // {
        //   dataIndex: 'creator',
        //   title: 'Người tạo',
        // },
        {
          dataIndex: 'actions',
          title: 'Hoạt động',
        },
      ],
      '3': [
        {
          dataIndex: 'id',
          title: 'ID',
        },
        {
          dataIndex: 'fileName',
          title: 'Tên file',
        },
        {
          dataIndex: 'customer',
          title: 'Khách hàng',
        },
        {
          dataIndex: 'format',
          title: 'Định dạng',
        },
        {
          dataIndex: 'size',
          title: 'Dung lượng',
        },
        {
          dataIndex: 'uploadDate',
          title: 'Ngày tải',
        },
        {
          dataIndex: 'actions',
          title: 'Hoạt động',
        },
      ],
      '4': [
        {
          dataIndex: 'id',
          title: 'ID',
        },
        {
          dataIndex: 'creationTime',
          title: 'Ngày tạo',
        },
        {
          dataIndex: 'modelName',
          title: 'Tên model',
        },
        {
          dataIndex: 'baseModel',
          title: 'Model gốc',
        },
        {
          dataIndex: 'trainingTokens',
          title: 'Training tokens',
        },
        {
          dataIndex: 'ownedCustomers',
          title: 'Khách hàng sở hữu',
        },
        {
          dataIndex: 'appliedAssistants',
          title: 'Trợ lý áp dụng',
        },
        {
          dataIndex: 'actions',
          title: 'Hoạt động',
        },
      ],
      '5': [
        {
          dataIndex: 'id',
          title: 'ID',
        },
        {
          dataIndex: 'creationTime',
          title: 'Ngày tạo',
        },
        // {
        //   dataIndex: 'creator',
        //   title: 'Người tạo',
        // },
        {
          dataIndex: 'image',
          title: 'Hình ảnh',
        },
        {
          dataIndex: 'imageName',
          title: 'Tên ảnh',
        },
        {
          dataIndex: 'title',
          title: 'Tiêu đề',
        },
        // {
        //     dataIndex: 'description',
        //     title: 'Mô tả',
        // },
        {
          dataIndex: 'size',
          title: 'Dung lượng',
        },
        {
          dataIndex: 'url',
          title: 'URL',
        },
        {
          dataIndex: 'actions',
          title: 'Hoạt động',
        },
      ],
      '6': [
        {
          dataIndex: 'id',
          title: 'ID',
        },
        {
          dataIndex: 'creationTime',
          title: 'Ngày tạo',
        },
        {
          dataIndex: 'customerId',
          title: 'ID khách hàng',
        },
        {
          dataIndex: 'title',
          title: 'Tiêu đề',
        },
        {
          dataIndex: 'description',
          title: 'Mô tả',
        },
        {
          dataIndex: 'url',
          title: 'URL',
        },
        {
          dataIndex: 'click',
          title: 'Click',
        },
        {
          dataIndex: 'actions',
          title: 'Hoạt động',
        },
      ],
    }),
    [],
  );
  const [search, setSearch] = useState<boolean>(false);
  const handleSearch = () => {
    setSearch(!search);
  };
  useEffect(() => {
    const selectedColumns = column[value] || [];
    const hasIsValids = selectedColumns.some((col) => col.isValids !== undefined);
    if (hasIsValids) {
      const hiddenColumns = selectedColumns
        .filter((col) => col.isValids === false)
        .map((col) => col.dataIndex || '');
      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [value, column]);

  const searchSection = (
    <Box>
      <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
        {/* {(value === '3' || value === '4' || value === '5' || value === '6') && ( */}
          <Grid item>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item>
                <Badge
                  badgeContent={dataSelect.length !== 0 && dataSelect.length}
                  color={dataSelect.length !== 0 ? 'primary' : undefined}
                >
                  <FilterListIcon color="action" />
                </Badge>
              </Grid>
              <Grid item>
                <Select
                  multiple
                  value={dataSelect}
                  displayEmpty
                  onChange={handleColumnChange}
                  renderValue={() => 'Sửa đổi cột'}
                  size="small"
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        marginTop: 1,
                        maxHeight: 400,
                        '&::-webkit-scrollbar': {
                          width: '4px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                          backgroundColor: '#D2D2D2',
                          borderRadius: '10px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                          backgroundColor: '#C6C8CC',
                        },
                        '&::-webkit-scrollbar-track': {
                          backgroundColor: '#f1f1f1',
                        },
                      },
                    },
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'right',
                    },
                    transformOrigin: {
                      vertical: 'top',
                      horizontal: 'right',
                    },
                  }}
                >
                  {column[value].map((header: Column) => {
                    console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex));

                    const isSelected = dataSelect.includes(header.dataIndex);

                    return (
                      <MenuItem key={header.dataIndex} value={header.dataIndex}>
                        <Checkbox checked={!isSelected} />
                        <ListItemText primary={header.title} />
                      </MenuItem>
                    );
                  })}
                </Select>
              </Grid>
            </Grid>
          </Grid>
        {/* )} */}
        {/* {(value === '3' || value === '4' || value === '5' || value === '6') && ( */}
          <Grid item>
            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
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
            {(value === '1' || value === '2' || value === '3' ) && (

              <Grid item>
                <IconButton
                  color="primary"
                  aria-label="Add to cart"
                  onClick={handleClickOpen}
                  sx={{
                    pr: 1.5,
                  }}
                >
                  <AddCircleIcon sx={{ fontSize: 30 }} />
                </IconButton>
                <DialogStr open={open} setOpen={setOpen} value={value} />
                <DialogFile open={open} setOpen={setOpen} value={value} />
                <DialogFunction open={open} setOpen={setOpen} value={value} />
              </Grid>
            )} 
            </Grid>
          </Grid>
      </Grid>
    </Box>
  );
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
          {value === '6' && <TopCard dataSource={Url} totalColumn={2} />}

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
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Chiến Lược" value="1" />
                <Tab label="Function" value="2" />
                <Tab label="Files" value="3" />
                <Tab label="Model" value="4" />
                <Tab label="Hình Ảnh" value="5" />
                <Tab label="URL" value="6" />
              </TabList>
              {searchSection}
              {/* {(value === '1' || value === '2') && ( */}
              {/* <Box display={'flex'} justifyContent={'end'}>
                <Grid container sx={{ alignItems: 'center' }}>
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
              </Box> */}
            </Box>

            <TabPanel sx={{ p: 0, pt: 2 }} value="1">
              <BlankCard>
                <CustomTable columns={StrategyCells} dataSource={StrategyRows} dataSelect={dataSelect}/>
              </BlankCard>
            </TabPanel>
            <TabPanel sx={{ p: 0, pt: 2 }} value="2">
              <BlankCard>
                <CustomTable columns={FunctionCells} dataSource={FunctionRows} dataSelect={dataSelect} />
              </BlankCard>
            </TabPanel>
            <TabPanel sx={{ p: 0, pt: 2 }} value="3">
              <BlankCard>
                <CustomTable columns={FileCells} dataSource={data} dataSelect={dataSelect} />
              </BlankCard>
            </TabPanel>
            <TabPanel sx={{ p: 0, pt: 2 }} value="4">
              <BlankCard>
                <CustomTable columns={ModelCells} dataSource={ModelRows} dataSelect={dataSelect} />
              </BlankCard>
            </TabPanel>
            <TabPanel sx={{ p: 0, pt: 2 }} value="5">
              <BlankCard>
                <CustomTable columns={ImageCells} dataSource={ImageRows} dataSelect={dataSelect} />
              </BlankCard>
            </TabPanel>
            <TabPanel sx={{ p: 0, pt: 2 }} value="6">
              <BlankCard>
                <CustomTable columns={UrlCells} dataSource={UrlRows} dataSelect={dataSelect} />
              </BlankCard>
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Main;
