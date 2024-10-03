import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography, Box, Snackbar, Alert, Divider, InputAdornment, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import PersonIcon from '@mui/icons-material/Person';

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
const DialogStr: React.FC<PropsDialog> = ({ value, open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    };
    const [open1, setOpen1] = useState(false);


    const handleSubmit = () => {

        handleClose();
        setOpen1(true);
        setTimeout(() => {
            setOpen1(false);
        }, 3000);
    };
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);



    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setAvatarPreview(URL.createObjectURL(file));
        }
    };
    return (
        <>
            <Dialog
                open={value === '1' && open ? true : false}
                onClose={handleClose}
                maxWidth="lg"
                sx={{
                    '& .MuiDialog-container': {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    '& .MuiPaper-root': {
                        width: '100%',
                        maxWidth: '900px',
                    },
                }}
            >
                <DialogTitle>

                    <Typography fontWeight={600} variant='h3'>
                        Thêm chiến lược
                    </Typography>

                </DialogTitle>
                <Divider sx={{ mx: '0px' }} />
                <DialogContent sx={{ pt: 0, px: 5 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={4} md={12}>
                            <Box
                                sx={{ textAlign: 'center', justifyContent: 'center', mt: { md: 2 }, mb: '20px' }}
                            >
                                <label htmlFor="avatar-upload">
                                    <Avatar
                                        src={avatarPreview || ''}
                                        alt="avatar preview"
                                        sx={{
                                            width: { xs: 90, sm: 110, md: 130, lg: 160 },
                                            height: { xs: 90, sm: 110, md: 130, lg: 160 },
                                            margin: 'auto',
                                            fontSize: 50,
                                            backgroundColor: avatarPreview ? 'transparent' : '#f0f0f0',
                                            color: '#9e9e9e',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            zIndex: 1,
                                            borderRadius: '50%',
                                            border: 'none',
                                            '&:before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                borderRadius: '50%',
                                                padding: '6px', // Border width
                                                background: 'linear-gradient(#50b2fc, #f44c66)', // Gradient
                                                '-webkit-mask':
                                                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                maskComposite: 'exclude',
                                                zIndex: 1, // Ensure gradient is behind the avatar
                                            },
                                        }}
                                    >
                                        {!avatarPreview && <PersonIcon fontSize="inherit" />}
                                    </Avatar>
                                </label>
                                {/* Hidden file input */}
                                <input
                                    id="avatar-upload"
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={handleAvatarChange}
                                />
                                <Typography mt={1} fontWeight={600}>
                                    Ảnh chiến lược
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={4} md={12}>
                            <CustomFormLabel htmlFor="name-text">Nhóm chiến lược</CustomFormLabel>
                            <CustomTextField
                                id="name-text"
                                variant="outlined"
                                fullWidth
                                placeholder="Nhập tên nhóm Function . . ."

                            />

                            <CustomFormLabel htmlFor="name-text">Tên chiến lược</CustomFormLabel>
                            <CustomTextField
                                id="name-text"
                                variant="outlined"
                                fullWidth
                                placeholder="Nhập tên Function . . ."

                            />

                        </Grid>
                        <Grid item xs={12} lg={4} md={12}>
                            
                            <CustomFormLabel htmlFor="tags-text">Khách hàng sở hữu</CustomFormLabel>
                            <CustomTextField
                                id="tags-text"
                                variant="outlined"
                                fullWidth
                                placeholder="Nhập số lượng . . ."
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="name-text">Level</CustomFormLabel>
                                    <CustomTextField
                                        id="name-text"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Nhập level . . ."
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="phone-text">Trợ lý áp dụng</CustomFormLabel>
                                    <CustomOutlinedInput
                                        id="price-list"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Nhập số lượng . . ."
                                    />
                                </Grid>
                            </Grid>


                        </Grid>


                        <Grid item xs={12} lg={12} md={12}>
                            <Divider sx={{ mx: '-30px' }} />
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="sale-price">Tóm tắt</CustomFormLabel>
                                    <CustomTextField
                                        id="sale-price"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Nhập tóm tắt . . ."
                                        multiline
                                        rows={5}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="sale-price">Nội dung</CustomFormLabel>
                                    <CustomTextField
                                        id="sale-price"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Nhập nội dung . . ."
                                        multiline
                                        rows={5}
                                    />
                                </Grid>
                            </Grid>


                        </Grid>

                    </Grid>

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

export default DialogStr;