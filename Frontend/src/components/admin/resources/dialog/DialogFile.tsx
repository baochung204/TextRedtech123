import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography, Box, Snackbar, Alert, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

interface PropsDialog {
    value: string,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

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
const DialogFile: React.FC<PropsDialog> = ({ value, open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    };
    const [open1, setOpen1] = useState(false);
    const [name, setName] = React.useState<string | null>(null);
    const hanldeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null) {
            setName(event.target.files[0].name);
        }

    }
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