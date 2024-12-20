"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import client from "@/lib/sanity";
import Image from "next/image";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  description: string;
  category: string;
  imageUrl: string;
}

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
] | order(publishedAt desc) [0...12] {
  _id,
  title,
  slug,
  publishedAt,
  description,
  category,
  "imageUrl": image.asset->url
}`;

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const blogPosts: Post[] = await client.fetch(POSTS_QUERY); 
        setPosts(blogPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
        Latest Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={200}
              height={200}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-purple-700">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700 mt-2 line-clamp-3">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug.current}`}
                className="mt-4 inline-block text-purple-700 hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
