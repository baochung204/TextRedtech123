import { TabList } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Grid, InputAdornment, TextField } from '@mui/material';
import { IconAd2, IconEdit, IconEyeOff, IconFileStar, IconSearch } from '@tabler/icons-react';
import React from 'react';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PageContainer from './../../../components/container/PageContainer';
import ChildCard from './../../../components/shared/ChildCard';
import TableFeature from './_components/TableFeature';

const BCrumb = [
  { to: '/', title: 'Trang Chủ' },
  { to: '/admin/feature', title: 'Danh sách đề xuất' },
];

// interface StyleProps {
//   bgColor: string;
//   color: string;
//   title: string;
//   total: string;
//   icons: JSX.Element;
// }

const dataSource = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Đề xuất',
    total: '190',
    icons: (
      <Box
        bgcolor="primary.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconAd2 color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Đánh dấu',
    total: '190',
    icons: (
      <Box
        bgcolor="warning.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconFileStar color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Chưa xem',
    total: '123',
    icons: (
      <Box
        bgcolor="success.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconEyeOff color="white" size={30} />
      </Box>
    ),
  },
  {
    bgColor: 'error.light',
    color: 'error.main',
    title: 'Cập nhập',
    total: '23',
    icons: (
      <Box
        bgcolor="error.main"
        textAlign="center"
        padding={1}
        sx={{
          width: 45,
          height: 45,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconEdit color="white" size={30} />
      </Box>
    ),
  },
];

const PageFeature = () => {
  // const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [value, setValue] = React.useState('1');

  // const handleOpenPopup = () => {
  //   setIsPopupOpen(true);
  // };

  // const handleClosePopup = () => {
  //   setIsPopupOpen(false);
  // };

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <PageContainer>
      <BannerPage title="Đề xuất tính năng" items={BCrumb} />
      <Grid item xs={12}>
        <TopCard dataSource={dataSource} totalColumn={4} />
      </Grid>
      <ChildCard sx={{ border: 'none' }} sx1={{ padding: 0 }}>
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ p: 0, border: 'none' }}
            >
              {/* Optional: Add Tab components here if needed */}
            </TabList>

            <TabPanel value="1" sx={{ p: 0 }}>
              <Box
                className="actions-and-filters"
                sx={{
                  mt: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {/* <Tooltip title="Tạo đơn hàng">
                    <Fab
                      color="primary"
                      aria-label="add"
                      size="small"
                      sx={{ marginRight: '30px' }}
                      onClick={handleOpenPopup}
                    >
                      <FaPlus />
                    </Fab>
                  </Tooltip> */}

                  <TextField
                    sx={{
                      width: '200px',
                      marginRight: '40px',
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        backgroundColor: '#fff',
                        '&:hover fieldset': {
                          borderColor: '#3f51b5',
                        },
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconSearch size="1.1rem" />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Tìm kiếm"
                    size="small"
                  />
                </Box>
              </Box>
              <TableFeature />
            </TabPanel>
          </Box>
        </TabContext>
      </ChildCard>

      {/* Popup Thêm blogs */}
      {/* <Dialog
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
      </Dialog> */}
    </PageContainer>
  );
};

export default PageFeature;
