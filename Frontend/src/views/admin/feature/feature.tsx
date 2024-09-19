import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Grid, InputAdornment, Slide, TextField } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { styled } from '@mui/system';
import { IconSearch } from '@tabler/icons-react';
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
    title: 'Đề xuất',
    total: '120',
    icons: (
      <PeopleAltIcon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    bgColor: 'info.light',
    color: 'info.main',
    title: 'Đánh dấu',
    total: '5',
    icons: (
      <PeopleAltIcon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Chưa xem',
    total: '52',
    icons: (
      <PeopleAltIcon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'Cập nhập',
    total: '12',
    icons: (
      <PeopleAltIcon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
];

const PageFeature = () => {
  return (
    <PageContainer>
      <BannerPage title="Đề xuất tính năng" items={BCrumb} />
      <Grid item xs={12}>
        <TopCard dataSource={DataBox} totalColumn={4} />
      </Grid>
      <ChildCard sx={{ border: 'none' }} sx1={{ padding: 0 }}>
        <TabContext>
          <Box>
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
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Grid item xs={4} sm={4} md={4}>
                    <TextField
                      id="outlined-search"
                      placeholder="Tìm kiếm thông báo"
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
