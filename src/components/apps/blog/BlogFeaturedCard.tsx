// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'src/store/Store';
import {
  CardContent,
  Stack,
  Avatar,
  Typography,
  Chip,
  Grid,
  Tooltip,
  Box,
  alpha,
  styled,
  Skeleton,
} from '@mui/material';
import { IconEye } from '@tabler/icons-react';

import { fetchBlogPost } from 'src/store/apps/blog/BlogSlice';
import BlankCard from '../../shared/BlankCard';
import { BlogPostType } from 'src/types/apps/blog';

const CoverImgStyle = styled(CardContent)({
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: 1,
  width: '100%',
  height: '100%',
  color: 'white',
});
const CoverBox = styled(Box)({
  top: 0,
  content: "''",
  width: '100%',
  height: '100%',
  position: 'absolute',
});

interface Btype {
  post: BlogPostType;
  index: number;
}

const BlogFeaturedCard = ({ post, index }: Btype) => {
  const dispatch = useDispatch();
  const { coverImg, title, view, category, author }: any = post;
  const linkTo = title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
  const mainPost = index === 0;

  const CoverImgBg = styled(BlankCard)({
    p: 0,
    height: '400px',
    position: 'relative',
    background: `url(${coverImg}) no-repeat center`,
    backgroundSize: 'cover',
  });

  // skeleton
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {post ? (
        <Grid
          item
          xs={12}
          lg={mainPost ? 8 : 4}
          md={12}
          sm={12}
          display="flex"
          alignItems="stretch"
        >
          {isLoading ? (
            <>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="100%"
                height={400}
                sx={{ borderRadius: (theme) => theme.shape.borderRadius / 5 }}
              ></Skeleton>
            </>
          ) : (
            <CoverImgBg className="hoverCard">
              <>
                <Typography
                  component={Link}
                  to={`/apps/blog/detail/${linkTo}`}
                  onClick={() => dispatch(fetchBlogPost(linkTo))}
                >
                  <CoverBox
                    sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[900], 0.6) }}
                  />
                </Typography>
                <CoverImgStyle>
                  <Box
                    height={'100%'}
                    display={'flex'}
                    justifyContent="space-between"
                    flexDirection="column"
                  >
                    <Box>
                      <Stack direction="row">
                        <Chip
                          sx={{ marginLeft: 'auto', backgroundColor: 'black' }}
                          label={view}
                          size="small"
                          color="primary"
                          icon={<IconEye />} // Adding the icon here
                        />
                      </Stack>
                    </Box>
                    <Box>
                      <Box my={3}>
                        <Typography
                          gutterBottom
                          variant="h3"
                          color="inherit"
                          sx={{ textDecoration: 'none' }}
                          component={Link}
                          to={`/apps/blog/detail/${linkTo}`}
                          onClick={() => dispatch(fetchBlogPost(linkTo))}
                        >
                          {title}
                        </Typography>
                      </Box>
                      <Stack direction="row" gap={3} alignItems="center">
                        <Tooltip title={author?.name} placement="top">
                          <Avatar aria-label="recipe" src={author?.avatar}></Avatar>
                        </Tooltip>
                        <Box>
                          <Stack direction="column" gap={1} alignItems="flex-start">
                            <Stack direction="row" gap={1} alignItems="center">
                              Nguyễn Đăng Hòa
                            </Stack>
                            <Stack direction="row" alignItems="center">
                              <Chip label={category} size="small" color="primary" />
                            </Stack>
                          </Stack>
                        </Box>

                        <Stack direction="row" ml="auto" alignItems="center">
                          {/* <small>{format(new Date(createdAt), 'E, MMM d')}</small> */}
                          09-09-2024
                        </Stack>
                      </Stack>
                    </Box>
                  </Box>
                </CoverImgStyle>
              </>
            </CoverImgBg>
          )}
        </Grid>
      ) : (
        ''
      )}
    </>
  );
};

export default BlogFeaturedCard;
