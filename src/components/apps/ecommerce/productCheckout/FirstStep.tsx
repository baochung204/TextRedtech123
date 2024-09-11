import { Box, Typography, Stack } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import ChildCard from '../../../shared/ChildCard';

interface Props {
  total: number;
  Discount: number;
}

const FirstStep = ({ total, Discount }: Props) => {
  return (
    <>
      <Box my={3}>
        <ChildCard>
          <Box p={2}>
            <Typography variant="h5" fontWeight={600} mb={3}>
              Đơn hàng
            </Typography>
            {/* Tổng cộng */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h6" fontWeight={400}>
                Giá trị đơn hàng
              </Typography>
              <Typography variant="h6">{total.toLocaleString('vn-VN')} point</Typography>
            </Stack>
            {/* Giảm giá */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h6" fontWeight={400}>
                Khuyến mãi
              </Typography>
              <Typography variant="h6" color="error">
                -{Discount.toLocaleString('vn-VN')} point
              </Typography>
            </Stack>
            {/* Vận chuyển */}

            {/* Tổng cộng */}
            <Stack direction="row" justifyContent="space-between" mb={1}>
              <Typography variant="h6">Tổng thanh toán</Typography>
              <Typography variant="h5" color="success">
                {(total - Discount).toLocaleString('vn-VN')} point
              </Typography>
            </Stack>
          </Box>
        </ChildCard>
      </Box>
    </>
  );
};

export default FirstStep;
