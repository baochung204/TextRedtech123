// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Grid, Pagination, Tab } from '@mui/material';
import { orderBy } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'src/store/Store';
import { fetchBlogPosts } from 'src/store/apps/blog/BlogSlice';
import { BlogPostType } from 'src/types/apps/blog';
import BlogCard from './BlogCard';

import { fetchBlogs } from 'src/store/user/blogs/blog';
import { TabContext, TabList, TabPanel } from '@mui/lab';



const BlogListing = () => {
  const [value, setValue] = React.useState('1');
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const filterBlogs = (posts: BlogPostType[], sortBy: string, _cSearch: string) => {
    // SORT BY

    if (sortBy === 'newest') {
      posts = orderBy(posts, ['createdAt'], ['desc']);
    }
    if (sortBy === 'oldest') {
      posts = orderBy(posts, ['createdAt'], ['asc']);
    }
    if (sortBy === 'popular') {
      posts = orderBy(posts, ['view'], ['desc']);
    }
    if (posts) {
      return (posts = posts.filter((t) => t.featured === false));
    }

    return posts;
  };

  // const filterFeaturedpost = (posts: BlogPostType[]) => {
  //   return (posts = posts.filter((t) => t.featured));
  // };

  // const blogPosts = useSelector((state) =>
  //   filterBlogs(
  //     state.blogReducer.blogposts,
  //     state.blogReducer.sortBy,
  //     state.blogReducer.blogSearch,
  //   ),
  // );
  const blogs = useSelector((state) => state);
  // console.log('blogs1', blogs);
  const [datax, setdatax] = useState<any>([]);
  // console.log('blogs', blogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  useEffect(() => {
    if (datax !== blogs.blogs) {
      setdatax(blogs.blogs);
    }
  }, [datax, blogs]);
  // console.log('blogs', datax.data);
  const blog = datax?.data?.content;

  console.log('blogPosts', blog);

  // const featuredPost = useSelector((state) => filterFeaturedpost(state.blogReducer.blogposts));

  return (
    <Grid spacing={3}>
      {/* {featuredPost.map((post, index) => {
        return <BlogFeaturedCard index={index} post={post} key={post.title} />;
      })} */}
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 1,
            overflowX: 'auto',
            width: '100%',
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Chưa mua" value="1" />
            <Tab label="Đã mua" value="2" />
            <Tab label="Miễn phí" value="3" />
          </TabList>
          {/* {searchSection} */}
        </Box>
        <TabPanel value="1" sx={{ paddingX: 0 }}>
          <Grid container spacing={3}>
            {blog?.map((post: any) => {
              return <BlogCard post={post} key={post.productId} />;
            })}
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          {' '}
          <Grid container spacing={3}>
            {blog?.map((post: any) => {
              return <BlogCard post={post} key={post.productId} />;
            })}
          </Grid>
        </TabPanel>
        <TabPanel value="3">
          {' '}
          <Grid container spacing={3}>
            {blog?.map((post: any) => {
              return <BlogCard post={post} key={post.productId} />;
            })}
          </Grid>
        </TabPanel>
      </TabContext>
      <Grid item lg={12} sm={12} mt={3}>
        <Pagination count={10} color="primary" sx={{ display: 'flex', justifyContent: 'center' }} />
      </Grid>
    </Grid>
  );
};

export default BlogListing;
