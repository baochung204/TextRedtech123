import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { IconSearch } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import contractwait from 'src/assets/Contract/HOP DONG CHO XU LY.png';
import contractdone from 'src/assets/Contract/HOP DONG DA KY.png';
import contractreject from 'src/assets/Contract/HOP DONG TU CHOI.png';
import contract from 'src/assets/Contract/hop dong.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import TopCard from 'src/components/widgets/cards/TopCard';
import { DataContactPointTable } from './datatable/OrderTableData';

const dataSource = [
  {
    bgColor: 'primary.light',
    title: 'Hợp đồng',
    total: '190',
    icons: (
      <Box
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
        <img src={contract} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Từ chối',
    total: '190',
    icons: (
      <Box
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
        <img src={contractreject} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Đã ký',
    total: '123',
    icons: (
      <Box
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
        <img src={contractdone} width={30} />
      </Box>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Chờ ký',
    total: '23',
    icons: (
      <Box
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
        <img src={contractwait} width={30} />
      </Box>
    ),
  },
];

const getStatusColor = (status: number) => {
  switch (status) {
    case 1:
      return 'success';
    case 2:
      return 'warning';
    case 3:
      return 'error';
    default:
      return 'default';
  }
};

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const ContactRPoint = () => {
  // const [selectedItems] = useState<number[]>([]);
  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'id_contract',
      },

      {
        title: 'Mã khách hàng',
        dataIndex: 'id_customer',
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'createdate',
      },

      {
        title: 'Ngày ký',
        dataIndex: 'confirmdate',
      },
      {
        title: 'Loại tài khoản',
        dataIndex: 'type_company',
        render: (_row: any, value: any) => (
          <Typography style={{ width: '150px' }} variant="subtitle2">
            <Chip
              label={value.type_company ? 'Doanh nghiệp' : ''}
              color={value.type_company ? 'success' : ''}
              variant="outlined"
            />
          </Typography>
        ),
      },
      {
        title: 'Tên công ty',
        dataIndex: 'name_company',
      },
      {
        title: 'Mã số thuế',
        dataIndex: 'tax_code',
      },
      {
        title: 'Địa chỉ',
        dataIndex: 'address',
      },
      {
        title: 'Người đại diện',
        dataIndex: 'representative',
      },
      {
        title: 'Chức vụ',
        dataIndex: 'position',
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phone_number',
      },
      {
        title: 'Email công ty',
        dataIndex: 'email',
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        render: (_row: any, value: any) => (
          <Chip
            label={
              value.status === 1
                ? 'Đã ký'
                : value.status === 2
                ? 'Ký một chiều'
                : value.status === 3
                ? 'Bị từ chối'
                : 'Chưa ký'
            }
            color={getStatusColor(value.status)}
          />
        ),
      },
      {
        title: 'Duyệt hồ sơ',
        dataIndex: 'duyet',
        // render: (_row:any, value: any) => (
        render: () => (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Checkbox defaultChecked />
          </Box>
        ),
      },
      {
        title: 'Hợp đồng',
        dataIndex: 'contract',
        render: (_row: any, value: any) => (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {value.status === 1 ? (
              <Button color="success" variant="contained" style={{ width: '100px' }}>
                Xem
              </Button>
            ) : value.status === 2 ? (
              <Button color="warning" variant="text" style={{ width: '100px' }}>
                Ký ngay
              </Button>
            ) : (
              <span style={{ width: '100px', textAlign: 'center' }}>—</span>
            )}
          </Box>
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
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={dataSource} totalColumn={4} />
        </Grid>

        <Grid item xs={12}>
          <Grid container sx={{ alignItems: 'center' }} spacing={2}>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Grid container sx={{ alignItems: 'center' }}>
                {/* <Grid item>
                  <IconButton
                    color="primary"
                    aria-label="Add to cart"
                    // onClick={() => setOpen(true)}
                  >
                    <AddCircleIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Grid> */}
                <Grid item xs={10}>
                  <TextField
                    id="outlined-search"
                    placeholder="Tìm kiếm hợp đồng"
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
              xs={4}
              sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
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
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <DateSelect />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <CustomTable
            columns={column}
            dataSource={DataContactPointTable}
            dataSelect={dataSelect}
          />
          ;
        </Grid>
      </Grid>
    </>
  );
};

export default ContactRPoint;
