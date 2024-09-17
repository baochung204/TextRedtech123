import { Box, Button, Grid, Paper } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

import { useState } from "react";
import FunctionsDialog from "../dialog/functionsDialog";

const AddFunction = () => {
    const [openFunction, setOpenFunction] = useState(false);
    const handleClickOpenFunction = () => {
        setOpenFunction(true);
    };

    return (
        <Paper elevation={3} sx={{ minHeight: '5%', p: 2  }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={6}>
                    <Box fontWeight={600} mt={0.5}>Functions</Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={6} display={'flex'} justifyContent={'end'}>
                    <Button
                        variant="contained"
                        color="primary"
                        size='small'
                        component="span"
                        style={{ marginBottom: '10px' }}
                        onClick={handleClickOpenFunction}
                    >
                        <AddIcon fontSize="small" style={{ marginRight: '10px' }} />
                        File
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                    <FunctionsDialog openFunction={openFunction} setOpenFunction={setOpenFunction} />
                </Grid>
            </Grid>
        </Paper>


    )
}

export default AddFunction;