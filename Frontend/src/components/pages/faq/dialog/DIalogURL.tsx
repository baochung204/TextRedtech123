import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, Box, TextField, Snackbar, Alert, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';

interface PropsDialog {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    value: string;
}

interface PropsForm {
    url: string,
    title: string,
    describe: string,
}

const DialogURL: React.FC<PropsDialog> = ({ value, open, setOpen }) => {
    const [formData, setFormData] = useState<PropsForm[]>([{
        url: '',
        title: '',
        describe: '',
    }]);
    const [open1, setOpen1] = useState(false);

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = event.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    const handleClose = () => {
        setOpen(false);
        resetForm();
    };

    const handleSubmit = () => {
        console.log(formData);
        handleClose();
        setOpen1(true);
        setTimeout(() => {
            setOpen1(false);
        }, 3000);
    };

    const resetForm = () => {
        setFormData([{
            url: '',
            title: '',
            describe: '',
        }]);
    };

    console.log('formdata: ', formData.length);


    const handleClick = () => {
        const data = [...formData];
        data.push({
            url: '',
            title: '',
            describe: '',
        })
        setFormData(data)
        console.log('formdata: ', formData.length);

    }

    return (
        <>
            <Dialog
                fullWidth={true}
                maxWidth="md"
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
                            paddingBottom: 2
                        }}
                    >
                        <Typography fontWeight={600} variant='h3'>
                            Thêm URL
                        </Typography>
                    </Box>
                </DialogTitle>
                <Scrollbar_y sx={{ maxHeight: 500 }}>
                    <DialogContent>
                        {formData.map((item, index) => {
                            return (
                                <Grid container spacing={2} key={index}>
                                    <Grid item xs={4}>
                                        <Typography fontWeight={600}>URL</Typography>
                                        <TextField
                                            name="url"
                                            value={item.url}
                                            onChange={(e) => {
                                                const data = [...formData];
                                                data[index].url = e.target.value;
                                                setFormData(data)
                                            }}
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography fontWeight={600}>Tiêu đề</Typography>
                                        <TextField
                                            name="title"
                                            value={item.title}
                                            onChange={(e) => {
                                                const data = [...formData];
                                                data[index].title = e.target.value;
                                                setFormData(data)
                                            }}
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography fontWeight={600}>Mô tả</Typography>
                                        <TextField
                                            name="url"
                                            value={item.describe}
                                            onChange={(e) => {
                                                const data = [...formData];
                                                data[index].describe = e.target.value;
                                                setFormData(data)
                                            }}
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                </Grid>

                            )
                        })}
                        <IconButton
                            sx={{
                                backgroundColor: 'error.light',
                                color: 'error.main',
                                "&: hover": {
                                    backgroundColor: 'error.main',
                                    color: 'white'
                                }
                            }}
                            onClick={handleClick}

                        >
                            <AddIcon sx={{ fontSize: '15px' }} />
                        </IconButton>
                    </DialogContent>
                </Scrollbar_y>

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

export default DialogURL;
