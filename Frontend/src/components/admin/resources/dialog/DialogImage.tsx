import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Alert, Box, Snackbar, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import DataTable5 from '../DataTable/TableTab5';

interface PropsDialog {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedItemId1: React.Dispatch<React.SetStateAction<string | null>>;
    value: string;
    selectedItemId1: string | null;
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const DialogImage: React.FC<PropsDialog> = ({ value, open, setOpen, selectedItemId1, setSelectedItemId1 }) => {
    const [fileUrl, setFileUrl] = React.useState<string | undefined>('');
    const [formData, setFormData] = React.useState({
        name: '',
        title: '',
        moTa: '',
    });
    const [open1, setOpen1] = useState(false);
    useEffect(() => {
        if (selectedItemId1 !== null) {
            const item = DataTable5.find(item => item.idCode === selectedItemId1);
            if (item) {
                setFileUrl(item.images);
                setFormData({
                    name: item.imgName,
                    title: item.title,
                    moTa: item.moTa,
                });
            }
        } else {
            setFileUrl('');
            setFormData({
                name: '',
                title: '',
                moTa: '',
            });
        }
    }, [selectedItemId1]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null) {
            const file = event.target.files[0];
            setFormData({
                ...formData,
                name: file.name,
            });
            setFileUrl(URL.createObjectURL(file));
        }
    };

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
        setSelectedItemId1(null);
    };

    const handleSubmit = () => {
        handleClose();
        setOpen1(true);
        setTimeout(() => {
            setOpen1(false);
        }, 3000);
    };

    const resetForm = () => {
        setFormData({
            name: '',
            title: '',
            moTa: '',
        });
        setFileUrl('');
    };

    return (
        <>
            <Dialog
                fullWidth={true}
                maxWidth="sm"
                open={value === '5' && open}
                onClose={handleClose}
            >
                <DialogTitle sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        borderBottom: '1px solid #E6EAEF',
                        paddingX: 25,
                        paddingBottom: 2
                    }}>
                        <Typography fontWeight={600} variant='h3'>
                            Thêm Ảnh
                        </Typography>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Grid container direction="column">
                            {selectedItemId1 === null &&
                                <Grid item sm={12}>
                                    <Grid container direction="column" sx={{ justifyContent: 'center' }} sm={12}>
                                        <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} sm={12}>
                                            <Button
                                                component="label"
                                                variant="contained"
                                                startIcon={<CloudUploadIcon />}
                                            >
                                                Tải ảnh lên
                                                <VisuallyHiddenInput
                                                    type="file"
                                                    onChange={handleChange}
                                                    accept=".png, .jpg, .svg"
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} sm={12}>
                                            <Typography sx={{ fontSize: 12, fontWeight: 400, pt: 1, pb: 2 }}>
                                                Hỗ trợ: .png, .jpg, .svg
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>}
                            {(fileUrl !== '' || selectedItemId1 !== null) && (
                                <Grid item sm={12}>
                                    <Grid container direction="column" sx={{ justifyContent: 'center' }} sm={12}>
                                        <Grid item sm={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img src={fileUrl} alt="" width={300} />
                                        </Grid>

                                        <Grid item sm={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2, width: '100%', pb: '8%' }}>
                                            <Box component="form" width={400}>
                                                <Typography fontWeight={600}>Tên file</Typography>
                                                <TextField
                                                    name="name"
                                                    value={formData.name}
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
                            )}
                            
                        </Grid>
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        {selectedItemId1 === null ? 'Thêm' : 'Sửa'}
                    </Button>
                    <Button onClick={handleClose}>Đóng</Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={open1}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert variant="filled" severity="success" sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    Thành công!
                </Alert>
            </Snackbar>
        </>
    );
};

export default DialogImage;