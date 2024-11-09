import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const BlogCard = ({ id, image, categories, title, author, authorImage, date }) => {
  return (
    <Link to={`/blog/${id}`}  className="w-full no-underline p-2"> {/* Wrap the card with Link */}
      <div className="relative overflow-hidden rounded-lg shadow-md mb-0">
        <img className="w-full h-80 transition-transform duration-300 transform hover:scale-105 rounded-t-lg" src={image} alt={title} />
      </div>
      <div className="bg-white p-0 mt-0 rounded-b-lg">
        <div className="flex gap-3">
          {categories.map(category => (
            <a href={`/category/${category.toLowerCase()}`} key={category}>
              <span className={`inline-block text-xs font-medium tracking-wider uppercase  mt-2 ${category === 'Design' ? 'text-blue-600' : 'text-purple-600'}`}>{category}</span>
            </a>
          ))}
        </div>
        <span className="bg-gradient-to-r text-gray-800 dark:text-gray-300 from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">{title}</span>
        <div className="flex items-center mt-1 text-gray-800 dark:text-gray-300">
          <img className="rounded-full w-10 h-10 mr-3" src={authorImage} alt={author} />
          <span className="truncate text-sm mr-3">{author}</span>
          <span className="text-xs text-gray-300 mr-3 font-bold dark:text-gray-900">•</span>
          <time className="truncate text-sm" dateTime={date}>{new Date(date).toLocaleDateString()}</time>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
