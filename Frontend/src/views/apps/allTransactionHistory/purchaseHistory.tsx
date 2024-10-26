/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  InputAdornment,
  Slide,
  TextField,
} from '@mui/material';
import { IconSearch } from '@tabler/icons-react';
import { forwardRef, useEffect, useState } from 'react';
import IconPoint from 'src/assets/images/logos/R-Point.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import { Column } from 'src/components/ComponentTables/ColumnInterface';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { fetchHistoryOrderDetailData } from 'src/store/user/historyorder/historyDialogSlice';
import { fetchHistoryOrderListData } from 'src/store/user/historyorder/historyOrderSlice';
import ContentPurchaseHistory from './content/conTentPurchaseHistory';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const PurchaseHistoryInProfile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const orderhistorylist = useSelector((state: AppState) => state.historyorder_list.dataa);
  const orderhistorydetail = useSelector((state: AppState) => state.historyorder_detail.dataa);

  useEffect(() => {
    dispatch(fetchHistoryOrderListData({page_no: page, page_size: rowsPerPage }));
  }, [rowsPerPage, page]);


  const handleOpen = (id: number) => {
    setOpen(true);
    dispatch(fetchHistoryOrderDetailData(id));
    // dispatch(fetchHistoryOrderListData({ page_no: 1, sort_dir: 'asc' }));
  };

  const handleCloseDialog = () => {
    setOpen(!open);
  };


  console.log(orderhistorylist.pageNo);


  const columns: Column[] = [
    {
      dataIndex: 'orderId',
      title: 'ID',
    },
    {
      dataIndex: 'date',
      title: 'Ngày mua hàng',
      // render: (value: string) => {
      //   if (!value) return 'N/A'; 
      //   const date = new Date(value);
      //   return isNaN(date.getTime()) ? 'Invalid date' : date.toLocaleDateString('vi-VN');
      // },
      render: (value: string) => {
        const values = new Date(value);
        return values.toLocaleDateString('vi-VN');
      },
    },
    {
      dataIndex: 'amountDiscount',
      title: 'Giảm giá',
      render: (value: number) => (
        <Box
          sx={{
            px: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            gap: 0.5,
            width: '70px',
          }}
        >
          {value} <img src={IconPoint} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
        </Box>
      ),
    },
    {
      title: 'Số Point',
      dataIndex: 'priceAfterDiscount',
      render: (value: number) => (
        <Box
          sx={{
            px: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            gap: 0.5,
            width: '70px',
          }}
        >
          {value} <img src={IconPoint} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
        </Box>
      ),
    },

    {
      title: 'Chi tiết',
      dataIndex: 'action',
      render: (_, value: any) => (
        <Button color="success" onClick={() => handleOpen(value.orderId)}>
          Chi tiết
        </Button>
      ),
    },
  ];


  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid item xs={12} sx={{ py: 3 }}>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={4}>
                <TextField
                  id="outlined-search"
                  placeholder="Tìm kiếm"
                  size="small"
                  type="search"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'Search Followers' }}
                  sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
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

              <Grid item xs={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <DateSelect />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <CustomTable
            columns={columns}
            dataSource={orderhistorylist.content}
            count={orderhistorylist.totalElements}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
        </Grid>
      </Grid>

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
            <ContentPurchaseHistory />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PurchaseHistoryInProfile;
