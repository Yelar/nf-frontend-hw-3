'use client'
import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import { fetchPosts } from '../../services/api';
import axios from "axios"
import { Post as PostType} from '../../types';
interface PostPageProps {
  slug: {slug: number}
}
interface Postt {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  date: string;
}


export default function Fetch() {
  const { slug } = useParams();
  const [post, setPost] = useState<Postt | null>(null);
  console.log(slug);
  useEffect(() => {
    if (slug) {
      axios
        .get(`https://dummyjson.com/posts/${slug}`)
        .then((response) => {
          setPost(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [slug]);
  if (!post) return <div className="text-center mt-8">Loading...</div>;
  //if (error) return <div className="text-center mt-8 text-red-500">Error loading posts: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose lg:prose-xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <span className="mx-2">•</span>
          <span>{post.views} views</span>
        </div>
        <div className="mb-6">
          {post.tags.map((tag, index) => (
            <span key={index} className="mr-2 bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-lg text-gray-800 leading-relaxed">{post.body}</p>
        <div className="flex items-center text-gray-500 text-sm mt-6">
          <span>{post.reactions.likes} Likes</span>
          <span className="mx-2">•</span>
          <span>{post.reactions.dislikes} Dislikes</span>
        </div>
      </article>
    </div>
  );
}
