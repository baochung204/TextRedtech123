import { Box, MenuItem, Paper, TextField } from "@mui/material";

import { useState } from "react";
import CustomFormLabel from "src/components/forms/theme-elements/CustomFormLabel";
import CustomSelect from "src/components/forms/theme-elements/CustomSelect";
import Scrollbar from 'src/components/custom-scroll/Scrollbar';

const AddModel = () => {
    const [model, setModel] = useState('1');

    const handleModel = (event: React.ChangeEvent<{ value: unknown }>) => {
        setModel(event.target.value as string);
    };

    return (
        <Paper elevation={3} sx={{ maxHeight: '100%', overflowY: 'auto', px: 2, pb: 2 }}>
            <Box fontWeight={600} mt={2} mb={1}>Model</Box>
            <CustomSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={model}
                onChange={handleModel}
                fullWidth
            >
                <MenuItem value={1}>GPT-3.5-TURBO</MenuItem>
                <MenuItem value={2}>GPT-4-MINI</MenuItem>
                <MenuItem value={3}>GPT-4-TURBO</MenuItem>
            </CustomSelect>
            <CustomFormLabel htmlFor="cname">Hướng dẫn</CustomFormLabel>
        
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={6}
                    fullWidth
                    placeholder="Nhập hướng dẫn . . ."
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

        </Paper>

    )
}

export default AddModel;