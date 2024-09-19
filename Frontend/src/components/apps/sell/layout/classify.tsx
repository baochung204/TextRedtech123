import React, { useState, KeyboardEvent } from 'react';
import { Grid, IconButton, InputBase, Typography, Box } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

// CustomTextField component
const CustomTextField: React.FC<{
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    onDelete: () => void;
}> = ({ value, onChange, onKeyDown, onBlur, onDelete }) => (
    <Box display="flex" alignItems="center" mb={1}>
        <InputBase
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            placeholder="Nhập phân loại"
            sx={{ flex: 1, border: '1px solid grey', borderRadius: 1, padding: 1 }}
        />
        <IconButton onClick={onDelete} size="small">
            <DeleteIcon />
        </IconButton>
    </Box>
);

const CategoryInput: React.FC = () => {
    const [categories, setCategories] = useState<string[]>(['']);
    const [isEditing, setIsEditing] = useState<boolean>(true);

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newCategories = [...categories];
        newCategories[index] = event.target.value;
        setCategories(newCategories);
    };

    const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (index === categories.length - 1) {
                // Add a new input field if Enter is pressed on the last input field
                setCategories([...categories, '']);
                setIsEditing(true);
            } else {
                // Blur the field if Enter is pressed on any other field
                (event.target as HTMLElement).blur();
            }
        }
    };

    const handleBlur = () => {
        // Optionally, handle the blur event if needed
        setIsEditing(false);
    };

    const handleDelete = (index: number) => {
        // Remove the category at the specified index
        setCategories(categories.filter((_, i) => i !== index));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Phân loại</Typography>
                {categories.map((category, index) => (
                    <CustomTextField
                        key={index}
                        value={category}
                        onChange={(event) => handleChange(index, event)}
                        onKeyDown={(event) => handleKeyDown(index, event)}
                        onBlur={handleBlur}
                        onDelete={() => handleDelete(index)}
                    />
                ))}
            </Grid>
        </Grid>
    );
};

export default CategoryInput;
