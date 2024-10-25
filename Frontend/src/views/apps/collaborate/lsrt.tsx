import { Box, Button, Typography } from '@mui/material';
import format from 'date-fns/format/index.js';
import { useEffect, useState } from 'react';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { fetchHistoryPaymentData } from 'src/store/user/affiliate/overview/historyPaymentSlice';
import DialogUpload from './dialogUpload/dialogUpload';

const HistoryMoney = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const paymentHistory = useSelector((state: AppState) => state.list_paymenthistory.dataa);
  useEffect(() => {
    dispatch(fetchHistoryPaymentData({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  console.log('paymentHistory', paymentHistory);

  const FilmsData: any = [
    {
      id: 1,
      title: 'ID yêu cầu',
      dataIndex: 'affiliateWithdrawHistoryId',
    },
    {
      id: 2,
      title: 'Ngày yêu cầu',
      dataIndex: 'requestDate',
      render: (value: any) => format(new Date(value), 'dd/MM/yyyy'),
    },
    {
      id: 3,
      title: 'Ngày hoàn tất',
      dataIndex: 'finishDate',
      render: (value: any) => format(new Date(value), 'dd/MM/yyyy'),
    },
    {
      id: 4,
      title: 'Số tiền',
      dataIndex: 'withdrawalAmount',
      render: (value: any) => `${value} đ`,
    },
    {
      id: 5,
      title: 'Trạng thái',
      dataIndex: 'status',

      render: (value: string) => (
        <Box>
          {value === 'DA_THANH_TOAN' ? (
            <Typography sx={{ color: '#13DEB9' }} variant="subtitle2">
              Đã thanh toán
            </Typography>
          ) : value === 'CHO_XU_LY' ? (
            <Typography sx={{ color: '#ff9800' }} variant="subtitle2">
              Chờ xử lý
            </Typography>
          ) : value === 'KHONG_HOP_LE' ? (
            <Typography sx={{ color: '#f44336' }} variant="subtitle2">
              Không hợp lệ
            </Typography>
          ) : (
            <Typography sx={{ color: 'gray' }} variant="subtitle2">
              Chưa tải hóa đơn
            </Typography>
          )}
        </Box>
      ),
    },

    {
      id: 7,
      title: 'Hóa đơn',
      dataIndex: 'bill',

      render: (value: string) => (
        <Box>
          {value === 'DA_TAI' ? (
            <Typography sx={{ color: '#13DEB9' }} variant="subtitle2">
              Đã tải
            </Typography>
          ) : value === 'TAI_LAI' ? (
            <Button color="error" variant="text" sx={{ width: 70 }}>
              Tải lại
            </Button>
          ) : (
            <Button
              onClick={() => {
                setOpen(!open);
              }}
              color="success"
              variant="contained"
              sx={{ width: 70 }}
            >
              Tải lên
            </Button>
          )}
        </Box>
      ),
    },
  ];

  return (
    <PageContainer title="Enhanced Table" description="this is page">
      {/* breadcrumb */}
      <Box
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'flex-end',
          margin: '0px 0px 10px 0px',
        }}
      >
        <Box style={{ width: '35.2%' }} display={'flex'} alignItems={'center'} gap="5px">
          <DateSelect />
        </Box>
      </Box>
      <CustomTable
        columns={FilmsData}
        dataSource={paymentHistory?.content}
        count={paymentHistory?.totalElements ? paymentHistory.totalElements : 0}
        rowsPerPage={pageSize}
        page={page}
        setPage={setPage}
        setRowsPerPage={setPageSize}
      />
      <DialogUpload open={open} setOpen={setOpen} />
    </PageContainer>
  );
};

export default HistoryMoney;
