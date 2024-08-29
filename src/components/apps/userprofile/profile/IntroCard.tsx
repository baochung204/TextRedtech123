// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Stack, Typography } from '@mui/material';

import ChildCard from 'src/components/shared/ChildCard';
import {
  IconGenderFemale,
  IconHeadphones,
  IconMail,
  IconMapPin,
  IconMobiledata,
} from '@tabler/icons-react';

const IntroCard = () => (
  <ChildCard>
    <Typography fontWeight={600} variant="h4" mb={2}>
      Giới thiệu
    </Typography>
    <Typography color="textSecondary" variant="subtitle2" mb={2}>
      mafia internet ông trùm kèo vui số 1 Việt Nam, xin chúc cả nhà sức khỏe
    </Typography>
    <Stack direction="row" gap={2} alignItems="center" mb={3}>
      <IconGenderFemale size="21" />
      <Typography variant="h6">Nữ</Typography>
    </Stack>
    <Stack direction="row" gap={2} alignItems="center" mb={3}>
      <IconMail size="21" />
      <Typography variant="h6">abc@gmail.com</Typography>
    </Stack>
    <Stack direction="row" gap={2} alignItems="center" mb={3}>
      <IconMobiledata size="21" />
      <Typography variant="h6">19 tháng 7, 2003</Typography>
    </Stack>
    <Stack direction="row" gap={2} alignItems="center" mb={3}>
      <IconHeadphones size="21" />
      <Typography variant="h6">0981522873</Typography>
    </Stack>
    <Stack direction="row" gap={2} alignItems="center" mb={1}>
      <IconMapPin size="21" />
      <Typography variant="h6">Hoài Đức, Hà Nội</Typography>
    </Stack>
  </ChildCard>
);

export default IntroCard;
