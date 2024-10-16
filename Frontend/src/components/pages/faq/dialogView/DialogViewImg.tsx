import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, Box, TextField, Grid, Avatar, IconButton } from '@mui/material';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';

interface PropsDialog {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedItemId1: React.Dispatch<React.SetStateAction<string | null>>;
    value: string;
    selectedItemId1: string | null;
    dataImages: any[];
}

const DialogViewImg: React.FC<PropsDialog> = ({
    value,
    open,
    setOpen,
    selectedItemId1,
    setSelectedItemId1,
    dataImages,
}) => {
    const [dataImage, setDataImage] = useState<{ url: string; name: string; title: string; moTa: string }[]>([]);

    useEffect(() => {
        if (selectedItemId1) {
            const item = dataImages.find((item) => item.id === selectedItemId1);
            if (item) {
                setDataImage([{
                    url: item.imageURL,
                    name: item.name,
                    title: item.title,
                    moTa: item.description,
                }]);
            }
        } else {
            setDataImage([]);
        }
    }, [selectedItemId1, dataImages]);

    const handleClose = () => {
        setOpen(false);
        setSelectedItemId1(null);
    };

    const handleSave = () => {
        console.log(dataImage);
        setDataImage([])
        setOpen(false)
    };

    return (
        <Dialog fullWidth={true} maxWidth="md" open={value === '5' && open} onClose={handleClose}>
            <DialogTitle sx={{ textAlign: 'center' }}>
                <Typography fontWeight={600} variant="h3">
                    Thêm ảnh
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Scrollbar_y sx={{ maxHeight: '530px', paddingX: 5 }}>
                    <DialogContentText>
                        <Grid container direction="column">
                            {selectedItemId1 === null && (
                                <Grid item sm={12}>
                                    <Grid container direction="column" sx={{ justifyContent: 'center' }} sm={12}>
                                        <Grid
                                            item
                                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            sm={12}
                                        >
                                            <Box sx={{ backgroundColor: 'transparent' }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 3 }}>
                                                    <Box>
                                                        <IconButton aria-label="upload">
                                                            <Button
                                                                variant="contained"
                                                                component="label"
                                                            >
                                                                <span style={{ display: 'flex', alignItems: 'center' }}>+ Tải ảnh lên</span>
                                                                <input
                                                                    type="file"
                                                                    hidden
                                                                    multiple
                                                                    accept="image/*"
                                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                                        if (e.target.files) {
                                                                            const initialData = Array.from(e.target.files).map(file => ({
                                                                                url: URL.createObjectURL(file),
                                                                                name: file.name,
                                                                                title: '',
                                                                                moTa: '',
                                                                            }));
                                                                            setDataImage(initialData);
                                                                        }
                                                                    }}
                                                                />
                                                            </Button>
                                                        </IconButton>
                                                        <Typography sx={{ fontSize: 12, fontWeight: 400, pt: 1, pb: 2 }}>
                                                            Hỗ trợ: .png, .jpg, .svg
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                    <Grid container spacing={2}>
                                                        {dataImage.map((item, index) => (
                                                            <Grid item xs={12} key={index}>
                                                                <Grid container spacing={2}>
                                                                    <Grid item xs={1.5} sx={{ display: 'flex', alignItems: 'center' }}>
                                                                        <Avatar src={item.url} alt={item.url} variant="rounded" sx={{ width: 56, height: 56 }} />
                                                                    </Grid>
                                                                    <Grid item xs={3.3} sx={{ marginBottom: '15px' }}>
                                                                        <TextField
                                                                            fullWidth
                                                                            label="Tên ảnh"
                                                                            variant="outlined"
                                                                            value={item.name}
                                                                            onChange={(e) => {
                                                                                const newData = [...dataImage];
                                                                                newData[index].name = e.target.value;
                                                                                setDataImage(newData);
                                                                            }}
                                                                            sx={{ mt: 2 }}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={3.3}>
                                                                        <TextField
                                                                            fullWidth
                                                                            label="Tiêu đề"
                                                                            variant="outlined"
                                                                            value={item.title}
                                                                            onChange={(e) => {
                                                                                const newData = [...dataImage];
                                                                                newData[index].title = e.target.value;
                                                                                setDataImage(newData);
                                                                            }}
                                                                            sx={{ mt: 2 }}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={3.4}>
                                                                        <TextField
                                                                            fullWidth
                                                                            label="Mô tả"
                                                                            variant="outlined"
                                                                            multiline
                                                                            value={item.moTa}
                                                                            onChange={(e) => {
                                                                                const newData = [...dataImage];
                                                                                newData[index].moTa = e.target.value;
                                                                                setDataImage(newData);
                                                                            }}
                                                                            sx={{
                                                                                mt: 2,
                                                                                '& .MuiInputBase-input': {
                                                                                    padding: 0,
                                                                                },
                                                                                '& .MuiInputBase-root': {
                                                                                    padding: '12px 14px',
                                                                                },
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </DialogContentText>
                </Scrollbar_y>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Hủy</Button>
                <Button onClick={handleSave}>Lưu</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogViewImg;
