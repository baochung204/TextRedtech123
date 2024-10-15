import { Box, Grid } from '@mui/material';

import dayjs from 'dayjs';

import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { tabledh } from 'src/components/tables/tabledh';

const columns = [
  {
    title: 'STT',
    dataIndex: 'id',
  },
  {
    title: 'Mã đơn hàng',
    dataIndex: 'MHD',
  },
  {
    title: 'Khách hàng',
    dataIndex: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
  },
  {
    title: 'Ngày đặt hàng',
    dataIndex: 'createdAt',
    render: (value: any) => (value ? dayjs(value).format('DD/MM/YYYY') : ''),
  },
  {
    title: 'Giá trị đơn hàng',
    dataIndex: 'amount',
    render: (value: number) => `${value.toLocaleString()} VND`,
  },
  {
    title: 'Hoa hồng',
    dataIndex: 'money',
    render: (value: number) => `${value.toLocaleString()} VND`,
  },
];
const Danhsachdh = () => {
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
        <CustomTable columns={columns} dataSource={tabledh} />
      </Grid>
    </>
  );
};

export default Danhsachdh;
