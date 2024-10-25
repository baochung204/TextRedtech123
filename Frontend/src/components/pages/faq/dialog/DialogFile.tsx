import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography, Box, Snackbar, Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { dispatch } from 'src/store/Store';
import { uploadFile } from 'src/store/user/user-resources/files/UploadFiles';

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
    const [name, setName] = useState<string | null>(null);
    const [dataform, setDataform] = useState<File>();
    const hanldeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null) {
            console.log(event.target.files);

            setName(event.target.files[0].name);
            setDataform(event.target.files[0])
        }
    }
    const handleSubmit = () => {
        console.log('dataform', dataform);
        if (dataform) {

            const formData = new FormData();
            formData.append('file', dataform);

            dispatch(uploadFile(formData))
            handleClose();
            setOpen1(true);
            setTimeout(() => {
                setOpen1(false);
            }, 3000);
        }
    };
    return (
        <>
            <Dialog
                fullWidth
                maxWidth='sm'
                open={value === '3' && open ? true : false}
                onClose={handleClose}
            >
                <DialogTitle sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        paddingBottom: 2
                    }}>
                        <Typography fontWeight={600} variant='h3'>
                            Thêm File
                        </Typography>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Grid container xs={12} spacing={2}>
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    direction="column"
                                    sx={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Grid item xs={12}
                                        sx={{
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Button
                                            component="label"
                                            role={undefined}
                                            variant="contained"
                                            tabIndex={-1}
                                            startIcon={<CloudUploadIcon />}
                                            fullWidth
                                        >
                                            Tải file lên
                                            <VisuallyHiddenInput
                                                type="file"
                                                onChange={hanldeChange}
                                                accept=".txt, .docx, .pdf, .pptx, .xlsx, .csv"
                                            />
                                        </Button>
                                        <Typography sx={{ fontSize: 12, fontWeight: 400, pt: 1, pb: 2 }}>
                                            Hỗ trợ: .txt, .docx, .pdf, .xlsx, .csv...
                                        </Typography>
                                    </Grid>
                                    {name !== null &&
                                        <Grid
                                            item
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        >


                                            <AttachFileIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                            <Typography >
                                                {name}
                                            </Typography>
                                        </Grid>
                                    }
                                </Grid>
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