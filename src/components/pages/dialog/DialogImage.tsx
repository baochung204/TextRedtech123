import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import AttachFileIcon from '@mui/icons-material/AttachFile';


interface PropsDialog {
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
const DialogImage: React.FC<PropsDialog> = ({ open, setOpen }) => {



    const [name, setName] = React.useState<string | null>(null);
    const [fileUrl, setFileUrl] = React.useState<string | null>(null);

    const hanldeChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        console.log(event.target.files);

        if (event.target.files !== null) {
            const file = event.target.files[0];
            setName(file.name);
            setFileUrl(URL.createObjectURL(file));
        }

    }

    const handleClose = () => {
        setOpen(false);
        setName(null)
        setFileUrl(null)
    };
    return (
        <>
            <Dialog
                fullWidth={true}
                maxWidth='md'
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Thêm Ảnh</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Grid container xs={12} spacing={2}>
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    // direction="column"
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <Grid item xs={4}
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
                                            Tải ảnh lên
                                            <VisuallyHiddenInput
                                                type="file"
                                                onChange={hanldeChange}
                                                accept=".png, .jpg, .svg"
                                            />
                                        </Button>
                                        <Typography sx={{ fontSize: 12, fontWeight: 400, pt: 1, pb: 2 }}>
                                            Hỗ trợ: .png, .jpg, .svg
                                        </Typography>

                                        {fileUrl &&
                                            <Grid
                                                container
                                                direction='column'
                                                sx={{

                                                    justifyContent: 'center'
                                                }}
                                            >

                                                <Grid item
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <img src={fileUrl} alt='' width={300} />
                                                </Grid>

                                                <Grid item
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <AttachFileIcon
                                                        sx={{ fontSize: 20 }}
                                                    />
                                                    <Typography >
                                                        {name}
                                                    </Typography>
                                                </Grid>


                                            </Grid>

                                        }
                                    </Grid>
                                    {fileUrl !== null &&
                                        <Grid
                                            item
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                            xs={8}
                                        >

                                        </Grid>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>

                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleClose}>Thêm</Button>
                    <Button onClick={handleClose}>Đóng</Button>
                </DialogActions>

            </Dialog>
        </>
    )
}

export default DialogImage