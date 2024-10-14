import { Box, Chip, Fab, Grid, Paper, Tooltip, Typography } from '@mui/material';

import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import SimpleDialog from '../dialog/searchDialog';

const AddSearch = () => {
  const [openFunction, setOpenFunction] = useState(false);
  const handleClickOpenFunction = () => {
    setOpenFunction(true);
  };

  return (
    <Paper elevation={3} sx={{ minHeight: '50%',height:'190px', p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={6} sx={{ display: 'flex', gap: 1 }}>
          <Box fontWeight={600} mt={0.5}>
            Tri thức
            <Chip sx={{ ml: 1 }} size="small" label={"3/5"} color="primary" />
          </Box>
          
        </Grid>
        <Grid item xs={12} sm={6} lg={6} display={'flex'} justifyContent={'end'}>
          {/* <Button
            variant="contained"
            color="primary"
            component="span"
            size="small"
            style={{ marginBottom: '10px' }}
            onClick={handleClickOpenSearch}
          >
            <AddIcon fontSize="small" style={{ marginRight: '10px' }} />
          </Button> */}
          <Tooltip title="Thêm File tri thức">
            <Fab onClick={handleClickOpenFunction} size="small" color="primary" aria-label="plus">
              <IconPlus width={18} />
            </Fab>
          </Tooltip>
        </Grid>
        <Grid item xs={12} sm={6} lg={12}>
          <SimpleDialog openFunction={openFunction} setOpenFunction={setOpenFunction} />
          <Typography sx={{ display: 'flex', justifyContent: 'end' }} fontSize={12} fontWeight={600}>500/1000 MB</Typography>
        </Grid>
        
      </Grid>
    </Paper>
  );
};

export default AddSearch;
