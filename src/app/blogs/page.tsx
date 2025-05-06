import Title from '@/components/ui/Title';
import BlogCard from '@/components/blogs/BlogCard';
import { BLOGS } from '@/utils/constants';

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Title title="My Blogs" />

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
