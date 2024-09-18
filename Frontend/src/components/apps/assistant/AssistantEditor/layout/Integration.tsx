import { Avatar, Box, Button, CardContent, Fab, Grid, Paper, Stack, Tooltip, Typography } from '@mui/material';
import { IconMapPin, IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import img1 from 'src/assets/images/profile/user-1.jpg';
import BlankCard from 'src/components/apps/integration/BlankCard';
import FacebookIcon from '@mui/icons-material/Facebook';

const Integration = () => {
  const [connect, setConnect] = useState<boolean>(false);
  const handleConnection = () => {
    setConnect((prevConnect) => !prevConnect);
  };
  return (
    <Paper elevation={3} sx={{ minHeight: '4%', p: 2, mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={7}>
          <Box display="flex" alignItems="center">
            <FacebookIcon fontSize='large' color="info" />
            <Box fontWeight={600} ml={1}>Tích hợp Facebook</Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={5} display={'flex'} justifyContent={'end'}>
          <Tooltip title="Thêm">
            <Fab size="small" color="secondary" aria-label="plus">
              <IconPlus width={18} />
            </Fab>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={12} mt={2} mb={1}>
        <BlankCard>
          <CardContent>
            <Stack direction={'row'} gap={2} alignItems="center">
              <Avatar alt="Remy Sharp" src={img1} />
              <Box>
                <Typography variant="h6" textOverflow={'ellipsis'} noWrap>
                  Redfood
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  <IconMapPin size="14" />
                  565835121
                </Typography>
              </Box>
              <Box ml="auto">
                <Button
                  variant={connect ? 'contained' : 'outlined'}
                  color="primary"
                  size="small"
                  onClick={handleConnection}
                >
                  {connect ? 'Đã kết nối' : 'Kết nối'}
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </BlankCard>
      </Grid>
    </Paper>

  );
};
export default Integration;
