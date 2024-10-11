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
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react';
import IconPoint from 'src/assets/images/logos/R-Point.png';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import BlankCard from 'src/components/shared/BlankCard';
import ContentPurchaseHistory from './content/conTentPurchaseHistory';
import { tableOrder } from './data/data';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PurchaseHistoryInProfile = () => {
  const [open, setOpen] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const handleCloseDialog = () => {
    setOpen(!open);
  };
  const columns = [
    {
      dataIndex: 'id',
      numeric: false,
      disablePadding: false,
      title: 'ID',
    },
    {
      dataIndex: 'date',
      title: 'Ngày mua hàng',
    },
    {
      dataIndex: 'voucher',
      title: 'Giảm giá',
    },
    {
      title: 'Số Point',
      dataIndex: 'amount',
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
      render: (value: number) => (
        <Box>
          {value === 1 ? (
            <Button color="success" onClick={handleOpen}>
              Chi tiết
            </Button>
          ) : value === 2 ? (
            <Typography sx={{ color: '#ff9800' }} variant="subtitle2">
              Chờ xử lý
            </Typography>
          ) : (
            <Typography sx={{ color: '#f44336' }} variant="subtitle2">
              Không xác định
            </Typography>
          )}
        </Box>
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
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={selectedStartDate}
                      onChange={setSelectedStartDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <Typography>tới</Typography>
                    <DatePicker
                      value={selectedEndDate}
                      onChange={setSelectedEndDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <BlankCard>
            <CustomTable columns={columns} dataSource={tableOrder} />
          </BlankCard>
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
