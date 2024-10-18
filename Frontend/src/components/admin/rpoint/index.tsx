import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from '@mui/material';
import { IconEye, IconSearch } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import icontext from 'src/assets/images/logos/R-Point.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PublisherTable from './datatable/Publisher';
import RPointDialog from './dialog/RPointDialog';

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const PublisherTablePage: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [checkValue, setCheckValue] = useState<string | null>(null);
  const [selectID, setSelectID] = useState<string | null>(null);

  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'createDate',
      },
      {
        title: 'Tên gói R-Point',
        dataIndex: 'package',
      },
      {
        title: 'Số Points',
        dataIndex: 'points',
        render: (value: string) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {value}
            <img src={icontext} alt="" width={20} />
          </Box>
        ),
      },
      {
        title: 'Model',
        dataIndex: 'model',
      },
      {
        title: 'Giá tiền',
        dataIndex: 'money',
        render: (value: string) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>{value} VNĐ</Box>
        ),
      },
      {
        title: 'Số lượt mua',
        dataIndex: 'totalBuy',
      },
      {
        dataIndex: 'isActive',
        title: 'Hoạt động',
        render: (_value, row) => (
          <>
            <IconButton
              onClick={() => {
                setSelectID(row.id);
                setOpen(true);
                setCheckValue('view');
              }}
            >
              <IconEye stroke={2} style={{ color: '#5D87FF' }} />
            </IconButton>
            {/* <IconButton>
              <IconTrash stroke={2} style={{ color: '#FA896B' }} />
            </IconButton> */}
          </>
        ),
      },

      // {
      //   title: 'Function',
      //   dataIndex: 'function',
      //   isValids: false,
      // },
      // {
      //   title: 'Chiến lược',
      //   dataIndex: 'strategy',
      //   isValids: false,
      // },
      // {
      //   title: 'Files (slot)',
      //   dataIndex: 'files',
      //   isValids: false,
      // },
      // {
      //   title: 'Function (slot)',
      //   dataIndex: 'totalFunction',
      //   isValids: false,
      // },
    ],
    [],
  );
  const [dataSelect, setDataSelect] = useState<string[]>([]);
  useEffect(() => {
    const selectedColumns = column || [];
    const hasIsValids = selectedColumns.some((col) => col.isValids !== undefined);
    if (hasIsValids) {
      const hiddenColumns = selectedColumns
        .filter((col) => col.isValids === false)
        .map((col) => col.dataIndex || '');
      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [column]);

  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container sx={{ alignItems: 'center' }} spacing={2}>
          <Grid
            item
            xs={4}
            sm={4}
            md={3.5}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Grid container sx={{ alignItems: 'center' }}>
              <Grid item>
                <IconButton
                  color="primary"
                  aria-label="Add to cart"
                  onClick={() => {
                    setOpen(true);
                    setCheckValue('add');
                  }}
                >
                  <AddCircleIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm gói R-Point"
                  size="small"
                  type="search"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Search Followers' }}
                  sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
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
            </Grid>
          </Grid>
          <Grid
            item
            xs={4.5}
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            <Grid container sx={{ alignItems: 'center' }}>
              <Grid item xs={7} sx={{ display: 'flex', gap: 1.5 }}>
                <Tooltip title="Nhập tỉ giá Point/Vnd ">
                  <TextField
                    id="outlined-search"
                    placeholder="Point/Vnd"
                    size="small"
                    type="search"
                    variant="outlined"
                    inputProps={{ 'aria-label': 'Search Followers' }}
                    sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' }, width: 150 }}
                  />
                </Tooltip>
                <Button variant="contained">Lưu</Button>
              </Grid>

              <Grid item xs={5} sx={{ display: 'flex' }}>
                <IconButton aria-label="filter" sx={{ mr: 2 }}>
                  <Badge badgeContent={column.length - dataSelect.length} color="primary">
                    <FilterListIcon />
                  </Badge>
                </IconButton>
                <Select
                  multiple
                  value={dataSelect}
                  displayEmpty
                  onChange={handleColumnChange}
                  renderValue={() => 'Sửa đổi cột'}
                  size="small"
                  MenuProps={{
                    autoFocus: false,
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
                      checked={!(dataSelect.length === column.length)}
                      indeterminate={dataSelect.length > 0 && dataSelect.length < column.length}
                      onChange={() => {
                        if (dataSelect.length < column.length) {
                          const allColumns = column.map((header: Column) => header.dataIndex);
                          setDataSelect(allColumns);
                        } else {
                          setDataSelect([]);
                        }
                      }}
                    />
                    <ListItemText primary="Chọn tất cả" />
                  </MenuItem>
                  {column.map((header: Column) => {
                    const isSelected = !dataSelect.includes(header.dataIndex);
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
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <DateSelect />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <CustomTable columns={column} dataSource={PublisherTable} dataSelect={dataSelect} />
      </Grid>
      <RPointDialog
        open={open}
        setOpen={setOpen}
        checkValue={checkValue}
        setCheckValue={setCheckValue}
        selectID={selectID}
      />
    </Grid>
  );
};

export default PublisherTablePage;
