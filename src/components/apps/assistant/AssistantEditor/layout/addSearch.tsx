import { Box, Button, Grid, Paper } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

import { useState } from "react";
import FunctionsDialog from "../dialog/functionsDialog";
import SimpleDialog from "../dialog/searchDialog";

const AddSearch = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const handleClickOpenSearch = () => {
        setOpenSearch(true);
    };

    return (
        <Paper elevation={3} sx={{ minHeight: '5%', p: 2, mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={6}>
                    <Box fontWeight={600} mt={0.5}>Tri thức</Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={6} display={'flex'} justifyContent={'end'}>
                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        size='small'
                        style={{ marginBottom: '10px' }}
                        onClick={handleClickOpenSearch}
                    >
                        <AddIcon fontSize="small" style={{ marginRight: '10px' }} />
                        File
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                    <SimpleDialog openSearch={openSearch} setOpenSearch={setOpenSearch} />
                </Grid>
            </Grid>

        </Paper>

    )
}

export default AddSearch;