import React, { useEffect, useState } from 'react';
import blogData from '../../data/blogData.json';
import BlogCard from '../Home/BlogCard';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [firstTwoBlogs, setFirstTwoBlogs] = useState([]);
  const [remainingBlogs, setRemainingBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
    setFirstTwoBlogs(blogData.slice(0, 2));
    setRemainingBlogs(blogData.slice(2));
  }, []);

  return (
    <div className="mt-12 mx-auto max-w-screen-lg px-4">
      <div className="flex flex-wrap -mx-2">
        {firstTwoBlogs.map(blog => (
          <div key={blog.id} className="w-full md:w-1/2 px-2 mb-4">
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap -mx-2">
        {remainingBlogs.map(blog => (
          <div key={blog.id} className="w-full md:w-1/3 px-2 mb-4">
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <a
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          href="/archive"
        >
          <span>View all Posts</span>
        </a>
      </div>
    </div>
  );
};

export default Blogs;
