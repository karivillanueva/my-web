import BlogCard from '@/components/blogs/BlogCard';

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>My Blogs</h1>

      <BlogCard
        title="What is AI & Machine Learning: How it works & more (2024)"
        image="/images/ai-post.png"
        link="https://loopstudio.dev/what-is-ai-and-machine-learning/"
      />
    </div>
  );
};

export default Blogs;
