import Image from 'next/image';
import Link from 'next/link';





interface BlogitemProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  slug: { current: string };
}
const Blogitem = ({ title, description, category, imageUrl, slug }: BlogitemProps) => {
  return (
    <div className="relative z-0 max-w-[330px] sm:max-w-[270px] bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">

      <Link href={slug ? `/blogs/${slug}` : '#'}>
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={400}
          className="w-full h-[200px] object-cover transition-transform transform hover:scale-105"
        />
      </Link>

     
      <div className="p-4">
        <p className="text-purple-500 text-xs font-medium uppercase tracking-wide">
          {category}
        </p>
        <h5 className="mt-2 text-lg font-semibold text-gray-800">{title}</h5>
        <p className="mt-1 text-sm text-gray-600 line-clamp-3">{description}</p>
        <Link
          href={slug ? `/blogs/${slug}` : '#'}
          className="mt-4 inline-flex items-center text-purple-600 font-medium hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default Blogitem;
