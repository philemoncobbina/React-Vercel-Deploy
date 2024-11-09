import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../data/blogData.json';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Blog post not found</div>;
  }

  const { categories } = post;

  return (
    <div style={{ marginTop: '5rem' }} className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 !pt-0">
      <div className="mx-auto max-w-screen-md">
        <div className="flex justify-center">
          <div className="flex gap-3">
            {categories.map(category => (
              <a href={`/category/${category.toLowerCase()}`} key={category}>
                <span className={`inline-block text-xs font-medium tracking-wider uppercase mt-2 ${category === 'Design' ? 'text-blue-600' : 'text-purple-600'}`}>{category}</span>
              </a>
            ))}
          </div>
        </div>
        <h1 className="text-brand-primary title mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          {post.title}
        </h1>
        <div className="mt-3 flex justify-center space-x-3 text-gray-500">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex-shrink-0">
              <a href={`/author/${post.author.toLowerCase().replace(' ', '-')}`}>
                <img
                  alt={post.author}
                  loading="lazy"
                  decoding="async"
                  className="rounded-full object-cover authorImage"
                  sizes="40px"
                  src={post.authorImage}
                  style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
                />
              </a>
            </div>
            <div>
              <p className="text-gray-800 author dark:text-gray-400">
                <a href={`/author/${post.author.toLowerCase().replace(' ', '-')}`}>{post.author}</a>
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <time className="text-gray-500 date dark:text-gray-400" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 mt-5 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        <img
          alt="Thumbnail"
          loading="eager"
          decoding="async"
          className="object-cover image"
          sizes="100vw"
          src={post.image}
          style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
        />
      </div>
      <div style={{ width: '90%', }} className="prose mx-auto mt-10  dark:prose-invert prose-a:text-blue-600">
      <p className="mb-4">{post.blogText1}</p>
      <p>{post.blogText2}</p>
      </div>

      <div className="mb-7 mt-7 flex justify-center">
      <a className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500" href="/blog">
        ← View all posts
      </a>
      </div>

      <div style={{ width: '90%', }} className="mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
        <div className="relative mt-1 h-24 w-24 flex-shrink-0">
          
            <img
              alt="Erika Oliver"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="rounded-full object-cover"
              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
              sizes="96px"
              src={post.authorImage}
            />
          
        </div>
        <div>
          <div className="mb-3">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              About <span>{post.author}</span>
            </h3>
          </div>
          <div>
            <p>{post.authorData} </p>
          </div>
          <div className="mt-3">
            <a className="bg-brand-secondary/20 rounded-full py-2 text-sm text-blue-600 dark:text-blue-500" href="/author/erika-oliver">
              View Profile
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlogPost;


