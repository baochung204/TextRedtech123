import React from 'react';

import {
  Box,
  Theme,
  useMediaQuery,
  Typography,
  Stack,
  Avatar,
  Grid,
  Alert,
  IconButton,
  styled,
  Rating,
} from '@mui/material';

import { ChatsType } from 'src/types/apps/chat';
import { uniq, flatten } from 'lodash';

import StarIcon from '@mui/icons-material/Star';

interface chatType {
  isInSidebar?: boolean;
  chat?: ChatsType;
}

const drawerWidth = 320;

// Thêm dữ liệu mẫu cho phần đánh giá
const reviews = [
  // { id: 1, reviewer: 'Nguyễn Văn Nam', rating: 5, comment: 'Sản phẩm tuyệt vời!' },
  // { id: 2, reviewer: 'Hà Quang Dũng', rating: 4, comment: 'Tốt nhưng cần cải thiện.' },
];

const ChatInsideSidebar = ({ isInSidebar, chat }: chatType) => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const [value, setValue] = React.useState<number | null>(0);

  const totalAttachment = uniq(flatten(chat?.messages.map((item) => item.attachment))).length;
  const totalMedia =
    uniq(flatten(chat?.messages.map((item) => (item?.type === 'image' ? item.msg : null)))).length -
    1;

  const StyledStack = styled(Stack)(() => ({
    '.showOnHover': {
      display: 'none',
    },
    '&:hover .showOnHover': {
      display: 'block',
    },
  }));

  return (
    <>
      {isInSidebar ? (
        <Box
          sx={{
            width: isInSidebar === true ? drawerWidth : 0,
            flexShrink: 0,
            border: '0',
            borderLeft: '1px',
            borderStyle: 'solid',
            right: '0',
            background: (theme) => theme.palette.background.paper,
            boxShadow: lgUp ? null : (theme) => theme.shadows[8],
            position: lgUp ? 'relative' : 'absolute',
            borderColor: (theme) => theme.palette.divider,
          }}
          p={3}
        >
          {/* Phần Ảnh */}
          {/* <Typography variant="h6" mb={2}>
            Ảnh ({totalMedia})
          </Typography>
          <Grid container spacing={2}>
            {chat?.messages.map((c) => {
              return (
                <Grid item xs={12} lg={4} key={c.id}>
                  {c?.type === 'image' ? (
                    <Avatar
                      src={c?.msg}
                      alt="media"
                      variant="rounded"
                      sx={{ width: '72px', height: '72px' }}
                    />
                  ) : (
                    ''
                  )}
                </Grid>
              );
            })}
            <Grid item xs={12} lg={12}>
              {totalMedia === 0 ? <Alert severity="error">Không có tệp nào</Alert> : null}
            </Grid>
          </Grid> */}
          {/* Phần Tệp đính kèm */}
          {/* <Typography variant="h6" mt={5} mb={2}>
            Tệp đính kèm ({totalAttachment})
          </Typography>
          <Box>
            {chat?.messages.map((c, index) => {
              return (
                <Stack spacing={2.5} key={index} direction="column">
                  {c?.attachment?.map((a, index) => {
                    return (
                      <StyledStack key={index} direction="row" gap={2}>
                        <Avatar
                          variant="rounded"
                          sx={{
                            width: '48px',
                            height: '48px',
                            bgcolor: (theme) => theme.palette.grey[100],
                          }}
                        >
                          <Avatar
                            src={a.icon}
                            alt="av"
                            variant="rounded"
                            sx={{ width: '24px', height: '24px' }}
                          ></Avatar>
                        </Avatar>
                        <Box mr={'auto'}>
                          <Typography variant="subtitle2" fontWeight={600} mb={1}>
                            {a.file}
                          </Typography>
                          <Typography variant="body2">{a.fileSize}</Typography>
                        </Box>
                        <Box className="showOnHover">
                          <IconButton aria-label="delete">
                            <IconDownload stroke={1.5} size="20" />
                          </IconButton>
                        </Box>
                      </StyledStack>
                    );
                  })}
                </Stack>
              );
            })}
            {totalAttachment === 0 ? <Alert severity="error">Không có tệp đính kèm!</Alert> : null}
          </Box> */}
          {/* Phần rating start */}
          <Typography variant="h6" mt={5} mb={2}>
            Bạn đánh giá thế nào về lần hỗ trợ lần này?
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          {/* Phần Đánh giá */}
          {/* <Typography variant="h6" mt={5} mb={2}>
            Đánh giá ({reviews.length})
          </Typography>
          <Box>
            {reviews.length === 0 ? (
              <Alert severity="error">Không có đánh giá nào!</Alert>
            ) : (
              reviews.map((review) => (
                <Box key={review.id} mb={2} p={2} sx={{ backgroundColor: 'grey.100' }}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {review.reviewer}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Đánh giá: {review.rating} ⭐
                  </Typography>
                  <Typography variant="body1">{review.comment}</Typography>
                </Box>
              ))
            )}
          </Box> */}
        </Box>
      ) : null}
    </>
  );
};

export default ChatInsideSidebar;
