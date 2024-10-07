/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
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
import ContentBuyPoint from './content/conTentBuyPoint';
import { tablepayment } from './data/data';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HistoryBuyPoint = () => {
  const [open, setOpen] = useState(false);

  const onHandleOpen = () => {
    setOpen(!open);
  };
  const onHandleClose = () => {
    setOpen(!open);
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sort: true,
    },
    {
      title: 'Thời gian tạo',
      dataIndex: 'createdAt',
      sort: true,
    },
    {
      title: 'Thời gian hoàn tất',
      dataIndex: 'completedAt',
      sort: true,
    },
    {
      title: 'ID Yêu cầu',
      dataIndex: 'requestId',
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
            width: '150px',
          }}
        >
          {value} <img src={IconPoint} alt="" width={20} height={20} style={{ borderRadius: 50 }} />
        </Box>
      ),
      sort: true,
    },
    {
      title: 'Thanh toán',
      dataIndex: 'numberPrice',
      render: (value: string) => (
        <Box sx={{ px: 1, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
          {value} ₫
        </Box>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (value: boolean) => (
        <Box>
          {value ? (
            <Typography sx={{ color: '#13DEB9' }} variant="subtitle2">
              Đã thanh toán
            </Typography>
          ) : (
            <Typography sx={{ color: '#f44336' }} variant="subtitle2">
              Không thành công
            </Typography>
          )}
        </Box>
      ),
      sort: true,
    },

    {
      title: 'Chi tiết',
      dataIndex: 'invoice',
      render: (value: number) => (
        <Box>
          {value === 1 ? (
            <Button color="success" onClick={() => onHandleOpen()}>
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
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            sx={{
              py: 3,
            }}
          >
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Grid item xs={4} sm={4} md={4}>
                <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item xs={12}>
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
                      fullWidth={true}
                    />
                  </Grid>
                </Grid>
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
            <CustomTable columns={columns} dataSource={tablepayment} />
          </BlankCard>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={()=>onHandleClose()}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth="lg"
      >
        {' '}
        <DialogActions style={{ padding: '0' }}>
          <a
            onClick={() => onHandleClose()}
            style={{
              background: 'rgb(252, 32, 50)',
              color: 'white',
              width: '40px',
              height: '30px',
              borderBottomLeftRadius: '10px',
              textAlign: 'center',
              paddingTop: '2px',
              cursor: 'pointer',
            }}
          >
            <CloseIcon />
          </a>
        </DialogActions>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <ContentBuyPoint />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HistoryBuyPoint;
