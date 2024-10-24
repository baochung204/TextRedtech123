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
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { IconSearch } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import IconPoint from 'src/assets/images/logos/R-Point.png';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import ContentPurchaseHistory from './content/conTentPurchaseHistory';
import { tableOrder } from './data/data';
import { useSelector } from 'react-redux';
import { AppState, dispatch } from 'src/store/Store';
import { fetchHistoryOrderListData } from 'src/store/user/historyorder/historyOrderSlice';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface DataRow3 {
  orderId: number;
  date: Date;
  point: number;
  amountDiscount: number;
  priceAfterDiscount: number;
}

const PurchaseHistoryInProfile = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const handleCloseDialog = () => {
    setOpen(!open);
  };
  const columns = [
    {
      dataIndex: 'orderId',
      numeric: false,
      disablePadding: false,
      title: 'ID',
    },
    {
      dataIndex: 'date',
      title: 'Ngày mua hàng',
      render: (value: string) => {
        if (!value) return 'N/A'; // Handle undefined or invalid values
        const date = new Date(value);
        return isNaN(date.getTime()) ? 'Invalid date' : date.toLocaleDateString('vi-VN');
      },
    },
    {
      dataIndex: 'priceAfterDiscount',
      title: 'Giảm giá',
      render: (value: string) => (
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
      dataIndex: 'point',
      render: (value: string) => (
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
      dataIndex: 'invoice',
      render: () => (
        <Button color="success" onClick={handleOpen}>
          Chi tiết
        </Button>
      ),
    },
  ];
  const orderhistorylist = useSelector((state: AppState) => state.historyorder_list.dataa);

  const [orderHistoryData, setOrderHistoryData] = useState<DataRow3[]>([]);

  useEffect(() => {
    dispatch(fetchHistoryOrderListData());
  }, [dispatch]);

  useEffect(() => {
    if (orderHistoryData !== orderhistorylist.content) {
      setOrderHistoryData(orderhistorylist.content);
    }
  }, [orderHistoryData, orderhistorylist]);

  console.log('hello', orderHistoryData);

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
          <CustomTable columns={columns} dataSource={orderHistoryData} />
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
