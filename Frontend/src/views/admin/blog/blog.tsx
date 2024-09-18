import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { TabList } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Dialog, DialogContent, DialogTitle, Fab, Grid, InputAdornment, Slide, Tab, TextField, Tooltip } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import PopupAddList2 from 'src/views/apps/customerList/PopupAddlist2';
import PageContainer from './../../../components/container/PageContainer';
import ChildCard from './../../../components/shared/ChildCard';
import TableBlog from './_components/TableBlog';
import AddBlog from './_components/AddBlog';
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
const dataSource = [
  {
    bgColor: 'primary.light',
    color: 'primary.main',
    title: 'Bài viết',
    total: '2.326',
    icons:
      <PeopleAltIcon
        sx={{
          fontSize: 40
        }}
      />
  },
  {
    bgColor: 'info.light',
    color: 'info.main',
    title: 'Lượt xem',
    total: '18.369',
    icons:
      <PeopleAltIcon
        sx={{
          fontSize: 40
        }}
      />
  },
  {
    bgColor: 'success.light',
    color: 'success.main',
    title: 'Doanh thu',
    total: '66.521',
    icons:
      <PeopleAltIcon
        sx={{
          fontSize: 40
        }}
      />
  },
  {
    bgColor: 'error.light',
    color: 'warning.main',
    title: 'Lượt like/tym',
    total: '23.369',
    icons:
      <PeopleAltIcon
        sx={{
          fontSize: 40
        }}
      />
  }
]
const BlogAdmin = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = React.useState<Date | null>(null);

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [value, setValue] = React.useState('1');

  // Function mở popup
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

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
        <TopCard dataSource={dataSource} />
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
              {' '}
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
                  <Tooltip title="Tạo đơn hàng">
                    <Fab
                      color="primary"
                      aria-label="add"
                      size="small"
                      sx={{ marginRight: '30px' }}
                      onClick={handleOpenPopup}
                    >
                      <FaPlus />
                    </Fab>
                  </Tooltip>

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

                <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: '500px' }}>
                  {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={selectedStartDate}
                      onChange={(newDate) => setSelectedStartDate(newDate)}
                      renderInput={(params) => (
                        <CustomTextField
                          {...params}
                          sx={{ marginRight: '10px', maxWidth: '170px' }}
                        />
                      )}
                    />
                    <Typography sx={{ marginRight: '10px' }}>tới</Typography>
                    <DatePicker
                      value={selectedEndDate}
                      onChange={(newDate) => setSelectedEndDate(newDate)}
                      renderInput={(params) => (
                        <CustomTextField
                          {...params}
                          sx={{ marginRight: '10px', maxWidth: '170px' }}
                        />
                      )}
                    /> */}
                  {/* </LocalizationProvider> */}
                </Box>
              </Box>
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
        <DialogTitle padding={'10px'}>Thêm blogs</DialogTitle>
        <DialogContent>
          <AddBlog />
        </DialogContent>
      </Dialog>
    </PageContainer>
  )
}

export default BlogAdmin
