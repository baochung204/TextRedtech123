import { Box, Grid } from '@mui/material';
import {
  IconDevicesCancel,
  IconFileText,
  IconPencilDollar,
  IconPencilSearch,
} from '@tabler/icons-react';

import TopCard from 'src/components/widgets/cards/TopCard';
import ContractAffiliateTable from './component/ContractAffiliateTable';

const dataSource = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Hợp đồng',
    total: '190',
    icons: (
      <Box
        bgcolor="primary.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconFileText color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Từ chối',
    total: '190',
    icons: (
      <Box
        bgcolor="warning.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconDevicesCancel color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Đã ký',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconPencilDollar color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Chờ ký',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconPencilSearch color="white" size={30} />
      </Box>
    ),
  },
];

const ContactAffiliate = () => {
  return (
    <>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <TopCard dataSource={dataSource} totalColumn={4} />
        </Grid>

        <Grid item xs={12}>
          {' '}
          <ContractAffiliateTable />
        </Grid>
      </Grid>
    </>
  );
};

export default ContactAffiliate;
