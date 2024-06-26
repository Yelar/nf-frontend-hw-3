export interface Reaction {
    likes: number;
    dislikes: number;
  }
  
  export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reaction;
    views: number;
    userId: number;
  }
  
  export interface PostResponse {
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
  }
  