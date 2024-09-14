import { Box, MenuItem, Paper, TextField } from "@mui/material";

import { useState } from "react";
import CustomFormLabel from "src/components/forms/theme-elements/CustomFormLabel";
import CustomSelect from "src/components/forms/theme-elements/CustomSelect";

const AddModel = () => {
    const [model, setModel] = useState('1');

    const handleModel = (event: React.ChangeEvent<{ value: unknown }>) => {
        setModel(event.target.value as string);
    };

    return (
        <Paper elevation={3} sx={{ maxHeight: '70%', overflowY: 'auto', px: 2, pb: 3 }}>
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
            {/* <TextField minRows={3} multiline  id="cname" placeholder="Hướng dẫn trợ lý" variant="outlined" fullWidth /> */}
            {/* <QuillEditor /> */}
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={6}
                fullWidth
                placeholder="Nhập hướng dẫn . . ."
                sx={{
                    '& .MuiOutlinedInput-root': {
                        padding: 0,  // Loại bỏ padding của TextField
                    },
                }}
            />
        </Paper>

    )
}

export default AddModel;