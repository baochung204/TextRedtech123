import { Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import logoPoint from 'src/assets/images/logos/R-Point.png';

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogDetailOrderRpoint = ({ open, setOpen }: DialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(!open)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center' }}>
        Chi tiết đơn hàng R-Point
      </DialogTitle>
      <DialogContent sx={{ marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                      Mã khách hàng:
                    </Typography>
                  </Grid>{' '}
                  <Grid item xs={8}>
                    {' '}
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                      IDPLSU123456
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                      Tên khách hàng :
                    </Typography>
                  </Grid>{' '}
                  <Grid item xs={8}>
                    {' '}
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                      Nguyen Van A
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                      Số điện thoại :
                    </Typography>
                  </Grid>{' '}
                  <Grid item xs={8}>
                    {' '}
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                      0231654798
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                      Email :
                    </Typography>
                  </Grid>{' '}
                  <Grid item xs={8}>
                    {' '}
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                      nguyenvana@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                      Tên gói :
                    </Typography>
                  </Grid>{' '}
                  <Grid item xs={8}>
                    {' '}
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                      Gói cơ bản
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                      Số point :
                    </Typography>
                  </Grid>{' '}
                  <Grid item xs={8}>
                    {' '}
                    <Typography
                      variant="body1"
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      12{' '}
                      <img
                        src={logoPoint}
                        width={20}
                        alt=""
                        height={20}
                        style={{ borderRadius: 50 }}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                      Giá miên yết
                    </Typography>
                  </Grid>{' '}
                  <Grid item xs={8}>
                    {' '}
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                      200.000 ₫
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDetailOrderRpoint;
