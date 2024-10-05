import { Avatar, Button, Dialog, DialogActions, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";

interface PropsX {
    content: string;
    badgeUrl: string;
    productId: string;
    level: string;
    tomtat: string;
}

interface PropsDialog {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: PropsX[];
}

const DialogStragety = ({ open, setOpen, data }: PropsDialog) => {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth="md"
        >
            <DialogTitle>
                <Typography variant="h4">Chi tiết chiến lược</Typography>
            </DialogTitle>

            <DialogContentText>
                {data.map((item, index) => (
                    <Grid container key={index} spacing={2}>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar src={item.badgeUrl} alt={item.badgeUrl} variant="rounded" sx={{ width: 100, height: 100 }} />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    Tên chiến lược: {item.content}
                                </Grid>
                                <Grid item xs={12}>
                                    Level: {item.level}
                                </Grid>
                                <Grid item xs={12}>
                                    ID: {item.productId}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </DialogContentText>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>
                    Đóng
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogStragety;
