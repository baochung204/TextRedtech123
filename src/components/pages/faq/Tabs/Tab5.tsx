import { Box, Skeleton, CardMedia, Grid, IconButton, Typography, Stack, Menu, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import DataTable5 from '../DataTable/TableTab5';
import DialogImage from '../../dialog/DialogImage';
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
  };
console.log('e',selectedItemId1);

  return (
    <>
      <Box>
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
            </Grid>
          ))}
        </Grid>
      </Box>
      <DialogImage open={open} setOpen={setOpen} value={value} selectedItemId1={selectedItemId1} setSelectedItemId1={setSelectedItemId1} />
    </>
  );
};

export default Tab5;
