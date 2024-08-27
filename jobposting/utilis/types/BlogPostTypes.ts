// types/BlogPost.ts

export interface Author {
    _id: string;
    name: string;
    email: string;
    image: string;
    role: string;
}

export interface BlogPost {
    _id: string;
    image: string;
    title: string;
    description: string;
    author: Author | null;
    isPending: boolean;
    tags: string[];
    likes: number;
    relatedBlogs: string[];
    skills: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}