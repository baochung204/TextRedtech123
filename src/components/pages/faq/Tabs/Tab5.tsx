<<<<<<< HEAD
import { Box, Skeleton, CardMedia, Grid, IconButton, Typography, Stack, Menu, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
=======
import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
>>>>>>> main
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DataTable5 from '../DataTable/TableTab5';
import DialogImage from '../../dialog/DialogImage';
<<<<<<< HEAD
import BlankCard from 'src/components/shared/BlankCard';
import { format } from 'date-fns';
import { IconDotsVertical } from '@tabler/icons-react';

interface PropsTab5 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tab5: React.FC<PropsTab5> = ({ value, open, setOpen }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedItemId, setSelectedItemId] = useState<null | string>(null);
  const [selectedItemId1, setSelectedItemId1] = useState<null | string>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedItemId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedItemId(null);
  };

  const handleEdit = (id: string) => {
    console.log(`Chỉnh sửa item với id: ${id}`);
    setSelectedItemId1(id)
    setOpen(true)
    handleClose();
  };

  const handleDelete = (id: string) => {
    console.log(`Xóa item với id: ${id}`);
    handleClose();
=======

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
>>>>>>> main
  };
console.log('e',selectedItemId1);

  const [open, setOpen] = useState<boolean>(false);


  return (
    <>
      <Box>
<<<<<<< HEAD
        <Grid container spacing={2}>
          {DataTable5.map((items) => (
            <Grid item xs={12} lg={4} key={items.id}>
              <BlankCard className="hoverCard">
                {isLoading ? (
                  <>
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      width="100%"
                      height={220}
                    ></Skeleton>
                  </>
                ) : (
                  <CardMedia component={'img'} height="220" alt="Remy Sharp" src={items.images} />
                )}
                <Box p={3}>
                  <Stack direction="row" gap={1}>
                    <Box>
                      <Typography variant="h6">{items.imgName}</Typography>
                      <Typography variant="caption">
                        {format(new Date(items.createDate), 'E, MMM d, yyyy')}
                      </Typography>
                    </Box>
                    <Box ml={'auto'}>
                      <IconButton
                        onClick={(event) => handleClick(event, items.id)}
                      >
                        <IconDotsVertical size="16" />
                      </IconButton>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={selectedItemId === items.id}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <MenuItem onClick={() => handleEdit(items.id)}>Chỉnh sửa</MenuItem>
                        <MenuItem onClick={() => handleDelete(items.id)}>Xóa</MenuItem>
                      </Menu>
                    </Box>
                  </Stack>
                </Box>
              </BlankCard>
=======
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
>>>>>>> main
            </Grid>
          ))}
        </Grid>
      </Box>
<<<<<<< HEAD
      <DialogImage open={open} setOpen={setOpen} value={value} selectedItemId1={selectedItemId1} setSelectedItemId1={setSelectedItemId1} />
=======
      <DialogImage open={open} setOpen={setOpen} />
>>>>>>> main
    </>
  );
};

export default Tab5;
