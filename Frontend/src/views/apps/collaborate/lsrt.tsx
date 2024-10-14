import { Box, Button, Typography } from '@mui/material';
import format from 'date-fns/format/index.js';
import DateSelect from 'src/components/apps/date/DateSelect';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import PageContainer from 'src/components/container/PageContainer';
import { tabledh } from 'src/components/tables/tabledh';

const FilmsData: any = [
  {
    id: 1,
    title: 'ID thanh toán',
    dataIndex: 'MHD',
  },
  {
    id: 2,
    title: 'Ngày yêu cầu',
    dataIndex: 'createdAt',
    render: (value: any) => format(new Date(value), 'dd/MM/yyyy'),
  },
  {
    id: 3,
    title: 'Ngày hoàn tất',
    dataIndex: 'completedAt',
    render: (value: any) => format(new Date(value), 'dd/MM/yyyy'),
  },
  {
    id: 4,
    title: 'Số tiền',
    dataIndex: 'money',
    render: (value: any) => `${value} đ`,
  },
  {
    id: 5,
    title: 'Trạng thái',
    dataIndex: 'status',

    render: (value: number) => (
      <Box>
        {value === 1 ? (
          <Typography sx={{ color: '#13DEB9' }} variant="subtitle2">
            Đã thanh toán
          </Typography>
        ) : value === 2 ? (
          <Typography sx={{ color: '#ff9800' }} variant="subtitle2">
            Chờ xử lý
          </Typography>
        ) : value === 3 ? (
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
    dataIndex: 'status',

    render: (value: number) => (
      <Box>
        {value === 1 || value === 2 ? (
          <Typography sx={{ color: '#13DEB9' }} variant="subtitle2">
            Đã tải
          </Typography>
        ) : value === 3 ? (
          <Button color="error" variant="text" sx={{ width: 70 }}>
            Tải lại
          </Button>
        ) : (
          <Button color="success" variant="contained" sx={{ width: 70 }}>
            Tải lên
          </Button>
        )}
      </Box>
    ),
  },
];

const HistoryMoney = () => {
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
      <CustomTable columns={FilmsData} dataSource={tabledh} />
    </PageContainer>
  );
};

export default HistoryMoney;
