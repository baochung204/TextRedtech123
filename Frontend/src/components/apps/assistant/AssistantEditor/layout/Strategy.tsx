import { Box, Fab, Grid, Paper, Tooltip } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import StrategyDialog from '../dialog/strategyDialog';

import { useState } from 'react';

const Strategy = () => {

  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };




  return (
    <Paper elevation={3} sx={{ minHeight: '5%', p: 2, mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={6}>
          <Box fontWeight={600} mt={0.5}>Chiến lược</Box>

        </Grid>
        <Grid item xs={12} sm={6} lg={6} display={'flex'} justifyContent={'end'}>
          <Tooltip title="Chọn chiến lược" >
            <Fab onClick={handleClickOpen} size="small" color="secondary" aria-label="plus">
              <IconPlus width={18} />
            </Fab>
          </Tooltip>
        </Grid>
        <Grid item xs={12} sm={6} lg={12}>
          <StrategyDialog open={open} setOpen={setOpen} />

        </Grid>
      </Grid>

    </Paper>
  );
};
export default Strategy;
