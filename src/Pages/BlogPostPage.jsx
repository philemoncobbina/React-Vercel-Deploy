import React from 'react'
import Navbar from '@/Templates/Navbar';
import Footer from '@/Templates/Footer';
import BlogPost from '@/layouts/Blog/BlogPost';

const BlogPostPage = () => {
  return (
    <div>
      <Navbar />
      <BlogPost />
      <Footer />
    </div>
  )
}

export default BlogPostPage
