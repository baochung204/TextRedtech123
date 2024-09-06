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
              Tóm tắt đơn hàng
            </Typography>
            {/* Tổng cộng */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h6" fontWeight={400}>
                Tổng cộng
              </Typography>
              <Typography variant="h6">${total}</Typography>
            </Stack>
            {/* Giảm giá */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h6" fontWeight={400}>
                Giảm giá 5%
              </Typography>
              <Typography variant="h6" color="error">
                -${Discount}
              </Typography>
            </Stack>
            {/* Vận chuyển */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h6" fontWeight={400}>
                Vận chuyển
              </Typography>
              <Typography variant="h6">Miễn phí</Typography>
            </Stack>
            {/* Tổng cộng */}
            <Stack direction="row" justifyContent="space-between" mb={1}>
              <Typography variant="h6">Tổng cộng</Typography>
              <Typography variant="h5" color="success">
                ${total - Discount}
              </Typography>
            </Stack>
          </Box>
        </ChildCard>
      </Box>
    </>
  );
};

export default FirstStep;
