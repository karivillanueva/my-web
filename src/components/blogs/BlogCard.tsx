import Image from 'next/image';
import Link from 'next/link';
import Subtitle from '@/components/ui/Subtitle';
interface BlogCardProps {
  title: string;
  image: string;
  link: string;
}

const BlogCard = ({ title, image, link }: BlogCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
    >
      <Image
        src={image}
        alt="What is AI & Machine Learning"
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <Subtitle subtitle={title} />
      </div>
    </Link>
  );
};

export default BlogCard;
