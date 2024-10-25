import { Box, Grid } from '@mui/material';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { fetchOrderListData } from 'src/store/user/affiliate/overview/listOrderSlice';

const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
  },
  {
    title: 'Mã đơn hàng',
    dataIndex: 'orderId',
  },
  {
    title: 'Khách hàng',
    dataIndex: 'customerName',
  },
  {
    title: 'Email',
    dataIndex: 'customerEmail',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'customerPhone',
  },
  {
    title: 'Ngày đặt hàng',
    dataIndex: 'orderDate',
    render: (value: any) => (value ? dayjs(value).format('DD/MM/YYYY') : ''),
  },
  {
    title: 'Giá trị đơn hàng',
    dataIndex: 'totalValue',
    render: (value: number) => `${value.toLocaleString()} đ`,
  },
  {
    title: 'Hoa hồng',
    dataIndex: 'commission',
    render: (value: number) => `${value.toLocaleString()} đ`,
  },
];
const Danhsachdh = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const orderList = useSelector((state: AppState) => state.list_order.dataa);

  useEffect(() => {
    dispatch(fetchOrderListData({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  console.log('orderlist', orderList.content);

  return (
    <>
      <Box
        sx={{
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
      <Grid item xs={12}>
        <CustomTable
          columns={columns}
          dataSource={orderList?.content}
          count={orderList?.totalElements ? orderList.totalElements : 0}
          rowsPerPage={pageSize}
          page={page}
          setPage={setPage}
          setRowsPerPage={setPageSize}
        />
      </Grid>
    </>
  );
};

export default Danhsachdh;
