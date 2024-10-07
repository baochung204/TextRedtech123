import { Avatar, Button, Dialog, DialogActions, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material";

interface PropsX {
    id: string;
    name: string;
    level: string;
    badgeUrl: string;
    nhom: string;
    tomtat: string
}

interface PropsDialog {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: PropsX[];
}

const DialogFunction = ({ open, setOpen, data }: PropsDialog) => {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth="md"
        >
            <DialogTitle textAlign={'center'}>
                <Typography variant="h4">Chi tiết Function</Typography>
            </DialogTitle>

            <DialogContentText>
                {data.map((item, index) => (
                    <Grid container key={index} spacing={2} sx={{ paddingTop: 5 }}>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar src={item.badgeUrl} alt={item.badgeUrl} variant="rounded" sx={{ width: 100, height: 100 }} />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <span style={{ fontWeight: 600 }}>ID:</span> {item.id}
                                </Grid>
                                <Grid item xs={12}>
                                    <span style={{ fontWeight: 600 }}>Tên chiến lược:</span> {item.name}
                                </Grid>
                                <Grid item xs={12}>
                                    <span style={{ fontWeight: 600 }}>Nhóm:</span> {item.nhom}
                                </Grid>
                                <Grid item xs={12}>
                                    <span style={{ fontWeight: 600 }}>Level:</span> {item.level}
                                </Grid>
                                <Grid item xs={12}>
                                    <span style={{ fontWeight: 600 }}>Tóm tắt:</span> {item.tomtat}
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

export default DialogFunction;
