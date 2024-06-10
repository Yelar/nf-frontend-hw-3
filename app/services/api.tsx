import axios from 'axios';
import { PostResponse } from '../types/index';

const api = axios.create({
  baseURL: 'https://dummyjson.com', // Example base URL
});

export const fetchPosts = async (): Promise<PostResponse> => {
  try {
    const response = await api.get<PostResponse>('/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

