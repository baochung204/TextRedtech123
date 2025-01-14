import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Countdown = ({
  initialSeconds,
  onTimeUp,
}: {
  initialSeconds: number;
  onTimeUp: () => void;
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      onTimeUp(); // Gọi hàm khi thời gian kết thúc
    }
  }, [seconds, onTimeUp]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return {
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(remainingSeconds).padStart(2, '0'),
    };
  };

  const time = formatTime(seconds);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height={100}
      sx={{ textAlign: 'center' }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography color={'error'}>Khuyến mãi còn lại</Typography>
      </Box>
      <Box>
        <Grid container spacing={1} sx={{ width: 'auto', justifyContent: 'center' }}>
          <Grid item>
            <Typography variant="h3" sx={{ fontSize: '25px', fontWeight: 'bold' }}>
              {time.minutes}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>
              Phút
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" sx={{ fontSize: '25px', fontWeight: 'bold' }}>
              :
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" sx={{ fontSize: '25px', fontWeight: 'bold' }}>
              {time.seconds}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>
              Giây
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Countdown;
