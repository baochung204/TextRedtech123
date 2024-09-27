import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography, Box, TextField, Grid } from '@mui/material';

interface PropsDialog {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedItemId1: React.Dispatch<React.SetStateAction<string | null>>;
  value: string;
  selectedItemId1: string | null;
  dataImages: any[];
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

const DialogImage: React.FC<PropsDialog> = ({
  value,
  open,
  setOpen,
  selectedItemId1,
  setSelectedItemId1,
  dataImages,
}) => {
  const [fileUrl, setFileUrl] = useState<string | undefined>('');
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    moTa: '',
  });

  useEffect(() => {
    if (selectedItemId1) {
      const item = dataImages.find((item) => item.id === selectedItemId1);
      if (item) {
        setFileUrl(item.imageURL);
        setFormData({
          name: item.name,
          title: item.title,
          moTa: item.description,
        });
      }
    } else {
      setFileUrl('');
      setFormData({
        name: '',
        title: '',
        moTa: '',
      });
    }
  }, [selectedItemId1, dataImages]);

  const handleClose = () => {
    setOpen(false);
    setSelectedItemId1(null);
  };

  return (
    <>
      <Dialog fullWidth={true} maxWidth="sm" open={value === '5' && open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>
          <Typography fontWeight={600} variant="h3">
            Thêm Ảnh
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid container direction="column">
              {selectedItemId1 === null && (
                <Grid item sm={12}>
                  <Grid container direction="column" sx={{ justifyContent: 'center' }} sm={12}>
                    <Grid
                      item
                      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      sm={12}
                    >
                      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Tải ảnh lên
                        <VisuallyHiddenInput type="file" accept=".png, .jpg, .svg" />
                      </Button>
                    </Grid>
                    <Grid
                      item
                      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      sm={12}
                    >
                      <Typography sx={{ fontSize: 12, fontWeight: 400, pt: 1, pb: 2 }}>
                        Hỗ trợ: .png, .jpg, .svg
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              )}
              {fileUrl && (
                <Grid item sm={12}>
                  <Box component="img" src={fileUrl} alt="Preview" width={400}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative',
                      margin: 'auto',
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Tên ảnh"
                    variant="outlined"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Tiêu đề"
                    variant="outlined"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Mô tả"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.moTa}
                    onChange={(e) => setFormData({ ...formData, moTa: e.target.value })}
                    sx={{ mt: 2, px: 0 }}
                  />
                </Grid>
              )}
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={() => { }}>Lưu</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogImage;
