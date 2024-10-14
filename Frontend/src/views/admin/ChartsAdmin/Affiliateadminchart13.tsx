// import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { IconGridDots } from '@tabler/icons-react';
import Affilatec from 'src/components/shared/Affilatec';

const Affilatechartadmin13 = () => {
  return (
    <Affilatec title="Khách hàng" text="" description={''}>
      <Box sx={{ padding: '0px 20px' }}>
        <Stack spacing={3} mt={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              width={40}
              height={40}
              bgcolor="primary.light"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography color="primary" variant="h6" display="flex">
                <IconGridDots width={21} />
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="textSecondary">
                Doanh thu / Khách trả phí
              </Typography>
              <Typography variant="h3" fontWeight="700">
                351.216.213đ
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Stack spacing={3} mt={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              width={40}
              height={40}
              bgcolor="primary.light"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography color="primary" variant="h6" display="flex">
                <IconGridDots width={21} />
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="textSecondary">
                Doanh thu / Khách hàng (All)
              </Typography>
              <Typography variant="h3" fontWeight="700">
                351.216.213đ
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Affilatec>
  );
};

export default Affilatechartadmin13;
