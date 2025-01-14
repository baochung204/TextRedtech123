// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  Avatar,
  Box,
  CardContent,
  Chip,
  Grid,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
  alpha,
  styled,
} from '@mui/material';
import { IconEye } from '@tabler/icons-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoPoint from 'src/assets/images/logos/R-Point.png';
import { fetchBlogPost } from 'src/store/apps/blog/BlogSlice';
import { useDispatch } from 'src/store/Store';
import { BlogPostType } from 'src/types/apps/blog';
import BlankCard from '../../shared/BlankCard';

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
                  to={`/blog/detail/${linkTo}`}
                  onClick={() => dispatch(fetchBlogPost(linkTo))}
                >
                  <CoverBox
                    sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[900], 0.1) }}
                  />
                </Typography>
                <CoverImgStyle>
                  <Box
                    height={'100%'}
                    display={'flex'}
                    justifyContent="space-between"
                    flexDirection="column"
                  >
                    <Box display={'flex'} justifyContent={'end'}>
                      {' '}
                      <Stack
                        direction="row"
                        bgcolor={'rgba(255, 255, 255 )'}
                        padding={'0px 6px'}
                        borderRadius={'20px'}
                        border={'2px solid transparent'}
                        style={{ opacity: 0.9 }}
                        sx={{
                          '&:hover': {
                            borderColor: 'white', // Viền trắng khi hover
                          },
                        }}
                      >
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                          <Typography
                            variant="body2"
                            style={{
                              fontWeight: '900',
                              color: 'black',
                              fontSize: '13px ',
                              paddingTop: '1px',
                            }}
                          >
                            {/* {crowns} */} 1.024.03
                          </Typography>
                          <img
                            src={logoPoint}
                            alt=""
                            width={'20px'}
                            height={'20px'}
                            style={{ marginLeft: '2px' }}
                          />
                        </Box>
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
                          to={`/blog/detail/${linkTo}`}
                          onClick={() => dispatch(fetchBlogPost(linkTo))}
                        >
                          {title}
                        </Typography>
                      </Box>
                      <Stack direction="row" gap={3} alignItems="center" justifyContent={'end'}>
                        <Box style={{ width: '70%' }} display={'flex'} gap={'20px'}>
                          <Tooltip title={author?.name} placement="top">
                            <Avatar aria-label="recipe" src={author?.avatar}></Avatar>
                          </Tooltip>
                          <Box>
                            <Stack>
                              <Stack direction="row" gap={1} alignItems="center">
                                Nguyễn Đăng Hòa
                              </Stack>
                              <Stack direction="row" alignItems="center" marginTop={'2px'}>
                                <Chip label={category} size="small" color="primary" />
                              </Stack>
                            </Stack>
                          </Box>
                        </Box>

                        <Stack style={{ width: '40%' }}>
                          {/* <small>{format(new Date(createdAt), 'E, MMM d')}</small> */}
                          <Stack
                            direction="row"
                            gap={1}
                            alignItems="center"
                            justifyContent={'end'}
                            width={'100%'}
                          >
                            09-09-2024
                          </Stack>{' '}
                          <Stack direction="row">
                            <Chip
                              sx={{ marginLeft: 'auto', backgroundColor: 'black' }}
                              label={view}
                              size="small"
                              color="primary"
                              icon={<IconEye />} // Adding the icon here
                            />
                          </Stack>
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
