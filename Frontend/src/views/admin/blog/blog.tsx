import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  InputAdornment,
  Slide,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import {
  IconBrandStrava,
  IconLockSquareRounded,
  IconPasswordUser,
  IconPlus,
  IconSearch,
  IconUser,
} from '@tabler/icons-react';
import React, { useState } from 'react';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PageContainer from './../../../components/container/PageContainer';
import ChildCard from './../../../components/shared/ChildCard';
import AddBlog from './_components/AddBlog';
import TableBlog from './_components/TableBlog';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '/apps/blog/posts', title: 'Danh sách bài viết' },
];

const Transition = React.forwardRef<unknown, TransitionProps & { children: React.ReactElement<any, any> }>(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

interface StyleProps {
  bgColor: string;
  color: string;
  title: string;
  total: string;
  icons: JSX.Element;
}

const DataBox: StyleProps[] = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Nhân viên',
    total: '120',
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
        <IconUser color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Admin',
    total: '5',
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
        <IconPasswordUser color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Hoạt động',
    total: '52',
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
        <IconBrandStrava color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Khóa',
    total: '12',
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
        <IconLockSquareRounded color="white" size={30} />
      </Box>
    ),
  },
];

const BlogAdmin = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [value, setValue] = useState('1');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <PageContainer>
      <BannerPage title="Quản lý bài viết" items={BCrumb} />
      <Grid item xs={12}>
        <TopCard dataSource={DataBox} totalColumn={4} />
      </Grid>
      <ChildCard sx={{ border: 'none' }} sx1={{ padding: 0 }}>
        <TabContext value={value}>
          <Box>
            <TabPanel value="1" sx={{ p: 0 }}>
              <Grid container sx={{ my: 2, alignItems: 'center' }}>
                <Grid item xs={4}>
                  <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                      <Tooltip title="Thêm bài viết mới" sx={{ mb: '15px' }} placement="top">
                        <Fab size="small" color="secondary" aria-label="plus" sx={{ my: 'auto' }}>
                          <IconPlus width={18} />
                        </Fab>
                      </Tooltip>
                    </Grid>
                    <Grid item xs={10}>
                      <TextField
                        id="outlined-search"
                        placeholder="Tìm kiếm bài viết"
                        size="small"
                        type="search"
                        variant="outlined"
                        inputProps={{ 'aria-label': 'Search Followers' }}
                        sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconSearch size="20" />
                            </InputAdornment>
                          ),
                        }}
                        fullWidth={true}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                {/* lịch */}
                <Grid item xs={8} container spacing={2} justifyContent="flex-end">
                  <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Ngày bắt đầu"
                        value={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                        renderInput={(params) => <TextField {...params} fullWidth />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ margin: '0 10px' }}>tới</Typography>
                  </Grid>
                  <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Ngày kết thúc"
                        value={endDate}
                        onChange={(newValue) => setEndDate(newValue)}
                        renderInput={(params) => <TextField {...params} fullWidth />}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </Grid>
              <TableBlog />
            </TabPanel>
          </Box>
        </TabContext>
      </ChildCard>
      {/* Popup Thêm blogs */}
      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        fullWidth
        maxWidth="lg"
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle padding={'10px'}>Thêm bài viết</DialogTitle>
        <DialogContent>
          <AddBlog />
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
};

export default BlogAdmin;
