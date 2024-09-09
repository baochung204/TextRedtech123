import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography, Popover, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DataTable5 from '../DataTable/TableTab5';

const Tab5 = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (id: string) => {
    // Handle edit logic here
    console.log(`Edit item with id: ${id}`);
    handleClose();
  };

  const handleDelete = (id: string) => {
    // Handle delete logic here
    console.log(`Delete item with id: ${id}`);
    handleClose();
  };

  return (
    <Box>
      <Box display="flex" justifyContent='flex-end'>
        <IconButton color='primary' aria-label='Add to Image'>
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
                  <IconButton aria-label="more" onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton onClick={() => handleEdit(items.id)}>
                            <EditIcon />
                          <ListItemText primary="Sửa" sx={{ ml: 1 }} />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton onClick={() => handleDelete(items.id)}>
                            <DeleteIcon />
                          <ListItemText primary="Xóa" sx={{ml: 1}} />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Popover>
                </Box>
              </CardContent> 
             </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Tab5;
