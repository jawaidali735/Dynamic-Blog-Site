
import client from "@/lib/sanity";
import { type SanityDocument } from "next-sanity";
import Bloglist from "./components/Bloglist";

import Hero from "./components/Hero";


const POSTS_QUERY = `*[ 
  _type == "post" && defined(slug.current)
] | order(publishedAt desc) [0...12] {
  _id,
  title,
  slug,
  publishedAt,
  description,
  category,
  "imageUrl": image.asset->url  // Correct way to fetch image URL
}`;



const options = { next: { revalidate: 30 } };

export default async function HomePage() {

  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);


  const mappedPosts = posts.map((item) => ({
    _id: item._id,
    title: item.title,
    slug: item.slug.current,
    publishedAt: item.publishedAt,
    description: item.description || 'No description available.',
    category: item.category || 'Uncategorized',
    imageUrl: item.imageUrl || '/default-image.jpg', 
}));

  
 
  return (
    <main className="overflow-hidden">
      <Hero/>
      <Bloglist posts={mappedPosts} />
      
    </main>
  );
}
