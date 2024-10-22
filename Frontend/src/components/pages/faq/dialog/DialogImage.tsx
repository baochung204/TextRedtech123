import { Avatar, Box, Grid, IconButton, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';

interface PropsDialog {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedItemId1: React.Dispatch<React.SetStateAction<string | null>>;
  value: string;
  selectedItemId1: string | null;
  dataImages: any[];
  checkOption: string | null;
  setCheckOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const DialogImage: React.FC<PropsDialog> = ({
  value,
  open,
  setOpen,
  selectedItemId1,
  setSelectedItemId1,
  dataImages,
  checkOption,
}) => {
  const [dataImage, setDataImage] = useState<
    {
      id?: string;
      dateTime?: string;
      imageURL: string;
      name: string;
      title: string;
      description?: string;
    }[]
  >([]);

  useEffect(() => {
    if (selectedItemId1) {
      const item = dataImages.find((item) => item.id === selectedItemId1);
      console.log(item);

      if (item) {
        setDataImage([
          {
            id: item.id,
            dateTime: item.dateTime,
            imageURL: item.imageURL,
            name: item.name,
            title: item.title,
            description: item.description,
          },
        ]);
      }
    } else {
      setDataImage([]);
    }
  }, [selectedItemId1, dataImages]);

  const handleClose = () => {
    setOpen(false);
    setSelectedItemId1(null);
  };

  const handleSave = () => {
    console.log(dataImage);
    setDataImage([]);
    setOpen(false);
  };

  return (
    <Dialog fullWidth={true} maxWidth="md" open={value === '5' && open} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: 'center' }}>
        <Typography fontWeight={600} variant="h3">
          Chi tiết ảnh
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Scrollbar_y sx={{ maxHeight: '530px', paddingX: 5 }}>
          <DialogContentText>
            {checkOption === 'view' ? (
              <Grid container spacing={2}>
                {dataImage.map((item, index) => (
                  <>
                    <Grid
                      item
                      xs={12}
                      lg={4}
                      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      <Avatar
                        sx={{ width: '190px', height: '190px' }}
                        src={item.imageURL}
                        alt={item.imageURL}
                      />
                    </Grid>

                    <Grid item xs={12} lg={3} md={6} mt={2}>
                      {/** Grid trái chứa nhãn các trường */}
                      <Box display="flex" flexDirection="column" justifyContent="space-between">
                        <Box display="flex" alignItems="center" minHeight="40px">
                          <Box fontWeight={600}>ID :</Box>
                        </Box>
                        <Box display="flex" alignItems="center" minHeight="40px">
                          <Box fontWeight={600}>Ngày tạo :</Box>
                        </Box>
                        <Box display="flex" alignItems="center" minHeight="40px">
                          <Box fontWeight={600}>Tên ảnh :</Box>
                        </Box>
                        <Box display="flex" alignItems="center" minHeight="40px">
                          <Box fontWeight={600}>Tiêu đề :</Box>
                        </Box>

                        <Box display="flex" alignItems="center" minHeight="40px">
                          <Box fontWeight={600}>Mô tả :</Box>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} lg={5} md={6} mt={2} key={index}>
                      <Box display="flex" flexDirection="column" justifyContent="space-between">
                        <Box display="flex" alignItems="center" height="40px">
                          <Box>{item.id}</Box>
                        </Box>
                        <Box display="flex" alignItems="center" height="40px">
                          <Box>{item.dateTime}</Box>
                        </Box>
                        <Box display="flex" alignItems="center" minHeight="40px">
                          <Box>{item.name}</Box>
                        </Box>
                        <Box display="flex" alignItems="center" minHeight="40px">
                          <Box>{item.title}</Box>
                        </Box>
                        <Box display="flex" alignItems="center" minHeight="40px">
                          <Box>{item.description}</Box>
                        </Box>
                      </Box>
                    </Grid>
                  </>
                ))}
              </Grid>
            ) : checkOption === 'add' ? (
              <Grid container direction="column">
                {selectedItemId1 === null && (
                  <Grid item sm={12}>
                    <Grid container direction="column" sx={{ justifyContent: 'center' }} sm={12}>
                      <Grid
                        item
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        sm={12}
                      >
                        <Box sx={{ backgroundColor: 'transparent' }}>
                          <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 3 }}>
                            <Box>
                              <IconButton aria-label="upload">
                                <Button variant="contained" component="label">
                                  <span style={{ display: 'flex', alignItems: 'center' }}>
                                    + Tải ảnh lên
                                  </span>
                                  <input
                                    type="file"
                                    hidden
                                    multiple
                                    accept="image/*"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                      if (e.target.files) {
                                        const initialData = Array.from(e.target.files).map(
                                          (file) => ({
                                            imageURL: URL.createObjectURL(file),
                                            name: file.name,
                                            title: '',
                                            description: '',
                                          }),
                                        );
                                        setDataImage(initialData);
                                      }
                                    }}
                                  />
                                </Button>
                              </IconButton>
                              <Typography sx={{ fontSize: 12, fontWeight: 400, pt: 1, pb: 2 }}>
                                Hỗ trợ: .png, .jpg, .svg
                              </Typography>
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid container spacing={2}>
                              {dataImage.map((item, index) => (
                                <Grid item xs={12} key={index}>
                                  <Grid container spacing={2}>
                                    <Grid
                                      item
                                      xs={1.5}
                                      sx={{ display: 'flex', alignItems: 'center' }}
                                    >
                                      <Avatar
                                        src={item.imageURL}
                                        alt={item.imageURL}
                                        variant="rounded"
                                        sx={{ width: 56, height: 56 }}
                                      />
                                    </Grid>
                                    <Grid item xs={3.3} sx={{ marginBottom: '15px' }}>
                                      <TextField
                                        fullWidth
                                        label="Tên ảnh"
                                        variant="outlined"
                                        value={item.name}
                                        onChange={(e) => {
                                          const newData = [...dataImage];
                                          newData[index].name = e.target.value;
                                          setDataImage(newData);
                                        }}
                                        sx={{ mt: 2 }}
                                      />
                                    </Grid>
                                    <Grid item xs={3.3}>
                                      <TextField
                                        fullWidth
                                        label="Tiêu đề"
                                        variant="outlined"
                                        value={item.title}
                                        onChange={(e) => {
                                          const newData = [...dataImage];
                                          newData[index].title = e.target.value;
                                          setDataImage(newData);
                                        }}
                                        sx={{ mt: 2 }}
                                      />
                                    </Grid>
                                    <Grid item xs={3.4}>
                                      <TextField
                                        fullWidth
                                        label="Mô tả"
                                        variant="outlined"
                                        multiline
                                        value={item.description}
                                        onChange={(e) => {
                                          const newData = [...dataImage];
                                          newData[index].description = e.target.value;
                                          setDataImage(newData);
                                        }}
                                        sx={{
                                          mt: 2,
                                          '& .MuiInputBase-input': {
                                            padding: 0,
                                          },
                                          '& .MuiInputBase-root': {
                                            padding: '12px 14px',
                                          },
                                        }}
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            ) : (
              <>suawr</>
            )}
          </DialogContentText>
        </Scrollbar_y>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button onClick={handleSave}>Lưu</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogImage;
