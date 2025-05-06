import BlogCard from '@/components/blogs/BlogCard';
import { BLOGS } from '@/utils/constants';

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>My Blogs</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {BLOGS.map((blog) => (
          <BlogCard
            key={blog.title}
            title={blog.title}
            image={blog.image}
            link={blog.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
