// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Grid, Pagination } from '@mui/material';
import { orderBy } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'src/store/Store';
import { fetchBlogPosts } from 'src/store/apps/blog/BlogSlice';
import { BlogPostType } from 'src/types/apps/blog';
import BlogCard from './BlogCard';
import { fetchBlogs } from 'src/store/user/chatbots/chart/blogs/blog';

const BlogListing = () => {
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
  // console.log('blog', blog);
  // console.log('blogPosts', blogPosts);

  // const featuredPost = useSelector((state) => filterFeaturedpost(state.blogReducer.blogposts));

  return (
    <Grid container spacing={3}>
      {/* {featuredPost.map((post, index) => {
        return <BlogFeaturedCard index={index} post={post} key={post.title} />;
      })} */}
      {blog?.map((post: any) => {
        return <BlogCard post={post} key={post.productId} />;
      })}
      <Grid item lg={12} sm={12} mt={3}>
        <Pagination count={10} color="primary" sx={{ display: 'flex', justifyContent: 'center' }} />
      </Grid>
    </Grid>
  );
};

export default BlogListing;
