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
  const color = ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'default'];
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
            {tags &&
              tags.map((item: any, index: number) => (
                <Chip
                  key={index}
                  label={item}
                  color={color[index % color.length] as any}
                  style={{ margin: '0px 3px' }}
                />
              ))}
          </Box>
        </DialogContentText>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            ChatGPT là một mô hình ngôn ngữ AI do OpenAI phát triển, được huấn luyện trên lượng lớn
            dữ liệu văn bản để có thể tạo ra các câu trả lời tự động. Nó có khả năng hiểu và phản
            hồi câu hỏi, cung cấp thông tin, giải thích, và hỗ trợ trong các tác vụ khác nhau, từ
            viết nội dung, dịch ngôn ngữ, đến lập trình. ChatGPT có thể hỗ trợ người dùng trong
            nhiều lĩnh vực khác nhau, nhờ vào khả năng phân tích ngữ cảnh và đưa ra câu trả lời phù
            hợp theo yêu cầu của người dùngss
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Hủy
          </Button>
          <Button onClick={() => console.log('ádfsdg')}>Mua ngay</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ByBlog;
