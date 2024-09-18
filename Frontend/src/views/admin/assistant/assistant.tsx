import { Box, Button, Grid, Typography } from '@mui/material';
// components
import PageContainer from 'src/components/container/PageContainer';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
const BoxStyled = styled(Box)(() => ({
  padding: '24px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  // '&:hover': {
  //   transform: 'scale(1.03)',
  // },
}));
import { format } from 'date-fns';
import { Dayjs } from 'dayjs';
import icontext from 'src/assets/images/logos/R-Point.png';
import BlankCard from 'src/components/shared/BlankCard';
import { useState } from 'react';
import { EnhancedTableData, EnTableType } from 'src/components/tables/tableData';
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import { IconSearch } from '@tabler/icons-react';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TableList from 'src/components/ComponentTables/tableList';
import { styled } from '@mui/system';
const BCrumb = [
  {
    to: '/',
    title: 'ADMIN',
  },
  {
    title: 'TRỢ LÝ',
  },
  {
    title: 'QUẢN LÝ TRỢ LÝ',
  },
];
interface StyleProps {
  bgColor: string;
  color: string;
  title: string;
  total: string;
  icons: string;
}

const DataBox: StyleProps[] = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Trợ lý',
    total: '2415',
    // icons: (
    //   <PeopleAltIcon
    //     sx={{
    //       fontSize: 40,
    //     }}
    //   />
    // ),
    icons: icontext,
  },
  {
    bgColor: 'secondary.light',
    color: 'secondary.main',
    title: 'CVR trung bình',
    total: '25.18%',
    icons: icontext,
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Khách hàng ',
    total: '362.415',
    icons: icontext,
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Đơn hàng',
    total: '11.415',
    icons: icontext,
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'GMV',
    total: '11.413.241.141₫',
    icons: icontext,
  },
];

interface HeadCell {
  disablePadding: boolean;
  dataIndex: string;
  label: string;
  numeric: boolean;
}

const headCells: HeadCell[] = [
  {
    dataIndex: 'id',
    numeric: false,
    disablePadding: false,
    label: 'ID Sản Phẩm',
  },
  {
    dataIndex: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Tên Sản Phẩm',
  },
  {
    dataIndex: 'image',
    numeric: false,
    disablePadding: false,
    label: 'Ảnh Sản Phẩm',
  },
  {
    dataIndex: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Trạng Thái',
  },
  {
    dataIndex: 'active',
    numeric: false,
    disablePadding: false,
    label: 'hoat dong',
  },
];
interface DataRow {
  id: string;
  name: string;
  image: string;
  status: JSX.Element;
}

const dataRows: DataRow[] = [
  {
    id: '123',
    name: 'Sản phẩm 1',
    image: '123',
    status: <Button>1</Button>,
  },
  {
    id: '124',
    name: 'Sản phẩm 2',
    image: '124',
    status: <Button>2</Button>,
  },
  {
    id: '125',
    name: 'Sản phẩm 3',
    image: '125',
    status: <Button>3</Button>,
  },
  {
    id: '126',
    name: 'Sản phẩm 4',
    image: '126',
    status: <Button>4</Button>,
  },
];
const AssistantAdmin = () => {
  return (
    <PageContainer title="Vertical Form" description="this is Vertical Form page">
      <BannerPage title="Quản lý trợ lý" items={BCrumb} />
      <Grid container spacing={2}>
        {DataBox?.map((items: StyleProps, index: number) => (
          <Grid item lg={2.4} sm={6} xs={12} key={index}>
            <BoxStyled sx={{ backgroundColor: items.bgColor, color: items.color }}>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img src={items.icons} alt="" width={40} />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6">{items.title}</Typography>
                  <Typography variant="h5">{items.total}</Typography>
                </Grid>
              </Grid>
            </BoxStyled>
          </Grid>
        ))}
        {/* <Grid item xs={12}>
          <Grid container>
            <Grid
              item
              xs={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <TextField
                id="outlined-search"
                placeholder="Tìm kiếm ticket"
                size="small"
                type="search"
                variant="outlined"
                inputProps={{ 'aria-label': 'Search Followers' }}
                sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconSearch size="18" />
                    </InputAdornment>
                  ),
                }}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 10 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={selectedStartDate}
                    onChange={setSelectedStartDate}
                    renderInput={(params) => (
                      <CustomTextField {...params} sx={{ marginRight: '10px' }} />
                    )}
                  />
                  <Typography sx={{ marginRight: '10px' }}>tới</Typography>
                  <DatePicker
                    value={selectedEndDate}
                    onChange={setSelectedEndDate}
                    renderInput={(params) => (
                      <CustomTextField {...params} sx={{ marginRight: '10px' }} />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Grid>
          </Grid>
        </Grid> */}

        <TableList headCells={headCells} dataRows={dataRows} />
      </Grid>
    </PageContainer>
  );
};

export default AssistantAdmin;
