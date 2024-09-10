import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DataTable5 from '../DataTable/TableTab5';
import DialogImage from '../../dialog/DialogImage';

const Tab5 = () => {
  const [anchorEl, setAnchorEl] = React.useState<{ [key: string]: HTMLElement | null }>({});

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl((prev) => ({ ...prev, [id]: event.currentTarget }));
  };

  const handleClose = (id: string) => {
    setAnchorEl((prev) => ({ ...prev, [id]: null }));
  };

  const handleEdit = (id: string) => {
    console.log(`Edit item with id: ${id}`);
    handleClose(id);
  };

  const handleDelete = (id: string) => {
    console.log(`Delete item with id: ${id}`);
    handleClose(id);
  };

  const [open, setOpen] = useState<boolean>(false);


  return (
    <>
      <Box>
        <Box display="flex" justifyContent='flex-end'>
          <IconButton
            color='primary'
            aria-label='Add to Image'
            onClick={() => setOpen(true)}
          >
            <AddCircleIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
        <Grid container spacing={2}>
          {DataTable5.map((items) => (
            <Grid item xs={12} sm={6} md={4} key={items.id}>
              <Card sx={{ minWidth: 345 }}>
                <CardMedia
                  component="img"
                  height={194}
                  sx={{ px: 3 }}
                  image={items.images}
                  alt={items.images}
                />
                <CardContent>
                  <Box display='flex' justifyContent='space-between'>
                    <Box>
                      <Typography variant='subtitle2' fontSize={15} fontWeight={500}>
                        {items.imgName}
                      </Typography>
                      <Typography variant='subtitle2' fontSize={11} fontWeight={300}>
                        {items.createDate}
                      </Typography>
                    </Box>
                    <IconButton aria-label="more" onClick={(event) => handleClick(event, items.id)}>
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      open={Boolean(anchorEl[items.id])}
                      anchorEl={anchorEl[items.id]}
                      onClose={() => handleClose(items.id)}

                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                    >
                      <MenuItem onClick={() => handleEdit(items.id)}>
                        <EditIcon sx={{ mr: 1 }} /> Sửa
                      </MenuItem>
                      <MenuItem onClick={() => handleDelete(items.id)}>
                        <DeleteIcon sx={{ mr: 1 }} /> Xóa
                      </MenuItem>
                    </Menu>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <DialogImage open={open} setOpen={setOpen} />
    </>
  );
};

export default Tab5;
