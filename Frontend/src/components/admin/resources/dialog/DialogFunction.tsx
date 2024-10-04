import { Alert, Divider, InputAdornment, Snackbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
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
const DialogFunction: React.FC<PropsDialog> = ({ value, open, setOpen }) => {

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
        <Scrollbar_y>
            <Dialog


                open={value === '2' && open ? true : false}
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
                        maxWidth: '900px', // Giữ chiều rộng của Dialog
                    },
                }}
            >
                <DialogTitle sx={{

                }}>

                    <Typography fontWeight={600} variant='h3'>
                        Thêm Function
                    </Typography>

                </DialogTitle>
                <Divider sx={{ mx: '0px' }} />
                    <DialogContent sx={{pt:0,px:5}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={6} md={12}>
                                <CustomFormLabel htmlFor="name-text">Nhóm Function</CustomFormLabel>
                                <CustomTextField
                                    id="name-text"
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Nhập tên nhóm Function . . ."

                                />

                                <CustomFormLabel htmlFor="name-text">Tên Function</CustomFormLabel>
                                <CustomTextField
                                    id="name-text"
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Nhập tên Function . . ."

                                />
                                <CustomFormLabel htmlFor="sale-price">Code Function</CustomFormLabel>
                                <CustomTextField
                                    id="sale-price"
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Nhập Code Function . . ."
                                />
                            </Grid>
                            <Grid item xs={12} lg={6} md={12}>

                                <CustomFormLabel htmlFor="name-text">Level</CustomFormLabel>
                                <CustomTextField
                                    id="name-text"
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Nhập tên sản phẩm . . ."

                                />


                                <CustomFormLabel htmlFor="tags-text">Khách hàng sở hữu</CustomFormLabel>
                                <CustomTextField
                                    id="name-text"
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Nhập số lượng . . ."

                                />
                                <CustomFormLabel htmlFor="phone-text">Trợ lý áp dụng</CustomFormLabel>
                                <CustomOutlinedInput
                                    // endAdornment={<InputAdornment position="end">đ</InputAdornment>}
                                    id="price-list"
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Nhập trợ lý áp dụng . . ."
                                />
                            </Grid>

                            <Grid item xs={12} lg={12} md={12}>
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
                </Scrollbar_y>
        </>
    );
}

export default DialogFunction;