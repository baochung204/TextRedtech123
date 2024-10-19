import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from '@mui/material';
import { Str } from 'src/types/apps/str';


interface PropsDialog {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: Str[];
}

const DialogStragety = ({ open, setOpen, data }: PropsDialog) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
      <DialogTitle textAlign={'center'}>
        <Typography variant="h4">Chi tiết chiến lược</Typography>
      </DialogTitle>

      <DialogContentText>
        {data.map((item, index) => (
          <Grid container key={index} spacing={2} sx={{ paddingTop: 5 }}>
            <Grid
              item
              xs={4}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <Box>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Avatar
                    src={item.badgeUrl}
                    alt={item.badgeUrl}
                    variant="rounded"
                    sx={{ width: 100, height: 100, marginBottom: '10px' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <span style={{ fontWeight: 600 }}>ID:</span> {item.campaignId}
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{ fontWeight: 600 }}>Tên chiến lược:</span> {item.campaignName}
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{ fontWeight: 600 }}>Nhóm:</span> {item.groupCampaignName}
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{ fontWeight: 600 }}>Level:</span> {item.level}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <span style={{ fontWeight: 600 }}>Tóm tắt:</span> {item.summary}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </DialogContentText>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Đóng</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogStragety;
