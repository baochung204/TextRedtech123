// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  CardMedia,
  Chip,
} from '@mui/material';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ByBlog = ({
  thumbnailUrl,
  name,
  views,
  tags,
  point,
  author,
  avatarUrl,
  like,
  productId,
}: any) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {' '}
      <CardMedia
        onClick={handleClickOpen}
        component="img"
        height="240"
        image={thumbnailUrl}
        alt={thumbnailUrl}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {' '}
        <CardMedia
          onClick={handleClickOpen}
          component="img"
          height="340"
          image={thumbnailUrl}
          alt={thumbnailUrl}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <DialogTitle>{name}</DialogTitle>
          <DialogTitle
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            {point.toLocaleString()}{' '}
            <img
              src={logoPoint}
              alt=""
              width={'22px'}
              height={'23px'}
              style={{ marginLeft: '2px', paddingTop: '1px' }}
            />
          </DialogTitle>
        </div>{' '}
        <DialogContentText style={{ margin: '5px 20px' }}>
          {' '}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {tags[0] && (
              <Chip
                label={tags[0]}
                size="small"
                sx={{ marginLeft: 'auto', marginTop: 0, marginBottom: 0 }} // Thay marginBottom là 0
              />
            )}
          </Box>
        </DialogContentText>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Hủy
          </Button>
          <Button onClick={() => console.log('ádfsdg')}>Thanh toán</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ByBlog;
