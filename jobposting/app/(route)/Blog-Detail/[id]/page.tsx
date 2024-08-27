"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import fetchBlogById from "@/utilis/fetch/FetchBlogById";
import { BlogPost } from "@/utilis/types/BlogPostTypes";
import Image from "next/image";
import BackButton from "@/components/Back/back";

const BlogDetailPage: React.FC = () => {
  const params = useParams();
  const id = params.id as string;

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBlogById(id);
        if (!response) {
          setError("Blog not found");
        } else {
          setBlog(response);
        }
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError("An error occurred while fetching the blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>No blog found.</div>;
  }

  return (
    <div className="flex flex-col items-center w-full mt-20">
      <BackButton />
      <div className="w-4/6 text-center">
        <h1 className="font-normal text-[48px]">{blog.title}</h1>
        <div className="space-x-3 mb-10">
          {blog.tags.map((tag) => (
            <span className="font-normal text-[14px]" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="relative w-full h-[400px] content-center">
          <Image
            src={blog.image || "/assets/Rectangle 130.png"}
            alt="author-image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className=" rounded-full flex justify-center flex-row mt-8">
          <div className="w-14 h-14">
            <Image
              src={blog.author?.image || "/assets/user.png"}
              alt="blog-image"
              width={1}
              height={1}
              layout="responsive"
              className="rounded-full object-fill"
            />
          </div>
        </div>
        {/* </div> */}
        <div className="text-center mt-2 flex justify-center gap-3">
          <p>{blog.author?.name || "User is unknown"}</p>
          <p>|</p>
          <p>{blog.author?.email}</p>
          {/* </div> */}
        </div>

        <div className="mt-9">
          <p className="font-normal text-[32px]">{blog.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
