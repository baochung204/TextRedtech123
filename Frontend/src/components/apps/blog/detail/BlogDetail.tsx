/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  Avatar,
  Box,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchBlogPost } from 'src/store/apps/blog/BlogSlice';
import { AppState, useDispatch, useSelector } from 'src/store/Store';
import type { BlogPostType } from 'src/types/apps/blog';
import BlankCard from '../../../shared/BlankCard';
import reaction from 'src/assets/Adminphoto/luot timm.png';
import like from 'src/assets/ICON/like.png';
const BlogDetail = () => {
  const dispatch = useDispatch();
  const title = useLocation();
  const getTitle: any = title.pathname.split('/').pop();

  useEffect(() => {
    dispatch(fetchBlogPost(getTitle));
  }, [dispatch]);

  // Lấy bài viết
  const post: BlogPostType | any = useSelector((state: AppState) => state.blogReducer.selectedPost);

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
                label="2,203 lượt xem"
                size="small"
              ></Chip>
            </Stack>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Chip label={post?.author.name} size="small" sx={{ marginTop: 2 }} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ marginRight: '5px' }}>159</Typography>
                <Box sx={{ marginTop: '3px' }}>
                  <img src={like} width={15} height={15} />
                </Box>
              </Box>
            </Box>
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
