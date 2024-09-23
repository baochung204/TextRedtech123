import { Box, Grid, Paper, TextField } from "@mui/material";


const AddFunction = () => {


    return (
        <Paper elevation={3} sx={{ minHeight: '5%', p: 2,mt:2  }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={12}>
                    <Box fontWeight='600' mb={1}>Định nghĩa chuyển đổi</Box>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={6}
                        fullWidth
                        placeholder="Nhập đoạn văn . . ."
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                padding: 0,
                                '& textarea': {
                                    // Custom scrollbar styles
                                    '&::-webkit-scrollbar': {
                                        width: '10px',
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        backgroundColor: 'none',
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: '#f1f1f1',
                                        borderRadius: '10px',
                                    },
                                    '&::-webkit-scrollbar-thumb:hover': {
                                        backgroundColor: '#e6e6e6',
                                    },
                                },
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </Paper>


    )
}

export default AddFunction;