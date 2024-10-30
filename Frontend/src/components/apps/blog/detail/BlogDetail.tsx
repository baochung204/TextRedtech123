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
import { useLocation, useParams } from 'react-router-dom';
import like from 'src/assets/ICON/like.png';

import { AppState, useDispatch, useSelector } from 'src/store/Store';
import { fetchBlogPost } from 'src/store/user/chatbots/chart/blogs/blog';
import type { BlogPostType } from 'src/types/apps/blog';
const BlogDetail = () => {
  const dispatch = useDispatch();
  const title = useLocation();
  const getTitle: any = title.pathname.split('/').pop();

  useEffect(() => {
    dispatch(fetchBlogPost(getTitle));
  }, [dispatch]);

  const { data, loading, error } = useSelector((state) => state?.blogs);
  const color = ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'default'];
  // Lấy bài viết
  const post: BlogPostType | any = useSelector((state: AppState) => state.blogReducer.selectedPost);
  // console.log('post', post);
  // skeleton
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();
  const [datax, setdatax] = React.useState<any>([]);
  useEffect(() => {
    dispatch(fetchBlogPost(id as string));
  }, [dispatch, id]);
  useEffect(() => {
    if (datax !== data) {
      setdatax(data);
      setLoading(false);
    }
  }, [datax, data]);

  const detail = datax?.result?.[0]?.result;

  // const createdAt = new Date(detail?.createdAt ?? '').toISOString().split('T')[0];
  // const date = createdAt?.split('-')?.reverse()?.join('-');
  // console.log('detail', createdAt);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box>
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
          <CardMedia
            component="img"
            height="440"
            image={detail?.thumail_url ?? ''}
            alt="green iguana"
          />
        )}
        <CardContent>
          <Stack direction="row" sx={{ marginTop: '-45px' }}>
            <Tooltip title={post ? post?.author.name : ''} placement="top">
              <Avatar aria-label="recipe" src={detail?.image_Url ?? ''}></Avatar>
            </Tooltip>
            <Chip
              sx={{ marginLeft: 'auto', marginTop: '-21px', backgroundColor: 'white' }}
              label={`${(detail?.views ?? 0).toLocaleString('vi-VN')} lượt xem`}
              size="small"
            ></Chip>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Chip label={detail?.author ?? 0} size="small" sx={{ marginTop: 2 }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ marginRight: '5px' }}>
                {(detail?.likes ?? 0).toLocaleString('vi-VN')}
              </Typography>
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
              {detail?.name ?? ''}
            </Typography>
          </Box>
          <Stack direction="row" gap={3} alignItems="center">
            <Stack direction="row" gap={1} alignItems="center" mx={'20px'}>
              {detail?.tags &&
                detail?.tags?.map((item: any) => <Chip label={item} color={color as any} />)}
              {/* <Chip label="Ứng Dụng Chat GPT" color="warning" />
              <Chip
                label="Giao Tiếp AI"
                color="warning"
                // onDelete={handleDelete}
              />
              <Chip label="Trợ Lý Ảo" color="error" /> */}
            </Stack>

            <Stack direction="row" ml="auto" alignItems="center">
              <small>{detail?.createdAt} </small>
            </Stack>
          </Stack>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography variant="h2">Chatbot: Công Cụ Đột Phá Trong Thời Đại Số</Typography>
          <p>{detail?.content}</p>
          {/* <p>
            Tương lai của Chatbot Với sự phát triển không ngừng của công nghệ AI, chatbot ngày càng
            trở nên thông minh hơn. Trong tương lai, chatbot sẽ có khả năng hiểu và phản hồi như con
            người, đồng thời được tích hợp vào nhiều nền tảng và ứng dụng hơn. Điều này sẽ giúp
            doanh nghiệp tối ưu hóa quy trình vận hành, tăng cường tương tác khách hàng và tạo ra
            nhiều giá trị hơn.
          </p>
          <Typography fontWeight={600}>Trợ lý ảo Redtech</Typography>
          <Typography fontStyle="italic">Trợ lý ảo Redtech</Typography> */}
        </CardContent>
      </>
    </Box>
  );
};

export default BlogDetail;
