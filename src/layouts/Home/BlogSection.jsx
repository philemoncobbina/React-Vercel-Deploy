import React, { useEffect, useState } from 'react';
import blogData from '../../data/blogData.json';
import BlogCard from './BlogCard';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="mb-2 text-lg font-semibold text-indigo-600">From Our Students</h3>
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-40 md:leading-1.2">Student Blogs</h2>
        <p className="text-base text-gray-700 dark:text-gray-400">
          Discover the latest insights, experiences, and stories from our students through their blogs.
        </p>
      </div>

      <div className="flex flex-wrap -mx-4">
        {blogs.map(blog => (
          <div key={blog.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <BlogCard {...blog} />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
          href="/blog"
        >
          <span>View all Posts</span>
        </a>
      </div>
    </div>
  );
};

export default BlogSection;
