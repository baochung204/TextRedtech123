import { TabList } from '@mui/lab';
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
  Tab,
  TextField,
  Tooltip,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { IconChartBar, IconPlus, IconSearch } from '@tabler/icons-react';
import React from 'react';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PageContainer from './../../../components/container/PageContainer';
import ChildCard from './../../../components/shared/ChildCard';
import AddBlog from './_components/AddBlog';
import TableBlog from './_components/TableBlog';
const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '/apps/blog/posts', title: 'Danh sách bài viết' },
];
const Transition = React.forwardRef<
  unknown,
  TransitionProps & { children: React.ReactElement<any, any> }
>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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
        <IconChartBar color="white" size={30} />
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
        <IconChartBar color="white" size={30} />
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
        <IconChartBar color="white" size={30} />
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
        <IconChartBar color="white" size={30} />
      </Box>
    ),
  },
];
const BlogAdmin = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [value, setValue] = React.useState('1');

  // Function mở popup
  // const handleOpenPopup = () => {
  //   setIsPopupOpen(true);
  // };

  // Function đóng popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <PageContainer>
      <BannerPage title=" Quản lý blogs" items={BCrumb} />
      <Grid item xs={12}>
        <TopCard dataSource={DataBox} totalColumn={4} />
      </Grid>
      <ChildCard sx={{ border: 'none' }} sx1={{ padding: 0 }}>
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ p: 0, border: 'none' }}
            >
              <Tab label="Danh sách blogs" value="1" sx={{ p: 0 }} />
            </TabList>

            <TabPanel value="1" sx={{ p: 0 }}>
              <Grid container sx={{ my: 2 }}>
                <Grid item xs={4} sm={4} md={4}>
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
