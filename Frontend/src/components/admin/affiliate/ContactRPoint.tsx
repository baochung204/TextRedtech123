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
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, AppState } from 'src/store/Store';
import { fetchOverviewContractRuleData } from 'src/store/admin/contract/contractrule/overview/contractRuleSlice';
import { fetchContractRuleListData } from 'src/store/admin/contract/contractrule/table/contractRuleSlice';

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}

const ContactRPoint = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dataContractRuleOverview = useSelector(
    (state: AppState) => state.overview_contractrule.dataa,
  );
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const contractRuleList = useSelector((state: AppState) => state.list_contract_rule.dataa);
  useEffect(() => {
    dispatch(fetchContractRuleListData({ page_no: page, page_size: rowsPerPage }));
  }, [rowsPerPage, page]);

  const totalContract = dataContractRuleOverview.totalContract;
  const rejectedContract = dataContractRuleOverview.rejectedContract;
  const signedContract = dataContractRuleOverview.signedContract;
  const pendingContract = dataContractRuleOverview.pendingContract;

  useEffect(() => {
    dispatch(fetchOverviewContractRuleData());
  }, [dispatch]);
  const dataSource = [
    {
      bgColor: 'primary.light',
      title: 'Hợp đồng',
      total: totalContract,
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
      total: rejectedContract,
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
      total: signedContract,
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
      total: pendingContract,
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
  const column = useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'businessId',
      },

      {
        title: 'Mã khách hàng',
        dataIndex: 'userId',
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'createdDate',
        render: (value: string) => {
          const values = new Date(value);
          return values.toLocaleDateString('vi-VN');
        },
      },

      {
        title: 'Ngày ký',
        dataIndex: 'signedDate',
        render: (value: string) => {
          const values = new Date(value);
          return values.toLocaleDateString('vi-VN');
        },
      },
      {
        title: 'Loại tài khoản',
        dataIndex: 'accountType',
        render: (_row: any, value: any) => (
          <Typography style={{ width: '150px' }} variant="subtitle2">
            {value.accountType === 'BUSINESS' ? (
              <Chip
                label="Doanh nghiệp"
                sx={{ color: 'success.main', borderColor: 'success.main' }}
                variant="outlined"
              />
            ) : (
              ''
            )}
          </Typography>
        ),
      },
      {
        title: 'Tên công ty',
        dataIndex: 'companyName',
      },
      {
        title: 'Mã số thuế',
        dataIndex: 'taxCode',
      },
      {
        title: 'Địa chỉ',
        dataIndex: 'address',
      },
      {
        title: 'Người đại diện',
        dataIndex: 'representativeName',
      },
      {
        title: 'Chức vụ',
        dataIndex: 'representativePosition',
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phoneNumber',
      },
      {
        title: 'Email công ty',
        dataIndex: 'emailCompany',
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
            color={
              value.status === 1
                ? 'success'
                : value.status === 2
                ? 'warning'
                : value.status === 3
                ? 'error'
                : 'default'
            }
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
                  autoFocus: false,
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
            dataSelect={dataSelect}
            dataSource={contractRuleList.content}
            count={contractRuleList.totalElements}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ContactRPoint;
