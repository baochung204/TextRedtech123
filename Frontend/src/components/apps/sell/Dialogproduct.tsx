import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"


interface PropsDialog {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Dialogproduct = ({ open, setOpen }: PropsDialog) => {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth='md'
        >
            <DialogTitle
                sx={{
                    textAlign: 'center'
                }}
            >
                <Typography variant="h4">
                    Thêm Sản Phẩm
                </Typography>
            </DialogTitle>
            <DialogContent>

            </DialogContent>
            <DialogActions>
                <Button
                    variant='contained'
                // onClick={handleSubmit}
                >
                    Thêm
                </Button>
                <Button
                    onClick={() => setOpen(false)}
                >
                    Đóng
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Dialogproduct
