import { Box, Fab, Grid, Paper, Tooltip, Typography } from '@mui/material';

import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import SimpleDialog from '../dialog/searchDialog';

const AddSearch = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const handleClickOpenSearch = () => {
    setOpenSearch(true);
  };

  return (
    <Paper elevation={3} sx={{ minHeight: '5%', p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={6} sx={{ display: 'flex', gap: 1 }}>
          <Box fontWeight={600} mt={0.5}>
            Tri thức
          </Box>
          <Box
            color="primary"
            sx={{
              backgroundColor: '#ff3333',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography fontWeight={800} sx={{ fontSize: 12, color: 'white', px: 2 }}>
              3/5
            </Typography>
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
            <Fab onClick={handleClickOpenSearch} size="small" color="primary" aria-label="plus">
              <IconPlus width={18} />
            </Fab>
          </Tooltip>
        </Grid>
        <Grid item xs={12} sm={6} lg={12}>
          <SimpleDialog openSearch={openSearch} setOpenSearch={setOpenSearch} />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
          <Typography fontWeight={600}>Dung lượng: 500/1000 MB</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddSearch;
