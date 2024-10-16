import {
  Avatar,
  Box,
  CardContent,
  Fab,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { IconPlus, IconPower, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import img1 from 'src/assets/images/profile/user-1.jpg';

const Integration = () => {
  const [connect, setConnect] = useState<boolean>(false);
  const handleConnection = () => {
    setConnect((prevConnect) => !prevConnect);
  };
  const theme = useTheme();
  return (
    <Paper elevation={3} sx={{ minHeight: '4%', p: 2, mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={7}>
          <Box display="flex" alignItems="center">
            {/* <FacebookIcon fontSize='large' color="info" /> */}
            <Box fontWeight={600}>Tích hợp Facebook</Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={5} display={'flex'} justifyContent={'end'}>
          <Tooltip title="Thêm">
            <Fab size="small" color="primary" aria-label="plus">
              <IconPlus width={18} />
            </Fab>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={12} mt={2} mb={1}>
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
                <Box
                  sx={{
                    backgroundColor: connect ? theme.palette.success.main : 'gray',
                    borderRadius: '100%',
                    height: '10px',
                    width: '10px',
                  }}
                />
                565835121
              </Typography>
            </Box>
            <Box ml="auto">
              <Grid container>
                <Grid item xs={6}>
                  <Tooltip title={connect ? 'Đã kết nối' : 'Tắt kết nối'} placement="top">
                    <IconButton onClick={handleConnection}>
                      <IconPower
                        style={{ cursor: 'pointer' }}
                        color={connect ? '#13DEB9' : 'gray'}
                      />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={6}>
                  <IconButton>
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </CardContent>
      </Grid>
    </Paper>
  );
};
export default Integration;
