import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, Box, TextField, Snackbar, Alert } from '@mui/material';
import Grid from '@mui/material/Grid';

interface PropsDialog {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    value: string;
}

const DialogURL: React.FC<PropsDialog> = ({ value, open, setOpen }) => {
    const [formData, setFormData] = React.useState({
        url: '',
        title: '',
        moTa: '',
    });
    const [open1, setOpen1] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleClose = () => {
        setOpen(false);
        resetForm();
    };

    const handleSubmit = () => {
        console.log('url:', formData.url);
        console.log('Tiêu đề:', formData.title);
        console.log('Mô tả:', formData.moTa);
        handleClose();
        setOpen1(true);
        setTimeout(() => {
            setOpen1(false);
        }, 3000);
    };

    const resetForm = () => {
        setFormData({
            url: '',
            title: '',
            moTa: '',
        });
    };

    return (
        <>
            <Dialog
                fullWidth={true}
                maxWidth="sm"
                open={value === '6' && open}
                onClose={handleClose}
            >
                <DialogTitle
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            borderBottom: '1px solid #E6EAEF',
                            paddingX: 25,
                            paddingBottom: 2
                        }}
                    >
                        <Typography fontWeight={600} variant='h3'>
                            Thêm URL
                        </Typography>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Grid container direction="column">
                            <Grid item sm={12}>
                                <Grid container direction="column" sx={{ justifyContent: 'center' }} sm={12}>
                                    <Grid item sm={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2, width: '100%', pb: '8%' }}>
                                        <Box component="form" width={400}>
                                            <Typography fontWeight={600}>URL</Typography>
                                            <TextField
                                                name="url"
                                                value={formData.url}
                                                onChange={handleInputChange}
                                                fullWidth
                                                margin="normal"
                                            />
                                            <Typography fontWeight={600}>Tiêu đề</Typography>
                                            <TextField
                                                name="title"
                                                value={formData.title}
                                                onChange={handleInputChange}
                                                fullWidth
                                                margin="normal"
                                            />
                                            <Typography fontWeight={600}>Mô tả</Typography>
                                            <TextField
                                                name="moTa"
                                                value={formData.moTa}
                                                onChange={handleInputChange}
                                                fullWidth
                                                margin="none"
                                                minRows={3}
                                                multiline
                                                sx={{
                                                    '& .MuiInputBase-input': {
                                                        padding: 0,
                                                    },
                                                    '& .MuiInputBase-root': {
                                                        padding: '12px 14px',
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Thêm
                    </Button>
                    <Button onClick={handleClose}>Đóng</Button>
                </DialogActions>
            </Dialog>

            {/* Snackbar chứa Alert */}
            <Snackbar
                open={open1}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert variant="filled" severity="success" sx={{ width: '100%' , display: 'flex', alignItems: 'center'}}>
                    Thành công!
                </Alert>
            </Snackbar>
        </>
    );
};

export default DialogURL;
