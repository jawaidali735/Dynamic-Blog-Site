'use client';

import React, { useState } from 'react';
import Blogitem from './Blogitem';


type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  imageUrl?: string; 
  description?: string;
  category?: string;
};

interface BloglistProps {
  posts: Post[];
}

const Bloglist = ({ posts }: BloglistProps) => {
  const [menu, setMenu] = useState("All");

  return (
    <div id='blog' >
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={menu === "Technology" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={menu === "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={menu === "Lifestyle" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Lifestyle
        </button>
      </div>

      <div className="flex flex-wrap justify-around gap-1 lg:px-16  gap-y-10 mb-16 xl:mx-24">
        {posts && posts.length > 0 ? (
          posts
            .filter((item) => (menu === "All" ? true : item.category === menu))
            .map((item, index) => (
              <Blogitem
                key={index}
                slug={item.slug}
                imageUrl={item.imageUrl || '/default-image.jpg'} // Generate image URL using urlFor
                title={item.title}
                description={item.description || 'No description available.'}
                category={item.category || 'Uncategorized'}
              />
            ))
        ) : (
          <div>No posts available.</div>
        )}
      </div>
    </div>
  );
};

export default Bloglist;
