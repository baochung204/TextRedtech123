import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  Badge,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IconSearch } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';
import Tab5 from './Tabs/Tab5';
import Tab6 from './Tabs/Tab6';

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const Faq = () => {
  const [value, setValue] = useState<'1' | '2' | '3' | '4' | '5' | '6'>('1');
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [checkOption, setCheckOption] = useState<string | null>(null)

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue as '1' | '2' | '3' | '4' | '5' | '6');
    setOpen(false);
  };
  const [search, setSearch] = useState<boolean>(false);

  const handleSearch = () => {
    setSearch(!search);
  };
  const [dataSelect, setDataSelect] = useState<string[]>([]);


  const column: { [key: string]: Column[] } = useMemo(
    () => ({
      '1': [],
      '2': [],
      '3': [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: 'Tên file',
          dataIndex: 'name',
        },
        {
          title: 'Dung lượng',
          dataIndex: 'size',
        },
        {
          title: 'Ngày tải',
          dataIndex: 'dateTime',
        },
        {
          title: 'Định dạng',
          dataIndex: 'typeFile',
        },
        {
          title: 'Hành động',
          dataIndex: 'isCheck',
        },
      ],
      '4': [
        {
          title: 'ID',
          dataIndex: 'idCode',
        },
        {
          title: 'Ngày tạo',
          dataIndex: 'creationDate',
        },
        {
          title: 'Tên model',
          dataIndex: 'modelName',
        },
        {
          title: 'Model gốc',
          dataIndex: 'modelLocal',
        },
        {
          title: 'Token huấn luyện',
          dataIndex: 'trainedTokens',
        },
        {
          title: 'Hành động',
          dataIndex: 'isCheck',
        },
      ],
      '5': [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: 'Ngày tạo',
          dataIndex: 'dateTime',
        },
        {
          title: 'Hình ảnh',
          dataIndex: 'imageURL',
        },
        {
          title: 'Tên ảnh',
          dataIndex: 'name',
        },
        {
          title: 'Mô tả',
          dataIndex: 'description',
        },
        {
          title: 'Tiêu đề',
          dataIndex: 'title',
        },
        {
          title: 'Hoạt động',
          dataIndex: 'action',
        },
      ],
      '6': [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: 'Tiêu đề URL',
          dataIndex: 'title',
        },
        {
          title: 'Mô tả URL',
          dataIndex: 'describe',
        },
        {
          title: 'URL',
          dataIndex: 'url',
        },
        {
          title: 'Hành động',
          dataIndex: 'action',
        },
      ],
    }),
    [],
  );

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

  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  const searchSection = (
    <Box>
      <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
        {(value === '3' || value === '4' || value === '5' || value === '6') && (
          <Grid item>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <Grid item>
                <Badge
                  badgeContent={column[value].length - dataSelect.length}
                  color="primary"
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
                  <MenuItem>
                    <Checkbox
                      checked={dataSelect.length === column[value].length}
                      indeterminate={dataSelect.length > 0 && dataSelect.length < column[value].length}
                      onChange={(e) => {
                        if (e.target.checked) {
                          const allColumns = column[value].map((header: Column) => header.dataIndex);
                          setDataSelect(allColumns);
                        } else {
                          setDataSelect([]);
                        }
                      }}
                    />
                    <ListItemText primary="Chọn tất cả" />
                  </MenuItem>
                  {column[value].map((header: Column) => {
                    const isSelected = dataSelect.includes(header.dataIndex);
                    return (
                      <MenuItem key={header.dataIndex} value={header.dataIndex}>
                        <Checkbox checked={isSelected} />
                        <ListItemText primary={header.title} />
                      </MenuItem>
                    );
                  })}
                </Select>

              </Grid>
            </Grid>
          </Grid>
        )}
        {(value === '3' || value === '4' || value === '5' || value === '6') && (
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
              {(value === '3' || value === '5' || value === '6') && (
                <Grid item>
                  <IconButton
                    color="primary"
                    aria-label="Add to cart"
                    onClick={() => { setOpen(true); setCheckOption('add') }}
                    sx={{
                      pr: 1.5,
                    }}
                  >
                    <AddCircleIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Grid>
              )}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );

  return (
    <Grid container>
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
                width: '100%',
              }}
            >
              <TabList
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Chiến Lược" value="1" />
                <Tab label="Function" value="2" />
                <Tab label="Files" value="3" />
                <Tab label="Model" value="4" />
                <Tab label="Hình Ảnh" value="5" />
                <Tab label="URL" value="6" />
              </TabList>
              {!isXsScreen && searchSection}
            </Box>
            {isXsScreen && searchSection}
            <TabPanel value="1" sx={{ px: 0 }}>
              <Tab1 />
            </TabPanel>
            <TabPanel value="2" sx={{ px: 0 }}>
              <Tab2 />
            </TabPanel>
            <TabPanel value="3" sx={{ px: 0 }}>
              <Tab3 value={value} open={open} setOpen={setOpen} dataSelect={dataSelect} checkOption={checkOption} setCheckOption={setCheckOption} />
            </TabPanel>
            <TabPanel value="4" sx={{ px: 0 }}>
              <Tab4 dataSelect={dataSelect} />
            </TabPanel>
            <TabPanel value="5" sx={{ px: 0 }}>
              <Tab5 value={value} open={open} setOpen={setOpen} dataSelect={dataSelect} checkOption={checkOption} setCheckOption={setCheckOption} />
            </TabPanel>
            <TabPanel value="6" sx={{ px: 0 }}>
              <Tab6 value={value} open={open} setOpen={setOpen} dataSelect={dataSelect} checkOption={checkOption} setCheckOption={setCheckOption} />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Faq;
