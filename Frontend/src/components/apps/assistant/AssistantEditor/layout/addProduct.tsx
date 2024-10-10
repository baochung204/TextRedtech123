import { Box, Fab, Grid, Paper, Tooltip } from '@mui/material';

import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import ProductDialog from '../dialog/productDialog';

const AddUrl = () => {
  const [openFunction, setOpenFunction] = useState(false);
  const handleClickOpenFunction = () => {
    setOpenFunction(true);
  };

  return (
    <Paper elevation={3} sx={{ minHeight: '5%', height: '190px', p: 2,mt:2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={6}>
          <Box fontWeight={600} mt={0.5}>
            Sản phẩm
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={6} display={'flex'} justifyContent={'end'}>
          {/* <Button
                        variant="contained"
                        color="primary"
                        size='small'
                        component="span"
                        style={{ marginBottom: '10px' }}
                        onClick={handleClickOpenFunction}
                    >
                        <AddIcon fontSize="small" style={{ marginRight: '10px' }} />
                        File
                    </Button> */}
          <Tooltip title="Thêm sản phẩm">
            <Fab onClick={handleClickOpenFunction} size="small" color="primary" aria-label="plus">
              <IconPlus width={18} />
            </Fab>
          </Tooltip>
        </Grid>
        <Grid item xs={12} sm={6} lg={12}>
          <ProductDialog openFunction={openFunction} setOpenFunction={setOpenFunction} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddUrl;
