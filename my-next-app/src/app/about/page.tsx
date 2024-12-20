"use client";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-700">About Us</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Discover our story, values, and the mission behind our blogging platform.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why We Started This Blog</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Our blog is a space to share ideas, inspire creativity, and provide meaningful content.
            Whether you&apos;re here to learn, explore, or connect, we aim to bring value to every
            reader. From personal experiences to expert advice, our mission is to deliver engaging
            stories and insightful posts across diverse topics.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            We started with a simple idea: to create a platform where people can find quality
            content and connect through shared interests. Join us in this journey to make the
            digital world a more informed and creative space!
          </p>
        </div>
        <div className="relative">
          <Image
            src="/about.jpg"
            alt="Blogging Journey"
            width={500}
            height={500}
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Our Mission and Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-purple-700 mb-2">Creativity</h3>
            <p className="text-gray-600 text-sm">
              We embrace creativity in every blog post to provide fresh and inspiring content.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-purple-700 mb-2">Authenticity</h3>
            <p className="text-gray-600 text-sm">
              Genuine stories and original content are at the heart of our blog.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-purple-700 mb-2">Community</h3>
            <p className="text-gray-600 text-sm">
              Building a platform where readers and writers connect meaningfully.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-bold text-purple-700 mb-2">Quality</h3>
            <p className="text-gray-600 text-sm">
              We prioritize delivering high-quality, well-researched, and engaging posts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
