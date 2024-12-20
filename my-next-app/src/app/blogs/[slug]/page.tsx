import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import client from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import CommentSection from "@/app/components/CommentSection";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
const NEXT_POST_QUERY = `*[_type == "post" && publishedAt > $publishedAt] | order(publishedAt asc)[0]`;
const PREVIOUS_POST_QUERY = `*[_type == "post" && publishedAt < $publishedAt] | order(publishedAt desc)[0]`;
const RECENT_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)[0..8]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  const nextPost = await client.fetch<SanityDocument>(NEXT_POST_QUERY, {
    publishedAt: post.publishedAt,
  });
  const previousPost = await client.fetch<SanityDocument>(
    PREVIOUS_POST_QUERY,
    { publishedAt: post.publishedAt }
  );
  const recentPosts = await client.fetch<SanityDocument[]>(
    RECENT_POSTS_QUERY,
    
  );

  
    const postImageUrl = post.image
  ? urlFor(post.image)?.width(550).height(310).url() || post.image.previewImage 
  : null;

  const authImageUrl = post.author_img
    ? urlFor(post.author_img)?.width(60).height(60).url() 
    : null;

  return (
    <>
      <div className="bg-gray-100 py-10 px-5 md:px-12 lg:px-24">

        <div className="text-center my-20">
          <h1 className="text-3xl sm:text-5xl font-semibold pb-8 text-gray-800 max-w-2xl mx-auto">
            {post?.title}
          </h1>
        </div>
      </div>


      <div className="lg:grid lg:grid-cols-3 lg:gap-10 mx-5 max-w-[1200px] md:mx-auto mt-[-80px] mb-12">
        <div className="lg:col-span-2">
          {postImageUrl && (
            <Image
              src={postImageUrl}
              alt={post.title}
              className="mx-auto max-w-full h-auto border-4 border-white rounded-lg"
              width="1280"
              height="720"
            />
          )}

          <div className="space-x-4 mt-6">
            <div className="pl-4">
              {authImageUrl && (
                <Image
                  src={authImageUrl}
                  alt={post.author}
                  className="rounded-full border-2 border-white"
                  width={60}
                  height={60}
                />
              )}
            </div>
            <p className="text-lg text-gray-600">{post?.author}</p>
            <p className="text-sm text-gray-500">
              Published: {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </div>
          <div className="py-6 text-center text-gray-700">
            <div className="mt-6">
              {Array.isArray(post.body) && <PortableText value={post.body} />}
            </div>
          </div>

          
          <div className="flex justify-between mt-10">
            {previousPost && (
              <Link
                href={`/blogs/${previousPost.slug.current}`}
                className="text-sm text-blue-500 hover:underline"
              >
                ← {previousPost.title}
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/blogs/${nextPost.slug.current}`}
                className="text-sm text-blue-500 hover:underline"
              >
                {nextPost.title} →
              </Link>
            )}
          </div>

        
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <div id="disqus_thread"></div>
            
            <CommentSection/>
          </div>
        </div>


        <div className="lg:col-span-1 bg-white shadow-2xl rounded-lg p-6 space-y-6 mt-10 lg:mt-0 max-h-[500px] overflow-y-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Recent Posts
          </h2>
          <ul className="space-y-6">
            {recentPosts.map((recentPost) => (
              <li
                key={recentPost._id}
                className="flex flex-col space-y-4 p-4 border-2 border-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Link
                  href={`/blogs/${recentPost.slug.current}`}
                  className="text-lg font-semibold text-black hover:text-gray-700 transition-colors duration-300"
                >
                  {recentPost.title}
                </Link>
                <p className="text-sm text-gray-500">
                  Published: {new Date(recentPost.publishedAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
          
        </div>
        
      </div>
      
    </>
  );
}
