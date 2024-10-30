import FilterListIcon from '@mui/icons-material/FilterList';
import { TabContext, TabPanel } from '@mui/lab';
import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Select,
  Slide,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { IconEye, IconSearch } from '@tabler/icons-react';
import React, { forwardRef, useEffect, useState } from 'react';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import BlankCard from 'src/components/shared/BlankCard';
import ChildCard from 'src/components/shared/ChildCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { fetchConvertHistoryListData } from 'src/store/user/convert/listconverthistory/listConvertHistorySlice';
import DialogDetailListOrder from './dialog/dialogDetailListOrder';

import { TransitionProps } from '@mui/material/transitions';
import { fetchConvertDetailData } from 'src/store/user/convert/detailconverthistory/detailConvertHistorySlice';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean;
}
const CustomerListOrder = () => {
  const convertHistoryList = useSelector((state: AppState) => state.listConvertHistory.dataa);
  const convertHistoryDetail = useSelector((state: AppState) => state.detailConvertHistory.dataa);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  useEffect(() => {
    dispatch(fetchConvertHistoryListData({ page_no: page, page_size: rowsPerPage }));
  }, [rowsPerPage, page]);
  const [month, setMonth] = React.useState('1');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  const handleOpen = (id: number) => {
    setOpen(true);
    dispatch(fetchConvertDetailData(id));
  };

  const [dataSelect, setDataSelect] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);

  const BCrumb = [
    { to: '/', title: 'Trang Chủ' },
    { to: '/', title: 'Chuyển đổi' },
  ];

  const columns = React.useMemo<Column[]>(
    () => [
      {
        title: 'ID',
        dataIndex: 'conversationId',
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'date',
        render: (value: string) => {
          const values = new Date(value);
          return values.toLocaleDateString('vi-VN');
        },
      },
      {
        title: 'Tên khách hàng',
        dataIndex: 'customerName',
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phoneNumber',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Kênh',
        dataIndex: '',
        render: (value: any) => (
          <Stack direction="row" spacing={1}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={value.avatarUrl} alt={'img'} />
            </Box>
            <Box>
              <Typography variant="subtitle1">{value.facebookName}</Typography>
            </Box>
          </Stack>
        ),
      },
      {
        title: 'Trợ lý',
        dataIndex: 'chatBotName',
      },
      {
        title: 'Giá trị đơn hàng',
        dataIndex: 'pricePoint',
        render: (value: string) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
              gap: 0.5,
              maxWidth: 150,
              px: 2,
            }}
          >
            {value} đ
          </Box>
        ),
      },
      {
        title: 'Địa chỉ',
        dataIndex: 'address',
        render: (value: any) => <> {value.length > 50 ? value.slice(0, 47) + '…' : value}</>,
      },
      {
        dataIndex: 'actions',
        title: 'Chi tiết',
        render: (_row: any, value: any) => (
          <Box display={'flex'} sx={{ justifyContent: 'center' }}>
            <Tooltip title="Xem" placement="right">
              <IconButton onClick={() => handleOpen(value.conversationId)}>
                <IconEye stroke={2} style={{ color: '#5D87FF' }} />
              </IconButton>
            </Tooltip>
          </Box>
        ),
      },
    ],
    [],
  );

  const handleCloseDialog = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const hasIsValids = columns.some((col) => 'isValids' in col);
    if (hasIsValids) {
      const hiddenColumns = columns
        .filter((col) => col.isValids === false)
        .map((col) => col.dataIndex || '');

      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [columns]);

  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <PageContainer title="Chuyển đổi">
      <BannerPage title="Chuyển đổi" items={BCrumb} />
      <ChildCard sx={{ border: 'none' }} sx1={{ padding: 0 }}>
        <TabContext value="1">
          <Box>
            <TabPanel value="1" sx={{ p: 0, mt: 0.5 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <Grid item xs={12} sm={4}>
                      <Grid container sx={{ alignItems: 'center' }}>
                        <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                          <CustomSelect
                            labelId="month-dd"
                            id="month-dd"
                            size="small"
                            value={month}
                            onChange={handleChange}
                          >
                            <MenuItem value={1}>Tất cả</MenuItem>
                            <MenuItem value={2}>Assistant 1</MenuItem>
                            <MenuItem value={3}>Assistant 2</MenuItem>
                          </CustomSelect>
                        </Grid>

                        <Grid item xs={9}>
                          <TextField
                            id="outlined-search"
                            placeholder="Tìm kiếm chuyển đổi"
                            size="small"
                            variant="outlined"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconSearch size="20" />
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={5.83}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Badge
                          badgeContent={columns.length - dataSelect.length}
                          color={'primary'}
                          sx={{ margin: '0px 10px' }}
                        >
                          <FilterListIcon color="action" />
                        </Badge>
                        <Select
                          multiple
                          value={dataSelect}
                          displayEmpty
                          onChange={handleColumnChange}
                          renderValue={() => 'Sửa đổi cột'}
                          sx={{
                            marginRight: 2,
                          }}
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
                          {columns.map((header: any) => {
                            const isSelected = dataSelect.includes(header.dataIndex);

                            return (
                              <MenuItem key={header.dataIndex} value={header.dataIndex}>
                                <Checkbox checked={!isSelected} />
                                <ListItemText primary={header.title} />
                              </MenuItem>
                            );
                          })}
                        </Select>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <DateSelect />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} mx={0.3}>
                  <BlankCard>
                    <CustomTable
                      columns={columns}
                      dataSelect={dataSelect}
                      dataSource={convertHistoryList.content}
                      count={convertHistoryList.totalElements}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      setPage={setPage}
                      setRowsPerPage={setRowsPerPage}
                    />
                  </BlankCard>
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </TabContext>
      </ChildCard>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth="lg"
        sx={{
          maxHeight: '90vh',
        }}
        onClose={handleCloseDialog}
      >
        <DialogContent
          sx={{
            overflowY: 'auto',
            height: '100%',
            '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#E3E3E3',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#d6d6d6',
            },
          }}
        >
          <DialogContentText id="alert-dialog-slide-description">
            <DialogDetailListOrder />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
};

export default CustomerListOrder;
