import { Alert, Box, Divider, Snackbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

interface PropsDialog {
    value: string,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

}

const DialogFile: React.FC<PropsDialog> = ({ value, open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    };
    const [open1, setOpen1] = useState(false);
    // const [name, setName] = React.useState<string | null>(null);
    // const hanldeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.files !== null) {
    //         setName(event.target.files[0].name);
    //     }

    // }
    const handleSubmit = () => {

        handleClose();
        setOpen1(true);
        setTimeout(() => {
            setOpen1(false);
        }, 3000);
    };
    return (
        <>
            <Dialog
                fullWidth={true}
                maxWidth='sm'
                open={value === '4' && open ? true : false}
                onClose={handleClose}
            >
                <DialogTitle >
                    <Box >
                        <Typography fontWeight={600} variant='h3'>
                            Thêm model
                        </Typography>
                    </Box>
                </DialogTitle>
                <Divider sx={{ mx: '0px' }} />

                <DialogContent>
                    <DialogContentText>
                        <Grid container xs={12} spacing={2}>
                            <Grid item xs={12}>
                                <CustomFormLabel htmlFor="name-text">Tên Model</CustomFormLabel>
                                <CustomTextField
                                    id="name-text"
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Nhập tên Model . . ."
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomFormLabel htmlFor="name-text">Model gốc</CustomFormLabel>
                                <CustomTextField
                                    id="name-text"
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Nhập Model gốc . . ."
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomFormLabel htmlFor="name-text">Trainign token</CustomFormLabel>
                                <CustomTextField
                                    id="name-text"
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Nhập tên Trainign token . . ."
                                />
                            </Grid>
                        </Grid>

                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleSubmit}>Thêm</Button>
                    <Button onClick={handleClose}>Đóng</Button>
                </DialogActions>

            </Dialog >
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
}

export default DialogFile;