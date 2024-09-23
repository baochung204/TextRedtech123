/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Button, Grid, Typography } from '@mui/material';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import BlankCard from 'src/components/shared/BlankCard';
import TableData from './data/data';
import IconPoint from 'src/assets/images/logos/R-Point.png';
const TableHistoryBuyPoint = () => {
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
        <Box sx={{ px: 1, display: 'flex', alignItems: 'center', justifyContent: 'end', gap: 0.5 }}>
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
      render: (value: number) => (
        <Box>
          {value === 1 ? (
            <Typography sx={{ color: '#13DEB9' }} variant="subtitle2">
              Đã thanh toán
            </Typography>
          ) : value === 2 ? (
            <Typography sx={{ color: '#ff9800' }} variant="subtitle2">
              Chờ thanh toán
            </Typography>
          ) : (
            <Typography sx={{ color: '#f44336' }} variant="subtitle2">
              Không xác định
            </Typography>
          )}
        </Box>
      ),
      sort: true,
    },
    {
      title: 'Hóa đơn',
      dataIndex: 'invoice',
      render: (value: number) => (
        <Box>
          {value === 1 ? (
            <Button color="success">Tải về</Button>
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
    <Grid item xs={12} sx={{ mt: 3 }}>
      <BlankCard>
        <CustomTable columns={columns} dataSource={TableData} />
      </BlankCard>
    </Grid>
  );
};

export default TableHistoryBuyPoint;
