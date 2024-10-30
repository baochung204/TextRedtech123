import { Avatar, Box, DialogContentText, Divider, Grid, Slide, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { TransitionProps } from '@mui/material/transitions';
import {
  IconCopy,
  IconDiscountCheck,
  IconGenderBigender,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRelationManyToMany,
} from '@tabler/icons-react';
import React from 'react';
import avt6 from 'src/assets/images/profile/user-6.jpg';
interface PropsDialog {
  openDetail: boolean;
  setOpenDetail: React.Dispatch<React.SetStateAction<boolean>>;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DialogDetailCustomer: React.FC<PropsDialog> = ({ openDetail, setOpenDetail }) => {
  const handleClose = () => {
    setOpenDetail(!openDetail);
  };

  return (
    <>
      <Dialog
        TransitionComponent={Transition}
        open={openDetail}
        onClose={handleClose}
        maxWidth="lg"
        sx={{
          '& .MuiDialog-container': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '580px',
          },
        }}
      >
        <DialogContent
          sx={{
            overflowY: 'auto',
            height: '100%',
            '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#E3E3E3',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#d6d6d6',
            },
            maxHeight: '80vh',
            p: 4,
          }}
        >
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container spacing={2} px={3}>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={2}
                  sx={{ borderBottom: '2px solid #D6D6D6', paddingBottom: 3 }}
                >
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar src={avt6} alt="" sx={{ width: 170, height: 170 }} />
                  </Grid>
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h4" fontWeight="600" mt={0.2}>
                      Nguyễn Đức Nhật
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 1,
                      mt: '-6px',
                    }}
                  >
                    <IconDiscountCheck color={'#13DEB9'} />
                    <Typography variant="body1" fontWeight="400" color={'#13DEB9'}>
                      Đã đăng ký
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Box sx={{ width: '100%' }}>
                <Grid container spacing={1}>
                  <Grid item xs={12} mt={2}>
                    <Typography variant="h6" fontWeight={600}>
                      Thông tin khách hàng
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={1}>
                    <Grid container>
                      <Grid item xs={1} mt={1}>
                        <IconPhoneCall color="#9C9C9C" size={25} />
                      </Grid>
                      <Grid item xs={3} mt={1}>
                        <Typography variant="h6" fontWeight="500" mt={0.2}>
                          Số điện thoại
                        </Typography>
                      </Grid>
                      <Grid item xs={8} mt={1} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Typography variant="h6" fontWeight="500" mt={0.2}>
                          0359774443
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={1}>
                        <IconMail color="#9C9C9C" size={25} />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" fontWeight="500" mt={0.2}>
                          Email
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Typography variant="h6" fontWeight="500" mt={0.2}>
                          chungkbph38477@fpt.edu.vn
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={1}>
                        <IconMapPin color="#9C9C9C" size={25} />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" fontWeight="500" mt={0.2}>
                          Địa chỉ
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Typography variant="h6" fontWeight="500" mt={0.2}>
                          Cần Kiệm, Thạch Thất, Hà Nội
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={1}>
                        <IconGenderBigender color="#9C9C9C" size={25} />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" fontWeight="500" mt={0.2}>
                          Giới tính
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Typography variant="h6" fontWeight="500" mt={0.2}>
                          Name
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={1}>
                        <IconRelationManyToMany color="#9C9C9C" size={25} />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" fontWeight="500" mt={0.2}>
                          PSID
                        </Typography>
                      </Grid>
                      <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'end', gap: 1 }}>
                        <Typography variant="h6" fontWeight="500" mt={0.2} color={'#FF3333'}>
                          77080886675960335
                        </Typography>
                        <IconCopy size={18} color={'#FF3333'} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogDetailCustomer;
