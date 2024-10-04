// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';

// third-party
import {
  Avatar,
  Box,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { fetchBlogPost } from 'src/store/apps/blog/BlogSlice';
import { useDispatch } from 'src/store/Store';
import { BlogPostType } from 'src/types/apps/blog';
import BlankCard from '../../shared/BlankCard';
// import crown from 'src/assets/images/icon.png/crown.png';
import { IconEye } from '@tabler/icons-react';
import logoPoint from 'src/assets/images/logos/R-Point.png';
interface Btype {
  post: BlogPostType;
  index?: number;
}

const BlogCard = ({ post }: Btype) => {
  const dispatch = useDispatch();
  const { coverImg, title, view, category, author, crowns }: any = post;
  const linkTo = title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

  // skeleton
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid item xs={12} lg={4} md={4} sm={6} display="flex" alignItems="stretch">
      {isLoading ? (
        <>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height={400}
            sx={{ borderRadius: (theme) => theme.shape.borderRadius / 5 }}
          ></Skeleton>
        </>
      ) : (
        <BlankCard className="hoverCard">
          <>
            <Typography
              component={Link}
              to={`/blog/detail/${linkTo}`}
              onClick={() => dispatch(fetchBlogPost(linkTo))}
              style={{ position: 'relative' }}
            >
              {' '}
              <Stack
                direction="row"
                padding={'0px 5px'}
                top={'10px'}
                right={'20px'}
                borderRadius={'20px'}
                border={'2px solid transparent'}
                position="absolute"
                bgcolor={'white'}
              >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <Typography
                    variant="body2"
                    style={{
                      fontWeight: '900',
                      color: 'black',
                      fontSize: '12px ',
                      paddingTop: '1px',
                    }}
                  >
                    {crowns}
                  </Typography>
                  <img
                    src={logoPoint}
                    alt=""
                    width={'12px'}
                    height={'13px'}
                    style={{ marginLeft: '2px' }}
                  />
                </Box>
              </Stack>
              <Stack
                direction="row"
                padding={'5px 3px'}
                bottom={'10px'}
                right={'20px'}
                borderRadius={'20px'}
                border={'2px solid transparent'}
                position="absolute"
              >
                <Chip
                  icon={<IconEye />}
                  label={`${view} `}
                  size="small"
                  style={{ background: 'white' }}
                ></Chip>
              </Stack>
              <CardMedia component="img" height="240" image={coverImg} alt="green iguana" />
            </Typography>
            <CardContent>
              <Box my={3}>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="inherit"
                  sx={{ textDecoration: 'none' }}
                  component={Link}
                  to={`/blog/detail/${linkTo}`}
                  onClick={() => dispatch(fetchBlogPost(linkTo))}
                >
                  {title}
                </Typography>
              </Box>
              <Chip
                label={category}
                size="small"
                sx={{ marginLeft: 'auto', marginTop: 0, marginBottom: 6 }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  bottom: 0,
                  width: '90%',
                  // gap: '10px',
                  py: 2,
                }}
              >
                <Tooltip title={author?.name} placement="top">
                  <Avatar aria-label="recipe" src={author?.avatar} />
                </Tooltip>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '10px',
                    alignItems: 'center',
                    width: '40%',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="body2">Nguyễn Mạnh Cường</Typography>
                </Box>

                <Stack direction="row" ml="auto" alignItems="center" width="30%">
                  <small>01-09-2024</small>
                </Stack>
              </Box>
            </CardContent>
          </>
        </BlankCard>
      )}
    </Grid>
  );
};

export default BlogCard;
