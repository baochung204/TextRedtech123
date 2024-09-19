import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { TabList } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Dialog, DialogContent, DialogTitle, Fab, Grid, InputAdornment, Slide, TextField, Tooltip } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { styled } from '@mui/system';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import PageContainer from 'src/components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import TopCard from 'src/components/widgets/cards/TopCard';
import BannerPage from 'src/layouts/full/shared/breadcrumb/BannerPage';
import AddBlog from 'src/views/admin/blog/_components/AddBlog';
import TableFeature from 'src/views/admin/feature/_components/TableFeature';
import TableOrderProduct from './TableOrderProduct';

const BCrumb = [
  { to: '/admin/dashboard', title: 'Trang Chủ' },
  { to: '/admin/buy/orderproducts', title: 'Danh sách đơn hàng' },
];

const Transition = React.forwardRef<unknown, TransitionProps & { children: React.ReactElement<any, any> }>(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

const BoxStyled = styled(Box)(() => ({
  padding: '30px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  '&:hover': {
      transform: 'scale(1.03)',
  },

}));


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
      title: 'Đơn hàng',
      total: '12.567',
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
      title: 'Tổng giá trị',
      total: '16.146.515 (Point)',
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
      title: 'Khuyến mại',
      total: '5.432.234 (Point)',
      icons:
          <PeopleAltIcon
              sx={{
                  fontSize: 40
              }}
          />
  },
  {
      bgColor: 'warning.light',
      color: 'warning.main',
      title: 'Tổng thanh toán',
      total: '12.423.423 (Point)',
      icons:
          <PeopleAltIcon
              sx={{
                  fontSize: 40
              }}
          />
  },
  {
    bgColor: 'warning.light',
    color: 'warning.main',
    title: 'AOV',
    total: '23.423 (Point)',
    icons:
        <PeopleAltIcon
            sx={{
                fontSize: 40
            }}
        />
}
]


const OrderProduct = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [value, setValue] = React.useState('1');

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <PageContainer>
      <BannerPage title="Đơn hàng sản phẩm" items={BCrumb} />
      <Grid item xs={12}>
        <TopCard dataSource={DataBox} />
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
              </Box>
              <TableOrderProduct />
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

export default OrderProduct;
