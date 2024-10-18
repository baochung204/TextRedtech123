import FilterListIcon from '@mui/icons-material/FilterList';
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
import { IconEdit, IconEye, IconSearch, IconTrash } from '@tabler/icons-react';
import { useEffect, useMemo, useState } from 'react';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import DataFeature from '../data/DataFeuture';

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const TableFeature = () => {
  const column = useMemo<Column[]>(
    () => [
      { title: 'ID', dataIndex: 'id' },
      {
        title: 'Ngày tạo',
        dataIndex: 'createdAt',
        render: (value: any) => value.toLocaleDateString(),
      },
      { title: 'Họ và tên', dataIndex: 'name' },
      { title: 'Email', dataIndex: 'email' },
      { title: 'Số điện thoại', dataIndex: 'phone' },
      {
        title: 'Nội dùng đề xuất',
        dataIndex: 'contextFeature',
      },
      { title: 'Trạng thái', dataIndex: 'status' },
      { title: 'Ghi chú', dataIndex: 'note' },
      {
        title: 'Thao tác',
        dataIndex: 'action',
        render: () => (
          <>
            <IconButton>
              <IconEye stroke={2} style={{ color: '#b1ffb3' }} />
            </IconButton>
            <IconButton>
              <IconEdit stroke={2} style={{ color: '#5D87FF' }} />
            </IconButton>
            <IconButton>
              <IconTrash stroke={2} style={{ color: '#5D87FF' }} />
            </IconButton>
          </>
        ),
      },
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
    <>
      {' '}
      <Grid item xs={12} my={'10px'}>
        <Grid container alignItems="center">
          <Grid item xs={4}>
            <TextField
              id="outlined-search"
              placeholder="Tìm kiếm đề xuất tính năng "
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
              fullWidth
            />
          </Grid>
          <Grid item xs={8} container spacing={2} justifyContent="flex-end" alignItems={'center'}>
            <Grid item>
              <Badge
                badgeContent={dataSelect.length !== 0 && dataSelect.length}
                color={dataSelect.length !== 0 ? 'primary' : undefined}
              >
                <FilterListIcon color="action" />
              </Badge>
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
                {column.map((header: any) => {
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
            <DateSelect />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <CustomTable columns={column} dataSource={DataFeature} dataSelect={dataSelect} />
      </Grid>
    </>
  );
};

export default TableFeature;
