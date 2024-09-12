/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';
import User1 from 'src/assets/images/profile/user-1.jpg';
import User2 from 'src/assets/images/profile/user-2.jpg';
import User3 from 'src/assets/images/profile/user-5.jpg';
import { fetchBlogPost } from 'src/store/apps/blog/BlogSlice';
import { useLocation } from 'react-router-dom';
import {
  CardContent,
  Stack,
  Avatar,
  Typography,
  CardMedia,
  Chip,
  Tooltip,
  Box,
  Divider,
  TextField,
  Button,
  Skeleton,
} from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import { IconEye, IconMessage2, IconPoint, IconQuote } from '@tabler/icons-react';
import { format } from 'date-fns';
import BlogComment from './BlogComment';
import { uniqueId } from 'lodash';
import { addComment } from 'src/store/apps/blog/BlogSlice';
import BlankCard from '../../../shared/BlankCard';
import { AppState, useDispatch, useSelector } from 'src/store/Store';
import type { BlogPostType, BlogType } from 'src/types/apps/blog';
import { IconMoodHappy } from '@tabler/icons-react';

const BlogDetail = () => {
  const dispatch = useDispatch();
  const title = useLocation();
  const getTitle: any = title.pathname.split('/').pop();
  const [replyTxt, setReplyTxt] = React.useState('');

  useEffect(() => {
    dispatch(fetchBlogPost(getTitle));
  }, [dispatch]);

  // Lấy bài viết
  const post: BlogPostType | any = useSelector((state: AppState) => state.blogReducer.selectedPost);
  const BCrumb = [
    {
      to: '/',
      title: 'Trang chủ',
    },
    {
      to: '/apps/blog/posts',
      title: 'Blog',
    },
    {
      title: 'Bài viết',
    },
  ];

  const onSubmit = async (id: number, reply: string) => {
    const replyId: string = uniqueId('#comm_');
    const newReply = {
      id: replyId,
      profile: {
        id: uniqueId('#REPLY_'),
        avatar: post?.author.avatar,
        name: post?.author.name,
        time: 'now',
      },
      comment: reply,
      replies: [],
    };
    dispatch(addComment(id, newReply));
    dispatch(fetchBlogPost(getTitle));
    setReplyTxt('');
  };

  // skeleton
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      {/* <Breadcrumb title="Chi tiết Blog" items={BCrumb} /> */}
      <BlankCard>
        <>
          {isLoading ? (
            <>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width="100%"
                height={440}
                sx={{ borderRadius: (theme) => theme.shape.borderRadius / 5 }}
              ></Skeleton>
            </>
          ) : (
            <CardMedia component="img" height="440" image={post?.coverImg} alt="green iguana" />
          )}
          <CardContent>
            <Stack direction="row" sx={{ marginTop: '-45px' }}>
              <Tooltip title={post ? post?.author.name : ''} placement="top">
                <Avatar aria-label="recipe" src={post?.author.avatar}></Avatar>
              </Tooltip>
              <Chip
                sx={{ marginLeft: 'auto', marginTop: '-21px', backgroundColor: 'white' }}
                label="2,203 Lượt xem"
                size="small"
              ></Chip>
            </Stack>
            <Chip label={post?.author.name} size="small" sx={{ marginTop: 2 }}></Chip>
            <Box my={3}>
              <Typography
                gutterBottom
                variant="h1"
                fontWeight={600}
                color="inherit"
                sx={{ textDecoration: 'none' }}
              >
                Khám Phá Tiềm Năng Của ChatGPT Trong Cuộc Sống Và Công Việc
              </Typography>
            </Box>
            <Stack direction="row" gap={3} alignItems="center">
              <Stack direction="row" gap={1} alignItems="center" mx={'20px'}>
                <Chip
                  label="Trí Tuệ Nhân Tạo"
                  color="success"
                  // onDelete={handleDelete}
                />
                <Chip label="Ứng Dụng Chat GPT" color="warning" />
                <Chip
                  label="Giao Tiếp AI"
                  color="warning"
                  // onDelete={handleDelete}
                />
                <Chip label="Trợ Lý Ảo" color="error" />
              </Stack>

              <Stack direction="row" ml="auto" alignItems="center">
                <small>T4,06/09/2024 </small>
              </Stack>
            </Stack>
          </CardContent>
          <Divider />
          <CardContent>
            <Typography variant="h2">Chatbot: Công Cụ Đột Phá Trong Thời Đại Số</Typography>
            <p>
              Chatbot là chương trình máy tính được thiết kế để giao tiếp với con người qua tin nhắn
              hoặc giọng nói. Chúng sử dụng trí tuệ nhân tạo (AI) để hiểu ngôn ngữ tự nhiên và đưa
              ra phản hồi chính xác theo ngữ cảnh. Từ việc trả lời câu hỏi đơn giản đến hỗ trợ thực
              hiện các giao dịch, chatbot có thể hoạt động 24/7 mà không cần nghỉ.
            </p>
            <p>
              Tương lai của Chatbot Với sự phát triển không ngừng của công nghệ AI, chatbot ngày
              càng trở nên thông minh hơn. Trong tương lai, chatbot sẽ có khả năng hiểu và phản hồi
              như con người, đồng thời được tích hợp vào nhiều nền tảng và ứng dụng hơn. Điều này sẽ
              giúp doanh nghiệp tối ưu hóa quy trình vận hành, tăng cường tương tác khách hàng và
              tạo ra nhiều giá trị hơn.
            </p>
            <Typography fontWeight={600}>Trợ lý ảo Redtech</Typography>
            <Typography fontStyle="italic">Trợ lý ảo Redtech</Typography>
          </CardContent>
        </>
      </BlankCard>
    </Box>
  );
};

export default BlogDetail;
