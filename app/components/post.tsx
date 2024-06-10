import React from 'react';
import Link from 'next/link';
import { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-4">{post.body.substring(0, 100)}...</p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <span className="mr-2">{post.userId}</span>
          <span className="mr-2">•</span>
          <span>{post.views} views</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          {post.tags.map((tag, index) => (
            <span key={index} className="mr-2 bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
              #{tag}
            </span>
          ))}
        </div>
        <Link href={`posts/${post.id}`}>
          <div className="text-blue-500 hover:underline font-semibold">Read More</div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
